export default function imageContentSwiper({
    slidesVar = 'landscapeImages',
    slidesKey = '1',
    contained = false,
    slidesPerViewLg = 1.4,
} = {
}) {
    return `
        <VsContentSwiper
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            contentSwiperAriaLabel="image-group-${slidesKey}"
            :contained="${contained}"
            :slidesPerViewLg="${slidesPerViewLg}"
        >
            <VsContentSwiperSlide
                v-for="(image, index) in ${slidesVar}"
                :key="'image-group-${slidesKey}-' + index"
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
            </VsContentSwiperSlide>
    </VsContentSwiper>
    `;
}
