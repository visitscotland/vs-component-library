import VsSocialCreditLink from '@/components/patterns/social-credit-link/SocialCreditLink.vue';

export default {
    component: VsSocialCreditLink,
    title: 'Patterns/SocialCreditLink',
    tags: ['autodocs'],
    decorators: [() => ({
        template: '<div style="background-color: #000;" class="p-4"><story /></div>',
    })],
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
