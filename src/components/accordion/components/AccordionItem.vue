<template>
    <BCard
        no-body
        class="vs-accordion-item"
        :class="breakPoint ? 'vs-accordion-item__responsive' : ''"
        data-test="vs-accordion__item"
    >
        <BCardHeader
            class="vs-accordion-item__card-header"
            data-test="vs-accordion__item-header"
        >
            <!-- @slot Slot to contain Header for accordion item.
            Defaults to Accordion Toggle button. If component is responsive
            and has a breakPoint it will show title instead of button on larger screens. -->
            <VsAccordionToggle
                :aria-controls="controlId"
                :visible="show"
                :variant="variant"
                :class="toggleAccordionBtn"
                @toggle-panel="onButtonClick"
                ref="accordion-toggle"
            >
                <div
                    class="vs-accordion-item__card-colour-badge"
                    data-test="vs-accordion-item__card-colour-badge"
                    :style="`background-color: ${colourBadge}`"
                    v-if="colourBadge"
                />
                <!-- @slot Put the title here  -->
                <slot name="title" />

                <template #icon-open>
                    <!-- @slot Slot for the icon to show when accordion item is open  -->
                    <slot name="icon-open">
                        <VsIcon
                            icon="vs-icon-control-collapse"
                            size="sm"
                        />
                    </slot>
                </template>
                <template #icon-closed>
                    <!-- @slot Slot for the icon to show when accordion item is closed  -->
                    <slot name="icon-closed">
                        <VsIcon
                            icon="vs-icon-control-expand"
                            size="sm"
                        />
                    </slot>
                </template>
            </VsAccordionToggle>

            <VsHeading
                :level="headingLevel"
                heading-style="heading-xxs"
                class="d-none vs-accordion-item__title"
                :class="toggleResponsiveItem"
                data-test="vs-accordion__item-title"
            >
                <!-- @slot Put the title here  -->
                <slot name="title" />
            </VsHeading>
        </BCardHeader>

        <BCardBody
            v-show="show"
            :id="controlId"
            class="vs-accordion-item__panel"
            :class="toggleResponsiveItem"
            data-test="vs-accordion__item-body"
        >
            <!-- @slot The default slot is the content for the accordion  -->
            <slot />
        </BCardBody>
    </BCard>
</template>

<script>
import VsAccordionToggle from '@/components/accordion/components/AccordionToggle.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsHeading from '@/components/heading/Heading.vue';

import dataLayerMixin from '@/mixins/dataLayerMixin';

import { inject } from 'vue';
import { isNumber } from 'lodash';
import {
    BCard,
    BCardHeader,
    BCardBody,
} from 'bootstrap-vue-next';

/**
 * Accordion item for use within the Accordion component.
 * Contains a button to toggle the panel open or closed.
 *
 * @displayName Accordion Item
 */
export default {
    name: 'VsAccordionItem',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsAccordionToggle,
        BCard,
        VsIcon,
        BCardHeader,
        BCardBody,
        VsHeading,
    },
    mixins: [
        dataLayerMixin,
    ],
    /**
     * Injects breakPoint prop provided by Accordion
     */
    inject: {
        breakPoint: {
            default: 'lg',
        },
    },
    props: {
        /**
         * If a colour code or name is provided, a badge of that colour will
         * appear on the accordion item haeder.
         */
        colourBadge: {
            type: String,
            required: false,
            default: '',
        },
        /**
         * The aria control ID used for panel ID to match button aria control
         */
        controlId: {
            type: String,
            required: true,
        },
        /**
         * The correct heading level for page hierarchy, the
         * heading will be styled the same regardless of level provided
         * `1|2|3|4|5|6`
         */
        headingLevel: {
            type: Number,
            default: 2,
            validator: (value) => (isNumber(value) ? value > 0 && value < 7 : value.match(/(1|2|3|4|5|6)/)),
        },
        /**
         * If this is provided, the accordion expands above
         * the specified viewport `xs, sm, md, lg, xl, xxl`
         */
        itemBreakPoint: {
            type: String,
            default() {
                return inject('breakPoint', 'lg');
            },
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
         * Variant for which button to show in headers
         */
        variant: {
            type: String,
            default: 'subtle',
        },
    },
    data() {
        return {
            show: this.openByDefault,
        };
    },
    computed: {
        toggleAccordionBtn() {
            if (!this.itemBreakPoint) {
                return 'd-flex';
            }

            return this.itemBreakPoint === 'xs' ? 'd-none' : `d-${this.itemBreakPoint}-none`;
        },
        toggleResponsiveItem() {
            if (!this.itemBreakPoint) {
                return '';
            }

            return this.itemBreakPoint === 'xs' ? 'd-block' : `d-${this.itemBreakPoint}-block`;
        },
    },
    methods: {
        onButtonClick() {
            if (!this.show) {
                this.createDataLayerObject('accordionOpenEvent', {
                    accordion_text: this.$refs['accordion-toggle'].$el.innerText,
                });
            }

            this.show = !this.show;
        },
    },
};
</script>

<style lang="scss">
.vs-accordion-item.card {
    border: 0;

    &.vs-accordion-item__responsive {
        border-top: 1px solid $vs-color-border-primary;
    }

    .vs-accordion-item__card-header {
        padding: 0;
        border: 0;
        background-color: transparent;
    }

    .vs-accordion-toggle {
        text-align: left;
        font-weight: $vs-font-weight-strong;
        font-size: $font-size-6;
        padding: $vs-spacer-050 $vs-spacer-075;
        border: 0;
        margin-bottom: 1px;
        box-shadow: 0px -1px 0px 0px $vs-color-border-primary;

        &:focus {
            box-shadow: $vs-focus-shadow inset;
        }
    }

    .vs-accordion-item__title {
        padding: $vs-spacer-075;
        margin-bottom: 0;
    }

    .vs-accordion-item__card-colour-badge {
        width: $vs-spacer-075;
        height: $vs-spacer-075;
        border-radius: $vs-radius-tiny;
        display: inline-block;
        margin-right: $vs-spacer-100;
    }

    .vs-accordion-item__panel.card-body {
        padding: 0 0 $vs-spacer-050;
    }
}

@include no-js {
    .vs-accordion-item .vs-accordion-item__panel {
        display: block !important;
    }
}
</style>
