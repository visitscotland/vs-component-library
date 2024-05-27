<template>
    <button
        type="button"
        class="vs-map-with-sidebar-list-item"
        :class="isActive ? 'vs-map-with-sidebar-list-item--hovered' : ''"
        data-test="vs-map-with-sidebar-list-item"
        @click="showItemDetail(formattedData)"
        @keyup.enter="showItemDetail(formattedData)"
        @mouseover="itemHover(formattedData)"
        @mouseleave="itemHover('')"
        @focusin="itemHover(formattedData)"
        @focusout="itemHover('')"
        ref="btn"
    >
        <div class="vs-map-with-sidebar-list-item__img-container">
            <VsImg
                v-if="typeof formattedData.properties.image !== 'undefined'"
                :src="formattedData.properties.image"
                class="vs-map-with-sidebar-list-item__img"
            />
        </div>
        <span
            class="vs-map-with-sidebar-list-item__text"
        >
            {{ formattedData.properties.title }}
        </span>

        <VsIcon
            name="internal-link"
            variant="tertiary"
            size="xxs"
            class="vs-map-with-sidebar-list-item__icon"
        />
    </button>
</template>

<script>
import VsImg from '@/components/img/Img.vue';
import VsIcon from '@/components/icon/Icon.vue';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';

let mapStore = null;

/**
 * Renders a list item for the map filter tool.
 * Consists of an image and text in the form of a link.
 *
 * @displayName Main Map Wrapper List Item
 */
export default {
    name: 'VsMapWithSidebarListItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsImg,
        VsIcon,
    },
    inject: [
        'mapId',
    ],
    props: {
        /**
         * Name of item
         */
        itemData: {
            type: Object,
            required: true,
        },
        /** If the data source is from an API endpoint */
        fromEndpoint: {
            type: Boolean,
            default: false,
        },
        /**
        * If the component should be focussed on mount
         */
        focussed: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            formattedData: {
            },
        };
    },
    computed: {
        isActive() {
            if (this.highlightedPlace && this.formattedData
                && this.highlightedPlace.properties.id === this.formattedData.properties.id) {
                return true;
            }

            return false;
        },
        ...mapState(useMapStore, {
            highlightedPlace(store) {
                return store.getHoveredStop(this.mapId);
            },
        }),
    },
    created() {
        if (!this.fromEndpoint) {
            this.formattedData = this.itemData;
        } else {
            this.formatApiData();
        }
    },
    mounted() {
        mapStore = useMapStore();

        if (this.focussed) {
            this.$refs.btn.focus();
        }
    },
    methods: {
        /**
         * Emits an event with the ID of the chosen
         * item as the payload
         */
        showItemDetail(feature) {
            mapStore.setActivePlace({
                mapId: this.mapId,
                activeFeature: feature,
            });

            this.$parent.$emit('show-item-detail', feature);
            this.$parent.$emit('set-stage', 2);
        },
        /**
         * Emits an event with the ID of the chosen
         * item on hover
         */
        itemHover(feature) {
            mapStore.setHoveredPlace({
                mapId: this.mapId,
                hoveredFeature: feature,
            });
        },
        /**
         * Formats API data to match internal data
         */
        formatApiData() {
            this.formattedData = {
                geometry: {
                    coordinates: [
                        this.itemData.longitude,
                        this.itemData.latitude,
                    ],
                    type: 'Point',
                },
                properties: {
                    category: this.itemData.category[0],
                    description: this.itemData.description,
                    id: this.itemData.id,
                    image: typeof this.itemData.images !== 'undefined' ? this.itemData.images[0].mediaUrl : '',
                    title: this.itemData.name,
                    link: {
                        label: this.itemData.website.label,
                        link: this.itemData.website.link,
                        type: this.itemData.website.type,
                    },
                },
                type: 'Point',
            };
        },
    },
};
</script>

<style lang="scss">
    .vs-map-with-sidebar-list-item {
        color: $vs-color-text;
        display: flex;
        position: relative;
        width: 100%;
        height: 100px;
        align-items: center;
        outline: none;
        background: none;
        border: none;
        font-size: $font-size-h4;
        text-transform: none;
        font-family: $font-family-base;
        font-weight: $font-weight-bold;
        padding: $spacer-1;
        min-height: 88px;
        border-bottom: 1px solid $vs-color-border;
        text-align: left;

        &:hover,
        &--hovered {
            .vs-map-with-sidebar-list-item__text{
                text-decoration: underline;
            }
        }

        &:focus {
            @extend %primary-button-focus;
            z-index: 2;
            outline: none;
        }

        &__img-container {
            flex-basis: 100px;
            flex-grow: 0;
            flex-shrink: 0;
            height: 90px;
            position: relative;
            overflow: hidden;
        }

        &__img {
           width: 120px;
           height: 90px;
           object-fit: cover;
        }

        &__icon,
        &__text {
            margin-left: $spacer-2;
        }

        @include media-breakpoint-up(lg) {
            &__img {
                margin-right: $spacer-5;
            }
        }
    }
</style>
