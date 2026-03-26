<template>
    <!-- NEW MODE -->
    <template v-if="!useLegacy">
        <span
            ref="trigger"
            class="d-inline-block"
            @mouseenter="show"
            @mouseleave="hide"
            @focusin="show"
            @focusout="hide"
        >
            <slot />
        </span>

        <div
            v-if="visible"
            ref="tooltip"
            :class="tooltipClasses"
            role="tooltip"
            :style="floatingStyles"
        >
            {{ title }}

            <div
                ref="arrow"
                class="vs-tooltip__arrow"
                :style="arrowStyles"
            />
        </div>
    </template>

    <!-- LEGACY MODE
     ⚠️ Deprecated. Will be removed at next major release
     Use new tooltip button instead. -->
    <template v-else>
        <VsButton
            v-bind="$attrs"
            class="vs-tooltip position-relative"
            data-test="vs-tooltip"
            v-b-tooltip="tooltipConfig"
            :title="title"
        >
            <slot />
        </VsButton>
    </template>
</template>

<script>
/**
 * Tooltip component supporting two implementations:
 *
 * - Legacy: Bootstrap tooltip directive (v-b-tooltip)
 * - New: Floating UI positioning with slot-based trigger
 *
 * The Floating UI version allows wrapping any element and provides
 * better positioning behaviour while maintaining backwards compatibility.
 *
 * The Bootstrap implementation will be removed in a future major release.
 */
import { vBTooltip } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';
import {
    computePosition,
    offset as fOffset,
    flip,
    shift,
    arrow,
    autoUpdate,
} from '@floating-ui/dom';

export default {
    name: 'VsTooltip',
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
         * Offsets the tooltip
         */
        offset: {
            type: Number,
            default: 8,
        },
        /**
         * Sets the subtle style variant
         */
        subtle: {
            type: Boolean,
            default: false,
        },
        /**
         * Whether to display old tooltip or new one
         */
        useLegacy: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            visible: false,
            floatingStyles: {
            },
            arrowStyles: {
            },
            cleanup: null,
        };
    },
    computed: {
        tooltipClasses() {
            return [
                'vs-tooltip-popover',
                {
                    'vs-tooltip-popover--subtle': this.subtle,
                },
            ];
        },
        tooltipConfig() {
            return {
                placement: this.position,
                customClass: ['vs-tooltip', this.subtle && 'vs-tooltip--subtle']
                    .filter(Boolean)
                    .join(' '),
            };
        },
    },
    beforeUnmount() {
        if (this.cleanup) this.cleanup();
    },
    methods: {
        /**
         * Displays the tooltip when the trigger element is hovered or focused.
         * Only runs for the Floating UI implementation (not legacy Bootstrap).
         */
        show() {
            if (this.useLegacy) return;
            this.visible = true;

            // Wait for tooltip to render before calculating its position
            this.$nextTick(this.updatePosition);
        },
        /**
         * Hides the tooltip and cleans up any active
         * autoUpdate Floating UI listeners.
         */
        hide() {
            if (this.useLegacy) return;

            this.visible = false;
            if (this.cleanup) {
                this.cleanup();
                this.cleanup = null;
            }
        },
        /**
         * Calculates and updates the tooltip position using Floating UI
         * to ensure it remains in the viewport.
         */
        async updatePosition() {
            const trigger = this.$refs.trigger;
            const tooltip = this.$refs.tooltip;
            const arrowEl = this.$refs.arrow;

            if (!trigger || !tooltip) return;

            // Recalculate tooltip position whenever layout changes
            this.cleanup = autoUpdate(trigger, tooltip, async() => {
                const result = await computePosition(trigger, tooltip, {
                    placement: this.position,
                    strategy: 'fixed',
                    middleware: [
                        fOffset(this.offset),
                        flip(),
                        shift({
                            padding: 8,
                            crossAxis: true,
                        }),
                        arrow({
                            element: arrowEl,
                        }),
                    ],
                });

                this.applyTooltipPosition(result);
                this.applyArrowPosition(result);
            });
        },
        /**
         * Apply the computed x/y coordinates to the tooltip.
         */
        applyTooltipPosition({ x, y }) {
            this.floatingStyles = {
                position: 'fixed',
                left: `${x}px`,
                top: `${y}px`,
            };
        },
        /**
         * Position the tooltip arrow so it points at the trigger.
         */
        applyArrowPosition({ placement, middlewareData }) {
            if (!middlewareData.arrow) return;

            const { x: arrowX, y: arrowY } = middlewareData.arrow;

            const basePlacement = placement.split('-')[0];

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[basePlacement];

            this.arrowStyles = {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: '-4px',
            };
        },
    },
};
</script>
<style lang="scss">
    .vs-tooltip-popover {
        z-index: 9999;
        padding: $vs-spacer-025 $vs-spacer-050;
        background: $vs-color-background-bold;
        color: white;
        font-size: 0.75rem;
        border-radius: $vs-radius-small;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
        max-width: max-content;
        white-space: nowrap;
        pointer-events: none;

        &--subtle {
            background: $vs-color-background-inverse;
            color: $vs-color-text-primary;

            .vs-tooltip__arrow {
                background: $vs-color-background-inverse;
            }
        }
    }

    .vs-tooltip__arrow {
        position: absolute;
        width: 10px;
        height: 10px;
        background: $vs-color-background-bold;
        transform: rotate(45deg);
    }

    // ⚠️ Deprecated - styles to be removed at next major version release.
    .tooltip {
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

        &.bs-tooltip-start .tooltip-arrow::before,
        &.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
            border-left-color: $vs-color-background-bold;
        }

        &.bs-tooltip-end .tooltip-arrow::before,
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

            &.bs-tooltip-start .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
                border-left-color: $vs-color-background-inverse;
            }

            &.bs-tooltip-end .tooltip-arrow::before,
            &.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
                border-right-color: $vs-color-background-inverse;
            }
        }
    }
</style>
