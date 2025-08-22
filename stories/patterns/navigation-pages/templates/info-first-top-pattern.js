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

            <VsContainer>
                <VsRow>
                    <VsCol class="mt-500">
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
            <VsContainer>
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

            <VsContainer>
                <VsRow>
                    <VsCol class="mb-500">
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

        </template>
    </VsComponents/NavigationPage>
`;
