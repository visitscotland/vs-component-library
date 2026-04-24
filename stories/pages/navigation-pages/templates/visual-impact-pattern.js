import splitCardCarousel from '../../partials/splitCardCarousel';
import overlayCardCarousel from '../../partials/overlayCardCarousel';

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
    NEW SECTION - Section header + card carousel (Overlay)
    ------------------------------------------------------------>
    <div class="mt-300">
        ${overlayCardCarousel({
            cardsVar: 'cardListOverlay',
        })}
    </div>

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
    
    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel (4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Top things to do and experience in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Explore the top things to do in Scotland, including must-see attractions, exciting experiences, and inspiring ways to enjoy the outdoors.</p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'cardList1',
        cardsKey: '1',
        slidesPerViewXl: 4.4,
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


     <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel ( 3cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Captivating Scottish events"
    >
        <template v-slot:section-header-lede>
            <p>Discover new musicians you'll love forever, watch incredible athletes compete for gold or spend some time with the locals at authentic community events. It's a packed calendar all year round!</p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'cardList2',
        cardsKey: '2',
        slidesPerViewXl: 3.4,
    })}

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
                    heading="Slow travel and wellness retreats"
                    description="Slow down and explore Scotland's breathtaking scenery. Unplug, find moments of wellness, and savour every experience."
                    imageSrc="fixtures/hero/images/lavendar-fields.jpg"
                    ctaLink="#"
                    ctaText="Explore slow travel adventures"
                >
                    <template #vs-spotlight-section-media>
                        <VsVideo
                            ref="spotlightVideo"
                            video-type="html5"
                            poster-image-src="fixtures/hero/images/lavendar-fields.jpg"
                            video-src="fixtures/hero/video/lavendar-fields.mp4"
                            :show-toggle="false"
                            video-id="spotlight-video"
                            :lazy-load="true"
                        />
                    </template>

                    <template #vs-spotlight-section-overlay-controls>
                        <VsToggleButton
                            v-if="!isReducedMotion"
                            variant="overlay"
                            icon="vs-icon-control-pause"
                            pressed-icon="vs-icon-control-play"
                            label="Pause video"
                            pressed-label="Play video"
                            aria-controls="spotlight-video"
                            @click="(val) => toggleVideo('spotlightVideo')"
                        />
                    </template>
                </VsSpotlightSection>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Magical places to visit"
    >
        <template v-slot:section-header-lede>
            <p>Make new memories at some of our most popular attractions, uncover incredible film locations, or get up and close with Scotland's stunning landscapes and wildlife.</p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'cardList3',
        cardsKey: '3',
        slidesPerViewXl: 4.4,
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel ( 3 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Plan your trip"
    >
        <template v-slot:section-header-lede>
            <p>
                Choose from inspiring tours and itineraries to help you make the most of your time in Scotland — whether it's a road trip, city break or scenic adventure.
            </p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'cardList5',
        cardsKey: '5',
        slidesPerViewXl: 3.4,
    })}

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
    NEW SECTION - Section header + card carousel ( 4 cards)
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

    ${splitCardCarousel({
        cardsVar: 'cardList6',
        cardsKey: '6',
        slidesPerViewXl: 4.4,
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
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

    <div class="mb-500">
        ${splitCardCarousel({
            cardsVar: 'cardList4',
            cardsKey: '4',
            slidesPerViewXl: 4.4,
        })}
    </div>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
