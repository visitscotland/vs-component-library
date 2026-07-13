/**
 * This is the store for the VsGoogleMap component.
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

const useGoogleBaseMapStore = defineStore('googleBaseMap', () => {
    const markers = ref([]);
    const isMarkerHovered = ref(false);
    const isPolygonTooltipOpen = ref(false);

    return {
        markers,
        isMarkerHovered,
        isPolygonTooltipOpen,
    };
});

export default useGoogleBaseMapStore;
