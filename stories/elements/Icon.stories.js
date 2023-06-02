import VsIcon from '@/components/elements/icon/Icon.vue';

export default {
    component: VsIcon,
    title: 'Elements/Icon',
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
        <VsIcon v-bind="$props"></VsIcon>
    `,
});

const base = {
    name: 'user',
    variant: '',
    customColour: '',
    orientation: '',
    size: 'md',
    smallSize: '',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};
