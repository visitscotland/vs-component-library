import VsSkiScotlandCard from '@/components/ski-scotland/ski-scotland-card/SkiScotlandCard.vue';

import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsSkiScotlandCard,
    title: 'SkiScotlandCard',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSkiScotlandCard,
        VsContainer,
        VsRow,
        VsCol,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsContainer>
        <VsRow
            class="mx-n4 mx-lg-n8"
        >
            <VsCol
                cols="12"
                sm="6"
                lg="4"
                class="px-4 px-lg-8"
            >
                <VsSkiScotlandCard
                    v-bind="args"
                >
                    <template v-if="args['centre-name']" v-slot:centre-name>{{ args['centre-name'] }}</template>
                    <template v-if="args['data-loading']" v-slot:data-loading>{{ args['data-loading'] }}</template>
                    <template v-if="args['data-unavailable']" v-slot:data-unavailable>{{ args['data-unavailable'] }}</template>
                    <template v-if="args['js-required']" v-slot:js-required>{{ args['js-required'] }}</template>
                </VsSkiScotlandCard>
            </VsCol>
        </VsRow>
    </VsContainer>
    `,
});

const base = {
    centreInfoUrl: '/fixtures/ski-scotland/sample-ski-data.json',
    locale: 'en-gb',
    imgSrc: '/fixtures/ski-scotland/ski-image.jpg',
    imgAlt: 'Glencoe ski centre',
    moreDetailsLink: '#',
    pisteMapLink: '#',
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
    pisteMapLabel: 'Piste Map',
    moreDetailsLabel: 'More Details',
    'centre-name': 'Glencoe Ski Centre',
    'data-loading': 'Data is currently loading, please wait...',
    'data-unavailable': 'Data is currently unavailable, please try again later.',
    'js-required': 'JavaScript is required to load more ski data.',
};

export const Default = Template.bind({
});

Default.args = base;

export const FailedLoad = Template.bind({
});

FailedLoad.args = {
    ...base,
    centreInfoUrl: '/',
};
