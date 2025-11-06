<template>
    <div class="vs-map">
        <div class="vs-map__controls">
            <VsMapSidebar
                :query="query"
                :selectedCategories="selectedCategories"
                @search-input-changed="searchByText"
                @reset-map="resetMap(true)"
                :header-label="props.labels.heading"
                :close-sidebar-button-label="props.labels.closeSidebarBtn"
                :input-placeholder-label="props.labels.inputPlaceholder"
                :search-button-label="props.labels.searchButton"
                :clear-map-label="props.labels.clearMap",
                :search-results-label="props.labels.searchResults"
                :open-sidebar-button-label="props.labels.openSidebarButton"
            >
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
                v-if="(currentZoom > CATEGORY_VISIBLE_ZOOM) && googleMapStore.sidebarOpen"
            >
                <VsButton
                    v-for="filter in mapFilters"
                    :key="filter.id"
                    class="vs-map__filter-controls-button"
                    :icon="filter.icon"
                    :variant="selectedCategories.has(filter.id) ? 'primary' : 'secondary'"
                    @click.prevent="selectCategory(filter.id)"
                >
                    {{ filter.label }}
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
        </div>
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
} from '@/components';
import { LatLngObject } from '@/types/types';
import VsMapSidebar from './components/MapSidebar.vue';
import useGoogleMapStore from '@/stores/mainMap.store';

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
    }
})

// Map Object, HTMLElements & Global Variables
let gMap: google.maps.Map;

let mapContainer: any | null;
let searchContainer: any | null;
let nearbySearch: any;
let textSearch: any;
let textSearchQuery: any | null;
let nearbySearchQuery: any | null;
let detailContainer: any | null;
let placeDetails: any | null;
let placeRequest: any | null;
let searchInput: any;
let infoWindow: any;

let markers = {};
let selectedCategories = ref(new Set());
let includedTypes = ref(new Set());
const currentZoom = ref<number>(props.zoom);
const MAX_ZOOM: number = 19;
const CATEGORY_VISIBLE_ZOOM: number = 9;
const NUMBER_OF_RESULTS: number = 20;
const query = ref<string>();
const currentSearch = ref<string>();

const googleMapStore = useGoogleMapStore();

const SCOTLAND_BOUNDS = {
    north: 60.86500,
    south: 54.62185,
    west: -8.65100,
    east: -0.71000,
}

const mapFilters = {
    accommodation: {
        id: 'accommodation',
        label: 'Accommodation',
        types: [
            'lodging', 'cottage', 'private_guest_room', 'farmstay', 'guest_house', 
            'hostel', 'bed_and_breakfast', 'campground', 'camping_cabin', 
            'mobile_home_park', 'rv_park', 'hotel', 'inn', 'motel', 'resort_hotel',
        ],
        icon: 'fa-regular fa-bed'
    },
    food_drink: {
        id: 'food_drink',
        label: 'Food & Drink',
        types: [
            'restaurant',
        ],
        icon: 'fa-regular fa-cutlery',
    },
    things_to_do: {
        id: 'things_to_do',
        label: 'Things to do',
        types: [
            'national_park', 'beach', 'hiking_area', 'garden', 'botianical_garden',
            'wildlife_park', 'wildlife_refuge', 'park', 'museum', 'art_gallery', 
            'historical_place', 'monument', 'sculpture', 'cultural_landmark',
            'church', 'aquarium', 'zoo', 'amusement_park', 'concert_hall',
            'performing_arts_theatre', 'planetarium', 'movie_theatre', 'comedy_club',
            'night_club', 'bowling_alley', 'roller_coaster', 'skateboard_park', 
            'ice_sktating_rink', 'adventure_sports_center', 'cycling_park', 'ski_resort',
        ],
        icon: 'fa-kit fa-vs-landscape',
    },
    travel_info: {
        id: 'travel_info',
        label: 'Travel Information',
        types: [
            'ev_charger',
        ],
        icon: 'fa-regular fa-circle-info',
    },
};

onMounted(async() => {
    setOptions({
        key: props.apiKey,
        v: "quarterly",
        libraries: ['maps', 'places', 'marker', 'core', 'geometry'],
        region: 'GB',
        language: props.languageCode,
    });

    mapContainer = document.getElementById('vs-map');
    searchContainer = document.getElementById('search-container');
    nearbySearch = document.getElementById('nearbySearch');
    textSearch = document.getElementById('textSearch');
    textSearchQuery = document.querySelector('gmp-place-text-search-request');
    nearbySearchQuery = document.querySelector('gmp-place-nearby-search-request');
    detailContainer = document.getElementById('detail-container');
    placeDetails = document.querySelector('gmp-place-details');
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

        //Registers the infoWindow that the placeDetail element lives
        infoWindow = new google.maps.InfoWindow();

        //Listens to the zoom level
        gMap.addListener('zoom_changed', (event) => {
            currentZoom.value = gMap.getZoom();
        })

        //Handles click events in the Places UI Kit search panel for
        //both nearby and text searches.
        nearbySearch.addEventListener('gmp-select', ({ place }) => {
            if(markers[place.id]){ 
                handlePlaceClick(place, markers[place.id]);
            }
        });

        textSearch.addEventListener('gmp-select', ({ place }) => {
            if(markers[place.id]){ 
                handlePlaceClick(place, markers[place.id]);
            }
        });
        
    };

    // Init map
    await initMap();
})

function selectCategory(category) {
    if (selectedCategories.value.has(category)) {
        selectedCategories.value.delete(category);
        mapFilters[category].types.forEach(type => includedTypes.value.delete(type));
        if (selectedCategories.value.size === 0) {
            resetMap();
            resetCategories();
        }
    } else {
        selectedCategories.value.add(category);
        mapFilters[category].types.forEach(type => includedTypes.value.add(type));
        searchInput.value = mapFilters[category].label;
        searchByCategory();
    }
}

async function searchByCategory() {
    resetMap();
    resetTextQuery();

    currentSearch.value = 'nearby';

    const bounds = gMap.getBounds();
    const center = gMap.getCenter();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const diameter = google.maps.geometry.spherical.computeDistanceBetween(ne, sw);
    const cappedRadius= Math.min((diameter/2), 50000);
    
    nearbySearchQuery.includedTypes = Array.from(includedTypes.value);
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

    textSearchQuery.textQuery = query.value;

    // Get the center of the map, as it may have changed
    const mapCenter = gMap.getCenter();

    // /**
    //  * Offsetting the bounds of the search by the radius,
    //  * accounting for the curvature of the earth. 
    //  */
    // const latOffset = props.radius / 111000;
    // const latInRadians = mapCenter.lat() * (Math.PI / 180);
    // const lngDegreeDistance = 111 * Math.cos(latInRadians);
    // const lngOffset = props.radius / (lngDegreeDistance * 1000);
    
    // const bounds = {
    //     north: mapCenter.lat() + latOffset,
    //     south: mapCenter.lat() - latOffset,
    //     east: mapCenter.lng() + lngOffset,
    //     west: mapCenter.lng() - lngOffset
    // };
    
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
        throw new Error('Unrecognised Search type');
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
        });
    }

    if (searchRequest.value.places.length > 1) {
        gMap.fitBounds(bounds);
    } else if (searchRequest.value.places.length === 1){
        gMap.fitBounds(searchRequest.value.places[0].viewport);
    }
}

function resetMap(hardReset?: boolean) {
    clearExistingMarkers();
    currentSearch.value = '';
    nearbySearch.style.display = 'none';
    textSearch.style.display = 'none';
    if(infoWindow && infoWindow.close) {
        infoWindow.close();
    }
    if (hardReset) {
        resetTextQuery();
        resetCategories();
        resetLocation();
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
    selectedCategories.value = new Set();
    includedTypes.value = new Set();
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

    if (infoWindow.isOpen) {
        infoWindow.close();
    }

    placeRequest.place = place;

    //Medium breakpoint (this can't be done in CSS unfortunatley)
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        placeDetails.style.width = '20em';
        placeDetails.style.height = '32em';
    } else {
        placeDetails.style.width = '85vw';
        placeDetails.style.height = '32em'; 
    }
    
    placeDetails.style.display = 'block';
    placeDetails.style.overflowY = 'auto';
    placeDetails.style.overflowX = 'hidden';
    placeDetails.style.boxSizing = 'border-box';
    placeDetails.style.maxHeight = '32em';

    infoWindow.setOptions({
        content: placeDetails,
        maxWidth: '25em',
        pixelOffset: null,
    });

    infoWindow.open({
        anchor: marker,
        map: gMap
    });

    gMap.fitBounds(place.viewport, {top: 200, right: 150});
    google.maps.event.addListenerOnce(gMap, 'idle', () => {
        if(gMap.getZoom() > MAX_ZOOM) {
            gMap.setZoom(MAX_ZOOM);
        }
    })
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
