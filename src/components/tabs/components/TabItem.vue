<template>
    <BTab
        class="vs-tab__item"
        data-test="vs-tab__item"
        :title-link-class="noContainer ? 'vs-tab-link--no-container vs-heading' : 'vs-tab-link vs-heading'"
        :title="title"
        @click="trackClick"
    >
        <VsHeading
            level="3"
            heading-style="heading-xxs"
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
import dataLayerMixin from '@/mixins/dataLayerMixin';
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
    mixins: [dataLayerMixin],
    /**
     * Injects noContainer prop from Tab parent.
     */
    inject: ['noContainer'],
    props: {
        /**
         * Title of the tab button
         */
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        trackClick(event) {
            this.createDataLayerObject('tabClickEvent', event, null);
        },
    },
};
</script>
<style lang="scss">
    .vs-tab-link {
        width: 100%;
        background-color: $vs-color-interaction-cta-subtle-hover;
        color: $vs-color-text-primary;
        border-width: 1px;
        border-color: $vs-color-border-primary;
        padding: $vs-spacer-100 $vs-spacer-075;
        transition: $duration-base all;
        transition: all 200ms ease;
        transition-property: background-color, color;
        @include heading-style(heading-xxs, false);

        @include media-breakpoint-up(md) {
            padding: $vs-spacer-125 $vs-spacer-100;
        }

        &:hover:not(.active) {
            border-color: $vs-color-interaction-cta-hover;
            background-color: $vs-color-interaction-cta-hover;
            color: $vs-color-text-inverse;
        }

        &.active {
            position: relative;
            background-color: $vs-color-background-inverse;
            padding: $vs-spacer-125 $vs-spacer-075;
            @include heading-style(heading-xs, false);

            @include media-breakpoint-up(md) {
                padding: $vs-spacer-175 $vs-spacer-125;
            }
        }

        &.disabled {
            color: $vs-color-text-disabled;
            background-color: $vs-color-interaction-cta-disabled;
            border-color: $vs-color-interaction-cta-disabled;
        }

        &:focus-visible {
            box-shadow: $vs-box-shadow-focus;
            outline: none;
        }
    }

    .vs-tab-link--no-container {
        flex-grow: 1;
        background-color: $vs-color-interaction-cta-subtle-hover;
        color: $vs-color-text-primary;
        border-width: 1px;
        border-color: $vs-color-border-primary;
        border-radius: $border-radius-lg $border-radius-lg $vs-spacer-0 $vs-spacer-0;
        text-wrap: pretty;
        padding: $vs-spacer-075 $vs-spacer-075;
        transition: $duration-base all;
        transition: all 200ms ease;
        transition-property: background-color, color;
        @include heading-style(heading-xxs, false);

        @include media-breakpoint-up(md) {
            padding: $vs-spacer-075 $vs-spacer-125;
        }

        &:hover:not(.active) {
            border-color: $vs-color-interaction-cta-hover;
            background-color: $vs-color-interaction-cta-hover;
            color: $vs-color-text-inverse;
        }

        &.active {
            position: relative;
            background-color: $vs-color-background-inverse;

            @include media-breakpoint-up(md) {
                padding: $vs-spacer-100 $vs-spacer-125;
            }
        }

        &.disabled {
            color: $vs-color-text-disabled;
            background-color: $vs-color-interaction-cta-disabled;
            border-color: $vs-color-interaction-cta-disabled;
        }

        &:focus-visible {
            box-shadow: $vs-box-shadow-focus;
            outline: none;
        }
    }
</style>
