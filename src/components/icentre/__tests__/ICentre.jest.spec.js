import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsIcentre from '../Icentre.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context.js');

const inputSrc = 'https://cimg.visitscotland.com/cms-images/attractions/outlander/claire-standing-stones-craigh-na-dun-outlander?size=sm';
const inputAlt = 'This is the alt text';

const factoryShallowMount = (slotsData) => shallowMount(VsIcentre, {
    propsData: {
        imgSrc: inputSrc,
        imgAlt: inputAlt,
    },
    slots: {
        ...slotsData,
    },
});

describe('VsIknowParterItem', () => {
    it('should render a component with `vs-icentre` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toContain('vs-icentre');
    });

    describe(':slots', () => {
        it('renders content inserted in the `icentre-image-with-caption` slot', () => {
            const imageContent = 'This slot normally takes an imageWithCaption component';
            const wrapper = factoryShallowMount({
                'icentre-image-with-caption': imageContent,
            });

            expect(wrapper.text()).toContain(imageContent);
        });

        it('renders content inserted in the `icentre-links` slot', () => {
            const linksContent = 'Icentre test links';
            const wrapper = factoryShallowMount({
                'icentre-links': linksContent,
            });

            expect(wrapper.text()).toContain(linksContent);
        });

        it('renders content inserted in the `icentre-quote` slot', () => {
            const quoteContent = 'Icentre test quote';
            const wrapper = factoryShallowMount({
                'icentre-quote': quoteContent,
            });

            expect(wrapper.text()).toContain(quoteContent);
        });

        it('renders the `icentre-links` slot within `vs-icentre__standalone-links` if no quote is set', () => {
            const linksContent = 'Icentre test links';
            const wrapper = factoryShallowMount({
                'icentre-links': linksContent,
            });

            const standalone = wrapper.find('[data-test="vs-icentre__standalone-links"]');
            const embedded = wrapper.find('[data-test="vs-icentre__embedded-links"]');

            expect(standalone.exists()).toBe(true);
            expect(embedded.exists()).toBe(false);
            expect(standalone.text()).toContain(linksContent);
        });

        it('renders the `icentre-links` slot within `vs-icentre__embedded-links` if a quote is set', () => {
            const linksContent = 'Icentre test links';
            const quoteContent = 'Icentre test quote';
            const wrapper = factoryShallowMount({
                'icentre-links': linksContent,
                'icentre-quote': quoteContent,
            });

            const standalone = wrapper.find('[data-test="vs-icentre__standalone-links"]');
            const embedded = wrapper.find('[data-test="vs-icentre__embedded-links"]');

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
