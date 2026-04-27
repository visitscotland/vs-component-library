export default function eventCardCarousel({
    cardsVar = 'cardList4',
    cardsKey = '4',
    cardsPerRowXl = 3.4,
} = {
}) {
    return `
        <VsCardCarousel
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            :slidesPerViewSm="2.4"
            :slidesPerViewXl="${cardsPerRowXl}"
        >
            <VsCardCarouselSlide
                v-for="(card, index) in ${cardsVar}"
                :key="'card-list-${cardsKey}-' + index"
            >
                <VsCard>
                    <template #vs-card-header>
                        <div class="position-relative">
                            <VsImg
                                v-if="card.image"
                                :src="card.image"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                            <div class="position-absolute bottom-0 start-0 end-0 d-flex justify-content-between">
                                <div class="d-flex">
                                    <VsBadge
                                        v-if="card.price"
                                        variant="information"
                                        class="rounded-top-end rounded-bottom-start"
                                    >
                                        {{ card.price }}
                                    </VsBadge>

                                    <VsBadge
                                        v-if="card.date"
                                        variant="information"
                                        class="rounded-top-end rounded-top-start"
                                    >
                                        {{ card.date }}
                                    </VsBadge>
                                </div>

                                <VsBadge
                                    v-if="card.type"
                                    variant="information"
                                    class="rounded-top-start rounded-bottom-end me-0"
                                >
                                    {{ card.type }}
                                </VsBadge>
                            </div>
                        </div>

                    </template>

                    <template #vs-card-body >
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

                        <VsBody>
                            <p class="truncate-2-lines">
                                {{ card.description }}
                            </p>
                        </VsBody>
                    </template>

                    <template #vs-card-footer>
                        <div class="d-flex justify-content-between align-items-end">
                            <div class="d-flex align-items-center">
                                <VsIcon
                                    icon="fa-solid fa-location-dot"
                                    variant="highlight"
                                    class="me-050"
                                    size="sm"
                                />
                                <VsDetail 
                                    v-if="card.location" 
                                    no-margins
                                    color="tertiary"
                                >
                                    {{ card.location }}
                                </VsDetail>
                            </div>

                            <VsIcon 
                                icon="vs-icon-control-external-link"
                                variant="highlight"
                                size="sm"
                            />
                        </div>
                    </template>
                </VsCard>
            </VsCardCarouselSlide>
    </VsCardCarousel>
    `;
}
