<template>
    <div class="vs-map">
        <div class="vs-map__controls">
            <VsMapSidebar
                :query="query"
                :selectedCategories="selectedTopLevelCategory"
                @search-input-changed="searchByText"
                @reset-map="resetMap(true)"
            >
                <template
                    #vs-map-sidebar-sub-filters
                    v-if="selectedTopLevelCategory"
                >
                    <div class="vs-map-sidebar__sub-filters">
                        <VsButton
                            v-for="(subCategory, key) in categoryLabelData[categoryKey].subCategory"
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
                                    attributionPosition="BOTTOM"
                                    selectable
                                    style="display: none"
                                >
                                    <gmp-place-all-content></gmp-place-all-content>
                                    <gmp-place-nearby-search-request id="nearbySearchQuery">
                                    </gmp-place-nearby-search-request>
                                    <gmp-place-attribution light-scheme-color="black" dark-scheme-color="grey"></gmp-place-attribution>
                                </gmp-place-search> 
                                <gmp-place-search
                                    id="textSearch"
                                    orientation="vertical"
                                    attributionPosition="BOTTOM"
                                    selectable
                                    style="display: none"
                                >
                                    <gmp-place-all-content></gmp-place-all-content>
                                    <gmp-place-text-search-request id="textSearchQuery">
                                    </gmp-place-text-search-request>
                                    <gmp-place-attribution light-scheme-color="black" dark-scheme-color="grey"></gmp-place-attribution>
                                </gmp-place-search> 
                            </div>
                    </Suspense>
                </template>
            </VsMapSidebar>
            <div
                class="vs-map__filter-controls"
                v-if="currentZoom > CATEGORY_VISIBLE_ZOOM"
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
            ></div>
        </div>
    
        <VsContainer class="mt-100">
            <VsRow>
                <VsCol cols="12" md="6">
                    
                </VsCol>
                <VsCol cols="12" md="6">
                    <Suspense>
                        <div id="detail-container">
                            <gmp-place-details id="placeDetails" >
                                <gmp-place-details-place-request id="placeRequest"></gmp-place-details-place-request>
                                <gmp-place-content-config>
                                    <gmp-place-address></gmp-place-address>
                                    <gmp-place-rating></gmp-place-rating>
                                    <gmp-place-type></gmp-place-type>
                                    <gmp-place-price></gmp-place-price>
                                    <gmp-place-accessible-entrance-icon></gmp-place-accessible-entrance-icon>
                                    <gmp-place-opening-hours></gmp-place-opening-hours>
                                    <gmp-place-website></gmp-place-website>
                                    <gmp-place-phone-number></gmp-place-phone-number>
                                    <gmp-place-summary></gmp-place-summary>
                                    <gmp-place-type-specific-highlights></gmp-place-type-specific-highlights>
                                    <gmp-place-reviews></gmp-place-reviews>
                                    <gmp-place-feature-list></gmp-place-feature-list>
                                    <gmp-place-media lightbox-preferred></gmp-place-media>
                                    <gmp-place-attribution light-scheme-color="black"></gmp-place-attribution>
                                </gmp-place-content-config>
                            </gmp-place-details>
                        </div>
                    </Suspense>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script setup lang="ts">
import {
    type PropType,
    onMounted,
    ref,
} from 'vue';
import getEnvValue from '@/utils/get-env-value';

import {
    VsButton,
    VsCol,
    VsContainer,
    VsRow,
} from '@/components';
import { LatLngObject } from '@/types/types';
import VsMapSidebar from './components/MapSidebar.vue';

import { 
    importLibrary,
    setOptions, 
} from '@googlemaps/js-api-loader';

const props = defineProps({
    /**
     * Override for API Key, otherwise it'll be retrived
     * from environment variables
     */
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
    },
    /**
     * Center point of map.
     */
    center: {
        type: Object as PropType<LatLngObject>,
        default: {
            lat: 0,
            lng: 0,
        },
        required: true,
    },
    /**
     * Zoom level.
     * ~12 Good for big cities, ~13 for smaller cities. 
     * 6-7 for whole of Scotland
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
    /**
     * JSON object of categories and their types
     */
    categories: {
        type: Object,
        default: () => {},
    },
    /**JSON object for the category labeks (from CMS taxinomies) */
    categoryLabels: {
        type: Object,
        default: () => {}
    },
})

// Map Object, HTMLElements & Global Variables
let vsMap = ref(null);

let gMap: google.maps.Map;

let mapContainer: any | null;
let searchContainer: any | null;
let placeSearch: any;
let nearbySearch: any;
let textSearch: any;
let textSearchQuery: any | null;
let nearbySearchQuery: any | null;
let detailContainer: any | null;
let placeDetails: any | null;
let placeRequest: any | null;
let searchInput: any;

let markers = {};
const selectedTopLevelCategory = ref();
const selectedSubCategories = ref(new Set());
const selectedCategory = ref();
const includedTopLevelTypes = ref(new Set());
const includedSubTypes = ref(new Set());
const categoryKey = ref();
const subCategoryKey = ref();
const currentZoom = ref<number>(props.zoom);
const MAX_ZOOM: number = 19;
const CATEGORY_VISIBLE_ZOOM: number = 9;
const NUMBER_OF_RESULTS: number = 20;
const query = ref<string>();
const currentSearch = ref<string>();

const SCOTLAND_BOUNDS = {
    north: 60.86500,
    south: 54.62185,
    west: -8.65100,
    east: -0.71000,
}

const categoryData = props.categories;
const categoryLabelData = props.categoryLabels;

onMounted(async() => {
    setOptions({
        key: props.apiKey,
        v: "quarterly",
        libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
    });

    mapContainer = document.getElementById('vs-map');
    searchContainer = document.getElementById('search-container');
    nearbySearch = document.getElementById('nearbySearch');
    textSearch = document.getElementById('textSearch');
    textSearchQuery = document.querySelector('gmp-place-text-search-request');
    nearbySearchQuery = document.querySelector('gmp-place-nearby-search-request');
    detailContainer = document.getElementById('detail-container');
    placeDetails = document.getElementById('placeDetails');
    placeRequest = document.getElementById('placeRequest');
    searchInput = document.getElementById('vs-map-search-input');

    try{
        await importLibrary('maps') as google.maps.MapsLibrary;
        await importLibrary('places') as google.maps.PlacesLibrary;
        await importLibrary('marker') as google.maps.MarkerLibrary;
        await importLibrary('core') as google.maps.CoreLibrary;
        await importLibrary('geometry') as google.maps.GeometryLibrary;
    } catch (error) {
        console.error('Google Maps Library load error');
    }

    async function initMap(): Promise<void> {
        try {
            const mapOptions: google.maps.MapOptions = {
                center: {
                    lat: props.center.lat,
                    lng: props.center.lng,
                },
                zoom: props.zoom,
                mapId: 'vs-map',
                restriction: {
                    latLngBounds: SCOTLAND_BOUNDS,
                },
                zoomControl: true,
                fullscreenControl: false,
                mapTypeControl: false,
                cameraControl: false,
                streetViewControl: false,
            };

            if (mapContainer) {
                gMap = new google.maps.Map(mapContainer, mapOptions);
            } else {
                throw new Error('Init error, mapContainer undefined');
            }
        } catch (error) {
            console.error('Maps init error', error.message);
        }

        //Listens to the zoom level
        gMap.addListener('zoom_changed', (event) => {
            currentZoom.value = gMap.getZoom();
            console.log(currentZoom.value);
        })

        //Handles click events in the Places UI Kit search panel
        textSearch.addEventListener('gmp-select', ({ place }) => {
            if(markers[place.id]){ 
                handlePlaceClick(place, markers[place.id]);
            }
        })
        
        nearbySearch.addEventListener('gmp-select', ({ place }) => {
            if(markers[place.id]){ 
                handlePlaceClick(place, markers[place.id]);
            }
        })
    };

    // Init map
    await initMap();
})

function selectCategory(categoryId, key) {
    if (selectedTopLevelCategory.value === undefined) {
        selectedTopLevelCategory.value = categoryId;
    
        // Retrives all the values in each subcategory and adds it to
        // `includedTopLevelTypes` set, which should handle duplication.
        Object.values(categoryData[categoryId].subCategory).forEach(
            subCategory => includedTopLevelTypes.value.add(subCategory.type)
        );
    
        selectedCategory.value = categoryData[categoryId];
        categoryKey.value = key;

        searchByCategory(Array.from(includedTopLevelTypes.value).flat());
        query.value = categoryLabelData[categoryKey.value].label;
        searchInput.value = query.value;
    } else if (selectedTopLevelCategory !== categoryId) {
        
    } else {
        resetMap(true);
    } 
}

function searchBySubCategory(subCategoryId, key){
    subCategoryKey.value = key;

    if (selectedSubCategories.value.has(subCategoryId)) {
        // Delete if already in selectedSubCategories
        selectedSubCategories.value.delete(subCategoryId);
        // Iterate through each subcategory to find the selected subcategory
        Object.values(categoryData[selectedTopLevelCategory.value].subCategory).forEach(subCat => {
            if (subCat.id === subCategoryId) {
                // Iterate through the array of types and delete them from the includedSubTypes set
                subCat.type.forEach(type => includedSubTypes.value.delete(type));
            }
        })

        searchByCategory(Array.from(includedSubTypes.value).flat());
    } else {
        // Add if not already in selectedSubCategories
        selectedSubCategories.value.add(subCategoryId);
        // Iterate through each subcategory to find the selected subcategory
        Object.values(categoryData[selectedTopLevelCategory.value].subCategory).forEach(subCat => {
            if (subCat.id === subCategoryId) {
                // Iterate through the array of types adding them to the includedSubTypes set
                subCat.type.forEach(type => includedSubTypes.value.add(type));
            }
        })

        searchByCategory(Array.from(includedSubTypes.value).flat());
    }
}

async function searchByCategory(includedTypes) {
    resetMap();
    resetTextQuery();

    currentSearch.value = 'nearby';

    const bounds = gMap.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const diameter = google.maps.geometry.spherical.computeDistanceBetween(ne, sw);
    const cappedRadius= Math.min((diameter/2), 50000);

    nearbySearchQuery.includedTypes = includedTypes;
    nearbySearchQuery.maxResultCount = NUMBER_OF_RESULTS;
    nearbySearchQuery.locationRestriction = {
        center: gMap.getCenter(),
        radius: cappedRadius,
    };

    nearbySearch.style.display = 'block';
    nearbySearch.addEventListener('gmp-load', addMarkers, {once: true});
}

async function searchByText() {
    resetMap();
    resetCategories();

    currentSearch.value = 'text';

    query.value = searchInput.value.trim();
    // Don't search if no query
    if (!query.value) {
        return;
    }

    console.log(`searching for ${query.value}`)
    console.log(`current center: ${gMap.getCenter()}`)

    textSearchQuery.textQuery = query.value;

    // Get the center of the map, as it may have changed
    const mapCenter = gMap.getCenter();
    
    textSearchQuery.locationRestriction = gMap.getBounds();
    textSearchQuery.maxResultCount = NUMBER_OF_RESULTS;

    textSearch.style.display = 'block';

    textSearch.addEventListener('gmp-load', addMarkers, {once: true});
}

async function addMarkers() {
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;
    const { LatLngBounds } = await google.maps.importLibrary('core') as google.maps.CoreLibrary;

    const searchRequest = ref();

    if (currentSearch.value === 'nearby') {
        searchRequest.value = nearbySearch;
    } else if (currentSearch.value === 'text') {
        searchRequest.value = textSearch;
    } else {
        console.error('Unrecognised Search type');
    }

    const bounds = new LatLngBounds();
    searchRequest.value.style.display = 'block';

    if (searchRequest.value.places && searchRequest.value.places.length > 0) {
        searchRequest.value.places.forEach((place) => {

            // Custom styling for marker
            const markerIcon = document.createElement('div');
            markerIcon.className = 'vs-map-marker';
            markerIcon.innerHTML = `<i class="fa-solid fa-location-dot"></i>`;

            // Add `content: markerIcon` to enable custom markers
            let marker = new AdvancedMarkerElement({
                map: gMap,
                position: place.location,
                content: markerIcon,
                title: place.displayName,
            })

            marker.addEventListener('gmp-placeclick', (event) => {
                handlePlaceClick(place, marker);
            });

            marker.addListener('click', (event) => {
                handlePlaceClick(place, marker);
            });

            marker.metadata = { id: place.id };
            markers[place.id] = marker;
            bounds.extend(place.location);
            console.log(bounds);
        });
    }

    if (searchRequest.value.places.length > 1) {
        gMap.fitBounds(bounds);
    } else if (searchRequest.value.places.length < 2){
        console.log(`Place1 viewport`, searchRequest.value.places[0].viewport)
        gMap.fitBounds(searchRequest.value.places[0].viewport);
    }
}

function resetMap(hardReset?: boolean) {
    clearExistingMarkers();
    currentSearch.value = '';
    nearbySearch.style.display = 'none';
    textSearch.style.display = 'none';
    if (hardReset) {
        // A `hard reset` will remove all text and categories
        resetTextQuery();
        resetCategories();
    }
}

function resetTextQuery(){
    query.value = null;
    searchInput.value = '';
}

function resetLocation() {
    gMap.setCenter(props.center);
    gMap.setZoom(props.zoom); 
}

function resetCategories() {
    selectedTopLevelCategory.value = undefined;
    selectedSubCategories.value = new Set();
    includedTopLevelTypes.value = new Set();
    includedSubTypes.value = new Set();
    categoryKey.value = undefined;
    subCategoryKey.value = undefined;
}

function clearExistingMarkers() {
    for(const marker in markers) {
        if(markers[marker]) {
            markers[marker].map = null;
        }
    }
    markers = {};
}

function handlePlaceClick(place: any, marker: google.maps.marker.AdvancedMarkerElement) {
    placeRequest = document.getElementById('placeRequest');
    placeRequest.place = place;

    gMap.fitBounds(place.viewport, {top: 200, right: 450});
    google.maps.event.addListenerOnce(gMap, 'idle', () => {
        if(gMap.getZoom() > MAX_ZOOM) {
            gMap.setZoom(MAX_ZOOM);
        }
    })
}

function getLabel(categoryID){

    //console.log(categoryLabelData);

    // categoryLabelData.forEach(category => {
    //     console.log(category);
    //     if (category.id === categoryID) {
    //         return category.label;
    //     }
    // })

    for (let i: number = 0; i < categoryLabelData.length; i++){
        console.log(categoryLabelData[i].id);
    }

}
</script>

<style lang="scss">
.vs-map {
    //Google Maps Places UI Kit Custom Styling 
    //semantic tokens don't seem to work with it
    --gmp-mat-color-surface: #fff //$vs-color-background-primary;
    --gmp-mat-color-on-surface: #200F2E; //$vs-color-text-primary;
    --gmp-mat-color-on-surface-variant: #606060; //$vs-color-text-secondary;
    --gmp-mat-color-primary: #1F49D6; //$vs-color-text-cta-on-light;
    --gmp-mat-color-negative: #940F2C; //$vs-color-text-error;
    --gmp-mat-color-positive: #03AA46; //$vs-color-text-success;
    --gmp-mat-color-info: #A8308C; //$vs-color-icon-highlight;
    --gmp-mat-color-outline-decorative: #E9E9E9; //$vs-color-border-primary;
    --gmp-mat-font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; //$vs-font-family-sans-serif;

    &__wrapper, #vs-map{
        height: 100vh;
        width: 100%;
    }

    &__controls {
        position: absolute;
        top: 1em;
        left: 1em;
        z-index: 100;
        display: flex;
        flex-direction: column;
        pointer-events: none;
        
        @include media-breakpoint-up(md) {
            flex-direction: row;
        }
    }
    
    &__filter-controls{
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: $vs-spacer-050;
        width: 100vw;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        margin: $vs-spacer-075 $vs-spacer-0 $vs-spacer-0 $vs-spacer-0;
        padding: $vs-spacer-025 $vs-spacer-0;
        
        @include scrollsnap-styles;

        @include media-breakpoint-up(md) {
            margin: $vs-spacer-0 $vs-spacer-0 $vs-spacer-0 $vs-spacer-100;
        }

        &-button {
            flex: 0 0 max-content;
            pointer-events: auto;
        }
    }

    .vs-map-marker {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        background-color: $vs-color-icon-cta-on-light;
        border-radius: 50%;
        border: 0.125em solid $vs-color-icon-inverse;
        box-shadow: $vs-elevation-shadow-raised;;
        transition: transform 0.1s ease-in-out;
        font-size: 1.5em;
        color: $vs-color-icon-inverse;

        &:hover{
            transform: scale(1.25);
        }
    }
}
</style>
