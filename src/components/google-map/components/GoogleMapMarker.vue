<!--
    These disabled as gmp-elements only accept kebab-case element
    names and camel case attributes.
    Click event handled by top-level gmp-advanced-marker element
    but still throws error. Functionality is verified.
-->
<!-- eslint-disable vue/component-name-in-template-casing -->
<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
    <gmp-advanced-marker
        :position.attr="getPosition(props.featureData.geometry.coordinates)"
        class="vs-google-map-marker__gmp-element"
        data-test="vs-google-map-marker"
        tabindex="0"
        :aria-label="props.featureData.properties.title"
        role="button"
        :zIndex="markerZIndex"
        @mouseover="bringToFront()"
        @mouseout="props.handleMarkerBehaviourExternally ? null : resetPin()"
        @mouseleave.prevent
        @focus="props.markerTooltipsEnabled ? showTooltip() : bringToFront()"
        @focusout="focusOutBehaviour"
        @keydown.enter="$emit('markerClick', props.featureData)"
    >
        <VsTooltip
            v-if="props.markerTooltipsEnabled"
            class="vs-google-map-marker"
            :class="handleTooltipBehaviour()"
            position="top"
            :title="props.featureData.properties.title"
            subtle
            :use-legacy="false"
            ref="tooltip"
            @mouseleave.prevent
            @click="$emit('markerClick', props.featureData)"
        >
            <svg
                width="36"
                height="41"
                viewBox="0 0 36 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-test="vs-google-map-marker__pin-graphic"
            >
                <path
                    d="M18 1C27.3888 1 35 8.61116 35 18C35 21.2018 34.304 23.8695 32.7432 
                    26.4014C31.2002 28.9041 28.844 31.2202 25.6221 33.7822L25.6025 33.7988L25.5811
                    33.8135L18 39.2285L10.4189 33.8135L10.3975 33.7988L10.3779 33.7822C7.15645
                    31.2202 4.79987 28.9041 3.25684 26.4014C1.69596 23.8696 1 21.2017
                    1 18C1 8.61116 8.61116 1 18 1Z"
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
            :class="
                googleMapStore.markerHovered === props.featureData.properties.id 
                    ? 'is-active' 
                    : null"
            @click="$emit('markerClick', props.featureData)"
        >
            <svg
                width="36"
                height="41"
                viewBox="0 0 36 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-test="vs-google-map-marker__pin-graphic"
            >
                <path
                    d="M18 1C27.3888 1 35 8.61116 35 18C35 21.2018 34.304 23.8695 32.7432 
                    26.4014C31.2002 28.9041 28.844 31.2202 25.6221 33.7822L25.6025 33.7988L25.5811
                    33.8135L18 39.2285L10.4189 33.8135L10.3975 33.7988L10.3779 33.7822C7.15645
                    31.2202 4.79987 28.9041 3.25684 26.4014C1.69596 23.8696 1 21.2017
                    1 18C1 8.61116 8.61116 1 18 1Z"
                    :fill="props.pinColor"
                    stroke="white"
                    stroke-width="2"
                />
            </svg>

            <span
                class="vs-google-map-marker__content"
                data-test="vs-google-map-marker__content"
            >
                <!-- @slot for content on the pin of the marker -->
                <slot name="vs-google-map-marker-content" />
            </span>
        </div>
    </gmp-advanced-marker>
</template>

<script setup>
import VsTooltip from '@/components/tooltip/Tooltip.vue';
import {
    defineEmits,
    onBeforeMount,
    ref,
} from 'vue';

import { storeToRefs } from 'pinia';

import designTokens from '@/assets/tokens/tokens.json';


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
        default: designTokens['vs-color-background-accent-heather-80'],
    },
    markerTooltipsEnabled: {
        type: Boolean,
        default: false,
    },
    handleMarkerBehaviourExternally: {
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

const getPosition = (coordinates) => `${coordinates[1]}, ${coordinates[0]}`;

defineEmits(['markerClick']);

function handleSetMarkerActive(markerID) {
    googleMapStore.setActiveMarker(markerID);
};

function isMarkerActive(markerID) {
    return googleMapStore.activeMarkers.includes(markerID);
};

function handleRemoveMarkerActive(markerID) {
    googleMapStore.removeActiveMarker(markerID);
};

const bringToFront = () => {
    markerZIndex.value = 9999;
    handleSetMarkerActive(props.featureData.properties.id);
};

const resetPin = () => {
    markerZIndex.value = 299;
    handleRemoveMarkerActive(props.featureData.properties.id);
};

// Must manually bind the event to the gmp-advanced-marker element
// rather than use the tooltips default functionality
const showTooltip = () => {
    tooltip.value.show();
    bringToFront();
};

const hideTooltip = () => {
    tooltip.value.hide();
    resetPin();
};

const focusOutBehaviour = () => {
    if (props.markerTooltipsEnabled && !props.handleMarkerBehaviourExternally) {
        hideTooltip();
    } else if (!props.markerTooltipsEnabled && !props.handleMarkerBehaviourExternally) {
        resetPin();
    } else if (props.markerTooltipsEnabled) {
        return;
    }
};

const handleTooltipBehaviour = () => {
    if (isMarkerActive(props.featureData.properties.id)) {
        return 'is-active';
    } else {
        return null;
    };
};


const { markerHovered } = storeToRefs(useGoogleBaseMapStore);

defineExpose({
    showTooltip,
    hideTooltip,
    resetPin,
    handleSetMarkerActive,
    handleRemoveMarkerActive,
    markerHovered,
});

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

.is-active {
    scale: 150%;
    transition: all $duration-base;
    transform-origin: bottom;
}

</style>
