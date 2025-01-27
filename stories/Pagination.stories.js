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
    itemsPerPage: 8,
    nextButtonLabel: 'Next',
    numberOfItems: 250,
    previousButtonLabel: 'Previous',
};

export const Default = Template.bind();
Default.args = base;
