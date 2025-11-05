import { ref } from 'vue';
import { defineStore } from 'pinia';
import { CludoCredentials } from '@/types/types';
import cludoSearch from '@/utils/federated-search/cludo-search';
import eventSearch from '@/utils/federated-search/event-search';
import cludoAutocomplete from '@/utils/federated-search/cludo-autocomplete';

const useFederatedSearchStore = defineStore('federatedSearch', () => {
    const cludoCategories = ref(null);
    const cludoCredentials = ref<CludoCredentials | undefined>(undefined);
    const cludoError = ref(false);
    const currentPage = ref(1);
    const eventsApi = ref(undefined);
    const eventsApiError = ref(false);
    const isLoading = ref(false);
    const results = ref(null);
    const searchTerm = ref('');
    const selectedCategory = ref(null);
    const selectedCategoryKey = ref(null);
    const selectedSubCategory = ref([]);
    const selectedSubCategoryKey = ref([]);
    const totalResults = ref(undefined);
    const totalResultsCludo = ref(undefined);
    const totalResultsEvents = ref(undefined);
    const isHomePage = ref(false);
    const startDate = ref('');
    const endDate = ref('');
    const sortBy = ref(undefined);
    const searchUrl = ref(undefined);

    async function getSearchResults() {
        isLoading.value = true;

        const cludoResults = await cludoSearch(
            searchTerm.value,
            cludoCredentials.value,
            currentPage.value,
            selectedCategory.value,
            selectedCategoryKey.value,
        );

        const eventResults = await eventSearch(
            eventsApi.value,
            searchTerm.value,
            currentPage.value,
            selectedCategoryKey.value,
            selectedSubCategoryKey.value,
            startDate.value,
            endDate.value,
            sortBy.value,
        );

        results.value = [...cludoResults.results, ...eventResults.results];

        totalResultsCludo.value = cludoResults.totalResults;
        totalResultsEvents.value = eventResults.totalResults;
        totalResults.value = cludoResults.totalResults + eventResults.totalResults;

        isLoading.value = false;
    }

    async function getAutoComplete() {
        return cludoAutocomplete(searchTerm.value, cludoCredentials.value);
    }

    function navigateToResultsPage(resetPageNo?: boolean) {
        const url = new URL(window.location);

        if (searchTerm.value) {
            url.searchParams.set('search-term', searchTerm.value);
        } else {
            url.searchParams.delete('search-term');
        }

        if (selectedCategoryKey.value) {
            url.searchParams.set('category', encodeURIComponent(selectedCategoryKey.value));
        } else {
            url.searchParams.delete('category');
        }

        if (selectedSubCategoryKey.value.length > 0) {
            url.searchParams.set('sub-category', encodeURIComponent(selectedSubCategoryKey.value.join(',')));
        } else {
            url.searchParams.delete('sub-category');
        }

        if (resetPageNo) {
            currentPage.value = 1;
            url.searchParams.set('page', currentPage.value.toString());
        } else if (currentPage.value && currentPage.value > 1) {
            url.searchParams.set('page', currentPage.value.toString());
        } else {
            url.searchParams.delete('page');
        }

        if (startDate.value) {
            url.searchParams.set('start-date', startDate.value);
        } else {
            url.searchParams.delete('start-date');
        }

        if (endDate.value) {
            url.searchParams.set('end-date', endDate.value);
        } else {
            url.searchParams.delete('end-date');
        }

        if (sortBy.value) {
            url.searchParams.set('sort-by', sortBy.value.key);
        } else {
            url.searchParams.delete('sort-by');
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
        cludoError,
        eventsApi,
        eventsApiError,
        getAutoComplete,
        getSearchResults,
        isLoading,
        results,
        searchTerm,
        selectedCategory,
        selectedCategoryKey,
        selectedSubCategory,
        selectedSubCategoryKey,
        totalResults,
        totalResultsCludo,
        totalResultsEvents,
        navigateToResultsPage,
        isHomePage,
        startDate,
        endDate,
        sortBy,
    };
});

export default useFederatedSearchStore;
