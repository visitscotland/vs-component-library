<template>
    <div>
        <div
            class="vs-google-map"
            id="vs-google-map"
            ref="VsGoogleMapElement"
        />
        
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { mapLoader, initMap } from './composables/MapsApiLoader';
import { createCustomControls } from './composables/CustomControls';
import { LatLngObject, MapOptions } from '@/types/types';
import getEnvValue from '@/utils/get-env-value';

const map = ref();
const VsGoogleMapElement = ref();

type Props = {
    apiKey: string,
    center: LatLngObject,
    zoom: number,
    mapId?: string,
    features?: MapOptions,
}

const {
    apiKey = getEnvValue('GOOGLE_MAPS_API_KEY'),
    center = {
        lat: 0,
        lng: 0,
    },
    zoom = 1,
    mapId = 'vs-map',
    features = {
        clickableIcons: true,
        gestureHandling: 'auto',
        isFractionalZoomEnabled: false,
        renderingTypeVector: true,
    }
} = defineProps<Props>();


onMounted(async() => {
    mapLoader(apiKey);
    map.value = await initMap(
        VsGoogleMapElement.value,
        {
            center,
            zoom,
            mapId,
            features,
        },
    );

    // Creates and mounts custom contols
    await createCustomControls(map.value);
});

</script>

<style lang="scss">

.vs-google-map {
    width: 100%;
    height: inherit;

    &__custom-control-container {
        margin: 1em 1em 0 0;
        display: flex;
        flex-direction: column;
        row-gap: $vs-spacer-075;
    }
}

</style>
