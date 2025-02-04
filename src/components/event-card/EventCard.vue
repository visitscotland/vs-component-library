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
                    class="vs-event-card__heading"
                    heading-style="heading-xs"
                    level="3"
                >
                    <!-- @slot for the title of the event -->
                    <slot name="event-card-header" />
                </VsHeading>

                <!-- @slot for the date of event -->
                <p class="vs-event-card__date">
                    <slot name="event-card-header-date" />
                </p>
            </div>
            <div class="vs-event-card__content">
                <!--@slot for event description-->
                <div
                    v-if="$slots['event-card-content-description']"
                    class="vs-event-card__description"
                    data-test="vs-event-card__description"
                >
                    <p>
                        <slot name="event-card-content-description" />
                    </p>
                </div>
                <div class="vs-event-card__details">
                    <div
                        v-if="$slots['event-card-content-details']"
                        class="vs-event-card__event-details"
                        data-test="vs-event-card__event-details"
                    >
                        <slot name="event-card-content-details" />
                    </div>
                    <div
                        class="vs-event-card__event-cta"
                        data-test="vs-event-card__event-cta"
                    >
                        <VsButton
                            :href="ctaHref"
                            icon="external-link"
                            icon-position="right"
                            icon-size="xs"
                            data-test="vs-event-card__cta"
                        >
                            {{ ctaLabel }}
                        </VsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsButton from '@/components/button/Button.vue';

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
        VsHeading,
        VsButton,
    },
    props: {
        /**
         * Href value for the CTA button
         */
        ctaHref: {
            type: String,
            default: '#',
        },
        /**
         * Label value for the CTA button
         */
        ctaLabel: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.card.vs-event-card {
    border: none;
    line-height: $line-height-m;

    .card-body {
        padding: $spacer-100;
        width: 100%;
        border-bottom: 1px solid $vs-color-border-primary;
    }

    .vs-event-card__header {
        display: flex;
        flex-direction: column;
        margin: 0 0 $spacer-075 0;
        font-weight: $font-weight-semi-bold;
    }

    .vs-event-card__heading {
        font-size: $font-size-8;
    }

    .vs-event-card__date {
        margin: 0;
        font-size: $font-size-6;
    }

    @include media-breakpoint-down(sm) {
        .vs-event-card__heading {
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

    .vs-event-card__content {
        li {
            list-style: none outside;
        }

        label {
            font-weight: $font-weight-semi-bold;
        }

        .vs-event-card__description {
            line-height: $line-height-s;
        }

        p {
            margin: 0;
        }
    }

    .vs-event-card__details {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin: $spacer-075 0 0 0;

        .vs-event-card__details-data {
            display: inline;
        }

        .vs-event-card__details-data::before {
            content: ' ';
        }

        @include media-breakpoint-up(sm) {
            flex-direction: row;

            .vs-event-card__event-details {
                flex-basis: 35%;
                flex-grow: 1;
            }

            .vs-event-card__travel-trade-event-details {
                flex-basis: 45%;
            }

            .vs-event-card__event-cta {
                flex-basis: 20%;
                align-self: flex-end;
            }
        }

        .vs-event-card__event-cta {
            margin-top: $spacer-075;
        }
    }
}
</style>
