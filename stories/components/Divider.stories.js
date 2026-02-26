import VsDivider from '@/components/divider/Divider.vue';

export default {
    component: VsDivider,
    title: 'Components/Layout & content structure/Divider',
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
