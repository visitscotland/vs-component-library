import { ref } from 'vue';
import { defineStore } from 'pinia';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const isLoading = ref(false);

    return {
        isLoading,
    };
});

export default useFederatedSearchStore;
