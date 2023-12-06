import { shallowMount, config } from '@vue/test-utils';
import VsGuestSelectorRow from '../GuestSelectorRow.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = () => shallowMount(VsGuestSelectorRow, {
    propsData: {
        name: 'r1',
        showRemoveBtn: false,
        unitLabel: 'Room 1',
        unitOptions: {
            id: '17ec8af2-a0c9-4fa4-87d5-0b2a62390ab0',
            showRemoveBtn: false,
            numberGroups: {
                adults: {
                    minCount: 1,
                    maxCount: 30,
                    count: 2,
                    name: 'r1a',
                    unitLabel: 'Adults',
                },
                children: {
                    minCount: 0,
                    maxCount: 30,
                    count: 0,
                    name: 'r1children',
                    unitLabel: 'Children (2+)',
                },
                infants: {
                    minCount: 0,
                    maxCount: 30,
                    count: 0,
                    name: 'r1infants',
                    unitLabel: 'Infants (0-2)',
                },
            },
        },
        unitRemoved: false,
    },
});

describe('VsGuestSelectorRow', () => {
    it('should render a component with the data-test attribute `vs-guest-selector-row`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.attributes('data-test')).toBe('vs-guest-selector-row');
    });
});
