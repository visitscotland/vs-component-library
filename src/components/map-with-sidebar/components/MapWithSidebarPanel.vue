<template>
    <section
        data-test="vs-map-with-sidebar-panel"
        class="vs-map-with-sidebar-panel"
        :class="panelClasses"
    >
        <div
            class="vs-map-with-sidebar-panel__header-section"
            :class="headerClasses"
        >
            <div class="vs-map-with-sidebar-panel__buttons d-lg-none">
                <div
                    class="vs-map-with-sidebar-panel__back"
                    v-if="currentStage > 1 || selectedSubcategory"
                >
                    <VsButton
                        class="vs-map-with-sidebar-panel_menu"
                        icon="bars-mobile-menu"
                        size="sm"
                        @click="stageBack"
                        data-test="vs-map-with-sidebar__menu-toggle"
                        variant="secondary"
                    >
                        <!-- @slot Text for panel menu button  -->
                        <slot name="menu-btn-text" />
                    </VsButton>
                </div>

                <div
                    class="vs-map-with-sidebar-panel__back"
                    v-if="currentStage === 1 || selectedSubcategory"
                >
                    <VsButton
                        icon-only
                        icon="internal-link-back"
                        size="md"
                        variant="transparent"
                        @click="stageBack"
                        data-test="vs-map-with-sidebar-panel--btn-back"
                    >
                        <!-- @slot Text for panel back button  -->
                        <slot name="back-btn-text" />
                    </VsButton>
                </div>
                <div
                    class="vs-map-with-sidebar-panel__close"
                >
                    <VsButton
                        icon-only
                        icon="vs-icon-control-dismiss"
                        size="md"
                        variant="transparent"
                        @click="closePanel"
                        data-test="vs-map-with-sidebar-panel--btn-close"
                    >
                        <!-- @slot Text for panel close button  -->
                        <slot name="close-side-panel-text" />
                    </VsButton>
                </div>
            </div>

            <div
                class="vs-map-with-sidebar-panel__back d-none d-lg-block"
                v-if="currentStage > 0 || selectedSubcategory"
            >
                <VsButton
                    icon-only
                    icon="internal-link-back"
                    size="md"
                    variant="transparent"
                    @click="stageBack"
                    data-test="vs-map-with-sidebar-panel--btn-back"
                >
                    <!-- @slot Text for panel back button  -->
                    <slot name="back-btn-text" />
                </VsButton>
            </div>

            <VsHeading
                :level="headingLevel"
                :heading-style="currentStage === 0 ? 'heading-m' : 'heading-xs'"
                class="vs-map-with-sidebar-panel__heading text-center mt-200 mt-lg-0"
                :class="currentStage === 2 ? 'd-none d-lg-block' : ''"
                v-if="currentHeading !== ''"
                data-test="vs-map-with-sidebar-panel__heading"
            >
                {{ currentHeading }}
            </VsHeading>

            <div
                class="vs-map-with-sidebar-panel__reset"
                :class="currentStage < 2 ? 'd-lg-none' : ''"
            >
                <VsButton
                    icon-only
                    icon="vs-icon-control-dismiss"
                    size="md"
                    variant="transparent"
                    @click="resetPanel"
                    data-test="vs-map-with-sidebar-panel--btn-reset"
                >
                    <!-- @slot Text for panel reset button  -->
                    <slot name="reset-side-panel-text" />
                </VsButton>
            </div>
        </div>

        <template v-if="currentStage === 0">
            <template v-if="selectedSubcategory !== null">
                <VsMapWithSidebarSubcategory
                    :data="selectedSubcategoryData[0].subCategory"
                    :selected-sub-category="selectedSubcategory"
                />
                <VsMapWithSidebarControls />
            </template>
            <template v-else>
                <VsMapWithSidebarCategory
                    v-for="filter in filtersWithLocations"
                    :key="filter.id"
                    :category-name="filter.label"
                    :type="filter.id"
                    :has-sub-cat="subCatExists(filter)"
                />
            </template>

            <template v-if="panelMessage !== null">
                <div class="vs-map-with-sidebar-panel__bottom-message">
                    <p>
                        {{ panelMessage }}
                    </p>
                </div>
            </template>
        </template>
        <template v-if="currentStage === 1">
            <template v-if="selectedSubcategory !== null">
                <div class="vs-map-with-sidebar-panel__list-container">
                    <VsMapWithSidebarListItem
                        v-for="(place, index) in subcategoryLocations"
                        :key="place.id"
                        :item-data="place"
                        :from-endpoint="true"
                        :focussed="index === currentListItemFocus"
                        @show-item-detail="showDetail(place)"
                    />

                    <VsButton
                        v-if="showLoadMore"
                        class="vs-map-with-sidebar-panel__load-more"
                        data-test="vs-map-with-sidebar-panel__load-more"
                        @click="loadMorePlaces()"
                        @keyup.enter="loadMorePlaces()"
                    >
                        <!-- @slot Text for load more button  -->
                        <slot name="load-more-text" />
                    </VsButton>
                </div>
                <VsMapWithSidebarButtons
                    :content-data="{}"
                    :filter-count="subCatFilterCount"
                    @clear-filters="clearSubCatFilters"
                />
            </template>
            <template v-else>
                <div
                    v-for="place in currentData"
                    :key="place.id"
                >
                    <VsMapWithSidebarListItem
                        v-if="typeof place.properties !== 'undefined'
                            && place.properties.category.id === selectedCategory"
                        :item-data="place"
                        @show-item-detail="showDetail(place)"
                    />
                </div>
            </template>
        </template>
        <template v-if="currentStage === 2">
            <VsMapWithSidebarDetail
                :heading-level="detailHeadingLevel"
                :content-data="currentPlaceData[0]"
            />

            <VsMapWithSidebarButtons
                :content-data="currentPlaceData[0]"
            />
        </template>
        <div
            v-if="panelStatus !== null"
            class="vs-map-with-sidebar-panel__overlay"
        >
            <div
                v-if="!!$slots['panel-loading-message']
                    && panelStatus !== 'map-loading'"
                class="vs-map-with-sidebar-panel__overlay-box"
            >
                <p class="vs-map-with-sidebar-panel__overlay-text">
                    <!-- @slot Text for panel reset button  -->
                    <slot name="panel-loading-message" />
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';
import VsMapWithSidebarCategory from './MapWithSidebarCategory.vue';
import VsMapWithSidebarSubcategory from './MapWithSidebarSubcategory.vue';
import VsMapWithSidebarListItem from './MapWithSidebarListItem.vue';
import VsMapWithSidebarDetail from './MapWithSidebarDetail.vue';
import VsMapWithSidebarButtons from './MapWithSidebarButtons.vue';
import VsMapWithSidebarControls from './MapWithSidebarControls.vue';

let mapStore = null;

/**
 * Renders a side panel for the map wrapper component
 *
 * @displayName Main Map Wrapper Panel
 */

export default {
    name: 'VsMapWithSidebarPanel',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsMapWithSidebarCategory,
        VsMapWithSidebarSubcategory,
        VsHeading,
        VsMapWithSidebarListItem,
        VsMapWithSidebarDetail,
        VsMapWithSidebarButtons,
        VsMapWithSidebarControls,
    },
    inject: [
        'filters',
        'filtersWithLocations',
        'placesData',
        'regions',
        'mapId',
        'focussedListItem',
    ],
    props: {
        /**
         * Heading for the categories view
         */
        categoryHeading: {
            type: String,
            default: '',
        },
        /**
         * Heading level for panel header
         */
        headingLevel: {
            type: String,
            default: '2',
        },
        /**
         * Currently selected category
         */
        selectedCategory: {
            type: String,
            default: '',
        },
        /**
         * Currently selected subcategory
         */
        selectedSubcategory: {
            type: String,
            default: null,
        },
        /**
         * The current stage
         */
        currentStage: {
            type: Number,
            required: true,
        },
        /**
         * The ID of thecurrently selected item
         */
        selectedItem: {
            type: Object,
            default: null,
        },
        /**
         * The ID of the currently hover item
         */
        hovered: {
            type: String,
            default: '',
        },
        /**
         * The ID of the currently hover item
         */
        subcategoryLocations: {
            type: Array,
            default: null,
        },
        /**
         * Place data defined from endpoint
         */
        currentEndpointData: {
            type: Array,
            default: () => [],
        },
        /**
         * Whether or not to show a panel message
         */
        panelStatus: {
            type: String,
            default: null,
        },
        /**
         * A message that appears at the bottom
         * of the side panel
         */
        panelMessage: {
            type: String,
            default: null,
        },
        /**
         * Total amount of places coming from endpoint.
         * Used to work out if there's more to load in panel.
         */
        totalPins: {
            type: Number,
            default: 0,
        },
        /**
         * The number of the list item that should be focussed
         * on creation
         */
        currentListItemFocus: {
            type: Number,
            default: 0,
        },
    },
    emits: [
        'close-panel',
        'load-more-places',
        'set-stage',
        'set-subcategory',
    ],
    data() {
        return {
            placesLoaded: 1,
        };
    },
    computed: {
        currentHeading() {
            let headingText = '';

            if (this.selectedSubcategory !== null) {
                headingText = this.selectedSubcategoryData[0].label;
            } else {
                switch (this.currentStage) {
                case 0:
                    headingText = this.categoryHeading;
                    break;
                case 1: case 2:
                    headingText = this.currentFilter.label;
                    break;
                default:
                    break;
                }
            }

            return headingText;
        },
        currentData() {
            if (this.selectedCategory === 'regions') {
                return this.regions;
            }

            return this.placesData;
        },
        panelClasses() {
            let panelClasses = '';
            if (this.currentStage === 2) {
                panelClasses += ' vs-map-with-sidebar-panel--small-padding';
            }

            return panelClasses;
        },
        headerClasses() {
            if (this.currentStage === 1) {
                return 'vs-map-with-sidebar-panel__header-section--with-spacer';
            }

            if (this.currentStage === 2) {
                return 'vs-map-with-sidebar-panel__header-section--overlapped';
            }

            return '';
        },
        currentFilter() {
            let currentFilter = '';
            this.filters.forEach((filter) => {
                if (filter.id === this.selectedCategory) {
                    currentFilter = filter;
                }
            });

            return currentFilter;
        },
        currentPlaceData() {
            let data = this.placesData;

            if (this.selectedCategory === 'regions') {
                data = this.regions;
            }

            if (this.currentEndpointData.length > 0) {
                return this.refineEndpointData(this.currentEndpointData);
            }

            return data.filter((obj) => {
                if (typeof obj.properties !== 'undefined' && this.selectedItem) {
                    return obj.properties.id === this.selectedItem.properties.id;
                }

                return false;
            });
        },
        selectedSubcategoryData() {
            if (this.selectedSubcategory) {
                const data = this.filters.filter((item) => item.id === this.selectedSubcategory);

                return data;
            }

            return [];
        },
        ...mapState(useMapStore, {
            subCatFilterCount(store) {
                return store.activeSubcatFilters.length;
            },
        }),
        detailHeadingLevel() {
            const headingNum = parseInt(this.headingLevel, 10);
            const newHeading = headingNum + 1;
            const headingStr = newHeading.toString();

            return headingStr;
        },
        showLoadMore() {
            if (this.subcategoryLocations.length >= this.totalPins
                || this.subcategoryLocations.length === 0) {
                return false;
            }

            return true;
        },
    },
    watch: {
        currentFilter() {
            this.placesLoaded = 1;
        },
    },
    mounted() {
        mapStore = useMapStore();
    },
    methods: {
        /**
         * Emits 'close-panel'
         */
        closePanel() {
            this.$emit('close-panel');

            // On desktop the close button on the side panel is understood to mean resetting the
            // filter as the map is always visible. On mobile it is understood to mean closing
            // the overlay, and opening the panel from the region filter then closing it and having
            // it reset the map to places is very disjointed.
            if (
                window.innerWidth >= 1292
                && this.currentStage === 2
            ) {
                this.$emit('set-subcategory', null);
            }
        },
        /**
         * Moves back stages dependent on current state
         */
        stageBack() {
            if (this.selectedSubcategory && this.currentStage === 0) {
                // if the user is on the subcategory page, keep the stage the same
                // but reset the subcategory
                this.$emit('set-subcategory', null);
            } else if (this.selectedSubcategory !== null && this.subcategoryLocations === null) {
                // if the user has selected a subcategory item straight from the subcategory
                // filter menu, take them back to that stage
                this.setStage(0);
            } else {
                const previousStage = this.currentStage - 1;
                this.setStage(previousStage);
            }
        },
        /**
         * Resets the panel
         */
        resetPanel() {
            mapStore.setSelectedSubcat(null);
            this.setStage(0);
        },
        /**
         * Emits the current stage
         */
        setStage(stageNum) {
            if (stageNum === 0) {
                this.placesLoaded = 1;
            }

            this.$emit('set-stage', stageNum);
        },
        /**
         * Determines whether or not a subCategory
         * array exists and has data in it
         */
        subCatExists(cat) {
            if (typeof cat.subCategory !== 'undefined'
                && cat.subCategory.length > 0) {
                return true;
            }

            return false;
        },
        /**
         * transforms endpoint data into format to be used
         */
        refineEndpointData(data) {
            const refinedData = [{
                isEndpoint: true,
                properties: {
                    category: data[0].category[0].id,
                    id: data[0].id,
                    image: data[0].images[0].mediaUrl,
                    placeTitle: data[0].name,
                    description: data[0].description,
                    link: {
                        label: data[0].productLink.label,
                        link: data[0].productLink.link,
                        type: data[0].productLink.type,
                    },
                    website: {
                        label: data[0].website.label,
                        link: data[0].website.link,
                        type: data[0].website.type,
                    },
                    address: {
                        shortAddress: '',
                    },
                },
            }];

            if (typeof data[0].address !== 'undefined') {
                refinedData[0].properties.address.shortAddress = data[0].address.shortAddress;
            }

            return refinedData;
        },
        /**
         * clear the subcategory filters
        */
        clearSubCatFilters() {
            mapStore.setActiveSubcatFilters([]);
            this.setStage(0);
        },
        /**
         * Load more places from endpoint
        */
        loadMorePlaces() {
            this.placesLoaded += 1;
            this.$emit('load-more-places', this.placesLoaded);
        },
    },
};
</script>

<style lang="scss">
    .vs-map-with-sidebar-panel {
        padding: $spacer-125 $spacer-075 $spacer-0;
        border: 1px solid $vs-color-border-primary;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &--small-padding {
            padding-top: $spacer-150;
        }

        &__heading.vs-heading {
            flex-grow: 1;
            margin: $spacer-500 $spacer-200 $spacer-0;
        }

        &__header-section {
            display: flex;
            min-height: $spacer-400;
            align-items: center;
            margin-bottom: $spacer-125;

            &--overlapped {
                position: absolute;
                width: calc(100% - #{$spacer-150});
            }

            @include media-breakpoint-up(lg) {
                min-height: $spacer-200;
            }
        }

        &__buttons {
            position: absolute;
            height: calc(#{$spacer-300} + #{$spacer-050});
            width: calc(100% - 2px);
            top: 1px;
            left: 1px;
            background-color: $vs-color-background-inverse;
            z-index: 1;
        }

        &__close,
        &__back {
            position: absolute;
            top: $spacer-075;
            z-index: 5;
        }

        &__back {
            left: $spacer-075;
        }

        &__close {
            right: $spacer-075;
        }

        &__reset {
            display: none;
        }

        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.4);
        }

        &__overlay-box {
            border: 1px solid $vs-color-border-highlight;
            border-radius: $border-radius-default;
            height: 142px;
            width: 200px;
            background: $vs-color-background-inverse;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: $spacer-150;
        }

        &__overlay-text {
            font-size: $font-size-3;
            margin-bottom: 0;
            text-align: center;
        }

        &__load-more {
            width: 100%;
            flex-shrink: 0;
            margin: $spacer-100 0;
        }

        &__list-container {
            flex-grow: 2;
            overflow-y: scroll;
            overflow-x: visible;
            display: block;
            margin: -#{$spacer-100} -#{$spacer-100} 0;
            padding: $spacer-100 $spacer-100 0;
        }

        &__bottom-message {
            position: absolute;
            bottom: 1px;
            background: $vs-color-background-inverse;
            left: 1px;
            font-size: $font-size-4;
            text-align: center;
            padding: $spacer-100;
            display: flex;
            justify-content: center;
            // to avoid overlap of scroll bar
            width: calc(100% - 15px);

            p {
                margin-bottom: $spacer-0;
                max-width: 75%;
            }
        }

        .vs-main-map-category:last-of-type::before {
            display: none;
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-125 $spacer-100 $spacer-0;
            border-right: none;

            &__header-section {
                display: flex;
                margin-bottom: $spacer-125;

                &--with-spacer {
                    padding-right: $spacer-200;
                }

                &--overlapped {
                    position: relative;
                    width: 100%;
                }
            }

            &__close {
                display: none;
            }

            &__back {
                left: 0;
                top: 0;
                position: relative;
            }

            &__reset {
                display: block;
            }

            &__message {
                position: sticky;
                bottom: -1px;
                padding: $spacer-100 0;
                width: 100%;
                background: $vs-color-background-inverse;
                text-align: center;
                margin-bottom: $spacer-0;
                font-size: $font-size-4;

                @include media-breakpoint-up(lg) {
                    padding: $spacer-100;
                }
            }
        }
    }
</style>
