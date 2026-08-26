/**
 * This is the store for the VsGoogleMap component.
 */

import { BrxmFeature } from '@/types/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useGoogleBaseMapStore = defineStore('googleBaseMap', () => {
    const markers = ref<object[]>([]);
    const isPolygonTooltipOpen = ref(false);
    const markerHovered = ref<string | null>(null);
    const markerSelected = ref<BrxmFeature | null>(null);

    return {
        markers,
        markerHovered,
        markerSelected,
        isPolygonTooltipOpen,
    };
});

export default useGoogleBaseMapStore;
