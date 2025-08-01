<template>
    <BTfoot
        v-bind="$attrs"
        role="rowgroup"
    >
        <!-- Default slot for table footer content -->
        <slot />
    </BTfoot>
</template>

<script>
import { BTfoot } from 'bootstrap-vue-next';

/**
 *
 * @displayName Table Footer
 */
export default {
    name: 'VsTableFooter',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BTfoot,
    },
};
</script>

<style lang="scss">
.vs-table{
    .table-sm {
        tfoot{
            td{
                font-size: $font-size-3;
                color: $vs-color-text-secondary;
                padding: $vs-spacer-050 $vs-spacer-025;
            }
        }
    }
}

</style>
