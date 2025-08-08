<template>
    <VsContainer
        data-test="vs-map-with-sidebar"
    >
        <VsRow>
            <VsCol>
                <div
                    class="vs-map-with-sidebar"
                    :ref="mapId"
                >
                    <div
                        class="vs-map-with-sidebar__side-panel"
                        :class="panelDisplayClass"
                        data-test="vs-map-with-sidebar__side-panel"
                    >
                        <VsMapWithSidebarPanel
                            :category-heading="categoryHeading"
                            :selected-category="selectedCategory"
                            :selected-subcategory="selectedSubCategory"
                            :current-stage="currentStage"
                            :selected-item="selectedItem"
                            :heading-level="mainHeadingExists ? '3' : '2'"
                            :subcategory-locations="subCatList"
                            :current-endpoint-data="currentEndpointData"
                            :panel-status="panelStatus"
                            :panel-message="currentStage === 0 ? panelMessage : null"
                            :total-pins="totalEndpointPins"
                            :current-list-item-focus="focussedListItem"
                            @set-category="setCategory"
                            @set-subcategory="setSubCategory"
                            @subcategories-filtered="filterSubCategories"
                            @set-stage="setStage"
                            @close-panel="closePanel"
                            @show-item-detail="showDetail"
                            @filter-places="filterPlaces"
                            @load-more-places="loadMorePlaces"
                        >
                            <template #closePanelText>
                                <slot name="close-side-panel-text" />
                            </template>

                            <template #reset-side-panel-text>
                                <slot name="reset-side-panel-text" />
                            </template>

                            <template #menu-btn-text>
                                <slot name="menu-btn-text" />
                            </template>

                            <template #panel-loading-message>
                                <slot name="panel-loading-message" />
                            </template>

                            <template #load-more-text>
                                <slot name="load-more-text" />
                            </template>
                        </VsMapWithSidebarPanel>
                    </div>
                    <div
                        class="vs-map-with-sidebar__map"
                        :class="mapDisplayClass"
                    >
                        <VsButton
                            class="vs-map-with-sidebar__map-toggle"
                            icon="vs-icon-control-menu"
                            size="sm"
                            @click="openMenu"
                            data-test="vs-map-with-sidebar__map-toggle"
                            variant="secondary"
                        >
                            <!-- @slot Text for panel open button  -->
                            <slot name="open-side-panel-text" />
                        </VsButton>
                        <VsMap
                            :is-visible="!panelVisible"
                            :labels="{
                            }"
                            :filters="filtersWithLocations"
                            :places="activePins"
                            :selected-item="selectedItem"
                            :map-id="mapId"
                            :show-polygons="showRegions"
                            :show-info-message="mapStatus !== ''"
                            @show-detail="showDetail"
                            @set-category="setCategory"
                            @map-ready="setMapReady"
                            @zoom-reset="resetZoom = false"
                            :bounds-data="regionBounds"
                            :reset-zoom="resetZoom"
                            :show-marker-popups="false"
                        >
                            <template #map-loading-text>
                                <!-- @slot Message to show when map is loading  -->
                                <slot name="map-loading-text" />
                            </template>
                            <template #info-message>
                                {{ infoMessage }}
                            </template>
                            <template #zoom-too-close>
                                <!-- @slot Message to show when map zoom is too close -->
                                <slot name="zoom-too-close" />
                            </template>
                            <template #zoom-too-far>
                                <!-- @slot Message to show when map zoom is too far -->
                                <slot name="zoom-too-far" />
                            </template>
                            <template #no-js>
                                <!-- @slot Message to show when JS is disabled  -->
                                <slot name="no-js" />
                            </template>
                        </VsMap>
                        <VsButtonToggleGroup
                            v-if="togglesWithLocations.length > 1"
                            data-test="vs-map-with-sidebar__map-toggle-group"
                            :initial-selected="selectedToggle"
                            :options="togglesWithLocations"
                            :buttons-label="buttonsLabel"
                            @toggle-changed="onToggleChanged"
                        />
                    </div>
                </div>

                <VsWarning class="vs-map-with-sidebar__no-js">
                    <!-- @slot Message to show when JS is disabled  -->
                    <slot name="no-js" />
                </VsWarning>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';
import VsButton from '@/components/button/Button.vue';
import VsWarning from '@/components/warning/Warning.vue';
import VsButtonToggleGroup from '@/components/button-toggle-group/ButtonToggleGroup.vue';
import axios from 'axios';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';
import VsMap from '@/components/map/Map.vue';
import VsMapWithSidebarPanel from './components/MapWithSidebarPanel.vue';

let mapStore = null;

/**
 * Renders a widget that display a map
 * and gives filtering options
 *
 * @displayName Main Map Wrapper
 */

export default {
    name: 'VsMapWithSidebar',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsMap,
        VsButton,
        VsMapWithSidebarPanel,
        VsButtonToggleGroup,
        VsWarning,
    },
    provide() {
        return {
            filters: this.filters,
            filtersWithLocations: this.filtersWithLocations,
            placesData: this.placesData,
            mapId: this.mapId,
            regions: this.regionsData,
            clearSelectionText: this.clearSelectionText,
            applyFiltersText: this.applyFiltersText,
            subCatList: this.subCatList,
            filtersAppliedText: this.filtersAppliedText,
            clearFiltersText: this.clearFiltersText,
            focussedListItem: this.focussedListItem,
        };
    },
    props: {
        /**
         * Heading for the categories view
         */
        categoryHeading: {
            type: String,
            default: '',
        },
        /**
         * Filter categories
         */
        filters: {
            type: Array,
            required: true,
        },
        /**
         * Data for individual places
         */
        placesData: {
            type: Array,
            required: true,
        },
        /**
         * Unique ID for the map - used to
         * differentiate between multiple map
         * instances in the Pinia store
         */
        mapId: {
            type: String,
            required: true,
        },
        /**
         * Level of the heading to be used in the
         * panel (to allow main heading in section)
         */
        mainHeadingExists: {
            type: Boolean,
            default: false,
        },
        /**
         * The ID of the currently selected item
         */
        initialSelected: {
            type: String,
            default: '',
        },
        /**
         * Data for the toggle buttons
         */
        toggleData: {
            type: Array,
            default: () => [],
        },
        /**
         * Data for the toggle buttons
         */
        buttonsLabel: {
            type: String,
            default: '',
        },
        /**
         * Text for the 'clear selection' button
         */
        clearSelectionText: {
            type: String,
            required: true,
        },
        /**
         * Text for the 'apply filters' button
         */
        applyFiltersText: {
            type: String,
            required: true,
        },
        /**
         * Endpoint for getting place details
         */
        detailsEndpoint: {
            type: String,
            default: '',
        },
        /**
         * Bounds if map needs to show a specific area
         */
        regionBounds: {
            type: Object,
            default: () => {},
        },
        /**
         * Text for clearing filters - to be passed
         * to buttons component
         */
        clearFiltersText: {
            type: String,
            required: true,
        },
        /**
         * Text for applied filters - to be passed
         * to buttons component
         */
        filtersAppliedText: {
            type: String,
            required: true,
        },
        /**
         * ID for map's place
         */
        placeId: {
            type: String,
            default: null,
        },
        /**
         * Text to show on map propmpting user to filter results
         */
        mapFilterMessage: {
            type: String,
            required: true,
        },
        /**
         * Text to show on map when there are no results
         */
        mapNoResultsMessage: {
            type: String,
            required: true,
        },
        /**
         * A message that appears at the bottom
         * of the side panel
         */
        panelMessage: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            panelVisible: false,
            selectedCategory: '',
            filterCategories: this.filters,
            selectedItem: null,
            activePins: this.placesData,
            currentlyHovered: '',
            showRegions: false,
            regions: [
            ],
            subCatList: null,
            selectedToggle: '',
            currentEndpointData: [],
            mapStatus: '',
            panelStatus: 'map-loading',
            mapReady: false,
            showPanelMessage: null,
            currentPanelEndpointFilters: '',
            totalEndpointPins: 0,
            focussedListItem: 0,
            resetZoom: false,
            currentStage: 0,
            selectedSubCategory: null,
        };
    },
    computed: {
        mapDisplayClass() {
            return this.panelVisible ? 'd-none d-lg-block' : '';
        },
        panelDisplayClass() {
            return this.panelVisible ? '' : 'd-none d-lg-block';
        },
        regionsData() {
            return this.placesData.filter((place) => place.geometry.type === 'Polygon'
                || place.geometry.type === 'MultiPolygon');
        },
        ...mapState(useMapStore, {
            subCatActiveFilters(store) {
                return store.activeSubcatFilters;
            },
        }),
        infoMessage() {
            let msg = '';

            switch (this.mapStatus) {
            case ('no-results'):
                msg = this.mapNoResultsMessage;
                break;
            case ('filter-results'):
                msg = this.mapFilterMessage;
                break;
            default:
                break;
            }

            return msg;
        },
        /**
         * A list of the categories that actually exist in the data, so we can filter out any
         * category filters with 0 options - targeting the removal of icentres
         */
        existingCategories() {
            if (this.placesData) {
                return [
                    ...new Set(
                        this.placesData.map((place) => place.properties.category.id),
                    ),
                ];
            }

            return [];
        },
        /**
         * Filters that correspond with any existing location in the data, or which have a set of
         * subCategories themselves
         */
        filtersWithLocations() {
            return this.filters.filter(
                (filter) => {
                    if (this.existingCategories.includes(filter.id)) {
                        return true;
                    }

                    if (filter.subCategory && filter.subCategory.length) {
                        return true;
                    }

                    return false;
                },
            );
        },
        /**
         * Toggles that correspond with any existing location in the data
         */
        togglesWithLocations() {
            if (this.existingCategories.indexOf('vics') === -1) {
                return this.toggleData.filter((toggle) => toggle.value !== 'icentres');
            }

            return this.toggleData;
        },
    },
    watch: {
        selectedSubCategory(val) {
            if (val === null) {
                this.mapStatus = '';
                this.resetZoom = true;
            }
        },
    },
    mounted() {
        mapStore = useMapStore();
        this.selectedToggle = this.initialSelected;

        if (this.emitter) {
            this.emitter.on('clearSelectedSubcats', () => {
                this.resetZoom = true;
            });
        }
    },
    methods: {
        openMenu() {
            this.setStage(0);
            this.openPanel();
        },
        /**
         * Close the side panel
         */
        closePanel() {
            this.panelVisible = false;
        },
        /**
         * Open the side panel
         */
        openPanel() {
            this.panelVisible = true;
        },
        /**
         * Show an item's details
         */
        showDetail(feature) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            this.selectedItem = feature;
            this.setStage(2);
            this.openPanel();
            if (this.selectedSubCategory === null) {
                this.filterPlaces(this.selectedCategory);
            }
        },
        /**
         * Sets the currently chosen category
         */
        setCategory(cat) {
            this.selectedCategory = cat;
            if (this.selectedSubCategory === null) {
                this.filterPlaces(cat);
            }
        },
        /**
         * Sets a subcategory
         */
        setSubCategory(subcat) {
            mapStore.setSelectedSubcat(subcat);
            this.selectedSubCategory = subcat;

            if (subcat !== null) {
                this.getSubcatMarkerData();
                this.selectedCategory = subcat;
            } else {
                mapStore.setActiveSubcatFilters([]);
                this.showAllPlaces();
            }
        },
        /**
         * Filters subcategories
         */
        filterSubCategories(filters) {
            let filterString = '';

            filters.forEach((filter) => {
                const filterSuffix = `&cat=${filter}`;
                filterString += filterSuffix;
            });

            this.currentPanelEndpointFilters = filterString;

            this.getSubcatMarkerData(filterString);
            this.getSubcatPanelData(filterString, 0);
        },
        /**
         * Makes a call to the API to get marker data for
         * the current subcategory
         */
        getSubcatMarkerData(endpointFilters) {
            const subCat = this.filters.filter((cat) => cat.id === this.selectedSubCategory);

            if (subCat.length > 0) {
                let endpoint = subCat[0].pinsEndpoint;
                if (typeof endpointFilters !== 'undefined') {
                    endpoint += endpointFilters;
                }

                this.activePins = [];

                // show markers only if the subcategory has been filtered
                if (typeof endpointFilters === 'undefined') {
                    this.activePins = [];
                    this.mapStatus = 'filter-results';
                } else {
                    axios.get(endpoint).then((response) => {
                        this.totalEndpointPins = response.data.features.length;

                        if (this.totalEndpointPins === 0) {
                            this.mapStatus = 'no-results';
                        } else {
                            response.data.features.forEach((feature) => {
                                const modifiedFeature = feature;
                                modifiedFeature.properties.apiData = true;
                                this.activePins.push(modifiedFeature);
                            });
                            this.mapStatus = '';
                        }
                    });
                }
            }
        },
        /**
         * Makes a call to the endpoint in the subcategory data which
         * provides a random 24 items for the side panel
         */
        getSubcatPanelData(endpointFilters, page) {
            const subCat = this.filters.filter((cat) => cat.id === this.selectedSubCategory);
            let endpoint = subCat[0].listProductsEndPoint;
            if (typeof endpointFilters !== 'undefined') {
                endpoint += endpointFilters;
            }

            if (page !== 0) {
                endpoint += `${endpointFilters}&page=${page}`;
            }

            this.panelStatus = 'loading-data';

            axios.get(endpoint).then((response) => {
                if (typeof response.data.data.products !== 'undefined') {
                    this.setStage(1);
                    if (page === 0) {
                        this.subCatList = response.data.data.products;
                        this.focussedListItem = 0;
                    } else {
                        this.focussedListItem = page * 24;
                        this.subCatList = this.subCatList.concat(response.data.data.products);
                    }
                } else {
                    this.mapStatus = 'no-results';
                }
                this.panelStatus = null;
            });
        },

        /**
         * Sets the current stage
         */
        setStage(num) {
            // ensure that if data is coming from an endpoint then
            // it is loaded before moving to the next stage
            if (num === 2 && this.detailsEndpoint !== '' && this.selectedSubCategory !== null) {
                const endpoint = `${this.detailsEndpoint}${this.selectedItem.properties.id}`;
                axios.get(endpoint).then((response) => {
                    const dataArr = [];
                    dataArr.push(response.data.data);
                    this.currentEndpointData = dataArr;
                    this.currentStage = num;
                });
            } else {
                this.currentStage = num;
                if (this.currentStage === 0) {
                    this.currentEndpointData = [];
                    if (this.selectedSubCategory === null) {
                        this.resetZoom = true;
                        this.showAllPlaces();
                        this.mapStatus = '';
                    } else {
                        this.getSubcatMarkerData();
                    }
                    this.selectedToggle = 'places';
                } else if (this.currentStage === 1) {
                    if (this.selectedSubCategory === null) {
                        this.filterPlaces(this.selectedCategory);
                    }
                }
            }

            if (num !== 2) {
                // if the stage isn't showing a place's details
                // make sure the store doesn't have an active place set
                mapStore.setActivePlace({
                    mapId: this.mapId,
                    activeFeature: '',
                });

                this.selectedItem = null;
            }
        },
        /**
         * Updates active pins for map
         */
        filterPlaces(id) {
            if (id === 'regions') {
                this.showRegions = true;
                this.activePins = [];
                this.selectedToggle = 'regions';
            } else {
                this.showRegions = false;
                this.selectedToggle = 'places';

                const filteredPlaces = this.placesData
                    .filter((place) => {
                        if (typeof place.properties !== 'undefined') {
                            return place.properties.category.id === id;
                        }

                        return false;
                    });
                this.activePins = filteredPlaces;
            }
        },
        /**
         * Load more places from endpoint
         */
        loadMorePlaces(page) {
            this.getSubcatPanelData(this.currentPanelEndpointFilters, page);
        },
        /**
         * Show all pins, remove regions
         */
        showAllPlaces() {
            this.activePins = this.placesData;
            this.showRegions = false;
        },
        /**
         * When toggle is changed, set appropriate category
         */
        onToggleChanged(category) {
            if (category === 'regions') {
                this.setCategory('regions');
                this.setStage(1);
            } else if (category === 'icentres') {
                this.setCategory('vics');
                this.setStage(1);
            } else if (category === 'places-regional') {
                this.setCategory('twnv');
                this.setStage(1);
            } else {
                this.showAllPlaces();
                this.setStage(0);
            }
        },
        /**
         * Set whether or not map is ready to use
         */
        setMapReady(val) {
            this.mapReady = val;
            if (val) {
                this.panelStatus = null;
            } else {
                this.panelStatus = 'loading';
            }
        },
        /**
         * Returns true if a given category by id has any locations
         */
        categoryHasData(id) {
            return this.existingCategories.indexOf(id) !== -1;
        },
    },
};
</script>

<style lang="scss">
    .vs-map-with-sidebar {
        height: 75vh;
        display: flex;

        @include media-breakpoint-up(lg) {
            height: 650px;
        }

        .container,
        .row {
            height: 100%;
        }

        &__side-panel {
            position: relative;
            width: 100%;

            @include media-breakpoint-up(lg) {
                flex: 0 0 354px;
                max-width: 354px;
            }
        }

        &__map {
            position: relative;
            height: 100%;
            width: 100%;
        }

        &__map-toggle.vs-button {
            position: absolute;
            top: $vs-spacer-050;
            left: $vs-spacer-050;
            max-width: calc(100% - 60px);
            padding: $vs-spacer-025 $vs-spacer-075;
            // ensure button can always be clicked
            // to avoid user getting trapped by overlay
            z-index: 100;

            @include media-breakpoint-up(lg) {
                display: none;
            }
        }

        &__no-js {
            display: none;
        }

        .vs-button-toggle-group {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin-bottom: 0;

            @include media-breakpoint-up(lg) {
                display: none;
            }
        }
    }

    .os-api-branding.logo,
    .os-api-branding.copyright {
        margin-bottom: $vs-spacer-200 !important; //important needed for overriding OS styles
    }

    @include no-js {
        .vs-map-with-sidebar {
            display: none;

            &__no-js {
                display: flex;
            }
        }
    }
</style>
