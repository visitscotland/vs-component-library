import VsPageHeader from '@/templates/PageHeader.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkMultiImage from '@/components/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
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

import cardLayoutData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';
import infoCardLayoutData from '@/assets/fixtures/navigation-pages/information-first-top-cards.json';
import textCardLayoutData from '@/assets/fixtures/navigation-pages/information-first-secondary-cards.json';

import VisualImpactTemplate from './templates/visual-impact-pattern';
import InfoFirstTopTemplate from './templates/info-first-top-pattern';
import InfoFirstSecondaryTemplate from './templates/info-first-secondary-pattern';

const components = {
    VsPageHeader,
    VsHeroSection,
    VsBreadcrumb,
    VsBreadcrumbItem,
    VsCol,
    VsContainer,
    VsRow,
    VsCardGroup,
    VsCard,
    VsSectionHeader,
    VsSpotlightSection,
    VsHeading,
    VsImg,
    VsLink,
    VsBody,
    VsButton,
    VsArticleDetails,
    VsBadge,
    VsMegalinks,
    VsMegalinkMultiImage,
    VsModal,
    VsVideo,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
        setup() {
            const cardListOverlay = cardLayoutData.cardListOverlay?.cards || [];
            const cardList1 = cardLayoutData.cardList1?.cards || [];
            const cardList2 = cardLayoutData.cardList2?.cards || [];
            const cardList3 = cardLayoutData.cardList3?.cards || [];
            const cardList4 = cardLayoutData.cardList4?.cards || [];
            const cardList5 = cardLayoutData.cardList5?.cards || [];
            const cardList6 = cardLayoutData.cardList6?.cards || [];
            const textCardList1 = textCardLayoutData.textCardList1?.cards || [];
            const textCardList2 = textCardLayoutData.textCardList2?.cards || [];
            const infoCardList1 = infoCardLayoutData.infoCardList1?.cards || [];
            const infoCardList2 = infoCardLayoutData.infoCardList2?.cards || [];
            const infoCardList3 = infoCardLayoutData.infoCardList3?.cards || [];
            const infoCardList4 = infoCardLayoutData.infoCardList4?.cards || [];

            return {
                cardListOverlay,
                cardList1,
                cardList2,
                cardList3,
                cardList4,
                cardList5,
                cardList6,
                textCardList1,
                textCardList2,
                infoCardList1,
                infoCardList2,
                infoCardList3,
                infoCardList4,
            };
        },
    }),
    parameters: {
        layout: 'fullscreen',
        docs: {
            source: {
                code: template,
            },
        },
    },
});

export default {
    title: 'Pages/NavigationPage',
};

export const VisualImpact = {
    ...createStory(VisualImpactTemplate),
};

export const InfoFirstTop = {
    ...createStory(InfoFirstTopTemplate),
};

export const InfoFirstSecondary = {
    ...createStory(InfoFirstSecondaryTemplate),
};
