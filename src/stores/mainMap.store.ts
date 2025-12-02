import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref<boolean>(true);
    const timeMounted = ref<number>(Date.now());
    const firstInteraction = ref<boolean>(false);

    return {
        sidebarOpen,
        timeMounted,
        firstInteraction,
    };
});

export default useGoogleMapStore;
