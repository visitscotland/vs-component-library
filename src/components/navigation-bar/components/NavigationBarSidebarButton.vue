<template>
    <VsTooltip
        :title="sidebarOpenLabel"
        subtle
        position="bottom"
        :use-legacy="false"
    >
        <VsButton
            icon-only
            icon="vs-icon-control-menu"
            size="sm"
            variant="subtle"
            class="d-block vs-navigation-bar-sidebar-button"
            data-test="vs-navigation-bar-sidebar-button"
            @click="sidebarOpen()"
            aria-haspopup="dialog"
            :aria-controls="controlsId"
            :aria-expanded="String(expanded)"
        >
            {{ sidebarOpenLabel }}
        </VsButton>
    </VsTooltip>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsTooltip from '@/components/tooltip/Tooltip.vue';

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
        VsTooltip,
    },
    props: {
        /**
         * The aria-label for the sidebar open button,
         * required for accessibility
         */
        sidebarOpenLabel: {
            type: String,
            required: true,
        },
        /**
         * If the sidebar is currently expanded/open
        */
        expanded: {
            type: Boolean,
            default: false,
        },
        /**
         * The aria-controls id for the sidebar
        */
        controlsId: {
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
