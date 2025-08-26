import VsBanner from '@/components/banner/Banner.vue';
import VsLink from '@/components/link/Link.vue';

export default {
    component: VsBanner,
    title: 'Components/Feedback & status/Banner',
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
                v-slot:banner-text
            >
                <p>
                    {{ args.bannerText }}
                </p>
            </template>

            <template
                v-if="args.bannerCta"
                v-slot:banner-cta
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
    dontShowAgain: false,
    bannerText: 'Find the latest information on travel, and Good to Go (Covid-safe) businesses. ',
    bannerCta: 'View Covid-19 Travel Advice',
};

export const Default = Template.bind({
});

Default.args = base;
