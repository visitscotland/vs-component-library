<template>
    <div
        class="vs-hero-section"
        data-test="vs-hero-section"
    >
        <template v-if="!split">
            <div class="vs-hero-section__text-wrapper">
                <VsContainer>
                    <VsRow>
                        <VsCol
                            cols="12"
                            sm="10"
                            md="9"
                            lg="7"
                        >
                            <VsHeading
                                class="vs-hero-section__heading m-lg-0"
                                data-test="vs-hero-section__heading"
                                level="1"
                                heading-style="display-xs"
                            >
                                {{ heading }}
                            </VsHeading>
                        </VsCol>

                        <VsCol
                            cols="12"
                            sm="8"
                            offset-lg="1"
                            lg="4"
                        >
                            <VsRichTextWrapper
                                v-if="lede"
                                data-test="vs-hero-section__lede"
                                variant="lead"
                            >
                                <p class="mb-0">
                                    {{ lede }}
                                </p>
                            </VsRichTextWrapper>
                        </VsCol>
                    </VsRow>
                </VsContainer>
            </div>

            <div
                :class="setInset"
                data-test="vs-hero-section__image-wrapper"
            >
                <VsHeroSectionImage
                    v-if="src"
                    :img-alt="imgAlt"
                    :src="src"
                    :img-caption="imgCaption"
                    :img-credit="imgCredit"
                />

                <hr
                    v-else
                    class="vs-hero-section__divider"
                >
            </div>
        </template>

        <div
            v-else
            class="vs-hero-section__split"
        >
            <div class="vs-hero-section__split__grid">
                <div
                    v-if="src"
                    class="vs-hero-section__split__image mb-100"
                >
                    <VsHeroSectionImage
                        :img-alt="imgAlt"
                        :src="src"
                        :img-caption="imgCaption"
                        :img-credit="imgCredit"
                        :split="split"
                    />
                </div>

                <div class="vs-hero-section__split__text-container">
                    <div class="vs-hero-section__split__text">
                        <VsHeading
                            class="vs-hero-section__heading mb-lg-150"
                            data-test="vs-hero-section__heading"
                            level="1"
                            heading-style="display-xs"
                        >
                            {{ heading }}
                        </VsHeading>

                        <VsRichTextWrapper
                            v-if="lede"
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
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';
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
        VsContainer,
        VsCol,
        VsRow,
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
        // Set container class for inset variant
        setInset() {
            return this.inset || !this.src ? 'container' : '';
        },
    },
};
</script>

<style lang="scss">
    .vs-hero-section {
        padding-bottom: $spacer-300;

        &__text-wrapper {
            background-color: $vs-color-background-primary;
            padding: $spacer-400 0 $spacer-300 0;

            @include media-breakpoint-up(sm) {
                padding: $spacer-500 0 $spacer-300 0;
            }
        }

        &__heading{
            color: $vs-color-text-brand;

            @include media-breakpoint-up(lg) {
                @include heading-style(display-s);
            }

            @include media-breakpoint-up(xl) {
                @include heading-style(display-m);
            }
        }

        &__divider {
            height: 2px;
            margin: 0;
            color: $vs-color-border-primary;
        }
    }

    .vs-hero-section__split {
        background: $vs-color-background-primary;

        --grid-columns: 12px 1fr 1fr 12px;
        --content_maxwidth: 100%;
        --container-col: 2 / span 2;
        --container-row: 2;
        --image-col: 1 / -1;

        &__grid {
            display: grid;
            grid-template-columns: var(--grid-columns);
            width: 100%;
        }

        &__image {
            grid-row: var(--image-row);
            grid-column: var(--image-col);
            position: relative;
            overflow: hidden;
            z-index: 0;
            min-height: 14rem;
            max-width: 1000px
        }

        &__text-container {
            grid-row: var(--container-row);
            grid-column: var(--container-col);
            width: var(--content_maxwidth);
        }

        &__text {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        @include media-breakpoint-up(sm) {
            --content_maxwidth: #{$max-container-width-sm};
            --grid-columns: 1fr min-content min-content 1fr;

            &__text-container {
                padding: 2em 0 2em;
            }
        }

        @include media-breakpoint-up(md) {
            --content_maxwidth: #{$max-container-width-md};
        }

        @include media-breakpoint-up(lg) {
            --content_maxwidth: #{$max-container-width-lg};
            --container-row: 1;
            --container-col: 2 / span 2;
            --image-row: 1;
            --image-col: 3 / span 2;

            &__image {
                width: 100%;
                grid-row: 1;
                grid-column: 3 / span 2;
            }

            &__text {
                width: 50%;
                padding-right: 7rem;
                align-items: center;
            }
        }

        @include media-breakpoint-up(xl) {
            --content_maxwidth: #{$max-container-width-xl};
        }

        @include media-breakpoint-up(xxl) {
            --content_maxwidth: #{$max-container-width-xxl};
        }
    }
</style>
