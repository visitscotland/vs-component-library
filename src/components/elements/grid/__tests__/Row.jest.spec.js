import { mount, shallowMount } from '@vue/test-utils';

import VsRow from '../Row.vue';

const slotText = 'Row text';

const factoryMount = () => mount(VsRow, {
    slots: {
        default: slotText,
    },
});

const factoryShallowMount = () => shallowMount(VsRow, {
    slots: {
        default: slotText,
    },
});

describe('VsButton', () => {
    it('should render a brow-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-ROW-STUB');
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
