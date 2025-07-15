<template>
    <li
        class="vs-footer-social-item"
        data-test="vs-footer-social-item"
    >
        <VsLink
            data-test="vs-footer-social-item__link"
            :href="href"
            type="external"
            :aria-label="icon"
            data-layer-value="socialMediaExternalLinkDataEvent"
        >
            <VsIcon
                :icon="icon"
                variant="inverse"
                size="sm"
            />
        </VsLink>
    </li>
</template>

<script>

import VsLink from '@/components/link/Link.vue';
import VsIcon from '@/components/icon/Icon.vue';
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
         */
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.vs-list.vs-list--unstyled  {
    .vs-footer-social-item {
        display: inline-block;
        margin-right: $spacer-075;
        margin-bottom: $spacer-075;

        .vs-link.vs-link--variant-primary {
            display: block;
            height: 32px;
            width: 32px;
            transition: color $duration-base;
            text-decoration: none;

            .vs-icon {
                text-align: center;
                line-height: 1.6;
                display: block;

                &.fa-square-arrow-up-right {
                    display: none;
                }
            }

            &:hover {
                .vs-icon {
                    color: $vs-color-icon-accent-saltire-30;
                }
            }

            &:focus {
                @extend %outline-link-focus-dark;
            }
        }
    }
}
</style>
