<template>
    <BBreadcrumbItem
        class="vs-breadcrumb-item"
        :active="active"
        :aria-current="ariaCurrent"
        :href="href"
        :text="text"
        v-bind="$attrs"
    />
</template>

<script>
import { BBreadcrumbItem } from 'bootstrap-vue-next';

/**
 * Breadcrumbs indicate where a user is in the website’s
 * structure and lets them easily navigate between levels.
 *
 * @displayName Breadcrumb Item
 */

export default {
    name: 'VsBreadcrumbItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BBreadcrumbItem,
    },
    props: {
        /**
         * The breadcrumb anchor link href.
         */
        href: {
            type: String,
            default: '',
        },
        /**
         * The active breadcrumb item (last item). By default, BootstrapVue renders as a span.
         */
        active: {
            type: Boolean,
            default: false,
        },
        /**
         * The breadcrumb aria-current attribute. Only visible when the item is `active`.
         */
        ariaCurrent: {
            type: String,
            default: 'page',
        },
        /**
         * The breadcrumb text.
         */
        text: {
            type: String,
            default: '',
            required: true,
        },
    },
};
</script>

<style lang="scss">
.vs-breadcrumb-item {
    color: $vs-color-text-secondary;
    font-size: $font-size-4;
    white-space: nowrap;
    overflow: hidden;
    padding: 3px; // Prevents breadcrumb link focus state from being clipped

    &:last-child {
        color: $vs-color-text-secondary;
    }

    a {
        color: $vs-color-text-secondary;

        &:focus {
            @extend %outline-link-focus;
        }
    }

    a, span {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    @include media-breakpoint-down(lg) {
        font-size: $font-size-2;
    }

    @include media-breakpoint-down(md) {
        display: none;

        &:last-child,
        &:nth-last-child(2) {
            display: block;
            max-width: 75%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &:nth-last-child(2) {
            padding-left: 0;

            &::before {
                content: "";
                padding: 0;
            }
        }
    }
}

</style>
