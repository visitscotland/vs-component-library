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
                                text="Things to do"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Touring & Escorted Tours"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="7 Days in the east of Scotland"
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
            <!-- First col: Section heading - Itinerary day -->
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
                <!------- Itinerary intro ------->
                <VsBody class="mb-175">
                    <p>
                        Taking in a range of cities and towns, stretching from Edinburgh to Aberdeen, you can explore St Andrews, Dundee, Pitlochry and more. You'll also explore miles of countryside, weave through rural communities and even journey through one of our National Parks! Are you ready to tour the north east coast of Scotland?
                    </p>
                </VsBody>

                <div class="d-flex flex-wrap gap-125 mb-200">
                    <VsButton
                        href="#"
                        icon="fa-regular fa-binoculars"
                    >
                        View on Google Maps
                    </VsButton>

                    <VsButton
                        href="#"
                        icon="fa-regular fa-share-nodes"
                        variant="secondary"
                    >
                        Share
                    </VsButton>
                </div>

                <!------- Trip highlights panel ------->
                <VsPanel>
                    <VsContainer>
                        <VsRow class="align-items-center">
                            <VsCol cols="12" md="8" class="mb-300 mb-md-0">
                                <VsHeading 
                                    heading-style="heading-xs" 
                                    level="3"
                                    no-margins
                                    class="mb-125"
                                >
                                    Trip highlights
                                </VsHeading>

                                <div class="d-flex flex-wrap column-gap-300 row-gap-150 align-items-end">
                                    <VsDetail
                                        no-margins 
                                        color="tertiary"
                                        icon="fa-regular fa-binoculars"
                                        icon-variant="tertiary"
                                    >
                                        Sightseeing
                                    </VsDetail>

                                    <VsDetail
                                        no-margins 
                                        color="tertiary"
                                        icon="fa-regular fa-route"
                                        icon-variant="tertiary"
                                    >
                                        295 miles (472km)
                                    </VsDetail>

                                    <VsDetail
                                        no-margins 
                                        color="tertiary"
                                        icon="fa-regular fa-calendar-range"
                                        icon-variant="tertiary"
                                    >
                                        6 days
                                    </VsDetail>

                                    <VsDetail
                                        no-margins 
                                        color="tertiary"
                                        icon="fa-regular fa-taxi"
                                        icon-variant="tertiary"
                                    >
                                        Car
                                    </VsDetail>

                                    <VsDetail
                                        no-margins 
                                        color="tertiary"
                                        icon="fa-regular fa-location-dot"
                                        icon-variant="tertiary"
                                    >
                                        Edinburgh & The Lothians, Fife, Dundee & Angus
                                    </VsDetail>
                                </div>
                            </VsCol>
                            <VsCol cols="12" md="4">
                                <VsImg 
                                    src="fixtures/itineraries/images/illustrated-map.svg"
                                    alt="Illustrated map of Scotland"
                                    class="mx-auto"
                                />
                            </VsCol>
                        </VsRow>
                    </VsContainer>
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
            <!-- First col: Section heading - Itinerary day -->
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
                <!------- Itinerary day intro ------->
                <VsBody class="mb-400">
                    <p>
                        Edinburgh, Scotland's historic capital city, is bound to leave an impression on you. You could easily spend weeks discovering its many fantastic attractions, hidden gems and vibrant cultural scene. Today's stops will give you a real feel for this beautiful city's unique character, fascinating past and unbridled charm.
                    </p>
                </VsBody>       

                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2023/08/28/edinburgh-castle?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100"
                    />
                    <VsCaption theme="subtle" class="mb-175">
                        <template v-slot:caption>Caption</template>
                        <template v-slot:credit>Credit</template>
                    </VsCaption>

                    <!------- Content block header -------> 
                    <VsRow class="mb-125">
                        <VsCol
                            cols="12"
                            md="8"
                        >
                            <VsHeading 
                                heading-style="heading-xs"
                                level="3"
                                no-margins
                            >
                                Edinburgh Castle
                            </VsHeading>
                            <VsDetail size="small">
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            Towering over the city, you won't be able to miss Edinburgh Castle. As well as offering spectacular views of the skyline, it's home to the Scottish Crown Jewels and the Stone of Destiny. On your visit, uncover Scotland's military history in the National War Museum and take in the haunting National War Memorial. Once you've explored the castle, wander down the Royal Mile to take in this famous thoroughfare - it's lined with an eclectic range of shops, pubs, eateries and historic closes, and you can also find St Giles' Cathedral in the middle and the Palace of Holyroodhouse at the bottom of the street.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Plan your trip to the castle
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                National Museum of Scotland
                            </VsHeading>
                            <VsDetail size="small">
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            Not only is the National Museum of Scotland free to visit and full of thousands of incredible objects, the building is an architectural masterpiece that should not be missed by fans of design. Take in the vast airy space of the Grand Gallery before moving into the galleries on art, design and science, which covers everything from Dolly the Sheep, a marvel of genetics, to the couture fashions of the late Vivienne Westwood, and Alexander McQueen. There are also fantastic temporary exhibitions to see. It's a real treasure trove!
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Discover the National Museum of Scotland
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                Calton Hill and the National Monument
                            </VsHeading>
                            <VsDetail size="small">
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body ------->
                    <VsBody class="mb-150">
                        <p>
                            Edinburgh is a city best explored on foot, and for budding photographers or those keen to admire the stunning cityscape, it's time to head to Calton Hill to enjoy great views in the lingering light of the late afternoon. You'll see the National Monument, and art lovers can also pop into the Collective Gallery, one of the city's many art galleries. Afterwards, if you are ready for dinner, you could catch the tram to the Leith area of the city. It's one of the trendiest neighbourhoods in the UK and boasts three Michelin-star restaurants. Alternatively, wander along Princes Street or George Street to the city's West End.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Walk up Calton Hill
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>

                <!------- New structured content block: Itinerary stop ------->
                <div>
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/wsimgs/TRMKC_Bottom_of_Close_01_1655320697.jpg?size=lg"
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                Real Mary King's Close
                            </VsHeading>
                            <VsDetail size="small">
                                Edinburgh City Centre
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body ------->
                    <VsBody class="mb-150">
                        <p>
                            If you're keen to pack in one more attraction in the evening and want to find out more about the history of Edinburgh's Old Town, then take a tour of the Real Mary King's Close. Step into the past as you head below the Royal Mile to discover a warren of old streets and living and working quarters from the 17th century which have been forgotten for hundreds of years. As well as fascinating and detailed accounts of the people who occupied the close, there are also a few chilling tales to unearth - a must for any history lover or fans of the macabre! Alternatively, take a supernatural-themed walking tour to uncover more of Edinburgh's spooky side.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Experience the Real Mary King's Close
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
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
            <!-- First col: Section heading - Itinerary day -->
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
                <!------- Itinerary day intro ------->
                <VsBody class="mb-400">
                    <p>
                        Leave Edinburgh and venture out into the Kingdom of Fife, taking the Queensferry Crossing. Look out for the remarkable structure of the Forth Bridge, a UNESCO World Heritage Site, and the Forth Road Bridge. Follow the brown signs for the Fife Coastal Route to take in the sparkling coastline and the picturesque villages of the East Neuk.
                    </p>
                </VsBody>
                
                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
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
                                heading-style="heading-xs"
                                level="3"
                                no-margins
                            >
                                The villages of the East Neuk of Fife
                            </VsHeading>
                            <VsDetail size="small">
                                Pittenweem
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            The East Neuk refers to a scattering of quaint fishing villages in the north east corner of Fife. With curious winding streets, ancient stone harbours, and original white-washed fisherman's cottages, they make the perfect place to stop, breathe in the sea air, and perhaps grab a refreshing cup of tea or coffee.
                        </p>

                        <p>
                            In Pittenweem, wander to the pier to see colourful bobbing boats, or walk up Cove Wynd to find the tiny St Fillan's Cave, said to have been used as a chapel by the saint in the eighth century. Head to Anstruther to try famous fish and chips, before visiting the town's Scottish Fisheries Museum. It's here that you can hop on board The Reaper, a Fife sailing herring drifter featured in the TV series Outlander (access available by prior arrangement).
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Explore the East Neuk
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                St Andrews West Sands and Town Centre
                            </VsHeading>
                            <VsDetail size="small">
                                St Andrews
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            Next, head to beautiful St Andrews, a historic university town. Work up an appetite before lunch with a bracing stroll along the town's iconic West Sands - a long, flat beach famously featured in Chariots of Fire (1981). West Sands lines the town's world-famous golf courses and lying not far from the south end of the beach is the famous Swilcan Bridge on the Old Course.
                        </p>

                        <p>
                            Wander through the streets of the town and you'll find a range of boutique shops, cosy pubs, cafés and restaurants, as well as the ancient university campus, St Andrews Cathedral and St Andrews Castle.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Visit St Andrews
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
                <div>
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                Eden Mill Distillery & Brewery
                            </VsHeading>
                            <VsDetail size="small">
                                Guardbridge
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body ------->
                    <VsBody class="mb-150">
                        <p>
                            If you fancy trying a local tipple, then book a late afternoon tour at Eden Mill Distillery & Brewery, just a 10 minute drive from St Andrews' town centre. Producing craft beer, small-batch gin and Scotch whisky, there's bound to be the perfect tour to match your palate.
                        </p>
                        <p>
                            Perhaps you'll fall head over heels for the Love Gin, or enjoy a fusion of flavours as you sample the whisky barrel beer (but remember: it's against the law to drink and drive). From Eden Mill, head north and take the Tay Bridge across the waters of the silvery River Tay to Dundee.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Find out more about Eden Mill Distillery & Brewery
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>
            </VsCol>
        </VsRow>
    </VsContainer>
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
                    heading="Accommodation in St Andrews"
                    description="Find accommodation options and where to stay in St Andrews. From hotels and bed & breakfasts to guest houses, self catering and much more."
                    imageSrc="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/11/28/the-waterfront-at-st-andrews?size=lg"
                    ctaLink="https://www.visitscotland.com/places-to-go/st-andrews/accommodation"
                    ctaText="Find accommodation in St Andrews"
                />
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
            <!-- First col: Section heading - Itinerary day -->
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
                    Day 3 - Make Discoveries in Dundee
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <!------- Itinerary day intro ------->
                <VsBody class="mb-400">
                    <p>
                        On the third day of your trip, it's time to discover the unique offerings of Dundee, Scotland's fourth largest city. A UNESCO City of Design, Dundee is a thriving, compact place full of exciting developments and has a vibrant cultural scene. It also has a fascinating and varied history that includes textiles manufacturing, polar exploration, journalism… and marmalade!
                    </p>
                </VsBody>
                
                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2024/09/11/va-dundee.jpg?size=lg"
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
                                heading-style="heading-xs"
                                level="3"
                                no-margins
                            >
                                RRS Discovery
                            </VsHeading>
                            <VsDetail size="small">
                                Dundee City
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            Hop on board the ship which has travelled to the ends of the earth and back! Captain Scott and his hardy crew reached the then undiscovered polar region of Antarctica in the early 1900s in one of the most significant expeditions to have ever been undertaken. Wander through the ship, see objects that belonged to Scott and his men, and discover their brave tales of seafaring and difficulties in the Antarctic. At this family attraction, there's plenty of engaging things to see and do that kids will really enjoy.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Find out more about RRS Discovery
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/08/01/va-dundee?size=lg"
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                V&A Dundee
                            </VsHeading>
                            <VsDetail size="small">
                                Dundee City
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body -------> 
                    <VsBody class="mb-150">
                        <p>
                            Visit V&A Dundee to see world-class examples of design, from architecture, fashion and furniture to video games and even healthcare. This is the first V&A museum in the world outside London and there are plenty of intriguing objects and enlightening exhibitions to see. Housed within an extraordinary building, designed by the internationally acclaimed Japanese architect Kengo Kuma, V&A Dundee also offers a tempting café and lovely gift shop.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Discover V&A Dundee
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>


                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/12/the-mcmanus?size=lg"
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                McManus: Dundee's Art Gallery & Museum
                            </VsHeading>
                            <VsDetail size="small">
                                Dundee City
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body ------->
                    <VsBody class="mb-150">
                        <p>
                            From V&A Dundee, it's just a 10 minute walk through the city centre to the McManus, Dundee's Art Gallery & Museum. With eight galleries across two floors, there's a surprising range of artefacts to discover, with thousands of objects from all over the world demonstrating Dundee's role as an important centre of trade. From traditional ceremonial masks and Inuit relics to Egyptian archaeology, as well as plenty of exhibits which tell the story of Dundee, its history, people and culture.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Visit The McManus
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>

                <!------- New structured content block: Itinerary stop ------->
                <div class="mb-400">
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/wsimgs/1059891_2129749568.jpg?size=lg"
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
                                heading-style="heading-xs" 
                                level="3"
                                no-margins
                            >
                                Dundee Contemporary Arts
                            </VsHeading>
                            <VsDetail size="small">
                                Dundee City
                            </VsDetail>
                        </VsCol>
                    </VsRow> 

                    <!------- Content block body ------->
                    <VsBody class="mb-150">
                        <p>
                            Open day and night, Dundee Contemporary Arts lies on Perth Road and is a hub of culture and style. Visit in the afternoon and enjoy exhibitions on modern art and explore quirky, design-orientated wares in the shop. There's also a cinema where you can see the latest releases, classic films and independent productions, and Jute, a trendy café-bar and a great place for sophisticated dining. In the evening, you could enjoy dinner before catching a play at the Dundee Rep Theatre, or visit for an aperitif before trying another of Dundee's dining options.
                        </p>
                    </VsBody>

                    <div class="d-flex flex-wrap gap-125">
                        <VsButton
                            href="#"
                            variant="secondary"
                        >
                            Visit Dundee Contemporary Arts
                        </VsButton>

                        <VsButton
                            href="#"
                            variant="subtle"
                            icon="fa-regular fa-map"
                        >
                            See in Google maps
                        </VsButton>
                    </div>
                </div>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
