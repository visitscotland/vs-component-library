<template>
    <BDropdown
        :class="menuDropdownClasses"
        data-test="vs-navigation-bar-menu-dropdown"
        variant="subtle"
        ref="dropdown"
        @show="dataLayerSubmit"
    >
        <template #button-content>
            <!-- @slot For dropdown toggle button content  -->
            <slot name="button-content" />
        </template>

        <!-- @slot Default slot for dropdown menu content  -->
        <slot />
    </BDropdown>
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
    props: {
        /** Applies subtle dropdown styling to the button,
         * intended for use in utilities section of the nav
         */
        subtle: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        menuDropdownClasses() {
            return [
                this.subtle ? 'vs-navigation-bar-menu-dropdown--subtle' : '',
                'vs-navigation-bar-menu-dropdown',
            ];
        },
    },
    methods: {
        /**
         * Submit event to dataLayer for tracking
         */
        dataLayerSubmit() {
            const btnText = this.$refs.dropdown?.$el?.querySelector('.dropdown-toggle')?.innerText?.trim() || '';
            if (btnText) {
                this.createDataLayerObject(
                    'menuNavigationDataEvent',
                    {
                        target: {
                            text: btnText,
                            innerText: btnText,
                            closest: () => null,
                        },
                    },
                    null,
                );
            }
        },
    },
};
</script>

<style lang="scss">
.vs-navigation-bar-menu-dropdown {
    .btn.dropdown-toggle {
        position: relative;
        font-weight: $vs-font-weight-medium;
        line-height: 1.3;
        border-radius: $vs-radius-full;
        padding: $vs-spacer-075 $vs-spacer-225 $vs-spacer-075 $vs-spacer-100;
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

    &.vs-navigation-bar-menu-dropdown--subtle .btn.dropdown-toggle {
        @extend %button-default-styles;
        padding: $vs-spacer-0125 $vs-spacer-225 $vs-spacer-0125 $vs-spacer-125;

        @include vs-button-variant(
            $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle, $vs-color-interaction-cta-subtle,
            $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle-hover, $vs-color-interaction-cta-subtle-hover,
            $vs-color-text-inverse, $vs-color-interaction-cta-subtle-pressed, $vs-color-interaction-cta-subtle-pressed,
        );

        &::after {
            color: $vs-color-text-cta-on-light;
        }

        &:active, &:active:focus, &.show {
            &:hover {
                border-color: $vs-color-interaction-cta-subtle-pressed;
            }

            .vs-icon {
                color: $vs-color-text-inverse;
            }
        }
    }

    .dropdown-menu {
        border-radius: $vs-radius-small;
        border: 0;
        margin-top: $vs-spacer-150;
        margin-left: -$vs-spacer-075;
        box-shadow: $vs-elevation-shadow-overlay;
        padding: $vs-spacer-075;
        min-width: 180px!important;
    }
}
</style>
