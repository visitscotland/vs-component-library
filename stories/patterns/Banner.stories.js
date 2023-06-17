import VsBanner from '@/components/patterns/banner/Banner.vue';
import VsLink from '@/components/elements/link/Link.vue';

export default {
    component: VsBanner,
    title: 'Patterns/Banner',
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            action: 'hideBanner',
        },
    },
};
const Template = (args) => ({
    components: {
        VsBanner,
        VsLink,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsBanner
            v-bind="args"
        >
            <template
                v-if="args.bannerText"
                v-slot:bannerText
            >
                <p>
                    {{ args.bannerText }}
                </p>
            </template>

            <template
                v-if="args.bannerCta"
                v-slot:bannerCta
            >
                <VsLink href="#">
                    {{ args.bannerCta }}
                </VsLink>
            </template>
        </VsBanner>
    `,
});

const base = {
    closeBtnText: 'Close',
    dontShowAgain: true,
    bannerText: 'Find the latest information on travel, and Good to Go (Covid-safe) businesses. ',
    bannerCta: 'View Covid-19 Travel Advice',
};

export const Default = Template.bind({
});

Default.args = base;
