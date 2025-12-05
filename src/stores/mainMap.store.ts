import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref<boolean>(true);
    const timeMounted = ref<number>(Date.now());
    const firstInteraction = ref<boolean>(false);
    const searchesCount = ref<number>(0);
    const filterUsesCount = ref<number>(0);

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
    };
});

export default useGoogleMapStore;
