import { config, shallowMount } from '@vue/test-utils';

import VsTableRow from '../TableRow.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'A table row goes here';

const factoryShallowMount = (propsData) => shallowMount(VsTableRow, {
    propsData: {
        ...propsData,
    },
    slots: {
        default: slotContent,
    },
});

describe('VsTableRow', () => {
    it('should render a BTR-STUB', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('B-TR-STUB');
    });

    describe(':slots', () => {
        const wrapper = factoryShallowMount();
        it('renders content inserted into the default `slot`', () => {
            expect(wrapper.text()).toContain(slotContent);
        });
    });
});
