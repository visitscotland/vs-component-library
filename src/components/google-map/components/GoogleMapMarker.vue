<!--
    These disabled as gmp-elements only accept kebab-case element
    names and camel case attributes.
-->
<!-- eslint-disable vue/component-name-in-template-casing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
    <gmp-advanced-marker
        :position="getPosition(props.featureData.geometry.coordinates)"
        ref="vsGoogleMapMarker"
        class="vs-google-map-marker__gmp-element"
        tabindex="0"
        :aria-label="props.featureData.properties.title"
        role="button"
        :zIndex="markerZIndex"
        @mouseenter="bringToFront()"
        @mouseout="resetZIndex()"
        @focus="props.markerTooltipsEnabled ? showTooltip() : bringToFront()"
        @focusout="props.markerTooltipsEnabled ? hideTooltip() : resetZIndex()"
        @click="$emit('markerClick', props.featureData)"
    >
        <VsTooltip
            v-if="props.markerTooltipsEnabled"
            class="vs-google-map-marker"
            position="top"
            :title="props.featureData.properties.title"
            subtle
            :use-legacy="false"
            ref="tooltip"
        >
            <svg
                width="36"
                height="41"
                viewBox="0 0 36 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18 1C27.3888 1 35 8.61116 35 18C35 21.2018 34.304 23.8695 32.7432 26.4014C31.2002 28.9041 28.844 31.2202 25.6221 33.7822L25.6025 33.7988L25.5811 33.8135L18 39.2285L10.4189 33.8135L10.3975 33.7988L10.3779 33.7822C7.15645 31.2202 4.79987 28.9041 3.25684 26.4014C1.69596 23.8696 1 21.2017 1 18C1 8.61116 8.61116 1 18 1Z"
                    :fill="props.pinColor"
                    stroke="white"
                    stroke-width="2"
                />
            </svg>

            <span class="vs-google-map-marker__content">
                <slot name="vs-google-map-marker-content" />
            </span>
        </VsTooltip>
        <div
            v-else
            class="vs-google-map-marker"
        >
            <svg
                width="36"
                height="41"
                viewBox="0 0 36 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 1C27.3888 1 35 8.61116 35 18C35 21.2018 34.304 23.8695 32.7432 26.4014C31.2002 28.9041 28.844 31.2202 25.6221 33.7822L25.6025 33.7988L25.5811 33.8135L18 39.2285L10.4189 33.8135L10.3975 33.7988L10.3779 33.7822C7.15645 31.2202 4.79987 28.9041 3.25684 26.4014C1.69596 23.8696 1 21.2017 1 18C1 8.61116 8.61116 1 18 1Z"
                    :fill="props.pinColor"
                    stroke="white"
                    stroke-width="2"
                />
            </svg>

            <span class="vs-google-map-marker__content">
                <slot name="vs-google-map-marker-content" />
            </span>
        </div>
    </gmp-advanced-marker>
</template>

<script setup>
import { VsTooltip } from '@/components';
import {
    defineEmits,
    onBeforeUnmount,
    onBeforeMount,
    ref,
} from 'vue';

import useGoogleBaseMapStore from '@/stores/googleMap.store';

const googleMapStore = useGoogleBaseMapStore();
const tooltip = ref(null);

const markerZIndex = ref(null);

const props = defineProps({
    /** Single object of BRXM Feature data */
    featureData: {
        type: Object,
        required: true,
    },
    /** SVG Compatible colour (Hex/String/RGB()), Defaults to  */
    pinColor: {
        type: String,
        default: '#33225D',
    },
    markerTooltipsEnabled: {
        type: Boolean,
        default: false,
    },
});

onBeforeMount(() => {
    if (props.featureData.geometry.type === 'Point') {
        googleMapStore.markers.push({
            id: props.featureData.properties.id,
            location: props.featureData.geometry.coordinates,
        });
    }
});

onBeforeUnmount(() => {
    if (props.featureData.geometry.type === 'Point') {
        const index = googleMapStore.markers.findIndex({
            id: props.featureData.properties.id,
            location: props.featureData.geometry.coordinates,
        });

        googleMapStore.markers.splice(index, 1);
    };
});

const getPosition = (coordinates) => `${coordinates[1]}, ${coordinates[0]}`;

defineEmits(['markerClick']);

const bringToFront = () => {
    markerZIndex.value = 9999;
    googleMapStore.isMarkerHovered = true;
};

const resetZIndex = () => {
    markerZIndex.value = 299;
    googleMapStore.isMarkerHovered = false;
};

// Must manually bind the event to the gmp-advanced-marker element
// rather than use the tooltips default functionality
const showTooltip = () => {
    tooltip.value.show();
    bringToFront();
};

const hideTooltip = () => {
    tooltip.value.hide();
    resetZIndex();
};

</script>

<style lang="scss">
.vs-google-map-marker {
    position: relative;

    &:hover {
        scale: 150%;
        transition: all $duration-base;
        transform-origin: bottom;
    }

    &__content {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        justify-items: center;
        justify-content: center;
        color: white;
        font-family: $vs-font-family-display;
    }
}

gmp-advanced-marker:focus-within .vs-google-map-marker {
    scale: 150%;
    transition: all $duration-base;
    transform-origin: bottom;
}

.vs-tooltip-popover {
    font-size: $vs-font-size-detail-s;
    text-align: center;
}

</style>
