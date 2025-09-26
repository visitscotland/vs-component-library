import VsFedSearchSort from '@/components/federated-search/components/FedSearchSort.vue';

export default {
    component: VsFedSearchSort,
    title: 'Components/Custom components/Fed Search Sort',
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
        <VsFedSearchSort v-bind="args">
        </VsFedSearchSort>
    `,
});

export const Default = Template.bind();

Default.args = {
};
