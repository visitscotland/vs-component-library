<template>
    <header
        class="vs-navigation-bar"
        data-test="vs-navigation-bar"
    >
        <VsContainer
            fluid="lg"
            class="h-100"
        >
            <VsRow class="vs-navigation-bar__row align-items-center h-100">
                <VsCol class="vs-navigation-bar__logo col-auto">
                    <!-- @slot For logo link  -->
                    <slot name="logo-link" />
                </VsCol>

                <VsCol
                    class="vs-navigation-bar__menu"
                    :class="menuClasses"
                    data-test="vs-navigation-bar__menu"
                >
                    <!-- @slot For navigation bar menu  -->
                    <slot name="navigation-bar-menu" />
                </VsCol>

                <VsCol
                    class="vs-navigation-bar__utilities"
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
                        :expanded="sidebarOpen"
                        controls-id="navigation-sidebar"
                    />
                </VsCol>
            </VsRow>
        </VsContainer>
    </header>

    <VsNavigationSidebar
        :show="sidebarOpen"
        @update:show="sidebarOpen = $event"
        :sidebar-close-label="sidebarCloseLabel"
        :sidebar-title="sidebarTitle"
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
            validator: (value) => /^(xs|sm|md|lg|xl)$/.test(value),
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
        /**
         * The sidebar title, required for accessibility
         */
        sidebarTitle: {
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
        position: relative;
        height: 76px;
        z-index: 2;
        display: flex;
        align-items: center;
        background-color: $vs-color-background-inverse;
        box-shadow: $vs-elevation-shadow-overlay;
    }

    @include no-js {
        .vs-navigation-bar {
            height: auto;
            padding-block: $vs-spacer-100;

            &__row {
                flex-direction: column;
                align-items: stretch!important;
                gap: $vs-spacer-100;
            }

            &__logo,
            &__menu,
            &__utilities {
                width: 100%;
                flex: 0 0 auto;
            }

            &__menu,
            &__utilities {
                display: block!important;
            }

            &__utilities nav > ul {
                display: block!important;

                > li {
                    display: block!important;
                    margin: 0!important;
                }
            }

            &__utilities a.vs-button {
                width: auto;
                height: auto;
                padding: $vs-spacer-075 $vs-spacer-100;

                .vs-icon {
                    display: none;
                }

                .vs-button__text {
                    position: static!important;
                    width: auto!important;
                    height: auto!important;
                    margin: 0!important;
                    overflow: visible!important;
                    clip: auto!important;
                    white-space: normal!important;
                }
            }

            .vs-navigation-bar-sidebar-button {
                display: none!important;
            }
        }

        .vs-navigation-bar-sidebar {
            display: none!important;
        }
    }
</style>
