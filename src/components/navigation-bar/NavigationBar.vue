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
                    <VsButton
                        :animate="false"
                        class="vs-site-search"
                        :href="searchLink"
                        icon="vs-icon-control-search"
                        id="site-search-btn"
                        :rounded="false"
                        variant="subtle"
                    >
                        Search
                    </VsButton>
                </VsCol>
            </VsRow>
        </VsContainer>
    </header>
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsButton from '@/components/button/Button.vue';
import clickOutside from '@/directives/click-outside';
import dataLayerMixin from '../../mixins/dataLayerMixin';

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
        VsButton,
    },
    directives: {
        clickOutside,
    },
    mixins: [dataLayerMixin],
    provide() {
        return {
            isStatic: this.isStatic,
        };
    },
    props: {
        /**
         * The URL for the VS logo link
         */
        href: {
            type: String,
            required: true,
        },
        /**
         * Accessiblity alt text for the menu button
         */
        menuToggleAltText: {
            type: String,
            required: true,
        },
        /**
         * Search button text
         */
        searchButtonText: {
            type: String,
            required: true,
        },
        /**
         * Text that renders in search form label (sr-only)
         * and input placeholder
         */
        searchLabelText: {
            type: String,
            default: 'What are you looking for?',
        },
        /**
         * Text that renders inside the clear button
         * on the search form (sr-only)
         */
        searchClearButtonText: {
            type: String,
            default: 'Clear form',
        },
        /**
         * Text that renders inside the close button on
         * the search form (sr-only)
         */
        searchCloseButtonText: {
            type: String,
            default: 'Close search form',
        },
        /**
         * If true, completely remove the search button from the nav
         * to render search inaccessible
         */
        noSearch: {
            type: Boolean,
            default: false,
        },
        /**
         * Indicates whether the nav contains static links rather than dropdowns. If true some
         * supporting aria roles must be added.
         */
        isStatic: {
            type: Boolean,
            default: false,
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
    box-shadow: $vs-elevation-shadow-overlay;
}

</style>
