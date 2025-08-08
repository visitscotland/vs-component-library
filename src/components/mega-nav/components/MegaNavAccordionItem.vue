<template>
    <VsAccordionItem
        class="vs-mega-nav-accordion-item"
        data-test="vs-mega-nav-accordion-item"
        :class="accordionItemClasses"
        :data-unique-id="getUniqueId"
        :control-id="`vs-mega-nav-accordion-item-${getUniqueId}-${controlId}`"
    >
        <template #title>
            {{ title }}
        </template>

        <VsLink
            v-if="ctaLink && ctaText"
            class="vs-mega-nav-accordion-item__cta-link"
            data-test="vs-mega-nav-accordion-item__cta-link"
            :href="ctaLink"
        >
            {{ ctaText }}
        </VsLink>

        <!-- @slot The default slot is the content for the accordion  -->
        <slot />
    </VsAccordionItem>
</template>

<script>
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsLink from '@/components/link/Link.vue';

/**
 *  This component is used in the mobile menu for groups of links
 *
 * @displayName MegaNav Accordion Item
 */
export default {
    name: 'VsMegaNavAccordionItem',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsAccordionItem,
        VsLink,
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
         * The title for the submenu and alias for the testing data-unique-id
         */
        title: {
            type: String,
            required: true,
        },
        /**
         * Level of items in the nav
         * `1, 2`
         */
        level: {
            type: String,
            required: true,
            validator: (value) => value.match(/(1|2)/),
        },
        /**
         * The CTA link used at the top of the accordion dropdown
         */
        ctaLink: {
            type: String,
            default: '',
        },
        /**
         * The CTA text used for the CTA link at the top of the accordion dropdown
         */
        ctaText: {
            type: String,
            default: '',
        },
    },
    computed: {
        getUniqueId() {
            let transformedTitle = this.title.toLowerCase();
            transformedTitle = transformedTitle.replace(/\s+/g, '-');

            return `vs-mega-nav-${transformedTitle}`;
        },
        accordionItemClasses() {
            return [
                `vs-mega-nav-accordion-item--level-${this.level}`,
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-mega-nav-accordion-item {
    &__cta-link{
        text-decoration: none;
        transition: $duration-base color;
        font-size: $font-size-5;
        display: block;
        padding: $vs-spacer-075 $vs-spacer-200;

        &:hover{
            color: $vs-color-text-primary;
        }

        &:focus{
            outline-offset: -$vs-border-width-md;
        }
    }

    &.vs-accordion-item.card {
        border-top: 0;

        .vs-accordion-item__panel.card-body{
            padding: 0;
        }
    }

    &--level-1, &--level-2{
        > .vs-accordion-item__card-header {
            .vs-accordion-toggle{
                &.vs-accordion-toggle--open, &:hover {
                    &::after{
                        content: "";
                        position: absolute;
                        display: block;
                        top: 0;
                        left: 0;
                        width: 12px;
                        height: 100%;
                        background: $vs-color-interaction-cta-primary;
                    }
                }

                &.btn {
                    background-color: $vs-color-background-inverse;
                    color: $vs-color-text-primary;
                    text-align: left;
                    font-weight: $vs-font-weight-regular;
                    transition: none;
                    border: 0;

                    &:hover {
                        color: $vs-color-icon-cta-on-light;
                    }

                    .vs-icon{
                        color: $vs-color-icon-primary;
                    }

                    &:active, &:active:focus {
                        background-color: $vs-color-interaction-cta-subtle-hover;
                        color: $vs-color-text-primary;

                        .vs-icon{
                            color: $vs-color-icon-primary;
                        }
                    }
                }
            }
        }
    }

    &--level-1{
        > .vs-accordion-item__card-header{
            .vs-accordion-toggle.btn {
                font-size: $font-size-6;
                padding-left: $vs-spacer-125;
                padding-right: $vs-spacer-125;

                &:active, &:active:focus, &.vs-accordion-toggle--open {
                    background-color: $vs-color-interaction-cta-subtle-hover;
                }
            }
        }

        &:first-of-type > .vs-accordion-item__card-header {
            .vs-accordion-toggle.btn {
                border-top: $vs-border-width-sm solid $vs-color-border-primary;
            }
        }
    }

    &--level-2{
        > .vs-accordion-item__card-header{
            .vs-accordion-toggle.btn {
                font-size: $font-size-5;
                padding-left: $vs-spacer-200;
                padding-right: $vs-spacer-125;
            }
        }
    }
}

</style>
