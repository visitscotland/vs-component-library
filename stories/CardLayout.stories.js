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

export const CardGrid = Template.bind({
});
CardGrid.args = {
    variant: 'grid',
};
