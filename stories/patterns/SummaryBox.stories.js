import VsSummaryBoxList from '@/components/patterns/summary-box/SummaryBoxList.vue';
import VsSummaryBoxListItem from '@/components/patterns/summary-box/components/SummaryBoxListItem.vue';
import VsSummaryBoxDistanceListItem from '@/components/patterns/summary-box/components/SummaryBoxDistanceListItem.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

export default {
    component: VsSummaryBoxList,
    title: 'Patterns/Summary Box',
    tags: ['autodocs'],
    argTypes: {
        totalDays: {
            control: {
                type: 'number',
            },
        },
        totalMiles: {
            control: {
                type: 'number',
            },
        },
        totalKM: {
            control: {
                type: 'number',
            },
        },
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
        transportValue: {
            control: {
                type: 'string',
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
                    :text='args.totalDays'
                    label="Days"
                />
                <VsSummaryBoxDistanceListItem
                    :miles='args.totalMiles'
                    :kilometres='args.totalKM'
                    distance-label="Distance"
                    miles-label="miles"
                    kilometres-label="km"
                >
                </VsSummaryBoxDistanceListItem>
                <VsSummaryBoxListItem
                    :icon='args.transportKey'
                    :iconLabel='args.transportValue'
                    label="Transport"
                />
                <VsSummaryBoxListItem
                    :icon='args.themeKey'
                    :iconLabel='args.themeValue'
                    label="Main theme"
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
};

export const Default = Template.bind({
});

Default.args = base;
