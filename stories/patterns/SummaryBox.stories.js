import  VsSummaryBoxList from '@/components/patterns/summary-box/SummaryBoxList.vue';
import  VsSummaryBoxListItem from '@/components/patterns/summary-box/components/SummaryBoxListItem.vue';

export default {
    component: VsSummaryBoxList,
    title: 'Patterns/Summary Box',
    tags: ['autodocs'],
    argTypes: {},
};

const Template = () => ({
    components: {
        VsSummaryBoxList,
        VsSummaryBoxListItem,
    },
    // setup() {
    //     return {
    //         args,
    //     };
    // },
    template: `
        <div style="height: 400px;">
            <VsSummaryBoxList>
                <VsSummaryBoxListItem
                    :text=itineraries.sampleItinerary.totalDays
                    label="Days"
                />
                <VsSummaryBoxDistanceListItem
                    :miles=itineraries.sampleItinerary.totalMiles
                    :kilometres=itineraries.sampleItinerary.totalKM
                    distance-label="Distance"
                    miles-label="miles"
                    kilometres-label="km"
                >
                </VsSummaryBoxDistanceListItem>
                <VsSummaryBoxListItem
                    :icon=itineraries.sampleItinerary.transport.key
                    :iconLabel=itineraries.sampleItinerary.transport.value
                    label="Transport"
                />
                <VsSummaryBoxListItem
                    :icon=itineraries.sampleItinerary.theme.key
                    :iconLabel=itineraries.sampleItinerary.theme.value
                    label="Main theme"
                />
            </VsSummaryBoxList>
        </div>
    `,
});

// const base = {
//     linkCount: 4,
//     label: 'Visit Scotland',
//     type: 'external',
//     href: 'https://visitscotland.com',
//     variant: 'primary',
// };

export const Default = Template.bind({
});

// Default.args = base;

