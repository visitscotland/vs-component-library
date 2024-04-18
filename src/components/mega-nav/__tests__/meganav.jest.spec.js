import {
    config,
    shallowMount,
    mount,
} from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import VsMegaNav from '../MegaNav.vue';

config.global.renderStubDefaultSlot = true;

jest.mock('@/utils/svg-context');

function mountOptions(propsData) {
    return {
        propsData: {
            href: 'https://www.visitscotland.com',
            menuToggleAltText: 'Open Menu',
            searchButtonText: 'Search',
            ...propsData,
        },
        slots: {
            'mega-nav-top-menu-items': '<li class="mega-nav-top-menu-items"></li>',
        },
    };
};

const factoryShallowMount = (propsData) => shallowMount(
    VsMegaNav,
    mountOptions(propsData),
);

const factoryMount = (propsData) => mount(
    VsMegaNav,
    mountOptions(propsData),
);

describe('VsMegaNav', () => {
    it('should render a component with the data-test attribute `vs-mega-nav`', () => {
        const wrapper = factoryShallowMount();
        expect(wrapper.find('[data-test=vs-mega-nav]').exists()).toBe(true);
    });

    it('should render a button with an `vs-mega-nav__mobile-menu-toggle` class', () => {
        const wrapper = factoryMount();
        const dropdownToggle = wrapper.find('[data-test="vs-mega-nav-mobile-container"]').find('.vs-mega-nav__mobile-menu-toggle');

        expect(dropdownToggle.exists()).toBe(true);
        expect(dropdownToggle.html()).toContain('vs-icon--bars-mobile-menu');
    });

    describe(':props', () => {
        it('should display the URL `https://www.visitscotland.com` on the logo link when passed as `href` prop', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.find('[data-test="vs-mega-nav__logo"]').attributes().href).toBe('https://www.visitscotland.com');
        });

        it('should display sr-only `Open Menu` text within toggle button', () => {
            const wrapper = factoryMount();
            const dropdownToggle = wrapper.find('[data-test="vs-mega-nav-mobile-container"]').find('.vs-mega-nav__mobile-menu-toggle');

            expect(dropdownToggle.html()).toContain('Open Menu');
        });

        it('should display `Search` text within the search button', () => {
            const wrapper = factoryShallowMount();
            const siteSearchStub = wrapper.find('vs-site-search-stub');

            expect(siteSearchStub.text()).toContain('Search');
        });

        it('should pass `searchLabelText` prop to search form', () => {
            const wrapper = factoryShallowMount();
            const siteSearchFormStub = wrapper.find('vs-site-search-form-stub');

            expect(siteSearchFormStub.attributes().labeltext).toBe('What are you looking for?');
        });

        it('should pass `searchButtonText` prop to search form', () => {
            const wrapper = factoryShallowMount();
            const siteSearchFormStub = wrapper.find('vs-site-search-form-stub');

            expect(siteSearchFormStub.attributes().submitbuttontext).toBe('Search');
        });

        it('should pass `searchClearButtonText` prop to search form', () => {
            const wrapper = factoryShallowMount();
            const siteSearchFormStub = wrapper.find('vs-site-search-form-stub');

            expect(siteSearchFormStub.attributes().clearbuttontext).toBe('Clear form');
        });

        it('should pass `searchCloseButtonText` prop to search form', () => {
            const wrapper = factoryShallowMount();
            const siteSearchFormStub = wrapper.find('vs-site-search-form-stub');

            expect(siteSearchFormStub.attributes().closebuttontext).toBe('Close search form');
        });

        it('should display the search button entirely if noSearch is set to false', () => {
            const wrapper = factoryShallowMount({
                noSearch: false,
            });
            const siteSearchStub = wrapper.find('vs-site-search-stub');

            expect(siteSearchStub.exists()).toBe(true);
        });

        it('should remove the search button entirely if noSearch is set to true', () => {
            const wrapper = factoryShallowMount({
                noSearch: true,
            });
            const siteSearchStub = wrapper.find('vs-site-search-stub');

            expect(siteSearchStub.exists()).toBe(false);
        });
    });

    describe(':slots', () => {
        it('renders content inserted in a mega-nav-top-menu-items slot', () => {
            const wrapper = factoryShallowMount();
            expect(wrapper.findAll('.mega-nav-top-menu-items').length).toBe(1);
        });
    });

    describe(':methods', () => {
        it('toggles the search form when search button is clicked', async() => {
            const wrapper = factoryMount();
            const siteSearchBtn = wrapper.find('[data-test=vs-site-search]');

            const siteSearchForm = wrapper.find('[data-test=vs-site-search-form]');
            expect(siteSearchForm.attributes('style')).toBe('display: none;');

            siteSearchBtn.trigger('click');
            await wrapper.vm.$nextTick();

            setTimeout(() => {
                expect(siteSearchForm.attributes('style')).toBe('');
            }, 100);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });
    });
});
