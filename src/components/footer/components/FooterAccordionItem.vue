<template>
    <VsAccordionItem
        class="vs-footer-accordion-item mb-md-6"
        data-test="vs-footer-accordion-item"
        :data-unique-id="getUniqueId"
        :control-id="controlId"
        :item-break-point="itemBreakPoint"
        :open-by-default="openByDefault"
        :variant="variant"
    >
        <template #title>
            <!-- @slot Put the title here  -->
            {{ title }}
        </template>

        <template #icon-open>
            <!-- @slot Slot for the icon to show when accordion item is open  -->
            <slot name="icon-open" />
        </template>
        <template #icon-closed>
            <!-- @slot Slot for the icon to show when accordion item is closed  -->
            <slot name="icon-closed" />
        </template>

        <!-- @slot The default slot is the content for the accordion  -->
        <slot />
    </VsAccordionItem>
</template>

<script>
import VsAccordionItem from '@components/accordion/components/AccordionItem.vue';

/**
 * The FooterAccordionItem is an accordion item used inside the FooterNavList.
 * It's a wrapper for FooterNavListItems in the footer.
 *
 * @displayName Footer Accordion Item
 */

export default {
    name: 'VsFooterAccordionItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsAccordionItem,
    },
    props: {
        /**
         * The aria control ID used for panel ID to match button aria control
         */
        controlId: {
            type: String,
            required: true,
        },
        /**
         * If this is provided, the accordion expands above
         * the specified viewport `xs, sm, md, lg, xl, xxl`
         */
        itemBreakPoint: {
            type: String,
            default: (props) => props.breakPoint,
            validator: (value) => value.match(/(xs|sm|md|lg|xl|xxl)/),
        },
        /**
         * Choose to show accordion open or closed by default
         */
        openByDefault: {
            type: Boolean,
            default: false,
        },
        /**
         * The title for the submenu and alias for the testing data-unique-id
         */
        title: {
            type: String,
            required: true,
        },
        /**
         * Variant for which button to show in headers
         */
        variant: {
            type: String,
            default: 'primary',
        },
    },
    computed: {
        getUniqueId() {
            let transformedTitle = this.title.toLowerCase();
            transformedTitle = transformedTitle.replace(/\s+/g, '-');

            return `vs-footer-${transformedTitle}`;
        },
    },
};
</script>

<style lang="scss">
.vs-footer-accordion-item.vs-accordion-item.card {
    border-bottom: 1px solid $vs-color-border-inverse;
    border-top: 0;

      .vs-accordion-item__card-header{
        background-color: $vs-color-background-bold;
    }

    .vs-accordion-item__title.vs-heading {
        margin: $spacer-3 0;
        background-color: $vs-color-background-bold;
        color: $vs-color-text-inverse;
        padding: 0;
    }

     .vs-accordion-item__panel.card-body {
        background-color: $vs-color-background-bold;
        color: $vs-color-text-inverse;
        border-top: 1px solid $vs-color-border-inverse;
    }

    .vs-accordion-toggle {
        text-transform: none !important;
        letter-spacing: initial;
        padding: $spacer-3;
        font-size: $font-size-4;
        line-height: $line-height-xs;
        font-weight: $font-weight-semi-bold;
        text-align: left;

        @include vs-button-variant(
            $vs-color-text-inverse, $vs-color-background-bold, $vs-color-background-bold,
            $vs-color-text-inverse, $vs-color-background-bold, $vs-color-background-bold,
            $vs-color-text-inverse, $vs-color-background-bold, $vs-color-background-bold,
            $vs-color-text-inverse, $vs-color-background-bold, $vs-color-background-bold,
        );

        &:hover{
            text-decoration: underline;
        }

        &:focus {
            box-shadow: $vs-box-shadow-focus-on-dark inset;
        }

         .icon.icon-xs {
            right: $spacer-3;
        }
    }

    @include media-breakpoint-up(sm) {
        .btn.vs-accordion-toggle {
            padding: $spacer-3 $spacer-6;
        }
    }

    @include media-breakpoint-up(md) {
        border: 0;
        border-left: 1px solid $vs-color-border-inverse;
        padding: 0 $spacer-3;
        background-color: $vs-color-background-bold;

        .vs-accordion-item__title {
            margin-top: $spacer-1;
        }

        .vs-accordion-item__panel.card-body {
            padding: 0;
            background-color: $vs-color-background-bold;
            border-top: 0;
        }
    }
}
</style>
