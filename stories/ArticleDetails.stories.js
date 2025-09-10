import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';

export default {
    component: VsArticleDetails,
    title: 'Components/Layout & content structure/ArticleDetails',
    argTypes: {
        articlePublishDate: {
            control: {
                type: 'text',
            },
        },
    },
};
const Template = (args) => ({
    components: {
        VsArticleDetails,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsArticleDetails v-bind="args" />
    `,
});

const base = {
    articleReadTime: '2 minute read',
};

const dateAuthor = {
    articlePublishDate: 'Last updated: 24 January 2025',
    articleAuthor: 'Sarah Henderson',
};

export const Default = Template.bind({
});
Default.args = base;

export const WithDate = Template.bind({
});
WithDate.args = {
    ...base,
    articlePublishDate: 'Last updated: 24 January 2025',
};

export const WithAuthor = Template.bind({
});
WithAuthor.args = {
    ...base,
    ...dateAuthor,
};

export const NoReadTime = Template.bind({
});
NoReadTime.args = {
    articlePublishDate: 'Last updated: 24 January 2025',
};

export const StackMobile = Template.bind({
});
StackMobile.args = {
    ...base,
    ...dateAuthor,
};

StackMobile.globals = {
    viewport: {
        value: 'mobile2',
    },
};
