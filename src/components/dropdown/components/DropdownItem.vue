<template>
    <BDropdownItem
        v-bind="$attrs"
        role="menuitem"
    >
        <slot />
    </BDropdownItem>
</template>

<script>
import { BDropdownItem } from 'bootstrap-vue-next';

/**
 * TODO: Document usage
 *
 * @displayName Dropdown Item
 */
export default {
    name: 'VsDropdownItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BDropdownItem,
    },
};
</script>
