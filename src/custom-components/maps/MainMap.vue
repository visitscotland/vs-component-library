<template>
    <div
        ref="mapContainer"
        class="vs-google-map"
    >
        <gmp-advanced-marker></gmp-advanced-marker>
    </div>
    <VsFedFilter 
        :filterCategories="mapFilters"
        slot="inline-block-start"
        @filter-updated="searchByCategory"
    /> 

    <Suspense>
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
                    <gmp-place-details-place-request place="ChIJ98CZIJrHh0gRWApM5esemkY" id="placeRequest"></gmp-place-details-place-request>
                    <gmp-place-all-content></gmp-place-all-content>
                </gmp-place-details>
            </div>
    </Suspense>
</template>

<script setup lang="ts">
import getEnvValue from '@/utils/get-env-value';
import {
    type PropType,
    onMounted,
    ref,
    useTemplateRef,
    watch
} from 'vue';
import VsFedFilter from '../federated-search/components/FedFilter.vue';

let searchContainer: HTMLElement | null = document.getElementById('search-container');
let placeSearch: HTMLElement | null = document.getElementById('placeSearch');
let placeSearchQuery: HTMLElement | null = document.getElementById('placeSearchQuery');
let detailContainer: HTMLElement | null = document.getElementById('detail-container');
let placeDetails: HTMLElement | null = document.getElementById('placeDetails');
let placeRequest: HTMLElement | null = document.getElementById('placeRequest');

const mapContainer = ref<HTMLElement | null>(null);
let map: google.maps.Map | null = null;

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

const props = defineProps({
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
    },
    center: {
        type: Object as PropType<google.maps.LatLng>,
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

const loadGoogleMaps = (apiKey: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if ((window as any).google?.maps) {
            return resolve()
        }

        const existingScript = document.getElementById('google-maps-script');
        if(existingScript) {
            existingScript.addEventListener('load', () => resolve())
            return
        }

        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `
            https://maps.googleapis.com/maps/api/js?key=${apiKey}
            &v=quarterly
            &libraries=places
        `;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject('Failed to load Google Maps');
        document.head.appendChild(script);
    });
}

onMounted(async() => {
    await loadGoogleMaps(props.apiKey);

    // Init map
    if (mapContainer.value) {
        map = new google.maps.Map(mapContainer.value, {
            center: props.center,
            zoom: props.zoom,
        });
    }
})

watch(() => props.center, (newCenter: google.maps.LatLng) => {
    if(map) map.setCenter(newCenter);
})

function searchPlaces(category?) {
    const bounds = map.getBounds();

    placeSearchQuery = document.getElementById('placeSearchQuery');


    if (category) {
        placeSearchQuery.maxResultCount = 10;
        placeSearchQuery.locationRestriction = {center: props.center, radius: 1000};
        placeSearchQuery.includedTypes = [category];

        //placeSearch.addEventListener('gmp-load', addMarkers, {once: true});
    }

}

function searchByCategory(category){
    searchPlaces(category);
}

async function addMarkers() {
    
}
</script>

<style lang="scss">
.vs-google-map{
    height: 100vh;
    width: 100vw;
}
</style>
