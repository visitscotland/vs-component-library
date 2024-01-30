import {
    config, shallowMount, mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsFooterAccordionItem from '../FooterAccordionItem.vue';

config.global.renderStubDefaultSlot = true;

const slotContent = 'Default slot content';
const iconOpenSlotContent = 'An open icon';
const iconClosedSlotContent = 'A closed icon';

function mountOptions(propsData) {
    return {
        propsData: {
            ...propsData,
            title: 'Accordion title',
            controlId: '123',
        },
        slots: {
            default: slotContent,
            'icon-open': iconOpenSlotContent,
            'icon-closed': iconClosedSlotContent,
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsFooterAccordionItem,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsFooterAccordionItem,
    mountOptions(propsData),
);

describe('VsFooterAccordionItem', () => {
    it('should render a component with the data-test attribute `vs-footer-accordion-item`', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-footer-accordion-item');
    });

    describe(':props', () => {
        it('should accept and render a `title` property', async() => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain('Accordion title');
        });
    });

    describe(':slots', () => {
        it('renders content inserted into the default slot', () => {
            const wrapper = factoryMount();

            expect(wrapper.text()).toContain(slotContent);
        });

        it('renders content inserted into the default `icon-open` slot when open', () => {
            const wrapper = factoryMount({
                openByDefault: true,
            });

            expect(wrapper.text()).toContain(iconOpenSlotContent);
        });

        it('renders content inserted into the default `icon-closed` slot when closed', () => {
            const wrapper = factoryMount({
                openByDefault: false,
            });

            expect(wrapper.text()).toContain(iconClosedSlotContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
