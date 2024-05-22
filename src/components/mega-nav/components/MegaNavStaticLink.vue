<template>
    <li
        class="vs-mega-nav-static-link"
        :class="isFullWidth ? 'vs-mega-nav-static-link--full-width' : ''"
        data-test="vs-mega-nav-static-link"
        role="presentation"
    >
        <VsLink
            class="vs-mega-nav-static-link__inner"
            :href="href"
            role="menuitem"
            data-layer-value="menuNavigationDataEvent"
        >
            <!-- @slot Default slot for nav link content  -->
            <slot />
        </VsLink>
    </li>
</template>

<script>
import VsLink from '@/components/link/Link.vue';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 *  Meganav list items with link and slot for link content
 *
 * @displayName MegaNav List Item
 */
export default {
    name: 'VsMegaNavStaticLink',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsLink,
    },
    mixins: [dataLayerMixin],
    props: {
        /**
         * The URL for the nav list link
         */
        href: {
            type: String,
            default: '#',
        },
        /**
         * If the should fill the full width of its container, usually in
         * a dropdown on mobile
         */
        isFullWidth: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
    .vs-mega-nav-static-link {
        height: auto;
        width: auto;
        font-size: $font-size-4;
        margin-bottom: $spacer-2;
        white-space: nowrap;

        @include media-breakpoint-up(lg) {
            margin-bottom: 0;
        }

        &.disabled {
            opacity: $opacity-100;
        }

        &:focus {
            box-shadow: $vs-box-shadow-focus inset;

            &::after{
                display: none;
            }
        }

        &--full-width {
            background: $vs-color-background-inverse;
            list-style: none;
            margin: 0;
            padding: $spacer-3 $spacer-5;
            border-top: 1px solid $vs-color-border;
            font-size: $font-size-5;
            line-height: $line-height-s;
        }

        .vs-mega-nav-static-link__inner {
            position: relative;
            text-decoration: none;
            color: $vs-color-text;
            padding: $spacer-3 $spacer-2;
            margin: $spacer-0 $spacer-0;

            @include media-breakpoint-up(xl) {
                margin: $spacer-0 $spacer-2;
            }

            &::after {
                content: '';
                position: absolute;
                display: block;
                bottom: 0;
                left: $spacer-1;
                width: 0;
                height: 4px;
                background: $vs-color-link;
                transition: width $duration-base linear;
                border: 0;
                margin: 0;
            }

            &:hover {
                color: $vs-color-link;

                &::after {
                    width: calc(100% - #{$spacer-2});
                }
            }
        }
    }

</style>
