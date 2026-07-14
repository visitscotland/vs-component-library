<!--
    These disabled as gmp-elements only accept kebab-case element
    names and standard web component slots, not v:slots.
-->
<!-- eslint-disable vue/component-name-in-template-casing -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <div class="vs-google-map">
        <gmp-map
            :center="mapCenter"
            :zoom="props.zoom"
            :map-id="props.mapId"
            class="vs-google-map__map"
            id="vs-google-map"
            ref="mapRef"
        >
            <!-- @slot for VsGoogleMapMarker component -->
            <slot
                name="vs-google-map-marker"
            />
            <div
                class="vs-google-map__custom-controls"
                slot="control-inline-end-block-start"
            >
                <VsButton
                    icon="fa-regular fa-plus"
                    variant="secondary"
                    icon-only
                    size="sm"
                    @click="zoomIn"
                >
                    {{ props.uiLabels?.zoomIn }}
                </VsButton>
                <VsButton
                    icon="fa-regular fa-minus"
                    variant="secondary"
                    icon-only
                    size="sm"
                    @click="zoomOut"
                >
                    {{ props.uiLabels?.zoomOut }}
                </VsButton>
                <VsButton
                    v-if="isAppleIOS"
                    :icon="isFullscreen ? 'fa-regular fa-arrows-minimize' : 'fa-regular fa-arrows-maximize'"
                    variant="secondary"
                    icon-only
                    size="sm"
                    @click="fullscreenToggle"
                >
                    {{ props.uiLabels?.fullScreen }}
                </VsButton>
            </div>
        </gmp-map>
        <VsWarning class="vs-google-map__no-js">
            <!-- @slot Message to show when JS is disabled  -->
            <slot name="no-js" />
        </VsWarning>
    </div>
</template>

<script setup>
/// <reference types="google.maps" />

import {
    ref,
    onBeforeMount,
    onMounted,
    shallowRef,
} from 'vue';
import getEnvValue from '@/utils/get-env-value';
import { isAppleIOS } from '@/utils/is-apple-ios';
import useGoogleBaseMapStore from '@/stores/googleMap.store';

import { VsButton, VsWarning } from '@/components';
import { setOptions } from '@googlemaps/js-api-loader';
import addPolygon from './composables/AddPolygon';

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
    googleMapsOptions: {
        type: Object,
        default: () => ({
            clickableIcons: true,
            gestureHandling: 'auto',
            isFractionalZoomEnabled: false,
            renderingTypeVector: true,
        }),
    },
    /**
     * The bounds of the map that the user will not be
     * able to pan past.
     */
    mapBounds: {
        type: Object,
        default: () => {},
    },
    /**
     * Determines whether the map should zoom out to show
     * all of Scotland on inital load
     */
    initialViewIsScotland: {
        type: Boolean,
        default: true,
    },
    /**
     * Determines whether the map should zoom into the markers
     * displayed, rather than respecting center & zoom props.
     */
    isViewToFitMarkers: {
        type: Boolean,
        deafult: false,
    },
    /**
     * Enables/disables tooltips for the markers
     */
    isMarkerTooltipsEnabled: {
        type: Boolean,
        default: false,
    },
    /**
     * Enables/disables tooltips for the polygons
     */
    isPolygonTooltipsEnabled: {
        type: Boolean,
        default: true,
    },
    /**
     * Array of marker brxm features.
     */
    markerData: {
        type: Array,
        default: () => [],
    },
    /**
     * Array of polygon brxm features.
     */
    polygonData: {
        type: Array,
        default: () => [],
    },
    /**
     * ISO 639 Language code for map language
     */
    languageCode: {
        type: String,
        default: 'en',
    },
    /**
     * Object containing labels of UI Elements
     */
    uiLabels: {
        type: Object,
        required: true,
    },
});

const googleMapStore = useGoogleBaseMapStore();

const mapRef = ref(null);
const innerMap = shallowRef();

const mapCenter = ref(null);
const isFullscreen = ref(false);

const sanitizedPolygonData = [];

const INITIAL_SCOTLAND_VIEW_BOUNDS = {
    north: 60.0,
    south: 54.24,
    west: -7.65,
    east: -1.4,
};

onBeforeMount(() => {
    mapCenter.value = props.center;

    props.polygonData.forEach((feature) => {
        if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
            sanitizedPolygonData.push(feature);
        }
    });
});

async function init() {
    // Import the needed libraries.
    // eslint-disable-next-line no-undef
    await google.maps.importLibrary('maps');
    // eslint-disable-next-line no-undef
    await google.maps.importLibrary('marker');

    // Access the map.
    // Access the underlying map object.
    innerMap.value = mapRef.value.innerMap;

    innerMap.value.setOptions({
        center: props.center,
        zoom: props.zoom,
        mapId: props.mapId,
        clickableIcons: props.googleMapsOptions.clickableIcons,
        gestureHandling: props.googleMapsOptions.gestureHandling,
        isFractionalZoomEnabled: props.googleMapsOptions.isFractionalZoomEnabled,
        renderingType: props.googleMapsOptions.renderingTypeVector
            // eslint-disable-next-line no-undef
            ? google.maps.RenderingType.VECTOR
            // eslint-disable-next-line no-undef
            : google.maps.RenderingType.RASTER,
        restriction: {
            latLngBounds: props.mapBounds,
        },
        disableDefaultUI: true,
        keyboardShortcuts: true,
    });

    if (props.initialViewIsScotland) {
        innerMap.value.fitBounds(INITIAL_SCOTLAND_VIEW_BOUNDS);
    } else if (
        !props.initialViewIsScotland
        && props.isViewToFitMarkers
        && googleMapStore.markers.length > 0
    ) {
        // eslint-disable-next-line no-undef
        google.maps.event.addListenerOnce(innerMap.value, 'idle', () => {
            // eslint-disable-next-line no-undef
            const bounds = new google.maps.LatLngBounds();
            googleMapStore.markers.forEach((marker) => {
                // eslint-disable-next-line no-undef
                bounds.extend(new google.maps.LatLng(marker.location[1], marker.location[0]));
            });
            mapCenter.value = bounds.getCenter();
            innerMap.value.fitBounds(bounds);
        });
    };

    if (sanitizedPolygonData) {
        // eslint-disable-next-line no-undef
        google.maps.event.addListenerOnce(innerMap.value, 'tilesloaded', () => {
            sanitizedPolygonData.forEach((place) => {
                addPolygon(
                    innerMap.value,
                    place,
                    props.isPolygonTooltipsEnabled,
                );
            });
        });
    };
};

onMounted(async() => {
    setOptions({
        key: props.apiKey,
        v: 'quarterly',
        libraries: ['maps', 'marker'],
        region: 'GB',
        language: props.languageCode,
    });
    init();
});

function zoomIn() {
    if (innerMap.value) {
        innerMap.value.setZoom((innerMap.value.getZoom() || 0) + 1);
    };
};

function zoomOut() {
    if (innerMap.value) {
        innerMap.value.setZoom((innerMap.value.getZoom() || 0) - 1);
    };
};

function fullscreenToggle() {
    if (!isAppleIOS()) {
        if (!document.fullscreenElement && mapRef.value) {
            // Request fullscreen on the container element, NOT document or map div
            mapRef.value.requestFullscreen()
                .catch((err) => console.error(`Error enabling fullscreen: ${err.message}`));
            isFullscreen.value = true;
        } else {
            document.exitFullscreen();
            isFullscreen.value = false;
        };
    };
};

</script>

<style lang="scss">
.vs-google-map {
    &__map{
        width: 100%;
        height: inherit;
    }

    &__custom-controls {
        margin: $vs-spacer-100 $vs-spacer-100 0 0;
        display: flex;
        flex-direction: column;
        row-gap: $vs-spacer-075;
    }

    &__no-js {
        display: none;
    }
}

@include no-js {
    .vs-google-map {
        &__map {
            display: none;
        }

        &__no-js {
            display: block;
        }
    }
}

</style>
