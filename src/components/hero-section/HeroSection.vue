<template>
    <div
        class="w-100 min-vh-100"
    >
        <div
            class="
                bg-white
                p-125 p-lg-400
                d-flex flex-column
                flex-md-row
                gap-md-125
                gap-lg-400
            "
            :class="{ 'sticky-top': !inset }"
        >
            <VsHeading class="text-brand m-0">
                {{ heading }}
            </VsHeading>
            <p v-if="lede" class="m-0">
                {{ lede }}
            </p>
        </div>
        <div :class="{ 'px-125 px-lg-400': inset }">
            <div
                class="hero-image__wrapper"
                :class="{ 'rounded-3 overflow-hidden': inset }"
            >
                <div
                    class="
                        vs-hero-section__bg
                        w-100 min-vh-100
                    "
                    style="background-image: url('https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/20/paddleboarding---basking-shark-scotland.jpg?size=lg')"
                    role="img"
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
            default: 'Scotland, the biggest wee country in the world',
            required: true,
        },
        lede: {
            type: String,
            default: '',
            required: false,
        },
        src: {
            type: String,
            default: 'https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/20/paddleboarding---basking-shark-scotland.jpg?size=lg',
            required: true,
        },
        alt: {
            type: String,
            default: '',
            required: false,
        },
    },
};
</script>

<style lang="scss">
.vs-hero-section__bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: 50%;
}
</style>
