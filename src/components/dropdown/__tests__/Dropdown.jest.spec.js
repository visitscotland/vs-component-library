import { mount, shallowMount } from '@vue/test-utils';

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

const factoryMount = (propsData) => mount(VsDropdown, {
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

    describe(':props', () => {
        it(':variant - should accept and render variants as props', async() => {
            const testVariant = 'secondary';
            wrapper = factoryMount({
                variant: testVariant,
            });

            const btn = wrapper.find(`.btn-${testVariant}`);

            expect(btn.exists()).toBe(true);
        });
    });
});
