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
                @click="handleClick(category.id)"
            >
                {{ category.label }}
            </VsButton>
        </div>

        <div aria-live="polite">
            <VsRow>
                <VsMapFeaturedLocationItem
                    v-for="place in places"
                    :key="place.properties.id"
                    :place="place"
                />
            </VsRow>
        </div>
    </div>
</template>

<script setup>
import {
    inject,
    onMounted,
} from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsRow from '@/components/grid/Row.vue';
import useGoogleMapStore from '@/stores/mainMap.store';
import VsMapFeaturedLocationItem from './MapFeaturedLocationItem.vue';

// Injected from `MainMap.vue`.
const { categories, places } = inject('featuredPlaces');
const addDestinationMarkers = inject('addDestinationMarkers');

const googleMapStore = useGoogleMapStore();

onMounted(() => {
    googleMapStore.selectedDestinationType = categories[0].id;
});

// The button should be secondary unless it is the currently selected destination type.
const setButtonVariant = (id) => (googleMapStore.selectedDestinationType === id ? 'primary' : 'secondary');

// Icons used on the destination type buttons.
const iconMap = {
    cities: 'fa-regular fa-city',
    regions: 'fa-regular fa-map-location-dot',
    islands: 'fa-regular fa-island-tropical',
    towns: 'fa-regular fa-house-chimney-window',
    'national-parks': 'fa-kit fa-vs-icon-national-park',
};

function handleClick(id) {
    googleMapStore.selectedDestinationType = id;
    addDestinationMarkers();
}
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
