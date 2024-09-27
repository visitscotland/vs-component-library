<template>
    <div
        class="vs-hero-section"
        data-test="vs-hero-section"
    >
        <div
            class="vs-hero-section__text-wrapper"
        >
            <VsContainer>
                <VsRow>
                    <VsCol
                        cols="12"
                        lg="8"
                    >
                        <VsHeading class="vs-hero-section__heading m-lg-0">
                            {{ heading }}
                        </VsHeading>
                    </VsCol>

                    <VsCol
                        cols="8"
                        lg="4"
                    >
                        <p
                            v-if="lede"
                            class="mb-0"
                        >
                            {{ lede }}
                        </p>
                    </VsCol>
                </VsRow>
            </VsContainer>
        </div>

        <div :class="{ container: inset }">
            <div
                class="vs-hero-section__img"
                :style="setHeroImage"
            />

            <VsCaption class="p-0" theme="subtle">
                <template v-slot:caption>
                    {{ imgCaption }}
                </template>
                <template v-slot:credit>
                    {{ imgCredit }}
                </template>
            </VsCaption>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
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
    },
    props: {
        inset: {
            type: Boolean,
            default: false,
            required: false,
        },
        heading: {
            type: String,
            default: 'Level 1 heading',
            required: true,
        },
        lede: {
            type: String,
            default: 'Optional lede. A <p> tag containing a short, meaningful description summary of the page content or, potentially, a well-designed caption for the hero image.',
        },
        src: {
            type: String,
            default: 'images/placeholders/placeholder-img.jpg',
            required: true,
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
            color: $vs-color-background-brand;
        }

        &__img {
            background-repeat: no-repeat;
            background-size: cover;
            height: 100vh;
        }
    }
</style>
