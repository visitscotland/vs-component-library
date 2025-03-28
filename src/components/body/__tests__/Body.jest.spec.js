import { shallowMount } from '@vue/test-utils';

import VsBody from '../Body.vue';

const slotText = 'Body content';

const factoryShallowMount = (propsData) => shallowMount(VsBody, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
    },
});

describe('VsBody', () => {
    it('should render a div with the class `vs-body`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.classes('vs-body')).toBe(true);
    });

    describe(':props', () => {
        it(':variant - should accept and render a `variant` prop', () => {
            const testVariant = 'lead';
            const wrapper = factoryShallowMount({
                variant: testVariant,
            });

            expect(wrapper.classes('vs-body--lead')).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });
});
