export default function useUpdateSearchParams() {
    function updateSearchParams(updates: Record<string, string | null>, replace: boolean) {
        const url = new URL(window.location.href);
        
        for (const [key, value] of Object.entries(updates)) {
            if (value === null || value === '') {
                url.searchParams.delete(key);
            } else {
                url.searchParams.set(key, value);
            }
        }
        
        if (replace) {
            // eslint-disable-next-line object-curly-newline
            history.replaceState({}, '', url);
        } else {            
            // eslint-disable-next-line object-curly-newline
            history.pushState({}, '', url);
        }
    }

    function getSearchParams() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        const location = params.get('location');
        const subcategories = params.get('subcategories');
        const searchTerm = params.get('search-term');

        const zoomParam = params.get('zoom');
        const zoomValue = zoomParam === null ? NaN : Number(zoomParam);
        const zoom = Number.isFinite(zoomValue) ? zoomValue : undefined;
        
        const coordsParam = params.get('coords');
        let coords: number[] | undefined;
        
        if (coordsParam) {
            const parsed = coordsParam.split(',').map((el) => Number(el));

            if (parsed.length === 2 && parsed.every(Number.isFinite)) {
                coords = parsed;
            }
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