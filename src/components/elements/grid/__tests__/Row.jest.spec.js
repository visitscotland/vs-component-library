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
    it('should render a div with class `row`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.classes()).toContain('row');
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
