export default `
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
