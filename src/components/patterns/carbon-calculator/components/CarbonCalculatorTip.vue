<template>
    <div
        class="vs-carbon-calculator-tip"
        data-test="vs-carbon-calculator-tip"
    >
        <VsRow>
            <VsCol
                class="vs-carbon-calculator-tip__icon-container"
                cols="2"
                md="1"
            >
                <VsSvg
                    path="highland-cow"
                    class="vs-carbon-calculator-tip__icon"
                />
            </VsCol>

            <VsCol
                cols="10"
                md="11"
            >
                <VsHeading
                    level="6"
                >
                    Top Tip!
                </VsHeading>

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
                    class="vs-carbon-calculator-tip__content"
                    v-if="!allTips"
                    data-test="vs-carbon-calculator-tip__content"
                >
                    {{ tip }}
                </p>
            </VsCol>
        </VsRow>
    </div>
</template>

<script>
import {
    VsRow,
    VsCol,
} from '@components/elements/grid';
import VsHeading from '@components/elements/heading/Heading.vue';
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
        VsRow,
        VsCol,
        VsHeading,
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
        box-shadow: $shadow_card_tight;
        padding: $spacer-8 $spacer-4;
    }

    .vs-carbon-calculator-tip__heading {
        font-weight: $font-weight-bold;
    }

    .vs-carbon-calculator-tip__content {
        margin-bottom: $spacer-0;
    }

    .vs-carbon-calculator-tip__icon-container {
        display: flex;
        justify-content: center;
    }
</style>
