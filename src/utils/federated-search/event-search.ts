import { FederatedSearchResult } from '@/types/types';

function cleanData(data: any) {
    const events = data.events;

    const results: FederatedSearchResult[] = events.map((event) => ({
        id: event.id,
        title: event.name,
        description: event.descriptions[0]?.description || '',
        imgSrc: event.images[0]?.url || '',
        url: event.performances[0]?.url || '',
        dataSrc: 'data-thistle',
    }));

    return results;
}

async function eventSearch(
    searchTerm: string,
    page: number,
    selectedCategory: string,
    selectedSubCategory: string[],
    startDate: string,
    endDate: string,
    sortBy: any,
) {
    // Only query the event API when the no selected category or the event category
    // is selected.
    if (selectedCategory === 'Events & Festivals' || selectedCategory === '') {
        let url = `http://3.10.24.15:8080/events/search?query=${searchTerm}`;
        url = page > 1 ? `${url}&page=${page}` : url;
        // url = startDate !== '' ? `${url}&startDate=${startDate}` : url;
        // url = endDate !== '' ? `${url}&endDate=${endDate}` : url;
        // url = sortBy ? `${url&}`

        // Temporary
        console.log({
            startDate,
            endDate,
            sortBy,
        });

        selectedSubCategory.forEach((category) => {
            url += `&category=${category.toLowerCase()}`;
        });

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Events response message: ${response.status}`);
            }

            const results = await response.json();

            console.log('Events', results);
            console.log('Events clean', cleanData(results));

            // const cleanResults = cleanData(results);

            // return {
            //     results: cleanResults,
            //     totalResults: results.TotalDocument,
            // };
            return {
                results: cleanData(results),
                totalResults: results.totalResults,
            };
        } catch (error) {
            console.error('Event error:', error?.message);
            return [];
        }
    } else {
        return {
            results: [],
            totalResults: 0,
        };
    }
}

export default eventSearch;
