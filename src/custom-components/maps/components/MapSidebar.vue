<template>
    <div
        class="vs-map-sidebar px-125"
        :class="googleMapStore.sidebarOpen ? 'd-block' : 'd-none'"
        ref="vsMapSidebar"
    >
        <div class="vs-map-sidebar__header d-flex">
            <VsHeading
                level="1"
                heading-style="heading-xxs"
                class="flex-grow-1"
                v-if="props.headerLabel"
            >
                {{ props.headerLabel }}
            </VsHeading>
            <VsButton
                variant="tertiary"
                icon="vs-icon-control-dismiss"
                icon-only
                class="vs-map-sidebar__sidebar-control vs-map-siderbar__sidebar-control--dismiss"
                @click="googleMapStore.sidebarOpen = false"
            >
                {{ props.closeSidebarButtonLabel }}
            </VsButton>
        </div>
        <div class="vs-map-sidebar__content">
            <div class="vs-map-sidebar__input d-flex mt-100 mb-050">
                <VsInput
                    type="text"
                    autocomplete="false"
                    field-name="vs-map-search-input"
                    ref="vs-search-input"
                    :placeholder="props.inputPlaceholderLabel"
                    class="vs-map-sidebar__input flex-grow-1"
                    @keyup.enter.prevent="$emit('search-input-changed')"
                />
                <VsButton
                    class="vs-map-sidebar__search-button"
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
            <VsLink
                href="#"
                class="d-block"
                v-if="$props.query || $props.selectedCategories"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                {{ props.clearMapLabel }}
            </VsLink>
            <div
                v-if="$slots['vs-map-sidebar-sub-filters'] && $slots['vs-map-sidebar-sub-filters']()"
                class="vs-map-sidebar__sub-filters-wrapper"
            >
                <VsDetail
                    class="vs-map-sidebar__sub-filter-header"
                    size="small"
                    color="secondary"
                >
                    Filter your results
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
                    {{ props.searchResultsLabel }} "{{ $props.query || $props.selectedCategories }}"
                </VsHeading>
                <div class="vs-map-sidebar__google-maps-container mt-075">
                    <!-- @Slot to contain Google Maps Places
                        UI Kit Search Results/Details components -->
                    <slot name="vs-map-sidebar-search-results" />
                </div>
            </div>
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
import VsLink from '@/components/link/Link.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsInput from '@/components/input/Input.vue';

import useGoogleMapStore from '@/stores/mainMap.store';

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
    max-height: 90vh;

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

        @include media-breakpoint-down(md) {
            width: 100%;
            flex-wrap: nowrap;
            overflow-x: scroll;
            scroll-snap-type: mandatory x;
            align-items: start;
            @include scrollsnap-styles;
            column-gap: $vs-spacer-050;
            padding: $vs-spacer-025 $vs-spacer-025 $vs-spacer-050 $vs-spacer-025 ;
        }

        button {
            flex: 0 0 max-content;
        }
    }

    &__google-maps-container {
        max-height: 20em;
        overflow-y: auto;
        border-radius: $vs-radius-large;
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
