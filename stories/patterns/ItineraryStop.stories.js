import VsLink from '@/components/elements/link/Link.vue';
import VsSvg from '@/components/elements/svg/Svg.vue';
import VsAddress from '@/components/elements/address/Address.vue';

import VsItinerary from '@/components/patterns/itineraries/Itinerary.vue';
import VsItineraryStop from '@/components/patterns/itineraries/components/ItineraryStop.vue';
import VsItineraryStopInfo from '@/components/patterns/itineraries/components/ItineraryStopInfo.vue';
import VsItineraryTips from '@/components/patterns/itineraries/components/ItineraryTips.vue';

import VsDescriptionList from '@/components/patterns/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/patterns/description-list/components/DescriptionListItem.vue';
import VsIconList from '@/components/patterns/icon-list/IconList.vue';
import VsIconListItem from '@/components/patterns/icon-list/components/IconListItem.vue';

import sampleItinerary from '@/assets/fixtures/itineraries/sample-itinerary.json';

export default {
    component: VsItineraryStop,
    title: 'Patterns/Itinerary/Stop',
    tags: ['autodocs'],
    argTypes: {
    },
};

const sampleStop = sampleItinerary.days[0].stops[0];

const Template = (args) => ({
    components: {
        VsItinerary,
        VsItineraryStop,
        VsItineraryStopInfo,
        VsItineraryTips,
        VsDescriptionList,
        VsDescriptionListItem,
        VsLink,
        VsIconList,
        VsIconListItem,
        VsSvg,
        VsAddress,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <ul class="list-unstyled">
            <VsItineraryStop v-bind="args">
                <p>Add ImageWithCaption here</p>

                <template
                    v-slot:stop-description
                >
                    <div
                        v-html="args.description"
                    ></div>

                    <VsLink href="args.href">
                        Find out more
                    </VsLink>
                </template>

                <template
                    v-if="args.timeToExplore"
                >
                    <VsDescriptionList class="my-4 mb-0 justify-content-start" inline>
                        <VsDescriptionListItem title class="mb-0 mr-0 pr-1 col-auto">
                            Time to explore
                        </VsDescriptionListItem>
                        <VsDescriptionListItem class="mb-0 col-auto px-0">
                            {{args.timeToExplore}}
                        </VsDescriptionListItem>
                    </VsDescriptionList>
                </template>

                <template
                    v-slot:stop-tips
                >
                    <VsItineraryTips
                        v-if="args.tips.tipsTitle.length > 0 && args.tips.tipsBody.length > 0"
                    >
                        <template v-slot:text>
                            <div>
                                <strong>{{args.tips.tipsTitle}}</strong>
                                <div v-html="args.tips.tipsBody"></div>
                            </div>
                        </template>
                        <template v-slot:svg>
                            <VsSvg path="highland-cow" />
                        </template>
                    </VsItineraryTips>
                </template>

                <template v-slot:stop-address>
                    <VsAddress v-if="args.address && args.address.line1">
                        <span v-if="args.address.line1">{{ args.address.line1 }},<br></span>
                        <span v-if="args.address.line2">{{ args.address.line2 }},<br></span>
                        <span v-if="args.address.line3">{{ args.address.line3 }},<br></span>
                        <span v-if="args.address.city">{{ args.address.city }},<br></span>
                        <span
                            v-if="args.address.postcode"
                        >
                            {{ args.address.postcode }}
                        </span>
                    </VsAddress>
                </template>

                <template
                    v-slot:stop-info
                >
                    <VsItineraryStopInfo
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

                <VsIconList
                    v-if="args.facilities.length"
                    title="Key facilities"
                    v-slot:stop-facilities
                >
                    <VsIconListItem
                        v-for="(facility, facilitiesIndex) in args.facilities"
                        :key="facilitiesIndex"
                        :label="facility.value"
                        :icon="facility.key"
                        />
                </VsIconList>
            </VsItineraryStop>
        </ul>
    `,
});

const base = {
    stopLabel: 'Stop',
    stopTitle: sampleStop.title,
    stopNumber: '1',
    longitude: sampleStop.longitude,
    latitude: sampleStop.latitude,
    imageSrc: sampleStop.image.imageSrc,
    altText: sampleStop.image.altText,
    description: sampleStop.description,
    href: sampleStop.href,
    tips: sampleStop.tips,
    address: sampleStop.address,
    openingHours: sampleItinerary.openingHours,
    facilities: sampleStop.facilities,
};

export const Default = Template.bind({
});

Default.args = base;
