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
                />
                <span class="category-title">{{ featuredPlaceTitles[key].label }}</span>
            </template>
            <div class="vs-map-featured-location__accordion-content p-075">
                <VsCardGroup
                    cards-per-row="3"
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
        <!-- <VsCard>
            <template #vs-card-body>
                <p v-for="(location, locKey) in featuredCategory" :key="locKey">
                    {{ location.label }}
                </p>
            </template>
        </VsCard> -->
        <!-- <VsMapFeaturedLocationItem
            v-for="(location, locKey) in featuredCategory"
            :key="locKey"
        /> -->
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
</style>
