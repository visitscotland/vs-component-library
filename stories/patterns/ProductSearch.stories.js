import VsProductSearch from '@/components/patterns/product-search/ProductSearch.vue';

export default {
    component: VsProductSearch,
    title: 'Patterns/ProductSearch',
    tags: ['autodocs'],
    argTypes: {
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
        <VsProductSearch
        :configArr="[
            {'subSearchType': 'acco'},
            {'locplace': '4161'},
            {'lang':'en'},
            {'domain':'http://172.28.81.65:8089'},
        ]"
        noJsMessage=${args.noJsMessage}
        >
            <template slot="vsModuleHeading">
                ${args.vsModuleHeading}
            </template>
            <template slot="vsModuleIntro">
               ${args.vsModuleIntro}
            </template>
        </VsProductSearch>
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
