<template>
    <div class="vs-hero-section__bg min-vh-100 min-vw-100" />
</template>

<script>
// import VsHeading from '@/components/heading/Heading.vue';

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
        // VsHeadingSection,
    },
    props: {
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
.vs-hero-section {
    color: #fff;

    &__bg {
        background-image: url('https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/20/paddleboarding---basking-shark-scotland.jpg?size=lg');
        background-repeat: no-repeat;
        background-size: cover
    }
}
</style>
