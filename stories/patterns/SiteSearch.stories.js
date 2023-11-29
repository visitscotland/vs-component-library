import VsSiteSearch from '@/components/site-search/SiteSearch.vue';
import VsSiteSearchForm from '@/components/site-search/components/SiteSearchForm.vue';

export default {
    component: VsSiteSearch,
    title: 'Patterns/SiteSearch',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsSiteSearch,
        VsSiteSearchForm,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSiteSearch
            v-bind="args"
        >
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsSiteSearch>
        <VsSiteSearchForm
            v-bind="args"
            v-if="args.isShowing"
        />
    `,
});

const base = {
    default: 'Search',
    isShowing: false,
    labelText: 'What are you looking for?',
    submitButtonText: 'Search',
    clearButtonText: 'Clear form',
    closeButtonText: 'Close search form',
};

export const Default = Template.bind({
});

Default.args = base;

export const OpenForm = Template.bind({
});

OpenForm.args = {
    ...base,
    isShowing: true,
};
