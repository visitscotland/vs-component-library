<template>
    <VsList
        unstyled
        class="vs-mega-nav-top-menu"
        data-test="vs-mega-nav-top-menu"
        role="menubar"
    >
        <!-- @slot Default slot for top menu items -->
        <slot />
    </VsList>
</template>

<script>
import VsList from '@/components/list/List.vue';

/**
 *  Mega nav top level menu list with a slot for top level menu items
 *
 * @displayName MegaNav Top Menu
 */
export default {
    name: 'VsMegaNavTopMenu',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsList,
    },
    inject: ['isStatic'],
};
</script>

<style lang="scss">

.vs-mega-nav-top-menu {
    &.vs-list--unstyled{
        width: 100%;
        display: flex;
        margin-top: $spacer-025;
    }
}

 @include no-js {
    .vs-mega-nav-top-menu {
        &.vs-list--unstyled{
            display: block;
        }
    }
}

</style>
