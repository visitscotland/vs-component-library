<template>
    <div
        class="vs-carbon-calculator-tip"
        data-test="vs-carbon-calculator-tip"
    >
        <VsSvg
            path="highland-cow"
            class="vs-carbon-calculator-tip__icon"
        />

        <p
            class="vs-carbon-calculator-tip__content"
            data-test="vs-carbon-calculator-tip__summary"
            v-if="allTips"
        >
            You can view all our sustainable travel tips
            <VsLink href="#">
                here
            </VsLink>
            . We've got you covered!
        </p>

        <p
            class="vs-carbon-calculator-tip__heading"
            v-if="!allTips"
        >
            Top tip
        </p>

        <p
            class="vs-carbon-calculator-tip__content"
            v-if="!allTips"
            data-test="vs-carbon-calculator-tip__content"
        >
            {{ tip }}
        </p>
    </div>
</template>

<script>
import VsSvg from '@components/elements/svg/Svg.vue';
import VsLink from '@components/elements/link/Link.vue';

/**
 * @displayName Carbon Form Tip
 */
export default {
    name: 'VsCarbonCalculatorTip',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsSvg,
        VsLink,
    },
    props: {
        tip: {
            type: String,
            default: '',
        },
        allTips: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator-tip {
        box-shadow: $shadow_popover;
        padding: $spacer-8 $spacer-11;
    }

    .vs-carbon-calculator-tip__heading {
        font-weight: $font-weight-bold;
    }

    .vs-carbon-calculator-tip__content {
        margin-bottom: $spacer-0;
    }

    .vs-carbon-calculator-tip__icon {
        position: absolute;
        left: -#{$spacer-2};
        bottom: -2px;
    }
</style>
