import VsMainMap from '@/custom-components/maps/MainMap.vue';

export default {
    component: VsMainMap,
    title: 'Custom components/Main Map',
    argTypes: {
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
        lat: 55.95201,
        lng: -3.18416,
    },
    zoom: 12,
    radius: 5000,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
