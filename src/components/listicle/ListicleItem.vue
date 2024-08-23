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
                headingStyle="heading-s"
            >
                {{ title }}

                <template v-slot:sub-heading>
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
                class="mt-2 mt-sm-9 mb-4 mt-lg-2 pe-lg-9"
            >
                <!-- @slot Contains the description to be shown.  -->
                <slot name="description-slot" />
            </VsCol>
            <VsCol
                cols="12"
                lg="4"
                class="key-facilities-list mt-lg-10"
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
    margin-bottom: $spacer-9;

    @include media-breakpoint-up(sm) {
        margin-bottom: $spacer-11;
    }

    .count {
        color: $vs-color-text-inverse;
        font-family: $headings-font-family;
        font-size: $font-size-8;
        line-height: $line-height-xs;
        display: block;
        text-align: center;
        width: 100%;

        &:after {
            content: "";
            border-bottom: 1px solid $vs-color-text-inverse;
            display: block;
            margin: $spacer-1 $spacer-4 0;
            margin-top: $spacer-1;

            @include media-breakpoint-up(md) {
                margin: $spacer-1 $spacer-6 0;
            }
        }

        @include media-breakpoint-up(md) {
            font-size: $font-size-9;
        }
    }

    .count__bg {
        background: $vs-color-background-tertiary;
        display: flex;
        align-items: center;
        justify-content: center;
        width: $spacer-9;
        height: $spacer-9;

        @include media-breakpoint-up(md) {
            height: 67px;
            width: 67px;
        }
    }

    &.border {
        padding: $spacer-4;

        @include media-breakpoint-up(md) {
            padding: $spacer-8;
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-8;
        }

        @include media-breakpoint-up(xl) {
            padding: $spacer-11;
        }

        @include media-breakpoint-up(xxl) {
            padding: $spacer-12;
        }
    }

    h2.vs-heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 0 $spacer-5 $spacer-3;

        .vs-heading__sub-heading {
            margin-top: $spacer-0;
        }

        @include media-breakpoint-up(md) {
            margin-bottom: 0;
        }
    }

    .vs-caption-image-map {
        height: $spacer-11;
    }

    .key-facilities-list {
        &.has-facilities {
            border-top: 1px solid $vs-color-border;
            padding-top: $spacer-4;

            @include media-breakpoint-up(sm) {
                border-top: 0;
                padding-top: 0;
            }

            @include media-breakpoint-up(lg) {
                border-left: 1px solid $vs-color-border;
            }

            .vs-icon-list {
                .vs-icon-list__item {
                    width: 80px;
                }

                @include media-breakpoint-up(sm) {
                    border-top: 1px solid $vs-color-border;
                    padding-top: $spacer-4;

                    .vs-icon-list__item {
                        width: 90px;
                    }
                }

                @include media-breakpoint-up(lg) {
                    border-top: 0;
                    padding: 0 $spacer-2;

                    .vs-icon-list__item {
                        width: 80px;
                    }
                }
                @include media-breakpoint-up(xl) {
                    padding: 0 $spacer-4;
                }

                @include media-breakpoint-up(xxl) {
                    padding: 0 $spacer-9;
                }
            }
        }
    }
}
</style>
