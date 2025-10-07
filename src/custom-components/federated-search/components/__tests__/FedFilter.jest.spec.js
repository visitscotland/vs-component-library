import { mount, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFedFilter from '../FedFilter.vue';

const factoryShallowMount = (propsData) => shallowMount(VsFedFilter, {
    ...propsData,
    propsData: {
        variant: 'primary',
        scrollButtons: false,
        wrap: false,
        filterCategories: [
            {
                id: 'filter1',
                Key: 'Filter One',
                icon: 'fa-regular fa-star',
            },
        ],
    },
});

describe('VsFedFilter', () => {
    it('should render an element with the class `vs-fed-filter`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.classes()).toContain('vs-fed-filter');
    });

    it('should render the scroll rail', () => {
        const wrapper = factoryShallowMount();
        const scrollRail = wrapper.find('#vs-fed-filter__scroll-rail--primary');

        expect(scrollRail.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render in the secondary filter style when variant === secondary', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                variant: 'secondary',
            });

            const scrollRail = wrapper.find('#vs-fed-filter__scroll-rail--secondary');

            expect(scrollRail.exists()).toBe(true);
        });

        it('should render in the wrap style when wrap is true', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                wrap: true,
            });

            const scrollRail = wrapper.find('.vs-fed-filter__scroll-rail--wrap');

            expect(scrollRail.exists()).toBe(true);
        });

        it('should not render in the wrap style when wrap is false', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                wrap: false,
            });

            const scrollRail = wrapper.find('.vs-fed-filter__scroll-rail--wrap');

            expect(scrollRail.exists()).toBe(false);
        });

        it('should render in the scroll rail buttons when prop is true', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                scrollButtons: true,
            });

            const btnLeft = wrapper.find('[data-test="vs-fed-filter__scroll-button--left"]');
            const btnRight = wrapper.find('[data-test="vs-fed-filter__scroll-button--right"]');

            expect(btnLeft.exists()).toBe(true);
            expect(btnRight.exists()).toBe(true);
        });

        it('should render an icon on the button when filter is primary and prop is passed', async() => {
            const wrapper = factoryShallowMount();
            const icon = wrapper.find('[icon="fa-regular fa-star"]');
            expect(icon.exists()).toBe(true);
        });

        it('should not render an icon on the button when filter is secondary and prop is passed', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                variant: 'secondary',
            });
            const icon = wrapper.find('[icon="fa-regular fa-star"]');
            expect(icon.exists()).toBe(false);
        });

        it('should render filter button as primary when activeFilter === filter', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                activeFilter: 'Filter One',
            });

            const button = wrapper.find('[variant="primary"]');
            expect(button.exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('should render text in the header slot', () => {
            const wrapper = mount(VsFedFilter, {
                propsData: {
                    wrap: false,
                },
                slots: {
                    'fed-filter-header': 'Header text',
                },
            });

            const header = wrapper.find('[data-test="vs-fed-filter__header"]');
            expect(header.exists()).toBe(true);
        });

        it('should not render text in the header slot if it\'s not populated', () => {
            const wrapper = mount(VsFedFilter, {
                propsData: {
                    wrap: false,
                },
            });

            const header = wrapper.find('[data-test="vs-fed-filter__header"]');
            expect(header.exists()).toBe(false);
        });
    });

    describe(':emits', () => {
        it('should emit `filter-updated` when filter is pressed', async() => {
            const wrapper = mount(VsFedFilter, {
                propsData: {
                    wrap: false,
                    filterCategories: [
                        {
                            id: 'nature_outdoor',
                            Key: 'Nature & Outdoor',
                            icon: 'fa-kit fa-vs-landscape',
                        },
                        {
                            id: 'history_culture',
                            Key: 'History & Culture',
                            icon: 'fa-regular fa-chess-rook',
                        },
                    ],
                },
            });

            const dropdown = wrapper.find('[data-test="vs-fed-filter__category-button--nature_outdoor"]');
            await dropdown.trigger('click');

            expect(wrapper.emitted('filter-updated')).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
