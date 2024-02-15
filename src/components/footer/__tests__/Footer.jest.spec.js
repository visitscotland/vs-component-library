import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFooterAccordionItem from '../Footer.vue';

config.global.renderStubDefaultSlot = true;

const socialSlot = 'Social menu';
const accordionSlot = 'Accordion items';

const factoryShallowMount = (propsData) => shallowMount(VsFooterAccordionItem, {
    propsData: {
        ...propsData,
    },
    slots: {
        'social-menu': socialSlot,
        'accordion-items': accordionSlot,
    },
});

describe('VsFooter', () => {
    it('should render a component with the data-unique-id attribute `vs-footer`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-unique-id')).toBe('vs-footer');
    });

    describe(':slots', () => {
        it('renders content inserted into the `social-menu` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(socialSlot);
        });

        it('renders content inserted into the default `accordion-items` slot', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.text()).toContain(accordionSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
