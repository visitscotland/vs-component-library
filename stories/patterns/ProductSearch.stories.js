import VsProductSearch from '@/components/patterns/product-search/ProductSearch.vue';

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
            noJsMessage='${args.noJsMessage}'
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
    noJsMessage: 'You need Javascript to see this content',
    vsModuleHeading: 'Find experiences',
    vsModuleIntro: 'Search a wide range of accommodation, events, food & drink options and things to do from indoor and outdoor attractions to activities, tours and more.',
};

export const Default = Template.bind({
});

Default.args = base;

export const NoJs = Template.bind({
});

NoJs.args = {
    ...base,
    jsDisabled: true,
};
