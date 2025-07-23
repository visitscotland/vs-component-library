<template>
    <section
        :class="spotlightSectionClasses"
        :style="imageSrc ? { backgroundImage: `url(${imageSrc})` } : {}"
        data-test="vs-spotlight-section"
    >
        <div class="vs-spotlight-section__overlay">
            <div class="row w-100 m-0">
                <div class="col-12 col-sm-7 col-md-8 col-lg-7 col-xl-6 align-self-end p-0">
                    <VsHeading
                        class="vs-spotlight-section__heading"
                        level="2"
                        no-margins
                        heading-style="heading-xs"
                    >
                        {{ heading }}
                    </VsHeading>
                    <VsBody
                        v-if="description"
                        class="vs-spotlight-section__description"
                        no-margins
                    >
                        <p>
                            {{ description }}
                        </p>
                    </VsBody>
                    <VsButton
                        v-if="!compact && ctaLink"
                        class="vs-spotlight-section__cta-button"
                        :href="ctaLink"
                        size="sm"
                        variant="secondary"
                    >
                        {{ ctaText }}
                    </VsButton>
                </div>

                <div
                    v-if="compact"
                    class="col-12 col-sm-5 col-md-4 col-lg-5 col-xl-6 align-self-sm-end text-sm-end p-0"
                >
                    <VsButton
                        v-if="ctaLink"
                        class="vs-spotlight-section__cta-button"
                        :href="ctaLink"
                        size="sm"
                        variant="secondary"
                    >
                        {{ ctaText }}
                    </VsButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsBody from '@/components/body/Body.vue';
import VsButton from '@/components/button/Button.vue';

/**
 * Component for the spotlight section.
 *
 * @displayName Spotlight Section
 */

export default {
    name: 'VsSpotlightSection',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsBody,
        VsButton,
    },
    props: {
        /**
         * The text for the heading
         */
        heading: {
            type: String,
            required: true,
        },
        /**
         * The text for the summary
         */
        description: {
            type: String,
            default: '',
        },
        /**
         * The CTA link to navigate to
         */
        ctaLink: {
            type: String,
            required: true,
        },
        /**
         * The CTA text for the link
         */
        ctaText: {
            type: String,
            required: true,
        },
        /**
         * The image src url to display
         */
        imageSrc: {
            type: String,
            default: '',
        },
        /**
         * The compact variant reduces the size of the section
         */
        compact: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        spotlightSectionClasses() {
            return {
                'vs-spotlight-section': true,
                'vs-spotlight-section--compact': this.compact,
                'vs-spotlight-section--standard': !this.compact,
                'vs-spotlight-section--no-image': !this.imageSrc,
            };
        },
    },
};
</script>

<style lang="scss">
    .vs-spotlight-section {
        position: relative;
        background-color: $vs-color-background-information;
        color: $vs-color-text-inverse;
        border-radius: 0.75rem;
        background-size: cover;
        background-position: center;

        &__overlay {
            position: relative;
            height: 100%;
            width: 100%;
            display: grid;
            place-items: end;
            border-radius: 0.75rem;
            padding: $spacer-175 $spacer-125;
            z-index: 1;

            @include media-breakpoint-up(sm) {
                padding: $spacer-250 $spacer-250;
            }

            &::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 0.75rem;
                background:
                    linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
                    linear-gradient(270deg, rgba(0, 0, 0, 0) 30.29%, rgba(0, 0, 0, 0.5) 75%);
                z-index: -1;

                @include media-breakpoint-up(lg) {
                    background: linear-gradient(
                        270deg,rgba(0, 0, 0, 0) 30.29%,rgba(0, 0, 0, 0.5) 75%
                    );
                }
            }
        }

        &__description {
            display: none;
        }

        &__heading {
            text-wrap: balance;
            margin-bottom: $spacer-150;

            @include media-breakpoint-up(sm) {
                @include heading-style(heading-m, false);
            }

            @include media-breakpoint-up(md) {
                padding-right: $spacer-300;
                @include heading-style(heading-l, false);
            }

            @include media-breakpoint-up(lg) {
                padding-right: $spacer-700;
            }

            @include media-breakpoint-up(xl) {
                @include heading-style(heading-xl, false);
            }
        }

        &--standard {
            min-height: 360px;
            height: auto;

            @include media-breakpoint-up(md) {
                min-height: 500px;
            }

            .vs-spotlight-section__overlay {
                min-height: 360px;

                @include media-breakpoint-up(md) {
                    min-height: 500px;
                    padding: $spacer-400 $spacer-300;
                }
            }

            .vs-spotlight-section__heading {
                @include media-breakpoint-up(sm) {
                    margin-bottom: $spacer-150;
                }
            }

            .vs-spotlight-section__description {
                @include media-breakpoint-up(md) {
                    margin-bottom: $spacer-250;
                    display: block;
                }
                @include media-breakpoint-up(xl) {
                    margin-bottom: $spacer-300;
                }
            }
        }

        &--compact {
            min-height: 170px;
            height: auto;

            @include media-breakpoint-up(lg) {
                min-height: 276px;
            }

            @include media-breakpoint-up(xl) {
                min-height: 293px;
            }

            .vs-spotlight-section__overlay {
                min-height: 170px;

                @include media-breakpoint-up(lg) {
                    min-height: 276px;
                    padding: $spacer-400 $spacer-300;
                }

                @include media-breakpoint-up(xl) {
                    min-height: 293px;
                }
            }

            .vs-spotlight-section__heading {
                @include media-breakpoint-up(sm) {
                    margin-bottom: 0;
                }
                @include media-breakpoint-up(lg) {
                    margin-bottom: $spacer-150;
                }
            }

            .vs-spotlight-section__description {
                margin-bottom: 0;

                @include media-breakpoint-up(lg) {
                    display: block;
                }
            }
        }

        &--no-image {
            color: $vs-color-text-primary;

            .vs-spotlight-section__overlay::before {
                background: $vs-color-background-secondary;
            }
        }
    }
</style>
