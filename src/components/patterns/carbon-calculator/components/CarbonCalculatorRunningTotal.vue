<template>
    <VsContainer
        class="vs-carbon-calculator-running-total"
        data-test="vs-carbon-calculator-running-total"
    >
        <VsRow>
            <VsCol
                cols="1"
                class="vs-carbon-calculator-running-total__icon"
            >
                <VsIcon
                    name="edit"
                    size="lg"
                />
            </VsCol>
            <VsCol
                cols="11"
                class="vs-carbon-calculator-running-total__content"
            >
                <p>Your calculation so far:</p>
                <p>
                    <span class="font-weight-bold">{{ totalTonnes.toFixed(3) }}</span> Tonnes of C02
                </p>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>
import VsIcon from '@components/elements/icon/Icon.vue';
import {
    VsContainer, VsCol, VsRow,
} from '@components/elements/grid';

/**
 * @displayName Carbon Form Running Total
 */
export default {
    name: 'VsCarbonCalculatorRunningTotal',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsCol,
        VsRow,
        VsIcon,
    },
    props: {
        /**
         * The current total number of tonnes of carbon captured in the
         * user's calculation. Will be rounded to 3 significant figures
         * when rendered.
         */
        totalTonnes: {
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
        padding: $spacer-4 $spacer-10;
    }

    .vs-carbon-calculator-running-total__icon {
        display: flex;
        align-items: center;
    }

    .vs-carbon-calculator-running-total__content {
        p {
            margin-bottom: $spacer-0;
        }
    }
</style>
