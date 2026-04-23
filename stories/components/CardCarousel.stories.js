import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import { VsCardCarousel, VsCarouselNewSlide } from '@/components/carousel-new';

import cardLayoutData from '@/assets/fixtures/navigation-pages/visual-impact-cards.json';

export default {
    component: VsCardCarousel,
    title: 'Components/Media & data visualisation/Card Carousel',
};

const sharedComponents = {
    VsCardCarousel,
    VsCarouselNewSlide,
    VsCard,
    VsImg,
    VsHeading,
    VsLink,
    VsBody,
};

const OverlayTemplate = (args) => ({
    components: sharedComponents,
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
                :layout="args.layout"
            >
                <VsCarouselNewSlide
                    v-for="(card, index) in cards"
                    :key="'card-overlay-' + index"
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
        </div>
    `,
});

const StandardTemplate = (args) => ({
    components: sharedComponents,
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
                :layout="args.layout"
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
    jsDisabled: false,
};

export const Default = StandardTemplate.bind({
});
Default.args = {
    ...base,
    layout: 'fluid',
    cards: cardLayoutData.cardListMultipleRows?.cards || [],
    slidesPerViewSm: 2.2,
    slidesPerViewXl: 4.2,
};

export const CustomBreakpoints = StandardTemplate.bind({
});
CustomBreakpoints.args = {
    ...base,
    layout: 'fluid',
    cards: cardLayoutData.cardList2?.cards || [],
    slidesPerViewSm: 2.2,
    slidesPerViewXl: 3.2,
};

export const FixedCardWidths = OverlayTemplate.bind({
});
FixedCardWidths.args = {
    ...base,
    layout: 'fixed',
    cards: cardLayoutData.cardListOverlay?.cards || [],
};
