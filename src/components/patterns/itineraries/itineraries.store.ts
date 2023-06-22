import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

const useItinerariesStore = defineStore('itineraries', () => {
    const highlightedStop: Ref<Object> = ref(null);

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
