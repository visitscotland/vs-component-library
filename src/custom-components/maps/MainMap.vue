<template>
    <div class="map-wrapper">
        <gmp-map
            id="vs-map"
            class="vs-google-map"
            map-id="vs-map"
            :center="center"
            :zoom="props.zoom"
        >
            <gmp-advanced-marker></gmp-advanced-marker>
        </gmp-map>
    </div>
    <!-- <VsFedFilter 
        :filterCategories="mapFilters"
        slot="inline-block-start"
        @filter-updated="searchByCategory"
    />  -->

    <!-- <Suspense>
        <div id="search-container">
            <gmp-place-search id="placeSearch" orientation="verical" selectable>
                <gmp-place-all-content></gmp-place-all-content>
                <gmp-place-nearby-search-request id="placeSearchQuery"
                ></gmp-place-nearby-search-request>
            </gmp-place-search> 
        </div>
    </Suspense>
    <Suspense>
        <div id="detail-container">
                <gmp-place-details id="placeDetails">
                    <gmp-place-details-place-request id="placeRequest"></gmp-place-details-place-request>
                    <gmp-place-all-content></gmp-place-all-content>
                </gmp-place-details>
            </div>
    </Suspense> -->
</template>

<script setup lang="ts">
import getEnvValue from '@/utils/get-env-value';
import { LatLngObject } from '@/types/types';
import {
    type PropType,
    onMounted,
    computed,
    ref,
    watch
} from 'vue';
import VsFedFilter from '../federated-search/components/FedFilter.vue';
import {setOptions, importLibrary} from '@googlemaps/js-api-loader';

const props = defineProps({
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
    },
    center: {
        type: Object as PropType<LatLngObject>,
        default: {
            lat: 0,
            lng: 0,
        },
        required: true,
    },
    zoom: {
        type: Number,
        default: 12,
    }
})

let searchContainer: HTMLElement | null = document.getElementById('search-container');
let placeSearch: HTMLElement | null = document.getElementById('placeSearch');
let placeSearchQuery: HTMLElement | null = document.getElementById('placeSearchQuery');
let detailContainer: HTMLElement | null = document.getElementById('detail-container');
let placeDetails: HTMLElement | null = document.getElementById('placeDetails');
let placeRequest: HTMLElement | null = document.getElementById('placeRequest');

/* Used our own type that mimicks google.maps.LatLng to create
/  the lat-lng for the map's initial load, as the google types
/  haven't loaded and blocks the render of the map
*/
const center = computed(() => `${props.center.lat}, ${props.center.lng}`);

let map = null;

const mapOptions: google.maps.MapOptions = {
    center: {
        lat: 12,
        lng: 12,
    },
    zoom: 12,
}

const mapFilters = [
        {
            id: 'accommodation',
            Key: 'hotel',
        },
        {
            id: 'food_drink',
            Key: 'restaurant'
        },
    ]

async function initMap(): Promise<void> {
    try {
        const { Map } = await importLibrary('maps') as google.maps.MapsLibrary;
        await importLibrary('core') as google.maps.CoreLibrary;
        await importLibrary('places') as google.maps.PlacesLibrary;

        await customElements.whenDefined('gmp-map');
        const mapContainer: HTMLElement = document.getElementById('vs-map');
        if (mapContainer) {
            console.log('map init')
            map = new Map(mapContainer);
        } else {
            throw new Error('Init error, mapContainer undefined');
        }
    } catch (error) {
        console.error('Maps init error', error.message);
    }
};


onMounted(async() => {
    setOptions({
        key: props.apiKey,
        v: "quarterly",
        libraries: ['maps', 'core', 'places']
    });

    // Init map
    await initMap();
})

// function searchPlaces(category?) {
//     const bounds = map.getBounds();

//     placeSearchQuery = document.getElementById('placeSearchQuery');


//     if (category) {
//         placeSearchQuery.maxResultCount = 10;
//         placeSearchQuery.locationRestriction = {center: props.center, radius: 1000};
//         placeSearchQuery.includedTypes = [category];

//         //placeSearch.addEventListener('gmp-load', addMarkers, {once: true});
//     }

// }

// function searchByCategory(category){
//     searchPlaces(category);
// }

// async function addMarkers() {
    
// }
</script>

<style lang="scss">
.map-wrapper{
    height: 40em;
    width: 100%;
}
</style>
