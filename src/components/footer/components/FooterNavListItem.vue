<template>
    <li
        class="vs-footer-nav-list-item"
        data-test="vs-footer-nav-list-item"
        role="menuitem"
    >
        <VsLink
            :href="href"
            :type="type"
            variant="on-dark"
            data-test="vs-footer-nav-list-item__link"
        >
            {{ linkText }}
        </VsLink>
    </li>
</template>

<script>
import VsLink from '@/components/link/Link.vue';

/**
 * The FooterNavListItems is used inside the FooterNavList to
 * show an indivudal footer link.
 *
 * @displayName Footer Nav List Item
 */

export default {
    name: 'VsFooterNavListItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsLink,
    },
    props: {
        /**
         * The URL the link will point to
         */
        href: {
            type: String,
            default: null,
        },
        /**
        * Option to create link type which defines icon and whether it opens in a new tab
        * `external, internal, download`
        */
        type: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|external|internal|download)/),
        },
        /**
         * Text to show for the link
         */
        linkText: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.vs-footer-nav-list-item {
    list-style: none;
    font-size: $font-size-3;
    padding: $spacer-075 $spacer-200;

    .vs-link {
        &--variant-on-dark {
            color: $vs-color-text-inverse;
            text-decoration: none;
        }

        &:hover {
            text-decoration: underline;
        }

        &:focus {
            @extend %outline-link-focus-dark;
        }
    }

    @include media-breakpoint-up(md) {
        padding: $spacer-050 0;

        &:last-child {
            padding-bottom: $spacer-025;
        }
    }
}
</style>
