<template>
    <div
        class="vs-carbon-calculator-tip"
        data-test="vs-carbon-calculator-tip"
    >
        <div
            class="vs-carbon-calculator-tip__icon-container"
        >
            <VsIcon
                name="coo"
                size="lg"
                class="vs-carbon-calculator-tip__icon"
            />
        </div>

        <div
            class="vs-carbon-calculator-tip__content"
        >
            <VsHeading
                level="3"
                overrideStyleLevel="6"
            >
                {{ labelsMap.topTip }}
            </VsHeading>

            <p
                class="vs-carbon-calculator-tip__content"
                data-test="vs-carbon-calculator-tip__summary"
                v-if="showingAllTips"
                v-html="labelsMap.allTips"
            />

            <p
                class="vs-carbon-calculator-tip__content"
                v-if="!showingAllTips"
                data-test="vs-carbon-calculator-tip__content"
                v-html="tip"
            />
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/elements/heading/Heading.vue';
import VsIcon from '@/components/elements/icon/Icon.vue';

/**
 * @displayName Carbon Form Tip
 */
export default {
    name: 'VsCarbonCalculatorTip',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
        VsHeading,
    },
    inject: ['labelsMap'],
    props: {
        tip: {
            type: String,
            default: '',
        },
        showingAllTips: {
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

        .vs-heading {
            margin-top: 0;
        }
    }

    .vs-carbon-calculator-tip__content {
        margin-bottom: $spacer-0;
    }

    .vs-carbon-calculator-tip__icon-container {
        display: inline-flex;
        justify-content: center;
        vertical-align: top;
        width: $spacer-10;

        .vs-icon {
            color: $color-theme-secondary-orange;
        }
    }

    .vs-carbon-calculator-tip__content {
        display: inline-block;
        width: calc(100% - $spacer-10);
        vertical-align: top;
    }
</style>
