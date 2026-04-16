<template>
    <div class="vs-carousel-swiper">
        <VsRow class="d-flex justify-content-end mb-100">
            <VsCol cols="auto">
                <VsButton
                    icon-only
                    class="vs-carousel-swiper__control--prev me-050"
                    icon="fa-regular fa-arrow-left"
                    variant="secondary"
                    ref="prevEl"
                >
                    Previous
                </VsButton>

                <VsButton
                    icon-only
                    class="vs-carousel-swiper__control--next"
                    icon="fa-regular fa-arrow-right"
                    variant="secondary"
                    ref="nextEl"
                >
                    Next
                </VsButton>
            </VsCol>
        </VsRow>

        <Swiper
            :modules="modules"
            :space-between="30"
            :navigation="{
                prevEl: '.vs-carousel-swiper__control--prev',
                nextEl: '.vs-carousel-swiper__control--next',
            }"
            :scrollbar="{
                draggable: false,
            }"
            :breakpoints="breakpoints"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
        >
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
import { VsCol, VsRow } from '@/components/grid';

export default {
    components: {
        Swiper,
        VsButton,
        VsCol,
        VsRow,
    },
    data() {
        return {
            modules: [Navigation, Scrollbar],
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        };
    },
};

</script>

<style lang="scss">

.vs-carousel-swiper {
    .swiper {
        overflow: visible;
    }

    .swiper-scrollbar {
        height: 2px;
        background: $vs-color-border-primary;
        border-radius: 3px;

        &.swiper-scrollbar-horizontal {
            top: -40px;
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
