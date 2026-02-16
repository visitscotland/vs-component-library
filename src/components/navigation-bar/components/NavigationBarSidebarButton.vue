<template>
    <VsButton
        class="vs-navigation-bar-sidebar-button"
        icon-only
        icon="vs-icon-control-menu"
        variant="subtle"
        @click="sidebarOpen()"
        aria-haspopup="true"
    >
        {{ sidebarOpenLabel }}
    </VsButton>
</template>

<script>
import VsButton from '@/components/button/Button.vue';

/**
 *  Navigation bar sidebar button to open the sidebar
 *
 * @displayName Navigation Bar Sidebar Button
 */
export default {
    name: 'VsNavigationBarSidebarButton',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsButton,
    },
    props: {
        /* The aria-label for the sidebar open button,
         * required for accessibility
         */
        sidebarOpenLabel: {
            type: String,
            required: true,
        },
    },
    emits: ['sidebar-open'],
    methods: {
        /** * Emit event to open sidebar when button is clicked */
        sidebarOpen() {
            this.$emit('sidebar-open', true);
        },
    },
};
</script>
