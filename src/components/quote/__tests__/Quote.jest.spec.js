import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsQuote from '../Quote.vue';

config.global.renderStubDefaultSlot = true;

// eslint-disable-next-line object-curly-newline
const factoryShallowMount = (slotsData, propsData) => shallowMount(VsQuote, {
    props: {
        ...propsData,
    },
    slots: {
        ...slotsData,
    },
});

describe('VsQuote', () => {
    it('should render a component with `vs-quote` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toContain('vs-quote');
    });

    describe(':props', () => {
        it(':withBorder - render with `vs-quote--with-border` when true', () => {
            const wrapper = factoryShallowMount(
                {
                },
                {
                    withBorder: true,
                },
            );

            expect(wrapper.find('.vs-quote--with-border').exists()).toBe(true);
        });

        it(':withBorder - render without `vs-quote__speech-container` when true', () => {
            const wrapper = factoryShallowMount(
                {
                },
                {
                    withBorder: true,
                },
            );

            expect(wrapper.find('.vs-quote__speech-container').exists()).toBe(false);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in the `image` slot', () => {
            const imageContent = 'Quote image';
            const wrapper = factoryShallowMount({
                'quote-image': imageContent,
            });

            expect(wrapper.text()).toContain(imageContent);
        });

        it('renders content inserted in the `content` slot', () => {
            const mainQuoteContent = 'Quote test';
            const wrapper = factoryShallowMount({
                'quote-content': mainQuoteContent,
            });

            expect(wrapper.text()).toContain(mainQuoteContent);
        });

        it('renders content inserted in the `authorName` slot', () => {
            const authorContent = 'Quote author name';
            const wrapper = factoryShallowMount({
                'quote-author-name': authorContent,
            });

            expect(wrapper.text()).toContain(authorContent);
        });

        it('renders content inserted in the `authorTitle` slot', () => {
            const titleContent = 'Quote author title';
            const wrapper = factoryShallowMount({
                'quote-author-title': titleContent,
            });

            expect(wrapper.text()).toContain(titleContent);
        });

        it('renders content inserted in the `link` slot', () => {
            const linkContent = 'Quote link';
            const wrapper = factoryShallowMount({
                'quote-link': linkContent,
            });

            expect(wrapper.text()).toContain(linkContent);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
