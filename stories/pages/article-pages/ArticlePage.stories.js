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
import VsPanel from '@/components/panel/Panel.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsLink from '@/components/link/Link.vue';

import RichArticleTemplate from './templates/rich-article-template';
import StructuredArticleTemplate from './templates/structured-article-template';

const components = {
    VsPageHeader,
    VsHeroSection,
    VsBreadcrumb,
    VsBreadcrumbItem,
    VsCol,
    VsContainer,
    VsRow,
    VsHeading,
    VsImg,
    VsBody,
    VsButton,
    VsPanel,
    VsIcon,
    VsDetail,
    VsLink,
};

const createStory = (template) => ({
    render: () => ({
        components,
        template,
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
