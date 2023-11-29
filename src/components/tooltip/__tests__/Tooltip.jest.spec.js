import { shallowMount } from '@vue/test-utils';

import VsTooltip from '../Tooltip.vue';

const slotText = 'Tooltip content';

const factoryShallowMount = (propsData) => shallowMount(VsTooltip, {
    slots: {
        default: slotText,
    },
    propsData: {
        title: 'Bus',
        ...propsData,
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VsTooltip', () => {
    it('should render a vs-button-stub element', () => {
        const tooltip = wrapper.find('vs-button-stub');

        expect(tooltip.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':title - should accept and render a `data-original-title` property', () => {
            expect(wrapper.attributes('data-original-title')).toBe('Bus');
        });
    });
});
