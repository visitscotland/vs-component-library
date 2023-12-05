import VsIcon from '@/components/icon/Icon.vue';

export default {
    component: VsIcon,
    title: 'Icon',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'light', 'dark', 'color-white', 'secondary-teal'],
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
        <VsIcon v-bind="args"></VsIcon>
    `,
});

const base = {
    name: 'user',
    variant: 'dark',
    size: 'md',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};
