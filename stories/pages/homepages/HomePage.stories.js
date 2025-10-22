import VsPageHeader from '@/templates/PageHeader.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSpotlightSection from '@/components/spotlight-section/SpotlightSection.vue';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsFederatedSearch from '@/custom-components/federated-search/FederatedSearch.vue';
import VsFedFilter from '@/custom-components/federated-search/components/FedFilter.vue';

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
    VsCardGroup,
    VsCard,
    VsSectionHeader,
    VsSpotlightSection,
    VsHeading,
    VsDetail,
    VsImg,
    VsLink,
    VsBody,
    VsBadge,
    VsIcon,
    VsFederatedSearch,
    VsFedFilter,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
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
    title: 'Pages/HomePage',
};

export const VisualImpact = {
    ...createStory(VisualImpactTemplate),
};

export const InfoFirst = {
    ...createStory(InfoFirstTemplate),
};
