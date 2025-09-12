import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSectionHeader from '../SectionHeader.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsSectionHeader, {
    propsData: {
        heading: 'Test Heading',
        ...propsData,
    },
});

describe('VsSectionHeader', () => {
    it('should render section header', () => {
        const wrapper = factoryShallowMount();
        const sectionHeader = wrapper.find('div[data-test=vs-section-header]');

        expect(sectionHeader.exists()).toBe(true);
        expect(wrapper.classes('vs-section-header')).toBe(true);
    });

    describe(':props', () => {
        it(':heading - should render the heading text', () => {
            const testHeading = 'Test Section Heading';
            const wrapper = factoryShallowMount({
                heading: testHeading,
            });

            expect(wrapper.text()).toContain(testHeading);
        });

        it(':anchorId - should set id on heading when provided', () => {
            const testId = 'test-anchor';
            const wrapper = factoryShallowMount({
                anchorId: testId,
            });
            const heading = wrapper.findComponent({
                name: 'VsHeading',
            });

            expect(heading.props('id')).toBe(testId);
        });

        it(':anchorId - should not set id when not provided', () => {
            const wrapper = factoryShallowMount();
            const heading = wrapper.findComponent({
                name: 'VsHeading',
            });

            expect(heading.props('id')).toBe(null);
        });
    });

    describe(':slots', () => {
        it('should render lede content in section-header-lede slot', () => {
            const ledeText = 'This is lede text';
            const wrapper = shallowMount(VsSectionHeader, {
                propsData: {
                    heading: 'Test Heading',
                },
                slots: {
                    'section-header-lede': ledeText,
                },
            });

            expect(wrapper.text()).toContain(ledeText);
        });

        it('should render actions in section-header-actions slot', () => {
            const actionText = 'Action Button';
            const wrapper = shallowMount(VsSectionHeader, {
                propsData: {
                    heading: 'Test Heading',
                },
                slots: {
                    'section-header-actions': actionText,
                },
            });

            expect(wrapper.text()).toContain(actionText);
        });

        it('should not render VsBody when lede slot is empty', () => {
            const wrapper = factoryShallowMount();
            const body = wrapper.findComponent({
                name: 'VsBody',
            });

            expect(body.exists()).toBe(false);
        });

        it('should not render actions div when actions slot is empty', () => {
            const wrapper = factoryShallowMount();
            const actionsDiv = wrapper.find('div[data-test=vs-section-header__actions]');

            expect(actionsDiv.exists()).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
