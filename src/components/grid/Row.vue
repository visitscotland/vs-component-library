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
