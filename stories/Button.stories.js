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
        <VsButton 
            v-bind="args" 
            :disabled="args.disabled ? true : false"
        >
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
};

export const Primary = Template.bind();
Primary.args = base;

export const PrimaryHover = Template.bind();
PrimaryHover.args = base;

PrimaryHover.parameters = {
    pseudo: {
        hover: true,
    },
};

export const PrimaryActive = Template.bind();
PrimaryActive.args = base;

PrimaryActive.parameters = {
    pseudo: {
        active: true,
    },
};

export const PrimaryFocus = Template.bind();
PrimaryFocus.args = base;

PrimaryFocus.parameters = {
    pseudo: {
        focus: true,
    },
};

export const Secondary = Template.bind();
Secondary.args = {
    ...base,
    variant: 'secondary',
};

export const SecondaryHover = Template.bind();
SecondaryHover.args = base;

SecondaryHover.parameters = {
    pseudo: {
        hover: true,
    },
};

export const SecondaryActive = Template.bind();
SecondaryActive.args = base;

SecondaryActive.parameters = {
    pseudo: {
        active: true,
    },
};

export const SecondaryFocus = Template.bind();
SecondaryFocus.args = base;

SecondaryFocus.parameters = {
    pseudo: {
        focus: true,
    },
};

export const Disabled = Template.bind();
Disabled.args = {
    ...base,
    disabled: 'disabled',
};

export const Small = Template.bind();
Small.args = {
    ...base,
    size: 'sm',
};

export const Large = Template.bind();
Large.args = {
    ...base,
    size: 'lg',
};

export const WithIcon = Template.bind();
WithIcon.args = {
    ...base,
    icon: 'user',
};

export const WithIconOnRight = Template.bind();
WithIconOnRight.args = {
    ...base,
    icon: 'user',
    iconPosition: 'right',
};

export const IconOnly = Template.bind();
IconOnly.args = {
    ...base,
    icon: 'search',
    iconOnly: true,
    default: '',
};

export const IconOnlyTransparent = Template.bind();
IconOnlyTransparent.args = {
    ...base,
    icon: 'close',
    iconOnly: true,
    default: '',
    variant: 'transparent',
};

export const IconPrimaryWithText = Template.bind();
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
