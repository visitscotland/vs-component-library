import VsFedSearchInput from '@/components/federated-search/components/FedSearchInput.vue';
import VsContainer from '@/components/grid/Container.vue';

export default {
    component: VsFedSearchInput,
    title: 'Components/Custom components/Federated search input',
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
                <VsFedSearchInput
                    :cludo-credentials="args.cludoCredentials"
                    :is-home-page="args.isHomePage"
                />
            </div>
        </VsContainer>
    `,
});

const base = {
    cludoCredentials: {
        apiKey: '',
        customerId: '',
        engineId: '',
    },
    isHomePage: false,
    jsDisabled: false,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
