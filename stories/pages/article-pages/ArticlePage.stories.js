import VsPageHeader from '@/templates/PageHeader.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsBody from '@/components/body/Body.vue';
import VsButton from '@/components/button/Button.vue';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsTooltip from '@/components/tooltip/Tooltip.vue';
import VsPanel from '@/components/panel/Panel.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsLink from '@/components/link/Link.vue';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';

import cardLayoutData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';

import RichArticleTemplate from './templates/rich-article-template';
import StructuredArticleTemplate from './templates/structured-article-template';
import ItineraryTemplate from './templates/itinerary-template';

const components = {
    VsPageHeader,
    VsHeroSection,
    VsBreadcrumb,
    VsBreadcrumbItem,
    VsCol,
    VsContainer,
    VsRow,
    VsSectionHeader,
    VsHeading,
    VsImg,
    VsBody,
    VsButton,
    VsTooltip,
    VsPanel,
    VsIcon,
    VsDetail,
    VsLink,
    VsCardGroup,
    VsCard,
    VsSpotlightSection,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
        setup() {
            const cardList4 = cardLayoutData.cardList4?.cards || [];

            return {
                cardList4,
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
    title: 'Pages/Article',
};

export const RichArticle = {
    ...createStory(RichArticleTemplate),
};

export const StructuredArticle = {
    ...createStory(StructuredArticleTemplate),
};

export const ItineraryArticle = {
    ...createStory(ItineraryTemplate),
};
