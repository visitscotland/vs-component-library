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
/// <reference types="google.maps" />

import {
    markRaw,
    onMounted,
    shallowRef,
} from 'vue';
import getEnvValue from '@/utils/get-env-value';

import { mapLoader, initMap } from './composables/MapsApiLoader';
import createCustomControlElement from './composables/CustomControls';
import addMarkers from './composables/AddMarker';
import addPolygon from './composables/AddPolygon';

const map = shallowRef(null);
const markers = [];

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
            initialViewIsScotland: true,
            isFractionalZoomEnabled: false,
            renderingTypeVector: true,
        }),
    },
    /**
     * Array of marker pins and/or polygon coordinates.
     */
    featureData: {
        type: Array,
        default: () => {},
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
    const gMap = await initMap(
        document.getElementById('vs-google-map'),
        {
            center: props.center,
            zoom: props.zoom,
            mapId: props.mapId,
            features: props.features,
        },
    );

    map.value = markRaw(gMap);

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

        if (props.featureData) {
            // eslint-disable-next-line no-undef
            const bounds = new google.maps.LatLngBounds();

            // eslint-disable-next-line no-undef
            google.maps.event.addListenerOnce(map.value, 'tilesloaded', () => {
                props.featureData.forEach((place, key) => {
                    markers[key] = addMarkers(map.value, place);
                    if (!props.features.initialViewIsScotland) {
                        bounds.extend(
                            // eslint-disable-next-line no-undef
                            new google.maps.LatLng(
                                place.geometry.coordinates[1],
                                place.geometry.coordinates[0],
                            ),
                        );
                    }
                });

                // Google Maps bug doesn't fully render the accessibility
                // tree on initial load so moving the map slightly forces it
                requestAnimationFrame(() => {
                    map.value.panBy(0, 1);
                });

                if (!props.features.initialViewIsScotland) {
                    map.value.fitBounds(bounds);
                    map.value.setCenter(bounds.getCenter());
                }
            });
        };

        if (props.featureData) {
            // eslint-disable-next-line no-undef
            google.maps.event.addListenerOnce(map.value, 'tilesloaded', () => {
                props.featureData.forEach((place) => {
                    addPolygon(map.value, place);
                });

                // addPolygon(map.value, props.featureData[10]);
            });
        };
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

    &__tooltip {
        display: flex;
        flex-direction: column;
        align-items: center;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
        pointer-events: none;

        &-content {
            width: max-content;
            padding: $vs-spacer-050 $vs-spacer-100;
            font-family: $vs-font-family-sans-serif;
            font-size: $vs-font-size-detail-s;
            background: $vs-color-background-inverse;
            border-radius: $vs-radius-small;
        }

        &-arrow {
            width: 10px;
            height: 10px;
            background: $vs-color-background-inverse;
            transform: rotate(45deg);
            position: relative;
            top: -5px;
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
