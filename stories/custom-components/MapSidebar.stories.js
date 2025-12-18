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
    headerLabel: 'Discover your Scotland',
    closeSidebarButtonLabel: 'Close Sidebar',
    searchBarAriaLabel: 'Search the map',
    inputPlaceHolderLabel: 'Type in your keyword',
    searchButtonLabel: 'Search',
    clearMapLabel: 'Clear Map',
    subFilterHeaderLabel: 'Refine your results',
    searchResultsLabel: 'Showing results for: ',
    openSidebarButtonLabel: 'Open Sidebar',
};

export const Default = Template.bind();

Default.args = base;

Default.globals = {
    backgrounds: {
        value: 'grey',
    },
};
