export default function useUpdateSearchParams() {
    function updateSearchParams(updates: Record<string, string | null>) {
        const url = new URL(window.location.href);
        
        for (const [key, value] of Object.entries(updates)) {
            if (value === null || value === '') {
                url.searchParams.delete(key);
            } else {
                url.searchParams.set(key, value);
            }
        }
        
        // eslint-disable-next-line object-curly-newline
        history.pushState({}, '', url);
    }

    function getSearchParams() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        const location = params.get('location');
        const subcategories = params.get('subcategories');
        const searchTerm = params.get('search-term');
        const zoom = Number(params.get('zoom'));
        
        const coordsParam = params.get('coords');
        let coords: number[] | undefined;

        if (coordsParam) {
            coords = coordsParam.split(',')
                .map((el) => Number(el));
        }

        return {
            category,
            coords,
            location,
            subcategories,
            searchTerm,
            zoom,
        };
    }

    return {
        getSearchParams,
        updateSearchParams,
    };
}