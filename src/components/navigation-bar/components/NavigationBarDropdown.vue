<template>
    <li
        class="vs-navigation-bar-dropdown"
        data-test="vs-navigation-bar-dropdown"
        role="menuitem"
    >
        <BDropdown
            variant="subtle"
            ref="dropdown"
            @show="dataLayerSubmit($event)"
        >
            <template #button-content>
                <!-- @slot For dropdown toggle button content  -->
                <slot name="button-content" />
            </template>

            <div class="vs-navigation-bar-dropdown__content">
                <div class="vs-navigation-bar-dropdown__main">
                    <!-- @slot The rest of the mega nav links put
                    here in the dropdown menu  -->
                    <slot />
                </div>

                <div class="vs-navigation-bar-dropdown__highlight">
                    <slot name="menu-highlight" />
                </div>
            </div>
        </BDropdown>
    </li>
</template>

<script>
import { BDropdown } from 'bootstrap-vue-next';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 *  This component includes a slot for toggle button content
 *  and slots for the mega nav dropdown menu content
 *
 * @displayName Navigation Bar Dropdown
 */
export default {
    name: 'VsNavigationBarDropdown',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BDropdown,
    },
    mixins: [
        dataLayerMixin,
    ],
    methods: {
        /**
         * Submit event to dataLayer for tracking
         */
        dataLayerSubmit() {
            if (this.$slots['button-content']()[1] && this.$slots['button-content']()[1].children[0]) {
                const btnText = this.$slots['button-content']()[1].children[0].children;

                const clickEvent = {
                    target: {
                        text: btnText,
                    },
                };

                this.createDataLayerObject(
                    'menuNavigationDataEvent',
                    clickEvent,
                    null,
                );
            }
        },
    },
};
</script>

<style lang="scss">

.vs-navigation-bar-dropdown {
    padding: $vs-spacer-050 0 0 $vs-spacer-050;

    @include media-breakpoint-up(lg) {
        padding: 0;
    }

    .btn.dropdown-toggle {
        position: relative;
        font-weight: $vs-font-weight-regular;
        border-radius: $vs-radius-none;
        border: 0;
        height: $vs-spacer-175;
        width: $vs-spacer-175;
        font-size: 0;
        padding: .125rem;

        &:focus-visible {
            @extend %primary-button-focus;
        }

        &:focus, &:active, &:active:focus {
            z-index: 1001;
        }

        @include media-breakpoint-up(lg) {
            padding: $vs-spacer-075 $vs-spacer-050;
            height: auto;
            width: auto;
            font-size: $font-size-4;

            &:hover {
                color: $vs-color-text-cta-on-light;
            }
        }

        @include media-breakpoint-up(xl) {
            margin: 0 $vs-spacer-075;
        }
    }

    .dropdown-menu {

    }

    &__content {
        display: flex;
    }

    &__main {
        flex: 1;
    }

    &__highlight{
        background-color: $vs-color-background-highlight;
    }

}
</style>
