import VsLoadingSpinner from '@/components/loading-spinner/LoadingSpinner.vue';

export default {
    component: VsLoadingSpinner,
    title: 'LoadingSpinner',
    argTypes: {
        variant: {
            options: ['light', 'dark'],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsLoadingSpinner,
    },
    setup() {
        return {
            args,
        };
    },
    template: `        
        <VsLoadingSpinner v-bind="args"/>
    `,
});

const base = {
    variant: 'light',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};

export const OnDark = Template.bind({
});

OnDark.args = {
    ...base,
    variant: 'dark',
};

OnDark.globals = {
    backgrounds: {
        value: 'dark',
    },
};
