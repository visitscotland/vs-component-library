import { shallowMount } from '@vue/test-utils';

import VsSummaryBoxListItem from '../SummaryBoxListItem.vue';

const slotContent = 'Slot Content';

const factoryShallowMount = (propsData) => shallowMount(VsSummaryBoxListItem, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

describe('VsSummaryBoxListItem', () => {
    it('should render a component with the data-test attribute `vs-summary-box-list-item`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-summary-box-list-item');
    });

    describe(':props', () => {
        it('should accept and render a `text` property', () => {
            const wrapper = factoryShallowMount({
                text: 'Test text',
            });

            expect(wrapper.text()).toContain('Test text');
        });

        it('should accept and render a `label` property', () => {
            const wrapper = factoryShallowMount({
                label: 'Test label',
            });

            expect(wrapper.text()).toContain('Test label');
        });

        it('should accept and render an `icon` property', () => {
            const wrapper = factoryShallowMount({
                icon: 'fa-regular fa-car-side',
            });

            const vsIcon = wrapper.find('vs-icon-stub');

            expect(vsIcon.attributes('icon')).toBe('fa-regular fa-car-side');
        });

        it('if an `icon` property is set, should accept and render an `iconLabel` properly', () => {
            const wrapper = factoryShallowMount({
                icon: 'fa-regular fa-car-side',
                iconLabel: 'A car',
            });

            expect(wrapper.text()).toContain('A car');
        });
    });
});
