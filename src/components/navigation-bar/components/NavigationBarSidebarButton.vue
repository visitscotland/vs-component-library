<template>
    <button
        class="vs-navigation-bar-sidebar-button"
        type="button"
        aria-haspopup="true"
        @click="gaToggle"
    >
        <!-- Icons
        <close20 v-if="dataActive" />
        <menu20 v-if="!dataActive" /> -->

        Open menu
    </button>
</template>

<script>

/**
 *  Navigation bar sidebar button with a slot for sidebar button content
 *
 * @displayName Navigation Bar Sidebar Button
 */
export default {
    name: 'VsNavigationBarSidebarButton',
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
    .vs-navigation-bar-menu-item {
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
