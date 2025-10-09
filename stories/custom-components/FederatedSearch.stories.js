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
            Key: 'books',
            Label: 'Books',
        },
        {
            Key: 'clubs',
            Label: 'Clubs',
        },
        {
            Key: 'comedy',
            Label: 'Comedy',
        },
        {
            Key: 'dance',
            Label: 'Dance',
        },
        {
            Key: 'days out',
            Label: 'Days out',
        },
        {
            Key: 'festival',
            Label: 'Festivals',
        },
        {
            Key: 'film',
            Label: 'Film',
        },
        {
            Key: 'kids',
            Label: 'Family',
        },
        {
            Key: 'lgbt',
            Label: 'LGBTQIA+',
        },
        {
            Key: 'music',
            Label: 'Music',
        },
        {
            Key: 'sport',
            Label: 'Sport',
        },
        {
            Key: 'theatre',
            Label: 'Theatre',
        },
        {
            Key: 'visual art',
            Label: 'Visual Arts',
        },
    ],
    jsDisabled: false,
    errorMessages: {
        noResults: 'There are no results, please try again',
        incorrectDateOrder: 'The start date is after the end date, please change this and try again.',
        cludoError: 'There was a problem retrieving the search results, please try again later',
        eventError: 'There was a problem retrieving the event results, please try again later.',
    },
    noResultsLabel: 'There are no results, please try again',
    fromText: 'From',
    paginationLabels: {
        nextButtonLabel: 'Bob',
        previousButtonLabel: 'Previous',
        pageLabel: 'Page',
        ofLabel: 'of',
    },
    searchLabels: {
        refine: 'Refine your search',
        search: 'Search',
        searchLabel: 'What are you looking for?',
        searchResults: 'Search results',
        resultsFirst: 'Showing',
        resultsSecond: 'results',
        noJs: 'JavaScript needs to be enabled to see search result. You can turn this on in your browser settings.',
    },
    sortLabels: {
        dateFrom: 'From',
        dateTo: 'To',
        sort: 'Sort by',
        sortOptions: [
            {
                key: 'dateAsc',
                label: 'Date',
            },
            {
                key: 'priceAsc',
                label: 'Price',
            },
        ],
    },
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
