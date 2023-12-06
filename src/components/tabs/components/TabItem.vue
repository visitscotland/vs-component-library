<template>
    <div
        class="vs-tab__item"
        data-test="vs-tab__item"
    >
        <VsHeading
            level="3"
            class="vs-tab__item__heading"
        >
            {{ title }}
        </VsHeading>
        <!-- @slot default slot for tab item body content -->
        <slot />
    </div>
</template>

<script>

import VsHeading from '@components/heading/Heading.vue';
/**
 * Tab item for use within the Tabs component.
 *
 * @displayName Tab Item
 */
export default {
    name: 'BTab',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
    },
    props: {
        /**
         * Title of the tab button
         */
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
