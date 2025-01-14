import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkLinkList from '@/components/megalinks/components/megalink-link-list/MegalinkLinkList.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsLink from '@/components/link/Link.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import VsBadge from '@/components/badge/VsBadge.vue';
import {
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsMegalinks,
    title: 'MegalinksLinkList',
    parameters: {
        viewport: {
            defaultViewport: 'default',
        },
    },
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkLinkList,
        VsImageWithCaption,
        VsLink,
        VsCol,
        VsCaption,
        VsModal,
        VsVideo,
        VsRow,
        VsBadge,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
    <div
        :class="args.jsDisabled ? 'no-js' : ''"
    >
        <VsMegalinks
            :title="args.mainTitle"
            class="vs-megalinks--single-image"
            :buttonLink="args.buttonLink"
            variant="link-list"
            :theme="args.theme"
            :noJsMessage="args.noJsMessage"
            :noCookiesMessage="args.noCookiesMessage"
            :cookieLinkText="args.cookieLinkText"
        >
            <template v-slot:vs-megalinks-intro>
                <p>{{ args.megalinksIntro }}</p>
            </template>

            <template v-slot:vs-megalinks-button>
                {{ args.buttonText }}
            </template>

            <VsCol
                v-for="link in args.links"
                cols="12"
                md="6"
            >
                <vs-megalink-link-list
                    v-bind="link"
                    :theme="args.theme"
                    :businessSupport="args.businessSupportHub"
                    :isHomePage="args.isHomePage"
                >
                    <template v-slot:vs-link-list-heading>
                        {{ link.heading }}
                    </template>
                    <template v-slot:vs-link-list-content>
                        <p>{{ link.content }}</p>
                    </template>
                    <template 
                        v-if="link.badges" 
                        v-slot:vs-link-list-badges
                    >
                        <VsBadge
                            v-for="badge in link.badges"
                            :key="badge"
                        >
                            {{ badge }}
                        </VsBadge>
                    </template>

                </vs-megalink-link-list>
            </VsCol>
        </VsMegalinks>

        <VsModal
            modalId="tfk7J6XZju4"
            closeBtnText="Close"
            :isVideoModal="true"
        >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        videoId="tfk7J6XZju4"
                        class="mb-200"
                        no-js-message="You need Javascript enabled"
                        no-cookies-message="You need cookies enabled"
                        cookie-btn-text="Cookie button"
                    />
                </VsCol>
            </VsRow>
        </VsModal>
    </div>
    `,
});

const megalinksIntro = `From the rugged coastline to sparkling city lights,
    the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
    there are plenty of places to start your Scottish adventure. `;

const base = {
    mainTitle: 'More inspiration for your next adventure',
    buttonLink: '#',
    buttonText: 'Get more inspiration',
    megalinksIntro,
    links: [
        {
            imgSrc: './fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
        },
        {
            imgSrc: './fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
        },
        {
            imgSrc: './fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            imgSrc: './fixtures/megalinks/ashton-lane.jpg',
            imgAlt: 'City breaks',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'City breaks',
            content: 'Get inspiration on city accommodation, attractions and hidden gems loved by locals',
        },
    ],
    noJsMessage: 'JavaScript is needed to watch this video.',
    noCookiesMessage: 'Cookies are needed to watch this video.',
    cookieLinkText: 'Update my cookie settings',
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const WithVideo = Template.bind({
});

WithVideo.args = base;

WithVideo.args = {
    ...base,
    links: [
        {
            imgSrc: './fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
        },
        {
            imgSrc: './fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            imgSrc: './fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            imgSrc: './fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'video',
            linkUrl: '#',
            videoId: 'tfk7J6XZju4',
            videoBtnText: 'Play Video',
            errorMessage: 'We\'re sorry, there\'s been an error',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
        },
    ],
};

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
    ...WithVideo.args,
};

NoCookies.decorators = [
    () => {
        window.bypassCookieChecks = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const NoJavascript = Template.bind({
});

NoJavascript.args = {
    ...base,
    ...WithVideo.args,
    jsDisabled: true,
};

export const GreyTheme = Template.bind({
});

GreyTheme.args = {
    ...base,
    theme: 'grey',
    ...WithVideo.args,
};

export const GreyThemeNoCookies = Template.bind({
});

GreyThemeNoCookies.args = {
    ...base,
    ...GreyTheme.args,
};

GreyThemeNoCookies.decorators = [
    () => {
        window.bypassCookieChecks = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const GreyThemeNoJavascript = Template.bind({
});

GreyThemeNoJavascript.args = {
    ...base,
    ...GreyTheme.args,
    jsDisabled: true,
};

/**
 * Base for BSH styles -- added information like the badges and BSH/Homepage flags
 */

const businessSupportBase = {
    ...base,
    businessSupportHub: true,
    isHomePage: false,
    links: [
        {
            imgSrc: './fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
            badges: ['How to', '10 minute read'],
        },
        {
            imgSrc: './fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in Scotland, from 5-star accommodation to Michelin-star dining.',
            badges: ['Guide', '6 minute read'],
        },
        {
            imgSrc: './fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'external',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in Scotland, from 5-star accommodation to Michelin-star dining.',
            badges: ['Article', 'External Website'],
        },
        {
            imgSrc: './fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'video',
            linkUrl: '#',
            videoId: 'tfk7J6XZju4',
            videoBtnText: 'Play Video',
            errorMessage: 'We\'re sorry, there\'s been an error',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
            badges: ['How To'],
        },
    ],
};

export const BusinessSupportHubHomepage = Template.bind({
});

BusinessSupportHubHomepage.args = {
    ...businessSupportBase,
    isHomePage: true,
};

export const BusinessSupportHubHomepageMobile = Template.bind({
});

BusinessSupportHubHomepageMobile.args = {
    ...businessSupportBase,
    isHomePage: true,
};

BusinessSupportHubHomepageMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile2',
    },
};

export const BusinessSupportHubInternalPage = Template.bind({
});

BusinessSupportHubInternalPage.args = {
    ...businessSupportBase,
};
