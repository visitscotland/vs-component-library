import splitCardCarousel from '../../partials/splitCardCarousel';
import overlayCardCarousel from '../../partials/overlayCardCarousel';
import eventCardCarousel from '../../partials/eventCardCarousel';

export default `
    <VsPageHeader menu-type="b2c">
        <template #heroSection>
            <VsHeroSection
                heading="Scotland, <br/>it's good for the soul"
                lede="Where history meets breathtaking beauty, and every visit feels like home."
                img-src="fixtures/hero/images/lavendar-fields.jpg"
                video-src="fixtures/hero/video/lavendar-fields.mp4"
                play-button-label="Play video"
                pause-button-label="Pause video"
            />
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Inspiration for your trip"
    >
        <template v-slot:section-header-lede>
            <p>Step into a land steeped in history and legend, explore our dramatic landscapes and uncover our ancient Celtic roots. Vast lochs, glens and Munros - easily accessible from our vibrant cities and towns - make Scotland the perfect place to lose yourself.</p>
        </template>
    </VsSectionHeader>

    ${overlayCardCarousel({
        cardsVar: 'cardListOverlay',
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + search
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
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
                <VsFedSearchInput
                    search-url="/site-search-results"
                    :labels="{
                        search: 'Search',
                        searchLabel: 'What are you looking for?',
                    }"
                    :filters="[
                        {
                            Key: 'accommodation',
                            Label: 'Accommodation',
                        },
                        {
                            Key: 'active-adventure',
                            Label: 'Active & Adventure',
                        },
                        {
                            Key: 'city-break',
                            Label: 'City Break',
                        },
                        {
                            Key: 'culture-history',
                            Label: 'Culture & History',
                        },
                        {
                            Key: 'events',
                            Label: 'Events & Festivals',
                        },
                        {
                            Key: 'family-friendly',
                            Label: 'Family Friendly',
                        },
                        {
                            Key: 'food-drink',
                            Label: 'Food & Drink',
                        },
                        {
                            Key: 'nature-outdoors',
                            Label: 'Nature & Outdoors',
                        },
                        {
                            Key: 'tours',
                            Label: 'Tours',
                        },
                        {
                            Key: 'travel-information',
                            Label: 'Travel Information',
                        },
                    ]"
                    :is-home-page="true"
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
        class="mt-500 mb-200 mb-xl-300"
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Top tips for travelling to Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Planning a trip to Scotland? From practical driving advice to weather tips, entry requirements, and holiday planning, these guides will help you prepare for a smooth and memorable visit.</p>
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Not sure where to start?"
    >
        <template v-slot:section-header-lede>
            <p>Step into a land steeped in history and legend, explore our dramatic landscapes and uncover our ancient Celtic roots. Vast lochs, glens and Munros - easily accessible from our vibrant cities and towns - make Scotland the perfect place to lose yourself.</p>
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Unmissable events in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>Events in Scotland have the power to amaze and inspire you. Our atmospheric crowds, iconic venues and picture-perfect landscapes play host to everything from concerts to sporting tournaments.</p>
        </template>
    </VsSectionHeader>

    <div class="mb-500">
        ${eventCardCarousel({
            cardsVar: 'eventCardList',
            cardsKey: 'event',
        })}
    </div>
    <!-----------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

`;
