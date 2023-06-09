import VsWarning from '@/components/patterns/warning/Warning.vue';

export default {
    component: VsWarning,
    title: 'Patterns/Warning',
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: [
                'normal',
                'cookie',
            ],
            control: {
                type: 'radio',
            },
        },
        theme: {
            options: [
                'light',
                'dark',
            ],
            control: {
                type: 'radio',
            },
        },
        size: {
            options: [
                'xs',
                'small',
                'normal',
            ],
            control: {
                type: 'radio',
            },
        },
        align: {
            options: [
                'left',
                'right',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};

const Template = (args) => ({
    components: {
        VsWarning,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <VsWarning v-bind="args">
        <template v-if="${'default' in args}" v-slot>${args.default}</template>

        <template
            v-if="${'extra-content' in args}"
            v-slot:extra-content
        >
            ${args['extra-content']}
        </template>

        <template
            v-if="${'button-text' in args}"
            v-slot:button-text
        >
            ${args['button-text']}
        </template>

    </VsWarning>
    `,
});

const base = {
    default: 'JavaScript is needed to watch this video.',
    'extra-content': 'You can manage JavaScript in your browser settings',
    'button-text': '',
    transparent: false,
    align: 'left',
    theme: 'dark',
    size: 'normal',
    type: 'normal',
    icon: 'review',
};

export const Default = Template.bind({
});

Default.args = base;

export const WithButton = Template.bind({
});

WithButton.args = {
    ...base,
    'extra-content': 'Cookies must be enabled to see this content',
    'button-text': 'Manage cookies settings',
};

export const DifferentIcon = Template.bind({
});

DifferentIcon.args = {
    ...base,
    default: 'You have 10 minutes before this form times out',
    'extra-content': '',
    icon: 'clock',
};
