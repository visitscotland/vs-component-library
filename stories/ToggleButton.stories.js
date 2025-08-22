import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';

export default {
    component: VsToggleButton,
    title: 'Components/Actions & controls/ToggleButton',
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
            <template v-if="${'default' in args}" v-slot>
                <span class="visually-hidden">
                    ${args.default}
                </span>
            </template>
        </VsToggleButton>
    `,
});

const base = {
    height: '',
    default: 'Toggle Button',
};

export const Default = Template.bind({
});

Default.args = base;
