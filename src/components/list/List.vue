<template>
    <Component
        :is="ordered ? 'ol' : 'ul'"
        class="vs-list"
        :class="{
            'vs-list--unstyled': unstyled,
            'vs-list--inline': inline,
            'vs-list--ordered': ordered,
        }"
        v-bind="$attrs"
    >
        <!-- @slot Default slot for a set of `<li>` items -->
        <slot />
    </Component>
</template>

<script>

/**
 * The list component groups related content together
 * to help break text up into chunks.
 *
 * @displayName List
 */
export default {
    name: 'VsList',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * Option to choose the kind of list needed (ordered | unordered)
         */
        ordered: {
            type: Boolean,
            default: false,
        },
        /**
         * Option to add/remove bullet points
         */
        unstyled: {
            type: Boolean,
            default: false,
        },
        /**
         * Option to set the list as inline or normal
         */
        inline: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.vs-list {
    @extend %default-list-styles;

    &--ordered {
        margin: 0 0 $spacer-125 $spacer-150;
        counter-reset: list-counter;

        li {
            margin-bottom: 0;

            &::before{
                padding-right: $spacer-050;
                font-size: inherit;
                counter-increment: list-counter;
                content: counter(list-counter) ". ";
            }

            /* Nested list styles */
            ol {
                li {
                    &::before {
                        content: counter(list-counter, lower-alpha)  ". ";
                    }
                }
            }

            ul {
                li {
                    &::before {
                        content: "– ";
                        padding-right: 0.6rem;
                        font-size: $font-size-5;
                    }
                }
            }
        }
    }

    &--inline {
        li {
            display: inline-block;
        }
    }

    &--unstyled,
    &--inline {
        margin: 0;

        li {
            margin-bottom: 0;

            &::before {
                display: none;
            }
        }
    }
}
</style>
