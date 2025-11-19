import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFedSearchSort from '../FedSearchSort.vue';

const factoryMount = (propsData) => mount(VsFedSearchSort, {
    ...propsData,
    propsData: {
        fromDateLabel: 'From',
        toDateLabel: 'To',
        sortLabel: 'Sort by',
        sortOptions: [
            {
                key: 'date',
                label: 'Date',
            },
            {
                key: 'price',
                label: 'Price',
            },
        ],
    },
});

describe('VsFedSearchSort', () => {
    it('should render an element with the class `vs-fed-search-sort`', () => {
        const wrapper = factoryMount();
        expect(wrapper.classes()).toContain('vs-fed-search-sort');
    });

    it('should not by default render the date pickers', async() => {
        const wrapper = factoryMount();

        const datePickerFrom = wrapper.find('#vs-fed-search-sort__from-date');
        const datePickerTo = wrapper.find('#vs-fed-search-sort__to-date');

        expect(datePickerFrom.exists()).toBe(false);
        expect(datePickerTo.exists()).toBe(false);
    });

    it('should render the sort dropdown', async() => {
        const wrapper = factoryMount();

        const sortDropdown = wrapper.find('#vs-fed-search-sort__dropdown');

        expect(sortDropdown.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render the date pickers when prop is true', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
            });

            const datePickerFrom = wrapper.find('#vs-fed-search-sort__from-date');
            const datePickerTo = wrapper.find('#vs-fed-search-sort__to-date');

            expect(datePickerFrom.exists()).toBe(true);
            expect(datePickerTo.exists()).toBe(true);
        });

        it('should render the label for the `from` picker when populated', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
                fromDateLabel: 'From',
            });

            const datePickerLabel = wrapper.find('[data-test="vs-fed-search-sort__from-date-label"]');

            expect(datePickerLabel.exists()).toBe(true);
        });

        it('should render the label for the `to` picker when populated', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
                toDateLabel: 'to',
            });

            const datePickerLabel = wrapper.find('[data-test="vs-fed-search-sort__to-date-label"]');

            expect(datePickerLabel.exists()).toBe(true);
        });

        it('should not render the default label for the `sortBy` dropdown when populated ', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
                sortLabel: 'ThisIsTheSortingOption',
            });

            const sortLabel = wrapper.find('#vs-fed-search-sort__dropdown');
            expect(sortLabel.text()).toBe('ThisIsTheSortingOption');
        });
    });

    describe(':emits', () => {
        it('should emit when `from date` is visible and the date is changed', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
            });

            const datePickerFrom = wrapper.find('#vs-fed-search-sort__from-date');
            await datePickerFrom.setValue('2025-07-28');

            expect(wrapper.emitted('from-date-updated')).toBeTruthy();
        });

        it('should emit when `to date` is visible and the date is changed', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                dateFilterVisible: true,
            });

            const datePickerFrom = wrapper.find('#vs-fed-search-sort__to-date');
            await datePickerFrom.setValue('2025-07-28');

            expect(wrapper.emitted('end-date-updated')).toBeTruthy();
        });

        it('should emit when a sort option is clicked', async() => {
            const wrapper = factoryMount();
            await wrapper.setProps({
                sortOptions: [
                    {
                        id: 'date',
                        label: 'Date',
                    },
                    {
                        id: 'price',
                        label: 'Price',
                    },
                ],
            });

            const dropdown = wrapper.find('#vs-fed-search-sort__dropdown');
            await dropdown.trigger('click');

            const dropdownItem = wrapper.find('[data-test="vs-fed-search-sort__dropdown-item--date"]');
            expect(dropdownItem.exists()).toBe(true);
            await dropdownItem.trigger('click');

            expect(wrapper.emitted('sort-order-updated')).toBeTruthy();
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                dateFilterVisible: true,
                fromDateLabel: 'From',
                toDateLabel: 'To',
                sortLabel: 'Sort',
                sortOptions: [
                    {
                        id: 'date',
                        label: 'Date',
                    },
                    {
                        id: 'price',
                        label: 'Price',
                    },
                ],
            });

            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
