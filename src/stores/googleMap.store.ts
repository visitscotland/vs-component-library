/**
 * This is the store for the VsGoogleMap component.
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

const useGoogleBaseMapStore = defineStore('googleBaseMap', () => {
    const isMarkerTooltipOpen = ref(false);
    const isPolygonTooltipOpen = ref(false);

    return {
        isMarkerTooltipOpen,
        isPolygonTooltipOpen,
    };
});

export default useGoogleBaseMapStore;
