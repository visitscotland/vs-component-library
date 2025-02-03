import VsDetails from '@/components/details/VsDetails.vue';

export default {
    component: VsDetails,
    title: 'Details',
};

const Template = (args) => ({
    components: {
        VsDetails,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsDetails v-bind="args">
            Something really interesting
        </VsDetails>
    `,
});

const base = {
    summaryTitle: 'Sector',
};

export const Default = Template.bind();
Default.args = base;
