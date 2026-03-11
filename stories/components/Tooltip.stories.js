import VsTooltip from '@/components/tooltip/Tooltip.vue';

export default {
    component: VsTooltip,
    title: 'Components/Overlays & popups/Tooltip',
    argTypes: {
        position: {
            options: [
                'top',
                'left',
                'bottom',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
        subtle: {
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsTooltip,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsTooltip v-bind="args">
            ${args.title}
        </VsTooltip>
    `,
});

const base = {
    icon: 'fa-regular fa-bus',
    size: 'sm',
    position: 'top',
    title: 'Travel by bus',
    'icon-only': true,
    variant: 'subtle',
};

export const Default = Template.bind({
});

Default.args = base;

export const Subtle = Template.bind({
});

Subtle.args = {
    ...base,
    subtle: true,
};
