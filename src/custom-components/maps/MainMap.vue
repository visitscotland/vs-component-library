<template>
    <div class="map-controls d-flex">
        <div class="search d-flex me-200">
            <VsInput
                field-name="vs-map-search"
                type="text"
                placeholder="What are you looking for?"
            />
            <VsButton 
                icon="vs-icon-control-search"
                icon-only
            >
                Search
            </VsButton>
        </div>
        <VsFedFilter 
            :filterCategories="mapFilters"
            @filter-updated="searchByCategory"
        />
        <VsButton 
                icon="fa-kit fa-vs-coo"
                variant="tertiary"
                icon-only
                @click="resetMap"
            >
                Reset Map
            </VsButton>
    </div>

    <div class="map-wrapper">
        <div 
            id="vs-map"
            map-id="vs-map"
            ref="vsMap"
            style="width: 100%; height: 100%;"            
        ></div>
    </div>

    <VsContainer class="mt-100">
        <VsRow>
            <VsCol cols="6">
                <Suspense>
                    <div id="search-container">
                        <gmp-place-search id="placeSearch" orientation="vertical" selectable>
                            <gmp-place-all-content></gmp-place-all-content>
                            <gmp-place-nearby-search-request id="placeSearchQuery"
                            ></gmp-place-nearby-search-request>
                        </gmp-place-search> 
                    </div>
                </Suspense>
            </VsCol>
            <VsCol cols="6">
                <Suspense>
                    <div id="detail-container">
                            <gmp-place-details id="placeDetails">
                                <gmp-place-details-place-request id="placeRequest"></gmp-place-details-place-request>
                                <gmp-place-all-content></gmp-place-all-content>
                            </gmp-place-details>
                        </div>
                </Suspense>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script setup lang="ts">
import {
    computed,
    type PropType,
    onMounted,
    ref,
} from 'vue';
import getEnvValue from '@/utils/get-env-value';

import {
    VsButton,
    VsCol,
    VsContainer,
    VsInput,
    VsRow,
} from '@/components';
import VsFedFilter from '../federated-search/components/FedFilter.vue';
import { LatLngObject } from '@/types/types';

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
        default: 12,
    },
    /** 
     * Radius (in meters) to search from center point.
     * Default 1000m (1km)
     * Maximum Value 50000m (50km)
     */
    radius: {
        type: Number,
        default: 1000,
    }
})

// Map Object, HTMLElements & Global Variables
let vsMap = ref(null);

let gMap: google.maps.Map;

let mapContainer: HTMLElement | null;
let searchContainer: HTMLElement | null;
let placeSearch: any;
let placeSearchQuery: HTMLElement | null;
let detailContainer: HTMLElement | null;
let placeDetails: HTMLElement | null;
let placeRequest: any | null;

let markers = {};
const MAX_ZOOM: number = 17;

/* Used our own type that mimicks google.maps.LatLng to create
/  the lat-lng for the map's initial load, as the google types
/  haven't loaded and blocks the render of the map
*/
//const initCenter = computed(() => `${props.center.lat}, ${props.center.lng}`);

const mapFilters = [
    {
        id: 'accommodation',
        Key: 'hotel',
    },
    {
        id: 'food_drink',
        Key: 'restaurant'
    },
    {
        id: 'garden',
        Key: 'garden'
    },
];

onMounted(async() => {
    setOptions({
        key: props.apiKey,
        v: "weekly",
        libraries: ['maps', 'places', 'marker', 'core']
    });

    //mapContainer = document.querySelector('gmp-map');
    mapContainer = document.getElementById('vs-map');
    searchContainer = document.getElementById('search-container');
    placeSearch = document.getElementById('placeSearch');
    placeSearchQuery = document.getElementById('placeSearchQuery');
    detailContainer = document.getElementById('detail-container');
    placeDetails = document.getElementById('placeDetails');
    placeRequest = document.getElementById('placeRequest');

    try{
        await importLibrary('maps') as google.maps.MapsLibrary;
        await importLibrary('places') as google.maps.PlacesLibrary;
        await importLibrary('marker') as google.maps.MarkerLibrary;
        await importLibrary('core') as google.maps.CoreLibrary;

        await customElements.whenDefined('gmp-map');
    } catch (error) {
        console.error('Google Maps Library load error')
    }

    async function initMap(): Promise<void> {
        try {
            const mapOptions: google.maps.MapOptions = {
                center: {
                    lat: props.center.lat,
                    lng: props.center.lng,
                },
                zoom: 12,
                mapId: 'vs-practice-map',
            };

            if (mapContainer) {
                console.log(mapContainer);
                gMap = new google.maps.Map(mapContainer, mapOptions);
                console.log(gMap);
                console.log(gMap.getCenter());
            } else {
                throw new Error('Init error, mapContainer undefined');
            }
        } catch (error) {
            console.error('Maps init error', error.message);
        }

        //Handles click events in the Places UI Kit search panel
        placeSearch.addEventListener('gmp-select', ({ place }) => {
            if(markers[place.id]){
                handlePlaceClick(place, markers[place.id]);
            }
        })
    };

    // Init map
    await initMap();
})

function searchPlaces(category?) {
    const bounds = gMap.getBounds();
    clearExistingMarkers();

    if (category) {
        placeSearchQuery.maxResultCount = 10;
        placeSearchQuery.locationRestriction = {
            center: props.center, 
            radius: props.radius
        };
        placeSearchQuery.includedTypes = [category];

        placeSearch.addEventListener('gmp-load', addMarkers, {once: true});
    }

}

function searchByCategory(category){
    searchPlaces(category);
}

async function addMarkers() {
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;
    const { LatLngBounds } = await google.maps.importLibrary('core') as google.maps.CoreLibrary;

    const bounds = new LatLngBounds();
    placeSearch.style.display = 'block';

    if (placeSearch.places && placeSearch.places.length > 0) {
        placeSearch.places.forEach((place) => {

            // Custom styling for marker
            const markerIcon = document.createElement('div');
            markerIcon.className = 'vs-map-marker';
            markerIcon.innerHTML = `★`;

            // Add `content: markerIcon` to enable custom markers
            let marker = new AdvancedMarkerElement({
                map: gMap,
                position: place.location,
                title: place.displayName,
            })

            console.log(marker.map);

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

    if (placeSearch.places.length > 0) {
        gMap.fitBounds(bounds);
    }
}

function resetMap() {
    for(const marker in markers) {
        if(markers[marker]) {
            markers[marker].map = null;
        }
    }
    markers = {};
    gMap.setCenter(props.center);
    gMap.setZoom(props.zoom);
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
</script>

<style lang="scss">
.map-wrapper{
    height: 40em;
    width: 100%;
}
</style>
