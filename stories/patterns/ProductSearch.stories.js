import VsProductSearch from '@/components/product-search/ProductSearch.vue';

import enLocations from '@/assets/fixtures/product-search/enLocations.json';
import frLocations from '@/assets/fixtures/product-search/frLocations.json';

export default {
    component: VsProductSearch,
    title: 'Patterns/ProductSearch',
    tags: ['autodocs'],
    argTypes: {
        noJsMessage: {
            control: {
                type: 'text',
            },
        },
        vsModuleHeading: {
            control: {
                type: 'text',
            },
        },
        vsModuleIntro: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        mockData: [
            {
                url: 'https://www.visitscotland.com/data/locations',
                method: 'GET',
                status: 200,
                response: (request) => {
                    const { searchParams } = request;

                    if (searchParams.locale === 'fr') {
                        return frLocations;
                    }

                    return enLocations;
                },
            },
        ],
    },

};

const Template = (args) => ({
    components: {
        VsProductSearch,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <div :class="args.jsDisabled ? 'no-js' : ''">
        <VsProductSearch
            v-bind="args"
        >
            <template v-slot:vs-module-heading>
                ${args.vsModuleHeading}
            </template>
            <template v-slot:vs-module-intro>
               ${args.vsModuleIntro}
            </template>
        </VsProductSearch>
    </div>
    `,
});

const base = {
    defaultLocation: '',
    defaultProd: 'acti,attr,reta',
    defaultLocale: 'en',
    noJsMessage: 'You need Javascript to see this content',
    vsModuleHeading: 'Find experiences',
    vsModuleIntro: 'Search a wide range of accommodation, events, food & drink options and things to do from indoor and outdoor attractions to activities, tours and more.',
};

export const Default = Template.bind({
});

Default.args = base;
export const DefaultLocation = Template.bind({
});

DefaultLocation.args = {
    ...base,
    defaultLocation: 'kingdom-fife',
};

export const DefaultLanguage = Template.bind({
});

DefaultLanguage.args = {
    ...base,
    defaultLocale: 'fr',
};

export const Accommodation = Template.bind({
});

Accommodation.args = {
    ...base,
    defaultProd: 'acco',
};

export const FoodAndDrink = Template.bind({
});

FoodAndDrink.args = {
    ...base,
    defaultProd: 'cate',
};

export const EventsAndFestivals = Template.bind({
});

EventsAndFestivals.args = {
    ...base,
    defaultProd: 'even',
};

export const Tours = Template.bind({
});

Tours.args = {
    ...base,
    defaultProd: 'tour',
};

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
