<template>
    <VsAccordion v-if="categories && places">
        <VsAccordionItem
            v-for="(category, index) in categories"
            :key="index"
            :control-id="category.id"
            :open-by-default="category.id === 'cities'"
        >
            <template #title>
                <VsIcon
                    class="me-025 fa-fw"
                    custom-colour="#200F2E"
                    :icon="setIcon(category.id)"
                    size="sm"
                    variant="highlight"
                />
                <span class="category-title">{{ category.label }}</span>
            </template>

            <div class="vs-map__controls-featured-place-accordion-content p-075">
                <VsCardGroup scroll-snap="always">
                    <template v-for="place in places">
                        <VsMapFeaturedLocationItem
                            v-if="place.properties.category.id === category.id"
                            :key="place.properties.id"
                            :place="place"
                        />
                    </template>
                </VsCardGroup>
            </div>
        </VsAccordionItem>
    </VsAccordion>
</template>

<script setup>
import { inject } from 'vue';
import VsAccordion from '@/components/accordion/Accordion.vue';
import VsAccordionItem from '@/components/accordion/components/AccordionItem.vue';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsMapFeaturedLocationItem from './MapFeaturedLocationItem.vue';

const { categories, places } = inject('featuredPlaces');

function setIcon(id) {
    switch (id) {
    case 'cities':
        return 'fa-regular fa-city';
    case 'regions':
        return 'fa-regular fa-map-location-dot';
    case 'islands':
        return 'fa-regular fa-island-tropical';
    case 'towns':
        return 'fa-regular fa-house-chimney-window';
    default:
        return null;
    };
}
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
