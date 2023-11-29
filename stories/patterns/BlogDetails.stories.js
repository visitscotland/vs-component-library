import VsBlogDetails from '@/components/blog-details/BlogDetails.vue';

export default {
    component: VsBlogDetails,
    title: 'Patterns/BlogDetails',
    tags: ['autodocs'],
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
    blogAuthor: 'Maria Garcia Tena',
    blogPublishDate: 'May 10, 2023',
    blogReadTime: 'Reading time: 2 minutes',
};

export const Default = Template.bind({
});

Default.args = base;
