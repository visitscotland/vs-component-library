import { provide } from 'vue';
import mapCategoryLabels from '@/assets/fixtures/custom-components/main-map/map-labels.json';
import VsMapSidebar from '@/custom-components/maps/components/MapSidebar.vue';

export default {
    component: VsMapSidebar,
    title: 'Custom components/Map Sidebar',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsMapSidebar,
    },
    setup() {
        provide('featuredPlaces', {
            categories: [
                {
                    id: 'cities',
                    label: 'Cities',
                },
                {
                    id: 'towns',
                    label: 'Towns',
                },
                {
                    id: 'islands',
                    label: 'Islands',
                },
                {
                    id: 'regions',
                    label: 'Regions',
                },
                {
                    id: 'national-parks',
                    label: 'National Parks',
                },
            ],
            places: [],
        });
        provide('addDestinationMarkers', () => { });
        return {
            args,
        };
    },
    template: `
        <VsMapSidebar v-bind="args">
        <template #vs-map-sidebar-sub-filters v-if="args.selectedCategories">
                <div style="
                    background: rgba(252, 227, 247, 1); 
                    padding: 5em 5em;
                    text-align: center"
                >
                    <span>SLOT FOR SUBCATEGORIES</span>
                </div>
            </template>
            <template #vs-map-sidebar-search-results v-if="args.query">
                <div style="
                    background: rgb(227, 252, 252); 
                    padding: 15em 5em;
                    text-align: center"
                >
                    <span>SLOT FOR PLACES UI KIT</span>
                </div>
            </template>
        </VsMapSidebar>
    `,
});

const base = {
    sidebarLabels: {
        headerLabel: 'Discover your Scotland',
        closeSidebarButtonLabel: 'Close Sidebar',
        searchBarAriaLabel: 'Search the map',
        inputPlaceholderLabel: 'Type in your keyword',
        searchButtonLabel: 'Search',
        clearMapLabel: 'Clear Map',
        subFilterHeaderLabel: 'Refine your results',
        searchResultsLabel: 'Showing results for: ',
        openSidebarButtonLabel: 'Open Sidebar',
        resetLocationLabel: 'All locations',
        locationSelectLabel: 'Refine your results by location',
    },
    categories: mapCategoryLabels,
};

export const Default = Template.bind();

Default.args = base;

Default.globals = {
    backgrounds: {
        value: 'grey',
    },
};
