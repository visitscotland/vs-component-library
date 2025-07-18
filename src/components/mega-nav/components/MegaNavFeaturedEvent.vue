<template>
    <VsStretchedLinkCard
        v-if="featuredEvent"
        :link="featuredEvent.productLink.link"
        type="internal"
        :img-src="featuredEvent.images[0].mediaUrl"
        :img-alt="featuredEvent.name"
        class="vs-mega-nav-featured-event"
        data-test="vs-mega-nav-featured-event"
        data-chromatic="ignore"
    >
        <template #stretched-card-content>
            <p
                v-if="featuredEvent && featuredEvent.opening"
                class="vs-mega-nav-featured-event__date-range"
            >
                {{ featuredEvent.opening.period.label }}&nbsp;
                <span class="vs-mega-nav-featured-event__date-detail">
                    {{ featuredEvent.opening.period.startDay }}
                </span>
            </p>
            <p class="vs-mega-nav-featured-event__title">
                {{ featuredEvent.name }}
            </p>
            <p
                v-if="featuredEvent && featuredEvent.address"
                class="vs-mega-nav-featured-event__location"
            >
                {{ featuredEvent.address.shortAddress }}
            </p>
        </template>

        <template #stretched-card-link>
            {{ featuredEvent.productLink.label }}
        </template>
    </VsStretchedLinkCard>
</template>

<script>
import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';

import axios from 'axios';

/**
 *  This component is used to show a featured event in the meganav
 *
 * @displayName MegaNav Featured Event
 */

export default {
    name: 'VsMegaNavFeaturedEvent',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsStretchedLinkCard,
    },
    props: {
        /**
        * URL to retrieve the information about the featured event
        * from, if no response do not display
        */
        sourceUrl: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            featuredEvent: null,
        };
    },
    mounted() {
        if (this.sourceUrl) {
            this.retrieveFeaturedEvent();
        }
    },
    methods: {
        /**
         * Invoked when mounted, retrieves a featured event from the dms
         */
        retrieveFeaturedEvent() {
            axios.get(this.sourceUrl)
                .then((response) => {
                    if (response.data.data.products && response.data.data.products.length) {
                        [this.featuredEvent] = response.data.data.products;
                    }
                })
                .catch(() => {
                    this.featuredEvent = null;
                });
        },
    },
};
</script>

<style lang="scss">
    .card.vs-mega-nav-featured-event {
        border-top: 1px solid $vs-color-border-primary;
        margin-bottom: -#{$spacer-050};

        @include media-breakpoint-up(lg) {
            margin-bottom: $spacer-0;
        }

        &:focus {
            .vs-stretched-link-card__link {
                outline: 2px;
            }
        }

        &--bottom {
            bottom: 0;
            top: auto;
        }

        .card-body {
            position: absolute;
            width: 80%;
            bottom: 0;
            left: 0;
            background: $vs-elevation-surface-raised;
            padding: $spacer-0 $spacer-0 $spacer-100;
            border-left: $spacer-025 solid $vs-color-border-highlight;

            @include media-breakpoint-up(md) {
                padding: $spacer-0;
            }

            @include media-breakpoint-up(lg) {
                border-left-width: $spacer-0;
            }
        }

        .card-title {
            display: none;
        }

        .vs-stretched-link-card__content {
            padding: $spacer-0 $spacer-125;

            @include media-breakpoint-up(lg) {
                border-left: $spacer-025 solid $vs-color-border-highlight;
            }
        }

        .vs-stretched-link-card__link {
            font-size: $small-font-size;
            margin-left: $spacer-125;

            @include media-breakpoint-up(lg) {
                margin-left: $spacer-0;
            }

            &:hover {
                text-decoration: none;
            }
        }

        .vs-mega-nav-featured-event__date-range {
            color: $vs-color-text-highlight;
            margin-bottom: $spacer-050;
            font-size: $small-font-size;
        }

        .vs-mega-nav-featured-event__date-detail {
            font-weight: $vs-font-weight-medium;
        }

        .vs-mega-nav-featured-event__title {
            font-size: $small-font-size;
            font-weight: $vs-font-weight-medium;
            margin-bottom: $spacer-0;

            @include truncate-text(2);
        }

        .vs-mega-nav-featured-event__location {
            font-size: $small-font-size;

            @include truncate-text(1);
        }

        @include media-breakpoint-up(sm) {
            display: flex;
            flex-direction: row-reverse;

            .card-title {
                font-size: $font-size-base;
            }

            .card-body {
                position: initial;
                width: auto;
                max-width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                // IE11 fix as it doesn't like position: initial
                @media screen and (-ms-high-contrast: active), screen and
                    (-ms-high-contrast: none) {
                    position: relative;
                }
            }

            .vs-stretched-link-card__img-container {
                width: 245px;
                height: auto;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-075;
            flex-direction: column;
            border-top: none;

            .vs-stretched-link-card__img-container {
                width: 100%;
            }

            .vs-stretched-link-card__link {
                align-self: flex-end;
                padding: $spacer-050;
            }
        }
    }

    @include no-js {
        .card.vs-mega-nav-featured-event {
            display: none;
        }
    }
</style>
