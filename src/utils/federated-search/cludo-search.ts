import { CludoCredentials, FederatedSearchResult } from '@/types/types';

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
) {
    const { apiKey, customerId, engineId } = cludoCredentials;
    const url = `https://api-eu1.cludo.com/api/v3/${customerId}/${engineId}/search`;
    const auth = `${customerId}:${apiKey}`;

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
            throw new Error(`Cludo response message: ${response.status}`);
        }

        const results = await response.json();
        console.log('cludo results', results);

        const cleanResults = cleanData(results);

        return {
            results: cleanResults,
            totalResults: results.TotalDocument,
            categories: results.Facets.Category.Items,
        };
    } catch (error) {
        console.error('Cludo error:', error?.message);
        return [];
    }
}

export default cludoSearch;
