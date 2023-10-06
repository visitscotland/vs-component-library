import { shallowMount, config } from '@vue/test-utils';
import VsGuestSelectorNumberGroup from '../GuestSelectorNumberGroup.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsGuestSelectorNumberGroup, {
    propsData: {
        adultCount: 2,
        childrenCount: 0,
        count: 2,
        disabled: false,
        id: '17ec8af2-a0c9-4fa4-87d5-0b2a62390ab0',
        infantCount: 0,
        inputType: {
            minCount: 1,
            maxCount: 30,
            count: 2,
            name: 'r1a',
            unitLabel: 'Adults',
        },
        maxValue: 30,
        minValue: 1,
        name: 'r1a',
        rowName: 'Adults',
        rowLabel: 'r1',
        unitRemoved: false,
    },
});

describe('VsGuestSelectorNumberGroup', () => {
    it('should render a component with the data-test attribute `vs-guest-selector`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-guest-selector-number-group');
    });
});
