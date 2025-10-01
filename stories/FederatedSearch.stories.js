import VsFederatedSearch from '@/components/federated-search/FederatedSearch.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsFederatedSearch,
    title: 'Components/Custom components/Federated search',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsContainer,
        VsFederatedSearch,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsContainer>
            <div :class="args.jsDisabled ? 'no-js' : ''">
                <VsFederatedSearch
                    :cludo-credentials="args.cludoCredentials"
                    :sort-options="args.sortOptions"
                >
                    <template #federated-search-no-results>
                        {{ args.noResultsLabel }}
                    </template>
                </VsFederatedSearch>
            </div>
        </VsContainer>
    `,
});

const base = {
    cludoCredentials: {
        apiKey: '',
        customerId: 0,
        engineId: 0,
    },
    sortOptions: [
        {
            id: 'dateAsc',
            label: 'Date',
        },
        {
            id: 'priceAsc',
            label: 'Price',
        },
    ],
    jsDisabled: false,
    noResultsLabel: 'There are no results, please try again',
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
