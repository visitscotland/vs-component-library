export default function useUpdateSearchParams() {
    function updateSearchParams(updates: Record<string, string>) {
        const url = new URL(window.location.href);
        
        for (const [key, value] of Object.entries(updates)) {
            if (value === null || value === '') {
                url.searchParams.delete(key);
            } else {
                url.searchParams.set(key, encodeURI(value));
            }
        }
        
        // eslint-disable-next-line object-curly-newline
        history.pushState({}, '', url);
    }

    function getSearchParams() {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        const coords = params.get('coords');
        const location = params.get('location');
        const subcategories = params.get('subcategories');
        
        let searchTerm = params.get('search-term');
        if (searchTerm) {
            searchTerm = decodeURI(searchTerm);
        }

        return {
            category,
            coords,
            location,
            searchTerm,
            subcategories,
        };
    }

    return {
        getSearchParams,
        updateSearchParams,
    };
}