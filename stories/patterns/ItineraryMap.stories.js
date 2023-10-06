import VsItinerary from '@/components/patterns/itineraries/Itinerary.vue';
import VsItineraryMap from '@/components/patterns/itineraries/components/itinerary-map/ItineraryMap.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

export default {
    component: VsItineraryMap,
    title: 'Patterns/Itinerary/Map',
    tags: ['autodocs'],
};

const stops = [];

// eslint-disable-next-line array-callback-return
sampleItinerary.days.map((day) => {
    day.stops.map((stop) => stops.push({
        title: stop.title,
        latitude: stop.latitude,
        longitude: stop.longitude,
        stopCount: stop.stopCount,
        imageSrc: stop.image.imageSrc,
        altText: stop.image.altText,
    }));
});

const Template = (args) => ({
    components: {
        VsItinerary,
        VsItineraryMap,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsItineraryMap v-bind="args">
            <p>Add an image with caption here</p>
        </VsItineraryMap>
    `,
});

const base = {
    // overviewMapLongitude: '57.81',
    // overviewMapLatitude: '-4.13',
    // overviewMapZoom: '5',
    // stops,
    // labels: {
    //     stopLabel: 'Stop',
    //     mapControlsFullscreenOpen: 'Show fullscreen',
    //     mapControlsFullscreenClose: 'Exit fullscreen',
    //     mapControlsCompass: 'Reset angle',
    //     mapControlsZoomIn: 'Zoom in',
    //     mapControlsZoomOut: 'Zoom out',
    // },
    mapId: 'vs-itinerary-map',
    isVisible: true,
    places: stops,
    fitToMarkers: true,
};

export const Default = Template.bind({
});

Default.args = base;
