import VsFederatedSearch from '@/custom-components/federated-search/FederatedSearch.vue';
import VsContainer from '@/components/grid/Container.vue';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';

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
        VsSpotlightSection,
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
                    <template
                        #federated-search__spotlight-accommodation
                        v-if="args.showAccommodationSpotlight"
                    >
                        <VsSpotlightSection
                            :compact="true"
                            heading="Find your accommodation"
                            imageSrc="fixtures/spotlight-section/kinnoul-hill.jpg"
                            description="Explore our map to find the perfect place to stay."
                            ctaLink="#"
                            ctaText="Explore our map"
                        />
                    </template>
                    <template
                        #federated-search__spotlight-tours
                        v-if="args.showToursSpotlight"
                    >
                        <VsSpotlightSection
                            :compact="true"
                            heading="Explore our tours"
                            imageSrc="fixtures/spotlight-section/kinnoul-hill.jpg"
                            description="Discover tours inspiration to see more of Scotland."
                            ctaLink="#"
                            ctaText="Browse tours"
                        />
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
    filters: [
        {
            Key: 'accommodation',
            Label: 'Accommodation',
        },
        {
            Key: 'active-adventure',
            Label: 'Active & Adventure',
        },
        {
            Key: 'city-break',
            Label: 'City Break',
        },
        {
            Key: 'culture-history',
            Label: 'Culture & History',
        },
        {
            Key: 'events',
            Label: 'Events & Festivals',
        },
        {
            Key: 'family-friendly',
            Label: 'Family Friendly',
        },
        {
            Key: 'food-drink',
            Label: 'Food & Drink',
        },
        {
            Key: 'nature-outdoors',
            Label: 'Nature & Outdoors',
        },
        {
            Key: 'tours',
            Label: 'Tours',
        },
        {
            Key: 'travel-information',
            Label: 'Travel Information',
        },
    ],
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
        nextButtonLabel: 'Next',
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
    cardCategoryLabels: {
        about: 'About us',
        accommodation: 'Accommodation',
        article: 'Article',
        destination: 'Destination',
        event: 'Event',
        itinerary: 'Itinerary',
        tours: 'Tour',
        travel: 'Travel',
    },
    showAccommodationSpotlight: false,
    showToursSpotlight: false,
};

export const Default = Template.bind();

Default.args = base;

export const WithSpotlights = Template.bind();

WithSpotlights.args = {
    ...base,
    showAccommodationSpotlight: true,
    showToursSpotlight: true,
};

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
