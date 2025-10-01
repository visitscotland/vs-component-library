import VsAlert from '@/components/alert/Alert.vue';

export default {
    component: VsAlert,
    title: 'Components/Feedback & status/Alert',
    argTypes: {

    },
};

const Template = (args) => ({
    components: {
        VsAlert,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsAlert v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsAlert>
    `,
});

const base = {
    default: 'This guide is only for visitors living outside the UK.',
};

export const Default = Template.bind({
});

Default.args = base;
