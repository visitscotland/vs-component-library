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
    size: 'md',
    animate: true,
    href: '',
    icon: '',
    iconOnly: false,
    iconWithText: false,
    iconPosition: 'left',
    tabindex: '',
};

export const Primary = Template.bind();
Primary.args = base;

export const Secondary = Template.bind();
Secondary.args = {
    ...base,
    variant: 'secondary',
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

export const Rounded = Template.bind();
Rounded.args = {
    ...base,
    rounded: true,
};

export const IconOnlySecondary = Template.bind();
IconOnlySecondary.args = {
    ...base,
    icon: 'search',
    variant: 'secondary',
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

export const IconOnlySmall = Template.bind();
IconOnlySmall.args = {
    ...base,
    icon: 'search',
    iconOnly: true,
    size: 'sm',
    default: '',
};

export const IconOnlyLarge = Template.bind();
IconOnlyLarge.args = {
    ...base,
    icon: 'search',
    iconOnly: true,
    size: 'lg',
    default: '',
};

export const IconWithText = Template.bind();
IconWithText.args = {
    ...base,
    variant: 'transparent',
    icon: 'share',
    iconWithText: true,
    default: 'Share',
};
