export default `
    <VsContainer>
        <VsRow>
            <VsCol
                cols="12"
                lg="4"
                class="mb-100 mb-lg-0"
            >
                <figure>
                    <VsImg 
                        src="./fixtures/content-layout/images/the-oyster-shed.webp"
                        fluid
                        class="rounded-2"
                    />
                    <figcaption>
                        <VsMediaCaption>
                            <template v-slot:caption>
                                Mussels from The Oyster Shed
                            </template>
                            <template v-slot:credit>
                                © Kim Walton
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
                        Skye's coastline provides some of the freshest seafood in Scotland, and local spots like The Oyster Shed have become must-visit stops for visitors exploring the island.
                    </p>

                    <p>
                        Enjoy freshly prepared mussels, oysters, langoustines, and smoked salmon while taking in views across the water near Carbost. Whether you're stopping during a road trip or seeking out local flavours, Skye's food scene offers a relaxed and authentic taste of the Highlands and Islands.
                    </p>
                </VsBody>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
