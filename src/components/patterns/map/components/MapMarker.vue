<template>
    <button
        type="button"
        class="vs-map-marker"
        :class="isActive ? 'vs-map-marker--active' : ''"
        data-test="vs-map-marker"
        variant="transparent"
        @click="handleClick"
        @keydown.enter="handleClick"
        @mouseover="handleHover(feature)"
        @mouseleave="handleHover('')"
        @focusin="handleHover(feature)"
        @focusout="handleHover('')"
    >
        <VsMapMarkerIcon
            :id="getMarkerIcon"
            :is-map-marker="true"
            :number="feature.properties.stopCount ? feature.properties.stopCount : ''"
        />
    </button>
</template>

<script>
import pinia from '@/stores/index.ts';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store.ts';
import VsMapMarkerIcon from '@components/patterns/map-marker-icon/MapMarkerIcon.vue';

let mapStore = null;

/**
 * A marker for a map component
 *
 * @displayName Map Marker
 */

export default {
    name: 'VsMapMarker',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMapMarkerIcon,
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
    emits: [
        'showDetail',
        'setCategory',
    ],
    computed: {
        isActive() {
            if ((this.activePlace && this.activePlace.properties.id === this.feature.properties.id)
                || (this.highlightedPlace
                    && this.highlightedPlace.properties.id === this.feature.properties.id)) {
                return true;
            }

            return false;
        },
        ...mapState(useMapStore, {
            highlightedPlace(store) {
                return store.getHoveredStop(this.mapId);
            },
            activePlace(store) {
                if (store.getActivePlace(this.mapId)) {
                    return store.getActivePlace(this.mapId);
                }

                return '';
            },
            activeSubcat(store) {
                return store.selectedSubCategory;
            },
        }),
        getMarkerIcon() {
            let markerName;
            if (this.feature.properties.type !== '') {
                markerName = this.feature.properties.type;
            } else if (this.activeSubcat !== null) {
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
            if ((this.activePlace && this.activePlace.properties.id === this.feature.properties.id)
                || (this.highlightedPlace
                    && this.highlightedPlace.properties.id === this.feature.properties.id)) {
                return true;
            }

            if (this.activePlace && this.activePlace.properties.id === this.feature.properties.id) {
                mapStore.setActiveMarkerPos(this.feature.geometry.coordinates);
            }

            return false;
        },
        activePlace() {
            if (this.activePlace && this.activePlace.properties.id === this.feature.properties.id) {
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
                activeFeature: this.feature,
            });

            this.$emit('showDetail', this.feature);
            this.$emit('setCategory', this.feature.properties.type);
        },
        /**
         * Fires on hover over the maker
         */
        handleHover(feature) {
            mapStore.setHoveredPlace({
                mapId: this.mapId,
                hoveredFeature: feature,
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

        .vs-map-marker-icon--map-marker {
            transform: scale(1.2);
            transition: $transition-base;
        }
    }
}
</style>
