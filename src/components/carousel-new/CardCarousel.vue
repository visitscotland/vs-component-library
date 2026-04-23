<template>
    <div
        class="vs-card-carousel"
        :id="`vs-carousel-${instanceId}`"
        :class="[
            carouselClasses,
            { 'is-interacting': isInteracting },
        ]"
    >
        <div class="vs-card-carousel__inner">
            <div class="vs-card-carousel__controls">
                <VsButton
                    icon-only
                    class="vs-card-carousel__control--prev me-050"
                    :class="`vs-carousel-prev-${instanceId}`"
                    icon="fa-regular fa-arrow-left"
                    variant="secondary"
                >
                    {{ previousButtonLabel }}
                </VsButton>

                <VsButton
                    icon-only
                    class="vs-card-carousel__control--next"
                    :class="`vs-carousel-next-${instanceId}`"
                    icon="fa-regular fa-arrow-right"
                    variant="secondary"
                >
                    {{ nextButtonLabel }}
                </VsButton>
            </div>

            <Swiper
                :modules="modules"
                :space-between="30"
                :navigation="{
                    prevEl: `.vs-carousel-prev-${instanceId}`,
                    nextEl: `.vs-carousel-next-${instanceId}`,
                }"
                :scrollbar="{ draggable: false }"
                :breakpoints="swiperBreakpoints"
                :slides-per-view="slidesPerView"
                @touch-start="onTouchStart"
                @touch-end="onTouchEnd"
                @slider-move="onSliderMove"
                @slide-change-transition-start="onInteractionStart"
                @slide-change-transition-end="onInteractionEnd"
            >
                <!-- Default slot for VsCarouselSlides -->
                <slot />
            </Swiper>
        </div>
    </div>
</template>

<script>
import { Swiper } from 'swiper/vue';
import {
    Navigation,
    Scrollbar,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

import VsButton from '@/components/button/Button.vue';

export default {
    name: 'VsCardCarousel',
    status: 'prototype',
    release: '0.0.1',
    components: {
        Swiper,
        VsButton,
    },
    props: {
        /**
         * Accessibility text for previous button
         */
        previousButtonLabel: {
            type: String,
            required: true,
        },
        /**
         * Accessibility text for next button
         */
        nextButtonLabel: {
            type: String,
            required: true,
        },
        /**
         * Carousel layout mode
         * - fluid: responsive slides per view (default)
         * - fixed: fixed width slides using auto layout
         */
        layout: {
            type: String,
            default: 'fluid',
            validator: (val) => ['fluid', 'fixed'].includes(val),
        },
        /**
         * Slides per view at XS breakpoint (0px+)
         */
        slidesPerViewXs: {
            type: Number,
            default: 1.4,
        },
        /**
         * Slides per view at SM breakpoint (576px+)
         */
        slidesPerViewSm: {
            type: Number,
            default: null,
        },
        /**
         * Slides per view at MD breakpoint (768px+)
         */
        slidesPerViewMd: {
            type: Number,
            default: null,
        },
        /**
         * Slides per view at LG breakpoint (992px+)
         */
        slidesPerViewLg: {
            type: Number,
            default: null,
        },
        /**
         * Slides per view at XL breakpoint (1200px+)
         */
        slidesPerViewXl: {
            type: Number,
            default: null,
        },
        /**
         * Slides per view at XXL breakpoint (1400px+)
         */
        slidesPerViewXxl: {
            type: Number,
            default: null,
        },
        /**
         * Slides per view at XXXL breakpoint (1680px+)
         */
        slidesPerViewXxxl: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            modules: [Navigation, Scrollbar],
            instanceId: `carousel-${Math.random().toString(36).slice(2, 9)}`,
            isInteracting: false,
        };
    },
    computed: {
        carouselClasses() {
            return {
                'vs-card-carousel--fixed': this.isFixed,
                'vs-card-carousel--fluid': !this.isFixed,
            };
        },

        isFixed() {
            return this.layout === 'fixed';
        },

        swiperBreakpoints() {
            if (this.isFixed) return undefined;

            const bpMap = {
                0: this.slidesPerViewXs,
                576: this.slidesPerViewSm,
                768: this.slidesPerViewMd,
                992: this.slidesPerViewLg,
                1200: this.slidesPerViewXl,
                1400: this.slidesPerViewXxl,
                1680: this.slidesPerViewXxxl,
            };

            let lastValue = null;
            const result = {
            };

            Object.entries(bpMap).forEach(([width, value]) => {
                if (value !== null) {
                    lastValue = value;
                }

                if (lastValue !== null) {
                    result[width] = {
                        slidesPerView: lastValue,
                    };
                }
            });

            return result;
        },

        slidesPerView() {
            return this.isFixed ? 'auto' : undefined;
        },
    },
    methods: {
        onTouchStart() {
            this.isInteracting = true;
        },

        onSliderMove() {
            this.isInteracting = true;
        },

        onTouchEnd() {
            // small delay feels more natural
            setTimeout(() => {
                this.isInteracting = false;
            }, 300);
        },

        onInteractionStart() {
            this.isInteracting = true;
        },

        onInteractionEnd() {
            this.endInteraction();
        },

        endInteraction() {
            clearTimeout(this._interactionTimer);

            this._interactionTimer = setTimeout(() => {
                this.isInteracting = false;
            }, 400);
        },
    },
};

</script>

<style lang="scss">

.vs-card-carousel {
    width: 100%;
    overflow: clip;

    .vs-card-carousel__inner {
        margin: 0 auto;
        padding: 0 0.75rem;

        @include media-breakpoint-up(sm) {
            max-width: 540px;
        }

        @include media-breakpoint-up(md) {
            max-width: 720px;
        }

        @include media-breakpoint-up(lg) {
            max-width: 960px;
        }

        @include media-breakpoint-up(xl) {
            max-width: 1140px;
        }

        @include media-breakpoint-up(xxl) {
            max-width: 1320px;
        }
    }

     &:has(.swiper-button-lock) {
        .swiper-wrapper {
            display: flex;
            gap: 30px;
            transform: none !important;
        }

        .swiper-slide {
            margin-right: 0!important;
        }
    }

    .swiper {
        overflow: visible;
    }

    &--fixed {
        .swiper-slide {
            width: 240px;

            @include media-breakpoint-up(md) {
                width: 292px;
            }

            @include media-breakpoint-up(lg) {
                width: 300px;
            }
        }

         &:has(.swiper-button-lock) {
            .swiper-slide {
                flex: 0 0 auto;
                margin-right: 0!important;
            }
        }
    }

    &--fluid {
        &:has(.swiper-button-lock) {
            .swiper-slide {
                flex: 1 1 0;
                width: auto !important;
            }
        }
    }

    &__controls {
        display: flex;
        justify-content: flex-end;
        padding-top: $vs-spacer-025;

        .vs-card-carousel__control--prev,
        .vs-card-carousel__control--next {
            margin-bottom: $vs-spacer-150;
        }

        .swiper-button-lock {
            display: none;
        }
    }

    &.is-interacting {
        .swiper {
            .swiper-scrollbar {
                opacity: 1;
            }
        }
    }

    .swiper-scrollbar {
        height: 2px;
        background: $vs-color-border-primary;
        border-radius: 3px;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;

        &.swiper-scrollbar-horizontal {
            top: -44px;
            left: 0;
            width: 60%;

            @include media-breakpoint-up(sm) {
                width: 75%;
            }

            @include media-breakpoint-up(md) {
                width: 80%;
            }

            @include media-breakpoint-up(lg) {
                width: 85%;
            }

            @include media-breakpoint-up(xl) {
                width: 90%;
            }
        }

        .swiper-scrollbar-drag {
            background: $vs-color-border-secondary;
            border-radius: 3px;
        }
    }
}
</style>
