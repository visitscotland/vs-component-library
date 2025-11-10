import VsMainMap from '@/custom-components/maps/MainMap.vue';
import mapCategories from '@/assets/fixtures/custom-components/main-map/map-categories.json';
import mapCategoryLabels from '@/assets/fixtures/custom-components/main-map/map-labels.json';


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
    center: {
        lat: 56.46,
        lng: -2.97,
    },
    zoom: 7,
    radius: 5000,
    jsDisabled: false,
    noJsMessage: 'JavaScript is required to use the map. Enable JavaScript then reload the page to use the map.',
    noCookiesMessage: 'Cookies are requried to use the map',
    cookieBtnText: 'Manage cookies',
    categories: mapCategories,
    categoryLabels: mapCategoryLabels,
};

export const Default = Template.bind();

Default.args = base;

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
