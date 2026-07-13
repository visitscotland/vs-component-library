<!--
    These disabled as gmp-elements only accept kebab-case element
    names and standard web component slots, not v:slots.
-->
<!-- eslint-disable vue/component-name-in-template-casing -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <div>
        <gmp-map
            :center="mapCenter"
            :zoom="props.zoom"
            :map-id="props.mapId"
            class="vs-google-map"
            id="vs-google-map"
            ref="mapRef"
        >
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
                    {{ props.uiLabels.zoomIn }}
                </VsButton>
                <VsButton
                    icon="fa-regular fa-minus"
                    variant="secondary"
                    icon-only
                    size="sm"
                    @click="zoomOut"
                >
                    {{ props.uiLabels.zoomOut }}
                </VsButton>
                <VsButton
                    v-if="isAppleIOS"
                    :icon="isFullscreen ? 'fa-regular fa-arrows-minimize' : 'fa-regular fa-arrows-maximize'"
                    variant="secondary"
                    icon-only
                    size="sm"
                    @click="fullscreenToggle"
                >
                    {{ props.uiLabels.fullScreen }}
                </VsButton>
            </div>
        </gmp-map>
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

import { VsButton } from '@/components';
import mapLoader from './composables/MapsApiLoader';
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
    features: {
        type: Object,
        default: () => ({
            clickableIcons: true,
            gestureHandling: 'auto',
            initialViewIsScotland: true,
            isViewToFitMarkers: false,
            isFractionalZoomEnabled: false,
            renderingTypeVector: true,
            isMarkerTooltipsEnabled: false,
            isPolygonTooltipsEnabled: true,
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

const googleMapStore = useGoogleBaseMapStore();

const mapRef = ref(null);
const innerMap = shallowRef();

const mapCenter = ref(null);
const isFullscreen = ref(false);

const polygonData = [];

const INITIAL_SCOTLAND_VIEW_BOUNDS = {
    north: 60.0,
    south: 54.24,
    west: -7.65,
    east: -1.4,
};

onBeforeMount(() => {
    mapCenter.value = props.center;

    props.featureData.forEach((feature) => {
        if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
            polygonData.push(feature);
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
        clickableIcons: props.features.clickableIcons,
        gestureHandling: props.features.gestureHandling,
        isFractionalZoomEnabled: props.features.isFractionalZoomEnabled,
        renderingType: props.features.renderingTypeVector
            // eslint-disable-next-line no-undef
            ? google.maps.RenderingType.VECTOR
            // eslint-disable-next-line no-undef
            : google.maps.RenderingType.RASTER,
        restriction: {
            latLngBounds: props.features.boundsData,
        },
        disableDefaultUI: true,
        keyboardShortcuts: true,
    });

    if (props.features.initialViewIsScotland) {
        innerMap.value.fitBounds(INITIAL_SCOTLAND_VIEW_BOUNDS);
    } else if (!props.features.initialViewIsScotland && googleMapStore.markers.length > 0) {
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

    if (polygonData) {
        // eslint-disable-next-line no-undef
        google.maps.event.addListenerOnce(innerMap.value, 'tilesloaded', () => {
            polygonData.forEach((place) => {
                addPolygon(
                    innerMap.value,
                    place,
                    props.features.isPolygonTooltipsEnabled,
                );
            });
        });
    };
};

onMounted(async() => {
    mapLoader(props.apiKey);
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
        if (!document.fullscreenElement) {
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
gmp-map .vs-google-map {
    width: 100%;
    height: inherit;

    &__custom-controls {
        margin: $vs-spacer-100 $vs-spacer-100 0 0;
        display: flex;
        flex-direction: column;
        row-gap: $vs-spacer-075;
    }
}

.vs-google-map__tooltip {
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

</style>
