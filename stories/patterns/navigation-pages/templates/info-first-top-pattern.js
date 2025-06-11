export default `
    <VsNavigationPage>
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
            FEATURED LINK - Module spacing come from the megalinks wrapper
              ------------------------------------------------------------>
            <VsMegalinks 
                variant="multi-image" 
                theme="grey"
            >
                <VsContainer>
                    <VsRow>
                        <VsCol cols="12" xl="10" class="offset-xl-1">
                            <VsMegalinkMultiImage
                                theme="grey"
                                :featured="true"
                                img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/20-jan/cairnie-fruit-farm"
                                link-type="internal"
                                link-url="#"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    Support by sector
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>Find tailored advice and case studies for accommodation, active and outdoor, events and festivals, food and drink and visitor attraction sectors.</p>
                                </template>
                            </VsMegalinkMultiImage>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsMegalinks>

            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper>
                <template v-slot:vs-module-wrapper-heading>
                    Advice for each stage of your journey
                </template>
                <template v-slot:vs-module-wrapper-intro>
                    <p>Whatever stage you're at - whether you just have an idea, or you've been welcoming customers for over 20 years, there's always room for sustainable growth.</p>
                </template>

                <VsContainer>
                    <VsRow>
                        <VsCol>
                            <VsCardGroup
                                scroll-snap
                                :cards-per-row="4"
                                class="text-start"
                            >
                                <VsCard
                                    v-for="(card, index) in textCardList1"
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
                                        <div class="px-125 py-050">
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
                                        <VsBlogDetails
                                            v-if="card.metaData"
                                            class="px-125"
                                            :blog-read-time="card.metaData"
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
                variant="multi-image" 
                theme="grey"
            >
                <VsContainer>
                    <VsRow>
                        <VsCol cols="12" xl="10" class="offset-xl-1">
                            <VsMegalinkMultiImage
                                theme="grey"
                                :featured="true"
                                img-src="https://support.visitscotland.org/binaries/content/gallery/bsh/cms-images/12-mar/loch-affric"
                                link-type="internal"
                                link-url="#"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    Sustainability
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>Sustainably grow your tourism or events business with actionable green strategies.</p>
                                </template>
                            </VsMegalinkMultiImage>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsMegalinks>


            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper>
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
                                    v-for="(card, index) in textCardList2"
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
                                        <div class="px-125 py-050">
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
                                        <VsBlogDetails
                                            v-if="card.metaData"
                                            class="px-125"
                                            :blog-read-time="card.metaData"
                                        />
                                    </template>
                                </VsCard>
                            </VsCardGroup>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsModuleWrapper>

        </template>
    </VsNavigationPage>
`;
