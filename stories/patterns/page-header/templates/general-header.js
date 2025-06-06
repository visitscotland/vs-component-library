export default `
    <VsPageHeader>
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
                                text="Advice and Support"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Improve your business"
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
            />
        </template>
    </VsPageHeader>

    <VsMegalinks
        title="Uncover Scotland's regions"
        variant="single-image"
        theme="grey"
    >
        <template #vs-megalinks-intro>
            <p>
                From the rugged coastline to sparkling city lights,
                the ancient Caledonian forests of the Highlands to the
                rich history of the Lowlands, there are plenty of places
                to start your Scottish adventure.
            </p>
        </template>

        <VsCol cols="12">
            <VsMegalinkSingleImage
                title="Where will you explore?"
            >
                <template #vs-single-image>
                    <VsImageWithCaption
                        mobile-overlap
                        image-src="./fixtures/megalinks/illustrated-map-of-scotland.jpg"
                    >
                        <template #img-caption>
                            <VsCaption text-align="right">
                                <template #caption>
                                    Map of Scotland
                                </template>

                                <template #credit>
                                    @2023 VisitScotland
                                </template>
                            </VsCaption>
                        </template>
                    </VsImageWithCaption>
                </template>
                <template #vs-single-image-content>
                    <p>
                        From the rugged coastline to sparkling city lights,
                        the ancient Caledonian forests of the Highlands to the rich history
                        of the Lowlands, there are plenty of places to start
                        your Scottish adventure.
                    </p>
                </template>
                <template #vs-single-image-links>
                    <VsLinkListItem href="#">
                        14 Places You Must Visit in 2023
                    </VsLinkListItem>
                    <VsLinkListItem href="#">
                        Top Attractions
                    </VsLinkListItem>
                </template>
            </VsMegalinkSingleImage>
        </VsCol>
    </VsMegalinks>
`;
