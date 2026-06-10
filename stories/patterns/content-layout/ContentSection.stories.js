import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsButton from '@/components/button/Button.vue';
import VsList from '@/components/list/List.vue';
import VsBody from '@/components/body/Body.vue';
import VsDetail from '@/components/detail/Detail.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSectionHeader from '@/components/section-header/SectionHeader.vue';
import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';

import FullTemplate from './templates/content-section-full';
import FullWithHeaderTemplate from './templates/content-section-full-with-header';
import TwoColTemplate from './templates/content-section-two-col';
import TwoColWithHeaderTemplate from './templates/content-section-with-header';
import TwoColWithAccordionTemplate from './templates/content-section-with-accordion';

const components = {
    VsHeading,
    VsImg,
    VsLink,
    VsButton,
    VsBody,
    VsList,
    VsDetail,
    VsCol,
    VsRow,
    VsContainer,
    VsSectionHeader,
    VsMediaCaption,
    VsAccordion,
    VsAccordionItem,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
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
    title: 'Patterns/Content section',
};

export const Full = createStory(FullTemplate);
export const FullWithHeader = createStory(FullWithHeaderTemplate);
export const TwoCol = createStory(TwoColTemplate);
export const TwoColWithHeader = createStory(TwoColWithHeaderTemplate);
export const TwoColWithAccordion = createStory(TwoColWithAccordionTemplate);
