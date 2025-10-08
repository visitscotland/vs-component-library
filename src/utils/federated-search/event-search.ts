import { FederatedSearchResult } from '@/types/types';
import useFederatedSearchStore from '@/stores/federatedSearch.store';

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
    }));

    return results;
}

async function eventSearch(
    api: string,
    searchTerm: string,
    page: number,
    selectedCategory: string,
    selectedSubCategory: string[],
    startDate: string,
    endDate: string,
    sortBy: any,
) {
    const federatedSearchStore = useFederatedSearchStore();
    federatedSearchStore.eventsApiError = false;
    federatedSearchStore.cludoError = false;
    // Only query the event API when the no selected category or the event category
    // is selected.
    if (selectedCategory === 'Events & Festivals' || !selectedCategory) {
        let url = `${api}?query=${searchTerm}`;
        url = page > 1 ? `${url}&page=${page}` : url;
        url = startDate !== '' ? `${url}&startDate=${startDate}` : url;
        url = endDate !== '' ? `${url}&endDate=${endDate}` : url;
        url = sortBy ? `${url}&sort=${sortBy.id}` : url;

        selectedSubCategory.forEach((category) => {
            url += `&category=${category.toLowerCase()}`;
        });

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
    } else {
        return {
            results: [],
            totalResults: 0,
        };
    }
}

export default eventSearch;
