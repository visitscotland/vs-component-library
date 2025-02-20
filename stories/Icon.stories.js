import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsIcon,
    title: 'Icon',
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
    icon: 'vs-icon-close',
};

export const Default = Template.bind({
});

Default.args = base;

export const Size = Template.bind({
});

Size.args = {
    icons: [
        {
            classes: 'fa-regular fa-user',
            size: 'xxs',
        },
        {
            classes: 'fa-regular fa-user',
            size: 'xs',
        },
        {
            classes: 'fa-regular fa-user',
            size: 'sm',
        },
        {
            classes: 'fa-regular fa-user',
            size: 'md',
        },
        {
            classes: 'fa-regular fa-user',
            size: 'lg',
        },
        {
            classes: 'fa-regular fa-user',
            size: 'xl',
        },
    ],
};

export const Colour = Template.bind({
});

Colour.args = {
    icons: [
        {
            classes: 'fa-regular fa-user',
            variant: 'default',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'primary',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'secondary',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'inverse',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'tertiary',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'success',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'warning',
        },
        {
            classes: 'fa-regular fa-user',
            variant: 'danger',
        },
        {
            classes: 'fa-regular fa-user',
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
