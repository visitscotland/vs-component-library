<template>
    <VsButton
        :animate="false"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-haspopup="true"
        @click="$emit('toggle-panel')"
        class="vs-accordion-toggle clearfix"
        :class="{ 'vs-accordion-toggle--open': visible }"
        :variant="variant"
        :rounded="false"
    >
        <!-- @slot Default slot contains text for the button -->
        <span class="vs-accordion-toggle__text">
            <slot />
        </span>
        <span class="vs-accordion-toggle__icon">
            <!-- @slot Put the icon to be used when panel is open  -->
            <slot
                v-if="visible"
                name="icon-open"
            />
            <!-- @slot Put the icon to be used when panel is closed  -->
            <slot
                v-else
                name="icon-closed"
            />
        </span>
    </VsButton>
</template>

<script>
import VsButton from '@/components/button/Button.vue';

/**
 * Accordion toggle button used with AccordionItem
 * It emits an event to the parent to toggle the Accordion panel.
 *
 * @displayName Accordion Toggle
 */
export default {
    name: 'VsAccordionToggle',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    props: {
        /**
         * Variant for which button to show in headers
         */
        variant: {
            type: String,
            default: 'primary',
        },
        /**
         * Choose to show accordion open or closed by default
         */
        visible: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['toggle-panel'],
};
</script>

<style lang="scss">
.btn.vs-button.vs-accordion-toggle {
    display: flex;
    width: 100%;
    color: $vs-color-text-primary;
    text-align: left;
    font-weight: $vs-font-weight-medium;
    font-size: $vs-font-size-heading-xxs;
    padding: $vs-spacer-100 $vs-spacer-075;
    line-height: $vs-line-height-heading;
    border: 0;
    margin-bottom: 1px;
    border-radius: $vs-radius-small;

    &:focus {
        box-shadow: $vs-focus-shadow inset;
    }

    &:hover,
    &:active {
        .vs-accordion-toggle__icon,
        .vs-accordion-toggle__text {
            .vs-icon {
                color: $vs-color-icon-cta-on-light;
            }
        }
    }

    &:active {
        .vs-accordion-toggle__icon,
        .vs-accordion-toggle__text {
            .vs-icon {
                color: $vs-color-icon-inverse;
            }
        }
    }

    .vs-accordion-toggle__icon,
    .vs-accordion-toggle__text {
        .vs-icon {
            color: $vs-color-icon-primary;
        }
    }

    .vs-button__text {
        display: flex;
        width: 100%;
    }

    .vs-accordion-toggle__text {
        flex-grow: 1;
    }

    .vs-accordion-toggle__icon {
        align-self: center;
    }
}

@include no-js {
    .btn.vs-accordion-toggle {
        .vs-accordion-toggle__icon {
            display: none;
        }
    }
}
</style>
