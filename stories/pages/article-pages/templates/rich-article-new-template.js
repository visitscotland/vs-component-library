import imageWithCaptionPartial from '../../partials/imageWithCaptionPartial';
import videoWithCaptionPartial from '../../partials/videoWithCaptionPartial';
import splitCardContentSwiper from '../../partials/splitCardContentSwiper';

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
            <VsContainer>
                <VsRow>
                    <VsCol>
                        <VsHeroSection
                            heading="Highland Games in Scotland"
                            lede="Highland games have been a part of Scotland's culture for hundreds of years and are just as popular today as they've ever been. "
                            img-src="https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/pipe-band-marching-at-the-ballater-highland-games.jpg?size=md"
                            img-caption="Pipe band marching at Ballater Highland Games"
                            img-credit="© VisitScotland / David N Anderson"
                            inset
                        />
                    </VsCol>
                </VsRow>
            </VsContainer>
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
                    How to experience a Highland games
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    ${imageWithCaptionPartial({
                        imageSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/ballater-highland-games?size=md',
                        imageCaption: 'Ballater Highland Games',
                        imageCredit: 'VisitScotland',
                    })}

                    <p>
                        The Highland games season begins in May, peaks in July and August with events taking place almost every weekend, and finishes in September. Most games held on Saturdays or Sundays.
                    </p>

                    <p>
                        Although the games originated in Highland Scotland, today they take place across the country, from the north Highlands and islands to Aberdeenshire, Perthshire, Argyll and the Scottish Borders. No matter where you are in Scotland during the summer, you’re likely to find a Highland games nearby.
                    </p>

                    <p>
                        Experience the Highland games 2026 in all its glory and enjoy the amazing atmosphere that the games offer.
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
    NEW SECTION - Section header + content swiper ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Scottish Highland Games: Explained"
    >
        <template v-slot:section-header-lede>
            <p>The Scottish Highland games are a centuries-old tradition and remain a vibrant part of Scottish culture today. Discover what happens on the day of this unique spectacle, from the Chieftain’s Parade and Highland dancing, to thrilling heavy events like the caber toss, and more.</p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol cols="12">
                <VsBody>
                    ${videoWithCaptionPartial({
                        videoId: 'Wj_8RqT6Vfg',
                        videoCaption: 'Watch our guide to the Scottish Highland Games and discover the traditions behind one of Scotland’s most iconic events.',
                        addTopMargin: true,
                    })}
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>



    <!------------------------------------------------------------
    NEW SECTION - CABER TOSS - ARTICLE EMBED
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
                    Guide to the heavy events
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        Learn about the heavy events before you go to a Highland games – one of the most iconic and defining parts of the day. You might even want to try them yourself! Watch competitors test their strength in events such as the caber toss, hammer throw, tug o’ war and weight for height, while hill races and cycling competitions test speed and stamina.
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        How to caber toss
                    </VsHeading>
                    <p>
                        Ever wondered what it takes to master one of the most iconic Highland games events? Scottish strongman Jamie Barr demonstrates the technique behind the famous caber toss at Balgonie Castle in Fife.
                    </p>
                    ${videoWithCaptionPartial({
                        videoId: 'fhybD2V30Q4',
                        posterImageSrc: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2022/07/13/caber-toss?size=lg',
                        videoCaption: 'Watch Scottish strongman Jamie Barr demonstrate the technique behind the traditional caber toss.',
                        addTopMargin: true,
                    })}

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        How to shot put
                    </VsHeading>
                    <p>
                        The Highland games shot put challenges competitors to throw a heavy stone as far as possible using strength, balance and precision. Jamie Barr shows how the event is performed.
                    </p>
                    ${videoWithCaptionPartial({
                        videoId: 'DDLwMYy_UZs',
                        posterImageSrc: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2022/07/13/shot-put?size=lg',
                        videoCaption: 'Learn how athletes compete in the Highland games shot put event with Scottish strongman Jamie Barr.',
                        addTopMargin: true,
                    })}

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        How to weight for height
                    </VsHeading>
                    <p>
                       In the weight for height event, competitors launch a 56lb weight over a high bar using only one hand. Watch Jamie Barr explain the skill and power behind the challenge at Balgonie Castle in Fife.
                    </p>
                    ${videoWithCaptionPartial({
                        videoId: 'zEdsiEEoOE8',
                        posterImageSrc: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2022/07/13/weight-for-height?size=lg',
                        videoCaption: 'Discover how competitors throw a 56lb weight skyward in the Highland games weight for height event.',
                        addTopMargin: true,
                    })}

                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
<!------------------------------------------------------------
    NEW SECTION - CABER TOSS - EXTERNAL LINK
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
                    Guide to the heavy events
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    ${imageWithCaptionPartial({
                        imageSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/caber-toss?size=lg',
                        imageCaption: 'Caber toss demonstration',
                        imageCredit: 'VisitScotland',
                    })}

                    <p>
                        The heavy events are among the most iconic and exciting parts of any Highland games. Combining strength, skill and tradition, these competitions have been a centrepiece of the games for centuries. Watch athletes test their power in events such as the caber toss, shot put, hammer throw and weight for height, while hill races and cycling competitions showcase speed and endurance.
                    </p>

                    <p>
                        Want to learn more about how the events work before you go? Scottish strongman Jamie Barr demonstrates some of the best-known Highland games challenges, including how competitors toss the caber, throw the stone in the shot put, and launch a 56lb weight high into the air.
                    </p>

                    <p>
                        Watch the full video playlist on YouTube: 

                        <VsLink 
                            href="#"
                            type="external"
                        >
                            Highland games heavy events playlist
                        </VsLink>
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
                    Music, dancing and traditions
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        Beyond the sporting events, Highland games are a vibrant celebration of Scottish culture, bringing together music, dancing, clans and centuries-old traditions.
                    </p>

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Music
                    </VsHeading>
                    <p>
                        One of the highlights of many Highland games is the massed pipe bands, when pipers and drummers march and play in unison. Many games also feature solo piping competitions and traditional Scottish music performances in a range of styles including the Pibroch – the classical style of piping. 
                    </p>

                    ${imageWithCaptionPartial({
                        imageSrc: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2022/08/05/nairn-highland-games?size=lg',
                        imageCaption: 'Nairn Highland Games',
                        imageCredit: '© Iain Fairweather',
                    })}

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Highland dancing
                    </VsHeading>
                    <p>
                        Highland dancers perform traditional Scottish dances such as the Highland Fling and the sword dance, competing individually and in teams in traditional tartan attire.  The Cowal Highland Gathering is famed for drawing in the best performers from around the globe as they compete in the Scottish and World Championships.
                    </p>

                    ${imageWithCaptionPartial({
                        imageSrc: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2026/01/29/highland-dancers.jpg?size=lg',
                        imageCaption: 'Highland dancing competitions',
                        imageCredit: 'VisitScotland',
                        addTopMargin: true,
                    })}

                    <VsHeading 
                        heading-style="heading-s" 
                        level="3"
                    >
                        Clans and chieftains 
                    </VsHeading>
                    <p>
                        Some Highland games are part of wider clan gatherings featuring parades, music, dancing and heritage events. Highland games once saw clan members go head-to-head in fierce competition – and you'll still see this enthusiasm when clans muster all their might in a tug o' war. Each games also has a ceremonial chieftain who leads the proceedings and opens the games. 
                    </p>

                    ${imageWithCaptionPartial({
                        imageSrc: 'https://2f1a7f9478.visitscotland.net/binaries/content/gallery/visitscotland/cms-images/2022/07/13/tug-of-war?size=lg',
                        imageCaption: 'Tug o\' war',
                        imageCredit: 'VisitScotland',
                        addTopMargin: true,
                        hasArticleSpacing: false,
                    })}

                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>

    <!------------------------------------------------------------
    NEW SECTION - CABER TOSS - CONTENT SWIPER
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Guide to the heavy events"
    >
        <template v-slot:section-header-lede>
            <p>Learn about the heavy events before you go to a Highland games – one of the most iconic and defining parts of the day. You might even want to try them yourself! Watch competitors test their strength in events such as the caber toss, hammer throw, tug o’ war and weight for height, while hill races and cycling competitions test speed and stamina.</p>
        </template>
    </VsSectionHeader>

    <VsContentSwiper
        previousButtonLabel="Previous"
        nextButtonLabel="Next"
        :slidesPerViewLg="3"
    >
        <VsContentSwiperSlide>
            <figure class="w-100">
                <VsVideo 
                    video-id="fhybD2V30Q4"
                    error-message="Sorry, something's gone wrong. Please try again later"
                    no-js-message="You need Javascript enabled to see this video"
                    no-cookies-message="You need cookies enabled to see this video"
                    cookie-btn-text="Manage cookies"
                    class="w-100"
                    lazyload
                />
                <figcaption>
                    <VsMediaCaption video-id="fhybD2V30Q4">
                        <template v-slot:caption>
                            Watch Scottish strongman Jamie Barr demonstrate the traditional caber toss.
                        </template>
                    </VsMediaCaption>
                </figcaption>
            </figure>
        </VsContentSwiperSlide>
        <VsContentSwiperSlide>
            <figure class="w-100">
                <VsVideo 
                    video-id="DDLwMYy_UZs"
                    error-message="Sorry, something's gone wrong. Please try again later"
                    no-js-message="You need Javascript enabled to see this video"
                    no-cookies-message="You need cookies enabled to see this video"
                    cookie-btn-text="Manage cookies"
                    class="w-100"
                    lazyload
                />
                <figcaption>
                    <VsMediaCaption video-id="DDLwMYy_UZs">
                        <template v-slot:caption>
                            Learn the technique behind the Highland games shot put.
                        </template>
                    </VsMediaCaption>
                </figcaption>
            </figure>
        </VsContentSwiperSlide>
        <VsContentSwiperSlide>
            <figure class="w-100">
                <VsVideo 
                    video-id="zEdsiEEoOE8"
                    error-message="Sorry, something's gone wrong. Please try again later"
                    no-js-message="You need Javascript enabled to see this video"
                    no-cookies-message="You need cookies enabled to see this video"
                    cookie-btn-text="Manage cookies"
                    class="w-100"
                    lazyload
                />
                <figcaption>
                    <VsMediaCaption video-id="zEdsiEEoOE8">
                        <template v-slot:caption>
                            Discover how athletes compete in the weight for height event.
                        </template>
                    </VsMediaCaption>
                </figcaption>
            </figure>
        </VsContentSwiperSlide>
    </VsContentSwiper>
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
                    Highland games facts
                </VsHeading>
            </VsCol>

            <!-- Second col: Section content -->
            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <p>
                        The Highland games have a long history and many unique traditions. Here are some surprising pieces of Highland games trivia you might not know.
                    </p>

                    <ul class="vs-list">
                        <li>
                            Some believe the origins of the Highland games date back to the 11th century, when King Malcolm III organised a race near Braemar to find the fastest runner.
                        </li>
                        <li>
                            The games later developed into events where warriors demonstrated strength and skill to impress clan chieftains.
                        </li>
                        <li>
                            Several games have boasted famous celebrity chieftains, including singer Susan Boyle and actors Ewan McGregor and Dougray Scott.
                        </li>
                        <li>
                            By the 1800s, the Highland games had largely fallen into decline. Queen Victoria helped revive the tradition after granting the Braemar Gathering Royal Patronage.
                        </li>
                        <li>
                            The Braemar Gathering is still regularly attended by the monarch and members of the Royal Family.
                        </li>
                        <li>
                            Haggis hurling began as a practical joke in the 1970s but is now a popular event at many Highland games. There is even a World Haggis Hurling Association dedicated to the sport!
                        </li>
                    </ul>
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>


    <!------------------------------------------------------------
    NEW SECTION - Section header + content swiper ( 4 cards)
    ------------------------------------------------------------>
    <VsSectionHeader 
        class="mt-500 mb-200 mb-xl-300"
        heading="Other things you might like"
    >
    </VsSectionHeader>

    ${splitCardContentSwiper({
        slidesVar: 'cardList4',
        slidesKey: '4',
        slidesPerViewXl: 4.4,
    })}
    <!------------------------------------------------------------
    SECTION END
    ------------------------------------------------------------>
`;
