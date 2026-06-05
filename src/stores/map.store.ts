import {ref, type Ref} from 'vue';
import { defineStore } from 'pinia';

interface MapInstance {
	id: string;
	filters: unknown;
	places: unknown;
	activePins: unknown;
	hovered: string;
	activePlace: unknown;
}

const useMapStore = defineStore('map', () => {
    const maps: Ref<MapInstance[]> = ref([]);
    const activeSubcatFilters: Ref<unknown[]> = ref([]);
    const selectedSubCategory = ref<unknown>(null);
    const activeMarkerPos = ref<unknown>(null);
    const activePlace = ref<unknown>(null);

    function addMapInstance(payload: Pick<MapInstance, 'id' | 'filters' | 'places' | 'activePins'>) {
        maps.value.push({
            id: payload.id,
            filters: payload.filters,
            places: payload.places,
            activePins: payload.activePins,
            hovered: '',
            activePlace: null,
        });
    }

    function setHoveredPlace(payload: { mapId: string; hoveredFeature: string }) {
        maps.value.forEach((map) => {
            if (map.id === payload.mapId) {
                map.hovered = payload.hoveredFeature;
            }
        });
    }

    function setActivePlace(payload: { mapId: string; activeFeature: unknown }) {
        maps.value.forEach((map) => {
            if (map.id === payload.mapId) {
                map.activePlace = payload.activeFeature;
            }
        });
    }

    function setActiveSubcatFilters(payload: unknown[]) {
        activeSubcatFilters.value = payload;
    }

    function setSelectedSubcat(payload: unknown) {
        selectedSubCategory.value = payload;
    }

    function setActiveMarkerPos(payload: unknown) {
        activeMarkerPos.value = payload;
    }

    function getMapById(id: string) {
        return maps.value.find((map) => map.id === id);
    }

    function getHoveredStop(mapId: string) {
        const activeMap = maps.value.find((map) => map.id === mapId);
        return activeMap?.hovered;
    }

    function getActivePlace(mapId: string) {
        const activeMap = maps.value.find((map) => map.id === mapId);
        return activeMap?.activePlace;
    }

    return {
        maps,
        activeSubcatFilters,
        selectedSubCategory,
        activeMarkerPos,
        activePlace,
        addMapInstance,
        setHoveredPlace,
        setActivePlace,
        setActiveSubcatFilters,
        setSelectedSubcat,
        setActiveMarkerPos,
        getMapById,
        getHoveredStop,
        getActivePlace,
    };
});

export default useMapStore;
