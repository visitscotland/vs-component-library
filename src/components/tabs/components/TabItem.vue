<template>
    <BTab
        class="vs-tab__item"
        data-test="vs-tab__item"
        title-link-class="vs-tab-link vs-heading"
        :title="title"
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
    .vs-tab-link{
        width: 100%;
        background-color: $vs-color-interaction-cta-subtle-hover;
        color: $vs-color-text-primary;
        border-width: 1px;
        border-color: $vs-color-border-primary;
        padding: $spacer-100 $spacer-075;
        transition: $duration-base all;
        transition: all 200ms ease;
        transition-property: background-color, color;
        @include heading-style(heading-xxs, false);

        @include media-breakpoint-up(sm) {
            padding: $spacer-125 $spacer-100;
            @include heading-style(heading-s, false);
        }

        &:hover:not(.active) {
            border-color: $vs-color-interaction-cta-hover;
            background-color: $vs-color-interaction-cta-hover;
            color: $vs-color-text-inverse;
        }

        &.active {
            position: relative;
            background-color: $vs-color-background-inverse;
            padding: $spacer-125 $spacer-075;
            @include heading-style(heading-xs, false);

            @include media-breakpoint-up(sm) {
                padding: $spacer-175 $spacer-125;
                @include heading-style(heading-m, false);
            }
        }

        &.disabled {
            color: $vs-color-text-disabled;
            background-color: $vs-color-interaction-cta-disabled;
            border-color: $vs-color-interaction-cta-disabled;
        }

        &:focus-visible{
            box-shadow: $vs-box-shadow-focus;
            outline: none;
        }
    }
</style>
