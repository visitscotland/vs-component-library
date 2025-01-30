<template>
    <div
        class="card vs-event-card"
        data-test="vs-event-card"
    >
        <div class="card-body">
            <div
                class="vs-event-card__header"
                data-test="vs-event-card__header"
            >
                <VsHeading
                    class="vs-event-card__header-heading"
                    heading-style="heading-xs"
                    level="3"
                >
                    <!-- @slot for the title of the event -->
                    <slot name="event-card-header" />
                </VsHeading>

                <!-- @slot for the date of event -->
                <p class="vs-event-card__header-date">
                    <slot name="event-card-header-date" />
                </p>
            </div>
            <div class="vs-event-card__content">
                <!--@slot for event description-->
                <div
                    v-if="$slots['event-card-content-description']"
                    class="vs-event-card__content-description"
                    data-test="vs-event-card__content-description"
                >
                    <p>
                        <slot name="event-card-content-description" />
                    </p>
                </div>
                <div class="vs-event-card__content-details">
                    <div
                        v-if="$slots['event-card-content-details']"
                        class="vs-event-card__content-details-event-details"
                        data-test="vs-event-card__content-details-event-details"
                    >
                        <VsList unstyled>
                            <!--@slot for event details-->
                            <slot name="event-card-content-details" />
                        </VsList>
                    </div>
                    <div
                        class="vs-event-card__content-details-travel-trade-details"
                        data-test="vs-event-card__content-details-travel-trade-details"
                        v-if="$slots['event-card-content-ttdetails']"
                    >
                        <VsList unstyled>
                            <!--@slot optional for second column details for travel trade events-->
                            <slot name="event-card-content-ttdetails" />
                        </VsList>
                    </div>
                    <div class="vs-event-card__content-details-event-cta">
                        <VsButton
                            v-if="ctaLink"
                            :href="ctaLink"
                            icon="external-link"
                            icon-position="right"
                            data-test="vs-event-card__content-details-event-cta"
                        >
                            Find Out More
                        </VsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsList from '@/components/list/List.vue';

/**
 * The Event card component displays details about training & events
 * for the industry in the Business Support hub website
 *
 * @displayName Event Card
 */
export default {
    name: 'VsEventCard',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsHeading,
        VsList,
    },
    props: {
        ctaLink: {
            type: String,
            default: '#',
        },
    },

};
</script>

<style lang="scss">
    .card.vs-event-card {
        border: none;
        line-height: $line-height-m;

        &:after {
            content: '';
            border-bottom: 1px solid $vs-color-border-primary;
            position: absolute;
            width: calc(100% - 16px);
            left: 8px;
            bottom: 0;
        }

        .card-body {
            padding: $spacer-100;
            width: 100%;
        }

        .vs-event-card__header {
            display: flex;
            flex-direction: column;
            margin: 0 0 $spacer-075 0;
            font-weight: $font-weight-semi-bold;

            &.-heading {
                font-size: $font-size-8;
            }

            p {
                margin: 0;
            }
        }

        @include media-breakpoint-down(sm) {
            .vs-event-card__header .vs-heading {
                margin-bottom: 0;
            }
        }

        @include media-breakpoint-up(sm) {
                .vs-event-card__header {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 0 $spacer-025 0;
                }
            }

        .vs-event-card__header-date {
            font-size: $font-size-6;
        }

        .vs-event-card__content {
            li {
                list-style: none outside;
            }

            label {
                font-weight: $font-weight-semi-bold;
            }

            .vs-event-card__content-description {
                line-height: $line-height-s;
            }

            p {
                margin: 0;
            }
        }

        .vs-event-card__content-details {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            margin: $spacer-075 0 0 0;

            .vs-event-card__content-details-data {
                display: inline;
            }

            .vs-event-card__content-details-data::before {
                content: " ";
            }

            @include media-breakpoint-up (sm) {
                flex-direction: row;

                .vs-event-card__content-details-event-details {
                    flex-basis: 35%;
                    flex-grow: 1;
                }

                .vs-event-card__content-details-travel-trade-details {
                    flex-basis: 45%;
                }

                .vs-event-card__content-details-event-cta {
                    flex-basis: 20%;
                    align-self: flex-end;
                }
            }

            .vs-event-card__content-details-event-cta {
                    margin-top: $spacer-075;
                }

        }
    }
</style>
