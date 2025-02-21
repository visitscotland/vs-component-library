import VsSkiScotlandStatus from '@/components/ski-scotland/ski-scotland-status/SkiScotlandStatus.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsList from '@/components/list/List.vue';
import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsSkiScotlandStatus,
    title: 'SkiScotlandStatus',
};

const Template = (args) => ({
    components: {
        VsSkiScotlandStatus,
        VsHeading,
        VsList,
        VsLink,
        VsIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSkiScotlandStatus
            v-bind="args"
        >
            <template v-if="args['centre-information']" v-slot:centre-information>
                <VsHeading
                    level="3"
                    heading-style="heading-xs"
                >
                    Centre Information                    
                </VsHeading>

                <VsList unstyled>
                    <li v-if="args['centre-information'].phone" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-phone"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <span>
                            {{ args['centre-information'].phone }}
                        </span>
                    </li>
                    <li v-if="args['centre-information'].website" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-globe"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <VsLink
                            type="external"
                            href="#"
                        >
                            {{ args['centre-information'].website }}
                        </VsLink>
                    </li>
                    <li v-if="args['centre-information'].address" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-location-dot"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <span>
                            {{ args['centre-information'].address }}
                        </span>
                    </li>
                    <li v-if="args['centre-information'].pisteMap" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-mountain"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <VsLink
                            type="download"
                            href="args['centre-information'].pisteMap"
                        >
                            View piste map
                        </VsLink>
                    </li>
                    <li v-if="args['centre-information'].openingLink" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-clock"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <VsLink
                            href="args['centre-information'].openingLink"
                        >
                            View opening times
                        </VsLink>
                    </li>
                    <li v-if="args['centre-information'].webcam" class="mb-050">
                        <VsIcon
                            icon="fa-regular fa-camera-web"
                            size="xs"
                            class="me-050"
                        ></VsIcon>
                        <span> Webcam </span>
                    </li>
                </VsList>        
                <VsLink
                    href="#"
                    class="d-inline-block mt-100"
                >
                    <div class="d-inline-block me-100">
                        <span class="visually-hidden">Twitter</span>
                        <VsIcon
                            size="sm"
                            icon="fa-brands fa-twitter"
                            custom-colour="#55ACEE"
                        ></VsIcon>
                    </div>
                </VsLink>
                <VsLink
                    href="#"
                    class="d-inline-block mt-100"
                >
                    <div class="d-inline-block me-100">
                        <span class="visually-hidden">Facebook</span>
                        <VsIcon
                            size="sm"
                            icon="fa-brands fa-facebook"
                            custom-colour="#3A5A99"
                        ></VsIcon>
                    </div>
                </VsLink>
                <VsLink
                    href="#"
                    class="d-inline-block mt-100"
                >
                    <div class="d-inline-block me-100">
                        <span class="visually-hidden">Instagram</span>
                        <VsIcon
                            size="sm"
                            icon="fa-brands fa-instagram"
                            custom-colour="#E1306C"
                        ></VsIcon>
                    </div>
                </VsLink>
            </template>
            <template v-if="args['data-loading']" v-slot:data-loading>{{ args['data-loading'] }}</template>
            <template v-if="args['data-unavailable']" v-slot:data-unavailable>{{ args['data-unavailable'] }}</template>
            <template v-if="args['js-required']" v-slot:js-required>{{ args['js-required'] }}</template>
        </VsSkiScotlandStatus>
    `,
});

const base = {
    skiStatusUrl: './fixtures/ski-scotland/sample-ski-data.json',
    locale: 'en-gb',
    timeoutDuration: 30000,
    lastUpdatedLabel: 'Last Updated',
    liftsLabel: 'Lifts',
    runsLabel: 'Runs',
    runsLiftsStatusLabel: 'Run/Lift Status',
    statusLabel: 'Status',
    summaryClosedLabel: 'Closed',
    summaryOpenLabel: 'Open',
    summaryOpeningLabel: 'Opening',
    summaryLimitedPatrolLabel: 'Limited Patrol',
    summaryOnHoldLabel: 'On Hold',
    currentWeatherLabel: 'Current Weather',
    detailedStatusLabel: 'Detailed Status',
    difficultLabel: 'Difficult',
    easyLabel: 'Easy',
    intermediateLabel: 'Intermediate',
    itinerariesLabel: 'Itineraries',
    liftLabel: 'Lift',
    liftStatusLabel: 'Lift Status',
    newsLabel: 'News',
    otherLabel: 'Other',
    roadsLabel: 'Roads',
    runLabel: 'Run',
    runStatusLabel: 'Run Status',
    snowConditionsLabel: 'Snow Conditions',
    statusClosedLabel: 'Closed',
    statusOpenLabel: 'Open',
    statusOpeningLabel: 'Opening',
    statusLimitedPatrolLabel: 'Limited Patrol',
    statusOnHoldLabel: 'On Hold',
    veryDifficultLabel: 'Very Difficult',
    weatherForecastLabel: 'Weather Forecast',
    greenLabel: 'Green',
    blueLabel: 'Blue',
    redLabel: 'Red',
    blackLabel: 'Black',
    orangeLabel: 'Orange',
    greyLabel: 'Grey',
    'data-loading': 'Data is currently loading, please wait...',
    'data-unavailable': 'Data is currently unavailable, please try again later.',
    'js-required': 'JavaScript is required to load more ski data.',
    'centre-information': {
        phone: '01855 851226',
        website: 'www.glencoemountain.co.uk',
        address: 'Kingshouse, Glencoe, Glencoe, PH49 4HZ',
        pisteMap: 'https://static.visitscotland.com/pdf/glencoe-mountain-piste-map.pdf',
        openingLink: 'https://www.visitscotland.com/info/see-do/glencoe-mountain-resort-p990461#opening',
        webcam: 'Webcam',
    },
};

export const Default = Template.bind({
});

Default.args = base;

export const FailedLoad = Template.bind({
});

FailedLoad.args = {
    ...base,
    skiStatusUrl: '/',
};
