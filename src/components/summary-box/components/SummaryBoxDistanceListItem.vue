<template>
    <li
        class="vs-summary-box-distance position-relative"
        data-test="vs-summary-box-distance-list-item"
    >
        <div
            class="text-center vs-summary-box-distance__label d-block position-absolute w-100"
            data-test="vs-summary-box-distance-list-item-label"
            v-if="distanceLabel"
        >
            <span class="vs-summary-box-distance__label-inner">{{ distanceLabel }}</span>
        </div>

        <div
            class="vs-summary-box-distance__display position-absolute d-block text-center w-100"
            data-test="vs-summary-box-distance-display"
        >
            <div class="vs-summary-box-distance__display-entry">
                <span class="vs-summary-box-distance__display-value">
                    {{ miles }}
                </span>
                <span class="vs-summary-box-distance__display-label">{{ milesLabel }}</span>
            </div>
            <hr class="vs-summary-box-distance__divider">
            <div class="vs-summary-box-distance__display-entry">
                <span class="vs-summary-box-distance__display-value">
                    {{ kilometres }}
                </span>
                <span class="vs-summary-box-distance__display-label">{{ kilometresLabel }}</span>
            </div>
        </div>
    </li>
</template>

<script>
/**
 * Summary Box Distance List Item
 *
 * @displayName Summary Box Distance List Item
 */
export default {
    name: 'VsSummaryBoxDistanceListItem',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The number of miles the summary box covers
         */
        miles: {
            type: String,
            default: '',
        },
        /**
         * The number of kilometres the summary box covers
         */
        kilometres: {
            type: String,
            default: '',
        },
        /**
         * The main label for the box, should generally be a
         * localised version of "Distance"
         */
        distanceLabel: {
            type: String,
            default: 'Distance',
        },
        /**
         * The word for `miles` in the current language
         */
        milesLabel: {
            type: String,
            default: 'miles',
        },
        /**
         * The word for `kilometres` in the current language
         */
        kilometresLabel: {
            type: String,
            default: 'km',
        },
        /**
         * Whether the summary box should default to miles
         * If false it will default to km
         */
        showMiles: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.vs-summary-box-distance {
    flex-grow: 1;
    flex-basis: calc(50% - #{$spacer-100});
    margin: $spacer-050;

    @include media-breakpoint-up(md) {
        flex-grow: 1;
        flex-basis: calc(50% - #{$spacer-150});
        margin: $spacer-075;
    }

    &::after {
        border: 1px solid $vs-color-border-secondary;
        content: "";
        display: block;
        padding-bottom: 100%;
    }
}

.vs-summary-box-distance__display {
    top: 35%;
    font-size: $font-size-3;

    .vs-summary-box-distance__display-entry {
        width: 80%;
        text-align: left;
        margin: 0 auto;
        font-size: 0;

        @include media-breakpoint-up(lg) {
            width: 60%;
        }
    }

    .vs-summary-box-distance__display-value {
        font-size: $font-size-6;
        display: inline-block;
        width: 60%;
        text-align: left;
        vertical-align: middle;
        font-family: $vs-font-family-display;
        font-weight: $vs-font-weight-medium;
    }

    .vs-summary-box-distance__display-label {
        font-size: $font-size-4;
        display: inline-block;
        width: 40%;
        text-align: right;
        vertical-align: middle;
        text-transform: lowercase;
    }
}

.vs-summary-box-distance__divider {
    width: 85%;
    border-top: 1px solid $vs-color-border-secondary;
    margin: $spacer-025 auto;

    @include media-breakpoint-up(lg) {
        margin-top: $spacer-050;
        margin-bottom: $spacer-050;
    }
}

.vs-summary-box-distance__label {
    top: $spacer-075;
    left: 0;

    @include media-breakpoint-up(lg) {
        top: $spacer-050;
    }

    .vs-summary-box-distance__label-inner {
        display: block;
        font-size: $font-size-3;
        font-weight: $vs-font-weight-medium;

        @include media-breakpoint-up(lg) {
            font-size: $font-size-5
        }
    }
}
</style>
