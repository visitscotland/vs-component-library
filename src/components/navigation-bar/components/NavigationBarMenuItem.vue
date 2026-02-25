<template>
    <li class="vs-navigation-bar-menu-item">
        <a
            :class="menuItemLinkClasses"
            :href="href"
            role="menuitem"
            data-layer-value="menuNavigationDataEvent"
        >
            <!-- @slot Default slot for nav link content  -->
            <slot />
        </a>
    </li>
</template>

<script>
/**
 *  Navigation bar menu item component with slot for link content
 *
 * @displayName Navigation Bar Menu Item
 */
export default {
    name: 'VsNavigationBarMenuItem',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
         * The URL for the nav list link
         */
        href: {
            type: String,
            default: '#',
        },
        /**
         * The level of the menu item, which determines the styling.
         * Primary level items are typically top-level links in the nav,
         * while secondary level items are typically found in dropdowns or submenus
         */
        level: {
            type: String,
            default: 'secondary',
            validator: (value) => value.match(/(primary|secondary)/),
        },
        /**
         * The variant of the menu item, which determines the styling of the link.
         */
        variant: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|secondary|inverse)/),
        },
    },
    computed: {
        menuItemLinkClasses() {
            return [
                `vs-navigation-bar-menu-item__link--level-${this.level}`,
                `vs-navigation-bar-menu-item__link--variant-${this.variant}`,
                'vs-navigation-bar-menu-item__link',
            ];
        },
    },
};
</script>

<style lang="scss">
    .vs-navigation-bar-menu-item {
        height: auto;
        font-size: $font-size-4;

        &__link {
            position: relative;
            text-decoration: none;
            padding: $vs-spacer-075 $vs-spacer-100;
            margin: $vs-spacer-0;
            display: block;
            transition: background-color $duration-base;
            border-radius: $vs-radius-full;
            white-space: normal;

            &:focus, &:focus-visible {
                box-shadow: $vs-focus-shadow inset;
                outline: 0;
            }

            &--variant-default {
                color: $vs-color-text-primary;

                &:hover {
                    background-color: $vs-color-interaction-cta-subtle-hover;
                }

                &:active {
                    color: $vs-color-text-inverse;
                    background-color: $vs-color-interaction-cta-subtle-pressed;
                }
            }

            &--variant-secondary {
                color: $vs-color-text-secondary;

                &:hover {
                    background-color: $vs-color-interaction-cta-subtle-hover;
                }

                &:active {
                    color: $vs-color-text-inverse;
                    background-color: $vs-color-interaction-cta-subtle-pressed;
                }
            }

            &--level-primary {
                &.vs-navigation-bar-menu-item__link--variant-default {
                    font-weight: $vs-font-weight-medium;
                }

                &.vs-navigation-bar-menu-item__link--variant-inverse {
                    color: $vs-color-text-inverse;

                    &:hover, &:active {
                        text-decoration: underline;
                    }
                }
            }
        }

    }
</style>
