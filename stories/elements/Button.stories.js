import VsButton from '@/components/elements/button/Button.vue';

export default {
    component: VsButton,
    title: 'Elements/Button',
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
        iconOrientation: {
            options: [
                'up',
                'down',
                'left',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
        iconPosition: {
            options: [
                'left',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
        onClick: {
            action: 'animateHandler',
        },
    },
};

const Template = (args) => ({
    components: {
        VsButton,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsButton v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsButton>
    `,
});

const base = {
    default: 'Nearby places to eat',
    variant: 'primary',
    onDark: false,
    size: 'md',
    animate: true,
    href: '',
    icon: '',
    iconOrientation: '',
    iconOnly: false,
    iconWithText: false,
    iconPosition: 'left',
    tabindex: '',
    uppercase: 'true',
};

export const Default = Template.bind({
});

Default.args = base;

export const Size = Template.bind({
});

Size.args = {
    ...base,
    size: 'sm',
};

export const Uppercase = Template.bind({
});

Uppercase.args = {
    ...base,
    uppercase: false,
};

export const Secondary = Template.bind({
});

Secondary.args = {
    ...base,
    variant: 'secondary',
};

export const Transparent = Template.bind({
});

Transparent.args = {
    ...base,
    variant: 'transparent',
};

export const Light = Template.bind({
});

Light.args = {
    ...base,
    variant: 'light',
};

export const Dark = Template.bind({
});

Dark.args = {
    ...base,
    variant: 'dark',
};

export const OnDark = Template.bind({
});

OnDark.args = {
    ...base,
    onDark: true,
};

OnDark.parameters = {
    backgrounds: {
        default: 'Dark',
    },
};

export const WithIcon = Template.bind({
});

WithIcon.args = {
    ...base,
    icon: 'user',
};
