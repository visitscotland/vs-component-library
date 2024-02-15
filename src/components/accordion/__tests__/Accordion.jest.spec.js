import { shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsAccordion from '../Accordion.vue';

const defaultSlot = 'Default Slot';

const factoryShallowMount = (propsData) => shallowMount(VsAccordion, {
    propsData: {
        ...propsData,
    },
});

describe('VsAccordion', () => {
    it('should render accordion', () => {
        const wrapper = factoryShallowMount();
        const Accordion = wrapper.find('div[data-test=vs-accordion]');

        expect(Accordion.exists()).toBe(true);
    });

    describe('slots:', () => {
        it('should render content inserted into `default` slot', () => {
            const wrapper = shallowMount(VsAccordion, {
                slots: {
                    default: defaultSlot,
                },
            });

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
