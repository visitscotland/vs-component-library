export default function linkCardContentSwiper({
    slidesVar = 'cardList4',
    slidesKey = '4',
    slidesPerViewXl = 4.4,
} = {
}) {
    return `
        <VsContentSwiper
            previousButtonLabel="Previous"
            nextButtonLabel="Next"
            contentSwiperAriaLabel="Link cards"
            :slidesPerViewSm="2.4"
            :slidesPerViewXl="${slidesPerViewXl}"
        >
            <VsContentSwiperSlide
                v-for="(card, index) in ${slidesVar}"
                :key="'card-list-${slidesKey}-' + index"
            >
                <VsCard
                    :accent-bar="true"
                    :fill-color="'vs-color-background-primary'"
                    card-style="elevated"
                >
                    <template #vs-card-header>
                        <VsBadge
                            v-if="card.badgeTitle"
                            variant="subtle"
                            class="mt-125 mx-075"
                        >
                            {{ card.badgeTitle }}
                        </VsBadge>
                    </template>

                    <template #vs-card-body>
                        <div class="px-125">
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

                            <VsBody class="mb-150 truncate-3-lines">
                                {{ card.description }}
                            </VsBody>
                        </div>
                    </template>

                    <template #vs-card-footer>
                        <VsArticleDetails
                            v-if="card.metaData"
                            class="px-125 mb-150"
                            :article-read-time="card.metaData"
                        />
                    </template>
                </VsCard>
            </VsContentSwiperSlide>
    </VsContentSwiper>
    `;
}
