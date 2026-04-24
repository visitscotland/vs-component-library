import linkCardCarousel from '../../partials/linkCardCarousel';

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
            <VsContainer>
                <VsRow>
                    <VsCol>
                        <VsHeroSection
                            heading="Sustainability"
                            lede="Sustainably grow your tourism or events business with actionable green strategies."
                            img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/12/06/suidhe-viewpoint?size=lg"
                            img-caption="Suidhe Viewpoint"
                            img-credit="VisitScotland"
                            inset
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>
    </VsPageHeader>

    <!------------------------------------------------------------
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Understand sustainability"
    >
        <template v-slot:section-header-lede>
            <p>
                Scotland's natural beauty, rich heritage, and vibrant communities make it a world-class destination — but with this comes the responsibility to protect it for future generations. As a tourism business, you play a vital role in shaping a more sustainable industry, ensuring visitors enjoy Scotland's wonders while minimising environmental impact and supporting local communities.
            </p>
        </template>
    </VsSectionHeader>

    ${linkCardCarousel({
        cardsVar: 'infoCardList1',
        cardsKey: '1',
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="How to develop your sustainability journey"
    >
        <template v-slot:section-header-lede>
            <p>
                Step-by-step guidance to help you measure your impact, create an action plan, and make meaningful improvements to your business.
            </p>
        </template>
    </VsSectionHeader>

    ${linkCardCarousel({
        cardsVar: 'infoCardList2',
        cardsKey: '2',
        slidesPerViewXl: 3.4,
    })}

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    
    <!------------------------------------------------------------
    NEW SECTION - Video highlight
    ------------------------------------------------------------>

    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Watch our climate action workbook webinar"
    >
        <template v-slot:section-header-lede>
            <p>
                Join Tiomóid Foley, our Responsible Tourism - Net Zero Manager, to learn more about our climate action workbook in this webinar.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol>
                <VsVideo 
                    video-id="Nz2iwpqsPlI"
                    error-message="Sorry, something's gone wrong. Please try again later"
                    no-js-message="You need Javascript enabled to see this video"
                    no-cookies-message="You need cookies enabled to see this video"
                    cookie-btn-text="Manage cookies"
                />
                <VsMediaCaption 
                    video-id="Nz2iwpqsPlI"
                >
                    <template v-slot:caption>
                        A promotional film inviting viewers to rediscover Scotland's landscapes and culture.
                    </template>
                </VsMediaCaption>
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
        heading="Guidance for sustainable tourism"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore practical resources, tips, and tools to support long-term sustainability across your tourism operations and promotions.
            </p>
        </template>
    </VsSectionHeader>

    ${linkCardCarousel({
        cardsVar: 'infoCardList3',
        cardsKey: '3',
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
    NEW SECTION - Section header + card carousel
    ------------------------------------------------------------>

    <VsSectionHeader 
        class="mb-200 mb-xl-300"
        heading="Related pages"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore more guidance, tools and insights to support your tourism business. These pages offer practical advice tailored to different sectors and stages of growth.
            </p>
        </template>
    </VsSectionHeader>

    <div class="mb-500">
        ${linkCardCarousel({
            cardsVar: 'infoCardList4',
            cardsKey: '4',
            slidesPerViewXl: 4.4,
        })}
    </div>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
