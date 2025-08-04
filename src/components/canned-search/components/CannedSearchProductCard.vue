<template>
    <VsCol
        :cols="slideCols.xs"
        :sm="slideCols.sm"
        :lg="slideCols.md"
        :xl="slideCols.lg"
        class="vs-carousel-slide__card"
        :aria-disabled="!isVisible()"
    >
        <div
            class="vs-product-card"
            :class="!isVisible() ? 'vs-product-card--disabled' : ''"
            data-test="vs-product-card"
        >
            <section
                class="card"
                v-bind="$attrs"
            >
                <div class="vs-product-card__image-container">
                    <div class="vs-product-card__image-inner-container">
                        <VsImg
                            :src="imgSrc"
                            alt=""
                            sizes="(min-width: 768px) 50vw, 100vw"
                            :use-generic-lqip="useGenericLqip"
                            class="vs-product-card__img"
                            data-test="vs-product-card__img"
                            data-chromatic="ignore"
                        />
                    </div>
                    <!--
                        @slot Holds badges that appear over the image
                        Expects a VsCannedSearchBadges component
                    -->
                    <slot
                        name="vs-canned-search-badges"
                    />
                </div>

                <div
                    class="card-body"
                    :class="modCardBody"
                >
                    <VsHeading
                        level="3"
                        heading-style="heading-xs"
                        class="card-title vs-product-card__title"
                        data-test="vs-product-card__title"
                    >
                        <VsLink
                            :href="detailLink.link"
                            class="stretched-link vs-product-card__link"
                            data-test="vs-product-card__link"
                            :disabled="!isVisible()"
                        >
                            {{ title }}
                        </VsLink>
                    </VsHeading>
                    <!--
                        @slot Holds an optional sub-heading for the product card
                        Expects a VsCannedSearchSubHeading component
                    -->
                    <slot
                        name="vs-canned-search-sub-heading"
                    />
                    <!--
                        @slot Holds an optional star rating
                        Expects a VsCannedSearchStars component
                    -->
                    <slot
                        name="vs-canned-search-star-rating"
                    />
                    <!--
                        @slot Holds an optional list of categories
                        Expects a VsCannedSearchCategories component
                    -->
                    <slot
                        name="vs-canned-search-categories"
                    />
                    <div class="vs-product-card__description">
                        <!--
                            @slot Holds the formatted info about a tour including months it runs
                            and the locations it departs from. Separated from description to allow
                            html formatting

                            Expects html
                        -->
                        <slot
                            name="vs-canned-search-tour-info"
                        />
                        <p
                            class="vs-product-card__description-inner"
                            v-if="description"
                        >
                            {{ description }}
                        </p>
                        <VsLink
                            :href="detailLink.link"
                            class="vs-product-card__description-link"
                            :disabled="!isVisible()"
                        >
                            {{ detailLink.label }} <span class="visually-hidden">: {{ title }}</span>
                        </VsLink>
                    </div>
                </div>
                <div
                    class="vs-product-card__logos-container"
                    data-chromatic="ignore"
                >
                    <!--
                        @slot Holds an optional list of logos and awards that the product has won
                        Expects a VsCannedSearchLogos component
                    -->
                    <slot
                        name="vs-canned-search-logos"
                    />
                </div>
            </section>
            <!--
                @slot Holds the summary box for the product card
                Expects a VsCannedSearchSummaryBox component
            -->
            <slot
                name="vs-canned-search-summary"
            />
        </div>
    </VsCol>
</template>

<script>
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsCol from '@/components/grid/Col.vue';

/**
* Generic product card for canned search
*
* @displayName Canned Search Product Card
*/
export default {
    name: 'VsCannedSearchProductCard',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsImg,
        VsHeading,
        VsLink,
        VsCol,
    },
    inject: ['slideCols', 'visibleSlides'],
    provide() {
        return {
            slideVisible: this.isVisible,
        };
    },
    props: {
        /**
        * The type of product being searched for by the canned search
        * the card appears in, dictates certain layout elements
        */
        searchType: {
            type: String,
            default: '',
        },
        /**
        * The image to use in the component
        */
        imgSrc: {
            required: true,
            type: String,
        },
        /**
        * The title of the product in the card
        */
        title: {
            required: true,
            type: String,
        },
        /**
         * The duration of the product, if it should be shown as part of the main card body
         * rather than in the summary box, will be truncated if >2 lines
         *
         * Expects an object with a label, a startDay and an optional endDay
         */
        inBodyDuration: {
            type: Object,
            default: null,
        },
        /**
        * The description of the product, will be truncated if >2 lines
        */
        description: {
            type: String,
            default: '',
        },
        /**
        * An object containing a link to product details, should contain a `url`
        * field, a `label` field and a `type` field
        */
        detailLink: {
            type: Object,
            required: true,
        },
        /**
        * Mandatory index of slide -
        * needed to calculate active slides
        */
        slideIndex: {
            type: String,
            required: true,
        },
    },
    computed: {
        /**
         * Calculates any required modified classes for the card-body, depending on the
         * searchType provided
         */
        modCardBody() {
            if (
                this.searchType === 'even'
                || this.searchType === 'cate'
            ) {
                return 'card-body--short';
            }

            return '';
        },
        /**
         * TMS images currently aren't passed to the image scaler, and as such return the
         * full quality image when we request the xxs one causing some significant performance
         * issues in tours canned searches. If the searchType is tour, use a generic
         * placeholder rather than the specified one.
         *
         * Remove when TMS images are scaled properly.
         */
        useGenericLqip() {
            return this.searchType === 'tour';
        },
    },
    methods: {
        /**
         * Detects if the card is one of the currently visible cards in the carousel
         * so it can be disabled if not
         *
         * @returns {Boolean} true if card is visible
         */
        isVisible() {
            const slideInt = parseInt(this.slideIndex, 10);
            if (this.visibleSlides.indexOf(slideInt) >= 0) {
                return true;
            }

            return false;
        },
    },
};
</script>

<style lang="scss">
    .vs-product-card {
        text-align: left;

        .card {
            transition: box-shadow $duration-slowly;
            border: none;
            position: relative;
            padding-bottom: $vs-spacer-125;

            &:hover {
                .vs-product-card__title a{
                    text-decoration: underline;
                }
            }
        }

        .card-body {
            padding: $vs-spacer-025 $vs-spacer-0 $vs-spacer-0;
            min-height: 11.5rem;

            &--short {
                min-height: 10rem;
            }
        }

        .stretched-link {
            color: $vs-color-text-primary;
            text-decoration: none;
            display: block;

            &:focus {
                @extend %outline-link-focus;
            }
        }

        .vs-product-card__link {
            &:focus {
                border: $vs-border-width-md solid $vs-color-interaction-focus;
            }
        }

        .vs-product-card__image-container {
            position: relative;
            height: 0;
            padding-bottom: 66.6%
        }

        .vs-product-card__image-inner-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .vs-product-card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            align-self: flex-start;
            flex-shrink: 0; // IE11 fix, prevents image vertical stretching
        }

        .vs-product-card__title {
            display: flex;
            margin: $vs-spacer-075 $vs-spacer-0 $vs-spacer-050;

            @include media-breakpoint-up(md) {
                font-size: $vs-font-size-heading-xs;
            }

            @include truncate-text(2);
        }

        .vs-product-card__description {
            font-size: $font-size-4;
            height: $vs-spacer-200;

            p {
                margin-bottom: $vs-spacer-025;
            }

            .vs-product-card__description-inner {
                @include truncate-text(2);
            }
        }

        &--disabled {
            .card {
                opacity: $opacity-50;
            }

            .card:hover {
                .vs-product-card__title a{
                    text-decoration: none;
                }
            }

            .stretched-link {
                cursor: default;
            }
        }
    }

    @include no-js {
        .vs-product-card {
            &--disabled {
                .card {
                    opacity: $opacity-100;

                    .vs-product-card__title a{
                        text-decoration: underline;
                    }
                }

                .stretched-link {
                    cursor: pointer;
                }
            }
        }
    }
</style>
