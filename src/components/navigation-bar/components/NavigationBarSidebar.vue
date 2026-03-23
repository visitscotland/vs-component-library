<template>
    <BOffcanvas
        class="vs-navigation-bar-sidebar border-0"
        :model-value="show"
        aria-labelledby="navigation-sidebar-title"
        @update:model-value="$emit('update:show', $event)"
        id="navigation-sidebar"
        placement="end"
        :no-backdrop="true"
        lazy
    >
        <template #header>
            <h2
                id="navigation-sidebar-title"
                class="visually-hidden"
            >
                {{ sidebarTitle }}
            </h2>
            <VsButton
                icon-only
                icon="vs-icon-control-dismiss"
                variant="subtle"
                size="sm"
                @click="sidebarClose"
            >
                {{ sidebarCloseLabel }}
            </VsButton>
        </template>

        <!-- @slot Default slot for sidebar menu content  -->
        <slot />

        <template #footer>
            <!-- @slot For sidebar footer content  -->
            <slot name="sidebar-footer" />
        </template>

        <template #backdrop>
            <VsBackdrop
                :show="show"
                @click="sidebarClose()"
            />
        </template>
    </BOffcanvas>
</template>

<script>
import { BOffcanvas } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';
import VsBackdrop from '@/components/backdrop/Backdrop.vue';

/**
 * Sidebar component for Navigation Bar, used for mobile navigation.
 * Built on top of BootstrapVue's Offcanvas component.
 *
 * @displayName Navigation Bar Sidebar
 */
export default {
    name: 'VsNavigationBarSidebar',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BOffcanvas,
        VsButton,
        VsBackdrop,
    },
    props: {
        /** Whether the sidebar is visible
         */
        show: {
            type: Boolean,
            default: false,
        },
        /**
         * The sidebar title, required for accessibility
         * and is visually hidden
         */
        sidebarTitle: {
            type: String,
            required: true,
        },
        /**
         * The aria-label for the sidebar close button, required for accessibility
         */
        sidebarCloseLabel: {
            type: String,
            required: true,
        },
    },
    emits: ['update:show'],
    methods: {
        // Emit event to close the sidebar
        sidebarClose() {
            this.$emit('update:show', false);
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar-sidebar {
        .offcanvas-header {
            display: flex;
            justify-content: flex-end;
        }

        .vs-navigation-bar-menu-dropdown
        .dropdown-menu {
            margin-top: -$vs-spacer-150;
            margin-left: 0;
        }
    }
</style>
