<template>
    <div
        class="vs-map-sidebar px-125"
        ref="vsMapSidebar"
    >
        <div class="vs-map-sidebar__header d-flex">
            <VsHeading
                level="2"
                heading-style="heading-xxs"
                class="mb-100 flex-grow-1"
            >
                Discover your Scotland
            </VsHeading>
            <VsButton
                variant="tertiary"
                icon="vs-icon-control-dismiss"
                icon-only
                class="vs-map-sidebar__sidebar-control vs-map-siderbar__sidebar-control--dismiss"
                @click="toggleSidebar"
            >
                Close sidebar
            </VsButton>
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
                v-if="$props.query || $props.selectedCategories.size >= 1"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                Clear all
            </VsLink>
            <div class="vs-map-sidebar__search-results">
                <VsHeading
                    level="3"
                    heading-style="heading-xxxs"
                    v-if="$props.query || $props.selectedCategories.size >= 1"
                >
                    Search results for "{{ $props.query || Array.from($props.selectedCategories).join(',') }}"
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
            v-if="$props.query || $props.selectedCategories.size >= 1"
        >
            <hr class="vs-map-sidebar__swipe-tab">
        </div>
    </div>
    <VsButton
        v-if="vsMapSidebarControlOpenVisible"
        class="vs-map-sidebar__sidebar-control vs-map-sidebar__sidebar-control--open"
        size="sm"
        icon="fa-regular fa-sliders"
        icon-only
        @click="toggleSidebar"
    >
        Open Sidebar
    </VsButton>
</template>

<script setup lang="ts">
import {
    VsButton,
    VsHeading,
    VsInput,
    VsLink,
} from '@/components';

import { defineExpose, ref } from 'vue';

const vsMapSidebar = ref < HTMLElement > (null);
const vsMapSidebarControlOpenVisible = ref<Boolean>(null);

const props = defineProps({
    query: {
        type: String,
        default: '',
    },
    selectedCategories: {
        type: Set,
        default: new Set(),
    },
});

defineEmits(['search-input-changed', 'reset-map']);

function toggleSidebar() {
    if (vsMapSidebar.value.classList.contains('d-none')) {
        // Opens Sidebar
        vsMapSidebar.value.classList.remove('d-none');
        vsMapSidebar.value.classList.add('d-block');

        // Removes sidebar toggle button
        vsMapSidebarControlOpenVisible.value = false;
    } else {
        // Closes Sidebar
        vsMapSidebar.value.classList.add('d-none');

        // Adds sidebar toggle button
        vsMapSidebarControlOpenVisible.value = true;
    }
}
</script>

<style lang="scss">
.vs-map-sidebar {
    width: 23.3rem;
    background: $vs-color-background-primary;
    border-radius: $vs-radius-large;
    box-shadow: $vs-elevation-shadow-raised;
    pointer-events: auto;

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

    &__google-maps-container {
        max-height: 60vh;
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
