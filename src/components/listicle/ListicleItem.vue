<template>
    <li
        class="vs-listicle-item border"
        data-test="vs-listicle-item"
    >
        <slot name="hippo-details" />

        <!-- HEADER -->
        <div
            class="vs-listicle-item__header"
            data-test="vs-listicle-item-heading"
        >
            <div class="count__bg">
                <span
                    class="count"
                    aria-hidden="true"
                >{{ index }}</span>
            </div>
            <VsHeading
                level="2"
                heading-style="heading-s"
                class="vs-listicle-item__title mb-025"
                no-margins
            >
                {{ title }}
            </VsHeading>
            <VsDetail
                class="vs-listicle-item__detail"
                no-margins
            >
                {{ subTitle }}
            </VsDetail>
        </div>

        <!-- BODY -->
        <!-- @slot Contains the image to be shown.  -->
        <slot name="image-slot" />

        <VsRow>
            <VsCol
                cols="12"
                lg="8"
                class="mt-050 mt-sm-300 mb-100 mt-lg-050 pe-lg-300"
            >
                <VsBody>
                    <!-- @slot Contains the description to be shown.  -->
                    <slot name="description-slot" />
                </VsBody>
            </VsCol>
            <VsCol
                cols="12"
                lg="4"
                class="key-facilities-list mt-lg-400"
                :class="[hasKeyFacilitiesSlot ? 'has-facilities' : '']"
            >
                <!-- @slot Contains the facilities list to be shown.  -->
                <slot name="facilities-slot" />
            </VsCol>
        </VsRow>
    </li>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsDetail from '@/components/detail/Detail.vue';
import { VsRow, VsCol } from '@/components/grid';
import VsBody from '@/components/body/Body.vue';

/**
 * TODO: Document usage
 *
 * @displayName Listicle Item
 */
export default {
    name: 'VsListicleItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsRow,
        VsCol,
        VsBody,
        VsDetail,
    },
    props: {
        /**
         * The index value for the listicle item to be shown on the header
         */
        index: {
            type: String,
            default: '',
        },
        /**
         * The listicle item title
         */
        title: {
            type: String,
            default: '',
        },
        /**
         * The listicle item subtitle
         */
        subTitle: {
            type: String,
            default: '',
        },
    },
    computed: {
        hasKeyFacilitiesSlot() {
            return !!this.$slots['facilities-slot'];
        },
    },
};
</script>

<style lang="scss">
.vs-listicle-item {
    margin-bottom: $spacer-300;

    @include media-breakpoint-up(sm) {
        margin-bottom: $spacer-500;
    }

    &__header {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: $spacer-100;
        margin-bottom: $spacer-075;

        .count__bg {
            grid-column: 1;
            grid-row: span 2;
            position: relative;
            background: $vs-color-background-highlight;
            display: flex;
            align-items: center;
            justify-content: center;
            width: $spacer-300;
            height: $spacer-300;

            @include media-breakpoint-up(md) {
                height: 67px;
                width: 67px;
            }

            .count {
                color: $vs-color-text-inverse;
                font-family: $vs-font-family-display;
                font-size: $font-size-8;
                line-height: $line-height-xs;
                display: block;
                text-align: center;
                width: 100%;

                &:after {
                    content: "";
                    border-bottom: 1px solid $vs-color-text-inverse;
                    display: block;
                    margin: $spacer-025 $spacer-100 0;
                    margin-top: $spacer-025;

                    @include media-breakpoint-up(md) {
                        margin: $spacer-025 $spacer-150 0;
                    }
                }

                @include media-breakpoint-up(md) {
                    font-size: $font-size-9;
                }
            }
        }

        .vs-listicle-item__title,
        .vs-listicle-item__detail {
            grid-column: 2;
        }
    }

    &.border {
        padding: $spacer-100;

        @include media-breakpoint-up(md) {
            padding: $spacer-200;
        }

        @include media-breakpoint-up(xl) {
            padding: $spacer-500;
        }

        @include media-breakpoint-up(xxl) {
            padding: $spacer-600;
        }
    }

    .key-facilities-list {
        &.has-facilities {
            border-top: 1px solid $vs-color-border-primary;
            padding-top: $spacer-100;

            @include media-breakpoint-up(sm) {
                border-top: 0;
                padding-top: 0;
            }

            @include media-breakpoint-up(lg) {
                border-left: 1px solid $vs-color-border-primary;
            }

            .vs-icon-list {
                .vs-icon-list__item {
                    width: 80px;
                }

                @include media-breakpoint-up(sm) {
                    border-top: 1px solid $vs-color-border-primary;
                    padding-top: $spacer-100;

                    .vs-icon-list__item {
                        width: 90px;
                    }
                }

                @include media-breakpoint-up(lg) {
                    border-top: 0;
                    padding: 0 $spacer-050;

                    .vs-icon-list__item {
                        width: 80px;
                    }
                }
                @include media-breakpoint-up(xl) {
                    padding: 0 $spacer-100;
                }

                @include media-breakpoint-up(xxl) {
                    padding: 0 $spacer-300;
                }
            }
        }
    }
}
</style>
