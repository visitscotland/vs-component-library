export default function splitCardContentSwiper({
    slidesVar = 'cardList4',
    slidesKey = '4',
    slidesPerViewXl = 4.4,
} = {
}) {
    return `
        <VsContentSwiper
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            :slidesPerViewSm="2.4"
            :slidesPerViewXl="${slidesPerViewXl}"
        >
            <VsContentSwiperSlide
                v-for="(card, index) in ${slidesVar}"
                :key="'card-list-${slidesKey}-' + index"
            >
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            v-if="card.image"
                            :src="card.image"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <div>
                            <VsHeading level="3" heading-style="heading-xs">
                                <VsLink
                                    :href="card.link"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    {{ card.title }}
                                </VsLink>
                            </VsHeading>

                            <VsBody class="mb-150 truncate-2-lines">
                                {{ card.description }}
                            </VsBody>
                        </div>
                    </template>

                    <template 
                        v-if="card.isExternal"
                        #vs-card-footer
                    >
                        <div class="d-flex justify-content-end">
                            <VsIcon 
                                icon="vs-icon-control-external-link"
                                variant="highlight"
                                size="sm"
                            />
                        </div>
                    </template>
                </VsCard>
            </VsContentSwiperSlide>
    </VsContentSwiper>
    `;
}
