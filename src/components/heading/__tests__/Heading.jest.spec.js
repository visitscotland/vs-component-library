import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsHeading from '../Heading.vue';

const defaultSlot = 'Default Slot';

const factoryShallowMount = (propsData) => shallowMount(VsHeading, {
    propsData: {
        headingStyle: 'heading-l',
        ...propsData,
    },
    slots: {
        default: defaultSlot,
    },
});

describe('VsHeading', () => {
    it('should render a h1 by default', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('H1');
        expect(wrapper.classes('vs-heading')).toBe(true);
    });

    describe(':props', () => {
        it(':level - should accept and render a `level` prop', () => {
            const wrapper = factoryShallowMount({
                level: 2,
            });

            expect(wrapper.element.tagName).toBe('H2');
        });

        it(':id - should use contain an matching `id` attribute if the prop is provided', () => {
            const wrapper = factoryShallowMount({
                id: 'heading-id-attribute',
            });

            expect(wrapper.attributes().id).toBe('heading-id-attribute');
        });

        it(':id - should not have an `id` attribute if the prop is `null`', () => {
            const wrapper = factoryShallowMount({
                id: null,
            });

            expect(wrapper.attributes().id).toBe(undefined);
        });

        it(':headingStyle - should accept and render the correct `headingStyle` class', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.classes('vs-heading--heading-l')).toBe(true);
        });
    });

    describe('slots:', () => {
        it('should render content inserted into `default` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(defaultSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
