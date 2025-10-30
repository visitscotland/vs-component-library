import VsFedFilter from '@/custom-components/federated-search/components/FedFilter.vue';

export default {
    component: VsFedFilter,
    title: 'Custom components/Fed Filter',
    argTypes: {
        variant: {
            options: [
                'primary',
                'secondary',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsFedFilter,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div>
            <VsFedFilter v-bind="args">
                <template
                    v-slot:fed-filter-header
                    v-if="args.heading"
                >
                    {{ args.heading }}
                </template>
            </VsFedFilter>
        </div>
    `,
});

export const Default = Template.bind();

Default.args = {
    variant: 'primary',
    scrollButtons: false,
    scrollLeftText: 'Scroll left',
    scrollRightText: 'Scroll right',
    filterCategories: [
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
};

export const PrimaryWrap = Template.bind();

PrimaryWrap.args = {
    ...Default.args,
    wrap: true,
};

export const Secondary = Template.bind();

Secondary.args = {
    heading: 'Refine your search',
    variant: 'secondary',
    scrollButtons: true,
    filterCategories: [
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
};
