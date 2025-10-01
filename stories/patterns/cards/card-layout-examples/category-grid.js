export default `
    <VsContainer class="mt-075 mt-lg-200">
        <VsRow>
            <VsCol>
                <VsCardGroup scroll-snap="always">
                    <VsCard 
                        v-for="(card, index) in cardListOverlay"
                        :key="'category-card-list-' + index"
                        card-style="overlay"
                    >
                        <template #vs-card-footer>
                            <div class="px-125 pb-125">
                                <VsHeading
                                    level="2"
                                    no-margins
                                    heading-style="heading-m"
                                >
                                    <VsLink
                                        href="#"
                                        class="stretched-link text-decoration-none"
                                        variant="on-dark"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>
                            </div>
                        </template>

                        <template #vs-card-image>
                            <VsImg 
                                :src="card.image" 
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
