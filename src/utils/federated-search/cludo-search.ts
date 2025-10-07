import { CludoCredentials, FederatedSearchResult } from '@/types/types';
import useFederatedSearchStore from '@/stores/federatedSearch.store';

function cleanData(data: any) {
    const documents = data.TypedDocuments;

    const results: FederatedSearchResult[] = documents.map((document) => ({
        id: document.Fields.Id.Value || '',
        title: document.Fields.Title.Value || '',
        description: document.Fields.Description.Value || '',
        imgSrc: document.Fields.Image?.Value || '',
        url: document.Fields.Url.Value || '',
        dataSrc: 'cludo',
    }));

    return results;
}

async function cludoSearch(
    searchTerm: string,
    cludoCredentials: CludoCredentials,
    page: number,
    selectedCategory: string,
    cludoCategories: string[] | null,
) {
    const { apiKey, customerId, engineId } = cludoCredentials;
    const url = `https://api-eu1.cludo.com/api/v3/${customerId}/${engineId}/search`;
    const auth = `${customerId}:${apiKey}`;

    const federatedSearchStore = useFederatedSearchStore();
    federatedSearchStore.eventsApiError = false;
    federatedSearchStore.cludoError = false;

    // If no Cludo Credentials passed, show error message instead.
    if (!cludoCredentials) {
        federatedSearchStore.cludoError = true;
        federatedSearchStore.isLoading = false;
        return {
            results: [],
            totalResults: 0,
            categories: [],
        };
    }

    // Don't query the Cludo API when the "Events & Festivals" is selected
    // as this data only comes from the Events API (DataThistle).
    if (selectedCategory === 'Events & Festivals' && cludoCategories) {
        return {
            results: [],
            totalResults: 0,
            categories: cludoCategories,
        };
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                query: searchTerm || '*',
                operator: 'or',
                responseType: 'JsonObject',
                perPage: 6,
                page,
                facets: {
                    Category: selectedCategory ? [selectedCategory] : null,
                },
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(auth)}`,
            },
        });

        if (!response.ok) {
            federatedSearchStore.cludoError = true;
            federatedSearchStore.isLoading = false;
            throw new Error(`Cludo response message: ${response.status}`);
        }

        const results = await response.json();

        const cleanResults = cleanData(results);

        if (selectedCategory === 'Events & Festivals' && !cludoCategories) {
            return {
                results: [],
                totalResults: 0,
                categories: results.Facets.Category.Items,
            };
        };

        return {
            results: cleanResults,
            totalResults: results.TotalDocument,
            categories: results.Facets.Category.Items,
        };
    } catch (error) {
        federatedSearchStore.cludoError = true;
        federatedSearchStore.isLoading = false;
        return {
            results: [],
            totalResults: 0,
            categories: [],
        };
    }
}

export default cludoSearch;
