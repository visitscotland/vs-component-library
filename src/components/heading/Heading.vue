<template>
    <Component
        :is="type"
        class="vs-heading"
        :class="headingClasses"
    >
        <!-- @slot The main heading content goes here -->
        <slot />

        <span
            :class="hasLocalDetails ? 'vs-heading__local-sub-heading' : 'vs-heading__sub-heading'"
            v-if="!!$slots['sub-heading']"
        >
            <VsSvg
                v-if="hasLocalDetails"
                class="vs-heading__sub-heading-knot-icon"
                path="knot"
                width="24"
                height="24"
                fill="#122B80"
            />

            <!-- @slot Slot for sub-heading content -->
            <slot name="sub-heading" />

            <VsIcon
                v-if="hasLocalDetails"
                class="vs-heading__sub-heading-audio-icon"
                name="facility-audioloop"
                customColour="#122B80"
            />
        </span>
    </Component>
</template>

<script>
import { isNumber } from 'lodash';

import VsSvg from '@/components/svg/Svg.vue';
import VsIcon from '@/components/icon/Icon.vue';

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
    components: {
        VsSvg,
        VsIcon,
    },
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
         * Use the thin font
         */
        thin: {
            type: Boolean,
        },
        /**
         * Alternative font
         */
        alternative: {
            type: Boolean,
            default: false,
        },
        /**
         * Heading override style
         * `1|2|3|4|5|6`
         */
        overrideStyleLevel: {
            type: [String, Number],
            default: null,
            validator: (value) => (isNumber(value) ? value > 0 && value < 7 : value.match(/(1|2|3|4|5|6)/)),
        },
        /**
         * If true, adjusts the sub-header style and provides a modal for additional context content for the
         * local details
         */
        hasLocalDetails: {
            type: Boolean,
            defualt: false,
        },
    },
    computed: {
        hasSubtitle() {
            return !!this.$slots['sub-heading'];
        },
        headingClasses() {
            return [
                this.overrideStyleLevel ? `vs-heading--style-level-${this.overrideStyleLevel}` : '',
                {
                    'vs-heading--thin': this.thin,
                    'vs-heading--alternative': this.alternative,
                },
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
    @extend %heading-default-styles;

    .vs-heading__local-sub-heading {
        display: block;
        color: #122B80;
        font-size: $font-size-6;
        margin-top: $spacer-4;

        .vs-heading__sub-heading-knot-icon {
            display: inline-block;
            vertical-align: baseline;
        }

        .vs-heading__sub-heading-audio-icon {
            display: inline-block;
            vertical-align: baseline;
            transform: translateY(-2px);
        }
    }
}

</style>
