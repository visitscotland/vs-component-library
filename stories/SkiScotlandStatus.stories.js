import VsSkiScotlandStatus from '@/components/ski-scotland/ski-scotland-status/SkiScotlandStatus.vue';

export default {
    component: VsSkiScotlandStatus,
    title: 'SkiScotland/Status',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSkiScotlandStatus,
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
            <template v-if="args['centre-information']" v-slot:centre-information>{{ args['centre-information'] }}</template>
            <template v-if="args['data-loading']" v-slot:data-loading>{{ args['data-loading'] }}</template>
            <template v-if="args['data-unavailable']" v-slot:data-unavailable>{{ args['data-unavailable'] }}</template>
            <template v-if="args['js-required']" v-slot:js-required>{{ args['js-required'] }}</template>
        </VsSkiScotlandStatus>
    `,
});

const base = {
    skiStatusUrl: '/fixtures/ski-scotland/sample-ski-data.json',
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
    'centre-information': 'http://www.glencoemountain.co.uk',
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
