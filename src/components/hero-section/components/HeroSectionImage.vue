<template>
    <div
        class="vs-hero-section-image"
        :class="isSplit"
        data-test="vs-hero-section-image"
    >
        <VsImg
            class="vs-hero-section-image__img"
            :src="src"
            :alt="imgAlt"
        />

        <VsCaption
            v-if="imgCaption || imgCredit"
            class="p-0"
            theme="subtle"
            data-test="vs-hero-section-image__caption"
        >
            <template #caption>
                {{ imgCaption }}
            </template>
            <template #credit>
                {{ imgCredit }}
            </template>
        </VsCaption>
    </div>
</template>

<script>
import VsCaption from '@/components/caption/Caption.vue';
import VsImg from '@/components/img/Img.vue';

/**
* Child component for Hero Section Image
*
* @displayName Hero Section Image
*/

export default {
    name: 'VsHeroSectionImage',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCaption,
        VsImg,
    },
    props: {
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
        * Changes image to split text/image variant
        */
        split: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        // Set container class for inset variant
        isSplit() {
            return this.split ? 'vs-hero-section-image--split' : '';
        },
    },
};
</script>

<style lang="scss">
    .vs-hero-section-image {
        &__img {
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

        &--split {
            .vs-hero-section-image__img {
                height: 255px;
                border-radius: 0 0 0 20px;

                @include media-breakpoint-up(sm) {
                    height: 340px;
                }

                @include media-breakpoint-up(md) {
                    height: 540px;
                }
            }
        }
    }
</style>
