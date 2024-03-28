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
    size: 'lg',
};

export const Default = Template.bind({
});

Default.args = {
    ...base,
};

export const Duotone = Template.bind({
});

Duotone.args = {
    ...base,
    name: 'crow',
    duotone: true,
    style: '--fa-secondary-opacity: 1.0; --fa-primary-color: dodgerblue; --fa-secondary-color: gold;',
};
