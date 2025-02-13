import VsMapWithSidebar from '@/components/map-with-sidebar/MapWithSidebar.vue';
import mapFiltersSubcategories from '@/assets/fixtures/maps/map-filters-subcategories.json';
import mapFiltersOutlanderSubcategories from '@/assets/fixtures/maps/map-filters-outlander-subcategories.json';
import mapFiltersRegions from '@/assets/fixtures/maps/map-filters-regions.json';
import mapFiltersRegional from '@/assets/fixtures/maps/map-filters-regional.json';
import placesDataRegional from '@/assets/fixtures/maps/places-data-regional.json';
import placesDataRegionalNoIcentres from '@/assets/fixtures/maps/places-data-regional-no-icentres.json';
import placesDataFeatured from '@/assets/fixtures/maps/places-data-featured.json';
import placesDataOutlander from '@/assets/fixtures/maps/places-data-outlander.json';
import placesDataRegions from '@/assets/fixtures/maps/places-data-regions.json';
import placesDataDistillery from '@/assets/fixtures/maps/places-data-distilleries.json';

export default {
    component: VsMapWithSidebar,
    title: 'MapWithSidebar',
};

const Template = (args) => ({
    components: {
        VsMapWithSidebar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMapWithSidebar
            v-bind="args"
            :class="args.jsDisabled ? 'no-js' : ''"
        >
            <template v-slot:close-side-panel-text>
                <span class="visually-hidden">
                    Close map menu
                </span>
            </template>
            <template v-slot:open-side-panel-text>
                Map menu
            </template>
            <template v-slot:menu-btn-text>
                Map menu
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
        </VsMapWithSidebar>
    `,
});

const base = {
    discoverText: 'Discover',
    buttonsLabel: 'Select map type',
    clearSelectionText: 'Clear all',
    applyFiltersText: 'Show results',
    detailsEndpoint: 'https://www.visitscotland.com/data/component/mapcard?id=',
    filtersAppliedText: 'Filters applied',
    clearFiltersText: 'Clear filters',
    mapFilterMessage: 'Please apply filter(s) to refine results.',
    mapNoResultsMessage: 'There are no results, please try again',
};

export const CitiesMap = Template.bind({
});

CitiesMap.args = {
    ...base,
    categoryHeading: 'Map of Edinburgh',
    filters: mapFiltersSubcategories,
    placesData: placesDataFeatured.features,
    regionBounds: {
        type: 'bounds',
        coordinates: [
            [-3.058595889098882, 55.993275047970826],
            [-3.34402565597901, 55.887115661571926],
        ],
    },
    mapId: 'vs-map',
};

export const RegionalMap = Template.bind({
});

RegionalMap.args = {
    ...base,
    categoryHeading: 'Map of The Highlands',
    filters: mapFiltersRegional,
    placesData: placesDataRegional.features,
    toggleData: [
        {
            text: 'Places',
            value: 'places-regional',
        },
        {
            text: 'iCentres',
            value: 'icentres',
        },
    ],
    mapId: 'vs-map',
};

export const RegionalMapNoIcentres = Template.bind({
});

RegionalMapNoIcentres.args = {
    ...base,
    categoryHeading: 'Map of The Highlands',
    filters: mapFiltersRegional,
    placesData: placesDataRegionalNoIcentres.features,
    toggleData: [
        {
            text: 'Places',
            value: 'places-regional',
        },
        {
            text: 'iCentres',
            value: 'icentres',
        },
    ],
    mapId: 'vs-map',
};

export const MapWithRegions = Template.bind({
});

const regionsExample = {
    categoryHeading: 'Explore places to go',
    filters: mapFiltersRegions,
    placesData: placesDataRegions.features,
    initialSelected: 'places',
    toggleData: [
        {
            text: 'Places',
            value: 'places',
            icon: 'map-marker',
        },
        {
            text: 'Regions',
            value: 'regions',
            icon: 'map',
        },
    ],
};

MapWithRegions.args = {
    ...base,
    ...regionsExample,
    mapId: 'vs-map-regions',
};

export const ToggleOnMobile = Template.bind({
});

ToggleOnMobile.args = {
    ...base,
    ...regionsExample,
    mapId: 'vs-map-mobile',
};

ToggleOnMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const Outlander = Template.bind({
});

Outlander.args = {
    ...base,
    filters: mapFiltersOutlanderSubcategories,
    placesData: placesDataOutlander.features,
    categoryHeading: 'Outlander Filming Locations',
    mapId: 'vs-map-outlander',
};

export const Distilleries = Template.bind({
});

Distilleries.args = {
    ...base,
    filters: [{
        id: 'distilleries',
        label: 'Distilleries',
    }],
    placesData: placesDataDistillery,
    categoryHeading: 'Scottish Whisky Distillery Map',
    mapId: 'vs-map-distillery',
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    ...regionsExample,
    mapId: 'vs-map-nojs',
    jsDisabled: true,
};
