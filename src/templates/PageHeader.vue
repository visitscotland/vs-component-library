<template>
    <VsGlobalMenu
        dropdown-label="Our websites"
        active-site="https://www.visitscotland.com/"
    />

    <VsMeganav
        href="#"
        menu-toggle-alt-text="Toggle Menu"
        search-button-text="Search"
        search-label-text="What are you looking for?"
        search-clear-button-text="Clear form"
        search-close-button-text="Close search form"
    >
        <template #mega-nav-top-menu-items>
            <VsMegaNavStaticLink
                v-for="(item, index) in staticNavExampleData"
                :key="index"
                :href="item.href"
            >
                {{ item.title }}
            </VsMegaNavStaticLink>
        </template>

        <template #mega-nav-accordion-items>
            <VsMegaNavStaticLink
                v-for="(item, index) in staticNavExampleData"
                :key="index"
                :href="item.href"
                :is-full-width="true"
            >
                {{ item.title }}
            </VsMegaNavStaticLink>
        </template>
    </VsMeganav>

    <VsContainer
        v-if="variant === 'general'"
        class="mt-075 mt-lg-200"
    >
        <VsRow>
            <VsCol
                cols="10"
                lg="8"
            >
                <VsBreadcrumb>
                    <VsBreadcrumbItem
                        href="#"
                        text="Home"
                    />
                    <VsBreadcrumbItem
                        href="#"
                        text="Advice and Support"
                    />
                    <VsBreadcrumbItem
                        href="#"
                        text="Manage your social media"
                        active
                    />
                </VsBreadcrumb>
            </VsCol>
        </VsRow>
    </VsContainer>

    <VsHeroSection
        v-if="variant !== 'article'"
        heading="Join the journey to change"
        lede="Scotland views business events as catalysts for social and economic transformation, addressing climate change, and advocating human rights."
        :src="imgSrcUrl"
        alt="Sunset at Lochan na h-Achlaise on Rannoch Moor"
        img-caption="Sunset at Lochan na h-Achlaise on Rannoch Moor"
        img-credit="VisitScotland / Kenny Lam"
        :split="variant === 'split-home' ? true : false"
        :video-src="variant === 'video' ? 'fixtures/hero/video/winter-web-test.mp4' : ''"
        :video-btn-text="variant === 'video' ? 'Toggle video' : ''"
    >
        <template #heroHeading>
            Scotland, <br>it's good for the soul
        </template>
    </VsHeroSection>
    <VsPageIntro
        v-else
        has-toc
    >
        <template #vs-intro-breadcrumb>
            <VsBreadcrumb>
                <VsBreadcrumbItem
                    href="#"
                    text="Home"
                />
                <VsBreadcrumbItem
                    href="#"
                    text="Advice and Support"
                />
                <VsBreadcrumbItem
                    href="#"
                    text="Manage your social media"
                    active
                />
            </VsBreadcrumb>
        </template>

        <template #vs-intro-heading>
            Manage your social media
        </template>

        <template #vs-blog-data>
            <VsBlogDetails
                blog-publish-date="Last updated: May 10, 2023"
                blog-read-time="Reading time: 2 minutes"
            />
        </template>

        <template #vs-intro-content>
            <p>
                Social media channels let people create and share content with online
                friends and followers, and take in information and inspiration from their
                favourite brands and influencers.
            </p>

            <p>
                Social media channels have become an integral part of many people's lives,
                with average usage figures of 2 hours 30 minutes a day. Think about the impact
                social media could have on your business and learn how to use social calendars
                and moderation to manage your channels. Check our some top tips for social media,
                and how to monitor the performance over time.
            </p>
        </template>

        <template #vs-intro-table-of-contents>
            <VsLinkList toc>
                <template #heading>
                    In this article:
                </template>
                <VsLinkListItem href="#">
                    Understand social media
                </VsLinkListItem>
                <VsLinkListItem href="#">
                    How to manage your social media channels
                </VsLinkListItem>
                <VsLinkListItem href="#">
                    Top tips for managing your social media accounts
                </VsLinkListItem>
            </VsLinkList>
        </template>
    </VsPageIntro>

    <VsArticle
        v-if="variant === 'article'"
        title="What social media channels are most used?"
        business-support
    >
        <template #vs-article-intro>
            Optional lead paragraph to introduce the article and its contents.
            Vivamus et ante ex. In a tincidunt magna. Nullam aliquam, nibh vel
            faucibus posuere, tellus ante laoreet lectus, hendrerit ultrices
            erat felis sit amet dolor. Vivamus ut scelerisque tortor.
        </template>

        <VsArticleSection
            sidebar-align="right"
            business-support
        >
            <template #article-sidebar>
                <VsArticleSidebar sidebar-align="right">
                    <template #vs-article-sidebar-img>
                        <VsImageWithCaption
                            alt-text="Mountain stream"
                            image-src="fixtures/article/images/mountain-stream.jpg"
                        >
                            <template #img-caption>
                                <VsCaption>
                                    <template #caption>
                                        Mountain stream
                                    </template>
                                    <template #credit>
                                        © CutMedia / Chris Rowland
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                </VsArticleSidebar>
            </template>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Vestibulum sit amet finibus lorem
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet
                malesuada. Integer lorem magna, commodo a justo a, pellentesque
                vehicula lacus. Aenean dignissim nunc id erat semper euismod. Donec
                fermentum vulputate tortor, nec rhoncus eros luctus ut. Phasellus
                eget interdum ante, ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
            </p>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Aliquam eget urna ac lectus facilisis
            </VsHeading>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet malesuada.
                Integer lorem magna, commodo a justo a, pellentesque vehicula lacus.
                Aenean dignissim nunc id erat semper euismod. Donec fermentum vulputate
                tortor, nec rhoncus eros luctus ut. Phasellus eget interdum ante,
                ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
                Cras non eros et lorem ultrices viverra.
            </p>
            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Aliquam erat volutpat
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
        </VsArticleSection>

        <VsArticleSection
            sidebar-align="right"
            business-support
        >
            <template #article-sidebar>
                <VsArticleSidebar sidebar-align="right">
                    <template #vs-article-sidebar-img>
                        <VsImageWithCaption
                            alt-text="Mountain stream"
                            image-src="fixtures/article/images/mountain-stream.jpg"
                        >
                            <template #img-caption>
                                <VsCaption>
                                    <template #caption>
                                        Mountain stream
                                    </template>
                                    <template #credit>
                                        © CutMedia / Chris Rowland
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                </VsArticleSidebar>
            </template>

            <VsHeading
                level="3"
                heading-style="heading-l"
            >
                Vestibulum sit amet finibus lorem
            </VsHeading>

            <p>
                Nullam in ultricies sapien. Nunc faucibus, orci non
                imperdiet vehicula, ipsum metus porta lorem,
                ut pretium nisl augue quis augue. Pellentesque
                finibus rutrum massa nec pretium. Aliquam eget urna ac
                lectus facilisis placerat sed ultricies metus.
                Sed sed molestie leo, ac congue tortor. Ut tempus dictum diam,
                interdum ullamcorper massa congue ut.
            </p>
            <p>
                Praesent aliquet luctus mauris et viverra. Nunc vel libero convallis,
                iaculis eros a, imperdiet tortor. Mauris tempor eget quam sit amet
                malesuada. Integer lorem magna, commodo a justo a, pellentesque
                vehicula lacus. Aenean dignissim nunc id erat semper euismod. Donec
                fermentum vulputate tortor, nec rhoncus eros luctus ut. Phasellus
                eget interdum ante, ut maximus augue. Vivamus cursus dolor ac gravida pulvinar.
            </p>
        </VsArticleSection>
    </VsArticle>

    <template v-else>
        <VsMegalinks
            title="Uncover Scotland's regions"
            variant="single-image"
            theme="grey"
        >
            <template #vs-megalinks-intro>
                <p>
                    From the rugged coastline to sparkling city lights,
                    the ancient Caledonian forests of the Highlands to the
                    rich history of the Lowlands, there are plenty of places
                    to start your Scottish adventure.
                </p>
            </template>

            <VsCol cols="12">
                <VsMegalinkSingleImage
                    title="Where will you explore?"
                >
                    <template #vs-single-image>
                        <VsImageWithCaption
                            mobile-overlap
                            image-src="./fixtures/megalinks/illustrated-map-of-scotland.jpg"
                        >
                            <template #img-caption>
                                <VsCaption text-align="right">
                                    <template #caption>
                                        Map of Scotland
                                    </template>

                                    <template #credit>
                                        @2023 VisitScotland
                                    </template>
                                </VsCaption>
                            </template>
                        </VsImageWithCaption>
                    </template>
                    <template #vs-single-image-content>
                        <p>
                            From the rugged coastline to sparkling city lights,
                            the ancient Caledonian forests of the Highlands to the rich history
                            of the Lowlands, there are plenty of places to start
                            your Scottish adventure.
                        </p>
                    </template>
                    <template #vs-single-image-links>
                        <VsLinkListItem href="#">
                            14 Places You Must Visit in 2023
                        </VsLinkListItem>
                        <VsLinkListItem href="#">
                            Top Attractions
                        </VsLinkListItem>
                    </template>
                </VsMegalinkSingleImage>
            </VsCol>
        </VsMegalinks>
    </template>
</template>

<script>
import VsMeganav from '@/components/mega-nav/MegaNav.vue';
import VsMegaNavStaticLink from '@/components/mega-nav/components/MegaNavStaticLink.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';
import VsPageIntro from '@/components/page-intro/PageIntro.vue';
import VsBreadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import VsBreadcrumbItem from '@/components/breadcrumb/components/BreadcrumbItem.vue';
import VsBlogDetails from '@/components/blog-details/BlogDetails.vue';
import VsLinkList from '@/components/link-list/LinkList.vue';
import VsArticle from '@/components/article/Article.vue';
import VsArticleSidebar from '@/components/article/components/ArticleSidebar.vue';
import VsArticleSection from '@/components/article/components/ArticleSection.vue';
import VsHeading from '@/components/heading/Heading.vue';

import navExample from '@/assets/fixtures/header/main-nav.json';
import staticNavExample from '@/assets/fixtures/header/static-nav.json';

/**
 * @displayName Page Header
 */
export default {
    name: 'VsPageHeader',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMeganav,
        VsMegaNavStaticLink,
        VsMegalinks,
        VsMegalinkSingleImage,
        VsLinkListItem,
        VsHeroSection,
        VsCol,
        VsRow,
        VsContainer,
        VsImageWithCaption,
        VsCaption,
        VsGlobalMenu,
        VsPageIntro,
        VsBreadcrumb,
        VsBreadcrumbItem,
        VsBlogDetails,
        VsLinkList,
        VsArticle,
        VsArticleSidebar,
        VsArticleSection,
        VsHeading,
    },
    props: {
        /**
        * Page header pattern variant
        */
        variant: {
            type: String,
            default: 'split-home',
            validator: (value) => value.match(/(split-home|article|general|video)/),
        },
    },
    data() {
        return {
            navExampleData: navExample,
            staticNavExampleData: staticNavExample,
        };
    },
    computed: {
        imgSrcUrl() {
            switch (this.variant) {
            case 'video':
                return 'fixtures/hero/images/winter-web-test.jpg';
            case 'general':
                return '';
            default:
                return 'fixtures/hero/images/visitscotland_38462263949.jpg';
            }
        },
    },
};
</script>
