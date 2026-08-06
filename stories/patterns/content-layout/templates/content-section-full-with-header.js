export default `
    <VsSectionHeader 
        class="mb-200 mb-xl-300"
        heading="Hiking in the North Highlands"
    >
        <template v-slot:section-header-lede>
            <p>
                Explore one of Scotland's most iconic mountain trails, where ancient pine forests give way to rugged peaks, lochs, and sweeping Highland views.
            </p>
        </template>
    </VsSectionHeader>

    <VsContainer>
        <VsRow>
            <VsCol cols="12">
                <figure>
                    <VsImg 
                        src="./fixtures/content-layout/images/beinn-eighe.jpg"
                        fluid
                        class="rounded-2 w-100"
                    />
                    <figcaption>
                        <VsMediaCaption>
                            <template v-slot:caption>
                                Beinn Eighe
                            </template>
                            <template v-slot:credit>
                                © VisitScotland / Kenny Lam
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
