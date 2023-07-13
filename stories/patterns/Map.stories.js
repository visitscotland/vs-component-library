import VsMainMapWrapper from '@/components/patterns/main-map-wrapper/MainMapWrapper.vue';
import mapFiltersSubcategories from '@/assets/fixtures/maps/map-filters-subcategories.json';
import placesDataFeatured from '@/assets/fixtures/maps/places-data-featured.json';

export default {
    component: VsMainMapWrapper,
    title: 'Patterns/MainMap',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMainMapWrapper,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMainMapWrapper
            v-bind="args"
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <template v-slot:close-side-panel-text>
                <span class="sr-only">
                    Close map filters
                </span>
            </template>
            <template v-slot:open-side-panel-text>
                Map filters
            </template>
            <template v-slot:back-btn-text>
                Go back one step
            </template>
            <template v-slot:reset-side-panel-text>
                Reset filters
            </template>
            <template v-slot:map-loading-text>
                Loading
            </template>
            <template v-slot:load-more-text>
                Load more
            </template>
            <template v-slot:no-js>
                You need Javascript enabled to see this map
            </template>
            <template v-slot:panel-loading-message>
                Loading results
            </template>
            <template v-slot:zoom-too-close>
                We're sorry, you can't zoom in any more
            </template>
            <template v-slot:zoom-too-far>
                We're sorry, you can't zoom out any more
            </template>
        </VsMainMapWrapper>
    `,
});

const base = {
    categoryHeading: 'Explore places to go',
    filters: mapFiltersSubcategories,
    placesData: placesDataFeatured.features,
    discoverText: 'discover',
    mapId: 'vs-map',
    initialSelected: 'places',
    toggleData: [
        {
            text: 'Regions',
            value: 'regions',
            icon: 'map',
        },
        {
            text: 'Places',
            value: 'places',
            icon: 'map-marker',
        },
    ],
    buttonsLabel: 'Select map type',
    clearSelectionText: 'Clear all',
    applyFiltersText: 'Show results',
    detailsEndpoint: 'http://172.28.81.65:8089/data/component/mapcard?id=',
    regionBounds: {
        type: 'bounds',
        coordinates: [
            [-3.058595889098882, 55.993275047970826],
            [-3.34402565597901, 55.887115661571926],
        ],
    },
    filtersAppliedText: 'filters applied',
    clearFiltersText: 'clear filters',
    mapFilterMessage: 'Please apply filter(s) to refine results.',
    mapNoResultsMessage: 'There are no results, please try again',
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
