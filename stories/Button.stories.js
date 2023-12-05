import VsButton from '@/components/button/Button.vue';

export default {
    component: VsButton,
    title: 'Button',
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
        <VsButton v-bind="args">
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
    iconOrientation: 'up',
    iconOnly: false,
    iconWithText: false,
    iconPosition: 'left',
    tabindex: '',
    uppercase: true,
};

export const Primary = Template.bind({
});

Primary.args = base;

export const HoverState = Template.bind({
});

HoverState.args = base;

HoverState.parameters = {
    pseudo: {
        hover: true,
    },
};

export const FocusState = Template.bind({
});

FocusState.args = base;

FocusState.parameters = {
    pseudo: {
        focus: true,
    },
};

export const ActiveState = Template.bind({
});

ActiveState.args = base;

ActiveState.parameters = {
    pseudo: {
        active: true,
    },
};

export const Secondary = Template.bind({
});

Secondary.args = {
    ...base,
    variant: 'secondary',
};

export const Small = Template.bind({
});

Small.args = {
    ...base,
    size: 'sm',
};

export const Large = Template.bind({
});

Large.args = {
    ...base,
    size: 'lg',
};

export const Transparent = Template.bind({
});

Transparent.args = {
    ...base,
    variant: 'transparent',
};

export const Dark = Template.bind({
});

Dark.args = {
    ...base,
    variant: 'dark',
};

Dark.parameters = {
    backgrounds: {
        default: 'Yellow',
    },
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

export const WithIconOnRight = Template.bind({
});

WithIconOnRight.args = {
    ...base,
    icon: 'user',
    iconPosition: 'right',
};

export const IconOnly = Template.bind({
});

IconOnly.args = {
    ...base,
    icon: 'search',
    iconOnly: true,
    default: '',
};

export const IconPrimaryWithText = Template.bind({
});

IconPrimaryWithText.args = {
    ...base,
    variant: 'transparent',
    icon: 'close-circle',
    iconWithText: true,
    default: 'Close',
    onDark: true,
};

IconPrimaryWithText.parameters = {
    backgrounds: {
        default: 'Dark',
    },
};
