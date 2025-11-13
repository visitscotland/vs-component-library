import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref<Boolean>(true);

    return {
        sidebarOpen,
    };
});

export default useGoogleMapStore;
