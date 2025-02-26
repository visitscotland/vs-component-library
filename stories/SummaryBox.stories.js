import VsSummaryBoxList from '@/components/summary-box/SummaryBoxList.vue';
import VsSummaryBoxListItem from '@/components/summary-box/components/SummaryBoxListItem.vue';
import VsSummaryBoxDistanceListItem from '@/components/summary-box/components/SummaryBoxDistanceListItem.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

export default {
    component: VsSummaryBoxList,
    title: 'SummaryBox',
    argTypes: {
        transportKey: {
            options: [
                'none - icon is optional',
                'car',
                'bus',
                'cycle',
                'train',
                'ferry',
                'walk',
                'tram',
                'taxi',
                'subway',
                'public-transport',
                'boat',
            ],
            control: {
                type: 'select',
            },
        },
        themeKey: {
            options: [
                'none - icon is optional',
                'child',
                'family',
                'film-tv',
                'city',
                'camera',
                'castle',
                'food',
                'hiking',
                'history',
                'leaf',
                'ski-boot',
                'whisky',
            ],
            control: {
                type: 'select',
            },
        },
        themeValue: {
            options: [
                'Families',
                'Film & TV',
                'City Break',
                'Photography',
                'Architecture',
                'Food',
                'Hiking',
                'History',
                'Nature',
                'Skiing',
                'Whisky',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsSummaryBoxList,
        VsSummaryBoxListItem,
        VsSummaryBoxDistanceListItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSummaryBoxList>
            <VsSummaryBoxListItem
                :text="args.totalDays"
                :label="args.item1Label"
            />
            <VsSummaryBoxDistanceListItem
                :miles="args.totalMiles"
                :kilometres="args.totalKM"
                :distance-label="args.item2Label"
                miles-label="miles"
                kilometres-label="km"
            />
            <VsSummaryBoxListItem
                :icon="args.transportKey"
                :icon-label="args.transportValue"
                :label="args.item3Label"
            />
            <VsSummaryBoxListItem
                :icon="args.themeKey"
                :icon-label="args.themeValue"
                :label="args.item4Label"
            />
        </VsSummaryBoxList>
    `,
});

const base = {
    totalDays: sampleItinerary.totalDays,
    totalMiles: sampleItinerary.totalMiles,
    totalKM: sampleItinerary.totalKM,
    transportKey: sampleItinerary.transport.key,
    transportValue: sampleItinerary.transport.value,
    themeKey: sampleItinerary.theme.key,
    themeValue: sampleItinerary.theme.value,
    item1Label: 'Days',
    item2Label: 'Distance',
    item3Label: 'Transport',
    item4Label: 'Main theme',
};

export const Default = Template.bind({
});

Default.args = base;
