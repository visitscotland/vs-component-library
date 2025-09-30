import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';

import visualCardData from '@/assets/fixtures/navigation-pages/card-layout-inspirational.json';
import informationalCardData from '@/assets/fixtures/navigation-pages/card-layout-informational.json';

import SplitLinkGrid3Example from './card-layout-examples/split-link-grid-3';
import SplitLinkGrid4Example from './card-layout-examples/split-link-grid-4';
import LinkGrid3Example from './card-layout-examples/link-grid-3';
import LinkGrid4Example from './card-layout-examples/link-grid-4';
import CategoryGridExample from './card-layout-examples/category-grid';

const components = {
    VsCard,
    VsHeading,
    VsImg,
    VsLink,
    VsBody,
    VsArticleDetails,
    VsBadge,
    VsCol,
    VsRow,
    VsContainer,
    VsCardGroup,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
        setup() {
            const cardList2 = visualCardData.cardList2?.cards || [];
            const cardList3 = visualCardData.cardList3?.cards || [];
            const cardListOverlay = visualCardData.cardListOverlay?.cards || [];
            const textCardList2 = informationalCardData.textCardList2?.cards || [];
            const textCardList3 = informationalCardData.textCardList3?.cards || [];
            return {
                cardList3,
                cardListOverlay,
                textCardList2,
                textCardList3,
                cardList2,
            };
        },
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
    title: 'Patterns/Cards/CardLayout',
    parameters: {
        layout: 'fullscreen',
    },
};

export const SplitLinkGrid3 = createStory(SplitLinkGrid3Example);
export const SplitLinkGrid4 = createStory(SplitLinkGrid4Example);
export const LinkCardGrid3 = createStory(LinkGrid3Example);
export const LinkCardGrid4 = createStory(LinkGrid4Example);
export const CategoryGrid = createStory(CategoryGridExample);
