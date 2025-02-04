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
                <p
                    class="vs-event-card__date"
                    data-test="vs-event-card__date"
                    v-if="$slots['event-card-date']"
                >
                    <slot name="event-card-date" />
                </p>
            </div>

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
        label {
            font-weight: $font-weight-semi-bold;
        }
    }

    @include media-breakpoint-up(md) {
        .vs-event-card__cta {
            max-width: 25%;
            position: absolute;
            right: $spacer-100;
            bottom: $spacer-100;
            margin-top: $spacer-075;
        }
    }
}
</style>
