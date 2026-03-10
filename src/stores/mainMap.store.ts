import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref(true);
    const timeMounted = ref(Date.now());
    const firstInteraction = ref(false);
    const searchesCount = ref(0);
    const filterUsesCount = ref(0);
    const activeCategoryId = ref<string>(undefined);

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
        activeCategoryId,
    };
});

export default useGoogleMapStore;
