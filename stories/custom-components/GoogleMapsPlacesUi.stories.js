import VsMainMap from '@/custom-components/maps/MainMap.vue';

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
        <VsMainMap v-bind="args" />
    `,
});

const base = {
    center: {
        lat: 56.46,
        lng: -2.97,
    },
    zoom: 7,
    radius: 5000,
    labels: {
        heading: 'Discover your Scotland',
        closeSidebarBtn: 'Close Sidebar',
        inputPlaceholder: 'Type in your keyword',
        searchButton: 'Search',
        clearMap: 'Clear all',
        searchResults: 'Search results for ',
        openSidebarButton: 'openSidebarButton',
    },
};

export const Default = Template.bind();

Default.args = base;

export const Espanol = Template.bind();

Espanol.args = {
    ...base,
    labels: {
        heading: 'Descubre tu Escocia',
        closeSidebarBtn: 'Cerrar barra lateral',
        inputPlaceholder: 'Escribe tu palabra clave',
        searchButton: 'Buscar',
        clearMap: 'Borrar mapa',
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
