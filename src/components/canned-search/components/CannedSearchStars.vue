<template>
    <div
        class="vs-canned-search-stars"
        data-test="vs-canned-search-stars"
    >
        <div
            v-if="min && max && min !== max"
        >
            <span class="vs-canned-search-stars__star">
                &#9733;
            </span>
            {{ min }}-{{ max }}
        </div>
        <div
            v-else
        >
            <span
                v-for="index in min"
                :key="index"
                class="vs-canned-search-stars__star"
            >
                &#9733;
            </span>
        </div>
    </div>
</template>

<script>

/**
* Component that displays a star rating for certain kinds of product card within
* canned search
*
* @displayName Canned Search Stars
*/

export default {
    name: 'VsCannedSearchStars',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
        * The minimum number of stars for parts of the product, if the
        * same as the max a number of stars will be displayed, if
        * different a range will be displayed
        */
        min: {
            type: Number,
            default: null,
        },
        /**
        * The maximum number of stars for parts of the product
        */
        max: {
            type: Number,
            default: null,
        },
    },
};

</script>

<style lang="scss">
    .vs-canned-search-stars {
        line-height: 1;
        margin-bottom: $spacer-075;
    }

    .vs-canned-search-stars__star {
        color: $vs-color-icon-highlight;
    }
</style>
