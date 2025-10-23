export default `
    <VsPageHeader menu-type="b2b">
        <template #heroSection>
            <VsHeroSection
                split
                img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/20-jan/79299-lochend-chalets-large.jpg?size=lg"
                heading="VisitScotland Business Support Hub"
                lede="Scotland views business events as catalysts for social and economic  transformation, addressing climate change, and advocating human rights."
            />
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Section header + category card group
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Join the journey to change"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore our resources, training and expert advice to help your organisation grow, adapt and make a positive impact.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    cards-per-row="3"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in cardListInfoOverlay"
                        card-style="overlay"
                        :key="'card-list-overlay-' + index"
                    >
                        <template #vs-card-footer>
                            <div class="px-125 pb-125">
                                <VsHeading
                                    level="3"
                                    no-margins
                                    heading-style="heading-m"
                                >
                                    <VsLink
                                        :href="card.contentLinkUrl"
                                        class="stretched-link text-decoration-none"
                                        variant="on-dark"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>
                            </div>
                        </template>
                        <template v-slot:vs-card-image>
                            <VsImg 
                                :src="card.image" 
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group ( 3cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Develop your digital skills "
    >
        <template v-slot:section-header-lede>
            <p>
                Discover practical guides and resources to help you inspire and engage customers on your digital marketing channels.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap          
                    :cards-per-row="4"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in infoCardList1"
                        :key="'card-list-2-' + index"
                    >
                        <template #vs-card-header>
                            <VsImg
                                v-if="card.image"
                                :src="card.image"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <div>
                                <VsHeading
                                    level="3"
                                    heading-style="heading-xs"
                                >
                                    <VsLink
                                        :href="card.link"
                                        class="stretched-link"
                                        variant="secondary"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>

                                <VsBody class="mb-150 truncate-2-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsSpotlightSection 
                    heading="Support from VisitScotland"
                    description="Find out more about the opportunities to work with VisitScotland from funding for events to listings on our website. You can also find out what we share on our social media, and how to work with our PR team."
                    imageSrc="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/20-jan/100396-knockengorroch-large.jpg?size=lg"
                    ctaLink="#"
                    ctaText="See all from VisitScotland"
                />
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group ( 3 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Whats new?"
    >
        <template v-slot:section-header-lede>
            <p>Stay up to date with the latest business support, advice, case studies and updates from across Scotland's tourism industry.</p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap          
                    :cards-per-row="3"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in infoCardList2"
                        :key="'card-list-2-' + index"
                    >
                        <template #vs-card-header>
                            <VsImg
                                v-if="card.image"
                                :src="card.image"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <div>
                                <VsHeading
                                    level="3"
                                    heading-style="heading-xs"
                                >
                                    <VsLink
                                        :href="card.link"
                                        class="stretched-link"
                                        variant="secondary"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>

                                <VsBody class="mb-150 truncate-2-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

        <!------------------------------------------------------------
    NEW SECTION - Section header + event card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Unmissable events in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore upcoming seminars, training sessions and industry events across Scotland. From travel trade showcases to practical workshops, find opportunities to learn, connect and grow your business.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer class="mb-500">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap
                    :cards-per-row="4"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in eventCardInfoList"
                        :key="'card-list-event-' + index"
                    >
                        <template #vs-card-header>
                            <div class="position-relative">
                                <VsImg
                                    v-if="card.image"
                                    :src="card.image"
                                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                                />
                                <div class="position-absolute bottom-0 start-0 end-0 d-flex justify-content-between">
                                    <div class="d-flex">
                                        <VsBadge
                                            v-if="card.price"
                                            variant="information"
                                            class="rounded-top-end rounded-bottom-start"
                                        >
                                            {{ card.price }}
                                        </VsBadge>

                                        <VsBadge
                                            v-if="card.date"
                                            variant="information"
                                            class="rounded-top"
                                        >
                                            {{ card.date }}
                                        </VsBadge>
                                    </div>

                                    <VsBadge
                                        v-if="card.type"
                                        variant="information"
                                        class="rounded-top-start rounded-bottom-end me-0"
                                    >
                                        {{ card.type }}
                                    </VsBadge>
                                </div>
                            </div>

                        </template>

                        <template #vs-card-body >
                            <VsHeading
                                level="3"
                                heading-style="heading-xs"
                            >
                                <VsLink
                                    href="#"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    {{ card.title }}
                                </VsLink>
                            </VsHeading>

                            <VsBody>
                                <p class="truncate-2-lines">
                                    {{ card.description }}
                                </p>
                            </VsBody>
                        </template>

                        <template #vs-card-footer>
                            <div class="d-flex justify-content-between align-items-end">
                                <div class="d-flex align-items-center">
                                    <VsIcon
                                        icon="fa-solid fa-location-dot"
                                        variant="highlight"
                                        class="me-050"
                                        size="sm"
                                    />
                                    <VsDetail 
                                        v-if="card.location" 
                                        no-margins
                                        color="tertiary"
                                    >
                                        {{ card.location }}
                                    </VsDetail>
                                </div>

                                <VsIcon 
                                    icon="vs-icon-control-external-link"
                                    variant="highlight"
                                    size="sm"
                                />
                            </div>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!-----------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
