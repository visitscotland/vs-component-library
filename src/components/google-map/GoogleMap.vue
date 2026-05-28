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
    /**
     * Object containing labels of UI Elements
     */
    uiLabels: {
        type: Object,
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
            createCustomControlElement(
                map.value,
                {
                    zoomIn: props.uiLabels.zoomIn,
                    zoomOut: props.uiLabels.zoomOut,
                    fullScreen: props.uiLabels.fullScreen,
                },
            );
        });
    });
});

</script>

<style lang="scss">
.vs-google-map {
    width: 100%;
    height: inherit;

    &__custom-control-container {
        margin: $vs-spacer-100 $vs-spacer-100 0 0;
        display: flex;
        flex-direction: column;
        row-gap: $vs-spacer-075;
    }

    @include google-map-marker-themes;

    &__map-pin {
        display: grid;
        place-items: center;
        color: $vs-color-background-accent-heather-80;

        transition: all $duration-base;

        > * {
            grid-area: 1/1;
        }

        &-icon {
            color: $vs-color-icon-inverse;
            margin-bottom: $vs-spacer-050;
        }

        &-number {
            color: $vs-color-text-inverse;
            font-family: $vs-font-family-display;
            margin-bottom: $vs-spacer-025;
            font-size: $vs-font-size-detail-l;
        }

        &:hover {
            scale: 150%;
            transition: all $duration-base;
            transform-origin: bottom;
        }
    }
}

gmp-advanced-marker:focus {
    .vs-google-map__map-pin {
        scale: 150%;
        transition: all $duration-base;
        transform-origin: bottom;
    }
}
</style>
