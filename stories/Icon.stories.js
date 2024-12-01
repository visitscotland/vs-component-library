import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsIcon,
    title: 'Icon',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['default', 'primary', 'inverse', 'disabled', 'tertiary', 'danger', 'warning'],
            control: {
                type: 'radio',
            },
        },
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'radio',
            },
        },
        orientation: {
            options: ['up', 'down', 'left', 'right'],
            control: {
                type: 'radio',
            },
        },
        smallSize: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsIcon,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsIcon 
            v-if="args.icons"
            class="me-125"
            v-for="icon in args.icons"
            :icon="icon.classes"
            :variant="icon.variant"
            :size="icon.size"
            :customColour="icon.customColour"
        ></VsIcon>

        <VsIcon 
            v-else
            v-bind="args"
        ></VsIcon>
    `,
});

const base = {
    icon: 'user',
};

export const Default = Template.bind({
});

Default.args = base;

export const Size = Template.bind({
});

Size.args = {
    icons: [
        {
            classes: 'user',
            size: 'xxs',
        },
        {
            classes: 'user',
            size: 'xs',
        },
        {
            classes: 'user',
            size: 'sm',
        },
        {
            classes: 'user',
            size: 'md',
        },
        {
            classes: 'user',
            size: 'lg',
        },
        {
            classes: 'user',
            size: 'xl',
        },
    ],
};

export const Colour = Template.bind({
});

Colour.args = {
    icons: [
        {
            classes: 'user',
            variant: 'default',
        },
        {
            classes: 'user',
            variant: 'primary',
        },
        {
            classes: 'user',
            variant: 'secondary',
        },
        {
            classes: 'user',
            variant: 'inverse',
        },
        {
            classes: 'user',
            variant: 'tertiary',
        },
        {
            classes: 'user',
            variant: 'success',
        },
        {
            classes: 'user',
            variant: 'warning',
        },
        {
            classes: 'user',
            variant: 'danger',
        },
        {
            classes: 'user',
            variant: 'disabled',
        },
    ],
};

Colour.parameters = {
    backgrounds: {
        default: 'Grey',
    },
};

export const CustomColour = Template.bind({
});

CustomColour.args = {
    ...base,
    customColour: '#55ACEE',
};

export const Duotone = Template.bind({
});

Duotone.args = {
    classes: 'fa-crow',
    duotone: true,
    style: '--fa-secondary-opacity: 1.0; --fa-primary-color: blue; --fa-secondary-color: gold;',
};

export const SmallSize = Template.bind({
});

SmallSize.args = {
    ...base,
    smallSize: 'xs',
};

SmallSize.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};
