<template>
    <div
        class="vs-carbon-calculator-running-total"
        data-test="vs-carbon-calculator-running-total"
    >
        <div
            class="vs-carbon-calculator-running-total__icon"
        >
            <VsIcon
                icon="fa-regular fa-pen-field"
                size="md"
            />
        </div>
        <div
            class="vs-carbon-calculator-running-total__content"
        >
            <p>{{ labelsMap.soFar }}</p>
            <p>
                <span class="vs-carbon-calculator-running-total__value">{{ totalKilos.toLocaleString(language, { minimumFractionDigits: 3 }) }}</span> {{ labelsMap.kgsOf }}
            </p>
        </div>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

/**
 * @displayName Carbon Form Running Total
 */
export default {
    name: 'VsCarbonCalculatorRunningTotal',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    inject: ['labelsMap'],
    props: {
        /**
         * The current total number of kilos of carbon captured in the
         * user's calculation. Will be rounded to 3 significant figures
         * when rendered.
         */
        totalKilos: {
            type: Number,
            default: 0,
        },
        /**
         * Language locale string. Used to determine correct formatting for numbers (decimal
         * delimeter)
         *
         * Example: "en-gb"
         */
        language: {
            type: String,
            default: 'en-gb',
        },
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator-running-total {
        margin-top: $vs-spacer-200;
        border: 1px solid $vs-color-border-highlight;
        padding: $vs-spacer-100;

        @include media-breakpoint-up(md) {
            text-align: center;
        }
    }

    .vs-carbon-calculator-running-total__icon {
        display: inline-flex;
        align-items: center;
        vertical-align: top;
        width: $vs-spacer-400;
    }

    .vs-carbon-calculator-running-total__content {
        display: inline-block;
        max-width: calc(100% - $vs-spacer-400);

        p {
            display: inline-block;
            margin-right: $vs-spacer-050;
            margin-bottom: 0;
            vertical-align: middle;
        }
    }

    .vs-carbon-calculator-running-total__value {
        font-weight: $vs-font-weight-medium;
    }
</style>
