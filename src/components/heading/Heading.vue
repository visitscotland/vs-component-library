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
.vs-heading {
    &--display-l, &--display-m, &--display-s, &--display-xs {
        font-family: $headings-font-family;
    }

    &--display-l {

    }

    &--display-m {

    }

    &--display-s {

    }

    &--display-xs {

    }

    &--heading-xxl {

    }

    &--heading-xl {

    }

    &--heading-l {

    }

    &--heading-m {

    }

    &--heading-s {

    }

    &--heading-xs {

    }

    &--heading-xxs {

    }
}

</style>
