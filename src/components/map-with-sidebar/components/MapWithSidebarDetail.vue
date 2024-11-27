<template>
    <div
        class="vs-map-with-sidebar-detail"
        data-test="vs-map-with-sidebar-detail"
    >
        <VsImg
            v-if="typeof contentData.properties.image !== 'undefined'"
            :src="contentData.properties.image"
            class="vs-map-with-sidebar-detail__image mb-125 mb-lg-075"
        />

        <VsHeading
            v-if="showTitle"
            :level="headingLevel"
            heading-style="heading-xxs"
            class="vs-map-with-sidebar-detail__heading mt-0"
            data-test="vs-map-with-sidebar-detail__heading"
        >
            <template v-if="typeof contentData.properties.placeTitle !== 'undefined'">
                {{ contentData.properties.placeTitle }}
            </template>

            <template v-else>
                {{ contentData.properties.title }}
            </template>
        </VsHeading>

        <p
            v-if="typeof contentData.properties.address !== 'undefined'"
            data-test="vs-map-with-sidebar-detail__address"
            class="vs-map-with-sidebar-detail__address"
        >
            {{ contentData.properties.address.shortAddress }}
        </p>

        <p
            v-if="contentData.properties.subtitle"
            class="mt-100"
        >
            {{ contentData.properties.subtitle }}
        </p>

        <div
            data-test="vs-map-with-sidebar-detail__description"
            class="vs-map-with-sidebar-detail__description mb-150"
            v-html="contentData.properties.description"
        />
    </div>
</template>

<script>
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';

/**
 * Renders a details of a place in the map component.
 * Content is received by a data object
 *
 * @displayName Main Map Wrapper Detail
 */
export default {
    name: 'VsMapWithSidebarDetail',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsImg,
        VsHeading,
    },
    props: {
        /**
         * Data for component content
         */
        contentData: {
            type: Object,
            required: true,
        },
        /**
         * Heading level - to allow sequential heading
         */
        headingLevel: {
            type: String,
            default: '3',
        },
    },
    computed: {
        showTitle() {
            if (typeof this.contentData.properties.title !== 'undefined'
                || typeof this.contentData.properties.placeTitle !== 'undefined') {
                return true;
            }

            return false;
        },
    },
};
</script>

<style lang="scss">
    .vs-map-with-sidebar-detail {
        text-align: left;

        @include media-breakpoint-up(lg) {
            font-size: $font-size-4;
            margin: 0 $spacer-050;
        }

        &__image {
            max-width: 100%;
            aspect-ratio: 3/2;
            object-fit: cover;

            @supports not (aspect-ratio: 3/2) {
                padding-bottom: 66.6%;
            }
        }

        &__heading.vs-heading--style-level-4.vs-heading,
        &__address {
            margin-bottom: 0;
            color: $vs-color-text-secondary;
        }

        &__description {
            margin-top: 1rem;
            text-align: left;
        }
    }
</style>
