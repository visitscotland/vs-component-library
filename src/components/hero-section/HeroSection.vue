<template>
    <div
        class="vs-hero-section"
        :class="{ 'vs-hero-section--split': split }"
        data-test="vs-hero-section"
    >
        <div class="vs-hero-section__grid">
            <div
                v-if="src && !videoSrc"
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

            <div
                v-else-if="videoSrc"
                class="vs-hero-section__video-wrapper"
            >
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    preload="auto"
                    :poster="src"
                    class="vs-hero-section__video"
                    ref="heroVideo"
                >
                    <source
                        :src="videoSrc"
                        type="video/mp4"
                    >
                </video>
                <div class="vs-hero-section__video-overlay" />
            </div>

            <hr
                v-else
                class="vs-hero-section__divider"
            >

            <div :class="textContainerClasses">
                <div class="vs-hero-section__text">
                    <VsHeading
                        class="vs-hero-section__heading"
                        data-test="vs-hero-section__heading"
                        level="1"
                        heading-style="display-xs"
                    >
                        <span v-html="heading" />
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

                <VsHeroSectionVideoControl
                    video-btn-text="Toggle video"
                    @video-toggled="onToggleVideo"
                >
                    {{ videoBtnText }}
                </VsHeroSectionVideoControl>
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsHeroSectionImage from '@/components/hero-section/components/HeroSectionImage.vue';
import VsHeroSectionVideoControl from '@/components/hero-section/components/HeroSectionVideoControl.vue';

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
        VsHeroSectionVideoControl,
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
        /**
        * The image src url to display
        */
        videoSrc: {
            type: String,
            default: '',
        },
        /**
        * The visually hidden text to display
        */
        videoBtnText: {
            type: String,
            default: '',
        },
    },
    computed: {
        imageClasses() {
            return {
                'vs-hero-section__image--inset': this.inset,
            };
        },
        textContainerClasses() {
            return [
                {
                    'vs-hero-section__text-container--video': this.videoSrc,
                },
                'vs-hero-section__text-container',
            ];
        },
    },
    methods: {
        /**
         * Play/pause the video
         */
        onToggleVideo(isPlaying) {
            if (isPlaying) {
                this.$refs.heroVideo.pause();
            } else {
                this.$refs.heroVideo.play();
            }
        },
    },
};

</script>

<style lang="scss">
    .vs-hero-section {
        background: $vs-color-background-primary;

        --grid-columns: 12px 1fr 1fr 12px;
        --content_maxwidth: 100%;
        --container-col: 2 / span 2;
        --container-row: 1;
        --image-col: 1 / -1;
        --image-row: 2;
        --inset-image-col: 2 / span 2;
        --divider-col: 2 / span 2;
        --divider-row: 2;

        @include media-breakpoint-up(sm) {
            --content_maxwidth: #{$grid-container-width-sm};
            --grid-columns: 1fr min-content min-content 1fr;
        }

        @include media-breakpoint-up(md) {
            --content_maxwidth: #{$grid-container-width-md};
        }

        @include media-breakpoint-up(lg) {
            --content_maxwidth: #{$grid-container-width-lg};
        }

        @include media-breakpoint-up(xl) {
            --content_maxwidth: #{$grid-container-width-xl};
        }

        @include media-breakpoint-up(xxl) {
            --content_maxwidth: #{$grid-container-width-xxl};
        }

        &__grid {
            display: grid;
            grid-template-columns: var(--grid-columns);
            width: 100%;
            position: relative;
        }

        &__image {
            grid-row: var(--image-row);
            grid-column: var(--image-col);

            &--inset {
                grid-column: var(--inset-image-col);
                padding: 0;
            }
        }

        &__text-container {
            position: relative;
            grid-row: var(--container-row);
            grid-column: var(--container-col);
            width: var(--content_maxwidth);
            padding: $spacer-150 0 $spacer-250 0;

            @include media-breakpoint-up(lg) {
                padding: $spacer-300 0;
            }
        }

        &__text {
            width: 100%;

            @include media-breakpoint-up(sm) {
                width: 80%;
            }

            @include media-breakpoint-up(md) {
                width: 70%;
            }

            @include media-breakpoint-up(lg) {
                width: 100%;
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                gap: 6rem;
            }

            @include media-breakpoint-up(xl) {
                grid-template-columns: 1.5fr 0.75fr;
            }

            @include media-breakpoint-up(xxl) {
                gap: 12rem;
            }

            .vs-hero-section__heading.vs-heading {
                color: $vs-color-text-brand;

                @include media-breakpoint-up(md) {
                    @include heading-style(display-s);
                }

                @include media-breakpoint-up(lg) {
                    margin: 0;
                }

                @include media-breakpoint-up(xl) {
                    @include heading-style(display-m);
                    margin: 0;
                }
            }
        }

        &__video-wrapper {
            grid-row: 1;
            grid-column: 1 / -1;
            position: relative;
            line-height: 0;

            .vs-hero-section__video {
                width: 100%;
                height: 560px;
                object-fit: cover;

                @include media-breakpoint-up(sm) {
                    height: 648px;
                }
                @include media-breakpoint-up(lg) {
                    height: 812px;
                }
            }

            .vs-hero-section__video-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: opacity 1s;
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 40%, rgba(0, 0, 0, 0.40) 100%);
            }
        }

        .vs-hero-section__text-container--video {
            color: $vs-color-text-inverse;

            .vs-hero-section-video-control {
                position: absolute;
                bottom: $spacer-500;
                right: $spacer-125;
            }

            .vs-hero-section__text {
                display: grid;
                grid-template-columns: 1fr;
                gap: 0;
                position: absolute;
                bottom: $spacer-500;
                width: 70%;

                @include media-breakpoint-up(md) {
                    width: 50%;
                }

                .vs-hero-section__heading.vs-heading {
                    color: $vs-color-text-inverse;
                    text-wrap: balance;

                    @include media-breakpoint-up(lg) {
                        margin: 0 0 $spacer-150 0;
                    }
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
                padding-top: 0;
            }

            .vs-hero-section__text {
                height: 100%;
                width: 100%;
                padding: 0;

                @include media-breakpoint-up(sm) {
                    width: 75%;
                }

                @include media-breakpoint-up(lg) {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 0;
                    place-content: center;
                    width: 42%;
                }

                @include media-breakpoint-up(xxl) {
                    width: 40%;
                }

                .vs-hero-section__heading.vs-heading {
                    @include media-breakpoint-up(lg) {
                        margin: 0 0 $spacer-150 0;
                    }
                }
            }
        }
    }
</style>
