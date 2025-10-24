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
        <VsMapSidebar v-bind="args">
            <template #vs-map-sidebar-search-results v-if="args.query">
                <div style="
                    background: rgb(227, 252, 252); 
                    padding: 15em 5em;
                    text-align: center"
                >
                    <span>SLOT FOR PLACES UI KIT</span>
                </div>
            </template>
        </VsMapSidebar>
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
