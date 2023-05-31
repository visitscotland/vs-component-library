import { mount, shallowMount } from '@vue/test-utils';

import VsContainer from '../Container.vue';

const slotText = 'Container text';

const factoryMount = () => mount(VsContainer, {
    slots: {
        default: slotText,
    },
    attrs: {
        style: 'background: #ccc',
    },
});

const factoryShallowMount = () => shallowMount(VsContainer, {
    slots: {
        default: slotText,
    },
    attrs: {
        style: 'background: #ccc',
    },
});

describe('VsContainer', () => {
    it('should render a bcontainer-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-CONTAINER-STUB');
    });

    describe(':attrs', () => {
        it('should accept and render attributes', () => {
            // BContainer now maps hex colours to rgb values, #ccc and rgb(204,204,204)
            // are equivalent.

            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('style')).toBe('background: rgb(204, 204, 204);');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
