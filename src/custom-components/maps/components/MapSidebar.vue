<template>
    <div
        class="vs-map-sidebar px-125"
        data-test="vs-map-sidebar"
        :class="googleMapStore.sidebarOpen ? 'd-block' : 'd-none'"
        ref="vsMapSidebar"
    >
        <div class="vs-map-sidebar__header d-flex">
            <VsHeading
                v-if="props.headerLabel"
                level="1"
                heading-style="heading-xxs"
                class="flex-grow-1"
                id="vs-map-sidebar__heading"
                data-test="vs-map-sidebar__heading"
            >
                {{ props.headerLabel }}
            </VsHeading>
            <VsButton
                variant="tertiary"
                icon="vs-icon-control-dismiss"
                icon-only
                class="vs-map-sidebar__sidebar-control vs-map-siderbar__sidebar-control--dismiss"
                data-test="vs-map-siderbar__sidebar-control--dismiss"
                @click="googleMapStore.sidebarOpen = false"
            >
                {{ props.closeSidebarButtonLabel }}
            </VsButton>
        </div>
        <div class="vs-map-sidebar__content">
            <div class="vs-map-sidebar__input d-flex mt-100 mb-050">
                <VsInput
                    type="text"
                    autocomplete="off"
                    field-name="vs-map-search-input"
                    data-test="vs-map-search-input"
                    ref="vs-search-input"
                    :placeholder="props.inputPlaceholderLabel"
                    class="vs-map-sidebar__input flex-grow-1"
                    :aria-label="props.searchBarAriaLabel"
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
                    {{ props.searchButtonLabel }}
                </VsButton>
            </div>
            <a
                href="#"
                class="d-block"
                data-test="vs-map-sidebar__reset-map"
                v-if="$props.query || $props.selectedCategories"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                {{ props.clearMapLabel }}
            </a>
            <div
                v-if="$slots['vs-map-sidebar-sub-filters'] && $slots['vs-map-sidebar-sub-filters']()"
                class="vs-map-sidebar__sub-filters-wrapper"
            >
                <VsDetail
                    class="vs-map-sidebar__sub-filter-header"
                    size="small"
                    color="secondary"
                >
                    {{ props.subFilterHeaderLabel }}
                </VsDetail>
                <!-- @Slot for sub filters to be added to sidebar -->
                <slot name="vs-map-sidebar-sub-filters" />
            </div>
            <div class="vs-map-sidebar__search-results">
                <VsHeading
                    level="2"
                    heading-style="heading-xxxs"
                    v-if="$props.query || $props.selectedCategories"
                    data-test="vs-map-sidebar__search-result-query"
                >
                    {{ props.searchResultsLabel }} "{{ props.query || props.selectedCategories }}"
                </VsHeading>
                <div class="vs-map-sidebar__google-maps-container mt-075">
                    <!-- @Slot to contain Google Maps Places
                        UI Kit Search Results/Details components -->
                    <slot name="vs-map-sidebar-search-results" />
                </div>
            </div>
            <VsMapFeaturedLocation
                :featured-places="featuredPlaces"
                class="mb-100"
                :class="($props.query || $props.selectedCategories) ? 'd-none' : 'd-block'"
            />
        </div>
        <div
            class="vs-map-sidebar__footer"
            v-if="$props.query || $props.selectedCategories"
        >
            <hr class="vs-map-sidebar__swipe-tab">
        </div>
    </div>
    <VsButton
        class="vs-map-sidebar__sidebar-control vs-map-sidebar__sidebar-control--open"
        data-test="vs-map-sidebar__sidebar-control--open"
        :class="googleMapStore.sidebarOpen ? 'd-none' : 'd-block'"
        size="sm"
        icon="fa-regular fa-sliders"
        icon-only
        @click="googleMapStore.sidebarOpen = true"
    >
        {{ props.openSidebarButtonLabel }}
    </VsButton>
</template>

<script setup lang="ts">
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
    selectedCategories: {
        type: String,
        default: '',
    },
    /** Label for the sidebar header */
    headerLabel: {
        type: String,
        default: '',
    },
    /** Label for the close sidebar button */
    closeSidebarButtonLabel: {
        type: String,
        default: '',
    },
    /** ARIA Label for the input */
    searchBarAriaLabel: {
        type: String,
        default: '',
    },
    /** Label for the input placeholder text */
    inputPlaceholderLabel: {
        type: String,
        default: '',
    },
    /** Label for the search button */
    searchButtonLabel: {
        type: String,
        default: '',
    },
    /** Label for the clear map link */
    clearMapLabel: {
        type: String,
        default: '',
    },
    /* Label for subfilter header */
    subFilterHeaderLabel: {
        type: String,
        default: '',
    },
    /** Label for the search results text */
    searchResultsLabel: {
        type: String,
        default: '',
    },
    /** Label for the open sidebar button */
    openSidebarButtonLabel: {
        type: String,
        default: '',
    },
    /** JSON data file for featured places */
    featuredPlaces: {
        type: Object,
        default: () => {},
    },
});

defineEmits(['search-input-changed', 'reset-map']);
</script>

<style lang="scss">
.vs-map-sidebar {
    width: 90vw;
    background: $vs-color-background-primary;
    border-radius: $vs-radius-large;
    box-shadow: $vs-elevation-shadow-raised;
    pointer-events: auto;
    max-height: 87.5vh;
    overflow-y: auto;

    @include media-breakpoint-up (sm) {
        width: 23.3rem;
    }

    &__content{
        display: flex;
        flex-direction: column;
    }

    &__input input {
        margin: $vs-spacer-0;
        border-radius: $vs-radius-small $vs-radius-none $vs-radius-none $vs-radius-small;
        border-right: none;
        height: 52px;
        flex: 0 1;
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
            padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-050 $vs-spacer-025 ;
        }

        button {
            flex: 0 0 max-content;
        }
    }

    &__search-results {
        flex: 1 0 max-content;
    }

    &__google-maps-container {
        border-radius: $vs-radius-large;
        max-height: clamp(275px, 20em, 50vh);
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
