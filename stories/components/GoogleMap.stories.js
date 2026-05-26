import { VsContainer, VsRow } from '@/components';
import VsGoogleMap from '@/components/google-map/GoogleMap.vue';
import placesData from '@/assets/fixtures/maps/places-data-regional.json';

export default {
    component: VsGoogleMap,
    title: 'Components/Media & data visualisation/Google Map',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsGoogleMap,
        VsContainer,
        VsRow,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsContainer>
        <VsRow>
            <vs-google-map
                v-bind="args"
                style="
                    height: 40em;
                    width: 100%;
                "
            />
        </VsRow>
    </VsContainer>
        
    `,
});

const base = {
    center: {
        lat: 57.7,
        lng: -4.7,
    },
    zoom: 8,
    mapId: 'b55b94a250e703072014702e',
    features: {
        clickableIcons: true,
        gestureHandling: 'cooperative',
        isFractionalZoomEnabled: true,
        fullscreenControl: false,
        renderingTypeVector: true,
        boundsData: {
            north: 61.0,
            south: 54.6,
            west: -8.7,
            east: 0.3,
        },
    },
    markerData: placesData.features,
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};
