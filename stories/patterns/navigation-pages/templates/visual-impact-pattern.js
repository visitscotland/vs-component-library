export default `
    <VsNavigationPage menuType="b2c">
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
                                text="Things to do"
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
                title="Top things to do and experience in Scotland"
                variant="multi-image"
            >
                <VsContainer>
                    <VsRow>
                        <VsCol cols="12" xl="10" class="offset-xl-1">
                            <VsMegalinkMultiImage
                                theme="light"
                                :featured="true"
                                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/08/14/stac-pollaidh-header.jpg"
                                link-type="internal"
                                link-url="#"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    Scotland's UNESCO Trail
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>The first country in the world to bring together 16 UNESCO sites into one trail. Are you ready to discover the wonders within?</p>
                                </template>
                            </VsMegalinkMultiImage>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsMegalinks>

            <!------------------------------------------------------------
            NEW CARD GROUP - This one has no module wrapper so has spacing applied to the card group
              ------------------------------------------------------------>
            <VsContainer>
                <VsRow>
                    <VsCol>
                        <VsCardGroup
                            scroll-snap
                            :cards-per-row="3"
                            class="mb-500"
                        >
                            <VsCard
                                v-for="(card, index) in cardList1"
                                :key="'card-list-1-' + index"
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
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper theme="grey">
                <template v-slot:vs-module-wrapper-heading>
                    Captivating Scottish events
                </template>
                <template v-slot:vs-module-wrapper-intro>
                    <p>Discover new musicians you'll love forever, watch incredible athletes compete for gold or spend some time with the locals at authentic community events. It's a packed calendar all year round!</p>
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
                                    v-for="(card, index) in cardList2"
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
            </VsModuleWrapper>

            <!------------------------------------------------------------
            FEATURED LINK - Module spacing come from the megalinks wrapper
              ------------------------------------------------------------>
            <VsMegalinks variant="multi-image">
                <VsContainer>
                    <VsRow>
                        <VsCol cols="12" xl="10" class="offset-xl-1">
                            <VsMegalinkMultiImage
                                theme="light"
                                :featured="true"
                                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/05/outlander-image"
                                link-type="internal"
                                link-url="#"
                            >
                                <template v-slot:vs-multi-image-heading>
                                    Film & TV locations
                                </template>

                                <template v-slot:vs-multi-image-content>
                                    <p>This country has produced its fair share of top Hollywood names, and there have been a surprising number of movies filmed in Scotland, too.</p>
                                </template>
                            </VsMegalinkMultiImage>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </VsMegalinks>

            <!------------------------------------------------------------
            NEW SECTION & CARD GROUP - Module wrapper used for new card group heading/intro
              ------------------------------------------------------------>
            <VsModuleWrapper theme="grey">
                <template v-slot:vs-module-wrapper-heading>
                    Magical places to visit
                </template>
                <template v-slot:vs-module-wrapper-intro>
                    <p>Make new memories at some of our most popular attractions, uncover incredible film locations, or get up and close with Scotland's stunning landscapes and wildlife.</p>
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
                                    v-for="(card, index) in cardList3"
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
            </VsModuleWrapper>


            <VsMegalinks
                title="Days out ideas"
                variant="single-image"
            >
                <template #vs-megalinks-intro>
                    <p>
                        Embark on a fascinating tour or follow an itinerary to learn more as you explore, or enjoy the great outdoors on foot, two wheels or make a splash in our lochs and coastal spots.
                    </p>
                </template>

                <VsCol cols="12">
                    <VsMegalinkSingleImage
                        title="Tours & itineraries"
                    >
                        <template #vs-single-image>
                            <VsImageWithCaption
                                mobile-overlap
                                image-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/01/cawdor-castle-and-gardens"
                            >
                                <template #img-caption>
                                    <VsCaption text-align="right">
                                        <template #caption>
                                            Cawdor Castle and Gardens
                                        </template>

                                        <template #credit>
                                            © VisitScotland / Kenny Lam
                                        </template>
                                    </VsCaption>
                                </template>
                            </VsImageWithCaption>
                        </template>
                        <template #vs-single-image-content>
                            <p>
                                Our tour guides know the best and most interesting info on Scotland so sit back and enjoy these moments!
                            </p>
                        </template>
                        <template #vs-single-image-links>
                            <VsLinkListItem href="#">
                                Harry Potter film and book locations itinerary
                            </VsLinkListItem>
                            <VsLinkListItem href="#">
                                Edinburgh in 3 days - 72-hour itinerary
                            </VsLinkListItem>
                            <VsLinkListItem href="#">
                                Highland castles itinerary
                            </VsLinkListItem>
                            <VsLinkListItem href="#">
                                Tours of Scotland
                            </VsLinkListItem>
                        </template>

                        <template v-slot:vs-single-image-button-text>
                            See all itineraries
                        </template>
                    </VsMegalinkSingleImage>
                </VsCol>
            </VsMegalinks>
        </template>
    </VsNavigationPage>
`;
