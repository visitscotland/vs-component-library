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
            :name="icon.name"
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
    name: 'user',
};

export const Default = Template.bind({
});

Default.args = base;

export const Size = Template.bind({
});

Size.args = {
    icons: [
        {
            name: 'user',
            size: 'xxs',
        },
        {
            name: 'user',
            size: 'xs',
        },
        {
            name: 'user',
            size: 'sm',
        },
        {
            name: 'user',
            size: 'md',
        },
        {
            name: 'user',
            size: 'lg',
        },
        {
            name: 'user',
            size: 'xl',
        },
    ],
};

export const Colour = Template.bind({
});

Colour.args = {
    icons: [
        {
            name: 'user',
            variant: 'default',
        },
        {
            name: 'user',
            variant: 'primary',
        },
        {
            name: 'user',
            variant: 'secondary',
        },
        {
            name: 'user',
            variant: 'inverse',
        },
        {
            name: 'user',
            variant: 'tertiary',
        },
        {
            name: 'user',
            variant: 'success',
        },
        {
            name: 'user',
            variant: 'warning',
        },
        {
            name: 'user',
            variant: 'danger',
        },
        {
            name: 'user',
            variant: 'disabled',
        },
    ],
};

Colour.globals = {
    backgrounds: {
        value: 'grey',
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
    name: 'crow',
    duotone: true,
    style: '--fa-secondary-opacity: 1.0; --fa-primary-color: blue; --fa-secondary-color: gold;',
};

export const SmallSize = Template.bind({
});

SmallSize.args = {
    ...base,
    smallSize: 'xs',
};

SmallSize.globals = {
    viewport: {
        value: 'mobile2',
    },
};
