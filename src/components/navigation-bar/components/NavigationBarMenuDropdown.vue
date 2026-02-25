<template>
    <li
        class="vs-navigation-bar-menu-dropdown"
        data-test="vs-navigation-bar-menu-dropdown"
        role="menuitem"
    >
        <BDropdown
            variant="subtle"
            :class="buttonClasses"
            ref="dropdown"
            @show="dataLayerSubmit($event)"
        >
            <template #button-content>
                <!-- @slot For dropdown toggle button content  -->
                <slot name="button-content" />
            </template>

            <div class="vs-navigation-bar-menu-dropdown__content">
                <div class="vs-navigation-bar-menu-dropdown__main">
                    <!-- @slot Default slot for dropdown menu content  -->
                    <slot />
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
 * @displayName Navigation Bar Menu Dropdown
 */
export default {
    name: 'VsNavigationBarMenuDropdown',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BDropdown,
    },
    mixins: [
        dataLayerMixin,
    ],
    inject: ['navbarBackground'],
    computed: {
        buttonClasses() {
            if (this.navbarBackground === 'inverse') {
                return 'vs-button--navbar-inverse';
            }
            return '';
        },
    },
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
.vs-navigation-bar-menu-dropdown {

        .vs-button--navbar-inverse {
            .btn.dropdown-toggle{
                color: $vs-color-text-inverse;

                &::after {
                    color: $vs-color-text-inverse;
                }

                &:hover,
                &:focus {
                    color: $vs-color-text-primary; // invert when hovered/focused

                    &::after {
                        color: $vs-color-text-primary;
                    }
                }
            }
        }

    .btn.dropdown-toggle {
        position: relative;
        font-weight: $vs-font-weight-medium;
        line-height: 1.3;
        border-radius: $vs-radius-full;
        border: 0;
        padding: $vs-spacer-075 $vs-spacer-250 $vs-spacer-075 $vs-spacer-100;
        transition: background-color $duration-base;
        white-space: normal;
        text-align: left;

        &:focus-visible {
            box-shadow: $vs-focus-shadow inset;
        }

        &:hover {
            background-color: $vs-color-interaction-cta-subtle-hover;
        }

        &:active, &:active:focus, &.show {
            color: $vs-color-text-inverse;
            background-color: $vs-color-interaction-cta-subtle-pressed;

            &::after {
                color: $vs-color-text-inverse;
                content: "\f077";
            }
        }

        &:focus, &:active, &:active:focus {
            z-index: 1001;
        }

        &::after {
            font-family: "Font Awesome 6 Pro";
            font-weight: 400;
            content: "\f078";
            color: $vs-color-text-primary;
            position: absolute;
            right: $vs-spacer-075;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
        }
    }

    .dropdown-menu {
        border-radius: $vs-radius-small;
        border: 0;
        margin-top: $vs-spacer-100;
        margin-left: -$vs-spacer-075;
        box-shadow: $vs-elevation-shadow-overlay;
        padding: $vs-spacer-075;
        min-width: 260px!important;
    }

    &__content {
        display: flex;
    }
    &__main {
        flex: 1;
    }
}
</style>
