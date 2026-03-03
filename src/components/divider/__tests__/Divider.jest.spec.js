import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsDivider from '@components/divider/Divider.vue';

const factoryShallowMount = (propsData) => shallowMount(VsDivider, {
    propsData: {
        ...propsData,
    },
});

describe('VsDivider', () => {
    it('should render a hr element with the class `vs-divider`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('HR');
        expect(wrapper.classes('vs-divider')).toBe(true);
        expect(wrapper.classes()).toContain('vs-divider--variant-primary');
    });

    describe(':props', () => {
        it('should accept and render a `variant` prop', () => {
            const wrapper = factoryShallowMount({
                variant: 'secondary',
            });

            expect(wrapper.classes()).toContain('vs-divider--variant-secondary');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
