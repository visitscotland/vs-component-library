import { config, shallowMount } from '@vue/test-utils';

import VsTableBody from '../TableBody.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'A table body goes here';

const factoryShallowMount = (propsData) => shallowMount(VsTableBody, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

describe('VsTableBody', () => {
    it('should render a btbody-stub', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('B-TBODY-STUB');
    });

    describe(':slots', () => {
        const wrapper = factoryShallowMount();
        it('renders content inserted into the default `slot`', () => {
            expect(wrapper.text()).toContain(slotContent);
        });
    });
});
