<template>
    <i
        :class="{
            [`${icon}`]: true,
            'vs-icon': true,
            [`vs-icon--size-${size}`]: true,
            [`vs-icon--sm-size-${smallSize}`]: smallSize,
            ['icon--' + orientation]: orientation,
            [`vs-icon--variant-${variant}`]: variant,
        }"
        :style="[customColour ? { color: customColour } : {}]"
        v-bind="$attrs"
        data-test="vs-icon"
    />
</template>

<script>
import designTokens from '@/assets/tokens/tokens.json';

/**
 * Icons are used to visually communicate available actions
 * or ideas and can help users navigate the product.
 *
 * @displayName Icon
 */
export default {
    name: 'VsIcon',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * A string that specifies the Font Awesome icon to render,
         * either as a semantic design token or as a set
         * of `fa-` classes.
         */
        icon: {
            type: String,
            required: true,
        },
        /**
         * The color of the icon.
         * `primary|secondary|cta|inverse|disabled|highlight|error|warning|success`
         */
        variant: {
            type: String,
            default: 'default',
            validator: (value) => value.match(
                /(primary|secondary|cta|inverse|disabled|highlight|error|warning|success)/,
            ),
        },
        /**
         * Accepts a colour (hex code or colour name) for the icon, if this is
         * set it will override the given variant. This should be used for individual
         * exceptions but if one is being used regularly it should likely be a variant
         * instead.
         */
        customColour: {
            type: String,
            default: null,
        },
        /**
        * The orientation of the icon
        * `up|down|left|right`
        * @deprecated use the correct icon from FA instead
        */
        orientation: {
            type: String,
            default: null,
            validator: (value) => value.match(
                /(up|down|left|right)/,
            ),
        },
        /**
        * Size of icon
        * `xxs|xs|sm|md|lg|xl`
        */
        size: {
            type: String,
            default: 'md',
            validator: (value) => value.match(/(xxs|xs|sm|md|lg|xl)/),
        },
        /**
        * Changes the size of the icon at sm and xs viewports
        * `xxs|xs|sm|md|lg|xl`
        */
        smallSize: {
            type: String,
            default: null,
            validator: (value) => value.match(/(xxs|xs|sm|md|lg|xl)/),
        },
    },
    data() {
        return {
            tokens: designTokens,
        };
    },
    computed: {
        iconClasses() {
            return this.tokens[this.icon] || this.icon;
        },
    },
};
</script>

<style lang="scss">

$sizes: (
    xxs: $icon-size-xxs,
    xs: $icon-size-xs,
    sm: $icon-size-sm,
    md: $icon-size-md,
    lg: $icon-size-lg,
    xl: $icon-size-xl,
);

$variants: (
    primary: $vs-color-icon-primary,
    secondary: $vs-color-icon-secondary,
    cta: $vs-color-icon-cta-on-light,
    inverse: $vs-color-icon-inverse,
    highlight: $vs-color-icon-highlight,
    disabled: $vs-color-icon-disabled,
    error: $vs-color-icon-error,
    warning: $vs-color-icon-warning,
    success: $vs-color-icon-success,
);

.vs-icon {
    overflow: visible;
    pointer-events: none;
    line-height: 1;
    transition: all $duration_base ease-in-out;

    @each $size in map-keys($sizes) {
        $this-size: map-get($sizes, $size);

        &.vs-icon--size-#{$size} {
            font-size: $this-size;
            padding: 0;
        }
    }

    // We need two separate loops through the sizes.
    // If you have one loop generating both sets you run into
    // specificity issues as the classes go sm-xs xs sm-sm sm etc etc,
    // and the later non-sm classes override the earlier sm ones
    @each $size in map-keys($sizes) {
        $this-size: map-get($sizes, $size);

        @include media-breakpoint-down(md) {
            &.vs-icon--sm-size-#{$size} {
                font-size: $this-size;
                padding: 0;
            }
        }
    }

    @each $variant in map-keys($variants) {
        &.vs-icon--variant-#{$variant} {
            color: map-get($variants, $variant);
        }
    }

    &.icon--down {
        transform: rotate(180deg);
    }

    &.icon--left {
        transform: rotate(270deg);
    }

    &.icon--right {
        transform: rotate(90deg);
    }
}
</style>
