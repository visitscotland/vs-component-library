import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsLinkList from '@/components/link-list/LinkList.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsHeading from '@/components/heading/Heading.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsPageIntro from '@/components/page-intro/PageIntro.vue';
import VsArticle from '@/components/article/Article.vue';
import VsArticleSidebar from '@/components/article/components/ArticleSidebar.vue';
import VsArticleSection from '@/components/article/components/ArticleSection.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsPageHeader from '../../../src/templates/PageHeader.vue';

import ArticleHeaderTemplate from './templates/article-header';
import GeneralHeaderTemplate from './templates/general-header';
import VideoHeaderTemplate from './templates/video-header';
import SplitHeaderTemplate from './templates/split-header';

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
        VsMegalinks,
        VsMegalinkSingleImage,
        VsLinkListItem,
        VsLinkList,
        VsImageWithCaption,
        VsCaption,
        VsCol,
        VsContainer,
        VsRow,
        VsHeading,
        VsArticleDetails,
        VsPageIntro,
        VsArticle,
        VsArticleSidebar,
        VsArticleSection,
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

export const SplitHeader = createTemplate(SplitHeaderTemplate).bind({
});
SplitHeader.args = {
    pageTitle: 'Join the journey to change',
    pageLede: 'Scotland views business events as catalysts for social and economic transformation, addressing climate change, and advocating human rights.',
    imgUrl: 'fixtures/hero/images/visitscotland_38462263949.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};

export const ArticleHeader = createTemplate(ArticleHeaderTemplate).bind({
});
ArticleHeader.args = {
    pageTitle: 'Advice and Support',
    pageLede: 'Check out our how to articles and case studies on everything from digital channels to travel distribution.',
};

export const GeneralHeader = createTemplate(GeneralHeaderTemplate).bind({
});
GeneralHeader.args = {
    pageTitle: 'Improve your business',
    pageLede: 'Deliver quality experiences with customer insights, accessibility and service excellence.',
};

export const VideoHeader = createTemplate(VideoHeaderTemplate).bind({
});
VideoHeader.args = {
    pageTitle: 'Scotland, <br/>it\'s good for the soul',
    pageLede: 'Where history meets breathtaking beauty, and every visit feels like home.',
    imgUrl: 'fixtures/hero/images/lavendar-fields.png',
    imgCaption: 'Sunset at Lochan na h-Achlaise on Rannoch Moor',
    imgCredit: 'VisitScotland / Kenny Lam',
};
