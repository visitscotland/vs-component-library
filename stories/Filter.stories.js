import VsFilter from '@/components/filter/VsFilter.vue';

export default {
    component: VsFilter,
    title: 'Filter',
    decorators: [() => ({
        template: '<div style="max-width: 360px;"><story /></div>',
    })],
};

const Template = (args) => ({
    components: {
        VsFilter,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsFilter v-bind="args" />
    `,
});

const base = {
    filterLabel: 'Filter',
};

export const Default = Template.bind();
Default.args = base;
