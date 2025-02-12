import VsButtonToggleGroup from '@/components/button-toggle-group/ButtonToggleGroup.vue';

export default {
    component: VsButtonToggleGroup,
    title: 'ButtonToggleGroup',
};

const Template = (args) => ({
    components: {
        VsButtonToggleGroup,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsButtonToggleGroup v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsButtonToggleGroup>
    `,
});

const base = {
    buttonsLabel: 'Select map type',
    initialSelected: 'places',
    options: [
        {
            text: 'Places',
            value: 'places',
            icon: 'map-marker',
        },
        {
            text: 'Regions',
            value: 'regions',
            icon: 'map',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;

export const Toggled = Template.bind({
});

Toggled.args = {
    ...base,
    initialSelected: 'regions',
};
