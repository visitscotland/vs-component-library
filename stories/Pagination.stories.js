import VsPagination from '@/components/pagination/VsPagination.vue';

export default {
    component: VsPagination,
    title: 'Pagination',
};

const Template = (args) => ({
    components: {
        VsPagination,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsPagination v-bind="args" />
    `,
});

const base = {
    numberOfPages: 27,
    nextButtonLabel: 'Next',
    previousButtonLabel: 'Previous',
    pageLabel: 'Page',
    ofLabel: 'of',
};

export const Default = Template.bind();
Default.args = base;

export const Mobile = Template.bind();
Mobile.args = base;
Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
