import VsMap from '@/components/patterns/map/Map.vue';
import VsMapMarker from '@/components/patterns/map/components/MapMarker.vue';
import placesData from '@/assets/fixtures/maps/places-data.json';

export default {
    component: VsMap,
    title: 'Patterns/Map',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMap,
        VsMapMarker,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMap v-bind="args"></VsMap>
    `,
});

const base = {
    mapId: 'vs-map',
    isVisible: true,
    places: placesData.features,
    boundsData: {
        type: 'bounds',
        coordinates: [
            [-3.058595889098882, 55.993275047970826],
            [-3.34402565597901, 55.887115661571926],
        ],
    },
};

export const Default = Template.bind({
});

Default.args = base;
