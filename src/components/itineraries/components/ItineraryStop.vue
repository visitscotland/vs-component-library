<template>
    <li
        class="vs-itinerary-stop"
        data-test="vs-itinerary-stop"
    >
        <div class="vs-itinerary-stop__border">
            <div
                class="vs-itinerary-stop__header"
                data-test="vs-itinerary-stop-heading"
            >
                <div class="vs-itinerary-stop__marker">
                    <VsIcon
                        icon="fa-solid fa-location-pin"
                        variant="highlight"
                        size="xl"
                    />
                    <span
                        class="vs-itinerary-stop__count"
                        aria-hidden="true"
                        data-test="vs-itinerary-stop-marker"
                    >{{ stopNumber }}</span>
                </div>
                <VsHeading
                    level="3"
                    heading-style="heading-s"
                    class="vs-itinerary-stop__title mt-0"
                >
                    {{ stopLabel }}
                </VsHeading>
                <p class="vs-itinerary-stop__sub-heading">
                    {{ stopTitle }}
                </p>
            </div>

            <!-- @ Default slot for the image component for the stop -->
            <slot />

            <VsBody>
                <!-- @slot The description content for the stop -->
                <slot name="stop-description" />
            </VsBody>

            <!-- @slot Indicator of length of time to explore stop -->

            <slot name="stop-time-to-explore" />

            <!-- @slot The tips content for the stop -->
            <slot name="stop-tips" />

            <div
                class="vs-itinerary-stop__details-container"
                data-chromatic="ignore"
            >
                <div
                    class="vs-itinerary-stop__address"
                    v-if="!!$slots['stop-address']"
                    data-test="vs-itinerary-stop-address"
                >
                    <!-- @slot The address component for the stop -->
                    <slot name="stop-address" />
                </div>

                <!-- @slot The opening hours components for the stop -->
                <slot name="stop-info" />
            </div>

            <!-- @slot The facilities content for the stop -->
            <slot name="stop-facilities" />
        </div>
        <template v-if="!!$slots['stop-buttons']">
            <!-- @slot The button content for the stop -->
            <slot name="stop-buttons" />
        </template>
    </li>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsBody from '@/components/body/Body.vue';

/**
 * Itinerary Day list items.
 *
 * @displayName Itinerary Stop
 */

export default {
    name: 'VsItineraryStop',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsIcon,
        VsBody,
    },
    props: {
        /**
         * Label used for the word 'Stop'
         */
        stopLabel: {
            type: String,
            required: true,
        },
        /**
         * Number of the stop in the component
         */
        stopNumber: {
            type: String,
            required: true,
        },
        /**
        * Title of the stop in the component
        */
        stopTitle: {
            type: String,
            required: true,
        },

    },
};
</script>

<style lang="scss">
.vs-itinerary-stop {
    margin-bottom: $spacer-300;

    @include media-breakpoint-up(sm) {
        margin-bottom: $spacer-600;
    }

    &:last-of-type {
        margin-bottom: 0;

        .vs-itinerary-stop__border {
            padding-bottom: $spacer-200;
        }
    }

    &__header {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: $spacer-100;
        margin-bottom: $spacer-075;

        .vs-itinerary-stop__marker {
            grid-column: 1;
            grid-row: span 2;
            position: relative;

            .vs-itinerary-stop__count {
                color: $vs-color-text-inverse;
                font-family: $display-font-family;
                font-size: $font-size-4;
                display: block;
                position: absolute;
                top: 5px;
                left: 0;
                text-align: center;
                width: 100%;
            }
        }

        .vs-itinerary-stop__title {
            grid-column: 2;
        }

        .vs-itinerary-stop__sub-heading {
            grid-column: 2;
            @include heading-style(heading-xxs, false);
        }
    }

    &__border {
        position: relative;
        background-color: $vs-color-background-inverse;
        border: 1px solid $vs-color-border-primary;
        padding: $spacer-100;
    }

    .vs-icon-list {
        border-top: 1px solid $vs-color-border-primary;
        margin-top: $spacer-100;

        .vs-icon-list__title {
            margin-top: $spacer-100;
        }
    }

    &__address {
        @include media-breakpoint-up(md) {
            margin-bottom: -#{$spacer-100};
            padding: $spacer-100 $spacer-0;
            margin-right: $spacer-150;
        }
    }

    &__address,
    &__info {
        @include media-breakpoint-up(md) {
            width: 50%;
        }
    }

    &__details-container {
        @include media-breakpoint-up(md) {
            display: flex;
        }
    }

    &__info {
        @include media-breakpoint-up(md) {
            padding: $spacer-150 0;
        }
    }
}
</style>
