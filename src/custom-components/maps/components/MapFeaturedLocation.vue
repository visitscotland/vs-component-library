<template>
    <VsAccordion>
        <VsAccordionItem
            v-for="(featuredCategory, key) in props.featuredPlaces"
            :key
            :open-by-default="key === 'cities'"
        >
            <template #title>
                <VsIcon
                    :icon="featuredPlaceTitles[key].icon"
                    variant="highlight"
                    size="sm"
                    class="me-025 fa-fw"
                    custom-colour="#200F2E"
                />
                <span class="category-title">{{ featuredPlaceTitles[key].label }}</span>
            </template>
            <div class="vs-map__controls-featured-place-accordion-content p-075">
                <VsCardGroup
                    scroll-snap="always"
                >
                    <VsMapFeaturedLocationItem
                        v-for="(location, locKey) in featuredCategory"
                        :key="locKey"
                        :place="location"
                    />
                </VsCardGroup>
            </div>
        </VsAccordionItem>
    </VsAccordion>
</template>

<script setup>
import {
    VsAccordion,
    VsAccordionItem,
    VsIcon,
    VsCardGroup,
} from '@/components';
import VsMapFeaturedLocationItem from './MapFeaturedLocationItem.vue';

const props = defineProps({
    /** JSON data file for featured places */
    featuredPlaces: {
        type: Object,
        default: () => {},
    },
});

const featuredPlaceTitles = {
    cities: {
        label: 'Cities',
        icon: 'fa-regular fa-city',
    },
    regions: {
        label: 'Regions',
        icon: 'fa-regular fa-map-location-dot',
    },
    islands: {
        label: 'Islands',
        icon: 'fa-regular fa-island-tropical',
    },
    towns: {
        label: 'Towns',
        icon: 'fa-kit fa-vs-landscape',
    },
};
</script>

<style lang="scss">
    .category-title {
        text-transform: capitalize;
    }

    .vs-map__controls-featured-place {
        &-accordion-content {
            .vs-card-group {
                column-gap: $vs-spacer-050;
            }
        }

    }
</style>
