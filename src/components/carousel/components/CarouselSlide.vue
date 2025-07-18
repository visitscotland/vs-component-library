<template>
    <VsCol
        :cols="slideCols.xs"
        :sm="slideCols.sm"
        :lg="slideCols.md"
        :xl="slideCols.lg"
        data-test="vs-carousel-slide"
        :aria-disabled="!isVisible(slideIndex)"
    >
        <div class="vs-carousel-slide">
            <VsStretchedLinkCard
                :link="linkUrl"
                :type="linkType"
                :img-src="imgSrc"
                :img-alt="imgAlt"
                :class="isVisible(slideIndex) ? 'vs-carousel-slide__card--active' : 'vs-carousel-slide__card--disabled'"
                class="vs-carousel-slide__card"
                :disabled="!isVisible(slideIndex)"
                data-test="vs-carousel-card"
            >
                <template
                    v-if="days && transport"
                    #stretched-card-panels
                >
                    <VsStretchedLinkPanels
                        :days="days"
                        :transport="transport"
                        :transport-name="transportName"
                        :days-label="daysLabel"
                    />
                </template>

                <template #stretched-card-category>
                    <span class="visually-hidden">{{ categoryLabel }}: </span>{{ category }}
                </template>

                <template #stretched-card-header>
                    <span
                        class="vs-carousel-slide__title"
                        data-test="vs-carousel-slide__title"
                    >
                        <!-- @slot Slot to contain heading -->
                        <slot name="vs-carousel-slide-heading" />
                    </span>
                </template>
            </VsStretchedLinkCard>
        </div>
    </VsCol>
</template>

<script>
import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';
import VsStretchedLinkPanels from '@/components/stretched-link-card/components/StretchedLinkPanels.vue';
import { VsCol } from '@/components/grid';

/**
* Multi purpose carousel component to use
* for carousel and slider content
*
* @displayName Carousel Slide
*/

export default {
    name: 'VsCarouselSlide',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsStretchedLinkCard,
        VsStretchedLinkPanels,
        VsCol,
    },
    inject: ['slideCols', 'visibleSlides'],
    props: {
        /**
        * The image to use in the component
        */
        imgSrc: {
            required: true,
            type: String,
        },
        /**
        * The image alt text to use in the component
        */
        imgAlt: {
            type: String,
            default: '',
        },
        /**
        * The type of link. This will set the icon.
        * `external, internal, download`
        */
        linkType: {
            type: String,
            required: true,
            validator: (value) => value.match(/(default|external|internal|download)/),
        },
        /**
        * The link destination
        */
        linkUrl: {
            type: String,
            required: true,
        },
        /**
        * Translatable text for the 'category' label
        */
        categoryLabel: {
            type: String,
            default: null,
        },
        /**
        * The category of the content
        */
        category: {
            type: String,
            default: null,
        },
        /**
        * Optional prop for number of days
        */
        days: {
            type: String,
            default: '',
        },
        /**
        * Label for days - too allow translation in CMS
        */
        daysLabel: {
            type: String,
            default: 'days',
        },
        /**
        * Optional prop for transport type (will show a the transport icon if used)
        */
        transport: {
            type: String,
            default: '',
        },
        /**
        * Display-friendly transport name
        * to allow for translation
        */
        transportName: {
            type: String,
            default: '',
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
    methods: {
        isVisible(slideNum) {
            const slideInt = parseInt(slideNum, 10);
            if (this.visibleSlides.indexOf(slideInt) >= 0) {
                return true;
            }

            return false;
        },
    },
};
</script>

<style lang="scss">
    .vs-carousel-slide {
        max-width: 100%;
        flex-shrink: 0;
        display: flex;

        .vs-carousel-slide__card {
            flex-shrink: 0;
            opacity: $opacity-50;
            transition: $duration-slowly;
            padding: $spacer-050;
            max-width: 100%;

            &--active {
                opacity: $opacity-100;
            }

            &--disabled * {
                pointer-events: none;
            }
        }

        .card-title {
            margin-bottom: $spacer-0;
        }

        .card-body {
            text-align: left;
        }
    }

    @include no-js {
        .vs-carousel-slide {
            margin-bottom: $spacer-050;

            &::after {
                content: '';
                position: absolute;
                left: $spacer-075;
                bottom: $spacer-025;
                height: 1px;
                width: calc(100% - 24px);
                background: $vs-color-border-primary;

                @include media-breakpoint-up(sm) {
                    width: calc(100% - 40px);
                    left: $spacer-125;
                }
            }

            .vs-stretched-link-card {
                opacity: $opacity-100;
                display: flex;
                flex-direction: row;
                padding: $spacer-050;
                border: none;
                height: 100%;
                cursor: pointer;

                &:hover {
                    .vs-stretched-link-card__title {
                        text-decoration: underline;
                    }
                }

                .stretched-link {
                    text-decoration: none;
                }

                .card-body {
                    background: none;
                    padding: 0;
                    align-self: flex-start;
                    width: 66%;
                    text-align: left;
                }

                &__img-container {
                    width: 33%;
                    align-self: flex-start;
                    margin-right: $spacer-100;
                }

                &__title {
                    font-size: $font-size-2;
                    color: $vs-color-text-primary;
                    text-decoration: none;
                }

                &__category {
                    margin-bottom: $spacer-050;
                }

                .card-title {
                    display: flex;
                    margin-bottom: 0;
                }

                &__content {
                    display: none;

                    p {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                }

                .vs-stretched-link-panels {
                    right: auto;
                    left: calc(33% - 4px);
                    top: $spacer-100;
                    transform: translateX(-100%);

                    &__panel {
                        display: none;
                        width: 36px;
                        height: 36px;

                        &--days {
                            display: flex;
                        }
                    }

                    &__days {
                        font-size: $font-size-4;
                        margin-bottom: 0;
                    }
                }
            }
        }

        @include media-breakpoint-up(sm) {
            .vs-stretched-link-card {
                &__content {
                    display: block;
                }
            }
        }

        @include media-breakpoint-up(lg) {
            .vs-carousel-slide {
                .vs-stretched-link-card {
                    &__title {
                        font-size: $font-size-3;
                    }

                    &__content {
                        margin: $spacer-050 0 0;
                    }
                }
            }
        }
    }
</style>
