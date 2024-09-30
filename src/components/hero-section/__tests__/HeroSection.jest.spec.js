import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsHeroSection from '../HeroSection.vue';

const headingText = 'Scotland, the biggest wee country in the world';
const ledeText = 'Welcome to Scotland, where history meets breathtaking beauty, and every visit feels like home.';
const heroImgSrc = 'fixtures/hero/images/visitscotland_38462263949.jpg';
const heroCaption = 'Sunset at Lochan na h-Achlaise on Rannoch Moor';
const heroCredit = 'VisitScotland / Kenny Lam';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsHeroSection, {
    propsData: {
        ...propsData,
        heading: headingText,
        lede: ledeText,
    },
});

describe('VsHeroSection', () => {
    it('should have a data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-hero-section');
    });

    it('should render a divider by default', () => {
        const wrapper = factoryShallowMount();
        const divider = wrapper.find('[data-test=vs-hero-section]').find('.vs-hero-section__divider');

        expect(divider.exists()).toBe(true);
    });

    describe(':props', () => {
        it('should render a level 1 `heading`', () => {
            const wrapper = factoryShallowMount();
            const heroHeading = wrapper.find('[data-test=vs-hero-section__heading]');

            expect(heroHeading.attributes('level')).toBe('1');
            expect(heroHeading.text()).toContain(headingText);
        });

        it('should render a `lede` text paragraph', () => {
            const wrapper = factoryShallowMount();
            const heroLede = wrapper.find('[data-test=vs-hero-section__lede]');

            expect(heroLede.text()).toContain(ledeText);
        });

        it('should render a container for the imageWrapper if no image `src` is passed', () => {
            const wrapper = factoryShallowMount();
            const imageWrapper = wrapper.find('[data-test=vs-hero-section__image-wrapper]');

            expect(imageWrapper.classes()).toContain('container');
        });

        it('render an image when an img `src` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
            });
            const heroImage = wrapper.find('[data-test=vs-hero-section__image-wrapper]').find('.vs-hero-section__img');

            expect(heroImage.exists()).toBe(true);
            expect(heroImage.attributes('src')).toContain(heroImgSrc);
        });

        it('render alt text for an image when `imgAlt` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
                imgAlt: heroCaption,
            });
            const heroImage = wrapper.find('[data-test=vs-hero-section__image-wrapper]').find('.vs-hero-section__img');

            expect(heroImage.attributes('alt')).toContain(heroCaption);
        });

        it('should not render an image in an inset container when an img `src` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
            });
            const imageWrapper = wrapper.find('[data-test=vs-hero-section__image-wrapper]');

            expect(imageWrapper.classes()).not.toContain('container');
        });

        it('should render an image in an inset container when an img `src` is passed and `inset` is true', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                inset: true,
                src: heroImgSrc,
            });
            const imageWrapper = wrapper.find('[data-test=vs-hero-section__image-wrapper]');

            expect(imageWrapper.classes()).toContain('container');
        });

        it('should not render a divider when an image `src` is passed', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                src: heroImgSrc,
            });

            const divider = wrapper.find('[data-test=vs-hero-section]').find('.vs-hero-section__divider');
            expect(divider.exists()).toBe(false);
        });

        it('should not render a `caption` if no image `src` is passed', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                imgCaption: heroCaption,
                imgCredit: heroCredit,
            });

            const caption = wrapper.find('[data-test=vs-hero-section__caption]');
            expect(caption.exists()).toBe(false);
        });

        it('should render a `caption` when passed and an image `src` is passed', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                src: heroImgSrc,
                imgCaption: heroCaption,
                imgCredit: heroCredit,
            });

            const caption = wrapper.find('[data-test=vs-hero-section__caption]');
            expect(caption.exists()).toBe(true);
        });

        it('should not render a `caption` if an image `src` is passed but caption data is not', async() => {
            const wrapper = factoryShallowMount();

            await wrapper.setProps({
                src: heroImgSrc,
            });

            const caption = wrapper.find('[data-test=vs-hero-section__caption]');
            expect(caption.exists()).toBe(false);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
