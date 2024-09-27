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
                <div
                    class="vs-hero-section__img"
                    :style="setHeroImage"
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
    },
    props: {
        inset: {
            type: Boolean,
            default: false,
        },
        heading: {
            type: String,
            default: '',
            required: true,
        },
        lede: {
            type: String,
            default: '',
            required: true,
        },
        src: {
            type: String,
            default: '',
        },
        imgCaption: {
            type: String,
            default: '',
        },
        imgCredit: {
            type: String,
            default: '',
        },
    },
    computed: {
        setHeroImage() {
            return `background-image: url('${this.src}')`;
        },
        setInset() {
            return this.inset || !this.src ? 'container' : '';
        },
    },
};
</script>

<style lang="scss">
    .vs-hero-section {
        &__text-wrapper {
            background-color: $vs-color-background-inverse;
            padding: $spacer-300 0;
        }

        &__heading{
            color: $vs-color-new-text-brand;
        }

        &__img {
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
        }

        &__divider {
            height: 2px;
            color: $vs-color-background-neutral;
        }
    }
</style>
