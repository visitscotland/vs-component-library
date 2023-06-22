import VsItinerary from '@/components/patterns/itineraries/Itinerary.vue';
import VsItineraryDay from '@/components/patterns/itineraries/components/ItineraryDay.vue';
import VsItineraryStop from '@/components/patterns/itineraries/components/ItineraryStop.vue';
import VsItineraryMap from '@/components/patterns/itineraries/components/itinerary-map/ItineraryMap.vue';

import VsDescriptionList from '@/components/patterns/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/patterns/description-list/components/DescriptionListItem.vue';
import VsTooltip from '@/components/elements/tooltip/Tooltip.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

import { Default as ItineraryMap } from './ItineraryMap.stories';
import { Default as ItineraryStop } from './ItineraryStop.stories';

export default {
    component: VsItinerary,
    title: 'Patterns/Itinerary',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsItinerary,
        VsItineraryDay,
        VsItineraryStop,
        VsItineraryMap,
        ItineraryStop,
        VsDescriptionList,
        VsDescriptionListItem,
        VsTooltip,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsItinerary v-bind="args">
            <template
                v-slot:map
            >
                <VsItineraryMap v-bind="args.mapArgs" />
            </template>

            <template
                v-slot:list
            >
                <VsItineraryDay
                    :defaultShow="true"
                    :key="0"
                    dayNumber="1"
                    dayLabel="Day"
                    dayTitle="Day One"
                >
                    <template
                        v-slot:day-introduction
                    >
                        <div class="mb-5" v-html="args.dayIntroduction"></div>
                    </template>

                    <template
                        v-slot:day-transport
                    >
                        <VsDescriptionList
                            v-if="args.dayTransport.length"
                            class="text-center justify-content-center align-items-center"
                            inline
                        >
                            <VsDescriptionListItem
                                title
                                class="col-auto px-0"
                            >
                                Transport
                            </VsDescriptionListItem>
                            <VsDescriptionListItem
                                class="col-auto px-0"
                                v-for="(transportType, transportTypeIndex) in args.dayTransport"
                                :key="transportTypeIndex"
                            >
                                <VsTooltip
                                    :title="transportType.value"
                                    href="#"
                                    :icon="transportType.key"
                                    size="lg"
                                    icon-only
                                    variant="transparent"
                                >
                                    <span class="sr-only">
                                        {{transportType.value}}
                                    </span>
                                </VsTooltip>
                            </VsDescriptionListItem>
                        </VsDescriptionList>
                    </template>

                    <template
                        v-slot:stops
                    >
                        <VsItineraryStop
                            v-bind="args.stopArgs"
                        />   
                    </template>
                </VsItineraryDay>
            </template>
        </VsItinerary>
    `,
});

const dayIntroduction = `
    <p>
        <a href="https://www.visitscotland.com/destinations-maps/kingdom-fife/">Fife</a> and <a href="https://www.visitscotland.com/destinations-maps/dundee-angus/">Dundee & Angus</a> are ideal for a few days away on a quality family break. You could base yourself in a seafront cottage, a self-catering lodge in a country estate, or perhaps a luxury caravan in an amenity-filled holiday park. Think of days playing by the seaside, roaming bridle paths in the countryside, visiting exciting attractions that wee ones will love and soaking up a bit of cosmopolitan culture in the city - you won't be short of ways to have fun on this family holiday!
    </p>
`;

const base = {
    listViewText: 'List',
    mapViewText: 'Map',
    dayTransport: sampleItinerary.days[0].transport,
    dayIntroduction,
    mapArgs: ItineraryMap.args,
    stopArgs: ItineraryStop.args,
};

export const Default = Template.bind({
});

Default.args = base;
