import { ref } from 'vue';
import { defineStore } from 'pinia';
import { CludoCredentials } from '@/types/types';
import cludoSearch from '@/utils/federated-search/cludo-search';
import eventSearch from '@/utils/federated-search/event-search';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const cludoCategories = ref(null);
    const cludoCredentials = ref<CludoCredentials>(undefined);
    const currentPage = ref(1);
    const isLoading = ref(false);
    const results = ref(null);
    const searchTerm = ref('');
    const selectedCategory = ref(null);
    const totalResults = ref(0);
    const isHomePage = ref(false);

    async function getCludoCategories() {
        const cludoResults = await cludoSearch('*', cludoCredentials.value, 1, '');
        cludoCategories.value = cludoResults.categories;
    }

    async function getSearchResults() {
        isLoading.value = true;

        const cludoResults = await cludoSearch(
            searchTerm.value,
            cludoCredentials.value,
            currentPage.value,
            selectedCategory.value,
        );

        const eventResults = await eventSearch(
            searchTerm.value,
            currentPage.value,
            selectedCategory.value,
        );

        console.log('Cludo Results:', cludoResults);

        results.value = [...cludoResults.results, ...eventResults.results];
        totalResults.value = cludoResults.totalResults + eventResults.totalResults;

        if (!cludoCategories.value) {
            cludoCategories.value = cludoResults.categories;
        }

        isLoading.value = false;
    }

    function navigateToResultsPage() {
        const url = new URL(window.location);

        if (searchTerm.value) {
            url.searchParams.set('search-term', searchTerm.value);
        }

        if (selectedCategory.value) {
            url.searchParams.set('category', selectedCategory.value);
        }

        if (currentPage.value && currentPage.value > 1) {
            url.searchParams.set('page', currentPage.value.toString());
        }

        if (!isHomePage.value) {
            // eslint-disable-next-line object-curly-newline
            window.history.pushState({}, '', url);
            getSearchResults();
        } else {
            console.log('direct to search-results');
        }
        // const newParams = {
        //     path: '/story/components-custom-components-federated-search--default',
        // };

        // if (searchTerm.value) {
        //     newParams['search-term'] = searchTerm.value;
        // }

        // if (selectedCategory.value) {
        //     newParams['category'] = selectedCategory.value;
        // }

        // const params = new URLSearchParams(newParams);
        // const newHref = (Object.keys(newParams).length === 0)
        //     ? ''
        //     : `?${params}`;

        // window.location.href = newHref;
    }

    // // Query the APIs with the new page number when pagination is updated.
    // watch(currentPage, (newValue, oldValue) => {
    //     if (newValue !== oldValue) {
    //         getSearchResults();
    //     }
    // });

    return {
        cludoCategories,
        currentPage,
        cludoCredentials,
        getCludoCategories,
        getSearchResults,
        isLoading,
        results,
        searchTerm,
        selectedCategory,
        totalResults,
        navigateToResultsPage,
        isHomePage,
    };
});

export default useFederatedSearchStore;
