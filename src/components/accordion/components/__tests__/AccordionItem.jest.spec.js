import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsAccordionItem from '../AccordionItem.vue';

const titleSlot = 'Item Title';

const factoryMount = (propsData) => mount(VsAccordionItem, {
    propsData: {
        ...propsData,
        controlId: '1234',
    },
    slots: {
        title: titleSlot,
    },
});

describe('VsAccordionItem', () => {
    it('should render accordionItem', () => {
        const wrapper = factoryMount();

        const accordionItem = wrapper.find('[data-test=vs-accordion__item]');
        const accordionItemHeader = wrapper.find('[data-test=vs-accordion__item-header]');
        const accordionItemTitle = wrapper.find('[data-test=vs-accordion__item-title]');
        const accordionItemBody = wrapper.find('[data-test=vs-accordion__item-body]');

        expect(accordionItem.exists()).toBe(true);
        expect(accordionItemHeader.exists()).toBe(true);
        expect(accordionItemTitle.exists()).toBe(true);
        expect(accordionItemBody.exists()).toBe(true);
    });

    describe(':props', () => {
        it(':controlId should be assigned to panel id', () => {
            const wrapper = factoryMount();

            const accordionItemBody = wrapper.find('[data-test=vs-accordion__item-body]');

            expect(accordionItemBody.attributes('id')).toBe('1234');
        });

        it(':itemBreakPoint assigns accordion class name', () => {
            const wrapper = factoryMount({
                itemBreakPoint: 'sm',
            });

            const accordionToggle = wrapper.findComponent({
                name: 'VsAccordionToggle',
            });

            expect(accordionToggle.classes()).toContain('d-sm-none');
        });

        it(':openByDefault - to open or close accordion by default', () => {
            const wrapper = factoryMount({
                openByDefault: false,
            });

            const accordionItemBody = wrapper.findComponent({
                name: 'VsAccordionToggle',
            });
            expect(accordionItemBody.classes()).toContain('d-lg-none');
        });

        it(':variant assigns variant to VsAccordionToggle', () => {
            const wrapper = factoryMount({
                variant: 'secondary',
            });

            const accordionItemBody = wrapper.findComponent({
                name: 'VsAccordionToggle',
            });

            expect(accordionItemBody.props('variant')).toBe('secondary');
        });

        it(':should render a colour badge if `colourBadge` prop is set', () => {
            const wrapper = factoryMount({
                colourBadge: 'red',
            });

            const badge = wrapper.find('[data-test=vs-accordion-item__card-colour-badge]');

            expect(badge.exists()).toBe(true);
        });

        it(':headingLevel - changes the heading to the corresponsing level', async() => {
            const wrapper = factoryMount({
                slots: {
                    'vs-module-wrapper-heading': 'Module wrapper heading',
                },
            });

            await wrapper.setProps({
                headingLevel: 3,
            });

            expect(wrapper.find('h3').exists()).toBe(true);
        });

        it(':headingLevel - checks the default headingLevel renders by default', () => {
            const wrapper = factoryMount({
                slots: {
                    'vs-module-wrapper-heading': 'Module wrapper heading',
                },
            });

            expect(wrapper.find('h2').exists()).toBe(true);
        });
    });

    describe(':methods', () => {
        it(':onButtonClick should toggle accordion', async() => {
            const wrapper = mount(VsAccordionItem, {
                props: {
                    openByDefault: true,
                    controlId: '1234',
                },
            });

            const accordionToggle = wrapper.find('.vs-accordion-toggle');
            expect(accordionToggle.attributes('aria-expanded')).toBe('true');

            await accordionToggle.trigger('click');

            expect(accordionToggle.attributes('aria-expanded')).toBe('false');
        });
    });

    describe('slots:', () => {
        it('should render content inserted into title slot', () => {
            const wrapper = factoryMount();
            expect(wrapper.text()).toContain(titleSlot);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();

            const accordionToggle = wrapper.find('.vs-accordion-toggle');
            await accordionToggle.trigger('click');

            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
