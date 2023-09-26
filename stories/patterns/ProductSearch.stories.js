import VsProductSearch from '@/components/patterns/product-search/ProductSearch.vue';

import {
    within, waitFor, userEvent,
} from '@storybook/testing-library';

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

Default.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async() => {
        const search = canvas.getByText('Search');
        await userEvent.hover(search);
    }, {
        timeout: 15000,
        interval: 250,
    });
};

export const DefaultLocation = Template.bind({
});

DefaultLocation.args = {
    ...base,
    defaultLocation: '4161',
};

DefaultLocation.play = Default.play;

export const DefaultLanguage = Template.bind({
});

DefaultLanguage.args = {
    ...base,
    defaultLocale: 'fr',
};

DefaultLanguage.play = Default.play;

export const Accommodation = Template.bind({
});

Accommodation.args = {
    ...base,
    defaultProd: 'acco',
};

Accommodation.play = Default.play;

export const FoodAndDrink = Template.bind({
});

FoodAndDrink.args = {
    ...base,
    defaultProd: 'cate',
};

FoodAndDrink.play = Default.play;

export const EventsAndFestivals = Template.bind({
});

EventsAndFestivals.args = {
    ...base,
    defaultProd: 'even',
};

EventsAndFestivals.play = Default.play;

export const Tours = Template.bind({
});

Tours.args = {
    ...base,
    defaultProd: 'tour',
};

Tours.play = Default.play;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
