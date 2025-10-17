import VsGoogleMapsPlacesUi from '@/custom-components/google-maps/GoogleMapsPlacesUi.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsGoogleMapsPlacesUi,
    title: 'Custom components/Google Maps Places UI Kit',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsContainer,
        VsGoogleMapsPlacesUi,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
            <VsGoogleMapsPlacesUi v-bind="args" />
    `,
});

const base = {
    center: {
        lat: 55.95201,
        lng: -3.18416,
    },
    zoom: 12,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
