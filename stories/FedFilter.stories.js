import VsFedFilter from '@/components/federated-search/components/FedFilter.vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@components/heading/Heading.vue';

export default {
    component: VsFedFilter,
    title: 'Components/Custom components/Fed Filter',
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
        VsButton,
        VsHeading,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div>
            <VsFedFilter v-bind="args">
                <template v-slot:fed-filter-header> {{ args.heading }} </template>

                <template
                    #no-js
                    v-if="args.jsDisabled"
                >
                    {{ args.noJsMessage }}
                </template>
            </VsFedFilter>
        </div>
    `,
});

export const Default = Template.bind();

Default.args = {
    variant: 'primary',
    scrollButtons: false,
    filterCategories: [
        {
            id: 'nature_outdoor',
            label: 'Nature & Outdoor',
            icon: 'fa-kit fa-vs-landscape',
        },
        {
            id: 'history_culture',
            label: 'History & Culture',
            icon: 'fa-regular fa-chess-rook',
        },
        {
            id: 'family',
            label: 'Family Friendly',
            icon: 'fa-regular fa-family',
        },
        {
            id: 'active_adventure',
            label: 'Active & Adventure',
            icon: 'fa-regular fa-person-hiking',
        },
        {
            id: 'city',
            label: 'City Breaks',
            icon: 'fa-regular fa-city',
        },
        {
            id: 'accom',
            label: 'Accommodation',
            icon: 'fa-regular fa-bed',
        },
        {
            id: 'food_drink',
            label: 'Food and Drink',
            icon: 'fa-regular fa-utensils',
        },
        {
            id: 'events',
            label: 'Events and festivals',
            icon: 'fa-regular fa-calendar-range',
        },
        {
            id: 'tours',
            label: 'Tours',
            icon: 'fa-regular fa-route',
        },
        {
            id: 'travel_info',
            label: 'Travel information',
            icon: 'fa-kit fa-vs-icentre-information',
        },
    ],
};

export const Secondary = Template.bind();

Secondary.args = {
    heading: 'Refine your search',
    variant: 'secondary',
    scrollButtons: true,
    filterCategories: [
        {
            id: 'books',
            label: 'Books',
            icon: 'fa-regular fa-star',
        },
        {
            id: 'clubs',
            label: 'Clubs',
        },
        {
            id: 'comedy',
            label: 'Comedy',
        },
        {
            id: 'dance',
            label: 'Dance',
        },
        {
            id: 'days_out',
            label: 'Days out',
        },
        {
            id: 'festivals',
            label: 'Festivals',
        },
        {
            id: 'films',
            label: 'Films',
        },
        {
            id: 'kids',
            label: 'Kids',
        },
        {
            id: 'lgbt',
            label: 'LGBTQIA+',
        },
        {
            id: 'music',
            label: 'Music',
        },
        {
            id: 'sport',
            label: 'Sports',
        },
        {
            id: 'talk_lecture',
            label: 'Talks & Lectures',
        },
        {
            id: 'theatre',
            label: 'Theatre',
        },
        {
            id: 'visual_art',
            label: 'Visual Arts',
        },
    ],
};

export const NoJavascript = Template.bind();
NoJavascript.args = {
    jsDisabled: true,
    noJsMessage: 'You need Javascript enabled to use this filter',
};
