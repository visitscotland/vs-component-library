<template>
    <!-- NEW MODE -->
    <BButton
        v-if="!isLegacyMode"
        :variant="variant"
        class="vs-toggle-button"
        :class="buttonClasses"
        size="sm"
        :aria-pressed="isToggle ? isPressed : undefined"
        @click="handleClick"
    >
        <VsIcon
            :icon="currentIcon"
            size="xs"
            :padding="0"
        />

        <span
            v-if="label"
            class="visually-hidden"
            :class="buttonLabelClasses"
        >
            {{ computedLabel }}
        </span>
    </BButton>

    <!-- LEGACY MODE
    ⚠️ Deprecated. Use the new button style and props instead  -->
    <VsButton
        v-else
        class="vs-toggle-btn"
        data-test="vs-toggle-btn"
        variant="subtle"
        :aria-controls="toggleId"
        :aria-expanded="show ? 'true' : 'false'"
        @click="toggleLegacy"
    >
        <!-- @slot ⚠️ Deprecated. Use the new label props instead  -->
        <slot />

        <VsIcon
            v-if="show"
            class="fa-icon-colours fa-icon-colours--white"
            icon="fa-duotone fa-solid fa-circle-xmark"
        />

        <slot
            v-else
            name="toggle-icon"
        >
            <VsIcon
                class="fa-icon-colours"
                icon="fa-duotone fa-solid fa-circle-info"
            />
        </slot>
    </VsButton>
</template>

<style lang="scss">
    .vs-toggle-btn {
        z-index: 3;
        display: block;
    }
</style>

<script>
import VsButton from '@/components/button/Button.vue';
import { BButton } from 'bootstrap-vue-next';
import VsIcon from '@/components/icon/Icon.vue';

/**
 * Toggle button to toggle elements in other components.
 * The component emits an event on click that can be listened
 * for in a parent component.
 *
 * @displayName Toggle Button
 */
export default {
    name: 'VsToggleButton',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        BButton,
        VsIcon,
    },
    props: {
        /** ⚠️ Deprecated - use the new props instead.
         * ID for the toggled element
         */
        toggleId: {
            type: String,
            default: '',
        },
        /**
         * Style variation to give additional meaning
         * `default|overlay|overlay-strong`.
         */
        variant: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|overlay|overlay-strong)/),
        },
        /**
         * The default icon to display
         */
        icon: {
            type: String,
            default: '',
        },
        /**
         * The icon for pressed state
         */
        pressedIcon: {
            type: String,
            default: null,
        },
        /**
         * Controlled pressed state (v-model)
         */
        modelValue: {
            type: Boolean,
            default: undefined,
        },
        /**
         * Accessible label for the button
         */
        label: {
            type: String,
            default: '',
        },
        /**
         * Accessible label for pressed state
         */
        pressedLabel: {
            type: String,
            default: '',
        },
        /**
         * Breakpoint at which button label becomes visible.
         * Button shows as icon-only below this breakpoint.
         */
        labelBreakpoint: {
            type: String,
            default: null,
            validator: (value) => value === null || /^(xs|sm|md|lg|xl|xxl)$/.test(value),
        },
    },
    emits: [
        'toggleAction',
        'update:modelValue',
        'toggle',
        'click',
    ],
    data() {
        return {
            show: false,
            internalPressed: false,
        };
    },
    computed: {
        /**
         * Checks if this is the legacy button or using new props
         * Should be removed when ⚠️ deprecated code is removed.
         */
        isLegacyMode() {
            return !this.icon && !this.pressedIcon;
        },
        /**
         * Determines whether button behaves as a toggle
         */
        isToggle() {
            return this.modelValue !== undefined || !!this.pressedIcon || !!this.pressedLabel;
        },
        /**
         * Pressed state (supports controlled + uncontrolled)
         */
        isPressed() {
            if (this.modelValue !== undefined) {
                return this.modelValue;
            }

            return this.internalPressed;
        },
        /**
         * Button classes
         */
        buttonClasses() {
            return {
                'vs-toggle-button--toggle': this.isToggle,
                'vs-toggle-button--pressed': this.isToggle && this.isPressed,
                [`vs-toggle-button--label-${this.labelBreakpoint}-up`]: this.labelBreakpoint,
            };
        },
        buttonLabelClasses() {
            return {
                [`visible-${this.labelBreakpoint}-up`]: this.labelBreakpoint,
            };
        },
        /**
         * Current icon displayed
         */
        currentIcon() {
            if (this.isToggle && this.isPressed && this.pressedIcon) {
                return this.pressedIcon;
            }

            return this.icon;
        },
        /**
         * Accessible label based on state
         */
        computedLabel() {
            if (this.isToggle && this.isPressed && this.pressedLabel) {
                return this.pressedLabel;
            }

            return this.label;
        },
    },
    methods: {
        /**
         * Emits toggleAction event for legacy button
         * Should be removed when ⚠️ deprecated code is removed.
         */
        toggleLegacy(event) {
            this.show = !this.show;
            this.$emit('toggleAction', this.show);
            this.$emit('click', event);
        },
        /**
         * Updates toggle state and emits toggle value and click event
         */
        handleClick(event) {
            if (this.isToggle) {
                const newValue = !this.isPressed;

                if (this.modelValue !== undefined) {
                    this.$emit('update:modelValue', newValue);
                } else {
                    this.internalPressed = newValue;
                }

                this.$emit('toggle', newValue);
            }

            this.$emit('click', event);
        },
    },
};
</script>
<style lang="scss">
    // New toggle styles
    .vs-toggle-button {
        &.btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: $vs-spacer-050;
            border-radius: $vs-radius-full;
            border: 0;
            transition:
                transform 0.2s ease,
                background-color 0.2s ease,
                color 0.2s ease;

             &:active {
                transform: scale(0.92);
            }

            @extend %button-default-styles;
            @extend %button-default-font-weight;
            @include button-icon-only-styles;

            .vs-icon {
                pointer-events: none;
                vertical-align: middle;
            }

            &:focus-visible, &:focus {
                outline-offset: 2px;
            }

            // Generates responsive label classes for each breakpoint and
            // applies full button styles above specified breakpoint to
            // allow a label to be added
            @each $breakpoint in map-keys($grid-breakpoints) {
                &.vs-toggle-button--label-#{$breakpoint}-up {
                    @include media-breakpoint-up($breakpoint) {
                        line-height: $line-height-base;
                        width: auto;
                        height: auto;

                        &.btn-sm {
                            padding: $vs-spacer-0125 $vs-spacer-125;
                        }

                        .vs-icon {
                            margin-right: $vs-spacer-025;
                        }
                    }
                }
            }
        }

        &--pressed {
            background: $vs-color-interaction-cta-pressed;
            transform: scale(1.05);
        }

        /* Button Variants
        ------------------------------------------ */
        &.btn-default {
            @include vs-button-variant(
                $vs-color-text-cta-on-light, transparent, transparent,
                $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle-hover, $vs-color-interaction-cta-subtle-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-subtle-pressed, $vs-color-interaction-cta-subtle-pressed,
            );

            &:focus-visible, &:focus {
                @extend %outline-link-focus;
            }
        }

        &.btn-overlay {
            @include vs-button-variant(
                $vs-color-text-secondary, $vs-color-background-inverse, $vs-color-background-inverse,
                $vs-color-text-primary, $vs-color-background-inverse, $vs-color-background-inverse,
                $vs-color-text-primary, $vs-color-background-inverse, $vs-color-background-inverse,
            );
            background: var(--background-blur, rgba(255, 255, 255, 0.80));
        }

        &.btn-overlay-strong {
            @include vs-button-variant(
                $vs-color-text-secondary, $vs-color-background-inverse, $vs-color-background-inverse,
                $vs-color-text-primary, $vs-color-background-inverse, $vs-color-background-inverse,
                $vs-color-text-cta-on-light, $vs-color-background-inverse, $vs-color-background-inverse,
            );
            background: var(--background-blur, rgba(255, 255, 255, 0.80));

            &.vs-toggle-button--pressed {
                color: $vs-color-text-cta-on-light;

                .vs-icon {
                    color: $vs-color-text-cta-on-light;
                }
            }
        }

        &.btn-overlay, &.btn-overlay-strong {
            &:focus-visible, &:focus {
                @extend %outline-link-focus-dark;
            }
        }
    }

    // Legacy toggle styles
    // Should be removed when ⚠️ deprecated code is removed.
    .vs-toggle-btn.vs-button.btn-subtle {
        line-height: 1;

        @include vs-button-variant(
            $vs-color-text-cta-on-light, transparent, transparent,
            $vs-color-text-cta-on-light, transparent, transparent,
            $vs-color-text-inverse, transparent, transparent,
        );

        &.btn-md {
            padding: $vs-spacer-050 $vs-spacer-025;
            width: 44px;
            height: 44px;
        }

        .vs-icon {
            margin: 0;
        }

        .fa-icon-colours,
        .fa-icon-colours--white {
            --fa-primary-color: #{$vs-color-icon-inverse};
            --fa-secondary-color: #{$vs-color-icon-primary};
            --fa-secondary-opacity: 1.0;
        }

        &:hover .fa-icon-colours,
        &:hover .fa-icon-colours--white{
            --fa-secondary-color: #{$vs-color-icon-cta-on-light};
        }
    }

</style>
