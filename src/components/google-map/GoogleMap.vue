<template>
    <div
        class="vs-google-map"
        id="vs-google-map"
        style="
            height: 20em;
            width: 20em;
        "
        ref="VsGoogleMapElement"
    />
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { mapLoader, initMap } from './composables/MapsApiLoader';

const map = ref();
const VsGoogleMapElement = ref();

onMounted(async() => {
    mapLoader('');
    map.value = initMap(
        VsGoogleMapElement.value,
    );
});

console.log(map.value);

</script>

<style lang="scss">

</style>
