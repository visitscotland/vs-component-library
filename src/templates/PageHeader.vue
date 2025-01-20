<template>
    <VsGlobalMenu
        dropdown-label="Our websites"
        active-site="https://www.visitscotland.com/"
    />
    <VsMeganav
        menu-toggle-alt-text="Toggle Menu"
        search-button-text="Search"
        href="#"
    >
        <template #mega-nav-top-menu-items>
            <VsMegaNavStaticLink href="#">
                Accommodation
            </VsMegaNavStaticLink>
            <VsMegaNavStaticLink href="#">
                Things to do
            </VsMegaNavStaticLink>
        </template>

        <template #mega-nav-accordion-items>
            <VsMegaNavStaticLink
                href="#"
                is-full-width="true"
            >
                Accommodation
            </VsMegaNavStaticLink>
            <VsMegaNavStaticLink
                href="#"
                is-full-width="true"
            >
                Things to do
            </VsMegaNavStaticLink>
        </template>
    </VsMeganav>

    <VsHeroSection
        heading="Join the journey to change"
        lede="Scotland views business events as catalysts for social and economic transformation, addressing climate change, and advocating human rights."
        src="fixtures/hero/images/visitscotland_38462263949.jpg"
        alt="Sunset at Lochan na h-Achlaise on Rannoch Moor"
        img-caption="Sunset at Lochan na h-Achlaise on Rannoch Moor"
        img-credit="VisitScotland / Kenny Lam"
        split
    />

    <VsMegalinks
        title="Uncover Scotland's regions"
        variant="single-image"
        theme="grey"
    >
        <template #vs-megalinks-intro>
            <p>
                From the rugged coastline to sparkling city lights,
                the ancient Caledonian forests of the Highlands to the rich history of the Lowlands,
                there are plenty of places to start your Scottish adventure.
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

<script>
import VsMeganav from '@/components/mega-nav/MegaNav.vue';
import VsMegalinks from '@/components/megalinks/Megalinks.vue';
import VsHeroSection from '@/components/hero-section/HeroSection.vue';
import VsMegalinkSingleImage from '@/components/megalinks/components/megalink-single-image/MegalinkSingleImage.vue';
import VsLinkListItem from '@/components/link-list/components/LinkListItem.vue';
import { VsCol } from '@/components/grid';
import VsImageWithCaption from '@/components/image-with-caption/ImageWithCaption.vue';
import VsCaption from '@/components/caption/Caption.vue';
import VsGlobalMenu from '@/components/global-menu/GlobalMenu.vue';

/**
 * @displayName Page Header
 */
export default {
    name: 'VsPageHeader',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMeganav,
        VsMegalinks,
        VsMegalinkSingleImage,
        VsLinkListItem,
        VsHeroSection,
        VsCol,
        VsImageWithCaption,
        VsCaption,
        VsGlobalMenu,
    },
};

</script>
