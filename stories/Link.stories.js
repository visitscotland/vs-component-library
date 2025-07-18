import VsLink from '@/components/link/Link.vue';

export default {
    component: VsLink,
    title: 'Link',
    argTypes: {
        type: {
            options: [
                'default',
                'external',
                'internal',
                'download',
            ],
            control: {
                type: 'radio',
            },
        },
        variant: {
            options: [
                'primary',
                'on-dark',
            ],
            control: {
                type: 'radio',
            },
        },
        iconSize: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
            ],
            control: {
                type: 'radio',
            },
        },
        onClick: {
            action: 'clickHandler',
        },
    },
};

const Template = (args) => ({
    components: {
        VsLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
      <VsLink v-bind="args">${args.default}</VsLink>
  `,
});

const base = {
    default: 'See all accommodation',
    href: '#',
    type: 'default',
    variant: 'primary',
    iconSize: 'xxs',
    disabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const External = Template.bind({
});

External.args = {
    ...base,
    type: 'external',
};

export const Internal = Template.bind({
});

Internal.args = {
    ...base,
    type: 'internal',
};

export const Download = Template.bind({
});

Download.args = {
    ...base,
    type: 'download',
};

export const OnDark = Template.bind({
});

export const Secondary = Template.bind({
});

Secondary.args = {
    ...base,
    variant: 'secondary',
};

OnDark.args = {
    ...base,
    variant: 'on-dark',
};

OnDark.globals = {
    backgrounds: {
        value: 'dark',
    },
};

export const Disabled = Template.bind({
});

Disabled.args = {
    ...base,
    disabled: true,
};
