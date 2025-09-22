import { factoryMount, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFedFilter from '../FedFilter.vue';

const factoryShallowMount = (propsData) => shallowMount(VsFedFilter, {
    ...propsData,
    propsData: {
        variant: 'primary',
        scrollButtons: false,
        filterCategories: [
            {
                id: 'filter1',
                label: 'Filter One',
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
        const scrollRail = wrapper.find('#vs-fed-filter--scroll-rail_primary');

        expect(scrollRail.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render in the secondary filter style when variant === secondary', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                variant: 'secondary',
            });

            const scrollRail = wrapper.find('#vs-fed-filter--scroll-rail_secondary');

            expect(scrollRail.exists()).toBe(true);
        });

        it('should render in the scroll rail buttons when prop is true', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                scrollButtons: true,
            });

            const btnLeft = wrapper.find('.vs-fed-filter--scroll-button__left');
            const btnRight = wrapper.find('.vs-fed-filter--scroll-button__right');

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
                activeFilter: 'filter1',
            });

            console.log(wrapper.html());
            const button = wrapper.find('[variant="primary"]');
            expect(button.exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
