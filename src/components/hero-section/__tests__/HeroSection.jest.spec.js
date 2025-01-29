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

        it('should not render a divider when an image `src` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
            });

            const divider = wrapper.find('[data-test=vs-hero-section]').find('.vs-hero-section__divider');
            expect(divider.exists()).toBe(false);
        });

        it('should render an image when an img `src` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
            });
            const heroImageWrapper = wrapper.find('.vs-hero-section__image');
            const heroImage = heroImageWrapper.find('vs-hero-section-image-stub');

            expect(heroImageWrapper.exists()).toBe(true);
            expect(heroImage.attributes('src')).toContain(heroImgSrc);
        });

        it('should render correct image attributes when passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
                imgAlt: heroCaption,
                imgCaption: heroCaption,
                imgCredit: heroCredit,
            });
            const heroImageStub = wrapper.find('.vs-hero-section__image').find('vs-hero-section-image-stub');

            expect(heroImageStub.attributes('imgalt')).toContain(heroCaption);
            expect(heroImageStub.attributes('imgcaption')).toContain(heroCaption);
            expect(heroImageStub.attributes('imgcredit')).toContain(heroCredit);
        });

        it('renders inset image if `inset` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                src: heroImgSrc,
                inset: true,
            });
            const heroImageWrapper = wrapper.find('.vs-hero-section__image');

            expect(heroImageWrapper.classes('vs-hero-section__image--inset')).toBe(true);
        });

        it('renders split hero if `split` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                split: true,
            });

            expect(wrapper.classes('vs-hero-section--split')).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
