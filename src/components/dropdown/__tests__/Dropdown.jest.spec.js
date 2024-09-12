import { shallowMount } from '@vue/test-utils';

import VsDropdown from '../Dropdown.vue';

const slotContent = 'Slot Content';

const factoryShallowMount = (propsData) => shallowMount(VsDropdown, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

let wrapper;

beforeEach(() => {
    wrapper = factoryShallowMount();
});

describe('VSDropdown', () => {
    it('should render a bdropdown-stub', () => {
        const dropdown = wrapper.find('b-dropdown-stub');

        expect(dropdown.exists()).toBe(true);
    });
});
