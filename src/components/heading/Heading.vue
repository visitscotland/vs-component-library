<template>
    <Component
        :is="type"
        class="vs-heading"
        :class="headingClasses"
    >
        <!-- @slot The main heading content goes here -->
        <slot />

        <span
            class="vs-heading__sub-heading"
            v-if="!!$slots['sub-heading']"
        >
            <!-- @slot Slot for sub-heading content -->
            <slot name="sub-heading" />
        </span>
    </Component>
</template>

<script>
import { isNumber } from 'lodash';
/**
 * Headings are used to create visual hierarchy on a page.
 * This component uses the correct heading tags for semantic markup.
 *
 * @displayName Heading
 */
export default {
    name: 'VsHeading',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * The heading level used for the heading.
         * `1|2|3|4|5|6`
         */
        level: {
            type: [String, Number],
            default: '1',
            validator: (value) => (isNumber(value) ? value > 0 && value < 7 : value.match(/(1|2|3|4|5|6)/)),
        },
        /**
         * The heading style used for the heading.
         * `display-l|display-m|display-s|display-xs|heading-xxl|heading-xl|
         * heading-l|heading-m|heading-s|heading-xs|heading-xxs`
         */
        headingStyle: {
            type: [String, Number],
            required: true,
            validator: (value) => value.match(
                /(display-l|display-m|display-s|display-xs|heading-xxl|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs)/,
            ),
        },
    },
    computed: {
        hasSubtitle() {
            return !!this.$slots['sub-heading'];
        },
        headingClasses() {
            return [
                this.headingStyle ? `vs-heading--${this.headingStyle}` : '',
            ];
        },
        type() {
            return `h${this.level}`;
        },
    },
};
</script>

<style lang="scss">
[class*="vs-heading--display-"] {
    font-family: $headings-font-family;
}

[class*="vs-heading--heading-"] {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-semi-bold;
}

.vs-heading {
    line-height: $line-height-standard;

    &--display-l {
        font-size: 2.875rem;
        letter-spacing: 0.92px;
    }

    &--display-m {
        font-size: 2.563rem;
        letter-spacing: 0.82px;
    }

    &--display-s {
        font-size: 2rem;
        letter-spacing: 0.64px;
    }

    &--display-xs {
        font-size: 1.438rem;
        letter-spacing: 0.46px;
    }

    &--heading-xxl {
        font-size: 2.563rem;
        letter-spacing: -0.41px;
    }

    &--heading-xl {
        font-size: 2.25rem;
        letter-spacing: -0.36px;
    }

    &--heading-l {
        font-size: 2rem;
        letter-spacing: -0.32px;
    }

    &--heading-m {
        font-size: 1.813rem;
        letter-spacing: -0.29px;
    }

    &--heading-s {
        font-size: 1.625rem;
        letter-spacing: -0.26px;
    }

    &--heading-xs {
        font-size: 1.438rem;
        letter-spacing: -0.23px;
    }

    &--heading-xxs {
        font-size: 1.25rem;
        letter-spacing: -0.2px;
    }
}

</style>
