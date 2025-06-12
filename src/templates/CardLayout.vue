<template>
    <VsContainer
        v-if="variant === 'grid'"
        class="mt-075 mt-lg-200"
    >
        <VsRow>
            <VsCol>
                <VsCardGroup
                    scroll-snap
                    :cards-per-row="cardsPerRow"
                    :key="`card-group-${cardsPerRow}`"
                >
                    <VsCard
                        v-for="(card, index) in cardGroup"
                        :key="`card-2-${index}`"
                        :accent-bar="card.accentBar"
                        :fill-color="card.fillColor"
                        :card-style="card.style"
                    >
                        <template #vs-card-header>
                            <VsImg
                                v-if="card.image"
                                :src="card.image"
                                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                            />
                            <VsBadge
                                v-if="card.badgeTitle"
                                variant="subtle"
                                class="mt-125 mx-075"
                            >
                                {{ card.badgeTitle }}
                            </VsBadge>
                        </template>

                        <template #vs-card-body>
                            <div :class="cardType === 'link' ? 'px-125' : ''">
                                <VsHeading
                                    level="3"
                                    :heading-style="headingSize"
                                >
                                    <VsLink
                                        :href="card.link"
                                        class="stretched-link"
                                        variant="secondary"
                                    >
                                        {{ card.title }}
                                    </VsLink>
                                </VsHeading>

                                <VsBody
                                    class="mb-150"
                                    :class="truncateClass"
                                >
                                    {{ card.description }}
                                </VsBody>
                            </div>
                        </template>

                        <template #vs-card-footer>
                            <VsArticleDetails
                                v-if="card.metaData"
                                class="px-125"
                                :article-read-time="card.metaData"
                            />
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
import VsBody from '@/components/body/Body.vue';
import VsArticleDetails from '@/components/article-details/ArticleDetails.vue';
import VsBadge from '@/components/badge/Badge.vue';

import splitCards from '../assets/fixtures/cards/split-cards.json';
import linkCards from '../assets/fixtures/cards/link-cards.json';

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
        VsBody,
        VsArticleDetails,
        VsBadge,
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
        /**
        * card type to display
        */
        cardType: {
            type: String,
            default: 'split',
            validator: (value) => value.match(/(split|link)/),
        },
        /**
        * Cards to display per row
        */
        cardsPerRow: {
            type: Number,
            default: 3,
        },
    },
    data() {
        return {
            splitCard3: splitCards.splitCard3,
            splitCard4: splitCards.splitCard4,
            linkCard3: linkCards.linkCard3,
            linkCard4: linkCards.linkCard4,
        };
    },
    computed: {
        cardGroup() {
            if (this.cardType === 'split') {
                return this.cardsPerRow === 3 ? this.splitCard3 : this.splitCard4;
            }
            if (this.cardType === 'link') {
                return this.cardsPerRow === 3 ? this.linkCard3 : this.linkCard4;
            }
            return [];
        },
        headingSize() {
            return this.cardsPerRow === 3 ? 'heading-xs' : 'heading-xxs';
        },
        truncateClass() {
            return this.cardType === 'split' ? 'truncate-2-lines' : 'truncate-3-lines';
        },
    },
};
</script>
