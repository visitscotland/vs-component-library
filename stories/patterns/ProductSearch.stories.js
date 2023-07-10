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
        noJsMessage="You need Javascript to see this content"
        >
            <template slot="vsModuleHeading">
                Find places to stay & things to do
            </template>
            <template slot="vsModuleIntro">
                Search through a fantastic range of things to do, places to stay,
                local events and tours
            </template>
        </VsProductSearch>
    `,
});

const base = {

};

export const Default = Template.bind({
});

Default.args = base;
