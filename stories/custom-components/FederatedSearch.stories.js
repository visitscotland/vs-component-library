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
                <template>
                    {{ args.noJsText }}
                </template>
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
        {
            Key: 'Visual Arts',
        },
    ],
    subFilterHeader: 'Refine your search',
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
    noJsText: 'JavaScript needs to be enabled to use the search function',
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
