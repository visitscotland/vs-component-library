<template>
    <VsButton
        class="vs-navigation-bar-sidebar-button"
        icon-only
        icon="vs-icon-control-menu"
        variant="subtle"
        @click="sidebarToggle()"
        ref="toggleButton"
        aria-haspopup="true"
    >
        {{ sidebarToggleAltText }}
    </VsButton>
</template>

<script>
import VsButton from '@/components/button/Button.vue';

/**
 *  Navigation bar sidebar toggle button to open the sidebar on small screens
 *
 * @displayName Navigation Bar Sidebar Toggle
 */
export default {
    name: 'VsNavigationBarSidebarToggle',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsButton,
    },
    props: {
        sidebarToggleAltText: {
            type: String,
            required: true,
        },
    },
    emits: ['sidebar-toggle'],
    methods: {
        /** * Emit event to open sidebar when toggle button is clicked */
        sidebarToggle() {
            this.$emit('sidebar-toggle', true);
        },
    },

};
</script>

<style lang="scss">

</style>
