<template>
    <div
        class="vs-itinerary-day"
    >
        <VsContainer>
            <VsRow>
                <VsCol>
                    <VsAccordionItem
                        :open-by-default="show"
                        :control-id="'itinerary-day-' + dayNumber"
                        variant="transparent"
                        item-break-point="lg"
                        class="vs-itinerary-day__list-item"
                    >
                        <template #title>
                            <!-- @slot Put the title here  -->
                            <span
                                class="vs-itinerary-day__header"
                            >
                                <span
                                    class="vs-itinerary-day__title
                                    vs-heading vs-heading--style-level-2 d-inline-block"
                                >
                                    {{ dayLabel }} {{ dayNumber }}
                                </span>

                                <span
                                    class="vs-itinerary-day__sub-heading"
                                >
                                    {{ dayTitle }}
                                </span>
                            </span>
                        </template>

                        <template #icon-open>
                            <!-- @slot Slot for the icon to show when accordion item is open  -->
                            <VsIcon
                                name="chevron"
                                orientation="down"
                                size="lg"
                                :padding="3"
                                class="vs-itinerary-day__toggle-button"
                            />
                        </template>
                        <template #icon-closed>
                            <!-- @slot Slot for the icon to show when accordion item is closed  -->
                            <VsIcon
                                name="chevron"
                                size="lg"
                                :padding="3"
                                class="vs-itinerary-day__toggle-button"
                            />
                        </template>
                        <div
                            :id="'dayPanel_' + dayNumber"
                            class="vs-itinerary-day__panel"
                        >
                            <div class="vs-itinerary-day__intro-content">
                                <slot name="day-transport" />
                                <slot name="day-introduction" />
                            </div>
                            <ul class="list-unstyled">
                                <slot name="stops" />
                            </ul>
                        </div>
                    </VsAccordionItem>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';
import VsIcon from '@/components/icon/Icon.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';

/**
 * Itinerary Day list items.
 *
 * @displayName Itinerary Day
 */

export default {
    name: 'VsItineraryDay',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsIcon,
        VsAccordionItem,
    },
    props: {
        /**
         * Logic to collapse certain Day list items on mobile by default
         * (e.g. after Day 1 and 2, collapse the days on mobile)
         */
        defaultShow: {
            type: Boolean,
            default: true,
        },
        /**
         * Label used for the word 'Day'
         */
        dayLabel: {
            type: String,
            required: true,
        },
        /**
         * Number of the day in the component
         */
        dayNumber: {
            type: String,
            required: true,
        },
        /**
         * Title of the day in the component
         */
        dayTitle: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            show: this.defaultShow,
        };
    },
};
</script>

<style lang="scss">
.vs-itinerary-day{
    border-top: 1px solid $vs-color-border-bold;
    margin-top: $spacer-9;

    @include media-breakpoint-down(sm) {
        max-width: initial;
        width: calc(100% + #{$spacer-4});
        margin-left: -#{$spacer-2};
        padding: $spacer-0 $spacer-2;
    }

    &__list-item.card.vs-accordion-item {
        width: calc(100% + #{$spacer-4});
        margin-left: -#{$spacer-2};
        padding: 0 $spacer-3 0;
        border-top: 0;

        @include media-breakpoint-up(md) {
            width: calc(100% + #{$spacer-6});
            margin-left: -#{$spacer-3};
            padding: $spacer-4 $spacer-4 0;
        }

        .vs-accordion-toggle {
            box-shadow: none;
            padding: 0;

            &:focus {
                box-shadow: $vs-box-shadow-focus;
            }

            .vs-accordion-toggle__icon {
                align-self: auto;
                margin-top: $spacer-6;

                .vs-icon {
                    color: $vs-color-icon;
                }

                @include media-breakpoint-up(lg) {
                    align-self: center;
                    margin-top: 0;
                }
            }
        }
    }

    &__header{
        display: block;
        text-align: left;
        margin: $spacer-6 0;

        .vs-itinerary-day__title  {
            color: $vs-color-text-tertiary;
        }

        .vs-itinerary-day__sub-heading{
            letter-spacing: .15rem;
            font-size: $font-size-8;
            font-family: $headings-font-family-thin;
            font-weight: $font-weight-normal;
            display: block;
        }

        @include media-breakpoint-up(lg) {
            text-align: center;
            margin: 0 0 $spacer-6;
        }
    }

    &__intro-content {
        margin-bottom: $spacer-8;
    }

    &__panel .list-inline-item:not(:last-child) {
        @include media-breakpoint-down(sm) {
            margin-right: $spacer-1;
        }
    }
}
</style>
