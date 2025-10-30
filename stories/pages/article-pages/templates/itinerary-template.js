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
            <VsHeroSection
                heading="A Week of Whisky, Walks & Wonders in East Scotland"
                lede="Want a real flavour of Scotland? Coastlines and castles, beaches and breweries, cathedrals and cashmere, whisky and walks; all this lies ahead of you (and much more)."
                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/12/dunnottar-castle?size=lg"
                img-caption="Dunnottar Castle"
                img-credit="VisitScotland"
                inset
            />
        </template>
    </VsPageHeader>

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
                    7 Days in the East of Scotland
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody class="mb-175">
                    <p>
                        Taking in a range of cities and towns, stretching from Edinburgh to Aberdeen, you can explore St Andrews, Dundee, Pitlochry and more. You'll also explore miles of countryside, weave through rural communities and even journey through one of our National Parks! Are you ready to tour the north east coast of Scotland?
                    </p>
                </VsBody>

                <VsPanel>
                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                        no-margins
                        class="mb-125"
                    >
                        Trip highlights
                    </VsHeading>

                    <div class="d-flex justify-content-between align-items-end">
                        <div class="d-flex align-items-center">
                            <VsIcon
                                icon="fa-regular fa-calendar-range"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="tertiary"
                                class="me-300"
                            >
                                6 days
                            </VsDetail>

                            <VsIcon
                                icon="fa-regular fa-taxi"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="tertiary"
                                class="me-300"
                            >
                                Car
                            </VsDetail>

                            <VsIcon
                                icon="fa-regular fa-route"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="tertiary"
                                class="me-300"
                            >
                                295 miles (472km)  
                            </VsDetail>

                            <VsIcon
                                icon="fa-regular fa-binoculars"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="tertiary"
                                class="me-300"
                            >
                                Sightseeing
                            </VsDetail>
                        </div>
                    </div>
                </VsPanel>
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
                    Day 1 - Highlights of Scotland's capital
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Content block ------->
                <div class="mb-400">
                    <VsBody class="mb-175">
                        <p>
                            Edinburgh, Scotland's historic capital city, is bound to leave an impression on you. You could easily spend weeks discovering its many fantastic attractions, hidden gems and vibrant cultural scene. Today's stops will give you a real feel for this beautiful city's unique character, fascinating past and unbridled charm.
                        </p>
                    </VsBody>

                    <div class="d-flex justify-content-between align-items-end mb-400">
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
                                icon="fa-regular fa-taxi"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="secondary"
                                class="me-300"
                            >
                                Walk or bus
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
                                70 miles (112km)  
                            </VsDetail>
                        </div>
                    </div>
                
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2023/08/28/edinburgh-castle?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header -------> 
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s"
                                level="3"
                                no-margins
                            >
                                Edinburgh Castle
                            </VsHeading>
                            <VsDetail>
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content -------> 
                    <VsBody class="mb-150">
                        <p>
                            Towering over the city, you won't be able to miss Edinburgh Castle. As well as offering spectacular views of the skyline, it's home to the Scottish Crown Jewels and the Stone of Destiny. On your visit, uncover Scotland's military history in the National War Museum and take in the haunting National War Memorial. Once you've explored the castle, wander down the Royal Mile to take in this famous thoroughfare - it's lined with an eclectic range of shops, pubs, eateries and historic closes, and you can also find St Giles' Cathedral in the middle and the Palace of Holyroodhouse at the bottom of the street.
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Plan your trip to the castle
                    </VsButton>
                </div>


                <!------- Content block ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/02/12/60285-national-museum-of-scotland-large.jpg?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header -------> 
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s" 
                                level="3"
                                no-margins
                            >
                                National Museum of Scotland
                            </VsHeading>
                            <VsDetail>
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content -------> 
                    <VsBody class="mb-150">
                        <p>
                            Not only is the National Museum of Scotland free to visit and full of thousands of incredible objects, the building is an architectural masterpiece that should not be missed by fans of design. Take in the vast airy space of the Grand Gallery before moving into the galleries on art, design and science, which covers everything from Dolly the Sheep, a marvel of genetics, to the couture fashions of the late Vivienne Westwood, and Alexander McQueen. There are also fantastic temporary exhibitions to see. It's a real treasure trove!
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Discover the National Museum of Scotland
                    </VsButton>
                </div>


                <!------- Content block ------->
                <div>
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/06/30/301/calton-hill-evening?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header ------->
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s" 
                                level="3"
                                no-margins
                            >
                                Calton Hill and the National Monument
                            </VsHeading>
                            <VsDetail>
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content ------->
                    <VsBody class="mb-150">
                        <p>
                            Edinburgh is a city best explored on foot, and for budding photographers or those keen to admire the stunning cityscape, it's time to head to Calton Hill to enjoy great views in the lingering light of the late afternoon. You'll see the National Monument, and art lovers can also pop into the Collective Gallery, one of the city's many art galleries. Afterwards, if you are ready for dinner, you could catch the tram to the Leith area of the city. It's one of the trendiest neighbourhoods in the UK and boasts three Michelin-star restaurants. Alternatively, wander along Princes Street or George Street to the city's West End.
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Walk up Calton Hill
                    </VsButton>
                </div>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>



    <!------------------------------------------------------------
    NEW SECTION - Section header + new card group ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-300"
        heading="Explore places to stay"
    >
        <template v-slot:section-header-lede>
            <p>Liking the look of the itinerary? Why not make it even better by finding the perfect place to stay nearby?</p>
        </template>
    </VsSectionHeader>

    <VsContainer class="mb-500">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap
                    :cards-per-row="4"
                    class="text-start"
                >
                    <VsCard
                        v-for="(card, index) in cardList4"
                        :key="'card-list-4-' + index"
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
                    Day 2 - Explore Fife & St Andrews
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Content block ------->
                <div class="mb-400">
                    <VsBody class="mb-175">
                        <p>
                            Leave Edinburgh and venture out into the Kingdom of Fife, taking the Queensferry Crossing. Look out for the remarkable structure of the Forth Bridge, a UNESCO World Heritage Site, and the Forth Road Bridge. Follow the brown signs for the Fife Coastal Route to take in the sparkling coastline and the picturesque villages of the East Neuk.
                        </p>
                    </VsBody>

                    <div class="d-flex justify-content-between align-items-end mb-400">
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
                                icon="fa-regular fa-taxi"
                                variant="secondary"
                                class="me-050"
                                size="sm"
                            />
                            <VsDetail
                                no-margins 
                                color="secondary"
                                class="me-300"
                            >
                                Walk or bus
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
                                70 miles (112km)  
                            </VsDetail>
                        </div>
                    </div>
                
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/04/041/pittenween-fishing-village-cottage?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header -------> 
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s"
                                level="3"
                                no-margins
                            >
                                The villages of the East Neuk of Fife
                            </VsHeading>
                            <VsDetail>
                                Pittenweem
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content -------> 
                    <VsBody class="mb-150">
                        <p>
                            The East Neuk refers to a scattering of quaint fishing villages in the north east corner of Fife. With curious winding streets, ancient stone harbours, and original white-washed fisherman's cottages, they make the perfect place to stop, breathe in the sea air, and perhaps grab a refreshing cup of tea or coffee.
                        </p>

                        <p>
                            In Pittenweem, wander to the pier to see colourful bobbing boats, or walk up Cove Wynd to find the tiny St Fillan's Cave, said to have been used as a chapel by the saint in the eighth century. Head to Anstruther to try famous fish and chips, before visiting the town's Scottish Fisheries Museum. It's here that you can hop on board The Reaper, a Fife sailing herring drifter featured in the TV series Outlander (access available by prior arrangement).
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Explore the East Neuk
                    </VsButton>
                </div>


                <!------- Content block ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/01/st-andrews-west-sands?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header -------> 
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s" 
                                level="3"
                                no-margins
                            >
                                St Andrews West Sands and Town Centre
                            </VsHeading>
                            <VsDetail>
                                St Andrews
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content -------> 
                    <VsBody class="mb-150">
                        <p>
                            Next, head to beautiful St Andrews, a historic university town. Work up an appetite before lunch with a bracing stroll along the town's iconic West Sands - a long, flat beach famously featured in Chariots of Fire (1981). West Sands lines the town's world-famous golf courses and lying not far from the south end of the beach is the famous Swilcan Bridge on the Old Course.
                        </p>

                        <p>
                            Wander through the streets of the town and you'll find a range of boutique shops, cosy pubs, cafés and restaurants, as well as the ancient university campus, St Andrews Cathedral and St Andrews Castle.
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Visit St Andrews
                    </VsButton>
                </div>


                <!------- Content block ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/wsimgs/distillery_edit_1097016301.jpg?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />

                    <!------- Content block header ------->
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-s" 
                                level="3"
                                no-margins
                            >
                                Eden Mill Distillery & Brewery
                            </VsHeading>
                            <VsDetail>
                                Guardbridge
                            </VsDetail>
                        </VsCol>

                        <VsCol 
                            cols="12" 
                            md="4" 
                            class="text-end d-flex flex-wrap justify-content-end gap-050"
                        >
                            <VsTooltip
                                title="Wifi available"
                                href="#"
                                icon="vs-icon-facility-wifi"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wifi available
                            </VsTooltip>
                            <VsTooltip
                                title="Pets welcome"
                                href="#"
                                icon="vs-icon-facility-pets-welcome"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Pets welcome
                            </VsTooltip>
                            <VsTooltip
                                title="Parking"
                                href="#"
                                icon="vs-icon-facility-parking"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Parking
                            </VsTooltip>
                            <VsTooltip
                                title="Wheelchair accessible"
                                href="#"
                                icon="vs-icon-facility-wheelchair-access"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Wheelchair accessible
                            </VsTooltip>
                            <VsTooltip
                                title="Audio loop available"
                                href="#"
                                icon="vs-icon-facility-audio-loop"
                                size="sm"
                                icon-only
                                variant="subtle"
                            >
                                Audio loop available
                            </VsTooltip>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block content ------->
                    <VsBody class="mb-150">
                        <p>
                            If you fancy trying a local tipple, then book a late afternoon tour at Eden Mill Distillery & Brewery, just a 10 minute drive from St Andrews' town centre. Producing craft beer, small-batch gin and Scotch whisky, there's bound to be the perfect tour to match your palate.
                        </p>
                        <p>
                            Perhaps you'll fall head over heels for the Love Gin, or enjoy a fusion of flavours as you sample the whisky barrel beer (but remember: it's against the law to drink and drive). From Eden Mill, head north and take the Tay Bridge across the waters of the silvery River Tay to Dundee.
                        </p>
                    </VsBody>

                    <VsButton
                        href="#"
                        variant="secondary"
                    >
                        Find out more about Eden Mill Distillery & Brewery
                    </VsButton>
                </div>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
