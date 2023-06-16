import VsTooltip from '@/components/elements/tooltip/Tooltip.vue';

export default {
    component: VsTooltip,
    title: 'Elements/Tooltip',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: [
                'primary',
                'secondary',
                'transparent',
                'dark',
                'light',
            ],
            control: {
                type: 'radio',
            },
        },
        size: {
            options: [
                'sm',
                'md',
                'lg',
            ],
            control: {
                type: 'radio',
            },
        },
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
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsTooltip>
    `,
});

const base = {
    icon: 'bus',
    size: 'md',
    position: 'top',
    title: 'Travel by bus',
    href: '#',
    'icon-only': true,
    variant: 'transparent',
};

export const Default = Template.bind({
});

Default.args = base;
