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
                variant="inverse"
                size="sm"
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
            display: block;
            height: 32px;
            width: 32px;
            transition: color $duration-base;
            text-decoration: none;

            .vs-icon {
                text-align: center;
                line-height: $line-height-m;
                display: block;

                &.vs-icon--external-link {
                    display: none;
                }
            }

            &:hover {
                .vs-icon {
                    color: $vs-color-icon-accent-etive;
                }
            }

            &:focus {
                @extend %outline-link-focus-dark;
            }
        }
    }
}
</style>
