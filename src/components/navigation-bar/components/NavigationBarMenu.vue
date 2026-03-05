<template>
    <nav
        class="vs-navigation-bar-menu"
        data-test="vs-navigation-bar-menu"
        :aria-label="menuAriaLabel"
    >
        <ul>
            <!-- @slot Slot for top level menu items  -->
            <slot />
        </ul>
    </nav>
</template>

<script>
/**
 *  Navigation bar menu component, used for top level menu
 * items in the navigation bar
 *
 * @displayName Navigation Bar menu
 */
export default {
    name: 'VsNavigationBarMenu',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * The aria-label for the main menu,
         * required for accessibility
         */
        menuAriaLabel: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar-menu ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: $vs-spacer-075;
        align-items: center;
        height: 100%;
        width: 100%;
    }
</style>
