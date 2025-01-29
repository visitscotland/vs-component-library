import VsPageHeader from '../src/templates/PageHeader.vue';

export default {
    component: VsPageHeader,
    title: 'Templates/PageHeader',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => ({
    components: {
        VsPageHeader,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsPageHeader />
    `,
});

export const Default = Template.bind({
});
