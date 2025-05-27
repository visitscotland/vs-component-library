<template>
    <VsContainer
        v-if="variant === 'grid'"
        class="mt-075 mt-lg-200"
    >
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap
                >
                    <VsCard
                        v-for="(card, index) in cardsGroup1"
                        :key="`card-1-${index}`"
                    >
                        <template #vs-card-header>
                            <VsImg
                                :src="card.image"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                        </template>

                        <template #vs-card-body>
                            <VsHeading
                                level="3"
                                heading-style="heading-s"
                            >
                                <VsLink
                                    :href="card.link"
                                    class="stretched-link"
                                    variant="secondary"
                                >
                                    {{ card.title }}
                                </VsLink>
                            </VsHeading>

                            <VsRichTextWrapper class="truncate-2-lines">
                                {{ card.description }}
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>
                </VsCardGroup>

                <VsCardGroup
                    scroll-snap
                    :cards-per-row="4"
                    class="mt-700"
                >
                    <VsCard
                        v-for="(card, index) in cardsGroup2"
                        :key="`card-2-${index}`"
                    >
                        <template #vs-card-header>
                            <VsImg
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

                            <VsRichTextWrapper class="truncate-2-lines">
                                {{ card.description }}
                            </VsRichTextWrapper>
                        </template>
                    </VsCard>
                </VsCardGroup>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>

import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

/**
 * @displayName Card Layout
 */
export default {
    name: 'VsCardLayout',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsCardGroup,
        VsCard,
        VsHeading,
        VsImg,
        VsLink,
        VsRichTextWrapper,
    },
    props: {
        /**
        * Card grid pattern variant
        */
        variant: {
            type: String,
            default: 'grid',
            validator: (value) => value.match(/(grid)/),
        },
    },
    data() {
        return {
            cardsGroup1: [
                {
                    image: './fixtures/megalinks/ashton-lane-wide.jpg',
                    title: '11 off-the-beaten-track holiday destinations',
                    description: 'Escape the tourist trails with out best off-the-beaten-track holiday ideas',
                    link: '#',
                },
                {
                    image: './fixtures/megalinks/glentress-forest.jpg',
                    title: 'Scottish food & drink',
                    description: 'Get a taste for Scotland and discover the country\'s mouth-watering food and drink.',
                    link: '#',
                },
                {
                    image: './fixtures/megalinks/grand-hotel.jpg',
                    title: 'Unusual accommodation in Scotland',
                    description: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
                    link: '#',
                },
            ],
            cardsGroup2: [
                {
                    image: './fixtures/megalinks/wellness.jpg',
                    title: 'Walking in Scotland',
                    description: 'Walking in Scotland means mighty mountains to conquer.',
                    link: '#',
                },
                {
                    image: './fixtures/megalinks/outlander-wedding.jpg',
                    title: 'Scottish arts & culture',
                    description: 'Enrich your cultural horizons and learn about all the fantastic galleries, cinemas, museums, and performances throughout Scotland.',
                    link: '#',
                },
                {
                    image: './fixtures/megalinks/illustrated-map-of-scotland.jpg',
                    title: '11 off-the-beaten-track holiday destinations',
                    description: 'Escape the tourist trails with out best off-the-beaten-track holiday ideas.',
                    link: '#',
                },
                {
                    image: './fixtures/megalinks/ashton-lane-wide.jpg',
                    link: '#',
                    title: 'Walking in Scotland',
                    description: 'Walking in Scotland means mighty mountains to conquer.',
                },
            ],
        };
    },
};
</script>
