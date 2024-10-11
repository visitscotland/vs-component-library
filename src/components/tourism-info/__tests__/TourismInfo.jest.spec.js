import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsTourismInfo from '../TourismInfo.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context.js');

const inputSrc = 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm';
const inputAlt = 'This is the alt text';

const factoryShallowMount = (slotsData) => shallowMount(VsTourismInfo, {
    propsData: {
        imgSrc: inputSrc,
        imgAlt: inputAlt,
    },
    slots: {
        ...slotsData,
    },
});

describe('VsTourismInfo', () => {
    it('should render a component with `vs-tourism-info` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toContain('vs-tourism-info');
    });

    describe(':slots', () => {
        it('renders content inserted in the `tourism-info-image-with-caption` slot', () => {
            const imageContent = 'This slot normally takes an imageWithCaption component';
            const wrapper = factoryShallowMount({
                'tourism-info-image-with-caption': imageContent,
            });

            expect(wrapper.text()).toContain(imageContent);
        });

        it('renders content inserted in the `tourism-info-links` slot', () => {
            const linksContent = 'Tourism test links';
            const wrapper = factoryShallowMount({
                'tourism-info-links': linksContent,
            });

            expect(wrapper.text()).toContain(linksContent);
        });

        it('renders content inserted in the `tourism-info-quote` slot', () => {
            const quoteContent = 'Tourism test quote';
            const wrapper = factoryShallowMount({
                'tourism-info-quote': quoteContent,
            });

            expect(wrapper.text()).toContain(quoteContent);
        });

        it('renders the `tourism-info-links` slot within `vs-tourism-info__standalone-links` if no quote is set', () => {
            const linksContent = 'Tourism test links';
            const wrapper = factoryShallowMount({
                'tourism-info-links': linksContent,
            });

            const standalone = wrapper.find('[data-test="vs-tourism-info__standalone-links"]');
            const embedded = wrapper.find('[data-test="vs-tourism-info__embedded-links"]');

            expect(standalone.exists()).toBe(true);
            expect(embedded.exists()).toBe(false);
            expect(standalone.text()).toContain(linksContent);
        });

        it('renders the `tourism-info-links` slot within `vs-tourism-info__embedded-links` if a quote is set', () => {
            const linksContent = 'Tourism test links';
            const quoteContent = 'Tourism test quote';
            const wrapper = factoryShallowMount({
                'tourism-info-links': linksContent,
                'tourism-info-quote': quoteContent,
            });

            const standalone = wrapper.find('[data-test="vs-tourism-info__standalone-links"]');
            const embedded = wrapper.find('[data-test="vs-tourism-info__embedded-links"]');

            expect(standalone.exists()).toBe(false);
            expect(embedded.exists()).toBe(true);
            expect(embedded.text()).toContain(linksContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
