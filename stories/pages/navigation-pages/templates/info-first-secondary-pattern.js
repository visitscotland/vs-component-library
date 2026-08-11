import linkCardContentSwiper from '../../../story-partials/linkCardContentSwiper';

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
    NEW SECTION - Section header + content swiper
    ------------------------------------------------------------>
    <section class="mt-500">
        <VsSectionHeader
            class="mb-200 mb-xl-300"
            heading="Understand sustainability"
        >
            <template v-slot:section-header-lede>
                <p>
                    Scotland's natural beauty, rich heritage, and vibrant communities make it a world-class destination — but with this comes the responsibility to protect it for future generations. As a tourism business, you play a vital role in shaping a more sustainable industry, ensuring visitors enjoy Scotland's wonders while minimising environmental impact and supporting local communities.
                </p>
            </template>
        </VsSectionHeader>

        ${linkCardContentSwiper({
    slidesVar: 'infoCardList1',
    slidesKey: '1',
    slidesPerViewXl: 3.4,
})}
    </section>

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <section class="mt-500">
        <VsContainer>
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
    </section>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + content swiper
    ------------------------------------------------------------>
    <section class="mt-500">
        <VsSectionHeader
            class="mb-200 mb-xl-300"
            heading="How to develop your sustainability journey"
        >
            <template v-slot:section-header-lede>
                <p>
                    Step-by-step guidance to help you measure your impact, create an action plan, and make meaningful improvements to your business.
                </p>
            </template>
        </VsSectionHeader>

        ${linkCardContentSwiper({
    slidesVar: 'infoCardList2',
    slidesKey: '2',
    slidesPerViewXl: 3.4,
})}
    </section>

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    
    <!------------------------------------------------------------
    NEW SECTION - Video highlight
    ------------------------------------------------------------>

    <section class="mt-500">
        <VsSectionHeader
            class="mb-200 mb-xl-300"
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
    </section>
    
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
    
    
    <!------------------------------------------------------------
    NEW SECTION - Section header + content swiper
    ------------------------------------------------------------>
    <section class="mt-500">
        <VsSectionHeader
            class="mb-200 mb-xl-300"
            heading="Guidance for sustainable tourism"
        >
            <template v-slot:section-header-lede>
                <p>
                    Explore practical resources, tips, and tools to support long-term sustainability across your tourism operations and promotions.
                </p>
            </template>
        </VsSectionHeader>

    ${linkCardContentSwiper({
    slidesVar: 'infoCardList3',
    slidesKey: '3',
    slidesPerViewXl: 3.4,
})}
    </section>

    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - Spotlight section
    ------------------------------------------------------------>
    <section class="mt-500">
        <VsContainer>
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
    </section>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    Video swiper
    ------------------------------------------------------------>
    
    <section class="mt-500">
        <VsSectionHeader
            class="mb-200 mb-xl-300"
            heading="Climate action case studies"
        >
            <template v-slot:section-header-lede>
                <p>
                    Watch our video case studies to learn the different ways Scottish tourism businesses are embracing sustainability to combat climate change.
                </p>
            </template>
        </VsSectionHeader>

        <VsContentSwiper
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            slidesPerViewLg="2.4"
        >
            <VsContentSwiperSlide>
                <figure class="w-100">
                    <VsVideo 
                        video-id="mKfYMgunKmU"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                    />
                    <figcaption>
                        <VsMediaCaption 
                            video-id="mKfYMgunKmU"
                        >
                            <template v-slot:caption>
                                Glen Mhor Hotel & Apartments and Distillery talk through their approach to creating a sustainable business.
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsContentSwiperSlide>

            <VsContentSwiperSlide>
                <figure class="w-100">
                    <VsVideo 
                        video-id="MvRTuU9nf6g"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                    />
                    <figcaption>
                        <VsMediaCaption 
                            video-id="MvRTuU9nf6g"
                        >
                            <template v-slot:caption>
                                Learn how Wilderness Scotland has adapted their business to prioritise sustainability.
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsContentSwiperSlide>

            <VsContentSwiperSlide>
                <figure class="w-100">
                    <VsVideo 
                        video-id="MvRTuU9nf6g"
                        error-message="Sorry, something's gone wrong. Please try again later"
                        no-js-message="You need Javascript enabled to see this video"
                        no-cookies-message="You need cookies enabled to see this video"
                        cookie-btn-text="Manage cookies"
                    />
                    <figcaption>
                        <VsMediaCaption 
                            video-id="MvRTuU9nf6g"
                        >
                            <template v-slot:caption>
                                Find out how The Scottish Crannog Centre have put sustainability at the heart of their business.
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsContentSwiperSlide>
        </VsContentSwiper>
    </section>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + content swiper
    ------------------------------------------------------------>

    <section class="mt-500 mb-500">
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

    ${linkCardContentSwiper({
    slidesVar: 'infoCardList4',
    slidesKey: '4',
    slidesPerViewXl: 4.4,
})}
    </section>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
