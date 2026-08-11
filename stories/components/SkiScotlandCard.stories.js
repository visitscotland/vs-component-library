import VsSkiScotlandCard from '@/components/ski-scotland/ski-scotland-card/SkiScotlandCard.vue';

import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsSkiScotlandCard,
    title: 'Components/Deprecated/SkiScotlandCard',
    tags: ['deprecated'],
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
    <div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
        ⚠️ Deprecated: This component will be removed in a future release. 
        See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/1354137661/Ski+Scotland+Card+deprecated">Component migration docs.</a> 
    </div>

    <VsContainer>
        <VsRow
            class="mx-n100 mx-lg-n200"
        >
            <VsCol
                cols="12"
                sm="6"
                lg="4"
                class="px-100 px-lg-200"
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
    centreInfoUrl: './fixtures/ski-scotland/sample-ski-data.json',
    locale: 'en-gb',
    imgSrc: './fixtures/ski-scotland/ski-image.jpg',
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
