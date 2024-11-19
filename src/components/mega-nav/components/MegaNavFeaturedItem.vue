<template>
    <VsStretchedLinkCard
        :link="link"
        type="internal"
        :img-src="imgUrl"
        :img-alt="imgAlt"
        class="vs-mega-nav-featured-item"
        data-test="vs-mega-nav-featured-item"
        heading-level="2"
        heading-style="heading-xxs"
    >
        <template #stretched-card-header>
            <!-- @slot Featured Item header text  -->
            <slot name="vs-featured-item-header" />
        </template>

        <template #stretched-card-content>
            <!-- @slot Featured Item body content  -->
            <slot name="vs-featured-item-content" />
        </template>

        <template #stretched-card-link>
            <!-- @slot Featured Item link text  -->
            <slot name="vs-featured-item-link" />
        </template>
    </VsStretchedLinkCard>
</template>

<script>
import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';

/**
 *  This component is used to show a featured item in the meganav
 *
 * @displayName MegaNav Featured Item
 */

export default {
    name: 'VsMegaNavFeaturedItem',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsStretchedLinkCard,
    },
    props: {
        /**
        * Link URL for the featured item
        */
        link: {
            type: String,
            required: true,
        },
        /**
        * Image URL for the featured item
        */
        imgUrl: {
            type: String,
            required: true,
        },
        /**
        * Image alt text for the featured item
        */
        imgAlt: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
    .card.vs-mega-nav-featured-item {
        border-top: 1px solid #e0e0e0;

        &:focus {
            .vs-stretched-link-card__link {
                outline: 2px;
            }
        }

        &--bottom {
            bottom: 0;
            top: auto;
        }

        .card-body {
            position: absolute;
            width: 80%;
            bottom: 0;
            left: 0;
            background: $vs-color-new-background-primary;
            padding: $spacer-125 $spacer-075;
        }

        .card-title {
            margin-top: $spacer-0;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .vs-stretched-link-card__content {
            display: none;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .vs-stretched-link-card__link {
            &:hover {
                text-decoration: none;
            }
        }

        @include media-breakpoint-up(sm) {
            display: flex;
            flex-direction: row-reverse;

            .card-body {
                position: initial;
                width: auto;
                max-width: 100%;
                padding: $spacer-200;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                // IE11 fix as it doesn't like position: initial
                @media screen and (-ms-high-contrast: active), screen and
                    (-ms-high-contrast: none) {
                    position: relative;
                }
            }

            .vs-stretched-link-card__img-container {
                width: 245px;
                height: auto;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-075;
            flex-direction: column;
            border-top: none;

            .card-body {
                padding: $spacer-125 $spacer-075;
            }

            .vs-stretched-link-card__img-container {
                width: 100%;
            }

            .vs-stretched-link-card__content {
                display: -webkit-box;
                margin: $spacer-0;
                color: $vs-color-new-text-primary;
            }

            .vs-stretched-link-card__link {
                align-self: flex-end;
                padding: $spacer-050;
            }
        }
    }

    @include no-js {
        @include media-breakpoint-down(lg) {
            .card.vs-mega-nav-featured-item {
                .vs-stretched-link-card__img-container {
                    width: 100%;
                }

                .card-body {
                    position: absolute;
                    width: 80%;
                    bottom: 0;
                    left: 0;
                    background: #fff;
                    padding: $spacer-125 $spacer-075;
                }

                .card-title {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>
