<template>
    <li
        class="vs-listicle-item border"
        data-test="vs-listicle-item"
    >
        <slot name="hippo-details" />

        <!-- HEADER -->
        <div class="d-flex justify-content-start align-items-top border-bottom border-white ">
            <div class="position-relative">
                <div class="count__bg">
                    <span
                        class="count"
                        aria-hidden="true"
                    >{{ index }}</span>
                </div>
            </div>
            <VsHeading
                level="2"
                heading-style="heading-s"
                class="vs-listicle-item__heading"
            >
                {{ title }}

                <template #sub-heading>
                    {{ subTitle }}
                </template>
            </VsHeading>
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
                <!-- @slot Contains the description to be shown.  -->
                <slot name="description-slot" />
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
import { VsRow, VsCol } from '@/components/grid';

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

    &__heading{
        @include media-breakpoint-up(sm) {
            @include heading-style(heading-m);
        }
    }

    .count {
        color: $vs-color-text-inverse;
        font-family: $display-font-family;
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

    .count__bg {
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
    }

    &.border {
        padding: $spacer-100;

        @include media-breakpoint-up(md) {
            padding: $spacer-200;
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-200;
        }

        @include media-breakpoint-up(xl) {
            padding: $spacer-500;
        }

        @include media-breakpoint-up(xxl) {
            padding: $spacer-600;
        }
    }

    h2.vs-heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 0 $spacer-125 $spacer-075;

        .vs-heading__sub-heading {
            margin-top: $spacer-0;
        }

        @include media-breakpoint-up(md) {
            margin-bottom: 0;
        }
    }

    .vs-caption-image-map {
        height: $spacer-500;
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
