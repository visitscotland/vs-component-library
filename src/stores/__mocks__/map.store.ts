import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

const useMapStore = defineStore('map', () => {
    const maps: Ref<Array<any>> = ref([]);
    const activeSubcatFilters: Ref<Array<any>> = ref([]);
    const selectedSubCategory: Ref<string> = ref(null);
    const activeMarkerPos = ref(null);
    const activePlace = ref(null);

    function addMapInstance(payload) {
        maps.value.push({
            id: payload.id,
            filters: payload.filters,
            places: payload.places,
            activePins: payload.activePins,
            hovered: '',
            activePlace: null,
        });
    }

    function setHoveredPlace(payload) {
        maps.value.forEach((map) => {
            if (map.id === payload.mapId) {
                /* eslint-disable no-param-reassign */
                map.hovered = payload.hoveredId;
            }
        });
    }

    function setActivePlace(payload) {
        maps.value.forEach((map) => {
            if (map.id === payload.mapId) {
                /* eslint-disable no-param-reassign */
                map.activePlace = payload.placeId;
            }
        });
    }

    function setActiveSubcatFilters(payload) {
        activeSubcatFilters.value = payload;
    }

    function setSelectedSubcat(payload) {
        selectedSubCategory.value = payload;
    }

    function setActiveMarkerPos(payload) {
        activeMarkerPos.value = payload;
    }

    function getMapById(id: string) {
        return maps.value.find((map) => map.id === id);
    }

    function getHoveredStop() {
        return [];
    }

    function getActivePlace() {
        return [];
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
