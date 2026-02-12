<template>
    <header
        class="vs-navigation-bar"
        data-test="vs-navigation-bar"
    >
        <VsContainer
            fluid="lg"
            class="h-100"
        >
            <VsRow
                class="align-items-center h-100"
            >
                <!-- Logo Link -->
                <VsCol class="col-auto">
                    <slot name="logo-link" />
                </VsCol>

                <!-- Desktop Top Menu Toggles -->
                <VsCol
                    class="d-none d-lg-block flex-grow-1"
                >
                    <!-- @slot For navigation bar menu  -->
                    <slot name="navigation-bar-menu" />
                </VsCol>

                <VsCol
                    class="d-flex justify-content-end align-items-center col-auto"
                >
                    <!-- @slot For navigation bar utility items  -->
                    <slot name="navigation-bar-utilities" />

                    <VsNavigationBarSidebarToggle
                        @sidebar-toggle="onSidebarToggle"
                        sidebar-toggle-alt-text="Toggle navigation sidebar"
                    />
                </VsCol>
            </VsRow>
        </VsContainer>
    </header>

    <VsNavigationSidebar
        :show="sidebarOpen"
        @update:show="sidebarOpen = $event"
    />
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsNavigationBarSidebarToggle from '@/components/navigation-bar/components/NavigationBarSidebarToggle.vue';
import VsNavigationSidebar from '@/components/navigation-bar/components/NavigationBarSidebar.vue';
/**
 *  The Navigation Bar component includes main VS logo and slots for
 *  top menu items on desktop and dropdown toggle with menu items for mobile
 *
 * @displayName Navigation Bar
 */
export default {
    name: 'VsNavigationBar',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsNavigationBarSidebarToggle,
        VsNavigationSidebar,
    },
    data() {
        return {
            sidebarOpen: false,
        };
    },
    methods: {
        onSidebarToggle() {
            this.sidebarOpen = true;
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar {
        position: static;
        z-index: 2;
        display: flex;
        align-items: center;
        background-color: white;
    }
</style>
