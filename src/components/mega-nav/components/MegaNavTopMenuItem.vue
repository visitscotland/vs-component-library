<template>
    <li
        class="vs-mega-nav-top-menu-item"
        data-test="vs-mega-nav-top-menu-item"
        ref="menuToggle"
    >
        <LazyHydrationWrapper :on-interaction="['focus', 'click']">
            <VsMegaNavDropdown
                menu-toggle-alt-text="Toggle Menu"
            >
                <template #button-content>
                    <!-- @slot For top menu item button content -->
                    <slot name="button-content" />
                </template>

                <template #cta-link>
                    <VsLink
                        v-if="href && ctaText"
                        :href="href"
                        role="menuitem"
                        data-test="vs-mega-nav-top-menu-item__cta-link"
                        class="vs-mega-nav-top-menu-item__cta-link"
                    >
                        {{ ctaText }}
                    </VsLink>
                    <hr class="vs-mega-nav-top-menu-item__divider">
                </template>

                <template #dropdown-content>
                    <!-- @slot Slot for dropdown menu list content -->
                    <div class="vs-mega-nav-top-menu-item__columns-wrapper">
                        <slot name="dropdown-content" />

                        <div
                            class="
                                vs-mega-nav-top-menu-item__featured
                                vs-mega-nav-top-menu-item__featured--left
                            "
                            :class="alignmentClass"
                            data-test="vs-mega-nav-top-menu-item__featured"
                            v-if="hasFeaturedItemLeft"
                        >
                            <slot name="nav-featured-item-left" />
                        </div>

                        <div
                            class="vs-mega-nav-top-menu-item__featured"
                            :class="alignmentClass"
                            data-test="vs-mega-nav-top-menu-item__featured"
                            v-if="hasFeaturedItem"
                        >
                            <slot name="nav-featured-item" />
                        </div>

                        <div
                            class="vs-mega-nav-top-menu-item__featured-event"
                            data-test="vs-mega-nav-top-menu-item__featured-event"
                            v-if="hasFeaturedEvent"
                        >
                            <slot name="nav-featured-event" />
                        </div>
                    </div>
                </template>
            </VsMegaNavDropdown>
        </LazyHydrationWrapper>
    </li>
</template>

<script>
import VsMegaNavDropdown from '@components/mega-nav/components/MegaNavDropdown.vue';
import VsLink from '@components/link/Link.vue';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

/**
 *  Mega nav top level menu items with a slots for toggle button and dropdown content
 *
 * @displayName MegaNav Top Menu Item
 */
export default {
    name: 'VsMegaNavTopMenuItem',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsMegaNavDropdown,
        VsLink,
        LazyHydrationWrapper,
    },
    props: {
        /**
         * The URL for the top level CTA link
         */
        href: {
            type: String,
            default: '',
        },
        /**
         * The text to display for the CTA link
         */
        ctaText: {
            type: String,
            default: '',
        },
        /**
        * Alignment of featured item block - top or bottom
        */
        align: {
            type: String,
            default: 'top',
            validator: (value) => value.match(/(left|bottom|top)/),
        },
    },
    computed: {
        hasFeaturedItem() {
            return (this.$slots['nav-featured-item'] && this.$slots['nav-featured-item']());
        },
        hasFeaturedItemLeft() {
            return (this.$slots['nav-featured-item-left'] && this.$slots['nav-featured-item-left']());
        },
        hasFeaturedEvent() {
            return (this.$slots['nav-featured-event'] && this.$slots['nav-featured-event']());
        },
        alignmentClass() {
            return this.align === 'bottom'
                ? 'vs-mega-nav-top-menu-item__featured--bottom' : '';
        },
    },
};
</script>

<style lang="scss">
/* needed for specificity */
.vs-list.vs-list--unstyled {
    .vs-mega-nav-top-menu-item {
        &__featured {
            @include media-breakpoint-up(lg) {
                margin: $spacer-2 $spacer-0 $spacer-5 $spacer-6;
                position: absolute;
                right: 0;
                top: 0;

                @include media-breakpoint-up(lg) {
                    width: 23%;
                }

                @include media-breakpoint-up(xl) {
                    width: 21.8%;
                }

                @include media-breakpoint-up(xxl) {
                    width: 21.3%;
                }

                &--bottom {
                    bottom: 0;
                    top: auto;
                    margin-bottom: $spacer-0;
                }

                &--left {
                    @include media-breakpoint-up(lg) {
                        right: calc(23%);
                    }

                    @include media-breakpoint-up(xl) {
                        right: calc(21.8%);
                    }

                    @include media-breakpoint-up(xxl) {
                        right: calc(21.3%);
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        top: 12px;
                        bottom: 12px;
                        right: 0;
                        width: 1px;
                        background: $color-gray-tint-6;
                    }
                }
            }
        }

        &__featured-event {
            @include media-breakpoint-up(lg) {
                width: 23%;
            }

            @include media-breakpoint-up(xl) {
                width: 21.8%;
            }

            @include media-breakpoint-up(xxl) {
                width: 21.3%;
            }
        }

        &__cta-link{
            text-decoration: none;
            padding: 0.12rem $spacer-5;
            transition: $duration-base color;

            &:hover{
                color: $color-secondary-gray-shade-3;
            }
        }

        &__divider{
            margin: $spacer-3 0 $spacer-4;
            border-color: $color-gray-tint-6;
        }

        &__columns-wrapper{
            position: relative;
            display: flex;
            width: 100%;
            flex-flow: column wrap;
            height: 515px;
            overflow: hidden;
            align-content: flex-start;
        }
    }
}

@include no-js {
    .vs-list.vs-list--unstyled {
        .vs-mega-nav-top-menu-item{
            &__divider {
                margin-bottom: $spacer-4;
            }
            &__columns-wrapper{
                display: block;
                height: auto;
                padding-left: $spacer-8;

                @include media-breakpoint-up(lg) {
                    padding-left: $spacer-10;
                }
            }

            &__featured {
                position: relative;
                right: auto;
                width: 100vw;
                margin: 0 $spacer-6 $spacer-4 (-$spacer-8);

                @include media-breakpoint-up(sm) {
                    width: 50%;
                }

                @include media-breakpoint-up(md) {
                    width: 32%;
                }

                .vs-mega-nav-featured-item {
                    width: 100%;
                }
            }
        }
    }
}
</style>
