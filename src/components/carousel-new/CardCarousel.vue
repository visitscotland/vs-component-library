<template>
    <div
        class="vs-card-carousel"
        :id="`vs-carousel-${instanceId}`"
        :class="carouselClasses"
    >
        <div class="vs-card-carousel__inner">
            <div class="vs-card-carousel__controls">
                <VsButton
                    icon-only
                    class="vs-card-carousel__control--prev me-050"
                    :class="`vs-carousel-prev-${instanceId}`"
                    icon="vs-icon-control-previous"
                    variant="secondary"
                >
                    {{ previousButtonLabel }}
                </VsButton>

                <VsButton
                    icon-only
                    class="vs-card-carousel__control--next"
                    :class="`vs-carousel-next-${instanceId}`"
                    icon="vs-icon-control-next"
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
                'is-interacting': this.isInteracting,
            };
        },
        swiperBreakpoints() {
            const breakpointMap = {
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

            // Iterate through breakpoints in ascending order
            // and apply last defined slidesPerView value.
            //
            // This avoids having to set every breakpoint
            // prop when it's the same as the previous.
            Object.entries(breakpointMap).forEach(([width, value]) => {
                if (value !== null) {
                    lastValue = value;
                }

                if (lastValue !== null) {
                    result[width] = {
                        slidesPerView: lastValue,
                    };
                }
            });

            // returns breakpoint map for Swiper
            return result;
        },
    },
    methods: {
        /**
        * Sets itsInteracting to true when user starts
        * interacting with the carousel (touch or mouse).
        */
        onTouchStart() {
            this.isInteracting = true;
        },
        /**
        * Sets itsInteracting to true when user moves
        * the slider (touch or mouse)
        */
        onSliderMove() {
            this.isInteracting = true;
        },
        /**
        * Sets itsInteracting to false when user stops interacting
        * with the slider (touch or mouse). It's a delay to prevent it
        * from hiding the scrollbar immediately.
        */
        onTouchEnd() {
            setTimeout(() => {
                this.isInteracting = false;
            }, 400);
        },
        /**
        * Sets itsInteracting to true when user change slide
        * using navigation buttons.
        */
        onInteractionStart() {
            this.isInteracting = true;
        },
        /**
        * Ends interaction when user finishes
        * changing slides using navigation buttons.
        */
        onInteractionEnd() {
            this.endInteraction();
        },
        /**
        * Sets itsInteracting to false with a delay. Used after slide
        * changes to prevent hiding the scrollbar immediately.
        */
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
        padding: $vs-spacer-025 $vs-spacer-075;

        @include media-breakpoint-up(sm) {
            max-width: $max-container-width-sm;
        }

        @include media-breakpoint-up(md) {
            max-width: $max-container-width-md;
        }

        @include media-breakpoint-up(lg) {
            max-width: $max-container-width-lg;
        }

        @include media-breakpoint-up(xl) {
            max-width: $max-container-width-xl;
        }

        @include media-breakpoint-up(xxl) {
            max-width: $max-container-width-xxl;
        }
    }

    .swiper {
        overflow: visible;
    }

    .swiper-slide {
        display: flex;
        height: auto;
    }

    &:has(.swiper-button-lock) {
        .swiper-wrapper {
            display: flex;
            gap: 30px;
            transform: none !important;
        }

        .swiper-slide {
            flex: 1 1 0;
            width: auto !important;
            margin-right: 0!important;
        }
    }

    &__controls {
        display: flex;
        justify-content: flex-end;

        .vs-card-carousel__control--prev,
        .vs-card-carousel__control--next {
            margin-bottom: $vs-spacer-150;
        }

        .swiper-button-lock {
            display: none;
        }
    }

    &.is-interacting {
        .swiper-scrollbar {
            opacity: $opacity-100;
        }
    }

    .swiper-scrollbar {
        height: 2px;
        background: $vs-color-border-primary;
        border-radius: $vs-radius-tiny;
        opacity: $opacity-0;
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
            border-radius: $vs-radius-tiny;
        }
    }
}
</style>
