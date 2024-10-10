<template>
    <BTab
        class="vs-tab__item"
        data-test="vs-tab__item"
        title-link-class="vs-tab-link"
        :title="title"
    >
        <VsHeading
            level="3"
            headingStyle="heading-xxs"
            class="vs-tab__item__heading"
        >
            {{ title }}
        </VsHeading>

        <!-- @slot default slot for tab item body content -->
        <slot />
    </BTab>
</template>

<script>

import VsHeading from '@/components/heading/Heading.vue';
import { BTab } from 'bootstrap-vue-next';
/**
 * Tab item for use within the Tabs component.
 *
 * @displayName Tab Item
 */
export default {
    name: 'VsTabItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        BTab,
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
<style lang="scss">

    .tab-pane {
        background-color: $vs-color-background-inverse;
        color: $vs-color-text;
        text-align: left;
        border: 1px solid $vs-color-border;
        border-top: 0;

        .vs-heading{
            display: none;
        }
    }

@include no-js {
    .tab-pane {
        position: relative;
        display: block!important;
        margin-bottom: $spacer-300;
        border: 0;

        .vs-heading {
            display: block;
            text-align: center;
        }
    }
}
</style>
