import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import {
    VsRow,
    VsCol,
} from '@/components/grid';

export default {
    component: VsMegalinks,
    title: 'MegalinksSingleImage',
};

const Template = (args) => ({
    components: {
        VsMegalinks,
        VsMegalinkSingleImage,
        VsImageWithCaption,
        VsLinkListItem,
        VsCol,
        VsCaption,
        VsModal,
        VsVideo,
        VsRow,
    },
    setup() {
        return {
            args,
        };
    },
    template: `
        <VsMegalinks
            :title="args.mainTitle"
            class="vs-megalinks--single-image"
            :buttonLink="args.buttonLink"
            variant="single-image"
            :theme="args.theme"
            :noJsMessage="args.noJsMessage"
            :noCookiesMessage="args.noCookiesMessage"
            :noCookiesLink="args.noCookiesLink"
            :heading-level="args.headingLevel"
            :heading-style="args.headingStyle"
        >
            <template v-slot:vs-megalinks-intro>
                <p>{{ args.megalinksIntro }}</p>
            </template>

            <VsCol cols="12">
                <vs-megalink-single-image
                    :title="args.subTitle"
                    :buttonLink="args.buttonLink"
                    :alternate="args.alternate"
                >
                    <template v-slot:vs-single-image>
                        <VsImageWithCaption
                            mobile-overlap
                            :altText="args.altText"
                            :imageSrc="args.imageSrc"
                            :errorMessage="args.videoErrorMessage"
                            :toggleButtonText="args.imageToggleText"
                        >
                            <template
                                v-slot:img-caption
                            >
                                <VsCaption
                                    :text-align="args.alternate ? 'left' : 'right'"
                                >
                                    <template v-slot:caption>
                                        {{ args.imageCaption }}
                                    </template>

                                    <template v-slot:credit>
                                        {{ args.imageCredit }}
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                    <template v-slot:vs-single-image-content>
                        <p>
                            {{ args.cardContent }}
                        </p>
                    </template>
                    <template v-slot:vs-single-image-links>
                        <VsLinkListItem
                            v-for="link in args.links"
                            v-bind="link"
                        >
                            {{ link.text }}
                        </VsLinkListItem>
                    </template>
                    <template v-slot:vs-single-image-button-text>
                        {{ args.buttonText }}
                    </template>
                </vs-megalink-single-image>
            </VsCol>
        </VsMegalinks>

        <VsModal
            modalId="g-Fhvj7vW-E"
            closeBtnText="Close"
            :isVideoModal="true"
        >
            <div
                :class="args.jsDisabled ? 'no-js' : ''"
            >
            <VsRow>
                <VsCol cols="12">
                    <VsVideo
                        videoId="g-Fhvj7vW-E"
                        class="mb-200"
                        cookie-btn-text="Manage cookies"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                    />
                </VsCol>
            </VsRow>
            </div>
        </VsModal>
   
    `,
});

const cardContent = `From the rugged coastline to sparkling city lights,
    the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
    there are plenty of places to start your Scottish adventure. `;

const megalinksIntro = `From the rugged coastline to sparkling city lights,
    the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
    there are plenty of places to start your Scottish adventure. `;

const base = {
    mainTitle: 'Uncover Scotland\'s regions',
    buttonLink: '#',
    buttonText: 'View our map of Scotland',
    subTitle: 'Where will you explore?',
    imageSrc: './fixtures/megalinks/illustrated-map-of-scotland.jpg',
    altText: 'A map of Scotland',
    videoErrorMessage: 'Something went wrong',
    imageCaption: 'Map of SCotland',
    imageCredit: '@2023 VisitScotland',
    imageToggleText: 'Toggle caption',
    cardContent,
    megalinksIntro,
    links: [
        {
            href: '#',
            text: '14 Places You Must Visit in 2023',
        },
        {
            href: '#',
            text: 'Top Attractions',
        },
        {
            type: 'external',
            href: '#',
            text: 'Visit our partners',
        },
    ],
    noJsMessage: 'JavaScript is needed to watch this video.',
    noCookiesMessage: 'Cookies are needed to watch this video.',
    noCookiesLink: {
        url: 'https://google.com',
        label: 'Update my cookie settings',
    },
};

export const Default = Template.bind({
});

Default.args = base;

export const RightAligned = Template.bind({
});

RightAligned.args = {
    ...base,
    alternate: true,
};

export const WithVideo = Template.bind({
});

WithVideo.args = base;

WithVideo.args = {
    ...base,
    links: [
        {
            href: '#',
            text: 'Keep Scotland Unspoiled',
            videoId: 'g-Fhvj7vW-E',
            videoDescriptor: 'Video',
            type: 'video',
        },
        {
            type: 'external',
            href: '#',
            text: 'Visit our partners',
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
