<template>
    <button
        type="button"
        class="vs-map-marker"
        :class="isActive ? 'vs-map-marker--active' : ''"
        data-test="vs-map-marker"
        variant="transparent"
        @click="handleClick"
        @keydown.enter="handleClick"
        @mouseover="handleHover(feature.properties.id)"
        @mouseleave="handleHover('')"
        @focusin="handleHover(feature.properties.id)"
        @focusout="handleHover('')"
    >
        <VsMainMapWrapperIcon
            class="vs-main-map-category__icon"
            :id="getMarkerIcon"
            :is-map-marker="true"
        />
    </button>
</template>

<script>
import pinia from '@/stores/index.ts';
import useMapStore from '@/stores/map.store.ts';
import VsMainMapWrapperIcon from './MainMapWrapperIcon.vue';

let mapStore = null;

/**
 * A marker for a map compenent
 *
 * @displayName Map Marker
 */

export default {
    name: 'VsMapMarker',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMainMapWrapperIcon,
    },
    props: {
        /**
         * Details for the marker
         */
        feature: {
            type: Object,
            required: true,
        },
        /**
         * Id for the map - to be used with
         * the map store
         */
        mapId: {
            type: String,
            required: true,
        },
        /**
         * Selected place ID
         */
        selectedPlace: {
            type: String,
            default: null,
        },
    },
    computed: {
        isActive() {
            if (this.activePlace === this.feature.properties.id
                || this.highlightedPlace === this.feature.properties.id) {
                return true;
            }

            return false;
        },
        highlightedPlace() {
            if (mapStore) {
                return mapStore.getHoveredStop(this.mapId);
            }

            return '';
        },
        activePlace() {
            return mapStore.getActivePlace(this.mapId);
        },
        activeSubcat() {
            return mapStore.selectedSubCategory;
        },
        getMarkerIcon() {
            let markerName;
            if (this.feature.properties.type !== '') {
                markerName = this.feature.properties.type;
            } else if (this.activeSubCat !== null) {
                markerName = this.activeSubcat;
            } else {
                markerName = 'featured';
            }

            if (markerName === 'null') {
                markerName = '';
            }

            return markerName;
        },
    },
    watch: {
        isActive() {
            if (this.activePlace === this.feature.properties.id
                || this.highlightedPlace === this.feature.properties.id) {
                return true;
            }

            if (this.activePlace === this.feature.properties.id) {
                mapStore.setActiveMarkerPos(this.feature.geometry.coordinates);
            }

            return false;
        },
        activePlace() {
            if (this.activePlace === this.feature.properties.id) {
                mapStore.setActiveMarkerPos(this.feature.geometry.coordinates);
            }
        },
    },
    mounted() {
        mapStore = useMapStore(pinia());
    },
    methods: {
        /**
         * Fires on click of the marker
         */
        handleClick() {
            mapStore.setActiveMarkerPos(this.feature.geometry.coordinates);

            mapStore.setActivePlace({
                mapId: this.mapId,
                placeId: this.feature.properties.id,
            });

            this.$parent.$emit('show-detail', this.feature.properties.id);
            this.$parent.$emit('set-category', this.feature.properties.type);
        },
        /**
         * Fires on hover over the maker
         */
        handleHover(id) {
            mapStore.setHoveredPlace({
                mapId: this.mapId,
                hoveredId: id,
            });
        },
    },
};
</script>

<style lang="scss">
.vs-map-marker {
    background: transparent;
    border: none;
    display: block;
    font-weight: $font-weight-bold;
    padding: 0;
    position: absolute;

    &:hover,
    &:focus,
    &--active {
        z-index: 1 !important;

        .vs-main-map-marker-icon--map-marker {
            transform: scale(1.2);
            transition: $transition-base;
        }
    }

    &__count {
        color: $color-white;
        display: block;
        font-size: $font-size-4;
        font-family: $headings-font-family;
        position: absolute;
        top: 4px;
        left: 0;
        transition: $transition-base;
        text-align: center;
        width: 100%;
    }
}
</style>
