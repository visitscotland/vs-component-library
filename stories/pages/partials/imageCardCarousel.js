export default function imageCardCarousel({
    cardsVar = 'carouselImages',
    cardsKey = '1',
} = {
}) {
    return `
        <VsCardCarousel
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            carouselAriaLabel="'image-group-${cardsKey}'"
        >
            <VsCardCarouselSlide
                v-for="(image, index) in ${cardsVar}"
                :key="'image-group-${cardsKey}-' + index"
            >
                <figure>
                    <VsImg 
                        v-if="image.image"
                        :src="image.image"
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
