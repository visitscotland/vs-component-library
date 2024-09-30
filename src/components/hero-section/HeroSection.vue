<template>
    <div
        class="vs-hero-section"
        data-test="vs-hero-section"
    >
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
            <span v-if="src">
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
                    <template v-slot:caption>
                        {{ imgCaption }}
                    </template>
                    <template v-slot:credit>
                        {{ imgCredit }}
                    </template>
                </VsCaption>
            </span>

            <hr v-else class="vs-hero-section__divider">
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
import VsCaption from '@/components/caption/Caption.vue';
import VsImg from '@/components/img/Img.vue';

/**
* Component for the page hero and introduction.
* Should be standardised to present a cohesive brand identity
* across any sites that use it.
*
* @displayName Hero Section
*/

export default {
    name: 'VsPageIntro',
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
    computed: {
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
            background-color: $vs-color-background-inverse;
            padding: $spacer-400 0 $spacer-300 0;

            @include media-breakpoint-up(sm) {
                padding: $spacer-500 0 $spacer-300 0;
            }
        }

        &__heading{
            color: $vs-color-new-text-brand;
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

        &__divider {
            height: 2px;
            margin: 0;
            color: $vs-color-background-neutral;
        }
    }
</style>
