import splitCardCarousel from '../../partials/splitCardCarousel';
import overlayCardCarousel from '../../partials/overlayCardCarousel';
import eventCardCarousel from '../../partials/eventCardCarousel';

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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Join the journey to change"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore our resources, training and expert advice to help your organisation grow, adapt and make a positive impact.
            </p>
        </template>
    </VsSectionHeader>

    ${overlayCardCarousel({
        cardsVar: 'cardListInfoOverlay',
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Develop your digital skills "
    >
        <template v-slot:section-header-lede>
            <p>
                Discover practical guides and resources to help you inspire and engage customers on your digital marketing channels.
            </p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'infoCardList1',
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Whats new?"
    >
        <template v-slot:section-header-lede>
            <p>Stay up to date with the latest business support, advice, case studies and updates from across Scotland's tourism industry.</p>
        </template>
    </VsSectionHeader>

    ${splitCardCarousel({
        cardsVar: 'infoCardList2',
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
            <p>
                Explore upcoming seminars, training sessions and industry events across Scotland. From travel trade showcases to practical workshops, find opportunities to learn, connect and grow your business.
            </p>
        </template>
    </VsSectionHeader>

    <div class="mb-500">
        ${eventCardCarousel({
            cardsVar: 'eventCardInfoList',
            cardsKey: 'event',
        })}
    </div>
    <!-----------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
