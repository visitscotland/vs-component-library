<template>
    <li
        class="vs-footer-social-item"
        data-test="vs-footer-social-item"
    >
        <VsLink
            data-test="vs-footer-social-item__link"
            :href="href"
            type="external"
            :class="icon"
            :aria-label="icon"
            data-layer-value="socialMediaExternalLinkDataEvent"
        >
            <VsIcon
                :name="icon"
                variant="light"
                size="md"
            />
        </VsLink>
    </li>
</template>

<script>

import VsLink from '@components/link/Link.vue';
import VsIcon from '@components/icon/Icon.vue';
import dataLayerMixin from '../../../mixins/dataLayerMixin';

/**
 * The FooterSocialItem is used inside the FooterSocialMenu to
 * show a button for a social media link.
 *
 * @displayName Footer Social Item
 */

export default {
    name: 'VsFooterSocialItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsLink,
        VsIcon,
    },
    mixins: [dataLayerMixin],
    props: {
        /**
         * The URL the link will point to
         */
        href: {
            type: String,
            required: true,
        },
        /**
         * Social icon to show, will also be used to choose hover colour
         * `facebook, instagram, x-twitter, youtube`
         */
        icon: {
            type: String,
            required: true,
            validator: (value) => value.match(/(facebook|instagram|x-twitter|youtube)/),
        },
    },
};
</script>

<style lang="scss">
.vs-list.vs-list--unstyled  {
    .vs-footer-social-item{
        display: inline-block;
        margin-right: $spacer-3;
        margin-bottom: $spacer-3;

        .vs-link.vs-link--variant-primary {
            background: $color-gray-shade-1;
            box-shadow: 0 0 0 2px $color-gray-shade-1;
            border: 1px solid $color-gray-shade-1;
            border-radius: $border-radius-xl;
            display: block;
            height: 42px;
            width: 42px;
            transition: $transition-base;
            text-decoration: none;

            &.facebook {
                &:hover {
                    background: $color-facebook;
                    box-shadow: 0 0 0 2px $color-facebook;
                    border-color: $color-facebook;
                }
            }

            &.instagram {
                &:hover {
                    background: $color-instagram;
                    box-shadow: 0 0 0 2px $color-instagram;
                    border-color: $color-instagram;
                }
            }

            &.x-twitter {
                &:hover {
                    background: $color-white;
                    box-shadow: 0 0 0 2px $color-white;
                    border-color: $color-white;
                    color: $color-xtwitter;

                    .vs-icon {
                        color: $color-xtwitter;
                    }
                }
            }

            &.youtube {
                &:hover {
                    background: $color-youtube;
                    box-shadow: 0 0 0 2px $color-youtube;
                    border-color: $color-youtube;
                }
            }

            &:focus {
                box-shadow: $shadow-button-focus-on-dark;
                background-color: $color-white;
                color: $color-gray-shade-1;
                outline: none;

                .vs-icon {
                    color: $color-gray-shade-1;
                }
            }

            &:hover {
                .vs-icon {
                    color: $color-white;
                }
            }

            .vs-icon {
                text-align: center;
                color: $color-white;
                line-height: $line-height-m;
                display: block;

                &.vs-icon--external-link {
                    display: none;
                }
            }
        }
    }
}
</style>
