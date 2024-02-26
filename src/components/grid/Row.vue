<template>
    <div
        class="row"
        v-bind="$attrs"
    >
        <!-- @slot Default slot for row content -->
        <slot />
    </div>
</template>

<script>
/**
 * Rows are used to wrap column elements to ensure consistent alignment.
 *
 * @displayName Row
 */

export default {
    name: 'VsRow',
    status: 'prototype',
    release: '0.0.1',
};
</script>

<style lang="scss">
// Setting gutter width for XS
@media (max-width: map-get($grid-breakpoints, sm)){
    .row:not(.g-0) {
        margin-right: -4px;
        margin-left: -4px;
    }
    .row:not(.g-0) > .col,
    .row:not(.g-0) > [class*="col-"] {
        padding-right: 4px;
        padding-left: 4px;
    }
}
</style>
