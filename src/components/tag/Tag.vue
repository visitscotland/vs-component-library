<template>
    <VsLink
        class="vs-tag me-050 mb-100"
        data-test="vs-tag"
        :href="href"
    >
        <!-- @slot Holds the tag text content-->
        <slot />
    </VsLink>
</template>

<script>
import VsLink from '@/components/link/Link.vue';

/**
 * A tag link is used to label items to
 * help categorize them for quick navigation.
 *
 * @displayName Tag
 */
export default {
    name: 'VsTag',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsLink,
    },
    props: {
        /**
         * The URL the tag will link to
         */
        href: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
    .vs-tag.vs-link {
        display: inline-block;
        border: $vs-border-width-md solid $vs-color-border-highlight;
        border-radius: $vs-radius-circular;
        transition: background $duration-base;
        text-decoration: none;
        padding: $vs-spacer-025 $vs-spacer-075;
        font-size: $font-size-4;

        @include vs-button-variant(
            $vs-color-text-highlight, $vs-color-background-inverse, $vs-color-border-highlight,
            $vs-color-text-inverse, $vs-color-background-accent-heather-80, $vs-color-background-accent-heather-80,
            $vs-color-text-inverse, $vs-color-background-highlight, $vs-color-border-highlight,
        );

        &:focus {
            outline: 0px;
            background-color: $vs-color-background-highlight;
            color: $vs-color-text-inverse;
            border-color: $vs-color-border-highlight;
            box-shadow: $vs-color-background-inverse 0px 0px 0px 2px, $vs-color-background-highlight 0px 0px 0px 4px;
        }
    }
</style>
