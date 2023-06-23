import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

type Geometry = {
    type: string,
    coordinates: number[],
};

type Properties = {
    altText: string,
    imageSrc: string,
    stopCount: string,
    title: string,
};

type Stop = {
    type: string,
    geometry: Geometry,
    properties: Properties,
};

const useItinerariesStore = defineStore('itineraries', () => {
    const highlightedStop: Ref<Stop> = ref(null);

    function setStopHighlighted(newStop) {
        highlightedStop.value = newStop;
    }

    function getHighlightedStopCoordinates() {
        if (highlightedStop.value) {
            return highlightedStop.value.geometry.coordinates;
        }

        return [-4.07083, 56.18882];
    }

    return {
        highlightedStop,
        setStopHighlighted,
        getHighlightedStopCoordinates,
    };
});

export default useItinerariesStore;
