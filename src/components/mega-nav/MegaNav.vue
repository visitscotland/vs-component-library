<template>
    <div>
        <nav
            class="vs-mega-nav bg-white"
            aria-label="main nav"
            data-test="vs-mega-nav"
            id="main-nav"
        >
            <VsContainer
                fluid="lg"
                class="h-100"
            >
                <VsRow
                    class="align-items-center h-100 vs-mega-nav__main-row"
                >
                    <!-- Logo Link -->
                    <VsCol
                        cols="8"
                        md="4"
                        lg="3"
                    >
                        <div>
                            <VsSvgLink
                                class="vs-mega-nav__logo"
                                data-test="vs-mega-nav__logo"
                                :link-alt-text="logoAltText"
                                :href="href"
                                :svg-fill="tokens['vs-color-background-brand']"
                                svg-path="visitscotland-logo"
                                data-layer-value="homePageLogoClickDataEvent"
                            />
                        </div>
                    </VsCol>

                    <!-- Desktop Top Menu Toggles -->
                    <VsCol
                        cols="4"
                        md="6"
                        :lg="noSearch ? 9 : 7"
                        class="vs-mega-nav__menu d-none d-lg-block"
                    >
                        <VsMegaNavTopMenu>
                            <!-- @slot For top menu list items in navbar  -->
                            <slot name="mega-nav-top-menu-items" />
                        </VsMegaNavTopMenu>
                    </VsCol>

                    <!-- Mobile Toggle and Menu -->
                    <VsCol
                        cols="4"
                        md="8"
                        lg="2"
                        class="justify-content-end align-items-center position-static d-flex h-100"
                    >
                        <VsSiteSearch
                            @toggle-action="toggleSearch"
                            :is-showing="showSearch"
                            v-if="!noSearch"
                        >
                            {{ searchButtonText }}
                        </VsSiteSearch>

                        <div
                            class="vs-mega-nav__menu-mobile d-lg-none"
                            id="vs-mega-nav__menu-mobile"
                            data-test="vs-mega-nav-mobile-container"
                        >
                            <VsButton
                                class="vs-mega-nav__mobile-menu-toggle p-0"
                                icon-only
                                :icon="isOpen ? 'vs-icon-control-dismiss' : 'vs-icon-control-menu'"
                                variant="subtle"
                                @click="menuToggle()"
                                ref="toggleButton"
                                :rounded="false"
                                aria-haspopup="true"
                            >
                                {{ menuToggleAltText }}
                            </VsButton>

                            <VsMegaNavMobileMenu
                                v-if="isOpen"
                                v-click-outside="closeMenu"
                            >
                                <slot name="mega-nav-accordion-items" />
                            </VsMegaNavMobileMenu>
                        </div>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </nav>

        <VsSiteSearchForm
            v-show="showSearch"
            @toggle-action="toggleSearch"
            :is-showing="showSearch"
            :label-text="searchLabelText"
            :submit-button-text="searchButtonText"
            :close-button-text="searchCloseButtonText"
        />
    </div>
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsSvgLink from '@/components/svg-link/SvgLink.vue';
import VsMegaNavTopMenu from '@/components/mega-nav/components/MegaNavTopMenu.vue';
import VsMegaNavMobileMenu from '@/components/mega-nav/components/MegaNavMobileMenu.vue';
import VsButton from '@/components/button/Button.vue';
import VsSiteSearch from '@/components/site-search/SiteSearch.vue';
import VsSiteSearchForm from '@/components/site-search/components/SiteSearchForm.vue';
import designTokens from '@/assets/tokens/tokens.json';
import clickOutside from '@/directives/click-outside';
import dataLayerMixin from '../../mixins/dataLayerMixin';

/**
 *  The Mega Nav bar component includes main VS logo and slots for
 *  top menu items on desktop and dropdown toggle with menu items for mobile
 *
 * @displayName Mega Navigation
 */
export default {
    name: 'VsMegaNav',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsSvgLink,
        VsMegaNavTopMenu,
        VsMegaNavMobileMenu,
        VsSiteSearch,
        VsSiteSearchForm,
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
        logoAltText: {
            type: String,
            default: 'VisitScotland Home',
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
    data() {
        return {
            isOpen: false,
            showSearch: false,
            tokens: designTokens,
        };
    },
    mounted() {
        this.addTabClose();
    },
    methods: {
        /**
         * Toggles dropdown menu property
         * @returns {Boolean} true if menu is open
        */
        menuToggle() {
            this.isOpen = !this.isOpen;
        },
        /**
         * Toggles site search box when event emitted from button
        */
        toggleSearch() {
            this.showSearch = !this.showSearch;
        },
        /**
         * Closes the menu as long as the open button hasn't just been clicked
         */
        closeMenu(event) {
            const mobileNavContainer = document.getElementsByClassName('vs-mega-nav__menu-mobile')[0];

            if (this.isOpen && !mobileNavContainer.contains(event.target)) {
                this.isOpen = false;
            }
        },
        /**
         * adds event listener for tabbing out of mobile menu
        */
        addTabClose() {
            document.body.addEventListener('focusin', (event) => {
                if (this.isOpen) {
                    const theTarget = event.target;
                    if (!theTarget.closest('#vs-mega-nav__menu-mobile')) {
                        this.isOpen = false;
                    }
                }
            });
        },
    },
};
</script>

<style lang="scss">
.vs-mega-nav {
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    height: 45px;
    box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.15);

    @include media-breakpoint-up(lg) {
        height: 48px;
    }

    &__main-row {
        flex-wrap: nowrap;
    }

    &__logo {
        display: inline-block;
        height: calc(#{$spacer-200} + #{$spacer-025});

        @include media-breakpoint-up(lg) {
            height: calc(#{$spacer-200} + #{$spacer-050});
        }
    }

    &__logo svg {
        width: 184px;
        vertical-align: top;
        margin-top: $spacer-025;
    }

    .vs-mega-nav__menu {
        position: static;
    }

    .vs-mega-nav__menu-mobile {
        margin-left: .5rem;
    }

    &__mobile-menu-toggle {
        position: relative;
    }

    &__mobile-menu {
        display: none
    }
}

@include no-js {
    .vs-mega-nav {
        box-shadow: none;
        height: auto;
    }

    .vs-mega-nav__menu-mobile {
        display: none!important;
    }

    .vs-mega-nav__menu{
        display: block!important;
        width: 100%;
        max-width: 100%;
        flex: 0 0 100%;
        position: relative;
    }

    .vs-mega-nav__main-row {
        flex-wrap: wrap;
    }
}
</style>
