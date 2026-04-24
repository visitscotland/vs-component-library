import linkCardCarousel from '../../partials/linkCardCarousel';

export default `
    <VsPageHeader menu-type="b2b">
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
                                text="Advice and Support"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template #heroSection>
            <VsContainer>
                <VsRow>
                    <VsCol>
                        <VsHeroSection
                            heading="Advice and Support"
                            lede="Check out our how to articles and case studies on everything from digital channels to travel distribution."
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <VsContainer class="mt-500">
        <VsRow>
            <VsCol>
                <VsSpotlightSection 
                    heading="Support by sector"
                    description="Find tailored advice and case studies for accommodation, active and outdoor, events and festivals, food and drink and visitor attraction sectors."
                    imageSrc="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/20-jan/cairnie-fruit-farm"
                    ctaLink="#"
                    ctaText="Find sector support"
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
        heading="Advice for each stage of your journey"
    >
        <template v-slot:section-header-lede>
            <p>Whatever stage you're at - whether you just have an idea, or you've been welcoming customers for over 20 years, there's always room for sustainable growth.</p>
        </template>
    </VsSectionHeader>

    ${linkCardCarousel({
        cardsVar: 'textCardList1',
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
                    heading="Sustainability"
                    description="Sustainably grow your tourism or events business with actionable green strategies."
                    imageSrc="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/12-mar/loch-affric"
                    ctaLink="#"
                    ctaText="Explore sustainability"
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
        heading="Related pages"
    >
    </VsSectionHeader>

    ${linkCardCarousel({
        cardsVar: 'textCardList2',
        cardsKey: '2',
        slidesPerViewXl: 4.4,
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <VsContainer class="mt-500 mb-500">
        <VsRow>
            <VsCol>
                <VsSpotlightSection 
                    heading="Sign up for the latest advice"
                    description="Get expert tips, case studies, and business advice straight to your inbox with our monthly Business Support newsletter."
                    ctaLink="#"
                    ctaText="Join the newsletter"
                    compact
                />
            </VsCol>   
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>          
`;
