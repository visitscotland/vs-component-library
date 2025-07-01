import VsDetail from '@/components/detail/Detail.vue';

export default {
    component: VsDetail,
    title: 'Typography/Detail',
    argTypes: {
        size: {
            options: [
                'small',
                'medium',
                'large',
            ],
            control: {
                type: 'radio',
            },
        },
        color: {
            options: [
                'primary',
                'secondary',
                'tertiary',
            ],
            control: {
                type: 'radio',
            },
        },
        noMargins: {
            options: [
                true,
                false,
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
    decorators: [() => ({
        template: '<div style="max-width: 750px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsDetail,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsDetail v-bind="args">
            ${args.default}
        </VsDetail>
    `,
});

export const Default = Template.bind({
});

Default.args = {
    size: 'medium',
    color: 'primary',
    noMargins: false,
    default: `
        Recommendations
    `,
};
