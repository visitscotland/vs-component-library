<template>
    <nav class="vs-global-menu">
        <LazyHydrationWrapper :on-interaction="['focus', 'click']">
            <VsContainer
                fluid="lg"
                class="px-025 px-sm-075"
            >
                <VsRow>
                    <VsCol
                        cols="12"
                        class="vs-global-menu__wrapper"
                    >
                        <!-- Small Screens Menu -->
                        <VsGlobalMenuDropdown
                            class="d-lg-none"
                            :active-site="activeSite"
                            :dropdown-label="dropdownLabel"
                            :websites="websites"
                        />

                        <!-- Large Screens Menu -->
                        <VsGlobalMenuList
                            class="d-none d-lg-flex"
                            :active-site="activeSite"
                            :websites="websites"
                        />

                        <!-- @slot The content you want to appear as the
                            second element on the global menu, after the websites list,
                            goes here. -->
                        <slot name="second-menu-item" />

                        <!-- @slot The content you want to appear as the
                            third element on the global menu, after the websites list,
                            goes here. -->
                        <slot name="third-menu-item" />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </LazyHydrationWrapper>
    </nav>
</template>

<script>
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';
import VsGlobalMenuDropdown from './components/GlobalMenuDropdown.vue';
import VsGlobalMenuList from './components/GlobalMenuList.vue';

/**
 * This component is the main Global Nav Wrapper for the top of the page.
 * It holds the Our Websites and slots for Login and Language Change functionalities.
 *
 * @displayName Global Menu
 */

export default {
    name: 'VsGlobalMenu',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsGlobalMenuDropdown,
        VsGlobalMenuList,
        LazyHydrationWrapper,
    },
    props: {
        /**
         * Determines the active website
         */
        activeSite: {
            type: String,
            required: true,
        },
        /**
         * Translation text for the "Our Websites" label
         */
        dropdownLabel: {
            type: String,
            default: 'Our Websites',
        },
    },
    data() {
        return {
            websites: [
                {
                    siteName: 'VisitScotland',
                    siteUrl: 'https://www.visitscotland.com/',
                },
                {
                    siteName: 'Business Events',
                    siteUrl: 'https://businessevents.visitscotland.com/',
                },
                {
                    siteName: 'Travel Trade',
                    siteUrl: 'https://traveltrade.visitscotland.org/',
                },
                {
                    siteName: 'Toolkit',
                    siteUrl: 'https://toolkit.visitscotland.org/',
                },
                {
                    siteName: 'Corporate',
                    siteUrl: 'https://www.visitscotland.org/',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.vs-global-menu {
    background: $vs-color-background-brand;
    color: $vs-color-text-inverse;
    position: relative;
    font-size: $font-size-2;
    display: flex;
    align-items: center;

    &__wrapper {
        position: initial;
        display: flex;
        align-items: center;

        @include media-breakpoint-down(lg) {
            margin: 0;
        }
    }
}

.row:not(.g-0) > .vs-global-menu__wrapper{
    @include media-breakpoint-down(lg) {
        padding: 0;
    }
}

@include no-js {
    .vs-global-menu {
        height: auto;
        margin-bottom: $spacer-100;

        .dropdown-toggle{
            display: none
        }

        &__wrapper {
            display: flex;
            flex-wrap: wrap;

            .vs-global-menu__websites {
                display: none;
            }
        }
    }
}
</style>
