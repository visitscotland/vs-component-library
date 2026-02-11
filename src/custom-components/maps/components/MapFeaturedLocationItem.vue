<template>
    <!-- <VsCard>
        <template #vs-card-header>
            <VsImg
                :src="place.imgSrc"
                :use-lazy-loading="false"
            />
        </template>
        <template #vs-card-body>
            <VsHeading
                heading-style="heading-xxxs"
                level="3"
            >
                {{ place.label }}
            </VsHeading>
        </template>
    </VsCard> -->
    <VsCard
        card-style="overlay"
        class="vs-map__controls-featured-place-card"
    >
        <template #vs-card-footer>
            <div class="px-125 pb-125">
                <VsHeading
                    level="3"
                    no-margins
                    heading-style="heading-xxxs"
                >
                    <VsLink
                        href="#"
                        class="stretched-link text-decoration-none"
                        variant="on-dark"
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
                class="vs-map__controls-featured-place-img w-100 rounded-1 object-fit-cover img-zoom-on-hover"
            />
        </template>
    </VsCard>
</template>

<script setup>
import {
    VsCard,
    VsHeading,
    VsImg,
} from '@/components';

const props = defineProps({
    place: {
        type: Object,
        default: () => {},
    },
});

</script>

<style lang="scss">
    .vs-map__controls {
        &-featured-place {
            flex: 0 0 8.5em;
            &-card {
                height: 10em;
            }
        }
    }
</style>
