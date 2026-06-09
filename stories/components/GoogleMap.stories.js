import { VsContainer, VsRow } from '@/components';
import VsGoogleMap from '@/components/google-map/GoogleMap.vue';
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
        VsContainer,
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
            <vs-google-map
                v-bind="args"
                style="
                    height: 40em;
                    width: 100%;
                "
            />
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
    features: {
        clickableIcons: true,
        initialViewIsScotland: true,
        gestureHandling: 'cooperative',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.3,
            south: 54.6,
            west: -8.7,
            east: 2,
        },
    },
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

export const OutlanderMap = Template.bind({
});

OutlanderMap.args = {
    ...base,
    featureData: outlanderPlaces.features,
};

export const NumberedMap = Template.bind({
});

NumberedMap.args = {
    ...base,
    features: {
        clickableIcons: true,
        initialViewIsScotland: false,
        gestureHandling: 'cooperative',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.3,
            south: 54.6,
            west: -8.7,
            east: 2,
        },
    },
    featureData: numberedPlaces.features,
};

export const RegionMap = Template.bind({
});

RegionMap.args = {
    ...base,
    zoom: 8,
    features: {
        clickableIcons: false,
        initialViewIsScotland: false,
        gestureHandling: 'greedy',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.3,
            south: 54.6,
            west: -8.7,
            east: 2,
        },
    },
    featureData: regionPlaces.features,
};

export const PolygonMap = Template.bind({
});

PolygonMap.args = {
    ...base,
    features: {
        clickableIcons: false,
        initialViewIsScotland: true,
        gestureHandling: 'greedy',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.3,
            south: 54.6,
            west: -8.7,
            east: 2,
        },
    },
    featureData: polygonDataset.features,
};

export const MultiPolygonMap = Template.bind({
});

MultiPolygonMap.args = {
    ...base,
    features: {
        clickableIcons: false,
        initialViewIsScotland: true,
        gestureHandling: 'greedy',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.3,
            south: 54.6,
            west: -8.7,
            east: 2,
        },
    },
    featureData: multiPolygonDataset.features,
};
