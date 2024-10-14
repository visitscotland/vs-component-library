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
        border: 2px solid $vs-color-border-tertiary;
        border-radius: $border-radius-pill;
        transition: background $duration-base;
        text-decoration: none;
        padding: $spacer-025 $spacer-075;
        font-size: $font-size-4;

        @include vs-button-variant(
            $vs-color-text-tertiary, $vs-color-background-inverse, $vs-color-border-tertiary,
            $vs-color-text-inverse, $vs-color-background-hover, $vs-color-background-hover,
            $vs-color-text-inverse, $vs-color-background-tertiary, $vs-color-background-tertiary,
        );

        &:focus {
            outline: 0px;
            box-shadow: $vs-color-background-inverse 0px 0px 0px 2px inset, $vs-color-background-tertiary 0px 0px 0px 3px inset;
        }
    }
</style>
