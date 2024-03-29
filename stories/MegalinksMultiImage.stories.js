import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkMultiImage from '@/components/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsModal from '@/components/modal/Modal.vue';

import VsLink from '@/components/link/Link.vue';
import VsVideo from '@/components/video/Video.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsMegalinks,
    title: 'Megalinks/MultiImage',
    tags: ['autodocs'],
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkMultiImage,
        VsImageWithCaption,
        VsLink,
        VsContainer,
        VsRow,
        VsCol,
        VsCaption,
        VsModal,
        VsVideo,
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
            variant="multi-image"
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

            <VsCol cols="10" class="offset-1">
                <VsContainer>
                    <VsRow>
                        <VsCol
                            v-for="link in args.links"
                            cols="12"
                            md="6"
                            :xl="link.featured ? 12 : 4"
                        >
                            <VsMegalinkMultiImage
                                v-bind="link"
                                :theme="args.theme"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    {{ link.heading }}
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>{{ link.content }}</p>
                                </template>
                            </VsMegalinkMultiImage>
                            
                            <VsModal
                                v-if="link.videoId"
                                :modalId="link.videoId"
                                :closeBtnText="link.modalCloseBtnText"
                                :isVideoModal="true"
                            >
                                <VsRow>
                                    <VsCol cols="12">
                                        <VsVideo
                                            :videoId="link.videoId"
                                            class="mb-8"
                                            no-js-message="You need Javascript enabled"
                                            no-cookies-message="You need cookies enabled"
                                            cookie-btn-text="Cookie button"
                                        />
                                    </VsCol>
                                </VsRow>
                            </VsModal>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsCol>
        </VsMegalinks>
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
    noJsMessage: 'JavaScript is needed to watch this video.',
    noCookiesMessage: 'Cookies are needed to watch this video.',
    cookieLinkText: 'Update my cookie settings',
    megalinksIntro,
    links: [
        {
            featured: true,
            imgSrc: '/fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Clycling in glentress forest',
            linkType: 'internal',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/grand-hotel.jpg',
            imgAlt: 'Luxury holidays and breaks in Scotland',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Luxury holidays and breaks in Scotland',
            content: 'Plan your luxury getaway in SCotland, from 5-star accommodation to Michelin-star dining.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/outlander-wedding.jpg',
            imgAlt: 'Tour Scotland with Outlander',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Tour Scotland with Outlander',
            content: 'See Outlander filming locations, book locations and attractions with real-life Jacobite connections.',
        },
        {
            featured: true,
            imgSrc: '/fixtures/megalinks/ashton-lane.jpg',
            imgAlt: 'City breaks',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'City breaks',
            content: 'Get inspiration on city accommodation, attractions and hidden gems loved by locals',
        },
    ],
    jsDisabled: false,
};

export const Default = Template.bind({
});

Default.args = base;

export const WithVideo = Template.bind({
});

WithVideo.args = {
    ...base,
    links: [
        {
            featured: true,
            imgSrc: '/fixtures/megalinks/glentress-forest.jpg',
            imgAlt: 'Cycling in glentress forest',
            linkType: 'video',
            linkUrl: '#',
            heading: '2023 UCI Cycling World Championships',
            content: 'We\'ve pulled together a handy guide on dates and times, travel info, accommodation and things to see near host venues.',
            videoId: 'v8IQAUvopnI',
            videoBtnText: 'Play Video',
            errorMessage: 'We\'re sorry, there\'s been an error',
            modalCloseBtnText: 'Close',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/wellness.jpg',
            imgAlt: 'Wellness breaks in Scotland',
            linkType: 'video',
            linkUrl: '#',
            heading: 'Wellness breaks in Scotland',
            content: 'Slow down and refresh your mind, body and spirit in Scotland.',
            videoId: 'g-Fhvj7vW-E',
            videoBtnText: 'Play Video',
            errorMessage: 'We\'re sorry, there\'s been an error',
            modalCloseBtnText: 'Close',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/outlander-wedding.jpg',
            imgAlt: 'Tour Scotland with Outlander',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'Tour Scotland with Outlander',
            content: 'See Outlander filming locations, book locations and attractions with real-life Jacobite connections.',
        },
        {
            featured: false,
            imgSrc: '/fixtures/megalinks/ashton-lane.jpg',
            imgAlt: 'City breaks',
            linkType: 'internal',
            linkUrl: '#',
            heading: 'City breaks',
            content: 'Get inspiration on city accommodation, attractions and hidden gems loved by locals',
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

export const DarkTheme = Template.bind({
});

DarkTheme.args = {
    ...base,
    theme: 'dark',
    ...WithVideo.args,
};

export const DarkThemeNoCookies = Template.bind({
});

DarkThemeNoCookies.args = {
    ...base,
    ...DarkTheme.args,
};

DarkThemeNoCookies.decorators = [
    () => {
        window.bypassCookieChecks = false;

        return {
            template: `
                <story/>
            `,
        };
    },
];

export const DarkThemeNoJavascript = Template.bind({
});

DarkThemeNoJavascript.args = {
    ...base,
    ...DarkTheme.args,
    jsDisabled: true,
};
