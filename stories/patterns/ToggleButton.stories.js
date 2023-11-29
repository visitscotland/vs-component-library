import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';

export default {
    component: VsToggleButton,
    title: 'Patterns/ToggleButton',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsToggleButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsToggleButton v-bind="args">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsToggleButton>
    `,
});

const base = {
    path: 'visitscotland',
    height: '',
};

export const Default = Template.bind({
});

Default.args = base;
