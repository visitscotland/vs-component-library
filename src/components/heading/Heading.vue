<template>
    <Component
        :is="type"
        class="vs-heading"
        :class="headingClasses"
        :id="id"
    >
        <!-- @slot The main heading content goes here -->
        <slot />
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
                /(display-l|display-m|display-s|display-xs|heading-xxl|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs|heading-xxxs)/,
            ),
        },
        /**
         * id string for h tag
         * typically — though not necessarily — used as page anchor
         */
        id: {
            type: String,
            default: null,
        },
    },
    computed: {
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
    font-family: $display-font-family;
    letter-spacing: 0.02em;
}

[class*="vs-heading--heading-"] {
    letter-spacing: -0.01em;
}

.vs-heading {
    line-height: 1.2;
    font-weight: $font-weight-semi-bold;

    &--display-l {
        @include heading-style(display-l);
    }

    &--display-m {
        @include heading-style(display-m);
    }

    &--display-s {
        @include heading-style(display-s);
    }

    &--display-xs {
        @include heading-style(display-xs);
    }

    &--heading-xxl {
        @include heading-style(heading-xxl);
    }

    &--heading-xl {
        @include heading-style(heading-xl);
    }

    &--heading-l {
        @include heading-style(heading-l);
    }

    &--heading-m {
        @include heading-style(heading-m);
    }

    &--heading-s {
        @include heading-style(heading-s);
    }

    &--heading-xs {
        @include heading-style(heading-xs);
    }

    &--heading-xxs {
        @include heading-style(heading-xxs);
    }

    &--heading-xxxs {
        @include heading-style(heading-xxxs);
    }
}
</style>
