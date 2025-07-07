<template>
    <VsHeading
        v-if="subHeading"
        level="4"
        heading-style="heading-xxs"
        class="vs-canned-search-sub-heading"
        :class="lineLimit ? 'vs-canned-search-sub-heading--lines-' + lineLimit : ''"
        data-test="vs-canned-search-sub-heading"
    >
        {{ subHeading }}
    </VsHeading>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';

/**
* Shows a formatted sub-heading for a canned search product card,
* usually contains an address or list of themes
*
* @displayName Canned Search Sub Heading
*/

export default {
    name: 'VsCannedSearchSubHeading',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
    },
    props: {
        /**
        * The string to display
        */
        subHeading: {
            type: String,
            default: '',
        },
        /**
         * The number of lines of text to limit the subHeading to, if
         * this is un-set it will not limit
         *
         * 1, 2
         */
        lineLimit: {
            type: Number,
            default: null,
            validator: (value) => [1, 2].includes(value),
        },
    },
};

</script>

<style lang="scss">
    h4.vs-canned-search-sub-heading {
        color: $vs-color-text-tertiary;
        margin: $spacer-0;
        margin-bottom: $spacer-075;

        @include media-breakpoint-up(md) {
            font-size: $vs-font-size-heading-xl;
        }

        &--lines-1 {
            @include truncate-text(1);
        }

        &--lines-2 {
            @include truncate-text(2);
        }
    }
</style>
