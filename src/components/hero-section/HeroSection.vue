<template>
    <div
        class="vs-hero-section"
        data-test="vs-hero-section"
    >
        <div
            v-if="!videoSrc"
            class="vs-hero-section__text-wrapper"
        >
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
            v-if="!videoSrc"
            data-test="vs-hero-section__image-wrapper"
        >
            <span v-if="src && !videoSrc">
                <VsImg
                    class="vs-hero-section__img"
                    :src="src"
                    :alt="imgAlt"
                />

                <VsCaption
                    v-if="imgCaption || imgCredit"
                    class="p-0"
                    theme="subtle"
                    data-test="vs-hero-section__caption"
                >
                    <template #caption>
                        {{ imgCaption }}
                    </template>
                    <template #credit>
                        {{ imgCredit }}
                    </template>
                </VsCaption>
            </span>

            <hr
                v-else
                class="vs-hero-section__divider"
            >
        </div>

        <div
            v-if="videoSrc"
            class="vs-hero-section__video-wrapper"
        >
            <video
                loop
                muted
                autoplay
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

            <VsButton
                icon-only
                class="vs-hero-section__pause-btn"
                :icon=" isPlaying ? 'play-filled' : 'play'"
                variant="transparent"
                @click="toggleVideo"
            >
                Pause
            </VsButton>

            <VsContainer>
                <div class="vs-hero-section__video-text">
                    <VsRow>
                        <VsCol
                            cols="12"
                            sm="10"
                            md="9"
                        >
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
                                variant="lead"
                                data-test="vs-hero-section__lede"
                            >
                                <p class="mb-0">
                                    {{ lede }}
                                </p>
                            </VsRichTextWrapper>
                        </VsCol>
                    </VsRow>
                </div>
            </VsContainer>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import VsButton from '@/components/button/Button.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';
import VsCaption from '@/components/caption/Caption.vue';
import VsImg from '@/components/img/Img.vue';

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
        VsCaption,
        VsRichTextWrapper,
        VsImg,
        VsButton,
    },
    props: {
        /**
        * Whether the image should sit in a container or not
        */
        inset: {
            type: Boolean,
            default: false,
        },
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
        * The image src url to display
        */
        videoSrc: {
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
    },
    data() {
        return {
            isPlaying: true,
        };
    },
    computed: {
        setInset() {
            return this.inset || !this.src ? 'container' : '';
        },
    },
    methods: {
        /**
         * Play/pause the video
         */
        toggleVideo() {
            if (this.isPlaying) {
                this.$refs.heroVideo.pause();
                this.isPlaying = false;
            } else {
                this.$refs.heroVideo.play();
                this.isPlaying = true;
            }
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

            .vs-hero-section__heading {
                color: $vs-color-text-brand;
            }
        }

        &__heading{
            @include media-breakpoint-up(lg) {
                @include heading-style(display-s);
            }

            @include media-breakpoint-up(xl) {
                @include heading-style(display-m);
            }
        }

        &__pause-btn.btn.vs-button {
            position: absolute;
            bottom: $spacer-125;
            right: $spacer-125;

            .vs-icon {
                color: $vs-color-text-inverse!important;
            }

            &:hover {
                .vs-icon {
                    color: $vs-color-icon-accent-saltire-30!important;
                }
            }
        }

        &__img{
            width: 100%;
            height: 386px;
            object-fit: cover;

            @include media-breakpoint-up(sm) {
                height: 514px;
            }

            @include media-breakpoint-up(lg) {
                height: 648px;
            }
        }

        &__video-wrapper {
            position: relative;
            line-height: 0;

            .vs-hero-section__video-text {
                position: absolute;
                bottom: $spacer-500;
                color: $vs-color-text-inverse;
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

            .vs-hero-section__video{
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
        }

        &__divider {
            height: 2px;
            margin: 0;
            color: $vs-color-border-primary;
        }
    }
</style>
