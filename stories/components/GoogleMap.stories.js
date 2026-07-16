import VsGoogleMap from '@/components/google-map/GoogleMap.vue';
import VsGoogleMapMarker from '@/components/google-map/components/GoogleMapMarker.vue';
import {
    VsContainer,
    VsIcon,
    VsRow,
} from '@/components';

import markerPlaces from '@/assets/fixtures/google-map/places-data-markers.json';
import numberedPlaces from '@/assets/fixtures/google-map/places-data-markers-stops.json';
import polygonDataset from '@/assets/fixtures/google-map/places-data-polygons.json';

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
            <div
                :class="args.jsDisabled ? 'no-js' : ''"
            >
                <VsGoogleMap
                    v-bind="args"
                    :class="args.jsDisabled ? 'no-js' : ''"
                    :style="!args.jsDisabled ? 'height: 40em; width: 100%;' : ''"
                >
                    <template
                        #vs-google-map-marker
                        v-if="args.markerData"
                    >
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
                    <template #no-js>
                        You need Javascript enabled to see this map
                    </template>
                </VsGoogleMap>
            </div>
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
    languageCode: 'en',
    uiLabels: {
        fullScreen: 'Fullscreen toggle',
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
    },
    jsDisabled: false,
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
    markerData: markerPlaces.features,
};

export const NumberedMarkers = Template.bind({
});

NumberedMarkers.args = {
    ...base,
    initialViewIsScotland: false,
    isViewToFitMarkers: true,
    markerData: numberedPlaces.features,
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
    markerData: markerPlaces.features,
    polygonData: polygonDataset.features,
};

export const ItalianMap = Template.bind({
});

ItalianMap.args = {
    ...base,
    languageCode: 'it',
    markerData: markerPlaces.features,
};

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    jsDisabled: true,
};
