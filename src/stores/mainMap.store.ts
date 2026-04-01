import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref(true);
    const timeMounted = ref(Date.now());
    const firstInteraction = ref(false);
    const searchesCount = ref(0);
    const filterUsesCount = ref(0);
    const initialView = ref(false);
    const showDestinations = ref(true);
    const showCategories = ref(false);
    const showSubcategories = ref(false);

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
        initialView,
        showDestinations,
        showCategories,
        showSubcategories,
    };
});

export default useGoogleMapStore;
