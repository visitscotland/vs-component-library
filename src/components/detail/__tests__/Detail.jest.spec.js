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
    it('should render a div with the class `vs-detail`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.element.tagName).toBe('P');
        expect(wrapper.classes('vs-detail')).toBe(true);
        expect(wrapper.classes()).toContain('vs-detail--medium');
    });

    describe(':props', () => {
        it(':size - should accept and render a `size` prop', () => {
            const wrapper = factoryShallowMount({
                size: 'large',
            });

            expect(wrapper.classes()).toContain('vs-detail--large');
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
