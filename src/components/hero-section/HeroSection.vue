<template>
    <div
        class="vs-hero-section"
        :class="{ 'vs-hero-section--split': split }"
        data-test="vs-hero-section"
    >
        <div class="vs-hero-section__grid">
            <div
                v-if="src"
                :class="['vs-hero-section__image', imageClasses]"
            >
                <VsHeroSectionImage
                    :img-alt="imgAlt"
                    :src="src"
                    :img-caption="imgCaption"
                    :img-credit="imgCredit"
                    :split="split"
                />
            </div>

            <hr
                v-else
                class="vs-hero-section__divider"
            >

            <div class="vs-hero-section__text-container">
                <div class="vs-hero-section__text">
                    <VsHeading
                        class="vs-hero-section__heading"
                        data-test="vs-hero-section__heading"
                        level="1"
                        heading-style="display-xs"
                    >
                        {{ heading }}
                    </VsHeading>

                    <VsRichTextWrapper
                        v-if="lede"
                        class="vs-hero-section__lede"
                        data-test="vs-hero-section__lede"
                        variant="lead"
                    >
                        <p class="mb-0">
                            {{ lede }}
                        </p>
                    </VsRichTextWrapper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsHeroSectionImage from '@/components/hero-section/components/HeroSectionImage.vue';

/**
* Component for the hero section at the top of a page.
* Should be standardised to present a cohesive brand identity
* across any sites that use it.
*
* @displayName Hero Section
*/

export default {
    name: 'VsHeroSection',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsRichTextWrapper,
        VsHeroSectionImage,
    },
    props: {
        /**
        * The text for the heading
        */
        heading: {
            type: String,
            default: '',
            required: true,
        },
        /**
        * The text for the summary
        */
        lede: {
            type: String,
            default: '',
            required: true,
        },
        /**
        * The image src url to display
        */
        src: {
            type: String,
            default: '',
        },
        /**
        * The alt text for the image if applicable
        */
        imgAlt: {
            type: String,
            default: '',
        },
        /**
        * The caption text for the image
        */
        imgCaption: {
            type: String,
            default: '',
        },
        /**
        * The author credit for the image
        */
        imgCredit: {
            type: String,
            default: '',
        },
        /**
        * Whether the image should sit in a container or not
        */
        inset: {
            type: Boolean,
            default: false,
        },
        /**
        * Changes layout to split text/image variant
        */
        split: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        imageClasses() {
            return {
                'vs-hero-section__image--inset': this.inset,
            };
        },
    },
};

</script>

<style lang="scss">
    .vs-hero-section {
        padding-bottom: $spacer-300;
        background: $vs-color-background-primary;

        --grid-columns: 12px 1fr 12px;
        --content_maxwidth: 100%;
        --container-col: 2 / -2;
        --container-row: 1;
        --image-col: 1 / -1;
        --image-row: 2;
        --inset-image-col: 2 / -2;
        --divider-col: 2 / -2;
        --divider-row: 2;

        @include media-breakpoint-up(sm) {
            --content_maxwidth: #{$max-container-width-sm};
            --grid-columns: 1fr min-content min-content 1fr;
        }

        @include media-breakpoint-up(md) {
            --content_maxwidth: #{$max-container-width-md};
        }

        @include media-breakpoint-up(lg) {
            --content_maxwidth: #{$max-container-width-lg};
        }

        @include media-breakpoint-up(xl) {
            --content_maxwidth: #{$max-container-width-xl};
        }

        @include media-breakpoint-up(xxl) {
            --content_maxwidth: #{$max-container-width-xxl};
        }

        &__grid {
            display: grid;
            grid-template-columns: var(--grid-columns);
            width: 100%;
        }

        &__image {
            grid-row: var(--image-row);
            grid-column: var(--image-col);

            &--inset {
                grid-column: var(--inset-image-col);
            }
        }

        &__text-container {
            grid-row: var(--container-row);
            grid-column: var(--container-col);
            width: var(--content_maxwidth);
            padding: $spacer-200 0 $spacer-250 0;

            @include media-breakpoint-up(sm) {
                padding: $spacer-300 0;
            }
        }

        &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-right: 10%;

            @include media-breakpoint-up(sm) {
                padding-right: 20%;
            }

            @include media-breakpoint-up(md) {
                padding-right: 40%;
            }

            @include media-breakpoint-up(lg) {
                flex-direction: row;
                padding-right: 0;
            }

            .vs-hero-section__heading.vs-heading {
                color: $vs-color-text-brand;

                @include media-breakpoint-up(lg) {
                    @include heading-style(display-s);
                    margin-top: 0;
                }

                @include media-breakpoint-up(xl) {
                    @include heading-style(display-m);
                    margin-top: 0;
                }
            }

            .vs-hero-section__lede{
                margin-left: 0;

                @include media-breakpoint-up(lg) {
                    margin-left: 14%;
                }
            }
        }

        &__divider {
            height: 2px;
            margin: 0;
            color: $vs-color-border-primary;
            grid-row: var(--divider-row);
            grid-column: var(--divider-col);

        }

        &--split {
            --split-image-row: 1;
            --split-image-col:  1 / -1;
            --split-container-row: 2;
            --split-container-col: 2 / -2;

            @include media-breakpoint-up(lg) {
                --split-container-row: 1;
                --split-container-col: 2 / span 2;
                --split-image-row: 1;
                --split-image-col: 3 / span 2;
            }

            .vs-hero-section__image {
                grid-row: var(--split-image-row);
                grid-column: var(--split-image-col);
                position: relative;
                overflow: hidden;
                z-index: 0;
                min-height: 14rem;
                max-width: 1000px;

                @include media-breakpoint-up(lg) {
                    grid-row: var(--split-image-row);
                    grid-column: var(--split-image-col);
                }
            }

            .vs-hero-section__text-container {
                grid-row: var(--split-container-row);
                grid-column: var(--split-container-col);
                padding: 0;
            }

            .vs-hero-section__text {
                width: 100%;
                flex-direction: column;
                padding: 0;

                .vs-hero-section__lede {
                    margin-left: 0;
                }

                @include media-breakpoint-up(sm) {
                    width: 75%;
                }

                @include media-breakpoint-up(lg) {
                    width: 50%;
                    padding-right: 7rem;
                    align-items: center;
                }
            }
        }
    }
</style>
