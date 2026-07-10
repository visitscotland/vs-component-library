import { mount } from '@vue/test-utils';
import axe from '@/../test/unit/helpers/axe-helper';
import mapCategoryLabels from '@/assets/fixtures/custom-components/main-map/map-labels.json';
import mapCategories from '@/assets/fixtures/custom-components/main-map/map-categories.json';
import featuredPlaces from '@/assets/fixtures/custom-components/main-map/map-featured-places.json';
import VsMapSidebar from '../MapSidebar.vue';

const factoryMount = (propsData) => mount(VsMapSidebar, {
    global: {
        stubs: {
            'gmp-place-details': true,
            'gmp-place-details-place-request': true,
            'gmp-place-content-config': true,
            'gmp-place-address': true,
            'gmp-place-rating': true,
            'gmp-place-type': true,
            'gmp-place-price': true,
            'gmp-place-accessible-entrance-icon': true,
            'gmp-place-opening-hours': true,
            'gmp-place-website': true,
            'gmp-place-phone-number': true,
            'gmp-place-summary': true,
            'gmp-place-type-specific-highlights': true,
            'gmp-place-reviews': true,
            'gmp-place-feature-list': true,
            'gmp-place-media': true,
            'gmp-place-attribution': true,
        },
        provide: {
            onFeaturedLocationClick: () => { },
        },
    },
    ...propsData,
    propsData: {
        sidebarLabels: {
            headerLabel: 'Discover your Scotland',
            closeSidebarButtonLabel: 'Close Sidebar',
            searchBarAriaLabel: 'Search the map',
            inputPlaceholderLabel: 'Type in your keyword',
            searchButtonLabel: 'Search',
            clearMapLabel: 'Clear Map',
            searchResultsLabel: 'Showing results for: ',
            openSidebarButtonLabel: 'Open Sidebar',
            resetLocationLabel: 'All locations',
            locationSelectLabel: 'Refine your results by location',
        },
        categories: mapCategoryLabels,
        categoryData: mapCategories,
        destinations: featuredPlaces,
        destinationCategories: [
            {
                id:'cities',
                label:'Cities',
            },
            {
                id:'towns',
                label:'Towns',
            },
            {
                id:'islands',
                label:'Islands',
            },
            {
                id:'regions',
                label:'Regions',
            },
            {
                id: 'national-parks',
                label: 'National Parks',
            },
        ],
        mapLoaded: true,
    },
    slots: {
        'vs-map-sidebar-search-results': '<div data-test="places-ui-kit">Places UI Kit go here</div>',
    },
});

describe('VsMapSidebar', () => {
    it('should render a div element with the class `vs-map-sidebar`', () => {
        const wrapper = factoryMount();

        expect(wrapper.element.tagName).toBe('DIV');
        expect(wrapper.find('.vs-map-sidebar').exists()).toBe(true);
    });

    describe(':props', () => {
        it('should accept a headerLabel prop and render the header', async() => {
            const wrapper = factoryMount();

            const header = wrapper.find('[data-test="vs-map-sidebar__heading"');
            expect(header.exists()).toBe(true);

            expect(header.text()).toBe('Discover your Scotland');
        });

        it('should accept a placeholder prop and render the placeholder in the input field', async() => {
            const wrapper = factoryMount();

            const input = wrapper.find('[data-test="vs-map-search-input"]');
            expect(input.exists()).toBe(true);

            const inputPlaceholder = wrapper.find('[placeholder="Type in your keyword"]');
            expect(inputPlaceholder.exists()).toBe(true);
        });

        it('should accept a searchButtonLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            const searchBtn = wrapper.find('[data-test="vs-map-sidebar__search-button"]');
            expect(searchBtn.exists()).toBe(true);

            expect(searchBtn.text()).toBe('Search');
        });

        it('should accept a clearMapLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Dundee',
            });

            const resetMapBtn = wrapper.find('[data-test="vs-map-sidebar__reset-map"]');
            expect(resetMapBtn.exists()).toBe(true);

            expect(resetMapBtn.element.tagName).toBe('A');

            expect(resetMapBtn.text()).toBe('Clear Map');
        });

        it('should accept a query prop and render it in the searched for field', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Inverness',
            });

            const searchOutput = wrapper.find('[data-test="vs-map-sidebar__search-result-query"');
            expect(searchOutput.exists()).toBe(true);
        });

        it('should accept a openSidebarButtonLabel prop and render the text in the button', async() => {
            const wrapper = factoryMount();

            const openSidebarBtn = wrapper.find('.vs-map-sidebar__handle');
            expect(openSidebarBtn.exists()).toBe(true);

            expect(openSidebarBtn.text()).toBe('Open Sidebar');
        });
    });

    describe(':slots', () => {
        it('should render the slot for the places ui kit when `query` is present', async() => {
            const wrapper = factoryMount();

            await wrapper.setProps({
                query: 'Aberdeen',
            });

            const subCatSlot = wrapper.find('[data-test="places-ui-kit"');
            expect(subCatSlot.exists()).toBe(true);
        });
    });

    describe(':accessibility', () => {
        it('should not have aXe accessibility issues', async() => {
            const wrapper = factoryMount();
            expect(await axe(wrapper.html())).toHaveNoViolations();
        });

        it('should accept and render an aria label for the search bar', () => {
            const wrapper = factoryMount();

            const searchBar = wrapper.find('[data-test="vs-map-search-input"]');
            expect(searchBar.exists()).toBe(true);

            const searchBarAriaLabel = wrapper.find('[aria-label="Search the map"]');
            expect(searchBarAriaLabel.exists()).toBe(true);
        });
    });
});
