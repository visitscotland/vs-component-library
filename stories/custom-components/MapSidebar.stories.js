import VsMapSidebar from '@/custom-components/maps/components/MapSidebar.vue';

export default {
    component: VsMapSidebar,
    title: 'Custom components/Map Sidebar',
    argTypes: {
    },
};

const Template = (args) => ({
    components: {
        VsMapSidebar,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMapSidebar v-bind="args" />
    `,
});

const base = {
};

export const Default = Template.bind();

Default.args = base;

Default.globals = {
    backgrounds: {
        value: 'grey',
    },
};
