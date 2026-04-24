export default function overlayCardCarousel({
    cardsVar = 'cardListOverlay',
    cardsKey = '1',
} = {
}) {
    return `
        <VsCardCarousel
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            :slidesPerViewXs="1.2"
            :slidesPerViewSm="2.2"
            :slidesPerViewLg="2.7"
            :slidesPerViewXl="4"
        >
            <VsCarouselNewSlide
                v-for="(card, index) in ${cardsVar}"
                :key="'card-overlay-${cardsKey}' + index"
            >
                <VsCard
                    card-style="overlay"
                    ref="overlayCard"
                >
                    <template #vs-card-image>
                        <VsVideo
                            v-if="card.videoSrc"
                            :ref="'cardVideo-' + index"
                            video-type="html5"
                            :poster-image-src="card.image"
                            :video-src="card.videoSrc"
                            :show-toggle="false"
                            :video-id="'category-card-video' + index"
                            :lazy-load="true"
                        />
                        <VsImg 
                            v-else
                            :src="card.image" 
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-overlay-controls>
                        <VsToggleButton
                            v-if="card.videoSrc && !isReducedMotion"
                            variant="overlay"
                            icon="vs-icon-control-pause"
                            pressed-icon="vs-icon-control-play"
                            label="Pause video"
                            pressed-label="Play video"
                            :aria-controls="'category-card-video' + index"
                            @click="toggleCard(index)"
                        />
                    </template>

                    <template #vs-card-footer>
                        <div class="px-125 pb-125">
                            <VsHeading
                                level="2"
                                no-margins
                                heading-style="heading-m"
                            >
                                <VsLink
                                    :href="card.link"
                                    class="stretched-link text-decoration-none"
                                    variant="on-dark"
                                >
                                    {{ card.title }}
                                </VsLink>
                            </VsHeading>
                        </div>
                    </template>
                </VsCard>
            </VsCarouselNewSlide>
        </VsCardCarousel>
    `;
}
