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

import prefersReducedMotion from '@/utils/prefers-reduced-motion';

import visualCardData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';

import SplitLinkCardExample from './card-examples/split-link-card';
import SplitLinkHorizontalCardExample from './card-examples/split-link-horizontal-card';
import LinkExample from './card-examples/link-card';
import LinkWithDetailsExample from './card-examples/link-card-with-details';
import LinkWithIconExample from './card-examples/link-card-with-icon';
import CategoryImageExample from './card-examples/category-image-card';
import CategoryVideoExample from './card-examples/category-video-card';
import EventExample from './card-examples/event-card';
import MultipleRowGridExample from './card-examples/multiple-rows-grid';

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
};

const decorators = {
    default: () => ({
        template: '<div style="width: 22rem"><story /></div>',
    }),
    fullWidth: () => ({
        template: '<div style="width: 100%"><story /></div>',
    }),
};

/**
 * Generic helper for simple template stories
 */
const createStory = (template, decorator = decorators.default, options = {
}) => ({
    render: () => ({
        components,
        template,
        ...options,
    }),
    decorators: [decorator],
    parameters: {
        docs: {
            source: {
                code: template,
            },
        },
    },
});

export default {
    title: 'Patterns/Cards',
};

export const SplitLinkCard = createStory(SplitLinkCardExample);

export const SplitLinkHorizontalCard = createStory(
    SplitLinkHorizontalCardExample,
    decorators.fullWidth,
);

export const LinkCard = createStory(LinkExample);

export const LinkCardWithDetails = createStory(LinkWithDetailsExample);

export const LinkCardWithIcon = createStory(LinkWithIconExample);

export const CategoryImageCard = createStory(CategoryImageExample);

/**
 * Interactive story (video play/pause)
 */
export const CategoryVideoCard = createStory(
    CategoryVideoExample,
    decorators.default,
    {
        data() {
            return {
                isReducedMotion: prefersReducedMotion(),
            };
        },
        methods: {
            /**
             * Toggles the video in the video examples with the ref given
             * using the exposed toggleVideo method in the video component
             */
            toggleVideo(refKey) {
                this.$refs[refKey]?.toggleVideo?.();
            },
        },
    },
);

export const EventCard = createStory(EventExample);

export const MultipleRowGrid = createStory(
    MultipleRowGridExample,
    decorators.fullWidth,
    {
        setup() {
            const cardListMultipleRows = visualCardData.cardListMultipleRows?.cards || [];
            return {
                cardListMultipleRows,
            };
        },
    },
);
