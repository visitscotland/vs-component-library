<template>
    <div class="vs-heading-section col-12">
        <div class="vs-heading-section__bg d-flex flex-column-reverse d-lg-flex flex-md-row">
            <div class="col-12 col-xl-8 ms-auto me-auto d-flex flex-column-reverse flex-md-row">
                <div class="basis-md-50 px-5">
                    <VsHeading class="">
                        <slot name="heading" />
                    </VsHeading>
                    <slot name="content" />
                </div>
                <div class="basis-md-50">
                    <VsImg :src="src" fluid />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';

/**
* Component for the page heading and introduction.
* Should be standardised to present a cohesive brand identity
* across any sites that use it.
*
* @displayName Heading Section
*/

export default {
    name: 'VsPageIntro',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsImg,
    },
    props: {
        src: {
            type: String,
            default: 'http://localhost:6006/images/placeholders/placeholder-img.jpg?size=md',
            required: false,
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
.vs-heading-section {
    color: #fff;

    &__bg {
        background: linear-gradient(116deg, #5B2487 23.72%, #A8308C 100.58%);
    }
}
</style>
