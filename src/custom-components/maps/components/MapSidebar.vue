<template>
    <div class="vs-map-sidebar px-125">
        <div class="vs-map-sidebar__header">
            <VsHeading
                level="2"
                heading-style="heading-xxs"
                class="mb-100"
            >
                Discover your Scotland
            </VsHeading>
        </div>
        <div class="vs-map-sidebar__content">
            <div class="vs-map-sidebar__input d-flex mb-050">
                <VsInput
                    type="text"
                    autocomplete="false"
                    field-name="vs-map-search-input"
                    ref="vs-search-input"
                    placeholder="Type in a keyword"
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
                    Search
                </VsButton>
            </div>
            <VsLink
                href="#"
                class="d-block"
                v-if="$props.query || $props.selectedCategories"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                Clear all
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
                    level="3"
                    heading-style="heading-xxxs"
                    v-if="$props.query || $props.selectedCategories"
                >
                    Search results for "{{ $props.query || $props.selectedCategories }}"
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
            <hr class="vs-map-sidebar__swipe-tab" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    VsButton,
    VsDetail,
    VsHeading,
    VsInput,
    VsLink,
} from '@/components';

import { defineEmits } from 'vue';

const props = defineProps({
    query: {
        type: String,
        default: '',
    },
    selectedCategories: {
        type: String,
        default: '',
    },
});

defineEmits(['search-input-changed', 'reset-map']);
</script>

<style lang="scss">
.vs-map-sidebar {
    width: 23.3rem;
    background: $vs-color-background-primary;
    border-radius: $vs-radius-large;
    box-shadow: $vs-elevation-shadow-raised;
    pointer-events: auto;
    max-height: 90vh;

    &__input input {
        margin: 0;
        border-radius: $vs-radius-small 0 0 $vs-radius-small;
        border-right: none;
        height: 52px;
    }

    &__search-button {
        flex-grow: 0.125;
        border-radius: 0 $vs-radius-small $vs-radius-small 0;
    }

    &__sub-filters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 0.25em;
        row-gap: 0.25em;

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
        width: 3em;
        height: 1px;
        border: $vs-color-border-highlight solid 0.15em;
        border-radius: $vs-radius-full;
        margin: 1em auto;
    }
}
</style>
