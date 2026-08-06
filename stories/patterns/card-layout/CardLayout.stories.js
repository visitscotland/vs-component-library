import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsVideo from '@/components/video/Video.vue';
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsContentSwiper from '@/components/content-swiper/ContentSwiper.vue';
import VsContentSwiperSlide from '@/components/content-swiper/components/ContentSwiperSlide';

import visualCardData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';

import MultipleRowGridExample from './templates/multiple-rows-grid';
import ThreeCardsPerRowExample from './templates/3-cards-per-row';
import FourCardsPerRowExample from './templates/4-cards-per-row';
import ExtendedCardCollectionExample from './templates/extended-card-collection';

const components = {
    VsCard,
    VsHeading,
    VsImg,
    VsLink,
    VsButton,
    VsBody,
    VsArticleDetails,
    VsBadge,
    VsIcon,
    VsDetail,
    VsVideo,
    VsToggleButton,
    VsCol,
    VsRow,
    VsContainer,
    VsContentSwiper,
    VsContentSwiperSlide,
};

/**
 * Generic helper for simple template stories
 */
const createStory = (template, options = {
}) => ({
    render: () => ({
        components,
        template,
        ...options,
    }),
    parameters: {
        docs: {
            source: {
                code: template,
            },
        },
    },
});

export default {
    title: 'Patterns/Card Layout',
};

export const ThreeCardsPerRow = createStory(
    ThreeCardsPerRowExample,
    {
        setup() {
            const cardList2 = visualCardData.cardList2?.cards || [];
            return {
                cardList2,
            };
        },
    },
);

export const FourCardsPerRow = createStory(
    FourCardsPerRowExample,
    {
        setup() {
            const cardList3 = visualCardData.cardList3?.cards || [];
            return {
                cardList3,
            };
        },
    },
);

export const ExtendedCardCollection = createStory(
    ExtendedCardCollectionExample,
    {
        setup() {
            const cardListOverlay = visualCardData.cardListOverlay?.cards || [];
            return {
                cardListOverlay,
            };
        },
    },
);

export const MultipleRowGrid = createStory(
    MultipleRowGridExample,
    {
        setup() {
            const cardListMultipleRows = visualCardData.cardListMultipleRows?.cards || [];
            return {
                cardListMultipleRows,
            };
        },
    },
);
