import { CludoCredentials } from '@/types/types';

async function cludoAutocomplete(
    searchQuery: string,
    cludoCredentials: CludoCredentials,
) {
    const { apiKey, customerId, engineId } = cludoCredentials;

    const cludoBaseUrl = 'https://api-eu1.cludo.com/api/v3';
    const cludoCallUrl = `${cludoBaseUrl}/${customerId}/${engineId}/Autocomplete`;
    const cludoAuth = `${customerId}:${apiKey}`;

    try {
        const response = await fetch(cludoCallUrl, {
            method: 'POST',
            body: JSON.stringify({
                text: searchQuery,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(cludoAuth)}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Autocomple search error ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Autocomplete search error: ${error}`);
    }
}

export default cludoAutocomplete;
