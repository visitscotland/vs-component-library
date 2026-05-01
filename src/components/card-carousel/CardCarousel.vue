<template>
    <section
        class="vs-card-carousel"
        :id="`vs-carousel-${instanceId}`"
        :class="carouselClasses"
        aria-roledescription="carousel"
        :aria-label="carouselAriaLabel"
    >
        <div class="vs-card-carousel__inner">
            <div class="vs-card-carousel__header">
                <div :class="scrollbarContainerClasses" />

                <div class="vs-card-carousel__controls">
                    <VsButton
                        icon-only
                        class="vs-card-carousel__control--prev"
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
            </div>

            <Swiper
                :modules="modules"
                :space-between="24"
                :navigation="swiperNavigation"
                :scrollbar="swiperScrollbar"
                :breakpoints="swiperBreakpoints"
                :a11y="swiperA11y"
                @touch-start="startInteraction"
                @touch-end="endInteraction"
                @slider-move="startInteraction"
                @slide-change-transition-start="startInteraction"
                @slide-change-transition-end="endInteraction"
            >
                <!-- Default slot for VsCarouselSlides -->
                <slot />
            </Swiper>
        </div>
    </section>
</template>

<script>
import { useId } from 'vue';
import { Swiper } from 'swiper/vue';
import {
    Navigation,
    Scrollbar,
    A11y,
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
         * Accessibility label for the carousel group
         */
        carouselAriaLabel: {
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
    setup() {
        const instanceId = useId();
        return {
            instanceId,
        };
    },
    data() {
        return {
            modules: [Navigation, Scrollbar, A11y],
            isInteracting: false,
        };
    },
    computed: {
        carouselClasses() {
            return {
                'is-interacting': this.isInteracting,
            };
        },
        scrollbarContainerClasses() {
            return [
                'vs-card-carousel__scrollbar-container',
                `vs-card-carousel__scrollbar-${this.instanceId}`,
            ];
        },
        swiperNavigation() {
            return {
                prevEl: `.vs-carousel-prev-${this.instanceId}`,
                nextEl: `.vs-carousel-next-${this.instanceId}`,
            };
        },
        swiperScrollbar() {
            return {
                el: `.vs-card-carousel__scrollbar-${this.instanceId}`,
                draggable: false,
            };
        },
        swiperA11y() {
            return {
                scrollOnFocus: true,
                slideLabelMessage: 'Slide {{index}} of {{slidesLength}}',
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
    beforeUnmount() {
        clearTimeout(this._interactionTimer);
    },
    methods: {
        /**
        * Sets isInteracting to true when user starts
        * interacting with the carousel (touch or mouse).
        */
        startInteraction() {
            this.isInteracting = true;
        },
        /**
        * Sets isInteracting to false with a delay to prevent
        * hiding the scrollbar immediately after interaction ends.
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

        // ensures carousel content is contained
        // within max-width breakpoints
        @include container-max-widths();
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
            gap: 24px;
            transform: none !important;
        }

        .swiper-slide {
            flex: 1 1 0;
            width: auto !important;
            margin-right: 0!important;
        }
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: $vs-spacer-150;
        margin-bottom: $vs-spacer-150;
    }

    &__controls {
        display: flex;
        gap: $vs-spacer-050;
        flex-shrink: 0;

        .swiper-button-lock {
            display: none;
        }
    }

    &.is-interacting {
        .vs-card-carousel__scrollbar-container {
            opacity: $opacity-100;
        }
    }

    &__scrollbar-container {
        flex: 1;
        min-width: 0;
        height: 2px;
        background: $vs-color-border-primary;
        border-radius: $vs-radius-tiny;
        opacity: $opacity-0;
        transition: opacity 0.4s ease-in-out;

        .swiper-scrollbar-drag {
            background: $vs-color-border-secondary;
            border-radius: $vs-radius-tiny;
        }
    }
}

@include no-js {
    .vs-card-carousel {
        overflow: auto;

        &__controls,
        .swiper-scrollbar {
            display: none;
        }

        .swiper-wrapper {
            flex-wrap: wrap;
        }
    }
}
</style>
