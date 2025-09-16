import VsFederatedSearch from '@/components/federated-search/FederatedSearch.vue';

export default {
    component: VsFederatedSearch,
    title: 'Components/Custom components/Federated search',
    argTypes: {
        breakPoint: {
            options: [
                '',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                'xxl',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsFederatedSearch,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <VsFederatedSearch/>
        </div>
    `,
});

const base = {
    jsDisabled: false,
};

export const Default = Template.bind();

Default.args = base;

export const NoJavascript = Template.bind();

NoJavascript.args = {
    ...base,
    jsDisabled: true,
};
