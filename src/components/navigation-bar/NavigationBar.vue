<template>
    <header
        class="vs-navigation-bar"
        :class="`vs-navigation-bar--${background}`"
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
    provide() {
        // Provide navbar background to all descendants
        return {
            navbarBackground: this.background,
        };
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
         * The background style of the navigation bar,
         * which can be 'default' or 'inverse'.
         */
        background: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|inverse)/),
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
        // Map of breakpoints to determine when to switch to sidebar
        breakpointMap() {
            return {
                xs: 'sm',
                sm: 'md',
                md: 'lg',
                lg: 'xl',
                xl: 'xxl',
            };
        },
        // Determine the menu breakpoint class based on
        // the sidebar breakpoint prop
        menuBreakpoint() {
            return this.breakpointMap[this.sidebarBreakpoint] || 'lg';
        },
        // Classes for the menu column, which hides the menu
        // at the sidebarBreakpoint and below
        menuClasses() {
            return `d-none d-${this.menuBreakpoint}-block flex-grow-1`;
        },
        // Classes for the sidebar toggle button, which shows the
        // button at the sidebarBreakpoint and below
        sidebarButtonClasses() {
            return `d-${this.menuBreakpoint}-none`;
        },
        // Classes for the utility items column, which adjusts
        // alignment based on sidebarBreakpoint
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

        //  // Default surface context
        // --vs-surface-foreground: var(--vs-color-text-primary);
        // --vs-surface-background: $vs-color-background-primary;

        // background-color: var(--vs-surface-background);
        // color: var(--vs-surface-foreground);

        // &--inverse {
        //     --vs-surface-foreground: var(--vs-color-text-inverse);
        //     --vs-surface-background: transparent;

        //     .btn.dropdown-toggle {
        //         color: var(--vs-surface-foreground, $vs-color-text-inverse);

        //         &::after {
        //             color: var(--vs-surface-foreground, $vs-color-text-inverse);
        //         }
        //     }

        //     &:hover,
        //     &:focus-within {
        //         --vs-surface-foreground: var(--vs-color-text-primary);
        //         --vs-surface-background: #fff;

        //         transition: .2s all;

        //         .btn.dropdown-toggle {
        //             color: var(--vs-color-text-primary);

        //             &::after {
        //                 color: var(--vs-color-text-primary);
        //             }
        //         }
        //     }
        // }
    }
</style>
