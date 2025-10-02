import VsFederatedSearch from '@/custom-components/federated-search/FederatedSearch.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsFederatedSearch,
    title: 'Custom components/Federated search',
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
                    v-bind="args"
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
    subFilters: [
        {
            Key: 'Books',
        },
        {
            Key: 'Clubs',
        },
        {
            Key: 'Comedy',
        },
        {
            Key: 'Dance',
        },
        {
            Key: 'Days out',
        },
        {
            Key: 'Festivals',
        },
        {
            Key: 'Films',
        },
        {
            Key: 'Kids',
        },
        {
            Key: 'LGBTQIA+',
        },
        {
            Key: 'Music',
        },
        {
            Key: 'Sport',
        },
        {
            Key: 'Talks & Lectures',
        },
        {
            Key: 'Theatre',
        },
    ],
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
