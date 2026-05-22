export default `
    <VsSectionHeader 
        class="mb-200 mb-xl-300"
        heading="Frequently asked questions about Gaelic in Scotland"
    >
        <template v-slot:section-header-lede>
            <p>
                Find answers to common questions about the Gaelic language, its history, where it's spoken, and its role in Scotland today.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol
                cols="12"
                lg="4"
                class="mb-100 mb-lg-0"
            >
                <figure>
                    <VsImg 
                        src="./fixtures/content-layout/images/north-uist-and-eaval.webp"
                        fluid
                        class="rounded-2"
                    />
                    <figcaption>
                        <VsMediaCaption>
                            <template v-slot:caption>
                                North Uist and Eaval from the top of Rueval on Benbecula
                            </template>
                            <template v-slot:credit>
                                © VisitScotland / Paul Tomkins
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsCol>

            <VsCol
                cols="12"
                lg="8"
            >
                <VsBody>
                    <VsAccordion>
                        <VsAccordionItem
                            control-id="item-1"
                            :heading-level="3"
                        >
                            <template v-slot:title>
                                Where does Gaelic come from?
                            </template>

                            <VsBody class="p-075">
                                <p>
                                    Gaelic originated around the 5th century in areas including north-east Ulster and the north-west coastlines of Ireland. Spoken by the Gaels, it spread to the islands of Caledonia (modern-day Scotland) over time. 
                                </p>
                                <p>
                                    Today, it forms part of a wider family of six surviving Celtic languages: Scottish Gaelic, Irish, Welsh, Breton, Cornish, and Manx. 
                                </p>
                            </VsBody>
                        </VsAccordionItem>
                        <VsAccordionItem
                            control-id="item-2"
                            :heading-level="3"
                        >
                            <template v-slot:title>
                                What is Gaelic’s cultural significance in Scotland?
                            </template>

                            <VsBody class="p-075">
                                <p>
                                    Gaelic culture has shaped many of Scotland’s most recognisable traditions, from kilts and tartan to bagpipes, ceilidhs, Highland games and whisky. 
                                </p>
                                <p>
                                    Despite more than 200 years of suppression, the language has been preserved through literature, music, and oral storytelling. It remains a vibrant part of modern Scottish life, particularly in the Outer Hebrides. 
                                </p>
                            </VsBody>
                        </VsAccordionItem>
                        <VsAccordionItem
                            control-id="item-3"
                            :heading-level="3"
                        >
                            <template v-slot:title>
                                Where is Gaelic still spoken in Scotland?
                            </template>

                            <VsBody class="p-075">
                                <p>
                                    Scottish Gaelic is most spoken in the Highlands and islands, particularly the Outer Hebrides, the Isle of Skye, and parts of Argyll & The Isles. 
                                </p>
                                <p>
                                    However, many speakers now live in the Lowlands, including cities like Glasgow and Edinburgh, where Gaelic-medium education supports the language’s growth. 
                                </p>
                            </VsBody>
                        </VsAccordionItem>
                        <VsAccordionItem
                            control-id="item-4"
                            :heading-level="3"
                        >
                            <template v-slot:title>
                                Will I see or hear Gaelic when visiting Scotland?
                            </template>

                            <VsBody class="p-075">
                                <p>
                                    Yes - you may notice Gaelic in several ways: 
                                </p>
                                <p>
                                    <VsList>
                                        <li>
                                            On road signs in parts of the country
                                        </li>
                                        <li>
                                            On TV and radio via BBC Alba and BBC Radio nan Gàidheal
                                        </li>
                                        <li>
                                            In everyday conversation within some communities
                                        </li>
                                        <li>
                                            Along routes like the Edinburgh Gaelic Trail
                                        </li>
                                    </VsList>
                                </p>
                            </VsBody>
                        </VsAccordionItem>
                        <VsAccordionItem
                            control-id="item-5"
                            :heading-level="3"
                        >
                            <template v-slot:title>
                                Is Gaelic spoken outside Scotland?
                            </template>

                            <VsBody class="p-075">
                                <p>
                                    Yes. Gaelic-speaking communities exist beyond Scotland, particularly in Nova Scotia in Canada, as well as parts of New Zealand, Australia and North America. This reflects historic migration during the 18th and 19th centuries. 
                                </p>
                            </VsBody>
                        </VsAccordionItem>
                    </VsAccordion>
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
