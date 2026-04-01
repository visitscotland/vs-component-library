<template>
    <div class="mb-100">
        <VsDetail
            color="secondary"
            size="small"
        >
            <!-- TODO: Replace this with a new label -->
            Refine your results by location
        </VsDetail>
        <div class="vs-map__destination-types">
            <VsButton
                v-for="category in categories"
                :key="category.id"
                :icon="iconMap[category.id]"
                size="sm"
                :variant="setButtonVariant(category.id)"
                @click="selectedDestinationType = category.id"
            >
                {{ category.label }}
            </VsButton>
        </div>

        <div aria-live="polite">
            <VsCardGroup :cards-per-row="2">
                <VsMapFeaturedLocationItem
                    v-for="place in filteredPlaces"
                    :key="place.properties.id"
                    :place="place"
                />
            </VsCardGroup>
        </div>
    </div>
</template>

<script setup>
import {
    computed,
    inject,
    ref,
} from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsCardGroup from '@/components/card-group/CardGroup.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsMapFeaturedLocationItem from './MapFeaturedLocationItem.vue';

// Injected from `MainMap.vue`.
const { categories, places } = inject('featuredPlaces');

const selectedDestinationType = ref(categories[0].id);

// Filter the places data to only show those place that match the selected destination type.
const filteredPlaces = computed(() => (
    places.filter((place) => place.properties.category.id === selectedDestinationType.value)
));

// The button should be secondary unless it is the currently selected destination type.
const setButtonVariant = (id) => (selectedDestinationType.value === id ? 'primary' : 'secondary');

// Icons used on the destination type buttons.
const iconMap = {
    cities: 'fa-regular fa-city',
    regions: 'fa-regular fa-map-location-dot',
    islands: 'fa-regular fa-island-tropical',
    towns: 'fa-regular fa-house-chimney-window',
    'national-parks': 'fa-kit fa-vs-icon-national-park',
};
</script>

<style lang="scss">
.vs-map__categories,
.vs-map__destination-types {
    @include scrollsnap-styles;

    column-gap: $vs-spacer-050;
    margin-bottom: $vs-spacer-100;
    pointer-events: all;
    padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-075;

    .vs-button {
        flex: 0 0 max-content;
    }
}
</style>
