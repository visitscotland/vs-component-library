import VsPageHeader from '../src/templates/PageHeader.vue';

export default {
    component: VsPageHeader,
    title: 'Patterns/PageHeader',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
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
        <VsPageHeader v-bind="args" />
    `,
});

export const SplitHeroHome = Template.bind({
});

export const Article = Template.bind({
});
Article.args = {
    variant: 'article',
};

export const General = Template.bind({
});
General.args = {
    variant: 'general',
};

export const Video = Template.bind({
});
Video.args = {
    variant: 'video',
};
