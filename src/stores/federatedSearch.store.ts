import { ref } from 'vue';
import { defineStore } from 'pinia';
import { CludoCredentials } from '@/types/types';
import cludoSearch from '@/utils/federated-search/cludo-search';
import eventSearch from '@/utils/federated-search/event-search';
import cludoAutocomplete from '@/utils/federated-search/cludo-autocomplete';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const cludoCategories = ref(null);
    const cludoCredentials = ref<CludoCredentials>(undefined);
    const currentPage = ref(1);
    const eventsApi = ref(undefined);
    const isLoading = ref(false);
    const results = ref(null);
    const searchTerm = ref('');
    const selectedCategory = ref(null);
    const selectedSubCategory = ref([]);
    const totalResults = ref(undefined);
    const isHomePage = ref(false);
    const startDate = ref('');
    const endDate = ref('');
    const sortBy = ref(undefined);
    const searchUrl = ref(undefined);

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
            cludoCategories.value,
        );

        const eventResults = await eventSearch(
            eventsApi.value,
            searchTerm.value,
            currentPage.value,
            selectedCategory.value,
            selectedSubCategory.value,
            startDate.value,
            endDate.value,
            sortBy.value,
        );

        console.log('Cludo Results:', cludoResults);

        results.value = [...cludoResults.results, ...eventResults.results];
        totalResults.value = cludoResults.totalResults + eventResults.totalResults;

        if (!cludoCategories.value) {
            cludoCategories.value = cludoResults.categories;
        }

        isLoading.value = false;
    }

    async function getAutoComplete() {
        return cludoAutocomplete(searchTerm.value, cludoCredentials.value);
    }

    function navigateToResultsPage(resetPageNo?: Boolean) {
        const url = new URL(window.location);

        if (searchTerm.value) {
            url.searchParams.set('search-term', searchTerm.value);
        }

        if (selectedCategory.value) {
            url.searchParams.set('category', selectedCategory.value);
        }

        if (selectedSubCategory.value.length > 0) {
            url.searchParams.set('sub-category', encodeURIComponent(selectedSubCategory.value.join(',')));
        }

        if (resetPageNo) {
            console.log(`resetting page no`)
            currentPage.value = 1;
            url.searchParams.set('page', currentPage.value.toString());
        } else if (currentPage.value && currentPage.value > 1) {
            url.searchParams.set('page', currentPage.value.toString());
        }

        if (startDate.value) {
            url.searchParams.set('start-date', startDate.value);
        }

        if (endDate.value) {
            url.searchParams.set('end-date', endDate.value);
        }

        if (sortBy.value) {
            url.searchParams.set('sort-by', sortBy.value.id);
        }

        if (!isHomePage.value) {
            // eslint-disable-next-line object-curly-newline
            window.history.pushState({}, '', url);
            getSearchResults();
        } else {
            const newHref = `./${searchUrl.value}/${url.search}`;
            window.location.href = newHref;
        }
    }

    return {
        cludoCategories,
        currentPage,
        cludoCredentials,
        eventsApi,
        getAutoComplete,
        getCludoCategories,
        getSearchResults,
        isLoading,
        results,
        searchTerm,
        selectedCategory,
        selectedSubCategory,
        totalResults,
        navigateToResultsPage,
        isHomePage,
        startDate,
        endDate,
        sortBy,
    };
});

export default useFederatedSearchStore;
