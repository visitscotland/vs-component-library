<template>
    <header
        class="vs-navigation-bar"
        data-test="vs-navigation-bar"
    >
        <VsContainer
            fluid="lg"
            class="h-100"
        >
            <VsRow class="align-items-center h-100">
                <VsCol class="col-auto">
                    <!-- @slot For logo link  -->
                    <slot name="logo-link" />
                </VsCol>

                <VsCol
                    :class="menuClasses"
                    data-test="vs-navigation-bar__menu"
                >
                    <!-- @slot For navigation bar menu  -->
                    <slot name="navigation-bar-menu" />
                </VsCol>

                <VsCol
                    :class="utilityClasses"
                    data-test="vs-navigation-bar__utilities"
                >
                    <!-- @slot For navigation bar utility items  -->
                    <slot name="navigation-bar-utilities" />

                    <VsNavigationBarSidebarButton
                        :class="sidebarButtonClasses"
                        data-test="vs-navigation-bar__sidebar-button"
                        @sidebar-open="onSidebarOpen"
                        :sidebar-open-label="sidebarOpenLabel"
                    />
                </VsCol>
            </VsRow>
        </VsContainer>
    </header>

    <VsNavigationSidebar
        :show="sidebarOpen"
        @update:show="sidebarOpen = $event"
        :menu-aria-label="menuAriaLabel"
        :sidebar-close-label="sidebarCloseLabel"
    >
        <!-- @slot For sidebar body content  -->
        <slot name="sidebar-body" />

        <template #sidebar-footer>
            <!-- @slot For sidebar footer content  -->
            <slot name="sidebar-footer" />
        </template>
    </VsNavigationSidebar>
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsNavigationBarSidebarButton from '@/components/navigation-bar/components/NavigationBarSidebarButton.vue';
import VsNavigationSidebar from '@/components/navigation-bar/components/NavigationBarSidebar.vue';

/**
 *  The Navigation Bar component includes slots for logo link,
 *  navigation menu, utility items, and a sidebar for mobile navigation.
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
        VsNavigationBarSidebarButton,
        VsNavigationSidebar,
    },
    props: {
        /**
         * The breakpoint at which the sidebar should be used
         * instead of the regular navigation menu.
         */
        sidebarBreakpoint: {
            type: String,
            default: 'md',
            validator: (value) => value.match(/(xs|sm|md|lg|xl)/),
        },
        /**
         * The aria-label for the sidebar menu,
         * required for accessibility
         */
        menuAriaLabel: {
            type: String,
            required: true,
        },
        /**
         * The aria-label for the sidebar close button,
         * required for accessibility
         */
        sidebarCloseLabel: {
            type: String,
            required: true,
        },
        /* The aria-label for the sidebar open button,
         * required for accessibility
         */
        sidebarOpenLabel: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            sidebarOpen: false,
        };
    },
    computed: {
        breakpointMap() {
            return {
                xs: 'sm',
                sm: 'md',
                md: 'lg',
                lg: 'xl',
                xl: 'xxl',
            };
        },
        menuBreakpoint() {
            return this.breakpointMap[this.sidebarBreakpoint] || 'lg';
        },
        menuClasses() {
            return `d-none d-${this.menuBreakpoint}-block flex-grow-1`;
        },
        sidebarButtonClasses() {
            return `d-${this.menuBreakpoint}-none`;
        },
        utilityClasses() {
            return `d-flex justify-content-end align-items-center col col-${this.menuBreakpoint}-auto`;
        },
    },
    methods: {
        // Emit event to open the sidebar
        onSidebarOpen() {
            this.sidebarOpen = true;
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar {
        position: static;
        height: 80px;
        z-index: 2;
        display: flex;
        align-items: center;
        background-color: $vs-color-background-inverse;
    }
</style>
