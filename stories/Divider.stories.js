import VsDivider from '@/components/federated-search/components/Divider.vue';

export default {
    component: VsDivider,
    title: 'Components/Custom components/Divider',
    argTypes: {
        variant: {
            options: [
                'primary',
                'secondary',
                'inverse',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsDivider,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <div>
            <VsDivider v-bind="args" />
        </div>
    `,
});

export const Default = Template.bind();

Default.args = {
    variant: 'primary',
};
