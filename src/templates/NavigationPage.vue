<template>
    <VsPageHeader :menu-type="menuType">
        <template #breadcrumb>
            <slot name="breadcrumb" />
        </template>

        <template #heroSection>
            <slot name="heroSection" />
        </template>
    </VsPageHeader>

    <slot name="content" />
</template>

<script>
import VsPageHeader from './PageHeader.vue';

/**
 * @displayName Navigation Page
 */
export default {
    name: 'VsNavigationPage',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsPageHeader,
    },
    props: {
        /**
        * Choose which menu to display
        */
        menuType: {
            type: String,
            default: 'b2b',
            validator: (value) => value.match(/(b2b|b2c)/),
        },
    },
};
</script>
