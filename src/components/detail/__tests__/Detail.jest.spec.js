import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsDetail from '../Detail.vue';

const slotText = 'Detail content';

const factoryShallowMount = (propsData) => shallowMount(VsDetail, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
    },
});

describe('VsDetail', () => {
    it('should render a p element with the class `vs-detail`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('P');
        expect(wrapper.classes('vs-detail')).toBe(true);
        expect(wrapper.classes()).toContain('vs-detail--medium');
        expect(wrapper.classes()).toContain('vs-detail--primary');
        expect(wrapper.classes()).toContain('vs-detail--with-margins');
    });

    describe(':props', () => {
        it('should accept and render a `size` prop', () => {
            const wrapper = factoryShallowMount({
                size: 'large',
            });

            expect(wrapper.classes()).toContain('vs-detail--large');
        });

        it('should accept and render a `color` prop', () => {
            const wrapper = factoryShallowMount({
                color: 'secondary',
            });

            expect(wrapper.classes()).toContain('vs-detail--secondary');
        });

        it('removes margin class when noMargins is true', () => {
            const wrapper = factoryShallowMount({
                noMargins: true,
            });

            expect(wrapper.classes()).not.toContain('vs-detail--with-margins');
        });
    });

    describe('slots:', () => {
        it('should render content inserted into `default` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(slotText);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
