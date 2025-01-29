import VsBlogDetails from '@/components/blog-details/BlogDetails.vue';

export default {
    component: VsBlogDetails,
    title: 'BlogDetails',
    argTypes: {
        blogPublishDate: {
            control: {
                type: 'text',
            },
        },
    },
};
const Template = (args) => ({
    components: {
        VsBlogDetails,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsBlogDetails v-bind="args" />
    `,
});

const base = {
    blogReadTime: '2 minute read',
};

const dateAuthor = {
    blogPublishDate: 'Last updated: 24 January 2025',
    blogAuthor: 'Sarah Henderson',
};

export const Default = Template.bind({
});
Default.args = base;

export const WithDate = Template.bind({
});
WithDate.args = {
    ...base,
    blogPublishDate: 'Last updated: 24 January 2025',
};

export const WithAuthor = Template.bind({
});
WithAuthor.args = {
    ...base,
    ...dateAuthor,
};

export const StackMobile = Template.bind({
});
StackMobile.args = {
    ...base,
    ...dateAuthor,
};

StackMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
