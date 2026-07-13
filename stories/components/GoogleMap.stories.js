import VsGoogleMap from '@/components/google-map/GoogleMap.vue';
import VsGoogleMapMarker from '@/components/google-map/components/GoogleMapMarker.vue';
import {
    VsContainer,
    VsIcon,
    VsRow,
} from '@/components';

import outlanderPlaces from '@/assets/fixtures/maps/places-data-outlander.json';
import numberedPlaces from '@/assets/fixtures/maps/places-data-outlander-numbered.json';
import regionPlaces from '@/assets/fixtures/maps/places-data-regional.json';
import polygonDataset from '@/assets/fixtures/maps/regions-data.json';
import multiPolygonDataset from '@/assets/fixtures/maps/places-data-regions.json';

export default {
    component: VsGoogleMap,
    title: 'Components/Media & data visualisation/Google Map',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsGoogleMap,
        VsGoogleMapMarker,
        VsContainer,
        VsIcon,
        VsRow,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsContainer>
        <VsRow>
            <VsGoogleMap
                v-bind="args"
                style="
                    height: 40em;
                    width: 100%;
                "
            >
                <template #vs-google-map-marker>
                    <VsGoogleMapMarker
                        v-for="feature in args.markerData"
                        :key="feature.properties.id"
                        :featureData="feature"
                        :markerTooltipsEnabled="args.isMarkerTooltipsEnabled"
                    >
                        <template #vs-google-map-marker-content>
                            <span
                                v-if="feature.properties.stopCount"
                                class="vs-google-map-marker__stop-count mt-050"
                            >
                            {{ feature.properties.stopCount }}
                            </span> 
                            <span
                                v-if="feature.properties.category && !feature.properties.stopCount"
                                class="vs-google-map-marker__icon mt-075"
                            >
                                <VsIcon
                                    icon="fa-kit fa-vs-coo"
                                    variant="inverse"
                                    size="xxs"
                                />
                            </span> 
                        </template>
                    </VsGoogleMapMarker>
                </template>
            </VsGoogleMap>
        </VsRow>
    </VsContainer>
`,
});

const base = {
    center: {
        lat: 57.7,
        lng: -4.7,
    },
    zoom: 6.25,
    mapId: 'b55b94a250e703072014702e',
    googleMapsOptions: {
        clickableIcons: true,
        isFractionalZoomEnabled: true,
        renderingTypeVector: true,
        gestureHandling: 'cooperative',
    },
    mapBounds: {
        north: 61.3,
        south: 54.6,
        west: -8.7,
        east: 2,
    },
    initialViewIsScotland: true,
    isViewToFitMarkers: false,
    isMarkerTooltipsEnabled: false,
    isPolygonTooltipsEnabled: true,
    uiLabels: {
        fullScreen: 'Fullscreen toggle',
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
    },
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};

export const ThemedMarkers = Template.bind({
});

ThemedMarkers.args = {
    ...base,
    markerData: outlanderPlaces.features,
};

export const NumberedMarkers = Template.bind({
});

NumberedMarkers.args = {
    ...base,
    initialViewIsScotland: false,
    isViewToFitMarkers: true,
    markerData: numberedPlaces.features,
};

export const MapZoomsToMarkers = Template.bind({
});

MapZoomsToMarkers.args = {
    ...base,
    zoom: 7,
    initialViewIsScotland: false,
    isViewToFitMarkers: true,
    isMarkerTooltipsEnabled: true,
    markerData: regionPlaces.features,
};

export const WithPolygons = Template.bind({
});

WithPolygons.args = {
    ...base,
    polygonData: polygonDataset.features,
};

export const WithPolygonsAndMarkers = Template.bind({
});

WithPolygonsAndMarkers.args = {
    ...base,
    isMarkerTooltipsEnabled: true,
    isPolygonTooltipsEnabled: true,
    markerData: multiPolygonDataset.features,
    polygonData: multiPolygonDataset.features,
};
