<template>
    <div
        class="card vs-event-card"
        data-test="vs-event-card"
    >
        <div class="card-body">
            <VsRow class="vs-event-card__header">
                <VsCol
                    sm="12"
                    md="9"
                    class="p-0"
                >
                    <VsHeading
                        class="vs-event-card__heading"
                        heading-style="heading-xs"
                        level="3"
                        data-test="vs-event-card__heading"
                    >
                        <!-- @slot for the title of the event -->
                        <slot name="event-card-header" />
                    </VsHeading>
                </VsCol>
                <VsCol
                    sm="12"
                    md="3"
                    class="my-auto p-0"
                    v-if="$slots['event-card-date']"
                    data-test="vs-event-card__date"
                >
                    <p class="vs-event-card__date">
                        <!-- @slot for the event date -->
                        <slot name="event-card-date" />
                    </p>
                </VsCol>
            </VsRow>

            <div
                class="vs-event-card__content"
                data-test="vs-event-card__content"
                v-if="$slots['event-card-content']"
            >
                <!-- @slot holds any content on the card (description, details, etc)-->
                <slot name="event-card-content" />
            </div>
            <div
                class="vs-event-card__cta"
                data-test="vs-event-card__cta"
                v-if="ctaHref && ctaLabel"
            >
                <VsButton
                    :href="ctaHref"
                    :icon="ctaIcon"
                    icon-position="right"
                    data-test="vs-event-card__cta"
                >
                    {{ ctaLabel }}
                </VsButton>
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsButton from '@/components/button/Button.vue';
import VsCol from '@/components/grid/Col.vue';
import VsRow from '@/components/grid/Row.vue';

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
        VsCol,
        VsRow,
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
        /**
         * Icon name for the icon on CTA button
         */
        ctaIcon: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.card.vs-event-card {
    border: none;
    .card-body {
        padding: $spacer-100;
        width: 100%;
        border-bottom: 1px solid $vs-color-border-primary;
    }

    .vs-event-card__date {
        margin: auto $spacer-0;
        font-size: $font-size-6;
        font-weight: $font-weight-semi-bold;
    }

    .vs-event-card__heading {
        margin: $spacer-0;
    }

    .vs-event-card__header {
        margin: $spacer-050 $spacer-0;
    }

    .vs-event-card__cta {
        margin-bottom: $spacer-050;
    }

    @include media-breakpoint-down(md) {
        .vs-event-card__cta {
            margin-top: $spacer-150;
        }
    }

    @include media-breakpoint-up(md) {

        .vs-event-card__header {
            margin: $spacer-0 $spacer-0 $spacer-0 $spacer-0;
        }

        .vs-event-card__heading {
            margin: $spacer-050 $spacer-0;
        }

        .vs-event-card__date {
            text-align: right;
            align-self: middle;
        }

        .vs-event-card__cta {
            position: relative;
            right: $spacer-0;
            bottom: $spacer-300;
            float: right;
            margin-bottom: -$spacer-300;
        }
    }
}
</style>
