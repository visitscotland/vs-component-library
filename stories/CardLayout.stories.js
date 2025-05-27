import VsCardLayout from '../src/templates/CardLayout.vue';

export default {
    component: VsCardLayout,
    title: 'Templates/CardLayout',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

const Template = (args) => ({
    components: {
        VsCardLayout,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsCardLayout v-bind="args" />
    `,
});

export const SplitCardGrid = Template.bind({
});
SplitCardGrid.args = {
    variant: 'grid',
};
