import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsCaption from '@/components/caption/Caption.vue';
import {
    VsCol,
    VsContainer,
    VsRow,
} from '@/components/grid';
import VsDescriptionList from '@/components/description-list/DescriptionList.vue';
import VsDescriptionListItem from '@/components/description-list/components/DescriptionListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsLinkList from '@/components/link-list/LinkList.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsPageIntro from '@/components/page-intro/PageIntro.vue';
import VsSocialShare from '@/components/social-share/SocialShare.vue';
import VsSocialShareItem from '@/components/social-share/components/SocialShareItem.vue';
import VsSummaryBoxList from '@/components/summary-box/SummaryBoxList.vue';
import VsSummaryBoxListItem from '@/components/summary-box/components/SummaryBoxListItem.vue';
import VsSummaryBoxDistanceListItem from '@/components/summary-box/components/SummaryBoxDistanceListItem.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';

import { WithAuthor as articleDetailsWithAuthor } from './ArticleDetails.stories';
import { Default as breadcrumbDefault } from './Breadcrumb.stories';
import { Default as imageWithCaptionDefault } from './ImageWithCaption.stories';
import { Default as socialShareDefault } from './SocialShare.stories';
import { Default as summaryBoxDefault } from './SummaryBox.stories';

export default {
    component: VsPageIntro,
    title: 'PageIntro',
    argTypes: {
        background: {
            options: [
                'light',
                'grey',
            ],
            control: {
                type: 'radio',
            },
        },
    },
};
const Template = (args) => ({
    components: {
        VsArticleDetails,
        VsBreadcrumb,
        VsBreadcrumbItem,
        VsCaption,
        VsCol,
        VsContainer,
        VsDescriptionList,
        VsDescriptionListItem,
        VsImageWithCaption,
        VsLinkList,
        VsLinkListItem,
        VsPageIntro,
        VsRow,
        VsSocialShare,
        VsSocialShareItem,
        VsSummaryBoxList,
        VsSummaryBoxListItem,
        VsSummaryBoxDistanceListItem,
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
        <VsPageIntro v-bind="args">
            
            <template
                v-if="args['vs-intro-hero']"
                v-slot:vs-intro-hero
            >
                <VsImageWithCaption
                    v-bind="args['vs-intro-hero']"
                >
                    <template 
                        v-if="args['vs-intro-hero'].videoTitle"
                        v-slot:video-title
                    >
                        {{ args['vs-intro-hero'].videoTitle }}
                    </template>

                    <template v-slot:img-caption>
                        <VsCaption
                            :latitude="args['vs-intro-hero'].latitude"
                            :longitude="args['vs-intro-hero'].longitude"
                            :variant="args['vs-intro-hero'].variant"
                        >
                            <template v-slot:caption>{{ args['vs-intro-hero']['img-caption'].caption }}</template>
                            <template v-slot:credit>{{ args['vs-intro-hero']['img-caption'].credit }}</template>
                        </VsCaption>
                    </template>
                </VsImageWithCaption>
            </template>

            <template v-slot:vs-intro-breadcrumb>
                <VsBreadcrumb>
                    <VsBreadcrumbItem
                        v-bind="args['vs-intro-breadcrumb']"
                        v-for="(name, index) in args['vs-intro-breadcrumb'].itemNames"
                        :key="index"
                        :text="name"
                        :active="index === args['vs-intro-breadcrumb'].itemNames.length - 1"
                    ></VsBreadcrumbItem>
                </VsBreadcrumb>
            </template>

            <template v-slot:vs-intro-heading>{{ args['vs-intro-heading'] }}</template>

            <template
                v-slot:vs-share-button
                v-if="args['vs-share-button']"
            >
                <VsSocialShare v-bind="args['vs-share-button']">
                    <VsSocialShareItem
                        v-for="item in args['vs-share-button'].default"
                        v-bind="item"
                    />
                </VsSocialShare>
            </template>

            <template
                v-slot:vs-article-data
                v-if="args['vs-article-data']"
            >
                <VsArticleDetails v-bind="args['vs-article-data']" />
            </template>

            <template v-slot:vs-intro-content>
                <p v-html="args['vs-intro-content']" />
            </template>

            <template
                v-slot:vs-intro-start-finish
                v-if="args['vs-intro-start-finish']"
            >
                <dt class="list-inline-item">{{ args['vs-intro-start-finish'].label }}</dt>
                <dd class="list-inline-item">{{ args['vs-intro-start-finish'].startFinish }}</dd>
            </template>

            <template
                v-slot:vs-intro-summary-box
                v-if="args['vs-intro-summary-box']"
            >
                <VsCol cols="12" md="6" lg="5" xl="4" class="position-relative">
                    <VsSummaryBoxList>
                        <VsSummaryBoxListItem
                            :text="args['vs-intro-summary-box'].totalDays"
                            :label="args['vs-intro-summary-box'].item1Label"
                        />
                        <VsSummaryBoxDistanceListItem
                            :miles="args['vs-intro-summary-box'].totalMiles"
                            :kilometres="args['vs-intro-summary-box'].totalKM"
                            :distance-label="args['vs-intro-summary-box'].item2Label"
                            miles-label="miles"
                            kilometres-label="km"
                        />
                        <VsSummaryBoxListItem
                            :icon="args['vs-intro-summary-box'].transportKey"
                            :icon-label="args['vs-intro-summary-box'].transportValue"
                            :label="args['vs-intro-summary-box'].item3Label"
                        />
                        <VsSummaryBoxListItem
                            :icon="args['vs-intro-summary-box'].themeKey"
                            :icon-label="args['vs-intro-summary-box'].themeValue"
                            :label="args['vs-intro-summary-box'].item4Label"
                        />
                    </VsSummaryBoxList>         
                </VsCol>
            </template>

            <template
                v-slot:vs-intro-table-of-contents
                v-if="args.linkList"
            >
                <VsLinkList toc>
                    <template
                        v-if="args.linkListHeading"
                        v-slot:heading
                    >
                        {{ args.linkListHeading }}
                    </template>

                    <VsLinkListItem
                        v-for="link in args.linkList"
                        :type="link.type"
                        :href="link.href"
                    >
                        {{ link.title }}
                    </VsLinkListItem>
                </VsLinkList>
            </template>

            <template
                v-slot:vs-intro-lower
                v-if="args['vs-intro-lower']"
            >
                <VsContainer>
                    <VsRow>
                        <VsCol cols="12" lg="11" offset-lg="1">
                            <VsDescriptionList
                                v-for="(list, index) in args['vs-intro-lower']"
                                :key="index"
                                class="mb-150"
                            >
                                <VsDescriptionListItem
                                    v-for="(item, index) in list"
                                    :key="item"
                                    :title="index === 0"
                                >
                                    {{ item }}
                                </VsDescriptionListItem>
                            </VsDescriptionList>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </template>
            
        </VsPageIntro>

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
    background: 'light',
    heroIntro: false,
    isItinerary: false,
    'vs-intro-breadcrumb': {
        ...breadcrumbDefault.args,
    },
    'vs-intro-heading': 'A 4-day break in Fife and Dundee for families with young kids',
    'vs-intro-content': '<a href="https://www.visitscotland.com/destinations-maps/kingdom-fife/">Fife</a> and <a href="https://www.visitscotland.com/destinations-maps/dundee-angus/">Dundee &amp; Angus</a> are ideal for a few days away on a quality family break. You could base yourself in a seafront cottage, a self-catering lodge in a country estate, or perhaps a luxury caravan in an amenity-filled holiday park. Think of days playing by the seaside, roaming bridle paths in the countryside, visiting exciting attractions that wee ones will love and soaking up a bit of cosmopolitan culture in the city - you won\'t be short of ways to have fun on this family holiday!',
    jsDisabled: false,
};

export const Default = Template.bind();
Default.args = base;

export const WithArticleData = Template.bind();
WithArticleData.args = {
    ...base,
    'vs-article-data': {
        ...articleDetailsWithAuthor.args,
    },
};

export const WithHeroImage = Template.bind();
WithHeroImage.args = {
    ...base,
    heroIntro: true,
    'vs-intro-hero': {
        ...imageWithCaptionDefault.args,
        altText: 'Young girl cartwheeling on Elie Beach',
        'img-caption': {
            caption: 'Elie Beach',
            credit: 'VisitScotland / Kenny Lam',
        },
        imageSrc: 'fixtures/itineraries/images/elie-beach-header.jpg',
        isHeroImage: true,
    },
};

export const GreyTheme = Template.bind();
GreyTheme.args = {
    ...base,
    ...WithHeroImage.args,
    background: 'grey',
};

export const WithHeroVideo = Template.bind();
WithHeroVideo.args = {
    ...base,
    heroIntro: true,
    'vs-intro-hero': {
        ...imageWithCaptionDefault.args,
        altText: 'Young girl cartwheeling on Elie Beach',
        'img-caption': {
            caption: 'Elie Beach',
            credit: 'VisitScotland / Kenny Lam',
        },
        imageSrc: 'fixtures/itineraries/images/elie-beach-header.jpg',
        isHeroImage: true,
        isVideo: true,
        videoId: 'c05sg3G4oA4',
        videoTitle: 'Only in Scotland',
        smallPlayButton: false,
        playButtonText: 'Discover Scotland',
    },
};

export const NoCookies = Template.bind({
});

NoCookies.args = {
    ...base,
    ...WithHeroVideo.args,
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
    ...WithHeroVideo.args,
    jsDisabled: true,
};

export const Itinerary = Template.bind();
Itinerary.args = {
    ...WithHeroImage.args,
    isItinerary: true,
    'vs-share-button': {
        ...socialShareDefault.args,
    },
    'vs-intro-start-finish': {
        label: 'Start / Finish',
        startFinish: 'Edinburgh / Inverness',
    },
    'vs-intro-summary-box': {
        ...summaryBoxDefault.args,
    },
    'vs-intro-lower': [
        [
            'Highlights',
            'East Neuk of Fife',
            'St Andrews',
            'Dundee',
            'Angus',
        ],
        [
            'Areas Covered',
            'East',
        ],
    ],
};

export const FullscreenMobile = Template.bind();
FullscreenMobile.args = {
    ...base,
    fullscreenMobile: true,
    heroIntro: true,
    'vs-share-button': {
        ...socialShareDefault.args,
    },
    'vs-intro-heading': 'Northern Lights',
    'vs-intro-content': 'The Northern Lights - also called the Aurora Borealis - are nature’s very own theatrical performance. In 2024, Expedia experts highlighted the UK as a hotspot destination for spotting the Northern Lights, specificially on the Isle of Skye between October and March!',
    'vs-intro-hero': {
        ...imageWithCaptionDefault.args,
        altText: 'Northern Lights over Cullen Bay',
        'img-caption': {
            caption: 'Northern Lights over Cullen Bay',
            credit: 'VisitScotland / Discover Fraserburgh / Fiona McRae',
        },
        imageSrc: 'fixtures/itineraries/images/northern-lights-over-cullen-bay.jpg',
        isHeroImage: true,
    },
};

FullscreenMobile.parameters = {
    layout: 'fullscreen',
};

export const WithTableOfContents = Template.bind();

WithTableOfContents.args = {
    ...base,
    hasToc: true,
    linkListHeading: 'In this article:',
    linkList: [
        {
            title: 'Who needs a short-term lets licence?',
            href: '#section1',
        },
        {
            title: 'When do I need to have a licence?',
            href: '#section2',
        },
        {
            title: 'How to apply for a licence',
            href: '#section3',
        },
        {
            title: 'Frequently Asked Questions (FAQ)',
            href: '#section4',
        },
        {
            title: 'Industry Advisory Group (IAG)',
            href: '#section5',
        },
    ],
};
