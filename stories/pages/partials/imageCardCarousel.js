export default function imageCardCarousel({
    cardsVar = 'carouselImages',
    cardsKey = '1',
    contained = false,
} = {
}) {
    return `
        <VsCardCarousel
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            carouselAriaLabel="'image-group-${cardsKey}'"
            :contained="${contained}"
        >
            <VsCardCarouselSlide
                v-for="(image, index) in ${cardsVar}"
                :key="'image-group-${cardsKey}-' + index"
            >
                <figure class="w-100">
                    <VsImg 
                        v-if="image.image"
                        :src="image.image"
                        class="w-100"
                        fluid
                    />
                    <figcaption>
                        <VsMediaCaption>
                            <template v-slot:caption>
                                {{ image.caption }}
                            </template>
                            <template v-slot:credit>
                                {{ image.credit }}
                            </template>
                        </VsMediaCaption>
                    </figcaption>
                </figure>
            </VsCardCarouselSlide>
    </VsCardCarousel>
    `;
}
