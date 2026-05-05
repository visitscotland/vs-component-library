import VsGoogleMap from '@/components/google-map/GoogleMap.vue';

export default {
    component: VsGoogleMap,
    title: 'Components/Media & data visualisation/Google Map',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsGoogleMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <vs-google-map />
    `,
});

const base = {
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};
