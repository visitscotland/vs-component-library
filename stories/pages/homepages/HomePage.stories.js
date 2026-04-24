import VsPageHeader from '@/templates/PageHeader.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsImg from '@/components/img/Img.vue';
import VsVideo from '@/components/video/Video.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsFedSearchInput from '@/custom-components/federated-search/components/FedSearchInput.vue';
import VsFedFilter from '@/custom-components/federated-search/components/FedFilter.vue';
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import { VsCardCarousel, VsCarouselNewSlide } from '@/components/carousel-new';

import prefersReducedMotion from '@/utils/prefers-reduced-motion';

import cardLayoutData from '@/assets/fixtures/homepages/visual-impact-home-cards.json';
import infoCardLayoutData from '@/assets/fixtures/homepages/information-first-home-cards.json';

import VisualImpactTemplate from './templates/visual-impact-home-pattern';
import InfoFirstTemplate from './templates/info-first-home-pattern';

const components = {
    VsPageHeader,
    VsHeroSection,
    VsCol,
    VsContainer,
    VsRow,
    VsCard,
    VsSectionHeader,
    VsSpotlightSection,
    VsHeading,
    VsDetail,
    VsImg,
    VsVideo,
    VsLink,
    VsBody,
    VsBadge,
    VsIcon,
    VsFedSearchInput,
    VsFedFilter,
    VsToggleButton,
    VsCardCarousel,
    VsCarouselNewSlide,
};

const createStory = (template, options = {
}) => ({
    render: () => ({
        components,
        template,
        ...options,
        setup() {
            const cardListOverlay = cardLayoutData.cardListOverlay?.cards || [];
            const cardListInfoOverlay = infoCardLayoutData.cardListInfoOverlay?.cards || [];
            const cardList1 = cardLayoutData.cardList1?.cards || [];
            const cardList2 = cardLayoutData.cardList2?.cards || [];
            const eventCardList = cardLayoutData.eventCardList?.cards || [];
            const infoCardList1 = infoCardLayoutData.infoCardList1?.cards || [];
            const infoCardList2 = infoCardLayoutData.infoCardList2?.cards || [];
            const eventCardInfoList = infoCardLayoutData.eventCardInfoList?.cards || [];

            return {
                cardListOverlay,
                cardListInfoOverlay,
                cardList1,
                cardList2,
                eventCardList,
                infoCardList1,
                infoCardList2,
                eventCardInfoList,
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
    title: 'Pages/Home',
};

export const VisualImpact = {
    ...createStory(VisualImpactTemplate, {
        data() {
            return {
                isReducedMotion: prefersReducedMotion(),
            };
        },
        methods: {
            toggleCard(index) {
                // Uses card toggle() method to toggle the video in the card,
                // this allows the card overlay controls to work without needing
                // to directly access the video component which can be an issue
                // when using v-for to render multiple cards as in this pattern.
                this.$refs.overlayCard[index]?.toggle();
            },
        },
    }),
};

export const InfoFirst = {
    ...createStory(InfoFirstTemplate),
};
