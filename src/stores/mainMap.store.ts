import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const useGoogleMapStore = defineStore('googleMap', () => {
    const sidebarOpen = ref<boolean>(true);
    const timeMounted = ref<number>(Date.now());
    const firstInteraction = ref<boolean>(false);
    const searchesCount = ref<number>(0);
    const filterUsesCount = ref<number>(0);
    const isLoading = ref(false);
    const searchTermCheckEndpoint = 'https://v86py8n18d.execute-api.us-east-1.amazonaws.com/develop/checkTerm';

    async function checkSearchTerm(searchTerm: String) {
        try {
            isLoading.value = true;
            let data = null;
            if (searchTerm) {
                await axios({
                    method: 'post',
                    url: `${searchTermCheckEndpoint}?term=${searchTerm}`,
                    responseType: 'stream',
                }).then((response) => {
                    data = JSON.parse(response.data);
                });
            };

            isLoading.value = false;
            return data;
        } catch (err) {
            console.error('searchTermCheck unavailable: ', err);
            isLoading.value = false;
            return {
                hasError: true,
            };
        }
    }

    return {
        checkSearchTerm,
        isLoading,
        sidebarOpen,
        timeMounted,
        firstInteraction,
        searchesCount,
        filterUsesCount,
    };
});

export default useGoogleMapStore;
