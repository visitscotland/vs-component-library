import type { FederatedSearchResult } from '@/types/types';
import useFederatedSearchStore from '@/custom-components/federated-search/stores/federatedSearch.store';

function cleanData(data: any) {
    const events = data.events;

    const results: FederatedSearchResult[] = events.map((event) => ({
        id: event.id,
        parentId: event.parentId,
        title: event.name,
        description: event.descriptions?.[0]?.description || '',
        imgSrc: event.images?.[0]?.url || '',
        url: event.performances?.[0]?.url || '',
        placeUrl: event.place.website,
        location: event.place.town,
        startDate: event.startFormatted,
        endDate: event.endFormatted,
        minPrice: event.minPrice?.toString(),
        dataSrc: 'data-thistle',
        categoryCard: event.categoryCard || '',
    }));

    return results;
}

async function eventSearch(
    api: string,
    searchTerm: string,
    page: number,
    selectedCategoryKey: string,
    selectedSubCategoryKey: string[],
    startDate: string,
    endDate: string,
    sortBy: string,
    siteLanguage: string,
) {
    const federatedSearchStore = useFederatedSearchStore();
    federatedSearchStore.eventsApiError = false;
    federatedSearchStore.cludoError = false;

    let url = `${api}?query=${searchTerm}&lang=${siteLanguage}`;
    url = page > 1 ? `${url}&page=${page}` : url;
    url = startDate !== '' ? `${url}&startDate=${startDate}` : url;
    url = endDate !== '' ? `${url}&endDate=${endDate}` : url;
    url = sortBy ? `${url}&sort=${sortBy}` : url;
    url = selectedCategoryKey === 'events' ? `${url}&pageSize=12` : `${url}&pageSize=6`;

    selectedSubCategoryKey.forEach((category) => {
        url += `&category=${category}`;
    });

    if (selectedCategoryKey && selectedCategoryKey !== 'events') {
        url += `&category=${selectedCategoryKey}`;
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            federatedSearchStore.isLoading = false;
            federatedSearchStore.eventsApiError = true;
            throw new Error(`Events response message: ${response.status}`);
        }

        const results = await response.json();

        return {
            results: cleanData(results),
            totalResults: results.totalResults,
        };
    } catch (error) {
        federatedSearchStore.isLoading = false;
        federatedSearchStore.eventsApiError = true;
        return {
            results: [],
            totalResults: 0,
        };
    }
}

export default eventSearch;
