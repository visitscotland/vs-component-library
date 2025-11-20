import { ref } from 'vue';
import { defineStore } from 'pinia';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref<boolean>(true);

    return {
        sidebarOpen,
    };
});

export default useGoogleMapStore;
