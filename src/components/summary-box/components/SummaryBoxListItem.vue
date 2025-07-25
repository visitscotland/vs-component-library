<template>
    <li
        class="vs-summary-box-item position-relative"
        data-test="vs-summary-box-list-item"
    >
        <div
            class="text-center vs-summary-box-item__label d-block position-absolute w-100"
            data-test="vs-summary-box-list-item-label"
            v-if="label"
        >
            <span class="vs-summary-box-item__label-inner">{{ label }}</span>
        </div>

        <div
            class="vs-summary-box-item__display position-absolute d-block text-center w-100"
            data-test="vs-summary-box-list-item-display"
            v-if="text"
        >
            <span>{{ text }}</span>
        </div>

        <div
            class="vs-summary-box-item__icon d-flex align-items-center
            position-absolute justify-content-center w-100"
            data-test="vs-summary-box-list-item-icon-with-label"
            v-if="icon"
        >
            <div class="icon-wrapper text-end">
                <VsIcon
                    :icon="icon"
                    size="xl"
                />
            </div>
            <div class="text-wrapper d-block w-auto pt-100">
                <span>{{ iconLabel }}</span>
            </div>
        </div>
    </li>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

/**
 * Summary Box List Item
 *
 * @displayName Summary Box List Item
 */
export default {
    name: 'VsSummaryBoxListItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    props: {
        /**
         * The highlighted, large text in the centre of the list item
         */
        text: {
            type: String,
            default: '',
        },
        /**
         * Smaller text at the bottom of the list item
         */
        label: {
            type: String,
            default: '',
        },
        /**
         * An icon that appears in the centre of the list item, should
         * be used instead of text rather than as well as
         */
        icon: {
            type: String,
            default: '',
        },
        /**
         * A text label that appears next to an icon, if an icon is set
         */
        iconLabel: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.vs-summary-box-item {
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

.vs-summary-box-item__label {
    top: $spacer-075;
    left: 0;

    @include media-breakpoint-up(lg) {
        top: $spacer-050;
    }

    .vs-summary-box-item__label-inner {
        display: block;
        font-size: $font-size-3;
        font-weight: $vs-font-weight-medium;

        @include media-breakpoint-up(lg) {
            font-size: $font-size-5
        }
    }
}

.vs-summary-box-item__display {
    font-family: $vs-font-family-display;
    font-size: $font-size-9;
    bottom: 35%;

    @include media-breakpoint-up(lg) {
        font-size: $font-size-10;
    }
}

.vs-summary-box-item__icon {
    top: 35%;
    flex-direction: column;
    text-align: center;

    .icon-wrapper {
        max-width: 40%;
        width: auto;
    }

    .text-wrapper {
        font-size: $font-size-3;
        line-height: 1;
        max-width: 90%;
        word-wrap: break-word;
        flex-basis: 0;

        @include media-breakpoint-up(lg) {
            font-size: $spacer-100;
            line-height: 1.3;
        }
    }
}
</style>
