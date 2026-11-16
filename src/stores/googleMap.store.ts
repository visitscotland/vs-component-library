/**
 * This is the store for the VsGoogleMap component.
 */

import { defineStore } from 'pinia';
import { ref } from 'vue';

const useGoogleBaseMapStore = defineStore('googleBaseMap', () => {
    const markers = ref<object[]>([]);
    const isPolygonTooltipOpen = ref(false);
    const markerHovered = ref<string | null>(null);
    const activeMarkers = ref<string[]>([]);

    function setActiveMarker(markerID: string) {
        activeMarkers.value.push(markerID);
    }

    function removeActiveMarker(markerID: string) {
        activeMarkers.value = activeMarkers.value.filter((id) => id !== markerID);
    };

    return {
        setActiveMarker,
        removeActiveMarker,
        activeMarkers,
        markers,
        markerHovered,
        isPolygonTooltipOpen,
    };
});

export default useGoogleBaseMapStore;
