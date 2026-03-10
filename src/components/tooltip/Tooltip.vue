<template>
    <span
        data-test="vs-tooltip"
        v-b-tooltip="tooltipConfig"
        :title="title"
    >
        <slot>
            <VsButton
                v-bind="$attrs"
                class="position-relative"
            >
                <!-- Default slot content for VsButton -->
            </VsButton>
        </slot>
    </span>
</template>

<script>
import { vBTooltip } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';

/**
 * A tooltip is a short, informative message that appears
 * when a user interacts with an element.
 *
 * @displayName Tooltip
 */

export default {
    name: 'VsTooltip',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    directives: {
        'b-tooltip': vBTooltip,
    },
    props: {
        /**
         * The text to display in the tooltip
         */
        title: {
            type: String,
            default: '',
        },
        /**
         * The position of the tooltip
         * `top|right|left|bottom`
         */
        position: {
            type: String,
            default: 'top',
            validator: (value) => value.match(/(top|right|left|bottom)/),
        },
        /**
         * Sets the subtle style variant
         */
        subtle: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        tooltipConfig() {
            return {
                placement: this.position,
                customClass: [
                    'vs-tooltip',
                    this.subtle && 'vs-tooltip--subtle',
                ].filter(Boolean).join(' '),
            };
        },
    },
};
</script>

<style lang="scss">
    .tooltip  {
        border-radius: $vs-radius-small;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));

        .tooltip-inner {
            background: $vs-color-background-bold;
            border-radius: $vs-radius-small;
        }

        &.bs-tooltip-top .tooltip-arrow::before,
        &.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
            border-top-color: $vs-color-background-bold;
        }

        &.bs-tooltip-bottom .tooltip-arrow::before,
        &.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
            border-bottom-color: $vs-color-background-bold;
        }

        &.bs-tooltip-left .tooltip-arrow::before,
        &.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
            border-left-color: $vs-color-background-bold;
        }

        &.bs-tooltip-right .tooltip-arrow::before,
        &.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
            border-right-color: $vs-color-background-bold;
        }

        &.vs-tooltip--subtle {
            .tooltip-inner {
                color: $vs-color-text-primary;
                background: $vs-color-background-inverse;
            }

            &.bs-tooltip-top .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
                border-top-color: $vs-color-background-inverse;
            }

            &.bs-tooltip-bottom .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
                border-bottom-color: $vs-color-background-inverse;
            }

            &.bs-tooltip-left .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
                border-left-color: $vs-color-background-inverse;
            }

            &.bs-tooltip-right .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
                border-right-color: $vs-color-background-inverse;
            }
        }
    }
</style>
