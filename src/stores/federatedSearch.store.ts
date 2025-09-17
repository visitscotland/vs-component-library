import { ref } from 'vue';
import { defineStore } from 'pinia';
import cludoSearch from '@/utils/federated-search/cludo-search';
import { CludoCredentials } from '@/types/types';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const cludoCredentials = ref<CludoCredentials>(undefined);
    const isLoading = ref(false);
    const searchTerm = ref('');

    async function getSearchResults() {
        if (!searchTerm.value) return;

        isLoading.value = true;

        const cludoResults = await cludoSearch(searchTerm.value, cludoCredentials.value);

        console.log('Cludo Results:', cludoResults);

        isLoading.value = false;
    }

    return {
        cludoCredentials,
        getSearchResults,
        isLoading,
        searchTerm,
    };
});

export default useFederatedSearchStore;
