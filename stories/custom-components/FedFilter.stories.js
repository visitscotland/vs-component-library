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
            id: 'nature_outdoor',
            Key: 'Nature & Outdoor',
            icon: 'fa-kit fa-vs-landscape',
        },
        {
            id: 'history_culture',
            Key: 'History & Culture',
            icon: 'fa-regular fa-chess-rook',
        },
        {
            id: 'family',
            Key: 'Family Friendly',
            icon: 'fa-regular fa-family',
        },
        {
            id: 'active_adventure',
            Key: 'Active & Adventure',
            icon: 'fa-regular fa-person-hiking',
        },
        {
            id: 'city',
            Key: 'City Breaks',
            icon: 'fa-regular fa-city',
        },
        {
            id: 'accom',
            Key: 'Accommodation',
            icon: 'fa-regular fa-bed',
        },
        {
            id: 'food_drink',
            Key: 'Food and Drink',
            icon: 'fa-regular fa-utensils',
        },
        {
            id: 'events',
            Key: 'Events and festivals',
            icon: 'fa-regular fa-calendar-range',
        },
        {
            id: 'tours',
            Key: 'Tours',
            icon: 'fa-regular fa-route',
        },
        {
            id: 'travel_info',
            Key: 'Travel information',
            icon: 'fa-kit fa-vs-icentre-information',
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
            id: 'books',
            Key: 'Books',
            icon: 'fa-regular fa-star',
        },
        {
            id: 'clubs',
            Key: 'Clubs',
        },
        {
            id: 'comedy',
            Key: 'Comedy',
        },
        {
            id: 'dance',
            Key: 'Dance',
        },
        {
            id: 'days_out',
            Key: 'Days out',
        },
        {
            id: 'festivals',
            Key: 'Festivals',
        },
        {
            id: 'films',
            Key: 'Films',
        },
        {
            id: 'kids',
            Key: 'Kids',
        },
        {
            id: 'lgbt',
            Key: 'LGBTQIA+',
        },
        {
            id: 'music',
            Key: 'Music',
        },
        {
            id: 'sport',
            Key: 'Sports',
        },
        {
            id: 'talk_lecture',
            Key: 'Talks & Lectures',
        },
        {
            id: 'theatre',
            Key: 'Theatre',
        },
        {
            id: 'visual_art',
            Key: 'Visual Arts',
        },
    ],
};
