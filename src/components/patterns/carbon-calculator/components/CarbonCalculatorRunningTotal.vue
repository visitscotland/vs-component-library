<template>
    <div
        class="vs-carbon-calculator-running-total"
        data-test="vs-carbon-calculator-running-total"
    >
        <div
            class="vs-carbon-calculator-running-total__icon"
        >
            <VsIcon
                name="notes"
                size="lg"
            />
        </div>
        <div
            class="vs-carbon-calculator-running-total__content"
        >
            <p>{{ labelsMap.soFar }}</p>
            <p>
                <span class="font-weight-bold">{{ totalKilos }}</span> {{ labelsMap.kgsOf }}
            </p>
        </div>
    </div>
</template>

<script>
import VsIcon from '@components/elements/icon/Icon.vue';

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
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator-running-total {
        margin-top: $spacer-8;
        border: 1px solid $color-gray;
        padding: $spacer-4;

        @include media-breakpoint-up(md) {
            text-align: center;
        }
    }

    .vs-carbon-calculator-running-total__icon {
        display: inline-flex;
        align-items: center;
        vertical-align: top;
        width: $spacer-10;
    }

    .vs-carbon-calculator-running-total__content {
        display: inline-block;
        max-width: calc(100% - $spacer-10);

        p {
            display: inline-block;
            margin-right: $spacer-4;
            margin-bottom: 0;
            vertical-align: middle;
        }
    }
</style>
