export default `
    <VsContentSwiper
        previousButtonLabel="Previous slide"
        nextButtonLabel="Next slide"
        :slidesPerViewXs="1.2"
        :slidesPerViewSm="2.2"
        :slidesPerViewLg="2.7"
        :slidesPerViewXl="4"
    >
        <VsContentSwiperSlide
            v-for="(card, index) in cardListOverlay"
            :key="'card-list-' + index"
        >
            <VsCard card-style="overlay">
                <template #vs-card-image>
                    <VsImg 
                        :src="card.image" 
                        class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
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
                                href="#"
                                class="stretched-link text-decoration-none"
                                variant="on-dark"
                            >
                                {{ card.title }}
                            </VsLink>
                        </VsHeading>
                    </div>
                </template>
            </VsCard>
        </VsContentSwiperSlide>
    </VsContentSwiper>
`;
