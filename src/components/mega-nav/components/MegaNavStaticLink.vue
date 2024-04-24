<template>
    <li
        class="vs-mega-nav-static-link"
        data-test="vs-mega-nav-static-link"
        role="presentation"
    >
        <div>
            <VsLink
                class="vs-mega-nav-static-link__inner"
                :href="href"
                role="menuitem"
                data-layer-value="menuNavigationDataEvent"
            >
                <!-- @slot Default slot for nav link content  -->
                <slot />
            </VsLink>
        </div>
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
            box-shadow: $shadow-button-focus inset;

            &::after{
                display: none;
            }
        }

        .vs-mega-nav-static-link__inner {
            position: relative;
            text-decoration: none;
            color: $color-base-text;
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
                background: $color-pink;
                transition: width $duration-base linear;
                border: 0;
                margin: 0;
            }

            &:hover {
                color: $color-pink;

                &::after {
                    width: calc(100% - #{$spacer-2});
                }
            }
        }
    }

</style>
