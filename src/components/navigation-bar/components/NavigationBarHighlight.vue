<template>
    <li class="vs-navigation-bar-highlight">
        <a
            class="vs-navigation-bar-highlight__link"
            :href="href"
            role="menuitem"
            data-layer-value="menuNavigationDataEvent"
        >
            <!-- @slot Default slot for nav link content  -->
            <slot />
        </a>
    </li>
</template>

<script>

/**
 *
 *
 * @displayName Navigation Bar Highlight
 */
export default {
    name: 'VsNavigationBarHighlight',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * The URL for the nav list link
         */
        href: {
            type: String,
            default: '#',
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar-highlight {
        background-color: $vs-color-background-secondary;
        height: auto;
        font-size: $font-size-4;

        &__link {
            position: relative;
            text-decoration: none;
            color: $vs-color-text-primary;
            padding: $vs-spacer-075 $vs-spacer-050;
            margin: $vs-spacer-0;
            display: block;

            @include media-breakpoint-up(xl) {
                margin: $vs-spacer-0 $vs-spacer-050;
            }

            &:hover {
                color: $vs-color-interaction-link-primary;
            }
        }
    }
</style>
