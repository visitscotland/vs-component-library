<template>
    <div>
        <div
            class="vs-google-map"
            id="vs-google-map"
            ref="VsGoogleMapElement"
        />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import getEnvValue from '@/utils/get-env-value';

import { mapLoader, initMap } from './composables/MapsApiLoader';
import createCustomControlElement from './composables/CustomControls';

const map = ref();
const VsGoogleMapElement = ref();

const props = defineProps({
    /**
     * API Key for Google Maps
     */
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
    },
    /**
     * Initial center point for the map
     */
    center: {
        type: Object,
        default: () => ({
            lat: 0,
            lng: 0,
        }),
    },
    /**
     * Initial zoom level for the map
     */
    zoom: {
        type: Number,
        default: 6,
    },
    /**
     * Map ID as set in the Google Maps Cloud Console,
     * required for shading, styling, etc.
     */
    mapId: {
        type: String,
        required: true,
    },
    /**
     * Object to set optional map features, otherwise
     * sensible defaults are set.
     */
    features: {
        type: Object,
        default: () => ({
            clickableIcons: true,
            gestureHandling: 'auto',
            isFractionalZoomEnabled: false,
            renderingTypeVector: true,
        }),
    },
    /**
     * Array of marker pins.
     */
    markerData: {
        type: Array,
        required: true,
    },
});

onMounted(async() => {
    mapLoader(props.apiKey);
    map.value = await initMap(
        VsGoogleMapElement.value,
        {
            center: props.center,
            zoom: props.zoom,
            mapId: props.mapId,
            features: props.features,
            markers: props.markerData,
        },
    );

    await new Promise(() => {
        // eslint-disable-next-line no-undef
        google.maps.event.addListenerOnce(map.value, 'idle', () => {
            createCustomControlElement(map.value);
        });
    });
});

</script>

<style lang="scss">
.vs-google-map {
    width: 100%;
    height: inherit;

    &__custom-control-container {
        margin: 1em 1em 0 0;
        display: flex;
        flex-direction: column;
        row-gap: $vs-spacer-075;
    }
}

</style>
