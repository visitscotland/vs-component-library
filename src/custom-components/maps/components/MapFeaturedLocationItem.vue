<template>
    <VsCard
        card-style="overlay"
        class="vs-map__controls-featured-place-card"
        @click="featuredPlaceClick(place)"
    >
        <template #vs-card-footer>
            <div class="px-125 pb-125">
                <VsHeading
                    level="3"
                    no-margins
                    heading-style="heading-xxxs"
                    class="vs-map__controls-featured-place-card-heading"
                >
                    <VsLink
                        href="#"
                        class="stretched-link text-decoration-none"
                        variant="on-dark"
                        @keypress.enter.prevent="featuredPlaceClick(place)"
                    >
                        {{ props.place.label }}
                    </VsLink>
                </VsHeading>
            </div>
        </template>
        <template
            #vs-card-image
            v-if="place.imgSrc"
        >
            <VsImg
                :src="place.imgSrc"
                :use-lazy-loading="false"
                class="vs-map__controls-featured-place-img w-100 rounded-1 object-fit-cover img-zoom-on-hover"
            />
        </template>
    </VsCard>
</template>

<script setup>
import { inject } from 'vue';
import {
    VsCard,
    VsHeading,
    VsImg,
    VsLink,
} from '@/components';

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
    .vs-map__controls {
        &-featured-place {
            &-card {
                height: 10em;
                flex: 0 0 9.25em!important;

                &-heading {
                    z-index: 2;
                    position: relative;
                }
                .vs-card__image {
                    z-index: 1;

                    & img {
                        height: 10em;
                    }
                }
            }
        }
    }
</style>
