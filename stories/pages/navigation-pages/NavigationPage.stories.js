import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsMegalinkMultiImage from '@/components/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsButton from '@/components/button/Button.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsModal from '@/components/modal/Modal.vue';
import VsVideo from '@/components/video/Video.vue';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsModuleWrapper from '@/components/module-wrapper/ModuleWrapper.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsNavigationPage from '@/templates/NavigationPage.vue';
import cardLayoutData from '@/assets/fixtures/navigation-pages/card-layout-inspirational.json';
import textCardLayoutData from '@/assets/fixtures/navigation-pages/card-layout-informational.json';
import infoCardLayoutData from '@/assets/fixtures/navigation-pages/card-layout-informational2.json';
import VisualImpactTemplate from './templates/visual-impact-pattern';
import InfoFirstTopTemplate from './templates/info-first-top-pattern';
import InfoFirstSecondaryTemplate from './templates/info-first-secondary-pattern';

export default {
    component: VsNavigationPage,
    title: 'Pages/NavigationPage',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

const createTemplate = (templateString) => (args) => ({
    components: {
        VsNavigationPage,
        VsHeroSection,
        VsMegalinks,
        VsMegalinkSingleImage,
        VsMegalinkMultiImage,
        VsLinkListItem,
        VsImageWithCaption,
        VsCaption,
        VsCol,
        VsContainer,
        VsRow,
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsModal,
        VsVideo,
        VsLink,
        VsButton,
        VsBody,
        VsArticleDetails,
        VsBadge,
        VsModuleWrapper,
        VsSectionHeader,
        VsBreadcrumb,
        VsBreadcrumbItem,
        VsSpotlightSection,
    },
    setup() {
        const cardListOverlay = cardLayoutData.cardListOverlay?.cards || [];
        const cardList1 = cardLayoutData.cardList1?.cards || [];
        const cardList2 = cardLayoutData.cardList2?.cards || [];
        const cardList3 = cardLayoutData.cardList3?.cards || [];
        const cardList4 = cardLayoutData.cardList4?.cards || [];
        const textCardList1 = textCardLayoutData.textCardList1?.cards || [];
        const textCardList2 = textCardLayoutData.textCardList2?.cards || [];
        const infoCardList1 = infoCardLayoutData.infoCardList1?.cards || [];
        const infoCardList2 = infoCardLayoutData.infoCardList2?.cards || [];
        const infoCardList3 = infoCardLayoutData.infoCardList3?.cards || [];
        const infoCardList4 = infoCardLayoutData.infoCardList4?.cards || [];

        return {
            args,
            cardListOverlay,
            cardList1,
            cardList2,
            cardList3,
            cardList4,
            textCardList1,
            textCardList2,
            infoCardList1,
            infoCardList2,
            infoCardList3,
            infoCardList4,
        };
    },
    template: templateString,
});

export const VisualImpact = createTemplate(VisualImpactTemplate).bind({
});
VisualImpact.args = {
    pageTitle: 'Things to see & do in Scotland',
    pageLede: 'What unique and incredible things do you want to do in Scotland? Let the kids learn new stories in amazing attractions, take your friends to a new festival or spend some time relaxing at stunning nature spots.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/04/16/paisley-abbey-header-new.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};

export const InfoFirstTop = createTemplate(InfoFirstTopTemplate).bind({
});
InfoFirstTop.args = {
    pageTitle: 'Advice and Support',
    pageLede: 'Check out our how to articles and case studies on everything from digital channels to travel distribution.',
};

export const InfoFirstSecondary = createTemplate(InfoFirstSecondaryTemplate).bind({
});
InfoFirstSecondary.args = {
    pageTitle: 'Sustainability',
    pageLede: 'Sustainably grow your tourism or events business with actionable green strategies.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/12/06/suidhe-viewpoint?size=lg',
    imgCaption: 'Suidhe Viewpoint',
    imgCredit: 'VisitScotland',
};
