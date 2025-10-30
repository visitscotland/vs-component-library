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
                                text="Events"
                            />
                            <VsBreadcrumbItem
                                href="#"
                                text="Highland Games"
                                active
                            />
                        </VsBreadcrumb>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </template>

        <template #heroSection>
            <VsHeroSection
                heading="Highland Games in Scotland"
                lede="Highland games have been a part of Scotland's culture for hundreds of years and are just as popular today as they've ever been. "
                img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/pipe-band-marching-at-the-ballater-highland-games.jpg?size=md"
                img-caption="Pipe band marching at Ballater Highland Games"
                img-credit="© VisitScotland / David N Anderson"
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
                    Get to know the highland games in Scotland
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        It's no wonder when you experience the sense of community, heritage and celebration at each of Scotland's Highland games. Find out more about the games and events taking place in 2026.
                    </p>

                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/caber-toss?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 my-175"
                    />

                     <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        What are the Highland Games?
                    </VsHeading>
                    <p>
                        Scotland's Highland games are usually one-day events taking place in outdoor spaces across the country. They feature traditional Highland sports such as the caber toss, tug o' war and the hammer throw, Highland dancing and music, and lots of family fun such as food and craft stalls and games.
                    </p>
                    <p>
                        Many events will also involve livestock events, parades and even best-dressed pet competitions. Some Highland games may continue into the night with more music gigs, ceilidhs and discos.
                    </p>
                    <p>
                        Our Highland games are so popular, that when Scots emigrated to other lands, they took the tradition across the world with them. Highland games have taken place in America since 1836, but also run in other countries such as Canada, Norway, New Zealand and Brazil. But there's no better way to experience them than in their original country!
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Where are the Highland Games?
                    </VsHeading>
                    <p>
                        Though they may have started in Highland Scotland, the games these days stretch right across Scotland from the far north coast of the Highlands, out west to the island of South Uist, east to Aberdeenshire and south to Peebles in the Scottish Borders.
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        When are the Highland Games?
                    </VsHeading>
                    <p>
                        The Highland games events season begins in May with the Gourock Highland Games, it peaks in July and August with over 30 events each month, and comes to a close towards the end of September. Most Highland games events take place at the weekend, on either a Saturday or a Sunday.
                    </p>
                </VsBody>
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
                    Highland Games events in 2026
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/ballater-highland-games?size=md"
                        use-lazy-loading
                        class="rounded-2 w-100 mb-175"
                    />
                    <p>
                        Every Highland games event in Scotland has a unique character and tradition and many are held in simply stunning locations. Make new friends with the locals and other visitors as you enjoy our Scottish hospitality and watch a gripping spectacle of champions, with dancing, music and more.
                    </p>

                    <p>
                        Experience the Highland games in all its glory and enjoy the amazing atmosphere that the games offer.
                    </p>

                    <VsLink 
                        href="#"
                        type="external"
                    >
                        Find a full list of dates on the Scottish Royal Highland Games Association
                    </VsLink>
                </VsBody>
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
                    What's the history of the Highland Games?
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        Some believe the roots of the Highland games date as far back as the 11th century. King Malcolm III needed a personal courier, so he called a foot race to the summit of&nbsp;Creag Chòinnich, near Braemar, in the hopes of finding the fastest runner. Many games still include a hill race, although the winner is no longer destined for a life of servitude!
                    </p>
                    <p>
                        The games evolved into a test not only of strength and stamina, but also of creative dance and music skills to keep kings, queens and clan chiefs entertained.
                    </p>
                    <p>
                        Highland games as we know them today have been celebrated around Scotland since the 1800s and regularly draw in enthusiastic crowds.
                    </p>
                    <p>
                        Amongst the most historic is the Braemar Gathering, which was awarded Royal Patronage by Queen Victoria and is still regularly attended by the reigning monarch and other members of the Royal Family.
                    </p>

                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/nairn-highland-games?size=md"
                        use-lazy-loading
                        class="rounded-2 w-100 my-175"
                    />

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Did you know?
                    </VsHeading>
                    <p>
                        The games evolved into a test not only of strength and stamina, but also of creative dance and music skills to keep kings, queens and clan chiefs entertained.
                    </p>
                    <p>
                        The Highland games were so impressive, that the founder of the modern Olympics, Baron de Coubertin, introduced the hammer throw, shot put and the tug o' war after watching the Highland display at the 1889 Paris Exhibition. The hammer throw and shot put are still included to this day.
                    </p>
                    <p>
                        Haggis hurling began as a practical joke in the 1970s, but is now a popular event at many Highland games - there's even a World Haggis Hurling Association dedicated to the sport! The current world record was set at the Milngavie Highland Games in 2011, when Lorne Coltart hurled a haggis at an impressive 217 ft.
                    </p>
                </VsBody>
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
        <VsRow class="mt-500 mb-500">
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
                    What events are in the Scottish Highland Games?
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        There's plenty to do to fill the whole day, as you'll be watching the heavy events and Highland dancing, enjoying fun fairs and stalls and sampling delicious Scottish food and drink.
                    </p>

                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/tug-of-war?size=lg"
                        use-lazy-loading
                        class="rounded-2 w-100 my-175"
                    />

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Heavy contests and field events
                    </VsHeading>
                    <p>
                        See competitors put their muscles to the test in the heavy contests, including the hammer throw and weight for height.
                    </p>
                    <p>
                        Competitors in the heavy events use a range of techniques to improve their chances of winning. One movement in the weight for height event goes by the somewhat surprising nickname of "the handbag technique", because the starting position is similar to where one would hold a handbag.
                    </p>
                    <p>
                        The Scottish Highland games' most iconic event, the caber toss, is rumoured to have stemmed from the need to toss logs over chasms. Nowadays it is judged on style rather than distance - competitors aim to flip a log weighing up to 11 stone so that it falls away from them in the 12 o'clock position. The length it travels is entirely unimportant.
                    </p>

                    <p>
                        Look out for the field events such as the hill race and cycling competition which test speed and stamina.
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Scottish Highland Games training
                    </VsHeading>
                    <p>
                        Ever wondered how you would fare in a Highland games competition? Whether you're a local or a visitor to Scotland, people of all ages are invited to toss the caber, attempt the stone throw and other iconic heavy events. You can even try your hand at curling!
                    </p>
                    <VsLink 
                        href="#"
                        type="external"
                    >
                        What events are in the Highland Games?
                    </VsLink>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Music
                    </VsHeading>
                    <p>
                        For many, one of the most memorable sights of the Highland games is the massed bands, when hundreds of pipers and drummers from different groups come together to play and march in unison. Look out for the solo piping competitions, where competitors play in a range of styles, including the Pibroch, which is considered the classical music of the bagpipe. Pibrochs tend to be slow, stately and complex.
                    </p>

                    <VsImg
                        src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/highland-dancing?size=md"
                        use-lazy-loading
                        class="rounded-2 w-100 my-175"
                    />

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Highland dancing
                    </VsHeading>
                    <p>
                        Dancers give dazzling displays of fancy footwork in Scottish dances, such as the sword dance and the famous Highland Fling. Competing for titles both individually and in groups, their colourful outfits and infectious energy will leave you in high spirits. The Cowal Highland Gathering is renowned for the quality of its Highland dancing, drawing in the best performers from around the globe as they compete in the Scottish and World Championships.
                    </p>                    

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Highland clans
                    </VsHeading>
                    <p>
                        Highland games once saw clan members go head-to-head in fierce competition - and you'll still see this enthusiasm when clans muster all their might in a tug o' war. These days, clan attendance at games is now more of a social and ceremonial affair. Some Highland games are part of a wider clan gathering - a celebratory get-together featuring parades, Scottish music and dancing, feasts, heritage events and much joviality.
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Chieftains
                    </VsHeading>
                    <p>
                        The ceremonial role of chieftain is bestowed upon a member of the local community or clan chief, who then leads processions, opens the games and oversees the whole event with aplomb.
                    </p>

                    <p>
                        Did you know that several games have boasted famous celebrity chieftains, including singer Susan Boyle and actors Ewan McGregor and Dougray Scott?
                    </p>
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
