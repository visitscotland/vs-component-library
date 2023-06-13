import VsLoadingSpinner from '@/components/elements/loading-spinner/LoadingSpinner.vue';

export default {
    component: VsLoadingSpinner,
    title: 'Elements/LoadingSpinner',
    tags: ['autodocs'],
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

export const Default = Template.bind({
});
