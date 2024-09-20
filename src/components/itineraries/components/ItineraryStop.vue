<template>
    <li
        class="vs-itinerary-stop"
        data-test="vs-itinerary-stop"
    >
        <div class="border">
            <div
                class="d-flex justify-content-start align-items-top"
                data-test="vs-itinerary-stop-heading"
            >
                <div class="position-relative">
                    <VsIcon
                        name="map-marker-filled"
                        variant="tertiary"
                        size="xl"
                    />
                    <span
                        class="map-marker__count"
                        aria-hidden="true"
                        data-test="vs-itinerary-stop-marker"
                    >{{ stopNumber }}</span>
                </div>
                <VsHeading
                    level="3"
                    class="vs-itinerary-stop__title ms-4 mt-0"
                >
                    {{ stopLabel }}

                    <template v-slot:sub-heading>
                        {{ stopTitle }}
                    </template>
                </VsHeading>
            </div>

            <!-- @ Default slot for the image component for the stop -->
            <slot />

            <!-- @slot The description content for the stop -->
            <slot name="stop-description" />

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
    margin-bottom: 3.125rem;

    &:last-of-type {
        margin-bottom: 0;

        .border {
            padding-bottom: $spacer-200;
        }
    }

    .border {
        position: relative;
        background-color: $vs-color-background-inverse;
        border: 1px solid $vs-color-border;
        padding: $spacer-100;
    }

    @include media-breakpoint-up(sm) {
        margin-bottom: 6.35rem;
        &:last-of-type {
            margin-bottom: 0;
        }
    }
    .map-marker__count {
        color: $vs-color-text-inverse;
        font-family: $headings-font-family;
        font-size: $font-size-4;
        display: block;
        position: absolute;
        top: 4px;
        left: 0;
        text-align: center;
        width: 100%;
    }

    .vs-icon-list {
        border-top: 1px solid $vs-color-border;
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
