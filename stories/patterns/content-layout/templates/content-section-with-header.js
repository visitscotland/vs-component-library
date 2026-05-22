export default `
    <VsSectionHeader 
        class="mb-200 mb-xl-300"
        heading="Gaelic place names"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore the meanings behind Scotland's Gaelic place names and their connection to the landscape, history, and culture.
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
                        src="./fixtures/content-layout/images/butt-of-lewis-lighthouse.webp"
                        fluid
                        class="rounded-2"
                    />
                    <figcaption>
                        <VsMediaCaption>
                            <template v-slot:caption>
                                Butt of Lewis Lighthouse
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
                    <p>
                        The Gaelic language is deeply bound to Scotland’s landscape. In fact, place names often vividly evoke the physical features and character of the lands. Here are some examples. 
                    </p>

                    <p>
                        <VsList>
                            <li>
                                Glasgow - Glaschu: “green hollow” or “glen” - the Dear Green Place
                            </li>
                            <li>
                                Aberdeen - Obar Dheathain: “mouth of the River Don”  
                            </li>
                            <li>
                                Ardnamurchan - Àird nam Murchan: “headland of the sea hounds” (seals or otters)  
                            </li>
                            <li>
                                Ben Nevis - Beinn Nibheis: “venomous” or “malicious mountain”  
                            </li>
                        </VsList>
                    </p>
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
