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
         * `display-m|display-s|heading-xl|
         * heading-l|heading-m|heading-s|heading-xs|heading-xxs`
         */
        headingStyle: {
            type: String,
            required: true,
            validator: (value) => value.match(
                /(display-m|display-s|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs|heading-xxxs)/,
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
        /**
         * Option to remove margins from headings.
         * Useful when heading is used inside a component
         */
        noMargins: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        headingClasses() {
            return [
                this.headingStyle ? `vs-heading--${this.headingStyle}` : '',
                ...(this.noMargins ? ['vs-heading--no-margins'] : []),
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
    font-family: $vs-font-family-display;
    letter-spacing: $vs-letter-spacing-display;
}

[class*="vs-heading--heading-"] {
    letter-spacing: $vs-letter-spacing-heading;
}

.vs-heading {
    line-height: $vs-line-height-heading;
    font-weight: $vs-font-weight-heading;

    &--display-m {
        @include heading-style(display-m);
    }

    &--display-s {
        @include heading-style(display-s);
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

    &--no-margins {
        margin-top: 0;
        margin-bottom: 0;
    }
}
</style>
