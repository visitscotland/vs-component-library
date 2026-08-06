import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsMediaCaption from '@/components/media-caption/MediaCaption.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsContentSwiper from '@/components/content-swiper/ContentSwiper.vue';
import VsContentSwiperSlide from '@/components/content-swiper/components/ContentSwiperSlide';

import cardLayoutData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';
import contentSwiperImages from '@/assets/fixtures/content-swiper/content-swiper-images.json';

export default {
    component: VsContentSwiper,
    title: 'Components/Layout & content structure/Content Swiper',
};

const Template = (args) => ({
    components: {
        VsContentSwiper,
        VsContentSwiperSlide,
        VsCard,
        VsImg,
        VsMediaCaption,
        VsHeading,
        VsLink,
        VsBody,
    },
    setup() {
        return {
            args,
            cards: args.cards,
            images: args.images,
        };
    },
    template: `
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <VsContentSwiper
                v-if="args.cards"
                :previousButtonLabel="args.previousButtonLabel"
                :nextButtonLabel="args.nextButtonLabel"
                :slidesPerViewSm="args.slidesPerViewSm"
                :slidesPerViewMd="args.slidesPerViewMd"
                :slidesPerViewLg="args.slidesPerViewLg"
                :slidesPerViewXl="args.slidesPerViewXl"
                :slidesPerViewXxl="args.slidesPerViewXxl"
                :slidesPerViewXxxl="args.slidesPerViewXxxl"
            >
                <VsContentSwiperSlide
                    v-for="(card, index) in cards"
                    :key="'card-' + index"
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

                            <VsBody class="mb-150 truncate-2-lines">
                                {{ card.description }}
                            </VsBody>
                        </template>
                    </VsCard>
                </VsContentSwiperSlide>
            </VsContentSwiper>

            <VsContentSwiper
                v-else-if="args.images"
                :mixedWidths="args.mixedWidths"
                :previousButtonLabel="args.previousButtonLabel"
                :nextButtonLabel="args.nextButtonLabel"
                :slidesPerViewSm="args.slidesPerViewSm"
                :slidesPerViewMd="args.slidesPerViewMd"
                :slidesPerViewLg="args.slidesPerViewLg"
                :slidesPerViewXl="args.slidesPerViewXl"
                :slidesPerViewXxl="args.slidesPerViewXxl"
                :slidesPerViewXxxl="args.slidesPerViewXxxl"
            >
                <VsContentSwiperSlide
                    v-for="(image, index) in images"
                    :key="'image-' + index"
                    :class="image.orientation == 'portrait' ? 'portrait' : 'landscape'"
                >
                    <figure class="w-100">
                        <VsImg 
                            v-if="image.image"
                            :src="image.image"
                            class="w-100 rounded-2"
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
        </div>
    `,
});

const base = {
    previousButtonLabel: 'Previous',
    nextButtonLabel: 'Next',
    jsDisabled: false,
};

export const WithCards = Template.bind({
});
WithCards.args = {
    ...base,
    cards: cardLayoutData.cardList7?.cards || [],
    slidesPerViewSm: 2.4,
    slidesPerViewXl: 4.4,
};

export const WithImages = Template.bind({
});
WithImages.args = {
    ...base,
    images: contentSwiperImages.landscapeImages?.images || [],
};

export const WithPortraitImages = Template.bind({
});
WithPortraitImages.args = {
    ...base,
    slidesPerViewSm: 2.4,
    slidesPerViewXl: 3.4,
    images: contentSwiperImages.portraitImages?.images || [],
};

export const NoJavascript = Template.bind({
});
NoJavascript.args = {
    ...base,
    cards: cardLayoutData.cardList7?.cards || [],
    slidesPerViewSm: 2.4,
    slidesPerViewXl: 4.4,
    jsDisabled: true,
};
