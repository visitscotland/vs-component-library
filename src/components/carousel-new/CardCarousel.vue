<template>
    <div
        class="vs-card-carousel"
        :id="`vs-carousel-${instanceId}`"
        :class="{ 'vs-card-carousel--fixed': isFixed }"
    >
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
            :scrollbar="{
                draggable: false,
            }"
            :breakpoints="swiperBreakpoints"
            :slides-per-view="slidesPerView"
        >
            <!-- Default slot for VsCarouselSlides -->
            <slot />
        </Swiper>
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
            default: 1.2,
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
        };
    },
    computed: {
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
};

</script>

<style lang="scss">

.vs-card-carousel {
    &--fixed {
        .swiper-slide {
            width: 240px;

            @include media-breakpoint-up(md) {
                width: 280px;
            }

            @include media-breakpoint-up(lg) {
                width: 320px;
            }
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

    .swiper {
        overflow: visible;
    }

    &:has(.swiper-button-lock) {
        .swiper-wrapper {
            display: flex;
            gap: 30px; // replaces spaceBetween
            transform: none !important;
        }

        .swiper-slide {
            width: 100% !important;
            margin-right: 0 !important;
            flex: 1 1 0;
        }

        // .vs-card-carousel--fixed {
        //     .swiper-wrapper {
        //         display: flex;
        //         gap: 30px;
        //         justify-content: flex-start; // or center
        //         transform: none !important;
        //     }

        //     .swiper-slide {
        //         margin-right: 0 !important;
        //         flex: 0 0 auto; // keep fixed width
        //     }
        // }
    }

    .swiper-scrollbar {
        height: 2px;
        background: $vs-color-border-primary;
        border-radius: 3px;

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
