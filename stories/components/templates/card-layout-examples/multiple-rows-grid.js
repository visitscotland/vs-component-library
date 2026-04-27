export default `
    <VsContainer class="mt-075 mt-lg-200 mb-200">
        <VsRow>
            <VsCol 
                v-for="(card, index) in cardListMultipleRows"
                :key="'card-list-multiple-rows-' + index"
                cols="12"
                sm="6"
                lg="4"
                xl="3"
                class="mb-150"
            >
                <VsCard card-style="outlined">
                    <template #vs-card-header>
                        <VsImg
                            v-if="card.image"
                            :src="card.image"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <div class="px-075">
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

                            <VsBody class="mb-150">
                                <p class="truncate-2-lines">
                                    {{ card.description }}
                                </p>
                            </VsBody>
                        </div>
                    </template>
                </VsCard>
            </VsCol>
        </VsRow>
    </VsContainer>
`;
