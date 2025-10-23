<template>
    <VsCard
        card-style="elevated"
        class="vs-map-sidebar px-125"
        fill-color="#fff"
    >
        <template #vs-card-header>
            <VsHeading
                level="2"
                heading-style="heading-xxs"
                class="mb-100"
            >
                Discover your Scotland
            </VsHeading>
        </template>
        <template #vs-card-body>
            <div class="vs-map-sidebar--input d-inline-flex mb-050">
                <VsInput
                    type="text"
                    autocomplete="false"
                    field-name="vs-map-search-input"
                    ref="vs-search-input"
                    placeholder="Type in a keyword"
                    class="vs-map-sidebar--input flex-grow-1"
                    @keyup.enter.prevent="$emit('search-input-changed');"
                />
                <VsButton
                    class="vs-map-sidebar--search-button"
                    icon="vs-icon-control-search"
                    icon-only
                    :rounded="false"
                    size="lg"
                    @click.prevent="$emit('search-input-changed');"
                    @keyup.enter.prevent="$emit('search-input-changed');"
                >
                    Search
                </VsButton>
            </div>
            <VsLink
                href="#"
                v-if="$props.query"
                @click.prevent="$emit('reset-map')"
                @keyup.enter.prevent="$emit('reset-map')"
            >
                Clear all
            </VsLink>
            <div
                class="vs-map-sidebar--search-results"
            >
                <VsHeading
                    level="3"
                    heading-style="heading-xxxs"
                    v-if="$props.query"
                >
                    Search results for "{{ $props.query }}"
                </VsHeading>
                <div class="vs-map-sidebar--google-maps-container mt-075">
                    <!-- @Slot to contain Google Maps Places
                        UI Kit Search Results/Details components -->
                    <slot name="vs-map-sidebar-search-results" />
                </div>
            </div>
        </template>
        <template #vs-card-footer v-if="$props.query">
            <hr class="vs-map-sidebar--swipe-tab">
        </template>
    </VsCard>
</template>

<script setup lang="ts">
import {
    VsButton,
    VsCard,
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
});

defineEmits([
    'search-input-changed',
    'reset-map',
]);
</script>

<style lang="scss">
.vs-map-sidebar {
    width: 23.3rem;
    position: absolute;
    top: 1em;
    left: 1em;
    z-index: 100;
    border-radius: $vs-radius-large;
    //overflow-y: auto;

    &--input input {
        margin: 0;
        border-radius: $vs-radius-small 0 0 $vs-radius-small;
        border-right: none;
    };

    &--search-button {
        flex-grow: 0.125;
        border-radius: 0 $vs-radius-small $vs-radius-small 0;
    }

    &--google-maps-container {
        max-height: 60vh;
        overflow-y: auto;
        border-radius: $vs-radius-large;
    }

    hr{
        width: 3em;
        height: 1px;
        border: $vs-color-border-highlight solid 0.15em;
        border-radius: $vs-radius-full;
        margin: 1em auto;
    }
}
</style>
