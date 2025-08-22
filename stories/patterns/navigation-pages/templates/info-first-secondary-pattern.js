export default `
    <VsComponents/NavigationPage>
        <template v-slot:breadcrumb>
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
                                text="Advice and support"
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

        <template v-slot:heroSection>
            <VsHeroSection
                :heading="args.pageTitle"
                :lede="args.pageLede"
                :img-src="args.imgUrl"
                :img-caption="args.imgCaption"
                :img-credit="args.imgCredit"
            />
        </template>

        <template v-slot:content>
            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper>
                <template v-slot:vs-module-wrapper-heading>
                    Understand sustainability
                </template>
                <template v-slot:vs-module-wrapper-intro>
                    <p>
                        Scotland's natural beauty, rich heritage, and vibrant communities make it a world-class destination — but with this comes the responsibility to protect it for future generations. As a tourism business, you play a vital role in shaping a more sustainable industry, ensuring visitors enjoy Scotland's wonders while minimising environmental impact and supporting local communities.
                    </p>
                </template>

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
            </VsModuleWrapper>

            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper theme="grey">
                <template v-slot:vs-module-wrapper-heading>
                    How to develop your sustainability journey
                </template>

                <template v-slot:vs-module-wrapper-intro>
                    <p>
                        Step-by-step guidance to help you measure your impact, create an action plan, and make meaningful improvements to your business.
                    </p>
                </template>

                <VsContainer>
                    <VsRow>
                        <VsCol>
                            <VsCardGroup
                                scroll-snap
                                :cards-per-row="4"
                                class="text-start mt-150"
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
            </VsModuleWrapper>

            
            <!------------------------------------------------------------
            FEATURED LINK - Module spacing come from the megalinks wrapper
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
                                :is-video-modal="true"
                            >
                                <VsRow>
                                    <VsCol cols="12">
                                        <VsVideo
                                            video-id="Nz2iwpqsPlI"
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
            </VsMegalinks>


            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper theme="grey">
                <template v-slot:vs-module-wrapper-heading>
                    Guidance for sustainable tourism
                </template>

                <template v-slot:vs-module-wrapper-intro>
                    <p>
                        Explore practical resources, tips, and tools to support long-term sustainability across your tourism operations and promotions.
                    </p>
                </template>

                <VsContainer>
                    <VsRow>
                        <VsCol>
                            <VsCardGroup
                                scroll-snap
                                :cards-per-row="4"
                                class="text-start mt-150"
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
            </VsModuleWrapper>

            

            <!------------------------------------------------------------
            MEGALINKS MULTI VIDEO - Module spacing come from the megalinks wrapper
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
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper theme="grey">
                <template v-slot:vs-module-wrapper-heading>
                    Related pages
                </template>

                <VsContainer>
                    <VsRow>
                        <VsCol>
                            <VsCardGroup
                                scroll-snap
                                :cards-per-row="4"
                                class="text-start mt-150"
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
            </VsModuleWrapper>

        </template>
    </VsComponents/NavigationPage>
`;
