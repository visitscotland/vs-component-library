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
import VsVideo from '@/components/video/Video.vue';

import visualCardData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';
import informationalCardData from '@/assets/fixtures/navigation-pages/information-first-secondary-cards.json';

import SplitLinkGrid3Example from './templates/card-layout-examples/split-link-grid-3';
import SplitLinkGrid4Example from './templates/card-layout-examples/split-link-grid-4';
import LinkGrid4Example from './templates/card-layout-examples/link-grid-4';
import MultipleRowsGridExample from './templates/card-layout-examples/multiple-rows-grid';
import CategoryGridExample from './templates/card-layout-examples/category-grid';

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
    VsVideo,
};
const createStory = (template, args, globals) => {
    const story = {
        render: (storyArgs) => ({
            components,
            template,
            setup() {
                const cardList2 = visualCardData.cardList2?.cards || [];
                const cardList3 = visualCardData.cardList3?.cards || [];
                const cardListOverlay = visualCardData.cardListOverlay?.cards || [];
                const textCardList2 = informationalCardData.textCardList2?.cards || [];
                const textCardList3 = informationalCardData.textCardList3?.cards || [];
                const cardListMultipleRows = visualCardData.cardListMultipleRows?.cards || [];

                // Merge story args with the data
                return {
                    cardList3,
                    cardListOverlay,
                    textCardList2,
                    textCardList3,
                    cardList2,
                    cardListMultipleRows,
                    scrollSnap: storyArgs.scrollSnap,
                    cardsPerRow: storyArgs.cardsPerRow,
                    ...storyArgs,
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
    };

    if (args) {
        story.args = args;
    }

    if (globals) {
        story.globals = globals;
    }

    return story;
};

export default {
    component: VsCardGroup,
    title: 'Components/Layout & content structure/CardGroup',
    argTypes: {
        scrollSnap: {
            control: {
                type: 'select',
            },
            options: [false, true, 'always'],
        },
        cardsPerRow: {
            control: {
                type: 'number',
            },
        },
    },
};

const base = {
    scrollSnap: false,
    cardsPerRow: 4,
    variant: 'grid',
};

export const GridRow3 = createStory(SplitLinkGrid3Example, {
    ...base,
    cardsPerRow: 3,
});

export const GridRow4 = createStory(LinkGrid4Example, {
    ...base,
});

export const MultipleRowsGrid = createStory(MultipleRowsGridExample, {
    ...base,
});

export const ScrollSnapResponsive = createStory(SplitLinkGrid4Example, {
    ...base,
    scrollSnap: true,
}, {
    viewport: {
        value: 'mobile2',
    },
});

export const ScrollSnapAlways = createStory(CategoryGridExample, {
    ...base,
    scrollSnap: 'always',
});
