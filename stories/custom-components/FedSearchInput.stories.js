import { provide } from 'vue';

import VsFedSearchInput from '@/custom-components/federated-search/components/FedSearchInput.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsFedSearchInput,
    title: 'Custom components/Federated search input',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsContainer,
        VsFedSearchInput,
    },
    setup() {
        provide(
            'cludoCategories',
            [
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
                    Key: 'events-festivals',
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
                    Key: 'other',
                    Label: 'Other',
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
        );

        return {
            args,
        };
    },
    template: `
        <VsContainer>
            <div :class="args.jsDisabled ? 'no-js' : ''">
                <VsFedSearchInput v-bind="args" />
            </div>
        </VsContainer>
    `,
});

const base = {
    searchUrl: '/site-search-results',
    labels: {
        search: 'Search',
        searchLabel: 'What are you looking for?',
    },
    isHomePage: true,
    jsDisabled: false,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
