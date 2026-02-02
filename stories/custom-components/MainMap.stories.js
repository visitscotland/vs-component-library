import VsMainMap from '@/custom-components/maps/MainMap.vue';
import mapCategoryLabels from '@/assets/fixtures/custom-components/main-map/map-labels.json';
import mapFeaturedPlaces from '@/assets/fixtures/custom-components/main-map/map-featured-places.json';

export default {
    component: VsMainMap,
    title: 'Custom components/Main Map',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    components: {
        VsMainMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <VsMainMap v-bind="args" />
        </div>
    `,
});

const base = {
    mapId: '80fe83bd0f6b4f3f24adc270',
    mapTypeVector: true,
    center: {
        lat: 56.490153,
        lng: -4.10959,
    },
    zoom: 6,
    radius: 5000,
    categoriesLocation: './fixtures/custom-components/main-map/map-categories.json',
    categoryLabels: mapCategoryLabels,
    featuredPlaces: mapFeaturedPlaces,
    jsDisabled: false,
    noResultsMessage: 'We couldn\'t find anything here.',
    resetMapNoResultsMessage: 'Reset the map to explore more locations.',
    noJsMessage: 'JavaScript is required to use the map. Enable JavaScript then reload the page to use the map.',
    noCookiesMessage: 'Cookies are required to use the map',
    cookieBtnText: 'Manage cookies',
    labels: {
        heading: 'Discover your Scotland',
        closeSidebarBtn: 'Close Sidebar',
        searchBarAriaLabel: 'Search the map',
        inputPlaceholder: 'Type in your keyword',
        searchButton: 'Search',
        clearMap: 'Clear all',
        subFilterHeader: 'Refine your results',
        searchResults: 'Search results for ',
        openSidebarButton: 'openSidebarButton',
    },
};

export const Default = Template.bind();

Default.args = base;

export const Espanol = Template.bind();

Espanol.args = {
    ...base,
    noResultsMessage: 'No pudimos encontrar nada aquí.',
    resetMapNoResultsMessage: 'Restablezca el mapa para explorar más ubicaciones.',
    labels: {
        heading: 'Descubre tu Escocia',
        closeSidebarBtn: 'Cerrar barra lateral',
        searchBarAriaLabel: 'Buscar en el mapa',
        inputPlaceholder: 'Escribe tu palabra clave',
        searchButton: 'Buscar',
        clearMap: 'Borrar mapa',
        subFilterHeader: 'Perfecciona tus resultados',
        searchResults: 'Resultados de la búsqueda para ',
        openSidebarButton: 'Abrir barra lateral',
    },
    languageCode: 'es',
};

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};

export const NoCookies = Template.bind();

NoCookies.args = {
    ...base,
};

NoCookies.decorators = [
    () => {
        window.bypassCookiesRequired = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];
