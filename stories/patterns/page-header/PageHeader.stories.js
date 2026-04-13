import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsLinkList from '@/components/link-list/LinkList.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsPageHeader from '../../../src/templates/PageHeader.vue';

import ArticleHeaderTemplate from './templates/article-header';
import GeneralHeaderTemplate from './templates/general-header';
import VideoHeaderTemplate from './templates/video-header';
import SplitHeaderTemplate from './templates/split-header';
import NavigationPageHeaderTemplate from './templates/navigation-page';

export default {
    component: VsPageHeader,
    title: 'Patterns/Page Header',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

const createTemplate = (templateString) => (args) => ({
    components: {
        VsPageHeader,
        VsHeroSection,
        VsLinkListItem,
        VsLinkList,
        VsCol,
        VsContainer,
        VsRow,
        VsArticleDetails,
        VsBreadcrumb,
        VsBreadcrumbItem,
    },
    setup() {
        return {
            args,
        };
    },
    template: templateString,
});

export const VideoHeader = createTemplate(VideoHeaderTemplate).bind({
});
VideoHeader.args = {
    pageTitle: 'Scotland, <br/>it\'s good for the soul',
    pageLede: 'Where history meets breathtaking beauty, and every visit feels like home.',
    imgUrl: 'fixtures/hero/images/lavendar-fields.jpg',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
    playButtonLabel: 'Play video',
    pauseButtonLabel: 'Pause video',
};

export const SplitHeader = createTemplate(SplitHeaderTemplate).bind({
});
SplitHeader.args = {
    pageTitle: 'Join the journey to change',
    pageLede: 'Scotland views business events as catalysts for social and economic transformation, addressing climate change, and advocating human rights.',
    imgUrl: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};

export const NavigationPageHeader = createTemplate(NavigationPageHeaderTemplate).bind({
});
NavigationPageHeader.args = {
    pageTitle: 'Things to see & do in Scotland',
    pageLede: 'What unique and incredible things do you want to do in Scotland? Let the kids learn new stories in amazing attractions, take your friends to a new festival or spend some time relaxing at stunning nature spots.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/04/16/paisley-abbey-header-new.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};

export const ArticleHeader = createTemplate(ArticleHeaderTemplate).bind({
});
ArticleHeader.args = {
    pageTitle: 'Highland Games in Scotland',
    pageLede: 'Highland games have been a part of Scotland\'s culture for hundreds of years and are just as popular today as they\'ve ever been.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/pipe-band-marching-at-the-ballater-highland-games.jpg?size=md',
    imgCaption: 'Pipe band marching at Ballater Highland Games',
    imgCredit: 'VisitScotland',
};

export const GeneralHeader = createTemplate(GeneralHeaderTemplate).bind({
});
GeneralHeader.args = {
    pageTitle: 'Improve your business',
    pageLede: 'Deliver quality experiences with customer insights, accessibility and service excellence.',
};
