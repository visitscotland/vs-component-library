import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsList from '../List.vue';

const slotText = '<li>List text</li>';

const factoryShallowMount = (propsData) => shallowMount(VsList, {
    slots: {
        default: slotText,
    },
    propsData: {
        ...propsData,
    },
});

describe('VsList', () => {
    it('should render an ol with the class `vs-list` if the prop `ordered` is truthy', () => {
        const wrapper = factoryShallowMount({
            ordered: true,
        });

        expect(wrapper.element.tagName).toBe('OL');
        expect(wrapper.classes('vs-list')).toBe(true);
    });

    it('should render a ul with the class `vs-list` if the prop `ordered` is not truthy', () => {
        const wrapper = factoryShallowMount({
            ordered: false,
        });

        expect(wrapper.element.tagName).toBe('UL');
        expect(wrapper.classes('vs-list')).toBe(true);
    });

    describe(':props', () => {
        it(':unstyled - should accept and render an `unstyled` property', () => {
            const wrapper = factoryShallowMount({
                unstyled: true,
            });

            expect(wrapper.classes('vs-list--unstyled')).toBe(true);
        });

        it(':inline - should accept and render an `inline` property', () => {
            const wrapper = factoryShallowMount({
                inline: true,
            });

            expect(wrapper.classes('vs-list--inline')).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted into default `slot`', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain('List text');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
