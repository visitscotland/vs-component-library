import VsButton from '@/components/button/Button.vue';

export default {
    component: VsButton,
    title: 'Components/Actions & controls/Button',
    argTypes: {
        variant: {
            options: [
                'primary',
                'secondary',
                'subtle',
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
    default: 'Submit',
    variant: 'primary',
    size: 'md',
    animate: true,
    href: '',
    icon: '',
    iconOnly: false,
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

export const Subtle = Template.bind();
Subtle.args = {
    ...base,
    variant: 'subtle',
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
    default: 'Search',
    icon: 'vs-icon-control-search',
};

export const WithIconOnRight = Template.bind();
WithIconOnRight.args = {
    ...base,
    default: 'Search',
    icon: 'vs-icon-control-search',
    iconPosition: 'right',
};

export const IconOnly = Template.bind();
IconOnly.args = {
    ...base,
    icon: 'vs-icon-control-search',
    iconOnly: true,
    default: 'Search',
};

export const IconOnlySecondary = Template.bind();
IconOnlySecondary.args = {
    ...base,
    icon: 'vs-icon-control-dismiss',
    variant: 'secondary',
    iconOnly: true,
    default: 'close',
};

export const IconOnlySubtle = Template.bind();
IconOnlySubtle.args = {
    ...base,
    icon: 'vs-icon-control-dismiss',
    iconOnly: true,
    default: 'close',
    variant: 'subtle',
};

export const IconOnlySmall = Template.bind();
IconOnlySmall.args = {
    ...base,
    icon: 'vs-icon-control-dismiss',
    iconOnly: true,
    size: 'sm',
    default: 'close',
};

export const IconOnlyLarge = Template.bind();
IconOnlyLarge.args = {
    ...base,
    icon: 'vs-icon-control-dismiss',
    iconOnly: true,
    size: 'lg',
    default: 'close',
};

export const SquareCorners = Template.bind();
SquareCorners.args = {
    ...base,
    rounded: false,
    default: 'Play',
};
