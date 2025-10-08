import VsPageHeader from '@/templates/PageHeader.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsMegalinkMultiImage from '@/components/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
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
import VsIcon from '@/components/icon/Icon.vue';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';

import cardLayoutData from '@/assets/fixtures/homepages/visual-impact-home-cards.json';
import infoCardLayoutData from '@/assets/fixtures/homepages/information-first-home-cards.json';

import VisualImpactTemplate from './templates/visual-impact-home-pattern';
import InfoFirstTemplate from './templates/info-first-home-pattern';

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
    VsMegalinkSingleImage,
    VsMegalinkMultiImage,
    VsLinkListItem,
    VsImageWithCaption,
    VsCaption,
    VsModal,
    VsVideo,
    VsIcon,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
        setup() {
            const cardListOverlay = cardLayoutData.cardListOverlay?.cards || [];
            const cardList1 = cardLayoutData.cardList1?.cards || [];
            const cardList2 = cardLayoutData.cardList2?.cards || [];
            const eventCardList = cardLayoutData.eventCardList?.cards || [];
            const infoCardList1 = infoCardLayoutData.infoCardList1?.cards || [];
            const infoCardList2 = infoCardLayoutData.infoCardList2?.cards || [];
            const infoCardList3 = infoCardLayoutData.infoCardList3?.cards || [];
            const infoCardList4 = infoCardLayoutData.infoCardList4?.cards || [];

            return {
                cardListOverlay,
                cardList1,
                cardList2,
                eventCardList,
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
    title: 'Pages/HomePage',
};

export const VisualImpact = {
    ...createStory(VisualImpactTemplate),
};

export const InfoFirst = {
    ...createStory(InfoFirstTemplate),
};
