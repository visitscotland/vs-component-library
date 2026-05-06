export default function imageContentSwiper({
    slidesVar = 'landscapeImages',
    contained = false,
    slidesPerViewLg = 1.4,
} = {
}) {
    return `
        <VsContentSwiper
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            :contained="${contained}"
            :slidesPerViewLg="${slidesPerViewLg}"
        >
            <VsContentSwiperSlide
                v-for="(image, index) in ${slidesVar}"
                :key="'image-group-' + index"
            >
                <figure class="w-100">
                    <VsImg 
                        v-if="image.image"
                        :src="image.image"
                        class="w-100"
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
