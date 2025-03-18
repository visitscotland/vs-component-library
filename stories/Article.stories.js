import VsArticle from '@/components/article/Article.vue';
import VsArticleSidebar from '@/components/article/components/ArticleSidebar.vue';
import VsArticleSection from '@/components/article/components/ArticleSection.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsImg from '@/components/img/Img.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsQuote from '@/components/quote/Quote.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import VsVideoCaption from '@/components/video-caption/VideoCaption.vue';
import { VsCol, VsRow } from '@/components/grid';

export default {
    component: VsArticle,
    title: 'Article',
    argTypes: {
        vsArticleIntro: {
            control: {
                type: 'text',
            },
        },
        sidebarAlign: {
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
        VsArticle,
        VsArticleSidebar,
        VsArticleSection,
        VsHeading,
        VsImageWithCaption,
        VsImg,
        VsCaption,
        VsQuote,
        VsModal,
        VsVideo,
        VsVideoCaption,
        VsCol,
        VsRow,
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
            <VsArticle v-bind="args">
                <template
                    v-if="args['vs-article-img']"
                    v-slot:vs-article-img
                >
                    <VsImageWithCaption
                        :alt-text="args['vs-article-img'].alt"
                        :image-src="args['vs-article-img'].src"
                    >
                        <template v-slot:img-caption>
                            <VsCaption>
                                <template v-slot:caption>{{ args['vs-article-img'].caption }}</template>
                                <template v-slot:credit>{{ args['vs-article-img'].credit }}</template>
                            </VsCaption>
                        </template>
                    </VsImageWithCaption>
                </template>

                <template
                    v-if="args['vs-article-video']"
                    v-slot:vs-article-img
                >
                    <VsVideo 
                        :video-id="args['vs-article-video'].videoId"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                    ></VsVideo>
                    <VsVideoCaption 
                        :videoId="args['vs-article-video'].videoId"
                    >
                        <template v-slot:video-title>
                            {{ args['vs-article-video'].videoTitle }}
                        </template>
                    </VsVideoCaption>
                </template>

                <template
                    v-if="args['vs-article-intro']"
                    v-slot:vs-article-intro
                >
                    {{ args['vs-article-intro'] }}
                </template>

                <VsArticleSection
                    :sidebar-align="args.sidebarAlign"
                    :businessSupport="args.businessSupport"
                >
                    <template
                        v-if="args.sidebarImg || args.sidebarQuote || args.tableOfContents"
                        v-slot:article-sidebar
                    >
                        <VsArticleSidebar :sidebar-align="args.sidebarAlign">
                            <template
                                v-if="args.sidebarImg"
                                v-slot:vs-article-sidebar-img
                            >
                                <VsImageWithCaption
                                    v-if="!args['sidebarImg'].isVideo"
                                    :alt-text="args['sidebarImg'].alt"
                                    :image-src="args['sidebarImg'].imageSrc"
                                >
                                    <template v-slot:img-caption>
                                        <VsCaption>
                                            <template v-slot:caption>{{ args['sidebarImg'].caption }}</template>
                                            <template v-slot:credit>{{ args['sidebarImg'].credit }}</template>
                                        </VsCaption>
                                    </template>
                                </VsImageWithCaption>

                                <VsImageWithCaption
                                    v-if="args['sidebarImg'].isVideo"
                                    :alt-text="args['sidebarImg'].alt"
                                    :image-src="args['sidebarImg'].imageSrc"
                                    :is-video="args['sidebarImg'].isVideo"
                                    :video-id="args['sidebarImg'].videoId"
                                    :video-title="args['sidebarImg'].videoTitle"
                                    :small-play-button="args['sidebarImg'].smallPlayButton"
                                    :play-button-text="args['sidebarImg'].playButtonText"
                                    :show-toggle="args['sidebarImg'].showToggle"
                                    :toggle-button-text="args['sidebarImg'].toggleButtonText"
                                    :error-message="args['sidebarImg'].errorMessage"
                                    :cookie-link-text="args['sidebarImg'].cookieLinkText"
                                    :no-js-message="args['sidebarImg'].noJsMessage"
                                    :no-cookies-message="args['sidebarImg'].noCookiesMessage"
                                >

                                    <template v-slot:video-title>
                                        {{ args['sidebarImg'].videoTitle}}
                                    </template>
                                </VsImageWithCaption>
                            </template>

                            <template
                                v-if="args.sidebarQuote"
                                v-slot:vs-article-sidebar-quote>
                                <VsQuote :with-border="args.businessSupport">
                                    <template v-slot:quote-content>
                                        <p>{{ args.sidebarQuote.quote }}</p>
                                    </template>
                                    <template v-slot:quote-author-name>
                                        {{ args.sidebarQuote.authorName }}
                                    </template>
                                    <template v-slot:quote-author-title>
                                        {{ args.sidebarQuote.authorTitle }}
                                    </template>
                                </VsQuote>
                            </template>
                        </VsArticleSidebar>
                    </template>

                    <template v-if="args.hasSubheaders">
                        ${args.hasHeadersContent}
                    </template>
                    <template v-else>
                        ${args.defaultContent}
                    </template

                </VsArticleSection>
            </VsArticle>

            <VsModal
                modal-id='c05sg3G4oA4' 
                close-btn-text='Close' 
                :is-video-modal='true'
            >
                <VsRow>
                    <VsCol cols="12">
                        <VsVideo
                            video-id="c05sg3G4oA4"
                            video-title="Test Video"
                            class="mb-200"
                            cookie-btn-text="Manage cookies"
                            error-message="Sorry, something's gone wrong. Please try again later"
                            no-js-message="You need JavaScript enabled to see this video"
                            no-cookies-message="You need cookies enabled to see this video"
                        />
                    </VsCol>
                </VsRow>
            </VsModal>
        </div>
    `,
});

const base = {
    title: 'Experiencing Ben Nevis',
    'vs-article-intro': 'Scotland\'s landscape is scattered with Munros and mist-shrouded hills...',
    sidebarAlign: 'left',
    sidebarImg: {
        imageSrc: 'fixtures/article/images/mountain-stream.jpg',
        alt: 'Mountain stream',
        useLazyLoading: true,
        caption: 'Mountain stream',
        credit: '© CutMedia / Chris Rowland',
    },
    sidebarQuote: {
        authorName: 'Penny',
        authorTitle: 'Visitor Services Advisor at Fort William iCentre',
        quote: 'Scotland\'s largest mountain was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago.',
    },
    defaultContent: `
        <p>Ben Nevis is the king of them all. In the north west <a href='#'>Highlands</a>, near the town of <a href='#'>Fort William</a> and part of the <a href='#'>Grampian Mountain</a> range, the famous peak attracts 125k walkers a year. Whether you're an avid ambler or you just love beautiful landscapes, bagging 'the Ben' is likely to feature near the top of your Scottish bucket list.</p>
        <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
        <p>Read on for an overview of walking routes up the mountain, or visit <a href='#'>Walk Highlands</a> for detailed maps, difficulty levels and walking advice.</p>
        <p>Remember it's never 'easy' to bag a Scottish Munro or Corbett. You'll need a good amount of hillwalking experience, fitness, hill craft and navigation skills using a map and compass, before attempting any Scottish mountains, even more so in winter.</p>
    `,
    hasHeadersContent: `
        <vs-heading level="3">The mountain</vs-heading>
        <p>Ben Nevis is the king of them all. In the north west <a href='#'>Highlands</a>, near the town of <a href='#'>Fort William</a> and part of the <a href='#'>Grampian Mountain</a> range, the famous peak attracts 125k walkers a year. Whether you're an avid ambler or you just love beautiful landscapes, bagging 'the Ben' is likely to feature near the top of your Scottish bucket list.</p>
        <p>An ancient giant of the land, Ben Nevis was once a massive active volcano which exploded and collapsed inwards on itself millions of years ago. At the summit, there is evidence of an explosion in the form of light-coloured granite. The name itself has two translations from the ancient Gaelic language, meaning 'mountain with its head in the clouds', thanks to its iconic mist-shrouded peak, or it can also mean 'venomous mountain' - you can decide which translation you prefer after the climb!</p>
        <p>Read on for an overview of walking routes up the mountain, or visit <a href='#'>Walk Highlands</a> for detailed maps, difficulty levels and walking advice.</p>
        <vs-heading level="3">Experience</vs-heading>
        <p>Remember it's never 'easy' to bag a Scottish Munro or Corbett. You'll need a good amount of hillwalking experience, fitness, hill craft and navigation skills using a map and compass, before attempting any Scottish mountains, even more so in winter.</p>
    `,
    jsDisabled: false,
    headingLevel: 2,
};

export const Default = Template.bind();
Default.args = base;

export const CoverImage = Template.bind();
CoverImage.args = {
    ...base,
    'vs-article-img': {
        src: 'fixtures/article/images/corpach-sea-lock-and-lighthouse.jpg',
        alt: 'Ben Nevis',
        useLazyLoading: true,
        caption: 'Corpach Sea Lock and Lighthouse in the Shadow of Ben Nevis, Loch Eil by Fort William',
        credit: '© VisitScotland / Kenny Lam',
    },
};

export const CoverVideo = Template.bind();
CoverVideo.args = {
    ...base,
    'vs-article-video': {
        videoId: 'c05sg3G4oA4',
        videoTitle: 'Only in Scotland',
    },
};

export const SidebarRightAligned = Template.bind();
SidebarRightAligned.args = {
    ...base,
    sidebarAlign: 'right',
};

export const SidebarVideo = Template.bind();
SidebarVideo.args = {
    ...base,
    sidebarImg: {
        isVideo: true,
        videoId: 'c05sg3G4oA4',
        videoTitle: 'Only in Scotland',
        smallPlayButton: true,
        showToggle: false,
        playButtonText: 'Play',
        toggleButtonText: 'Toggle image caption',
        errorMessage: 'Sorry, something has gone wrong, Please try again later',
        cookieLinkText: 'Manage cookies',
        noJsMessage: 'You need JavaScript enabled to see this video',
        noCookiesMessage: 'You need cookies enabled to see this video',
        imageSrc: 'fixtures/article/images/corpach-sea-lock-and-lighthouse.jpg',
    },
};

export const BusinessSupportHub = Template.bind();
BusinessSupportHub.args = {
    ...base,
    sidebarAlign: 'right',
    businessSupport: true,
};

export const BusinessSupportHubNoSidebar = Template.bind();
BusinessSupportHubNoSidebar.args = {
    ...CoverImage.args,
    ...BusinessSupportHub.args,
    sidebarImg: '',
    sidebarQuote: '',
};

export const BusinessSupportHubWithSubheaders = Template.bind();
BusinessSupportHubWithSubheaders.args = {
    ...base,
    sidebarAlign: 'right',
    businessSupport: true,
    'vs-article-intro': null,
    hasSubheaders: true,
};

export const NoCookies = Template.bind();
NoCookies.args = {
    ...base,
    ...CoverVideo.args,
    ...SidebarVideo.args,
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

export const NoJavascript = Template.bind();
NoJavascript.args = {
    ...base,
    ...CoverVideo.args,
    ...SidebarVideo.args,
    jsDisabled: true,
};
