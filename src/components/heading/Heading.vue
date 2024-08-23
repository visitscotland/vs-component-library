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
            :class="subHeadingClass"
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
        subHeadingClass() {
            let subHeadingStyle = '';

            switch (this.headingStyle) {
            case 'display-l':
            case 'display-m':
            case 'display-s':
            case 'heading-xxl':
            case 'heading-xl':
                subHeadingStyle = 'l';
                break;
            case 'display-xs':
            case 'heading-l':
            case 'heading-m':
                subHeadingStyle = 'm';
                break;
            case 'heading-s':
            case 'heading-xs':
            case 'heading-xxs':
                subHeadingStyle = 's';
                break;
            default:
                subHeadingStyle = '';
            }

            return `vs-heading__sub-heading--${subHeadingStyle}`;
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

    .vs-heading__sub-heading {
        font-weight: $font-weight-semi-bold;
    }
}

[class*="vs-heading--heading-"] {
    font-family: $font-family-sans-serif;
    font-weight: $font-weight-semi-bold;
}

.vs-heading {
    letter-spacing: $tracking-heading;
    line-height: $line-height-heading;

    &--display-l {
        font-size: 2.875rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    &--display-m {
        font-size: 2.563rem;
        margin: 1rem 0 0.75rem;
    }

    &--display-s {
        font-size: 2rem;
        margin: 1rem 0 0.75rem;
    }

    &--display-xs {
        font-size: 1.438rem;
        margin: 1rem 0 0.75rem;
    }

    &--heading-xxl {
        font-size: 2.563rem;
        margin: 1rem 0 0.75rem;
    }

    &--heading-xl {
        font-size: 2.25rem;
        margin: 1rem 0 0.75rem;
    }

    &--heading-l {
        font-size: 2rem;
        margin: 1rem 0 0.75rem;
    }

    &--heading-m {
        font-size: 1.813rem;
        margin: 0.75rem 0 0.5rem;
    }

    &--heading-s {
        font-size: 1.625rem;
        margin: 0.75rem 0 0.5rem;
    }

    &--heading-xs {
        font-size: 1.438rem;
        margin: 0.75rem 0 0.5rem;
    }

    &--heading-xxs {
        font-size: 1.25rem;
        margin: 0.75rem 0 0.5rem;
    }

    &__sub-heading {
        display: block;
        font-family: $font-family-sans-serif;
        font-weight: $font-weight-normal;
        line-height: $line-height-sub-heading;
        letter-spacing: $tracking-sub-heading;
    }

    .vs-heading__sub-heading--l {
        font-size: 1.438rem;
    }

    .vs-heading__sub-heading--m {
        font-size: 1.25rem;
    }

    .vs-heading__sub-heading--s {
        font-size: 1.125rem;
    }
}

</style>
