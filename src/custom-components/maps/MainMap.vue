<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
    <div class="vs-map">
        <div
            class="vs-map__container"
            :class="!showError ? 'd-block' : 'd-none'"
        >
            <div class="vs-map__controls">
                <VsMapSidebar
                    :query="query"
                    :selected-categories="selectedTopLevelCategory"
                    :header-label="props.labels.heading"
                    :close-sidebar-button-label="props.labels.closeSidebarBtn"
                    :search-bar-aria-label="props.labels.searchBarAriaLabel"
                    :input-placeholder-label="props.labels.inputPlaceholder"
                    :search-button-label="props.labels.searchButton"
                    :clear-map-label="props.labels.clearMap"
                    :sub-filter-header-label="props.labels.subFilterHeader"
                    :search-results-label="props.labels.searchResults"
                    :open-sidebar-button-label="props.labels.openSidebarButton"
                    @search-input-changed="searchByText"
                    @reset-map="resetMap(true)"
                >
                    <template
                        #vs-map-sidebar-sub-filters
                        v-if="selectedTopLevelCategory"
                    >
                        <div class="vs-map-sidebar__sub-filters">
                            <VsButton
                                v-for="
                                    (subCategory, key) in
                                        categoryLabelData[categoryKey].subCategory"
                                :key
                                :variant="selectedSubCategories.has(subCategory.id) ? 'primary' : 'secondary'"
                                size="sm"
                                @click="searchBySubCategory(subCategory.id, key)"
                            >
                                {{ subCategory.label }}
                            </VsButton>
                        </div>
                    </template>

                    <template #vs-map-sidebar-search-results>
                        <Suspense>
                            <div id="search-container">
                                <gmp-place-search
                                    id="nearbySearch"
                                    orientation="vertical"
                                    selectable
                                    style="display: none"
                                >
                                    <gmp-place-nearby-search-request id="nearbySearchQuery">
                                    </gmp-place-nearby-search-request>
                                    <gmp-place-content-config>
                                        <gmp-place-address></gmp-place-address>
                                        <gmp-place-rating></gmp-place-rating>
                                        <gmp-place-type></gmp-place-type>
                                        <gmp-place-price></gmp-place-price>
                                        <gmp-place-accessible-entrance-icon>
                                        </gmp-place-accessible-entrance-icon>
                                        <gmp-place-opening-hours></gmp-place-opening-hours>
                                        <gmp-place-reviews></gmp-place-reviews>
                                        <gmp-place-attribution
                                            light-scheme-color="gray"
                                            dark-scheme-color="gray"
                                        ></gmp-place-attribution>
                                    </gmp-place-content-config>
                                </gmp-place-search>
                                <gmp-place-search
                                    id="textSearch"
                                    orientation="vertical"
                                    selectable
                                    style="display: none"
                                >
                                    <gmp-place-text-search-request id="textSearchQuery">
                                    </gmp-place-text-search-request>
                                    <gmp-place-content-config>
                                        <gmp-place-address></gmp-place-address>
                                        <gmp-place-rating></gmp-place-rating>
                                        <gmp-place-type></gmp-place-type>
                                        <gmp-place-price></gmp-place-price>
                                        <gmp-place-accessible-entrance-icon>
                                        </gmp-place-accessible-entrance-icon>
                                        <gmp-place-opening-hours></gmp-place-opening-hours>
                                        <gmp-place-reviews></gmp-place-reviews>
                                        <gmp-place-attribution
                                            light-scheme-color="gray"
                                            dark-scheme-color="gray"
                                        ></gmp-place-attribution>
                                    </gmp-place-content-config>
                                </gmp-place-search>
                            </div>
                        </Suspense>
                        <VsAlert
                            id="vs-map__no-results-alert"
                            v-if="noResults"
                            class="mt-075 mb-150"
                            size="small"
                        >
                            <span>
                                {{ noResultsMessage }}
                                <a
                                    href="#"
                                    @click.prevent="resetMap(true, true)"
                                >
                                    {{ resetMapNoResultsMessage }}
                                </a>
                            </span>
                        </VsAlert>
                    </template>
                </VsMapSidebar>
                <div
                    class="vs-map__filter-controls"
                    v-if="(currentZoom >= CATEGORY_VISIBLE_ZOOM) && googleMapStore.sidebarOpen"
                >
                    <VsButton
                        v-for="(category, key) in categoryLabelData"
                        :key
                        class="vs-map__filter-controls-button"
                        :icon="categoryData[category.id].icon"
                        :variant="selectedTopLevelCategory === category.id ? 'primary' : 'secondary'"
                        @click.prevent="selectCategory(category.id, key)"
                    >
                        {{ category.label }}
                    </VsButton>
                </div>
            </div>

            <div class="vs-map__wrapper">
                <div
                    id="vs-map"
                    map-id="vs-map"
                    ref="vsMap"
                >
                </div>
                <Suspense>
                    <div id="detail-container">
                        <gmp-place-details
                            id="placeDetails"
                            style="display: none"
                        >
                            <gmp-place-details-place-request id="placeRequest"></gmp-place-details-place-request>
                            <gmp-place-content-config>
                                <gmp-place-address></gmp-place-address>
                                <gmp-place-rating></gmp-place-rating>
                                <gmp-place-type></gmp-place-type>
                                <gmp-place-price></gmp-place-price>
                                <gmp-place-accessible-entrance-icon>
                                </gmp-place-accessible-entrance-icon>
                                <gmp-place-opening-hours></gmp-place-opening-hours>
                                <gmp-place-website></gmp-place-website>
                                <gmp-place-phone-number></gmp-place-phone-number>
                                <gmp-place-summary></gmp-place-summary>
                                <gmp-place-type-specific-highlights>
                                </gmp-place-type-specific-highlights>
                                <gmp-place-reviews></gmp-place-reviews>
                                <gmp-place-feature-list></gmp-place-feature-list>
                                <gmp-place-media lightbox-preferred></gmp-place-media>
                                <gmp-place-attribution
                                    light-scheme-color="gray"
                                    dark-scheme-color="gray"
                                ></gmp-place-attribution>
                            </gmp-place-content-config>
                        </gmp-place-details>
                    </div>
                </Suspense>
            </div>
        </div>
        <VsWarning
            v-if="showError && errType === 'noCookie'"
            type="cookie"
            class="vs-map__error vs-map__error--no-cookies"
            :class="showError ? 'd-block' : 'd-none'"
            data-test="vs-map__warning--no-cookies"
        >
            {{ props.noCookiesMessage }}

            <template
                #button-text
            >
                {{ props.cookieBtnText }}
            </template>
        </VsWarning>

        <VsWarning
            v-if="showError && errType === 'noJS'"
            data-test="vs-map__warning--no-js"
            class="vs-map__warning vs-map__warning--no-js"
        >
            {{ noJsMessage }}
        </VsWarning>
    </div>
</template>

<script setup>
/* eslint-disable no-use-before-define  */
/* eslint-disable vue/no-side-effects-in-computed-properties */

import {
    computed,
    onBeforeMount,
    onMounted,
    ref,
} from 'vue';
import getEnvValue from '@/utils/get-env-value';

import {
    importLibrary,
    setOptions,
} from '@googlemaps/js-api-loader';

import axios from 'axios';

import {
    VsAlert,
    VsButton,
    VsWarning,
} from '@/components';
import useGoogleMapStore from '@/stores/mainMap.store';
import cookieValues from '@/utils/required-cookies-data';
import VsMapSidebar from './components/MapSidebar.vue';
import cookieCheckerComposable from './composables/verifyCookiesComposable';
import dataLayerComposable from './composables/dataLayerComposable';

const dataLayerHelper = dataLayerComposable();

const props = defineProps({
    /**
     * Override for API Key, otherwise it'll be retrieved
     * from environment variables
     */
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
    },
    /**
     * MapId set in the Google Maps Platform console
     * for this paricular map (enables/disable GMP features)
     */
    mapId: {
        type: String,
        default: 'vs-map',
    },
    /**
     * Rendering Type for the Map.
     * True = Vector Map, otherwise fallback to Raster
     * Vector Map enables support (with correct MapID) for advanced features like shading
     * Raster Maps are available for full compatibility across devices.
     */
    mapTypeVector: {
        type: Boolean,
        default: false,
    },
    /**
     * Center point of map.
     * Defaults to what is considered the center of Scotland
     */
    center: {
        type: Object,
        default: () => ({
            lat: 56.490153,
            lng: -4.10959,
        }),
    },
    /**
     * Zoom level.
     * ~12 Good for big cities, ~13 for smaller cities.
     * 6 for whole of Scotland
     */
    zoom: {
        type: Number,
        default: 6,
    },
    /**
     * Radius (in meters) to search from center point.
     * Default 1000m (1km)
     * Maximum Value 50000m (50km)
     */
    radius: {
        type: Number,
        default: 1000,
    },
    /** Object of labels for the Maps UI */
    labels: {
        type: Object,
        default: () => {},
    },
    /** 2 Letter language code to display Google Maps UI with */
    languageCode: {
        type: String,
        default: 'en',
        validator: (value) => value.match(
            /(en|es|it|de|nl|fr)/,
        ),
    },
    /**
     * URL location of the categories JSON file (from static server)
     */
    categoriesLocation: {
        type: String,
        default: '',
    },
    /** JSON object for the category labels (from CMS taxonomies) */
    categoryLabels: {
        type: Object,
        default: () => {},
    },
    /**
     * Tells if JS is Disabled
     */
    jsDisabled: {
        type: Boolean,
        required: true,
    },
    /**
     * Message to display when JavaScript is disabled
     */
    noJsMessage: {
        type: String,
        required: true,
    },
    /**
     * Message to display when Cookies disabled
     */
    noCookiesMessage: {
        type: String,
        required: true,
    },
    /**
     * Text for Cookies button that will open Cookie Manager
     */
    cookieBtnText: {
        type: String,
        required: true,
    },
    /**
     * Message to display when there are no results available
     */
    noResultsMessage: {
        type: String,
        required: true,
    },
    resetMapNoResultsMessage: {
        type: String,
        required: true,
    },
});

// Map Object, HTMLElements & Global Variables
let gMap;

let mapContainer;
// let searchContainer;
let nearbySearch;
let textSearch;
let textSearchQuery;
let nearbySearchQuery;
// let detailContainer;
let placeDetails;
let placeRequest;
let searchInput;
let infoWindow;

let markers = {
};

let visibleMarkerCount;

const selectedTopLevelCategory = ref();
const selectedSubCategories = ref(new Set());
const selectedCategory = ref();
const includedTopLevelTypes = ref(new Set());
const excludedTopLevelTypes = ref(new Set());
const includedSubTypes = ref(new Set());
const excludedSubTypes = ref(new Set());
const categoryKey = ref();
const subCategoryKey = ref();
const currentZoom = ref(props.zoom);
const MAX_ZOOM = 17;
const CATEGORY_VISIBLE_ZOOM = 11;
const NUMBER_OF_RESULTS = 20;
const query = ref();
const queryStr = ref(new Set());
const currentSearch = ref();

const subCategoryTypeMap = computed(() => {
    const map = new Map();

    const subCategories = categoryData[selectedTopLevelCategory.value].subCategory;

    Object.values(subCategories).forEach((subCat) => {
        map.set(subCat.id, {
            includedTypes: subCat.includedType,
            excludedTypes: subCat.excludedType,
        });
    });

    return map;
});

const googleMapStore = useGoogleMapStore();

const noResults = ref(false);

let showError;
const errType = ref(undefined);

const SCOTLAND_BOUNDS = {
    north: 60.8,
    south: 54.8,
    west: -8.5,
    east: -0.7,
};

let categoryData = {
};
const categoryLabelData = props.categoryLabels;

let currentSearchId = 0;

onBeforeMount(() => {
    const cookieCheck = cookieCheckerComposable();
    cookieCheck.requiredCookies.value = cookieValues.google_maps;

    showError = computed(() => {
        if (props.jsDisabled === true) {
            errType.value = 'noJS';
            return true;
        }

        if (
            (!cookieCheck.cookiesAllowed.value && cookieCheck.cookiesLoaded.value === true)
            || !cookieCheck.cookiesLoaded.value
        ) {
            errType.value = 'noCookie';
            return true;
        }

        return false;
    });
});

onMounted(async() => {
    /**
     * Called on component created. Loads the json file located at this.categories which
     * contains all of the category and subcategory mapping information from the static
     * server.
     */

    if (props.categoriesLocation) {
        axios.get(props.categoriesLocation)
            .then((response) => {
                categoryData = response.data;
            })
            .catch(() => {});
    }

    // Only load Google Maps libraries if no error
    if (showError.value === false) {
        setOptions({
            key: props.apiKey,
            v: 'quarterly',
            libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
            region: 'GB',
            language: props.languageCode,
        });

        try {
            await importLibrary('maps');
            await importLibrary('places');
            await importLibrary('marker');
            await importLibrary('core');
            await importLibrary('geometry');
        } catch (error) {
            console.error('Google Maps Library load error');
        }
    };

    mapContainer = document.getElementById('vs-map');
    // searchContainer = document.getElementById('search-container');
    nearbySearch = document.getElementById('nearbySearch');
    textSearch = document.getElementById('textSearch');
    textSearchQuery = document.querySelector('gmp-place-text-search-request');
    nearbySearchQuery = document.querySelector('gmp-place-nearby-search-request');
    // detailContainer = document.getElementById('detail-container');
    placeDetails = document.querySelector('gmp-place-details');
    placeRequest = document.getElementById('placeRequest');
    searchInput = document.getElementById('vs-map-search-input');

    async function initMap() {
        try {
            const mapOptions = {
                center: {
                    lat: props.center.lat,
                    lng: props.center.lng,
                },
                renderingType: props.mapTypeVector
                    // eslint-disable-next-line no-undef
                    ? google.maps.RenderingType.VECTOR
                    // eslint-disable-next-line no-undef
                    : google.maps.RenderingType.RASTER,
                zoom: props.zoom,
                isFractionalZoomEnabled: true,
                mapId: props.mapId,
                restriction: {
                    latLngBounds: SCOTLAND_BOUNDS,
                },
                zoomControl: true,
                fullscreenControl: false,
                mapTypeControl: false,
                cameraControl: false,
                streetViewControl: false,
                gestureHandling: 'greedy',
            };

            if (mapContainer) {
                // eslint-disable-next-line no-undef
                gMap = new google.maps.Map(mapContainer, mapOptions);
                gMap.fitBounds(SCOTLAND_BOUNDS);
            } else {
                throw new Error('Init error, mapContainer undefined');
            }
        } catch (error) {
            console.error('Maps init error', error.message);
        }

        // Registers the infoWindow that the placeDetail element lives
        // eslint-disable-next-line no-undef
        infoWindow = new google.maps.InfoWindow();

        infoWindow.addListener('closeclick', () => {
            mapInteractionEvent('card_close', placeRequest.place);
        });

        shadeMapAreas();

        // Listens to the zoom level
        gMap.addListener('zoom_changed', () => {
            currentZoom.value = gMap.getZoom();
            if (currentZoom.value < CATEGORY_VISIBLE_ZOOM) {
                shadeMapAreas();
            } else {
                shadeMapAreas(true);
            }
        });

        gMap.addListener('idle', () => {
            visibleMarkerCount = getVisibleMarkerCount();
        });

        // Handles click events in the Places UI Kit search panel for
        // both nearby and text searches.
        nearbySearch.addEventListener('gmp-select', ({ place }) => {
            if (markers[place.id]) {
                handlePlaceClick(place, markers[place.id]);
            }
        });

        textSearch.addEventListener('gmp-select', ({ place }) => {
            if (markers[place.id]) {
                handlePlaceClick(place, markers[place.id]);
            }
        });
    };

    googleMapStore.firstInteraction = false;
    googleMapStore.searchesCount = 0;
    googleMapStore.filterUsesCount = 0;

    // Init map if no error
    if (showError.value === false) {
        await initMap();
    }
});

function shadeMapAreas(zoomedIn) {
    const shadedAreaStyleOptions = {
        strokeColor: '#A3A3CC',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#A3A3CC',
        fillOpacity: 0.5,
    };

    // Google Maps Place types for countries and Admin Level 1
    // areas that could possibly be in the viewport.
    const fullShadedPlaces = [
        'ChIJ39UebIqp0EcRqI4tMyWV4fQ', // England
        'ChIJdZmmmcoQXkgR2OO3bu8o5fc', // Northern Ireland
        'ChIJ-ydAXOS6WUgRCPTbzjQSfM8', // Republic of Ireland
        'ChIJ7Q8cbLY0ZEgRouilirxxux4', // Wales
        'ChIJ1YEuRDCFY0gRDeDw8bxbAuo', // Isle of Man
        'ChIJv-VNj0VoEkYRK9BkuJ07sKE', // Norway
        'ChIJ-1-U7rYnS0YRzZLgw9BDh1I', // Denmark
        'ChIJ8fA1bTmyXEYRYm-tjaLruCI', // Sweden
        'ChIJ6_ktdpMVvEgRJBv3ZEgxsD8', // Faroe Islands
        'ChIJa76xwh5ymkcRW-WRjmtd6HU', // Germany
        'ChIJu-SH28MJxkcRnwq9_851obM', // Netherlands
        'ChIJuwtkpGSZAEcR6lXMScpzdQk', // Poland
        'ChIJl5fz7WR9wUcR8g_mObTy60c', // Belgium
        'ChIJMVd4MymgVA0R99lHx5Y__Ws', // France
        'ChIJ_ZqKe2cw6UYREPzyaM3PAAA', // Latvia
        'ChIJE74zDxSU3UYRubpdpdNUCvM', // Lithuania
        'ChIJ4wsuREWc40YRewI60MRYJR4', // Kaliningrad
        'ChIJ_UuggpyUkkYRwyW0T7qf6kA', // Estonia
        'ChIJ3fYyS9_KgUYREKh1PNZGAQA', // Finland
        'ChIJQ2Dro1Ir0kgRmkXB5TQEim8', // Iceland
        'ChIJFXfA47sNok4RGOIUAYOdzzQ', // Greenland
        'ChIJI9HkgQm_ikYR8i7GR23fEbY', // Countryside, Åland
        'ChIJUXXYvLMei0YR7zdFQUIM8bA', // Archipelago, Åland
        'ChIJRyEhyrlFlUcR75LTAvZg22Q', // Luxembourg
    ];

    const zoomedInShadedPlaces = [
        'ChIJ39UebIqp0EcRqI4tMyWV4fQ', // England
        'ChIJdZmmmcoQXkgR2OO3bu8o5fc', // Northern Ireland
        'ChIJ-ydAXOS6WUgRCPTbzjQSfM8', // Republic of Ireland
        'ChIJ6_ktdpMVvEgRJBv3ZEgxsD8', // Faroe Islands
    ];

    // eslint-disable-next-line no-undef
    const countryLayer = gMap.getFeatureLayer(google.maps.FeatureType.COUNTRY);
    // eslint-disable-next-line no-undef, vue/max-len
    const adminArea1Layer = gMap.getFeatureLayer(google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1);

    if (zoomedIn) {
        countryLayer.style = null;
        adminArea1Layer.style = null;

        // eslint-disable-next-line consistent-return
        countryLayer.style = (options) => {
            if (zoomedInShadedPlaces.includes(options.feature.placeId)) {
                return shadedAreaStyleOptions;
            }
        };

        // eslint-disable-next-line consistent-return
        adminArea1Layer.style = (options) => {
            if (zoomedInShadedPlaces.includes(options.feature.placeId)) {
                return shadedAreaStyleOptions;
            }
        };
    } else {
        // These two functions iterate through shadedPlaces to find
        // the corresponding place types on the map and shades them
        // eslint-disable-next-line consistent-return
        countryLayer.style = (options) => {
            if (fullShadedPlaces.includes(options.feature.placeId)) {
                return shadedAreaStyleOptions;
            }
        };

        // eslint-disable-next-line consistent-return
        adminArea1Layer.style = (options) => {
            if (fullShadedPlaces.includes(options.feature.placeId)) {
                return shadedAreaStyleOptions;
            }
        };
    }
}

function selectCategory(categoryId, key) {
    resetCategories();

    selectedTopLevelCategory.value = categoryId;

    // Retrieves all the values in each subcategory and adds it to
    // `includedTopLevelTypes` set, which should handle duplication.
    Object.values(categoryData[categoryId].subCategory).forEach(
        (subCategory) => includedTopLevelTypes.value.add(subCategory.includedType),
    );

    Object.values(categoryData[categoryId].subCategory).forEach(
        (subCategory) => {
            if (subCategory.excludedType) {
                excludedTopLevelTypes.value.add(subCategory.excludedType);
            }
        },
    );

    // Flattens multiple sets back down into one
    includedTopLevelTypes.value = new Set(Array.from(includedTopLevelTypes.value).flat());
    excludedTopLevelTypes.value = new Set(Array.from(excludedTopLevelTypes.value).flat());

    // Checks if there are conflicting types and removes from exluded if already in included
    includedTopLevelTypes.value.forEach((type) => {
        if (excludedTopLevelTypes.value.has(type)) {
            excludedTopLevelTypes.value.delete(type);
        }
    });

    selectedCategory.value = categoryData[categoryId];
    categoryKey.value = key;

    searchByCategory({
        includedTypes: Array.from(includedTopLevelTypes.value),
        excludedTypes: Array.from(excludedTopLevelTypes.value),
    });

    query.value = categoryLabelData[categoryKey.value].label;
    searchInput.value = query.value;
}

function searchSubCategoriesForLabel(selectedSubcategory, subCategoryId) {
    const selCat = ref([]);
    const selSubCatLabel = ref();

    selectedSubcategory.forEach(() => {
        // Iterate through the category label data to find corresponding category
        categoryLabelData.forEach((category) => {
            if (category.id === selectedTopLevelCategory.value) {
                selCat.value = category;
            }
        });

        // Iterate through the subCategories to find the correct one,
        // and then again to find the label
        Object.values(selCat.value).forEach((subCat) => {
            // eslint-disable-next-line no-shadow
            Object.values(subCat).forEach((subCat) => {
                if (subCategoryId === subCat.id) {
                    selSubCatLabel.value = subCat.label;
                }
            });
        });
    });

    return selSubCatLabel;
}

function checkForConflictingPlaceTypes() {
    includedSubTypes.value.forEach((subCategory) => {
        if (excludedSubTypes.value.has(subCategory)) {
            excludedSubTypes.value.delete(subCategory);
        }
    });
};

function updateSubCategoryTypes(
    subCategoryId,
    {
        includeTypes = false,
        excludeTypes = false,
        removeIncludedTypes = false,
        removeExcludedTypes = false,
    } = {
    },
) {
    const types = subCategoryTypeMap.value.get(subCategoryId);

    if (includeTypes) {
        types.includedTypes.forEach((includedType) => {
            if (includeTypes) includedSubTypes.value.add(includedType);
            if (removeIncludedTypes) includedSubTypes.value.delete(includedType);
        });
    }

    if (excludeTypes || removeExcludedTypes) {
        types.excludedTypes?.forEach((excludedType) => {
            if (excludeTypes) excludedSubTypes.value.add(excludedType);
            if (removeExcludedTypes) excludedSubTypes.value.delete(excludedType);
        });
    }
}

function searchBySubCategory(subCategoryId, key) {
    subCategoryKey.value = key;

    if (subCategoryId === 'self-catering') {
        resetTextQuery();
        selectedSubCategories.value = new Set();
        selectedSubCategories.value.add(subCategoryId);
        query.value = 'self-catering accommodation';
        resetCategories();
        searchInput.value = query.value;
        searchByText();
        searchInput.value = 'Self Catering';
    } else if (selectedSubCategories.value.has(subCategoryId)) {
        // Delete if already in selectedSubCategories
        selectedSubCategories.value.delete(subCategoryId);

        // Reset subcategories
        includedSubTypes.value = new Set();
        excludedSubTypes.value = new Set();

        // Add in all remaining types again, to account for any
        // conflicting duplicate types that had been removed
        selectedSubCategories.value.forEach((subCatId) => {
            updateSubCategoryTypes(subCatId, {
                includeTypes: true,
                excludeTypes: true,
            });
        });

        checkForConflictingPlaceTypes();

        // Remove subCategory labels to the queryString to show on UI
        queryStr.value.delete(
            searchSubCategoriesForLabel(selectedSubCategories.value, subCategoryId).value,
        );

        if (selectedSubCategories.value.size === 0) {
            // If the last subCategory is removed,
            // reset queryString and revert to a top-level search
            queryStr.value = new Set();
            selectCategory(selectedTopLevelCategory.value, categoryKey.value);
        } else {
            searchByCategory({
                includedTypes: Array.from(includedSubTypes.value).flat(),
                excludedTypes: Array.from(excludedSubTypes.value).flat(),
            });
            query.value = Array.from(queryStr.value).join(', ');
            searchInput.value = query.value;
        }
    } else {
        // Add if not already in selectedSubCategories
        selectedSubCategories.value.add(subCategoryId);
        // Iterate through each subcategory to find the selected subcategory
        updateSubCategoryTypes(subCategoryId, {
            includeTypes: true,
            excludeTypes: true,
        });

        checkForConflictingPlaceTypes();

        searchByCategory({
            includedTypes: Array.from(includedSubTypes.value).flat(),
            excludedTypes: Array.from(excludedSubTypes.value).flat(),
        });

        // Add subCategory labels to the queryString to show on UI
        queryStr.value.add(
            searchSubCategoriesForLabel(selectedSubCategories.value, subCategoryId).value,
        );

        // Add to the query value.
        query.value = Array.from(queryStr.value).join(', ');
        searchInput.value = query.value;
    }
}

async function searchByCategory({
    includedTypes = [],
    excludedTypes = [],
} = {
}) {
    resetMap();
    resetTextQuery();

    currentSearchId += 1;

    const searchId = currentSearchId;

    noResults.value = false;

    googleMapStore.filterUsesCount += 1;

    currentSearch.value = 'nearby';

    const bounds = gMap.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    // eslint-disable-next-line no-undef
    const diameter = google.maps.geometry.spherical.computeDistanceBetween(ne, sw);
    const cappedRadius = Math.min((diameter / 2), 25000);

    nearbySearchQuery.includedTypes = includedTypes;
    nearbySearchQuery.excludedTypes = excludedTypes ?? [];
    nearbySearchQuery.maxResultCount = NUMBER_OF_RESULTS;
    nearbySearchQuery.locationRestriction = {
        center: gMap.getCenter(),
        radius: cappedRadius,
    };

    nearbySearch.style.display = 'block';
    nearbySearch.addEventListener('gmp-load', () => {
        if (searchId !== currentSearchId) return;

        addMarkers(searchId);

        let filterType = 'main';
        let filterSelection = selectedTopLevelCategory.value;

        if (selectedSubCategories.value.size) {
            filterType = 'sub';
            filterSelection = Array.from(selectedSubCategories.value).join(', ');
        }

        dataLayerHelper.createDataLayerObject('googleMapFilterEvent', {
            filter_type: filterType,
            search_map_location: gMap.getCenter().toString(),
            filter_selection: filterSelection,
            results_count: nearbySearch.places.length,
            filter_usage_index: googleMapStore.filterUsesCount,
        });

        checkFirstInteraction('map_filter');
    }, {
        once: true,
    });
}

async function searchByText() {
    resetMap();
    resetCategories();
    noResults.value = false;

    currentSearchId += 1;

    const searchId = currentSearchId;

    googleMapStore.searchesCount += 1;

    currentSearch.value = 'text';

    query.value = searchInput.value.trim();
    // Don't search if no query
    if (!query.value) {
        return;
    }

    // Temp fix for self catering accom -- this is not permanent
    if (query.value === 'self-catering accommodation') {
        textSearchQuery.textQuery = query.value;
    } else {
        textSearchQuery.textQuery = `${query.value} Scotland`;
    }

    textSearchQuery.locationBias = gMap.getCenter();
    textSearchQuery.maxResultCount = NUMBER_OF_RESULTS;

    textSearch.style.display = 'block';

    textSearch.addEventListener('gmp-load', () => {
        if (searchId !== currentSearchId) return;

        addMarkers(searchId);

        dataLayerHelper.createDataLayerObject('googleMapSearchEvent', {
            search_query: query.value,
            search_map_location: gMap.getCenter().toString(),
            search_results_count: textSearch.places.length,
            search_usage_index: googleMapStore.searchesCount,
        });

        checkFirstInteraction('map_search');
    }, {
        once: true,
    });
}

async function addMarkers(searchId) {
    const { AdvancedMarkerElement } = await importLibrary('marker');
    const { LatLngBounds } = await importLibrary('core');

    if (searchId !== currentSearchId) return;

    const searchRequest = ref();

    if (currentSearch.value === 'nearby') {
        searchRequest.value = nearbySearch;
    } else if (currentSearch.value === 'text') {
        searchRequest.value = textSearch;
    } else {
        console.error('Unrecognised Search type');
    }

    if (searchRequest.value.places.length === 0) {
        noResults.value = true;
        searchRequest.value.style.display = 'none';
    } else {
        searchRequest.value.style.display = 'block';
    }

    const bounds = new LatLngBounds();

    if (searchRequest.value.places) {
        searchRequest.value.places.forEach((place) => {
            // Custom styling for marker
            const markerIcon = document.createElement('div');
            markerIcon.classList.add('vs-map-marker');

            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-location-dot');

            markerIcon.appendChild(icon);

            // Add `content: markerIcon` to enable custom markers
            const marker = new AdvancedMarkerElement({
                map: gMap,
                position: place.location,
                content: markerIcon,
                title: 'Map pin',
            });

            marker.addEventListener('gmp-placeclick', () => {
                handlePlaceClick(place, marker);
            });

            marker.addListener('click', () => {
                handlePlaceClick(place, marker);
            });

            marker.metadata = {
                id: place.id,
            };
            markers[place.id] = marker;
            bounds.extend(place.location);
            if (searchRequest.value.places.length === 1) {
                gMap.setCenter(
                    {
                        lat: place.location.lat(),
                        lng: place.location.lng(),
                    },
                );
                gMap.setZoom(14);
                gMap.fitBounds(place.viewport);
            } else {
                gMap.setCenter(bounds.getCenter());
                gMap.fitBounds(bounds);
            }
        });
    }
}

function resetMap(hardReset, resetLocation) {
    clearExistingMarkers();
    currentSearch.value = '';
    nearbySearch.style.display = 'none';
    textSearch.style.display = 'none';

    textSearchQuery.textQuery = null;

    if (infoWindow && infoWindow.close) {
        infoWindow.close();
    }
    noResults.value = false;
    if (hardReset) {
        // A `hard reset` will remove all text and categories
        resetTextQuery();
        resetCategories();
        mapInteractionEvent('clear_all');
    }
    if (resetLocation) {
        gMap.setCenter(props.center);
        gMap.setZoom(props.zoom);
        gMap.fitBounds(SCOTLAND_BOUNDS);
        mapInteractionEvent('reset_map');
    }
}

function resetTextQuery() {
    query.value = null;
    searchInput.value = '';
}

function resetCategories() {
    selectedTopLevelCategory.value = undefined;
    selectedSubCategories.value = new Set();
    includedTopLevelTypes.value = new Set();
    excludedTopLevelTypes.value = new Set();
    includedSubTypes.value = new Set();
    excludedSubTypes.value = new Set();
    queryStr.value = new Set();
    categoryKey.value = undefined;
    subCategoryKey.value = undefined;
}

function clearExistingMarkers() {
    // eslint-disable-next-line no-restricted-syntax
    for (const marker in markers) {
        if (markers[marker]) {
            markers[marker].map = null;
        }
    }
    markers = {
    };
}

function handlePlaceClick(place) {
    if (infoWindow.isOpen) {
        infoWindow.close();
        mapInteractionEvent('card_close', placeRequest.place);
    }

    placeRequest.place = place;

    // Medium breakpoint (this can't be done in CSS unfortunately)
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        placeDetails.style.width = '20em';
        placeDetails.style.height = '32em';
    } else {
        placeDetails.style.width = '85vw';
        placeDetails.style.height = '32em';
        googleMapStore.sidebarOpen = false;
    }

    placeDetails.style.display = 'block';
    placeDetails.style.overflowY = 'auto';
    placeDetails.style.overflowX = 'hidden';
    placeDetails.style.boxSizing = 'border-box';
    placeDetails.style.maxHeight = '32em';

    infoWindow.setOptions({
        content: placeDetails,
        maxWidth: '25em',
        position: place.location,
        // eslint-disable-next-line no-undef
        pixelOffset: new google.maps.Size(0, -32),
    });

    infoWindow.open({
        map: gMap,
    });

    gMap.fitBounds(place.viewport);

    // eslint-disable-next-line no-undef
    google.maps.event.addListenerOnce(gMap, 'idle', () => {
        if (gMap.getZoom() > MAX_ZOOM) {
            gMap.setZoom(MAX_ZOOM);
        }

        mapInteractionEvent('card_open', place);
    });

    gMap.setCenter(place.location);
}

async function mapInteractionEvent(interactionType, place) {
    let cardName = '';
    let cardRating = '';
    let cardUrl = '';
    let cardPrimaryType = '';

    if (place) {
        await place.fetchFields({
            fields: [
                'displayName',
                'primaryType',
                'rating',
                'websiteURI',
            ],
        });

        cardName = place.displayName;
        cardRating = place.rating;
        cardUrl = place.websiteURI;
        cardPrimaryType = place.primaryType;
    }

    dataLayerHelper.createDataLayerObject('googleMapInteractionEvent', {
        interaction_type: interactionType,
        search_query: searchInput.value.trim(),
        map_location: gMap.getCenter().toString(),
        visible_attractions_count: visibleMarkerCount,
        card_attraction_name: cardName,
        card_attraction_category: cardPrimaryType,
        card_attraction_rating: cardRating,
        card_attraction_url: cardUrl,
        interaction_timestamp_ms: Date.now(),
    });

    checkFirstInteraction(interactionType);
};

function checkFirstInteraction(interactionType) {
    if (!googleMapStore.firstInteraction) {
        const timeNow = Date.now();
        const timeToFirstInteraction = timeNow - googleMapStore.timeMounted;

        dataLayerHelper.createDataLayerObject('googleMapTimeToFirstInteractionEvent', {
            time_to_first_interaction_ms: timeToFirstInteraction,
            first_interaction_type: interactionType,
        });

        googleMapStore.firstInteraction = true;
    }
}

function getVisibleMarkerCount() {
    const bounds = gMap.getBounds();

    if (!bounds) {
        return 0;
    }

    let visibleCount = 0;

    for (let x = 0; x < Object.keys(markers).length; x++) {
        const marker = markers[Object.keys(markers)[x]];

        const position = marker.position;

        if (bounds.contains(position)) {
            visibleCount += 1;
        }
    }

    return visibleCount;
}
</script>

<style lang="scss">
.vs-map {
    //Google Maps Places UI Kit Custom Styling
    //semantic tokens don't seem to work with it
    --gmp-mat-color-surface: #fff; //$vs-color-background-primary;
    --gmp-mat-color-on-surface: #200F2E; //$vs-color-text-primary;
    --gmp-mat-color-on-surface-variant: #606060; //$vs-color-text-secondary;
    --gmp-mat-color-primary: #1F49D6; //$vs-color-text-cta-on-light;
    --gmp-mat-color-negative: #940F2C; //$vs-color-text-error;
    --gmp-mat-color-positive: #03AA46; //$vs-color-text-success;
    --gmp-mat-color-info: #A8308C; //$vs-color-icon-highlight;
    --gmp-mat-color-outline-decorative: #E9E9E9; //$vs-color-border-primary;
    --gmp-mat-font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; //$vs-font-family-sans-serif;

    gmp-place-search, gmp-place-details {
        color-scheme: only light;
    }

    &__container {
        position: relative;
    }

    &__wrapper, #vs-map {
        height: 90vh;
        width: 100%;

        gmp-advanced-marker {
            width: $vs-spacer-200;
            height: $vs-spacer-200;
        }

        .vs-map-marker {
            display: flex;
            align-items: center;
            justify-content: center;
            width: $vs-spacer-200;
            height: $vs-spacer-200;
            background-color: $vs-color-icon-cta-on-light;
            border-radius: $vs-radius-large;
            border: 0.125em solid $vs-color-icon-inverse;
            box-shadow: $vs-elevation-shadow-raised;
            transition: transform 0.1s ease-in-out;
            font-size: 1.5em;
            color: $vs-color-icon-inverse;

            &:hover {
                transform: scale(1.25);
            }
        }
    }

    &__controls {
        position: absolute;
        top: $vs-spacer-100;
        left: $vs-spacer-100;
        z-index: 100;
        display: flex;
        flex-direction: column;
        pointer-events: none;
        flex-grow: 1;
        min-width: 0;
        width: calc(100vw - $vs-spacer-100);

        @include media-breakpoint-up(md) {
            flex-direction: row;
        }
    }

    &__filter-controls {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: $vs-spacer-050;
        flex: 1;
        height: fit-content;
        width: calc(100vw - $vs-spacer-100);
        margin: $vs-spacer-050 $vs-spacer-0;
        padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-050 $vs-spacer-025;
        pointer-events: all;

        @include scrollsnap-styles;

        &::-webkit-scrollbar-track {
            margin: $vs-spacer-0 $vs-spacer-100 $vs-spacer-0 $vs-spacer-0;
        }

        @include media-breakpoint-up(md) {
            width: fit-content;
            overflow-x: auto;
            margin: $vs-spacer-075 $vs-spacer-0 $vs-spacer-0 $vs-spacer-100;
        }

        @include media-breakpoint-up(lg) {
            flex: 0 1 max-content;
            width: auto;
        }

        &-button {
            flex: 1 0 max-content;
            pointer-events: auto;

            &:last-child {
                margin-right: $vs-spacer-025;
            }
        }
    }

    &__warning {
        display: none;
    }
}

@include no-js {
    .vs-map {

        &__container {
            display: none;
        }

        &__warning {
            display: none;

            &--no-js {
                display: block;
            }
        }
    }
}
</style>
