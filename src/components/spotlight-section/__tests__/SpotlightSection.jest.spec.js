import { shallowMount, config } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsSpotlightSection from '../SpotlightSection.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsSpotlightSection, {
    propsData: {
        heading: 'Test Heading',
        ctaLink: '#',
        ctaText: 'Learn More',
        ...propsData,
    },
});

describe('VsSpotlightSection', () => {
    it('should render a spotlight section component', () => {
        const wrapper = factoryShallowMount();
        const section = wrapper.find('section[data-test=vs-spotlight-section]');

        expect(section.exists()).toBe(true);
        expect(wrapper.classes()).toContain('vs-spotlight-section');
    });

    describe('props', () => {
        it('should render heading text', () => {
            const wrapper = factoryShallowMount();
            const heading = wrapper.find('.vs-spotlight-section__heading');

            expect(heading.text()).toContain('Test Heading');
        });

        it('should render description when provided', () => {
            const wrapper = factoryShallowMount({
                description: 'Test description',
            });

            expect(wrapper.text()).toContain('Test description');
        });

        it('should not render description when not provided', () => {
            const wrapper = factoryShallowMount();
            const description = wrapper.find('.vs-spotlight-section__description');

            expect(description.exists()).toBe(false);
        });

        it('should apply background image when imageSrc is provided', () => {
            const wrapper = factoryShallowMount({
                imageSrc: 'test-image.jpg',
            });

            expect(wrapper.attributes('style')).toContain('background-image: url(test-image.jpg)');
        });

        it('should not apply background image when imageSrc is not provided', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.attributes('style')).toBeFalsy();
        });

        it('should apply compact class when compact is true', () => {
            const wrapper = factoryShallowMount({
                compact: true,
            });

            expect(wrapper.classes()).toContain('vs-spotlight-section--compact');
        });

        it('should apply standard class when compact is false', () => {
            const wrapper = factoryShallowMount({
                compact: false,
            });

            expect(wrapper.classes()).toContain('vs-spotlight-section--standard');
        });

        it('should apply no-image class when imageSrc is not provided', () => {
            const wrapper = factoryShallowMount();

            expect(wrapper.classes()).toContain('vs-spotlight-section--no-image');
        });

        it('should not apply no-image class when imageSrc is provided', () => {
            const wrapper = factoryShallowMount({
                imageSrc: 'test-image.jpg',
            });

            expect(wrapper.classes()).not.toContain('vs-spotlight-section--no-image');
        });

        it('should generate correct classes for standard variant with image', () => {
            const wrapper = factoryShallowMount({
                compact: false,
                imageSrc: 'test.jpg',
            });

            expect(wrapper.classes()).toContain('vs-spotlight-section');
            expect(wrapper.classes()).toContain('vs-spotlight-section--standard');
            expect(wrapper.classes()).not.toContain('vs-spotlight-section--compact');
            expect(wrapper.classes()).not.toContain('vs-spotlight-section--no-image');
        });

        it('should generate correct classes for compact variant without image', () => {
            const wrapper = factoryShallowMount({
                compact: true,
                imageSrc: '',
            });

            expect(wrapper.classes()).toContain('vs-spotlight-section');
            expect(wrapper.classes()).toContain('vs-spotlight-section--compact');
            expect(wrapper.classes()).toContain('vs-spotlight-section--no-image');
            expect(wrapper.classes()).not.toContain('vs-spotlight-section--standard');
        });

        it('should render button in standard variant when ctaLink is provided', () => {
            const wrapper = factoryShallowMount({
                compact: false,
                ctaLink: '#test',
                ctaText: 'Click Me',
            });

            const button = wrapper.find('.vs-spotlight-section__cta-button');
            expect(button.exists()).toBe(true);
            expect(button.text()).toBe('Click Me');
        });

        it('should render button in compact variant when ctaLink is provided', () => {
            const wrapper = factoryShallowMount({
                compact: true,
                ctaLink: '#test',
                ctaText: 'Click Me',
            });

            const button = wrapper.find('.vs-spotlight-section__cta-button');
            expect(button.exists()).toBe(true);
            expect(button.text()).toBe('Click Me');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
