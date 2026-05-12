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
const deprecationNotice = `
<div style="background: #940f2c17; padding: 1rem; border: 1px solid #940F2C; margin-bottom: 1rem;">
  ⚠️ Deprecated: Use new Content Swiper component or layout Grid instead.
  This component will be removed in a future release.
  See the <a href="https://visitscotland.atlassian.net/wiki/spaces/DE/pages/628293634/Card+group+deprecated">Component migration docs.</a>
</div>
`;

const createStory = (template, args, globals) => {
    const story = {
        render: (storyArgs) => ({
            components,
            template: deprecationNotice + template,
            setup() {
                const cardList2 = visualCardData.cardList2?.cards || [];
                const cardList3 = visualCardData.cardList3?.cards || [];
                const cardListOverlay = visualCardData.cardListOverlay?.cards || [];
                const textCardList2 = informationalCardData.textCardList2?.cards || [];
                const textCardList3 = informationalCardData.textCardList3?.cards || [];

                // Merge story args with the data
                return {
                    cardList3,
                    cardListOverlay,
                    textCardList2,
                    textCardList3,
                    cardList2,
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
    title: 'Components/Deprecated/CardGroup',
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
    tags: ['deprecated'],
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
