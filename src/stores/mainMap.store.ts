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
    const searchTerm = ref<string | undefined>(undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const categoryLabelData = ref<any>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const categoryData = ref<any>();

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
        searchTerm,
        showDestinations,
        showCategories,
        selectedDestinationType,
        categoryLabelData,
        categoryData,
    };
});

export default useGoogleMapStore;
