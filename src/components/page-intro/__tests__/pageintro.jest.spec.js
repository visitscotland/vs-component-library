import { config, shallowMount } from '@vue/test-utils';
import VsPageIntro from '../PageIntro.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (slotData) => shallowMount(VsPageIntro, {
    propsData: {
        background: 'grey',
        simpleIntro: false,
        fullscreenMobile: false,
    },
    ...slotData,
});

describe('VsPageIntro', () => {
    describe(':props', () => {
        const wrapper = factoryShallowMount();
        it('should render the correct class for the supplied background prop', () => {
            expect(wrapper.find('[data-test="vs-page-intro"]').classes()).toContain('vs-page-intro--grey');
        });

        it('should render the correct class for the simpleIntro prop', async() => {
            await wrapper.setProps({
                heroIntro: true,
            });
            expect(wrapper.find('[data-test="vs-page-intro"]').classes()).toContain('vs-page-intro--hero');
        });

        it('should not render the mobile breadcrumb container if `fullscreenMobile` is false', async() => {
            expect(wrapper.find('[data-test="vs-page-intro__mobile-breadcrumb"]').exists()).toBe(false);
        });

        it('should render the mobile breadcrumb container if `fullscreenMobile` is true', async() => {
            await wrapper.setProps({
                fullscreenMobile: true,
            });

            expect(wrapper.find('[data-test="vs-page-intro__mobile-breadcrumb"]').exists()).toBe(true);
        });

        it('should render the content column with a width of 7', async() => {
            await wrapper.setProps({
                heroIntro: false,
                hasToc: true,
            });

            expect(wrapper.find('[data-test="vs-page-intro__content"]').attributes('md')).toBe('7');
        });
    });

    describe(':slots', () => {
        it('should render hero slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-hero': '<div>This is the hero slot content</div>',
                },
            });

            expect(wrapper.find('[data-test="vs-page-intro"]').html()).toContain('<div>This is the hero slot content</div>');
        });

        it('should render breadcrumb slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-breadcrumb': '<div>This is the breadcrumb slot content</div>',
                },
            });
            expect(wrapper.html()).toContain('<div>This is the breadcrumb slot content</div>');
        });

        it('should render share button slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-share-button': '<div>This is the share button slot content</div>',
                },
            });
            expect(wrapper.html()).toContain('<div>This is the share button slot content</div>');
        });

        it('should render title slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-heading': '<div>This is the title slot content</div>',
                },
            });
            expect(wrapper.html()).toContain('<div>This is the title slot content</div>');
        });

        it('should render introduction slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-content': '<div>This is the intro content slot content</div>',
                },
            });
            expect(wrapper.html()).toContain('<div>This is the intro content slot content</div>');
        });

        it('should render summary box slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-summary-box': '<div>This is the summary box slot content</div>',
                },
            });
            expect(wrapper.html()).toContain('<div>This is the summary box slot content</div>');
        });

        it('should only render the lower content if the slot is defined', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-page-intro__lower"]').exists()).toBe(false);
        });

        it('should render lower slot content', () => {
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-lower': '<div>This is the lower slot content</div>',
                },
            });
            expect(wrapper.find('[data-test="vs-page-intro__lower"]').html()).toContain('<div>This is the lower slot content</div>');
        });

        it('should render table of content slot content', () => {
            const tableOfContentsSlot = 'Table of contents content';
            const wrapper = factoryShallowMount({
                slots: {
                    'vs-intro-table-of-contents': tableOfContentsSlot,
                },
            });
            expect(wrapper.text()).toContain(tableOfContentsSlot);
        });
    });
});
