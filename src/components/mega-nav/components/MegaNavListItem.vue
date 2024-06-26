<template>
    <li
        class="vs-mega-nav-list-item"
        data-test="vs-mega-nav-list-item"
        :class="navItemClasses"
        role="presentation"
    >
        <VsLink
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
    name: 'VsMegaNavListItem',
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
         * Check if link is for subheading
         */
        subheadingLink: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        navItemClasses() {
            return {
                'vs-mega-nav-list-item__heading': this.href === '#',
                'vs-mega-nav-list-item__link': this.href !== '#',
                'vs-mega-nav-list-item__subheading-link': this.subheadingLink,
            };
        },
    },
};
</script>

<style lang="scss">
.vs-list li.vs-mega-nav-list-item{
    position: relative;
    list-style-type: none;
    background-color: $vs-color-background-information;
    border-top: 1px solid $vs-color-border;
    margin-bottom: 0;

    @include media-breakpoint-up(lg) {
        border-top: 0;
        background-color: $vs-color-background-inverse;
    }

    .vs-link--variant-primary{
        text-decoration: none;
        display: block;
        padding: $spacer-3 $spacer-9;
        border: 2px solid $vs-color-background-information;
        line-height: 1.4;
        font-size: $font-size-4;

        &:hover{
            border: 2px solid $vs-color-background-information;
        }

        @include media-breakpoint-up(lg) {
            border: 2px solid $vs-color-border-inverse;
            line-height: $line-height-s;
            padding: 0.125rem $spacer-4;

            &:hover{
                border: 2px solid $vs-color-border-inverse;
            }
        }

        &:focus{
            @extend %outline-link-focus;
            outline-offset: -2px;
        }
    }

    &__link{
        .vs-link--variant-primary{
            color: $vs-color-text;
            transition: $duration-base color;

            @include media-breakpoint-up(lg) {
                color: $vs-color-text-less-subtle;
            }

            &:hover{
                background-color: $vs-color-background-information;
                color: $vs-color-link;

                @include media-breakpoint-up(lg) {
                    background-color: transparent;

                    &:after{
                        opacity: $opacity-100;
                    }
                }
            }

            &::after{
                content: "";
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 12px;
                height: 100%;
                background: $vs-color-border-accent-bluebell;
            }

            @include media-breakpoint-up(lg) {
                &:after{
                    width: 6px;
                    height: 100%;
                    opacity: $opacity-0;
                    background: $vs-color-background-primary;
                    transition: opacity 0.16s ease-in-out;
                }
            }
        }
    }

    &__subheading-link{
        .vs-link--variant-primary{
            color: $vs-color-link;
        }
    }
}

@include no-js {
    .vs-mega-nav-list-item{
        background-color: transparent;
        border: 0;

        .vs-link--variant-primary{
            border: 2px solid $vs-color-border-inverse;
            line-height: $line-height-s;
            padding: $spacer-1 $spacer-5;
        }

        &__link{
            .vs-link--variant-primary{
                &:hover{
                    background-color: transparent;

                    &:after{
                        opacity: $opacity-100;
                    }
                }

                &::after{
                    width: 6px;
                    height: 100%;
                    opacity: $opacity-0;
                    background: $vs-color-background-primary;
                    transition: opacity 0.16s ease-in-out;
                }
            }
        }
    }
}

</style>
