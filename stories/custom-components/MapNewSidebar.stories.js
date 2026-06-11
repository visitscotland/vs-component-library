import VsMapNewSidebar from '@/custom-components/maps/components/MapNewSidebar.vue';

export default {
    component: VsMapNewSidebar,
    title: 'Custom components/Map New Sidebar',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsMapNewSidebar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMapNewSidebar v-bind="args"></VsMapNewSidebar>
    `,
});

const base = {
    heading: 'Explore Scotland',
};

export const Default = Template.bind();
Default.args = base;

Default.globals = {
    backgrounds: {
        value: 'grey',
    },
};
