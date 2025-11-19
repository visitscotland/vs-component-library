export default `
    <VsPageHeader menu-type="b2c">
        <template #breadcrumb>
            <VsContainer class="mt-075 mt-lg-200">
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
                                text="Sustainability"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template #heroSection>
            <VsHeroSection
                heading="Sustainability"
                lede="Sustainably grow your tourism or events business with actionable green strategies."
                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/12/06/suidhe-viewpoint?size=lg"
                img-caption="Suidhe Viewpoint"
                img-credit="VisitScotland"
                inset
            />
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group ( 3cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Understand sustainability"
    >
        <template v-slot:section-header-lede>
            <p>
                Scotland's natural beauty, rich heritage, and vibrant communities make it a world-class destination — but with this comes the responsibility to protect it for future generations. As a tourism business, you play a vital role in shaping a more sustainable industry, ensuring visitors enjoy Scotland's wonders while minimising environmental impact and supporting local communities.
            </p>
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
                        v-for="(card, index) in infoCardList1"
                        :key="'card-1-' + index"
                        :accent-bar="true"
                        :fill-color="'vs-color-background-primary'"
                        card-style="elevated"
                    >
                        <template #vs-card-header>
                            <VsBadge
                                v-if="card.badgeTitle"
                                variant="subtle"
                                class="mt-125 mx-075"
                            >
                                {{ card.badgeTitle }}
                            </VsBadge>
                        </template>

                        <template #vs-card-body>
                            <div class="px-125">
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

                                <VsBody class="mb-150 truncate-3-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>

                        <template #vs-card-footer>
                            <VsArticleDetails
                                v-if="card.metaData"
                                class="px-125"
                                :article-read-time="card.metaData"
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
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsSpotlightSection 
                    heading="How to measure your climate impact"
                    description="Measure your emissions with the Climate Impact Guide. See what data to gather, and how to use the insights for a more sustainable business model."
                    imageSrc="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/2-dec/gleneagles-hotel-couple"
                    ctaLink="#"
                    ctaText="Read the guide"
                />
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group (3 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="How to develop your sustainability journey"
    >
        <template v-slot:section-header-lede>
            <p>
                Step-by-step guidance to help you measure your impact, create an action plan, and make meaningful improvements to your business.
            </p>
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
                        :key="'card-2-' + index"
                        :accent-bar="true"
                        :fill-color="'vs-color-background-primary'"
                        card-style="elevated"
                    >
                        <template #vs-card-header>
                            <VsBadge
                                v-if="card.badgeTitle"
                                variant="subtle"
                                class="mt-125 mx-075"
                            >
                                {{ card.badgeTitle }}
                            </VsBadge>
                        </template>

                        <template #vs-card-body>
                            <div class="px-125">
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

                                <VsBody class="mb-150 truncate-3-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>

                        <template #vs-card-footer>
                            <VsArticleDetails
                                v-if="card.metaData"
                                class="px-125"
                                :article-read-time="card.metaData"
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
    MEGALINKS - Video highlight
        ------------------------------------------------------------>
    <VsMegalinks 
        title="Watch our climate action workbook webinar"
        variant="multi-image" 
        theme="light"
    >
        <template v-slot:vs-megalinks-intro>
            <p>Join Tiomóid Foley, our Responsible Tourism – Net Zero Manager, to learn more about our climate action workbook in this webinar.</p>
        </template>

        <VsContainer>
            <VsRow>
                <VsCol cols="12" xl="10" class="offset-xl-1">
                    <VsMegalinkMultiImage
                        theme="light"
                        :featured="true"
                        img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/12-mar/loch-affric"
                        link-type="video"
                        link-url="#"
                        video-id="Nz2iwpqsPlI"
                        video-btn-text="Play Video"
                        error-message="We're sorry, there's been an error"
                    >
                        <template v-slot:vs-multi-image-heading>
                            How to measure your climate impact
                        </template>

                        <template v-slot:vs-multi-image-content>
                            <p>This is our new practical resource for tourism businesses to help you measure your emissions and build a climate action plan for your business.</p>
                        </template>
                    </VsMegalinkMultiImage>

                    <VsModal
                        modal-id="Nz2iwpqsPlI"
                        close-btn-text="Close"
                        :is-video-modal="true"
                    >
                        <VsRow>
                            <VsCol cols="12">
                                <VsVideo
                                    video-id="Nz2iwpqsPlI"
                                    class="mb-200"
                                    no-js-message="You need Javascript enabled"
                                    no-cookies-message="You need cookies enabled"
                                    cookie-btn-text="Enable cookies to play video"
                                />
                            </VsCol>
                        </VsRow>
                    </VsModal>
                </VsCol>
            </VsRow>
        </VsContainer>
    </VsMegalinks>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
    
    
    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group (3 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mb-300"
        heading="Guidance for sustainable tourism"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore practical resources, tips, and tools to support long-term sustainability across your tourism operations and promotions.
            </p>
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
                        v-for="(card, index) in infoCardList3"
                        :key="'card-3-' + index"
                        :accent-bar="true"
                        :fill-color="'vs-color-background-primary'"
                        card-style="elevated"
                    >
                        <template #vs-card-header>
                            <VsBadge
                                v-if="card.badgeTitle"
                                variant="subtle"
                                class="mt-125 mx-075"
                            >
                                {{ card.badgeTitle }}
                            </VsBadge>
                        </template>

                        <template #vs-card-body>
                            <div class="px-125">
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

                                <VsBody class="mb-150 truncate-3-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>

                        <template #vs-card-footer>
                            <VsArticleDetails
                                v-if="card.metaData"
                                class="px-125"
                                :article-read-time="card.metaData"
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
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsSpotlightSection 
                    heading="Carbon emissions calculator methodology statement"
                    description="Find out more on how our climate action workbook calculates your emissions."
                    imageSrc="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/03-mar/inversnaid-waterfall.jpg?size=md"
                    ctaLink="#"
                    ctaText="Read the guide"
                />
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    MEGALINKS MULTI VIDEO
    ------------------------------------------------------------>
    <VsMegalinks 
        title="Climate action case studies"
        variant="multi-image" 
        theme="light"
    >
        <template v-slot:vs-megalinks-intro>
            <p>Watch our video case studies to learn the different ways Scottish tourism businesses are embracing sustainability to combat climate change.</p>
        </template>
        
        <VsCol cols="10" class="offset-1">
            <VsContainer>
                <VsRow>
                    <VsCol
                        cols="12"
                        md="6"
                        xl="4"
                    >
                        <VsMegalinkMultiImage
                            theme="light"
                            img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/03-mar/glen-mhor_yt.jpg"
                            link-type="video"
                            link-url="#"
                            video-id="mKfYMgunKmU"
                            video-btn-text="Play Video"
                            error-message="We're sorry, there's been an error"
                        >
                            <template v-slot:vs-multi-image-heading>
                                Climate Action Case Study: Glen Mhor
                            </template>

                            <template v-slot:vs-multi-image-content>
                                <p>Glen Mhor Hotel & Apartments and Distillery talk through their approach to creating a sustainable business.</p>
                            </template>
                        </VsMegalinkMultiImage>

                        <VsModal
                            modal-id="mKfYMgunKmU"
                            close-btn-text="Close"
                            :is-video-modal="true"
                        >
                            <VsRow>
                                <VsCol cols="12">
                                    <VsVideo
                                        video-id="mKfYMgunKmU"
                                        class="mb-200"
                                        no-js-message="You need Javascript enabled"
                                        no-cookies-message="You need cookies enabled"
                                        cookie-btn-text="Cookie button"
                                    />
                                </VsCol>
                            </VsRow>
                        </VsModal>
                    </VsCol>

                    <VsCol
                        cols="12"
                        md="6"
                        xl="4"
                    >
                        <VsMegalinkMultiImage
                            theme="light"
                            img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/03-mar/wilderness-scotland_yt.jpg"
                            link-type="video"
                            link-url="#"
                            video-id="MvRTuU9nf6g"
                            video-btn-text="Play Video"
                            error-message="We're sorry, there's been an error"
                        >
                            <template v-slot:vs-multi-image-heading>
                                Climate Case Study: Wilderness Scotland
                            </template>

                            <template v-slot:vs-multi-image-content>
                                <p>Learn how Wilderness Scotland has adapted their business to prioritise sustainability.</p>
                            </template>
                        </VsMegalinkMultiImage>

                        <VsModal
                            modal-id="MvRTuU9nf6g"
                            close-btn-text="Close"
                            :is-video-modal="true"
                        >
                            <VsRow>
                                <VsCol cols="12">
                                    <VsVideo
                                        video-id="MvRTuU9nf6g"
                                        class="mb-200"
                                        no-js-message="You need Javascript enabled"
                                        no-cookies-message="You need cookies enabled"
                                        cookie-btn-text="Cookie button"
                                    />
                                </VsCol>
                            </VsRow>
                        </VsModal>
                    </VsCol>

                    <VsCol
                        cols="12"
                        md="6"
                        xl="4"
                    >
                        <VsMegalinkMultiImage
                            theme="light"
                            img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/03-mar/crannog_yt.jpg"
                            link-type="video"
                            link-url="#"
                            video-id="U5ETXgcP1jE"
                            video-btn-text="Play Video"
                            error-message="We're sorry, there's been an error"
                        >
                            <template v-slot:vs-multi-image-heading>
                                Climate Action Case Study: The Scottish Crannog Centre
                            </template>

                            <template v-slot:vs-multi-image-content>
                                <p>Find out how The Scottish Crannog Centre have put sustainability at the heart of their business.</p>
                            </template>
                        </VsMegalinkMultiImage>

                        <VsModal
                            modal-id="U5ETXgcP1jE"
                            close-btn-text="Close"
                            :is-video-modal="true"
                        >
                            <VsRow>
                                <VsCol cols="12">
                                    <VsVideo
                                        video-id="U5ETXgcP1jE"
                                        class="mb-200"
                                        no-js-message="You need Javascript enabled"
                                        no-cookies-message="You need cookies enabled"
                                        cookie-btn-text="Cookie button"
                                    />
                                </VsCol>
                            </VsRow>
                        </VsModal>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </VsCol>
    </VsMegalinks>

    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group (4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mb-300"
        heading="Related pages"
    >
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
                        v-for="(card, index) in infoCardList4"
                        :key="'card-4-' + index"
                        :accent-bar="true"
                        :fill-color="'vs-color-background-primary'"
                        card-style="elevated"
                    >
                        <template #vs-card-header>
                            <VsBadge
                                v-if="card.badgeTitle"
                                variant="subtle"
                                class="mt-125 mx-075"
                            >
                                {{ card.badgeTitle }}
                            </VsBadge>
                        </template>

                        <template #vs-card-body>
                            <div class="px-125">
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

                                <VsBody class="mb-150 truncate-3-lines">
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>

                        <template #vs-card-footer>
                            <VsArticleDetails
                                v-if="card.metaData"
                                class="px-125"
                                :article-read-time="card.metaData"
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
`;
