import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref(true);
    const timeMounted = ref(Date.now());
    const firstInteraction = ref(false);
    const searchesCount = ref(0);
    const filterUsesCount = ref(0);
    const showDestinations = ref(true);
    const showCategories = ref(false);
    const selectedDestinationType = ref<string | undefined>(undefined);

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
        showDestinations,
        showCategories,
        selectedDestinationType,
    };
});

export default useGoogleMapStore;
