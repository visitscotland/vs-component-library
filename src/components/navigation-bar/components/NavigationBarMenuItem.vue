<template>
    <li
        class="vs-navigation-bar-menu-item"
        data-test="vs-navigation-bar-menu-item"
    >
        <a
            :class="menuItemLinkClasses"
            :href="href"
            data-layer-value="menuNavigationDataEvent"
            @click="clickHandler($event)"
            @keydown="keyHandler($event)"
        >
            <!-- @slot Default slot for nav link content  -->
            <slot />
        </a>
    </li>
</template>

<script>
import dataLayerMixin from '../../../mixins/dataLayerMixin';
/**
 *  Navigation bar menu item component with slot for link content
 *
 * @displayName Navigation Bar Menu Item
 */
export default {
    name: 'VsNavigationBarMenuItem',
    status: 'prototype',
    release: '0.1.0',
    mixins: [dataLayerMixin],
    props: {
        /**
         * The URL for the nav list link
         */
        href: {
            type: String,
            required: true,
        },
        /**
         * The variant of the menu item, which determines the styling of the link.
         * Primary level items are typically top-level links in the nav,
         * while secondary level items are typically found in dropdowns or submenus
         */
        variant: {
            type: String,
            default: 'secondary-menu-item',
            validator: (value) => value.match(/(primary-menu-item|primary-sidebar-item|secondary-menu-item)/),
        },
    },
    computed: {
        menuItemLinkClasses() {
            return [
                `vs-navigation-bar-menu-item__link--${this.variant}`,
                'vs-navigation-bar-menu-item__link',
            ];
        },
    },
    methods: {
        clickHandler(event) {
            event.preventDefault();

            if (this.dataLayerValue) {
                this.createDataLayerObject(this.dataLayerValue, event, this.href);
            }
            // short delay to ensure that analytics get added to datalayer
            setTimeout(() => {
                this.navigateToUrl();
            }, 500);
        },
        navigateToUrl() {
            // don't navigate if it's an empty or anchor link
            if (this.href !== '#' && this.href !== null) {
                window.location.href = this.href;
            }
        },
        /**
         * Fires on keypress events on the link, and passes 'space' and 'enter' events
         * to the click handler to ensure analytics events are properly initiated.
         */
        keyHandler(event) {
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.preventDefault();

                this.clickHandler(event);
            }
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
            white-space: normal;
            border-radius: $vs-radius-small;
            color: $vs-color-text-primary;

            &:hover {
                background-color: $vs-color-interaction-cta-subtle-hover;
            }

            &:active {
                color: $vs-color-text-inverse;
                background-color: $vs-color-interaction-cta-subtle-pressed;
            }

            &:focus, &:focus-visible {
                box-shadow: $vs-focus-shadow inset;
                outline: 0;
            }

            &--primary-menu-item,
            &--primary-sidebar-item {
                font-weight: $vs-font-weight-medium;
            }

            &--primary-menu-item {
                border-radius: $vs-radius-full;
            }

            &--primary-sidebar-item {
                font-size: $vs-font-size-heading-xxs;
                padding: $vs-spacer-100 $vs-spacer-075;
                line-height: $vs-line-height-heading;

                &:hover {
                    color: $vs-color-icon-cta-on-light;
                }

                &:active {
                    color: $vs-color-icon-inverse;
                }
            }
        }

    }
</style>
