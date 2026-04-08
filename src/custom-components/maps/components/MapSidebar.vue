<template>
    <div
        class="vs-map-sidebar px-125"
        :class="googleMapStore.sidebarOpen ? 'd-block' : 'd-none'"
        data-test="vs-map-sidebar"
    >
        <div class="vs-map-sidebar__header d-flex">
            <VsHeading
                v-if="props.sidebarLabels.headerLabel"
                class="flex-grow-1"
                data-test="vs-map-sidebar__heading"
                heading-style="heading-xxs"
                id="vs-map-sidebar__heading"
                level="1"
            >
                {{ props.sidebarLabels.headerLabel }}
            </VsHeading>
            <VsButton
                class="vs-map-sidebar__sidebar-control vs-map-siderbar__sidebar-control--dismiss"
                data-test="vs-map-siderbar__sidebar-control--dismiss"
                icon="vs-icon-control-dismiss"
                icon-only
                variant="subtle"
                @click="googleMapStore.sidebarOpen = false"
            >
                {{ props.sidebarLabels.closeSidebarButtonLabel }}
            </VsButton>
        </div>

        <div class="vs-map-sidebar__content">
            <a
                v-if="props.query || props.selectedCategory"
                href="#"
                data-test="vs-map-sidebar__hard-reset-map"
                @click.prevent="$emit('reset-location')"
                @keyup.enter.prevent="$emit('reset-location')"
            >
                {{ props.sidebarLabels.resetLocationLabel }}
            </a>

            <div class="vs-map-sidebar__input d-flex mt-050 mb-050">
                <VsInput
                    :aria-label="props.sidebarLabels.searchBarAriaLabel"
                    autocomplete="off"
                    class="vs-map-sidebar__input flex-grow-1"
                    data-test="vs-map-search-input"
                    field-name="vs-map-search-input"
                    :placeholder="props.sidebarLabels.inputPlaceholderLabel"
                    @keyup.enter.prevent="$emit('search-input-changed')"
                />
                <VsButton
                    class="vs-map-sidebar__search-button"
                    data-test="vs-map-sidebar__search-button"
                    icon="vs-icon-control-search"
                    icon-only
                    :rounded="false"
                    size="lg"
                    @click.prevent="$emit('search-input-changed')"
                    @keyup.enter.prevent="$emit('search-input-changed')"
                >
                    {{ props.sidebarLabels.searchButtonLabel }}
                </VsButton>
            </div>

            <a
                v-if="props.query || props.selectedCategory"
                class="d-block"
                href="#"
                data-test="vs-map-sidebar__reset-map"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                {{ props.sidebarLabels.clearMapLabel }}
            </a>

            <VsMapFeaturedLocation
                v-if="googleMapStore.showDestinations"
                :location-select-label="props.sidebarLabels.locationSelectLabel"
            />

            <div v-if="googleMapStore.showCategories">
                <div class="vs-map__categories">
                    <template
                        v-for="(category, key) in props.categories"
                        :key="key"
                    >
                        <VsButton
                            v-if="!category.cmsData"
                            class="vs-map__filter-controls-button"
                            :icon="setCategoryIcon(category.id)"
                            size="sm"
                            :variant="props.selectedCategory === category.id ? 'primary' : 'secondary'"
                            @click="$emit('category-selected', { id: category.id, key })"
                        >
                            {{ category.label }}
                        </VsButton>
                    </template>
                </div>

                <VsDetail
                    class="vs-map-sidebar__sub-filter-header"
                    color="secondary"
                    size="small"
                >
                    {{ props.sidebarLabels.subFilterHeaderLabel }}
                </VsDetail>

                <div class="vs-map-sidebar__sub-filters">
                    <VsButton
                        v-for="(subcategory, key) in subcategories"
                        :key
                        size="sm"
                        :variant="isSubcategoryActive(subcategory.id)"
                        @click="$emit('subcategory-selected', { id: subcategory.id, key })"
                    >
                        {{ subcategory.label }}
                    </VsButton>
                </div>
            </div>

            <div class="vs-map-sidebar__search-results">
                <VsHeading
                    level="2"
                    heading-style="heading-xxxs"
                    v-if="$props.query || $props.selectedCategory"
                    data-test="vs-map-sidebar__search-result-query"
                >
                    {{ props.sidebarLabels.searchResultsLabel }}
                    "{{ props.query || props.selectedCategory }}"
                </VsHeading>
                <div class="vs-map-sidebar__google-maps-container mt-075">
                    <!-- @Slot to contain Google Maps Places
                        UI Kit Search Results/Details components -->
                    <slot name="vs-map-sidebar-search-results" />
                </div>
            </div>
        </div>
        <div class="vs-map-sidebar__footer">
            <hr class="vs-map-sidebar__swipe-tab">
        </div>
    </div>
    <VsButton
        class="vs-map-sidebar__sidebar-control vs-map-sidebar__sidebar-control--open"
        :class="googleMapStore.sidebarOpen ? 'd-none' : 'd-block'"
        data-test="vs-map-sidebar__sidebar-control--open"
        size="sm"
        icon="fa-regular fa-sliders"
        icon-only
        @click="googleMapStore.sidebarOpen = true"
    >
        {{ props.sidebarLabels.openSidebarButtonLabel }}
    </VsButton>
</template>

<script setup>
import { computed } from 'vue';

import VsButton from '@/components/button/Button.vue';
import VsDetail from '@/components/detail/Detail.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsInput from '@/components/input/Input.vue';

import useGoogleMapStore from '@/stores/mainMap.store';
import VsMapFeaturedLocation from './MapFeaturedLocation.vue';

const googleMapStore = useGoogleMapStore();

const props = defineProps({
    /** Text query from Map Search */
    query: {
        type: String,
        default: '',
    },
    /** Selected Top Level Category */
    selectedCategory: {
        type: String,
        default: '',
    },
    /** Selected sub categories */
    selectedSubcategories: {
        type: Object,
        default: undefined,
    },
    /** Labels for the sidebar */
    sidebarLabels: {
        type: Object,
        required: true,
    },
    /** Label and id for the category buttons. */
    categories: {
        type: Object,
        required: true,
    },
    /** Icon data for the category buttons. */
    categoryData: {
        type: Object,
        default: () => {},
    },
});

defineEmits([
    'category-selected',
    'reset-location',
    'reset-map',
    'search-input-changed',
    'subcategory-selected',
]);

// Set the subcategories for the selected category.
const subcategories = computed(() => {
    if (!props.selectedCategory) return null;

    const categoryData = props.categories.find((cat) => cat.id === props.selectedCategory);
    return categoryData.subCategory;
});

// Check if subcategory button should be active.
function isSubcategoryActive(id) {
    return Array.from(props.selectedSubcategories).includes(id) ? 'primary' : 'secondary';
}

function setCategoryIcon(id) {
    if (!props.categoryData) return null;

    const categoryInfo = props.categoryData[id];

    if (!categoryInfo) return null;

    return categoryInfo.icon;
}
</script>

<style lang="scss">
.vs-map-sidebar {
    width: 90vw;
    background: $vs-color-background-primary;
    border-radius: $vs-radius-large;
    box-shadow: $vs-elevation-shadow-raised;
    pointer-events: auto;
    max-height: 87.5vh;
    overflow: hidden;

    @include media-breakpoint-up (sm) {
        width: 23.3rem;
    }

    &__input input {
        margin: $vs-spacer-0;
        border-radius: $vs-radius-small $vs-radius-none $vs-radius-none $vs-radius-small;
        border-right: none;
        height: 52px;
    }

    &__search-button {
        flex-grow: 0.125;
        border-radius: $vs-radius-none $vs-radius-small $vs-radius-small $vs-radius-none;
    }

    &__sub-filters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: $vs-spacer-025;
        row-gap: $vs-spacer-025;
        flex: 0 1;

        @include media-breakpoint-down(md) {
            width: 100%;
            flex-wrap: nowrap;
            align-items: start;
            @include scrollsnap-styles;
            pointer-events: all;
            column-gap: $vs-spacer-050;
            padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-075 $vs-spacer-025 ;
        }

        button {
            flex: 0 0 max-content;
        }
    }

    &__google-maps-container {
        max-height: clamp(275px, 20em, 32vh);
        overflow-y: scroll;
    }

    &__swipe-tab {
        width: $vs-spacer-300;
        height: $vs-border-width-sm;
        border: $vs-color-border-highlight solid 0.15em;
        border-radius: $vs-radius-full;
        margin: $vs-spacer-100 auto;
    }

    &__sidebar-control {
        @include media-breakpoint-up(md) {
            display: none;
        }

        &--open {
            pointer-events: auto;
        }
    }
}
</style>
