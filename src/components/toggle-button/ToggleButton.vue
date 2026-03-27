<template>
    <!-- NEW MODE -->
    <BButton
        v-if="!isLegacyMode"
        :variant="variant"
        class="vs-toggle-button"
        :class="buttonClasses"
        :size="size"
        :aria-pressed="isToggle ? isPressed : undefined"
        @click="handleClick"
    >
        <VsIcon
            :icon="currentIcon"
            :size="iconSize"
            :padding="0"
        />

        <span
            v-if="label"
            class="visually-hidden"
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
         * `primary|secondary|subtle`.
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(/(primary|secondary|subtle)/),
        },
        /**
         * Size of the button
         * `sm|md|lg`.
         */
        size: {
            type: String,
            default: 'md',
            validator: (value) => value.match(/(sm|md|lg)/),
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
            default: '',
            validator: (value) => value === '' || /^(xs|sm|md|lg|xl|xxl)$/.test(value),
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
            return !!this.pressedIcon;
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
                'vs-icon-button--toggle': this.isToggle,
                'vs-icon-button--pressed': this.isPressed,
                'vs-icon-button--active': this.active,
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
         * Maps button size to icon size
         */
        iconSize() {
            const map = {
                sm: 'xs',
                md: 'sm',
                lg: 'md',
            };
            return map[this.size];
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
        labelClasses() {
            return {
                [`visible-${this.labelBreakpoint}-up`]: this.labelBreakpoint,
            };
        },
    },
    methods: {
        /**
         * Emits toggleAction event for legacy button
         * Should be removed when ⚠️ deprecated code is removed.
         */
        toggleLegacy() {
            this.show = !this.show;
            this.$emit('toggleAction', this.show);
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

            @extend %button-default-styles;
            @extend %button-default-font-weight;
            @include button-icon-only-styles;

            // Generate responsive icon-only classes for each breakpoint
            // Applies icon-only styles below specified breakpoint,
            // normal button styles above
            @each $breakpoint in map-keys($grid-breakpoints) {
                &.vs-button--icon-only-#{$breakpoint}-down {
                    @include media-breakpoint-down($breakpoint) {
                        @include button-icon-only-styles;
                    }
                }
            }

            &:focus-visible {
                @extend %primary-button-focus;
                border-color: $vs-color-interaction-cta-primary;
            }
        }

        &:focus {
            @extend %primary-button-focus;
        }

        .vs-icon {
            pointer-events: none;
            vertical-align: middle;
        }

        &--rounded {
            border-radius: $vs-radius-full;
        }

        &--pressed {
            background: $vs-color-interaction-cta-pressed;
        }

        /* Button Variants
        ------------------------------------------ */
        &.btn-primary {
            @include vs-button-variant(
                $vs-color-text-inverse, $vs-color-interaction-cta-primary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );
        }

        &.btn-secondary {
            @include vs-button-variant(
                $vs-color-text-cta-on-light, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );
        }

        &.btn-subtle {
            &:not(.vs-main-map-category__button) {
                @include vs-button-variant(
                    $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle, $vs-color-interaction-cta-subtle,
                    $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle-hover, $vs-color-interaction-cta-subtle-hover,
                    $vs-color-text-inverse, $vs-color-interaction-cta-subtle-pressed, $vs-color-interaction-cta-subtle-pressed,
                );
            }

            &:focus {
                box-shadow: 0 0 0 2px $vs-color-interaction-focus;
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
