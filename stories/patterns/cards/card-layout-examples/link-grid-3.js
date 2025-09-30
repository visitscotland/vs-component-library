export default `
    <VsContainer class="mt-075 mt-lg-200">
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap
                    :cards-per-row="3"
                >
                    <VsCard
                        v-for="(card, index) in textCardList3"
                        :key="'text-card-list-3-' + index"
                        card-style="elevated"
                        accent-bar
                    >
                        <template #vs-card-body>
                            <div class="px-125">
                                <VsHeading
                                    level="3"
                                    heading-style="heading-xs"
                                >
                                    <VsLink
                                        href="#"
                                        class="stretched-link"
                                        variant="secondary"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>

                                <VsBody class="mb-150">
                                    <p class="truncate-3-lines">
                                        {{ card.description }}
                                    </p>
                                </VsBody>
                            </div>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
