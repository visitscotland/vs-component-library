<template>
    <BCol
        v-bind="$attrs"
    >
        <!-- @slot Default slot for column content -->
        <slot />
    </BCol>
</template>

<script>
import { BCol } from 'bootstrap-vue-next';

/**
 * Column components are used to organise, align and space sibling blocks of content within row
 * elements.
 *
 * @displayName Col
 */

export default {
    name: 'VsCol',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BCol,
    },
    /**
     * To reduce page weight we want to load images at an appropriate size based on their
     * appearance on the screen, as well as the size of that screen. By providing this
     * information about the grid layout of the page, any VsImg component within this Col in the
     * page can estimate its maximum size. See the `imgSizesMixin` for more details.
     */
    provide() {
        return {
            cols: this.$attrs.cols,
            sm: this.$attrs.sm,
            md: this.$attrs.md,
            lg: this.$attrs.lg,
            xl: this.$attrs.xl,
        };
    },
};
</script>
