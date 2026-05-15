import { config, shallowMount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsQuote from '../Quote.vue';

config.global.renderStubDefaultSlot = true;

const factoryShallowMount = (propsData, slotsData) => shallowMount(VsQuote, {
    props: {
        quoteText: 'Test quote text',
        ...propsData,
    },
    slots: {
        ...slotsData,
    },
});

describe('VsQuote (legacy)', () => {
    const legacyProps = {
        useLegacy: true,
    };

    it('should render a component with `vs-quote` data-test attribute', () => {
        const wrapper = factoryShallowMount(legacyProps);
        expect(wrapper.find('[data-test="vs-quote"]').exists()).toBe(true);
    });

    describe(':props', () => {
        it(':withBorder - render with `vs-quote--with-border` when true', () => {
            const wrapper = factoryShallowMount({
                ...legacyProps,
                withBorder: true,
            });
            expect(wrapper.find('.vs-quote--with-border').exists()).toBe(true);
        });

        it(':withBorder - render without `vs-quote__speech-container` when true', () => {
            const wrapper = factoryShallowMount({
                ...legacyProps,
                withBorder: true,
            });
            expect(wrapper.find('.vs-quote__speech-container').exists()).toBe(false);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in the `image` slot', () => {
            const wrapper = factoryShallowMount(legacyProps, {
                'quote-image': 'Quote image',
            });
            expect(wrapper.text()).toContain('Quote image');
        });

        it('renders content inserted in the `content` slot', () => {
            const wrapper = factoryShallowMount(legacyProps, {
                'quote-content': 'Quote test',
            });
            expect(wrapper.text()).toContain('Quote test');
        });

        it('renders content inserted in the `authorName` slot', () => {
            const wrapper = factoryShallowMount(legacyProps, {
                'quote-author-name': 'Quote author name',
            });
            expect(wrapper.text()).toContain('Quote author name');
        });

        it('renders content inserted in the `authorTitle` slot', () => {
            const wrapper = factoryShallowMount(legacyProps, {
                'quote-author-title': 'Quote author title',
            });
            expect(wrapper.text()).toContain('Quote author title');
        });

        it('renders content inserted in the `link` slot', () => {
            const wrapper = factoryShallowMount(legacyProps, {
                'quote-link': 'Quote link',
            });
            expect(wrapper.text()).toContain('Quote link');
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount(legacyProps);
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});

describe('VsQuote', () => {
    const newProps = {
        useLegacy: false,
    };

    it('should render a component with `vs-quote-new` data-test attribute', () => {
        const wrapper = factoryShallowMount(newProps);
        expect(wrapper.find('[data-test="vs-quote-new"]').exists()).toBe(true);
    });

    it('should not render the legacy `vs-quote` element', () => {
        const wrapper = factoryShallowMount(newProps);
        expect(wrapper.find('[data-test="vs-quote"]').exists()).toBe(false);
    });

    describe(':props', () => {
        it('renders the `quoteText` prop', () => {
            const wrapper = factoryShallowMount({
                ...newProps,
                quoteText: 'This is a quote',
            });
            expect(wrapper.find('.vs-quote__text').text()).toContain('This is a quote');
        });

        it('renders the `quoteName` prop', () => {
            const wrapper = factoryShallowMount({
                ...newProps,
                quoteName: 'John Smith',
            });
            expect(wrapper.find('.vs-quote__name').text()).toContain('John Smith');
        });

        it('does not render the author detail block when `quoteName` is empty and no `quote-details` slot', () => {
            const wrapper = factoryShallowMount(newProps);
            expect(wrapper.find('vs-detail-stub').exists()).toBe(false);
        });

        it('renders the author detail block when `quoteName` is provided', () => {
            const wrapper = factoryShallowMount({
                ...newProps,
                quoteName: 'John Smith',
            });
            expect(wrapper.find('vs-detail-stub').exists()).toBe(true);
        });

        it('renders a comma separator when both `quoteName` and `quote-details` slot are provided', () => {
            const wrapper = factoryShallowMount({
                ...newProps,
                quoteName: 'John Smith',
            }, {
                'quote-details': 'Photographer',
            });
            expect(wrapper.html()).toContain(', ');
        });

        it('does not render a comma separator when only `quoteName` is provided', () => {
            const wrapper = factoryShallowMount({
                ...newProps,
                quoteName: 'John Smith',
            });
            expect(wrapper.html()).not.toContain(', ');
        });
    });

    describe(':slots', () => {
        it('renders content inserted in the `quote-details` slot', () => {
            const wrapper = factoryShallowMount(newProps, {
                'quote-details': 'Photographer',
            });
            expect(wrapper.text()).toContain('Photographer');
        });

        it('renders the author detail block when only `quote-details` slot is provided', () => {
            const wrapper = factoryShallowMount(newProps, {
                'quote-details': 'Photographer',
            });
            expect(wrapper.find('vs-detail-stub').exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryShallowMount(newProps);
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
