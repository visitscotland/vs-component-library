export default `
    <VsPageHeader menu-type="b2c">
        <template #heroSection>
            <VsHeroSection
                heading="Scotland, <br/>it's good for the soul"
                lede="Where history meets breathtaking beauty, and every visit feels like home."
                img-src="fixtures/hero/images/lavendar-fields.png"
                video-src="fixtures/hero/video/lavendar-fields.mp4"
                video-btn-text="Play/pause background video"
                video-playing-status="Playing"
                video-paused-status="Paused"
            />
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Section header + category card group
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Inspiration for your trip"
    >
        <template v-slot:section-header-lede>
            <p>Step into a land steeped in history and legend, explore our dramatic landscapes and uncover our ancient Celtic roots. Vast lochs, glens and Munros - easily accessible from our vibrant cities and towns - make Scotland the perfect place to lose yourself.</p>
        </template>
    </VsSectionHeader>

    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    cards-per-row="4"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in cardListOverlay"
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
                                        :href="card.link"
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
    NEW SECTION - Section header + search
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Discover unique experiences in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>
                Discover hidden gems, plan your perfect trip, or find exactly what you need—from scenic hikes and cosy cottages to local events and cultural experiences. Start exploring now!
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol>
                <VsFederatedSearch
                    :error-messages="{
                        noResults: 'There are no results, please try again',
                        incorrectDateOrder: 'The start date is after the end date, please change this and try again.',
                        cludoError: 'There was a problem retrieving the search results, please try again later',
                        eventError: 'There was a problem retrieving the event results, please try again later.',
                    }"
                    no-results-label="There are no results, please try again"
                    from-text="From"
                    :pagination-labels="{
                        nextButtonLabel: 'Next',
                        previousButtonLabel: 'Previous',
                        pageLabel: 'Page',
                        ofLabel: 'of',
                    }"
                    :search-labels="{
                        refine: 'Refine your search',
                        search: 'Search',
                        searchLabel: 'What are you looking for?',
                        searchResults: 'Search results',
                        resultsFirst: 'Showing',
                        resultsSecond: 'results',
                        noJs: 'JavaScript needs to be enabled to see search result. You can turn this on in your browser settings.',
                    }"
                    :sort-labels="{
                        dateFrom: 'From',
                        dateTo: 'To',
                        sort: 'Sort by',
                        sortOptions: [
                            {
                                key: 'dateAsc',
                                label: 'Date',
                            },
                            {
                                key: 'priceAsc',
                                label: 'Price',
                            },
                        ],
                    }"
                />
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
                    heading="Scotland at night"
                    description="Ready to experience the magic of Scotland after dark? Watch the star-filled skies light up iconic landscapes and ancient sites. From the Isle of Coll to Galloway, discover the best dark sky spots – your gateway to the galaxy."
                    imageSrc="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/10/04/dark-skies-loch-morlich?size=lg"
                    ctaLink="#"
                    ctaText="Discover stargazing in Scotland"
                />
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    
    <!------------------------------------------------------------
    NEW SECTION - Section header + map
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Uncover Scotland's regions"
    >
        <template v-slot:section-header-lede>
            <p>From the rugged coastline to sparkling city lights, the ancient Caledonian forests of the Highlands to the rich history of the Lowlands, there are plenty of places to start your Scottish adventure.</p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol>
                <div style="background: #E3FCFC; padding: 5rem;" class="text-center">
                    <p>Map</p>
                </div>
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
        heading="Top tips for travelling to Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Planning a trip to Scotland? From practical driving advice to weather tips, entry requirements, and holiday planning, these guides will help you prepare for a smooth and memorable visit.</p>
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
                    heading="Whatever the season"
                    description="Autumn in Scotland is stunning. With dramatic landscapes, leafy cities, mild temperatures and dark starry skies, it's the perfect destination for an autumn break."
                    imageSrc="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/09/03/lady-marys-walk?size=lg"
                    ctaLink="#"
                    ctaText="Plan your autumn trip"
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
        heading="Not sure where to start?"
    >
        <template v-slot:section-header-lede>
            <p>Step into a land steeped in history and legend, explore our dramatic landscapes and uncover our ancient Celtic roots. Vast lochs, glens and Munros - easily accessible from our vibrant cities and towns - make Scotland the perfect place to lose yourself.</p>
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
    NEW SECTION - Section header + event card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Unmissable events in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Events in Scotland have the power to amaze and inspire you. Our atmospheric crowds, iconic venues and picture-perfect landscapes play host to everything from concerts to sporting tournaments.</p>
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
                        v-for="(card, index) in eventCardList"
                        :key="'card-list-event-' + index"
                    >
                        <template #vs-card-header>
                            <div class="position-relative">
                                <VsImg
                                    v-if="card.image"
                                    :src="card.image"
                                    class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                                />
                                <div class="position-absolute bottom-0 start-0 d-flex gap-2">
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
