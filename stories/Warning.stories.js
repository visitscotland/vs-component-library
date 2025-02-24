import VsWarning from '@/components/warning/Warning.vue';
import VsLink from '@/components/link/Link.vue';

export default {
    component: VsWarning,
    title: 'Warning',
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
        VsLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <div :style="args.size === 'small' ? 'width: 540px; height: 110px;' : 'width: 720px; height: 400px;'">
        <VsWarning v-bind="args">
            <template v-if="args.default" v-slot>${args.default}</template>

            <template
                v-if="args['extra-content']"
                v-slot:extra-content
            >
                ${args['extra-content']} <VsLink href="#">${args.ctaLink}</VsLink>.
            </template>

            <template
                v-if="args['button-text']"
                v-slot:button-text
            >
                ${args['button-text']}
            </template>

        </VsWarning>
    </div>
    `,
});

const base = {
    default: 'JavaScript needs to be enabled to watch this video. You can turn this on in your browser settings.',
};

export const Default = Template.bind({
});

Default.args = base;

export const ExtraContent = Template.bind({
});

ExtraContent.args = {
    ...base,
    default: 'JavaScript needs to be enabled to watch this video.',
    'extra-content': 'You can turn this on in your browser settings or subscribe by sending an email to',
    ctaLink: 'info@visitscotland.com',
};

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
    type: 'cookie',
    default: 'Cookies need to be enabled to watch this video',
    'extra-content': 'You can turn this on in your browser settings or subscribe by sending an email to',
    ctaLink: 'info@visitscotland.com',
    'button-text': 'Manage cookies settings',
};

export const Small = Template.bind({
});

Small.args = {
    ...base,
    default: 'Cookies need to be enabled to watch this video',
    'button-text': 'Manage cookies settings',
    size: 'small',
};

export const DifferentIcon = Template.bind({
});

DifferentIcon.args = {
    ...base,
    default: 'You have 10 minutes before this form times out',
    icon: 'fa-regular fa-clock',
    size: 'small',
};
