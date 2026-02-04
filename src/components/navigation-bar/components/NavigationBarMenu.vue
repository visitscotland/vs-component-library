<template>
    <nav>
        <ul
            class="vs-navigation-bar-menu"
            data-test="vs-navigation-bar-menu"
            role="menubar"
        >
            <!-- @slot Slot for top level menu items  -->
            <slot />
        </ul>
    </nav>
</template>

<script>

/**
 *  Navigation bar menu list
 *
 * @displayName Navigation Bar menu
 */
export default {
    name: 'VsNavigationBarMenu',
    status: 'prototype',
    release: '0.1.0',
};
</script>

<style lang="scss">
    .vs-navigation-bar-menu {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        // flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }
</style>
