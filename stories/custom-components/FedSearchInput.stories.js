import VsFedSearchInput from '@/custom-components/federated-search/components/FedSearchInput.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsFedSearchInput,
    title: 'Custom components/Federated search input',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsContainer,
        VsFedSearchInput,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsContainer>
            <div :class="args.jsDisabled ? 'no-js' : ''">
                <VsFedSearchInput v-bind="args" />
            </div>
        </VsContainer>
    `,
});

const base = {
    searchUrl: '/site-search-results',
    labels: {
        search: 'Search',
        searchLabel: 'What are you looking for?',
    },
    isHomePage: true,
    jsDisabled: false,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
