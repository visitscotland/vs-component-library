import VsLoadingSpinner from '@/components/elements/loading-spinner/LoadingSpinner.vue';

export default {
    component: VsLoadingSpinner,
    title: 'Elements/LoadingSpinner',
    tags: ['autodocs'],
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
