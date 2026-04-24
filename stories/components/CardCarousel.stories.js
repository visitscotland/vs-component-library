import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import { VsCardCarousel, VsCarouselNewSlide } from '@/components/carousel-new';

import cardLayoutData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';

export default {
    component: VsCardCarousel,
    title: 'Components/Layout & content structure/Card Carousel',
};

const Template = (args) => ({
    components: {
        VsCardCarousel,
        VsCarouselNewSlide,
        VsCard,
        VsImg,
        VsHeading,
        VsLink,
        VsBody,
    },
    setup() {
        return {
            args,
            cards: args.cards,
        };
    },
    template: `
        <div :class="args.jsDisabled ? 'no-js' : ''">
            <VsCardCarousel
                :previousButtonLabel="args.previousButtonLabel"
                :nextButtonLabel="args.nextButtonLabel"
                :slidesPerViewSm="args.slidesPerViewSm"
                :slidesPerViewMd="args.slidesPerViewMd"
                :slidesPerViewLg="args.slidesPerViewLg"
                :slidesPerViewXl="args.slidesPerViewXl"
                :slidesPerViewXxl="args.slidesPerViewXxl"
                :slidesPerViewXxxl="args.slidesPerViewXxxl"
            >
                <VsCarouselNewSlide
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
                </VsCarouselNewSlide>
            </VsCardCarousel>
        </div>
    `,
});

const base = {
    previousButtonLabel: 'Previous',
    nextButtonLabel: 'Next',
    slidesPerViewSm: 2.4,
    jsDisabled: false,
};

export const Default = Template.bind({
});
Default.args = {
    ...base,
    cards: cardLayoutData.cardListMultipleRows?.cards || [],
    slidesPerViewXl: 4.4,
};

export const CustomBreakpoints = Template.bind({
});
CustomBreakpoints.args = {
    ...base,
    cards: cardLayoutData.cardList2?.cards || [],
    slidesPerViewXl: 3.4,
};

export const NoJavascript = Template.bind({
});
NoJavascript.args = {
    ...base,
    cards: cardLayoutData.cardListMultipleRows?.cards || [],
    slidesPerViewXl: 4.4,
    jsDisabled: true,
};
