import VsSocialCreditLink from '@/components/social-credit-link/SocialCreditLink.vue';

export default {
    component: VsSocialCreditLink,
    title: 'SocialCreditLink',
};

const Template = (args) => ({
    components: {
        VsSocialCreditLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsSocialCreditLink v-bind="args"></VsSocialCreditLink>
    `,
});

const base = {
    credit: 'VisitScotland',
    socialPostUrl: 'http://www.visitscotland.com',
    source: 'instagram',
};

export const Default = Template.bind({
});

Default.args = base;

Default.parameters = {
    backgrounds: {
        default: 'Dark',
    },
};
