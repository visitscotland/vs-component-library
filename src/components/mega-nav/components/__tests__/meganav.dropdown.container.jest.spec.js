import { config, mount } from '@vue/test-utils';
import VsMegaNavDropdownContainer from '../MegaNavDropdownContainer.vue';

config.global.renderStubDefaultSlot = true;

const factoryMount = (values) => mount(VsMegaNavDropdownContainer, {
    propsData: {
        ...values,
    },
    slots: {
        'button-content': 'Dropdown Toggle',
        'dropdown-content': '<li class="dropdown-list-item"></li>',
        'nav-featured-item': '<div>Test featured item</div>',
    },
});

let wrapper;
beforeEach(() => {
    wrapper = factoryMount();
    // We have to trigger the focus event to ensure that the element hydrates and isn't blocked by
    // LazyHydrate
    wrapper.trigger('focus');
});

describe('VsMegaNavDropdownContainer', () => {
    it('should render a component with the data-test attribute `vs-mega-nav-dropdown-container`', () => {
        expect(wrapper.attributes('data-test')).toBe('vs-mega-nav-dropdown-container');
    });

    describe(':props', () => {
        it('should not render CTA link by default when no props have been provided', () => {
            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').exists()).toBeFalsy();
        });

        it('should not render CTA link if only `ctaText` prop has been provided', async() => {
            wrapper.setProps({
                ctaText: 'Explore the Map of Scotland',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').exists()).toBeFalsy();
        });

        it('should not render CTA link if only `href` prop has been provided', async() => {
            wrapper.setProps({
                href: 'https://www.visitscotland.com/destinations',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').exists()).toBeFalsy();
        });

        it('should render CTA link if both `ctaText` and `href` props have been provided', async() => {
            wrapper.setProps({
                ctaText: 'Explore the Map of Scotland',
                href: 'https://www.visitscotland.com/destinations',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').exists()).toBeTruthy();
        });

        it('should display CTA link text `Explore the Map of Scotland` when passed as `ctaText` prop', async() => {
            wrapper.setProps({
                ctaText: 'Explore the Map of Scotland',
                href: 'https://www.visitscotland.com/destinations',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').text()).toBe('Explore the Map of Scotland');
        });

        it('should display the URL `https://www.visitscotland.com/destinations` on the cta link when passed as `href` prop', async() => {
            wrapper.setProps({
                ctaText: 'Explore the Map of Scotland',
                href: 'https://www.visitscotland.com/destinations',
            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__cta-link"]').attributes().href).toBe('https://www.visitscotland.com/destinations');
        });

        it('should show the appropriate class if the `align` prop is set to `bottom`', async() => {
            wrapper.setProps({
                align: 'bottom',

            });

            await wrapper.vm.$nextTick();

            expect(wrapper.find('.vs-mega-nav-dropdown-container__featured--bottom').exists()).toBe(true);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a button-content slot', () => {
            expect(wrapper.find('[data-test="vs-mega-nav-dropdown"]').find('.dropdown-toggle').text()).toBe('Dropdown Toggle');
        });

        it('renders content inserted in a dropdown-content slot', () => {
            expect(wrapper.findAll('.dropdown-list-item').length).toBe(2);
        });

        it('renders content inserted in a nav-featured-item slot', () => {
            expect(wrapper.find('[data-test="vs-mega-nav-dropdown-container__featured"]').text()).toBe('Test featured item');
        });
    });
});
