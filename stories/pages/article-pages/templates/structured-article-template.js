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
                            heading="7 Easy hill walks with amazing views"
                            lede="Here are some Scotland's smaller sized hills you can fit into a day or afternoon, all measuring approximately 500 m and under."
                            img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/08/kinnoull-hill-and-tower?size=lg"
                            img-caption="Kinnoull Hill and Tower"
                            img-credit="© VisitScotland / Kenny Lam"
                            inset
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>
    </VsPageHeader>

    <VsContainer>
        <VsRow class="mt-150">
            <VsCol cols="12">
                <VsPanel>
                    <VsHeading 
                        heading-style="heading-xxs" 
                        level="2"
                        no-margins
                        class="mb-125"
                        variant=""
                    >
                        Info
                    </VsHeading>
                    <VsBody>
                        <p>
                            The following list was created by VisitScotland to showcase a range of experiences. It isn't ranked in any specific order.
                        </p>
                    </VsBody>
                </VsPanel>
            </VsCol>
        </VsRow>
    </VsContainer>


   <!------------------------------------------------------------
    NEW SECTION - Two col content section
    ------------------------------------------------------------>
    <VsContainer>
        <VsRow class="mt-500">
            <!-- First col: Section heading -->
            <VsCol
                cols="12"
                lg="4"
            >
                <VsHeading
                    level="2"
                    heading-style="heading-l"
                    no-margins
                    class="mb-175 mb-lg-0"
                >
                    Corstorphine Hill, Edinburgh
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Content block ------->
                <VsBody class="mb-175">
                    <p>
                        A labyrinth of hill paths leads high above the leafy suburbs to the west of Edinburgh. As you climb higher, you’ll reach the outskirts of a golf course which reveals sweeping views of the capital. Continue along the high metal boundary of Edinburgh Zoo while keeping your ears and eyes peeled for cries and glimpses of the zoo’s exotic creatures. The Rest and Be Thankful viewpoint bench marks the end of the trail. The view below is the same which features in Robert Louis Stevenson’s novel Kidnapped.
                    </p>
                </VsBody>

                <div class="d-flex justify-content-between align-items-end mb-175">
                    <div class="d-flex align-items-center">
                        <VsIcon
                            icon="fa-regular fa-calendar-range"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            1 hour 30 mins
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-person-walking"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            161 m
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-route"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            6 miles (4.5km)
                        </VsDetail>
                    </div>
                </div>
            
                <VsImg
                    src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2025/07/01/corstorphine-hill?size=lg"
                    use-lazy-loading
                    class="rounded-2 w-100 mb-175"
                />

                <VsButton
                    href="#"
                    variant="secondary"
                >
                    Explore the route to Corstorphine Hill
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Two col content section
    ------------------------------------------------------------>
    <VsContainer>
        <VsRow class="mt-500">
            <!-- First col: Section heading -->
            <VsCol
                cols="12"
                lg="4"
            >
                <VsHeading
                    level="2"
                    heading-style="heading-l"
                    no-margins
                    class="mb-175 mb-lg-0"
                >
                    Hill of Tarvit, Cupar
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Content block ------->
                <VsBody class="mb-175">
                    <p>
                        The Edwardian Hill of Tarvit Mansion is closed in the winter, but you can still enjoy the three looped pathways on its estate, including Hilltop Walk. Follow the signs for Woodland Walk and at the junction next to the wrought iron garden gate, turn right to start walking uphill. After reaching end of the woods, head up a grassy slope to the summit of Hill of Tarvit (Wemyss Hill) with a monument topped with a spire, surrounded by views of the Lammermuirs and beyond to the Cairngorms.
                    </p>
                </VsBody>

                <div class="d-flex justify-content-between align-items-end mb-175">
                    <div class="d-flex align-items-center">
                        <VsIcon
                            icon="fa-regular fa-calendar-range"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            1 hour
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-person-walking"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            210 m
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-route"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            1 mile (1.2km)
                        </VsDetail>
                    </div>
                </div>
            
                <VsImg
                    src="https://2f1a7f9478.visitscotland.net/wsimgs/Hill-of-Tarvit_917093008.jpg?size=lg"
                    use-lazy-loading
                    class="rounded-2 w-100 mb-175"
                />

                <VsButton
                    href="#"
                    variant="secondary"
                >
                    Explore the Hill of Tarvit walking trails
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Two col content section
    ------------------------------------------------------------>
    <VsContainer>
        <VsRow class="mt-500">
            <!-- First col: Section heading -->
            <VsCol
                cols="12"
                lg="4"
            >
                <VsHeading
                    level="2"
                    heading-style="heading-l"
                    no-margins
                    class="mb-175 mb-lg-0"
                >
                    Deer Hill, Carradale
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Content block ------->
                <VsBody class="mb-175">
                    <p>
                        Cnoc Nan Gabhar means ‘Rock of the Goat’ in Gaelic, but this wee hill set on a peninsula is better known as Deer Hill. True to its name, deer of all kinds are seen darting among the trees and glades including red, roe, fallow, and sika. Simply follow the red waymarkers and hug the edge of the woodland which makes up part of the Kintyre Way. As the path climbs, catch glimpses across the Kilbrannan Sound to the Isle of Arran and the peak of Ailsa Craig through the gaps in the trees. The route eventually gives way to open moorland, then a short track to the summit with its majestic view of Kintyre’s east coast.
                    </p>
                </VsBody>

                <div class="d-flex justify-content-between align-items-end mb-175">
                    <div class="d-flex align-items-center">
                        <VsIcon
                            icon="fa-regular fa-calendar-range"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            2 hours
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-person-walking"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            229 m
                        </VsDetail>

                        <VsIcon
                            icon="fa-regular fa-route"
                            variant="secondary"
                            class="me-050"
                            size="sm"
                        />
                        <VsDetail
                            no-margins 
                            color="secondary"
                            class="me-300"
                        >
                            6 miles (5.8km)
                        </VsDetail>
                    </div>
                </div>
            
                <VsImg
                    src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2023/09/29/carradale-on-kilbrannan-sound.jpg?size=lg"
                    use-lazy-loading
                    class="rounded-2 w-100 mb-175"
                />

                <VsButton
                    href="#"
                    variant="secondary"
                >
                    Explore the route to Deer Hill
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
