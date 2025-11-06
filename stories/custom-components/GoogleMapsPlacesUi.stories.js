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
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
