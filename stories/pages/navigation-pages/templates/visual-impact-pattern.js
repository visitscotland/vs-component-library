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
                                text="Things to do"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template #heroSection>
            <VsHeroSection
                heading="Things to see & do in Scotland"
                lede="What unique and incredible things do you want to do in Scotland? Let the kids learn new stories in amazing attractions, take your friends to a new festival or spend some time relaxing at stunning nature spots."
                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/04/16/paisley-abbey-header-new.jpg"
                img-caption="Paisley Abbey"
                img-credit="VisitScotland"
            />
        </template>
    </VsPageHeader>

   
     <!------------------------------------------------------------
    NEW SECTION - Section header + new card group (4 cards)
    ------------------------------------------------------------>
    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap="always"
                    class="text-start"
                >
                    <VsCard 
                        v-for="(card, index) in cardListOverlay"
                        :key="'category-card-list-' + index"
                        card-style="overlay"
                    >
                        <template #vs-card-footer>
                            <div class="px-125 pb-125">
                                <VsHeading
                                    level="2"
                                    no-margins
                                    heading-style="heading-m"
                                >
                                    <VsLink
                                        href="#"
                                        class="stretched-link text-decoration-none"
                                        variant="on-dark"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>
                            </div>
                        </template>

                        <template #vs-card-image>
                            <video
                                v-if="card.videoSrc"
                                loop
                                muted
                                autoplay
                                playsinline
                                preload="none"
                                :poster="card.image"
                                aria-hidden="true"
                                fetchpriority="high"
                            >
                                <source
                                    :src="card.videoSrc"
                                    type="video/mp4"
                                >
                            </video>
                            <VsImg
                                v-else 
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
    NEW SECTION - Section header + new card group (4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Top things to do and experience in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Explore the top things to do in Scotland, including must-see attractions, exciting experiences, and inspiring ways to enjoy the outdoors.</p>
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
                        v-for="(card, index) in cardList1"
                        :key="'card-list-1-' + index"
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
    NEW SECTION - Section header + new card group ( 3cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Captivating Scottish events"
    >
        <template v-slot:section-header-lede>
            <p>Discover new musicians you'll love forever, watch incredible athletes compete for gold or spend some time with the locals at authentic community events. It's a packed calendar all year round!</p>
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
                        v-for="(card, index) in cardList2"
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
    NEW SECTION - Section header + Card group with youtube videos 
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Discover Scotland in 60 seconds"
    >
        <template v-slot:section-header-lede>
            <p>Get a quick glimpse of Scotland through a collection of short videos capturing some of its most iconic landscapes and experiences. From dramatic coastlines and historic castles to bustling city streets and quiet Highland views, these clips offer a fast, visual snapshot of what makes Scotland unique.</p>
        </template>
    </VsSectionHeader>

    <VsContainer class="mt-075 mt-lg-200">
        <VsRow class="mb-600">
            <VsCol>
                <VsCardGroup scroll-snap="always">
                    <VsVideo 
                        video-id="LpvgT-tivAc"
                        orientation="portrait"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        class="mb-200"
                    />
                    <VsVideo 
                        video-id="4z5n2lofDD0"
                        orientation="portrait"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        class="mb-200"
                    />
                    <VsVideo 
                        video-id="Ys_SklG8OhY"
                        orientation="portrait"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        class="mb-200"
                    />
                    <VsVideo 
                        video-id="GMuYbI1nxCY"
                        orientation="portrait"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        class="mb-200"
                    />
                    <VsVideo 
                        video-id="0YGd2DZLJk4"
                        orientation="portrait"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                        class="mb-200"
                    />
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
                    heading="Film & TV locations"
                    description="This country has produced its fair share of top Hollywood names, and there have been a surprising number of movies filmed in Scotland, too."
                    imageSrc="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/05/outlander-image"
                    ctaLink="#"
                    ctaText="See the Locations"
                />
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Magical places to visit"
    >
        <template v-slot:section-header-lede>
            <p>Make new memories at some of our most popular attractions, uncover incredible film locations, or get up and close with Scotland's stunning landscapes and wildlife.</p>
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
                        v-for="(card, index) in cardList3"
                        :key="'card-list-3-' + index"
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
    NEW SECTION - Section header + new card group ( 3 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Plan your trip"
    >
        <template v-slot:section-header-lede>
            <p>
                Choose from inspiring tours and itineraries to help you make the most of your time in Scotland — whether it's a road trip, city break or scenic adventure.
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
                        v-for="(card, index) in cardList5"
                        :key="'card-list-5-' + index"
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
    NEW SECTION - Section header + new card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-400"
        heading="Make the most of your visit"
    >
        <template v-slot:section-header-lede>
            <p>
                Sample Scotland's delicious local food and drink, shopping, and find the best passes and offers to make your trip even more rewarding.
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
                        v-for="(card, index) in cardList6"
                        :key="'card-list-6-' + index"
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
    NEW SECTION - Section header + new card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Top tips for travelling to Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Find out everything you need to know before you explore Scotland.</p>
        </template>

        <template v-slot:section-header-actions>
            <VsButton variant="secondary" href="#">
                Plan your trip
            </VsButton>
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
                        v-for="(card, index) in cardList4"
                        :key="'card-list-4-' + index"
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
`;
