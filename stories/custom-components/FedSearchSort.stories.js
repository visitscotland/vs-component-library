import VsFedSearchSort from '@/custom-components/federated-search/components/FedSearchSort.vue';

export default {
    component: VsFedSearchSort,
    title: 'Custom components/Fed Search Sort',
    decorators: [() => ({
        template: '<div style="max-width:600px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsFedSearchSort,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFedSearchSort v-bind="args" />
    `,
});

export const Default = Template.bind();

Default.args = {
    dateFilterVisible: true,
    sortOptions: [
        {
            id: 'relevance',
            label: 'Relevance',
        },
        {
            id: 'date',
            label: 'Date',
        },
        {
            id: 'price_asc',
            label: 'Price Ascending',
        },
        {
            id: 'price_desc',
            label: 'Price Descending',
        },
    ],
    fromDateLabel: 'Arriving from',
    toDateLabel: 'To',
    sortLabel: 'Sort by',
};
