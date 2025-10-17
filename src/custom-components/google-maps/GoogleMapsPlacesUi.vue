<template>
    <div
        ref="mapContainer"
        class="vs-google-map"
    >
</div>
</template>

<script setup lang="ts">
import getEnvValue from '@/utils/get-env-value';
import {
    type PropType,
    onMounted,
    ref,
    watch
} from 'vue';

const mapContainer = ref<HTMLElement | null>(null);
let map: google.maps.Map | null = null;

const props = defineProps({
    apiKey: {
        type: String,
        default: getEnvValue('GOOGLE_MAPS_API_KEY'),
        required: true,
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

        console.log(apiKey)
    
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

</script>

<style lang="scss">
.vs-google-map{
    height: 100vh;
    width: 100vw;
}
</style>
