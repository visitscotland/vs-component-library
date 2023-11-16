import VsItinerary from '@/components/patterns/itineraries/Itinerary.vue';
import VsItineraryDay from '@/components/patterns/itineraries/components/ItineraryDay.vue';
import VsItineraryStop from '@/components/patterns/itineraries/components/ItineraryStop.vue';
import VsMap from '@components/patterns/map/Map.vue';
import VsDescriptionList from '@/components/patterns/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/patterns/description-list/components/DescriptionListItem.vue';
import VsTooltip from '@/components/elements/tooltip/Tooltip.vue';
import VsLink from '@/components/elements/link/Link.vue';
import VsSvg from '@/components/elements/svg/Svg.vue';
import VsAddress from '@/components/elements/address/Address.vue';
import VsItineraryStopInfo from '@/components/patterns/itineraries/components/ItineraryStopInfo.vue';
import VsItineraryTips from '@/components/patterns/itineraries/components/ItineraryTips.vue';
import VsIconList from '@/components/patterns/icon-list/IconList.vue';
import VsIconListItem from '@/components/patterns/icon-list/components/IconListItem.vue';
import VsImageWithCaption from '@/components/patterns/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/patterns/caption/Caption.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

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
        VsMap,
        VsDescriptionList,
        VsDescriptionListItem,
        VsTooltip,
        VsItineraryStopInfo,
        VsItineraryTips,
        VsLink,
        VsIconList,
        VsIconListItem,
        VsSvg,
        VsAddress,
        VsImageWithCaption,
        VsCaption,
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
                <VsMap 
                    listViewText="List"
                    mapViewText="Map"
                    mapId="vs-itinerary-map"
                    :isVisible="true"
                    :places="args.stops"
                    :fitToMarkers="true"
                />
            </template>

            <template
                v-slot:list
            >
                <VsItineraryDay
                    v-for="day in args.days"
                    :defaultShow="(day.dayCount < 3) ? true : false"
                    :dayNumber="day.dayCount"
                    dayLabel="Day"
                    :dayTitle="day.title"
                >
                    <template
                        v-slot:day-introduction
                    >
                        <div class="mb-5" v-html="day.introduction"></div>
                    </template>

                    <template
                        v-slot:day-transport
                    >
                        <VsDescriptionList
                            v-if="day.transport.length"
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
                                v-for="(transportType, transportTypeIndex) in day.transport"
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
                        v-for="stop in day.stops"
                        :stopNumber="stop.stopCount"
                        :stopLabel="stop.title"
                        :stopTitle="stop.subtitle"
                    >
                        <VsImageWithCaption
                            :altText="stop.image.altText"
                            :image-src="stop.image.imageSrc"
                        >
                            <template v-slot:img-caption>
                                <VsCaption>
                                    <template v-slot:caption>
                                        <span>
                                            {{ stop.image.caption }}
                                        </span>
                                    </template>
        
                                    <template v-slot:credit>
                                        <span>
                                            &copy; {{ stop.image.credit }}
                                        </span>
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
        
                        <template
                            v-slot:stop-description
                        >
                            <div
                                v-html="stop.description"
                            ></div>
        
                            <VsLink href="stop.href">
                                Find out more
                            </VsLink>
                        </template>
        
                        <template
                            v-if="stop.timeToExplore"
                        >
                            <VsDescriptionList class="my-4 mb-0 justify-content-start" inline>
                                <VsDescriptionListItem title class="mb-0 mr-0 pr-1 col-auto">
                                    Time to explore
                                </VsDescriptionListItem>
                                <VsDescriptionListItem class="mb-0 col-auto px-0">
                                    {{stop.timeToExplore}}
                                </VsDescriptionListItem>
                            </VsDescriptionList>
                        </template>
        
                        <template
                            v-slot:stop-tips
                        >
                            <VsItineraryTips
                                v-if="stop.tips.tipsTitle.length > 0 && stop.tips.tipsBody.length > 0"
                            >
                                <template v-slot:text>
                                    <div>
                                        <strong>{{stop.tips.tipsTitle}}</strong>
                                        <div v-html="stop.tips.tipsBody"></div>
                                    </div>
                                </template>
                                <template v-slot:svg>
                                    <VsSvg path="highland-cow" />
                                </template>
                            </VsItineraryTips>
                        </template>
        
                        <template v-slot:stop-address>
                            <VsAddress v-if="stop.address && stop.address.line1">
                                <span v-if="stop.address.line1">{{ stop.address.line1 }},<br></span>
                                <span v-if="stop.address.line2">{{ stop.address.line2 }},<br></span>
                                <span v-if="stop.address.line3">{{ stop.address.line3 }},<br></span>
                                <span v-if="stop.address.city">{{ stop.address.city }},<br></span>
                                <span
                                    v-if="stop.address.postcode"
                                >
                                    {{ stop.address.postcode }}
                                </span>
                            </VsAddress>
                        </template>
        
                        <template
                            v-slot:stop-info
                        >
                            <VsItineraryStopInfo
                                v-if="args.showOpeningHours"
                                :openingHours="args.openingHours"
                                openingTimesLink="https://www.visitscotland.com"
                                closedText="Closed"
                                closingSoonText="Closing soon"
                                openText="Open"
                                hoursLinkUrl="https://www.visitscotland.com"
                                usualText="Usually"
                                provisionalText="Provisionally"
                                temporarilyClosedText="Temporarily closed"
                                toText="to"
                                andText="and"
                            >
                                <template v-slot:stop-to>
                                    to
                                </template>
        
                                <template v-slot:stop-link-text>
                                    Check opening times
                                </template>
        
                                <template v-slot:stop-charge-text>
                                    Admission charge
                                </template>
                            </VsItineraryStopInfo>
                        </template>
        
                        <template v-slot:stop-facilities>
                            <VsIconList
                                v-if="stop.facilities.length"
                                title="Key facilities"
                            >
                                <VsIconListItem
                                    v-for="(facility) in stop.facilities"
                                    :label="facility.value"
                                    :icon="facility.key"
                                />
                            </VsIconList>
                        </template>
                    
                    </VsItineraryStop>
                    </template>
                </VsItineraryDay>
            </template>
        </VsItinerary>
    `,
});

const mapStops = [];

// eslint-disable-next-line array-callback-return
sampleItinerary.days.map((day) => {
    day.stops.map((stop) => mapStops.push({
        title: stop.title,
        latitude: stop.latitude,
        longitude: stop.longitude,
        stopCount: stop.stopCount,
        imageSrc: stop.image.imageSrc,
        altText: stop.image.altText,
    }));
});

const base = {
    days: sampleItinerary.days,
    stops: mapStops,
};

export const Default = Template.bind({
});

Default.args = base;
