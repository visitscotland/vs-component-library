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
            <SwiperSlide>
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            src="./fixtures/megalinks/ashton-lane-wide.jpg"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-xs"
                        >
                            <VsLink
                                href="#"
                                class="stretched-link"
                                variant="secondary"
                                no-visited-styles
                            >
                                Unusual accommodation in Scotland
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            <p class="truncate-2-lines">
                                Fancy staying somewhere a little different? From castles to
                                lighthouses, teepees to brochs, there's lots of unusual choices.
                            </p>
                        </VsBody>
                    </template>
                </VsCard>
            </SwiperSlide>
            <SwiperSlide>
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            src="./fixtures/megalinks/ashton-lane-wide.jpg"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-xs"
                        >
                            <VsLink
                                href="#"
                                class="stretched-link"
                                variant="secondary"
                                no-visited-styles
                            >
                                Unusual accommodation in Scotland
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            <p class="truncate-2-lines">
                                Fancy staying somewhere a little different? From castles to
                                lighthouses, teepees to brochs, there's lots of unusual choices.
                            </p>
                        </VsBody>
                    </template>
                </VsCard>
            </SwiperSlide>
            <SwiperSlide>
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            src="./fixtures/megalinks/ashton-lane-wide.jpg"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-xs"
                        >
                            <VsLink
                                href="#"
                                class="stretched-link"
                                variant="secondary"
                                no-visited-styles
                            >
                                Unusual accommodation in Scotland
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            <p class="truncate-2-lines">
                                Fancy staying somewhere a little different? From castles to
                                lighthouses, teepees to brochs, there's lots of unusual choices.
                            </p>
                        </VsBody>
                    </template>
                </VsCard>
            </SwiperSlide>
            <SwiperSlide>
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            src="./fixtures/megalinks/ashton-lane-wide.jpg"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-xs"
                        >
                            <VsLink
                                href="#"
                                class="stretched-link"
                                variant="secondary"
                                no-visited-styles
                            >
                                Unusual accommodation in Scotland
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            <p class="truncate-2-lines">
                                Fancy staying somewhere a little different? From castles to
                                lighthouses, teepees to brochs, there's lots of unusual choices.
                            </p>
                        </VsBody>
                    </template>
                </VsCard>
            </SwiperSlide>
            <SwiperSlide>
                <VsCard>
                    <template #vs-card-header>
                        <VsImg
                            src="./fixtures/megalinks/ashton-lane-wide.jpg"
                            class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover"
                        />
                    </template>

                    <template #vs-card-body>
                        <VsHeading
                            level="3"
                            heading-style="heading-xs"
                        >
                            <VsLink
                                href="#"
                                class="stretched-link"
                                variant="secondary"
                                no-visited-styles
                            >
                                Unusual accommodation in Scotland
                            </VsLink>
                        </VsHeading>

                        <VsBody>
                            <p class="truncate-2-lines">
                                Fancy staying somewhere a little different? From castles to
                                lighthouses, teepees to brochs, there's lots of unusual choices.
                            </p>
                        </VsBody>
                    </template>
                </VsCard>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
    Pagination,
    Navigation,
    Scrollbar,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import VsCard from '@/components/card/Card.vue';
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsBody from '@/components/body/Body.vue';
import VsButton from '@/components/button/Button.vue';
import { VsCol, VsRow } from '@/components/grid';

export default {
    components: {
        Swiper,
        SwiperSlide,
        VsCard,
        VsImg,
        VsHeading,
        VsLink,
        VsBody,
        VsButton,
        VsCol,
        VsRow,
    },
    data() {
        return {
            modules: [Pagination, Navigation, Scrollbar],
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
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log('slide change');
        },
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
