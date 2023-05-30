import VsButton from '@/components/elements/button/Button.vue';

export default {
    component: VsButton,
    title: 'Elements/Button',
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
        <VsButton v-bind="$props">
            <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </VsButton>
    `,
});

const base = {
    default: 'Click Me',
    href: '#',
    onDark: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const Size = Template.bind({
});

Size.args = {
    ...base,
    size: 'sm',
};

export const Uppercase = Template.bind({
});

Uppercase.args = {
    ...base,
    uppercase: false,
};

export const Secondary = Template.bind({
});

Secondary.args = {
    ...base,
    variant: 'secondary',
};

export const Transparent = Template.bind({
});

Transparent.args = {
    ...base,
    variant: 'transparent',
};

export const Light = Template.bind({
});

Light.args = {
    ...base,
    variant: 'light',
};

export const Dark = Template.bind({
});

Dark.args = {
    ...base,
    variant: 'dark',
};

export const OnDark = Template.bind({
});

OnDark.args = {
    ...base,
    onDark: true,
};

export const WithIcon = Template.bind({
});

WithIcon.args = {
    ...base,
    icon: 'user',
};
