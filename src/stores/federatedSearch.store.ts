import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { CludoCredentials } from '@/types/types';
import cludoSearch from '@/utils/federated-search/cludo-search';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const cludoCredentials = ref<CludoCredentials>(undefined);
    const currentPage = ref(1);
    const isLoading = ref(false);
    const results = ref(null);
    const searchTerm = ref('');
    const totalResults = ref(0);

    async function getSearchResults() {
        if (!searchTerm.value) return;

        isLoading.value = true;

        const cludoResults = await cludoSearch(
            searchTerm.value,
            cludoCredentials.value,
            currentPage.value,
        );

        console.log('Cludo Results:', cludoResults);

        results.value = cludoResults.results;
        totalResults.value = cludoResults.totalResults;

        isLoading.value = false;
    }

    // Query the APIs with the new page number when pagination is updated.
    watch(currentPage, (newValue, oldValue) => {
        if (newValue !== oldValue) {
            getSearchResults();
        }
    });

    return {
        currentPage,
        cludoCredentials,
        getSearchResults,
        isLoading,
        results,
        searchTerm,
        totalResults,
    };
});

export default useFederatedSearchStore;
