import { shallowMount } from '@vue/test-utils';

import VsQuote from '../Quote.vue';

const factoryShallowMount = (slotsData) => shallowMount(VsQuote, {
    slots: {
        ...slotsData,
    },
});

describe('VsIknowParterItem', () => {
    it('should render a component with `vs-quote` data-test attribute', () => {
        const wrapper = factoryShallowMount();

        expect(wrapper.attributes('data-test')).toContain('vs-quote');
    });

    describe(':slots', () => {
        it('renders content inserted in the `image` slot', () => {
            const imageContent = 'Quote image';
            const wrapper = factoryShallowMount({
                image: imageContent,
            });

            expect(wrapper.text()).toContain(imageContent);
        });

        it('renders content inserted in the `content` slot', () => {
            const mainQuoteContent = 'Quote test';
            const wrapper = factoryShallowMount({
                content: mainQuoteContent,
            });

            expect(wrapper.text()).toContain(mainQuoteContent);
        });

        it('renders content inserted in the `authorName` slot', () => {
            const authorContent = 'Quote author name';
            const wrapper = factoryShallowMount({
                'author-name': authorContent,
            });

            expect(wrapper.text()).toContain(authorContent);
        });

        it('renders content inserted in the `authorTitle` slot', () => {
            const titleContent = 'Quote author title';
            const wrapper = factoryShallowMount({
                'author-title': titleContent,
            });

            expect(wrapper.text()).toContain(titleContent);
        });

        it('renders content inserted in the `link` slot', () => {
            const linkContent = 'Quote link';
            const wrapper = factoryShallowMount({
                link: linkContent,
            });

            expect(wrapper.text()).toContain(linkContent);
        });
    });
});
