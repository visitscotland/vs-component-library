import { mount, shallowMount } from '@vue/test-utils';

import VsCol from '../Col.vue';

const slotText = 'Col text';

const factoryShallowMount = () => shallowMount(VsCol, {
    slots: {
        default: slotText,
    },
    attrs: {
        class: 'cols-6 sm-12',
    },
});

const factoryMount = () => mount(VsCol, {
    slots: {
        default: slotText,
    },
    attrs: {
        class: 'cols-6 sm-12',
    },
});

describe('VsCol', () => {
    it('should render a bcol-stub', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('B-COL-STUB');
    });

    describe(':attrs', () => {
        it('should accept and render attributes', () => {
            const wrapper = factoryShallowMount();

            expect([
                wrapper.classes('cols-6'),
                wrapper.classes('sm-12'),
            ]).toEqual([
                true, true,
            ]);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
