import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsMegalinkMultiImage from '@/components/megalinks/components/megalink-multi-image/MegalinkMultiImage.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsBlogDetails from '@/components/blog-details/BlogDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';
import VsModuleWrapper from '@/components/module-wrapper/ModuleWrapper.vue';
import cardLayoutData from '@/assets/fixtures/navigation-pages/card-layout-inspirational.json';
import VisualPatternTemplate from './templates/visual-pattern';
import InformationPatternTemplate from './templates/information-pattern';
import VsNavigationPage from '../../../src/templates/NavigationPage.vue';

export default {
    component: VsNavigationPage,
    title: 'Patterns/NavigationPage',
    argTypes: {
    },
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
};

const createTemplate = (templateString) => (args) => ({
    components: {
        VsNavigationPage,
        VsHeroSection,
        VsMegalinks,
        VsMegalinkSingleImage,
        VsMegalinkMultiImage,
        VsLinkListItem,
        VsImageWithCaption,
        VsCaption,
        VsCol,
        VsContainer,
        VsRow,
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsRichTextWrapper,
        VsBlogDetails,
        VsBadge,
        VsModuleWrapper,
    },
    setup() {
        const cardList1 = cardLayoutData.cardList1.cards;
        const cardList2 = cardLayoutData.cardList2.cards;
        const cardList3 = cardLayoutData.cardList3.cards;

        return {
            args,
            cardList1,
            cardList2,
            cardList3,
        };
    },
    template: templateString,
});

export const VisualPattern = createTemplate(VisualPatternTemplate).bind({
});
VisualPattern.args = {
    pageTitle: 'Things to see & do in Scotland',
    pageLede: 'What unique and incredible things do you want to do in Scotland? Let the kids learn new stories in amazing attractions, take your friends to a new festival or spend some time relaxing at stunning nature spots.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/04/16/paisley-abbey-header-new.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};

export const InformationPattern = createTemplate(InformationPatternTemplate).bind({
});
InformationPattern.args = {
    pageTitle: 'Advice and Support',
    pageLede: 'What unique and incredible things do you want to do in Scotland? Let the kids learn new stories in amazing attractions, take your friends to a new festival or spend some time relaxing at stunning nature spots.',
    imgUrl: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/04/16/paisley-abbey-header-new.jpg',
    imgCaption: 'Paisley Abbey',
    imgCredit: 'VisitScotland',
};
