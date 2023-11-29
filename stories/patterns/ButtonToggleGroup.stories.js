import VsButtonToggleGroup from '@/components/button-toggle-group/ButtonToggleGroup.vue';

export default {
    component: VsButtonToggleGroup,
    title: 'Patterns/ButtonToggleGroup',
    tags: ['autodocs'],
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
            text: 'Regions',
            value: 'regions',
            icon: 'regions',
        },
        {
            text: 'Places',
            value: 'places',
            icon: 'map-marker',
        },
    ],
};

export const Default = Template.bind({
});

Default.args = base;
