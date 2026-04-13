<template>
    <VsCard
        card-style="overlay"
        class="vs-map__controls-featured-place-card"
        @click="featuredPlaceClick(props.place)"
    >
        <template #vs-card-footer>
            <div class="px-125 pb-125">
                <VsHeading
                    class="vs-map__controls-featured-place-card-heading"
                    heading-style="heading-xxxs"
                    level="2"
                    no-margins
                >
                    <VsLink
                        class="stretched-link text-decoration-none"
                        href="#"
                        variant="on-dark"
                        @keyup.enter.prevent="featuredPlaceClick(props.place)"
                        @keyup.space.prevent="featuredPlaceClick(props.place)"
                    >
                        {{ props.place.properties.title }}
                    </VsLink>
                </VsHeading>
            </div>
        </template>
        <template
            v-if="props.place.properties.image"
            #vs-card-image
        >
            <VsImg
                class="vs-map__controls-featured-place-img w-100 rounded-1 object-fit-cover img-zoom-on-hover"
                :src="props.place.properties.image"
                :use-lazy-loading="false"
            />
        </template>
    </VsCard>
</template>

<script setup>
import { inject } from 'vue';
import VsCard from '@/components/card/Card.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';

const props = defineProps({
    place: {
        type: Object,
        default: () => {},
    },
});

const onFeaturedLocationClick = inject('onFeaturedLocationClick');

function featuredPlaceClick(place) {
    onFeaturedLocationClick(place);
}
</script>

<style lang="scss">
    .vs-map__controls-featured-place-card {
        height: 10em;
        flex: 0 0 9.25em!important;

        &-heading {
            z-index: 2;
            position: relative;
        }
        .vs-card__media {
            z-index: 1;

            & img {
                height: 10em;
            }
        }
    }
</style>
