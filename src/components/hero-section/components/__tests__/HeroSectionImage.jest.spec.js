import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsHeroSectionImage from '../HeroSectionImage.vue';

const heroImgSrc = 'fixtures/hero/images/visitscotland_38462263949.jpg';
const heroCaption = 'Sunset at Lochan na h-Achlaise on Rannoch Moor';
const heroCredit = 'VisitScotland / Kenny Lam';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData) => shallowMount(VsHeroSectionImage, {
    propsData: {
        ...propsData,
        src: heroImgSrc,
    },
});

describe('VsHeroSectionImage', () => {
    it('should have a data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toBe('vs-hero-section-image');
    });

    describe(':props', () => {
        it('render an image when an img `src` is passed', async() => {
            const wrapper = factoryShallowMount();
            const heroImage = wrapper.find('vs-img-stub');

            expect(heroImage.exists()).toBe(true);
            expect(heroImage.attributes('src')).toContain(heroImgSrc);
        });

        it('render alt text for an image when `imgAlt` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                imgAlt: heroCaption,
            });
            const heroImage = wrapper.find('vs-img-stub');

            expect(heroImage.attributes('alt')).toContain(heroCaption);
        });

        it('does not render a caption if no `caption` or `credit` is passed', async() => {
            const wrapper = factoryShallowMount();
            const heroImgCaption = wrapper.find('vs-media-caption-stub');

            expect(heroImgCaption.exists()).toBe(false);
        });

        it('renders a caption if `caption` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                imgCaption: heroCaption,
            });

            const heroImgCaption = wrapper.find('vs-media-caption-stub');
            expect(heroImgCaption.exists()).toBe(true);
        });

        it('renders a caption if `credit` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                imgCredit: heroCredit,
            });

            const heroImgCaption = wrapper.find('vs-media-caption-stub');
            expect(heroImgCaption.exists()).toBe(true);
        });

        it('renders split hero image if `split` is passed', async() => {
            const wrapper = factoryShallowMount();
            await wrapper.setProps({
                split: true,
            });

            expect(wrapper.classes('vs-hero-section-image--split')).toBe(true);
        });

        it('should pass right-align as false when split is false', () => {
            const wrapper = factoryShallowMount({
                split: false,
                imgCredit: 'Test credit',
            });

            const mediaCaption = wrapper.findComponent({
                name: 'VsMediaCaption',
            });
            expect(mediaCaption.props('rightAlign')).toBe(false);
        });

        it('should pass right-align as true when split is true', () => {
            const wrapper = factoryShallowMount({
                split: true,
                imgCredit: 'Test credit',
            });

            const mediaCaption = wrapper.findComponent({
                name: 'VsMediaCaption',
            });
            expect(mediaCaption.props('rightAlign')).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
