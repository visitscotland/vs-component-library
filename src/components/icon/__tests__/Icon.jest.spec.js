import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIcon from '../Icon.vue';

const factoryShallowMount = (propsData) => shallowMount(VsIcon, {
    propsData: {
        ...propsData,
        name: 'accessparkdrop',
    },
});

describe('VsIcon', () => {
    it('should render a font awesome icon', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.element.tagName).toBe('I');
    });

    describe(':props', () => {
        it(':name - should render the VsIcon with the correct class', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.attributes('class')).toContain('facility-accessparkdrop');
        });

        it(':variant - should accept and render variants as props', () => {
            const testVariant = 'inverse';
            const wrapper = factoryShallowMount({
                variant: testVariant,
            });

            expect(wrapper.classes(`vs-icon--variant-${testVariant}`)).toBe(true);
        });

        it(':orientation - should accept and render orientations as props', () => {
            const testOrientation = 'down';
            const wrapper = factoryShallowMount({
                orientation: testOrientation,
            });

            expect(wrapper.classes(`icon--${testOrientation}`)).toBe(true);
        });

        it(':size - should accept and render sizes as props', () => {
            const testSize = 'lg';
            const wrapper = factoryShallowMount({
                size: testSize,
            });

            expect(wrapper.classes(`vs-icon--size-${testSize}`)).toBe(true);
        });

        it(':smallSize - should accept and render smallSizes as props', () => {
            const testSize = 'xs';
            const wrapper = factoryShallowMount({
                smallSize: testSize,
            });

            expect(wrapper.classes(`vs-icon--sm-size-${testSize}`)).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
