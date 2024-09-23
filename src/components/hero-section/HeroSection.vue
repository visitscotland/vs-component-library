<template>
    <div
        class="w-100 min-vh-100"
    >
        <div
            class="
                bg-white
                p-125 p-lg-400
                d-flex flex-column
                flex-md-row justify-content-between
                gap-md-125
                gap-lg-400
            "
            :class="{ 'sticky-top': !inset }"
        >
            <VsHeading class="text-brand m-0">
                {{ heading }}
            </VsHeading>
            <p v-if="lede" class="mt-100 mt-md-0">
                {{ lede }}
            </p>
        </div>
        <div :class="{ 'px-125 px-lg-400': inset }">
            <div
                class="hero-image__wrapper"
                :class="{ 'rounded-3 overflow-hidden': inset }"
            >
                <div
                    role="img"
                    class="
                        vs-hero-section__bg
                        w-100 min-vh-100
                        "
                    :style="style"
                    :aria-label="alt"
                />
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';

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
            required: false,
        },
        src: {
            type: String,
            default: 'images/placeholders/placeholder-img.jpg',
            required: true,
        },
        alt: {
            type: String,
            default: '',
            required: false,
        },
    },
    computed: {
        style() {
            return `background-image: url('${this.src}')`;
        },
    },
};
</script>

<style lang="scss">
.vs-hero-section__bg {
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
