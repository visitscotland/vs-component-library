<template>
    <div
        class="vs-canned-search-cuisines"
        data-test="vs-canned-search-cuisines"
    >
        <span
            class="vs-canned-search-cuisines__cuisine"
            v-for="(cuisine, index) in cuisines"
            :key="index"
        >
            {{ cuisine.name }}
        </span>
    </div>
</template>

<script>

/**
* Component that displays a list of cuisines for a product
* card in canned search
*
* @displayName Canned Search Cuisines
*/

export default {
    name: 'VsCannedSearchCuisines',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
        * A list of cuisines that describe the product, should contain
        * objects, each of which has a `name` prop
        */
        cuisines: {
            type: Array,
            default: null,
        },
    },
};

</script>

<style lang="scss">
    .vs-canned-search-cuisines {
        font-size: $font-size-4;
        font-weight: $vs-font-weight-medium;
        margin-bottom: $vs-spacer-025;

        &__cuisine {
            display: block;
        }
    }
</style>
