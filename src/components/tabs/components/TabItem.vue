<template>
    <BTab
        class="vs-tab__item"
        data-test="vs-tab__item"
        title-link-class="vs-tab-link"
    >
        <template #title>
            <VsHeading
                level="3"
                headingStyle="heading-s"
                class="vs-tab__item__heading"
            >
                {{ title }}
            </VsHeading>
        </template>

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
        background-color: $vs-color-background-neutral;
        color: $vs-color-text;
        font-weight: $font-weight-bold;
        border-width: 1px;
        border-color: $vs-color-background-neutral;
        padding: $spacer-4 $spacer-3;
        font-size: $font-size-6;
        transition: $duration-base all;
        transition: all 200ms ease;
        transition-property: background-color, color;

        .vs-heading {
            margin: 0;
        }

        &:hover:not(.active) {
            border-color: $vs-color-background-neutral;
            background-color: $vs-color-background-hover;
            color: $vs-color-text-inverse;
        }

        &.active {
            position: relative;
            background-color: $vs-color-background-inverse;
            padding: $spacer-5 $spacer-3;

            .vs-heading {
                @include heading-style(heading-m);
                margin: 0;
            }

            @include media-breakpoint-up(sm) {
                padding: $spacer-7 $spacer-5;
            }
        }

        &.disabled {
            color: $vs-color-text-disabled;
            background-color: $vs-color-background-disabled;
            border-color: $vs-color-background-disabled;
        }

        @include media-breakpoint-up(sm) {
            padding: $spacer-5 $spacer-4;
            font-size: $font-size-7;
        }

        &:focus-visible{
            box-shadow: $vs-box-shadow-focus;
            outline: none;
        }
    }
</style>
