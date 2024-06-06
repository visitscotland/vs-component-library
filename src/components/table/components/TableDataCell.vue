<template>
    <BTd
        data-test="vs-table-data-cell"
        :stacked-heading="stackedHeading"
        v-bind="$attrs"
        :scope="null"
    >
        <!-- Default slot for table data cell content -->
        <slot />
    </BTd>
</template>

<script>
import { BTd } from 'bootstrap-vue-next';

/**
 *
 * @displayName Table Data Cell
 */
export default {
    name: 'VsTableDataCell',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BTd,
    },
    props: {
        /**
         * The heading to read when the table is in stacked mode
         */
        stackedHeading: {
            type: String,
            default: null,
        },
    },
};
</script>

<style lang="scss">
    .table td {
        border-top: 1px solid $vs-color-border;
        border-bottom: none;
    }
</style>
