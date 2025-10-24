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
    zoom: 14,
    radius: 5000,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
