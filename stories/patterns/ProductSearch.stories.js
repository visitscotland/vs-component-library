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
            :configArr="[
                {'subSearchType': 'acco'},
                {'locplace': '4161'},
                {'lang':'en'},
                {'domain':'http://172.28.81.65:8089'},
            ]"
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
    vsModuleHeading: 'Find places to stay & things to do',
    vsModuleIntro: 'Search through a fantastic range of things to do, places to stay, local events and tours',
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
