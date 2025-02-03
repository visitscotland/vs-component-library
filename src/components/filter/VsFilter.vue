<template>
    <fieldset
        class="vs-filter"
        ref="filter"
        @change="(event) => $emit('filter-updated', event)"
    >
        <legend class="vs-filter__legend">
            <VsIcon
                name="filters"
                orientation="left"
            />
            {{ props.filterLabel }}
        </legend>

        <!-- @slot default slot for the filter items -->
        <slot />
    </fieldset>
</template>

<script setup>
import { ref } from 'vue';
import VsIcon from '@/components/icon/Icon.vue';

const props = defineProps({
    /**
     * Label for the filter.
     */
    filterLabel: {
        type: String,
        required: true,
    },
});

defineEmits(['filter-updated']);

// Create a reference for this component.
const filter = ref(null);

// Uncheck an individual filter.
const clearFilter = (filterId) => {
    const filterInput = filter.value.getElementById(filterId);
    filterInput.checked = false;
};

// reset all the filters
const reset = () => {
    const filterInputs = filter.value.querySelectorAll('input[type="checkbox"], input[type="date"]');

    filterInputs.forEach((input) => {
        const filterInput = input;
        filterInput.checked = false;
    });
};

// Expose functions so that they be called from a parent component.
defineExpose({
    clearFilter,
    reset,
});
</script>

<style lang="scss">
.vs-filter {
    border: solid 1px $vs-color-border-secondary;
    border-radius: $border-radius-default;
    overflow: auto;
    background-color: $vs-color-background-primary;

    &__legend {
        display: flex;
        align-items: baseline;
        gap: 8px;
        background-color: $vs-color-background-secondary;
        padding: $spacer-075 $spacer-125;
        border-bottom:  solid 1px $vs-color-border-secondary;
        font-weight: 600;
        font-size: $font-size-6;
        margin-bottom: $spacer-0;
    }

    .vs-details-wrapper {
        border-width: 0;

        &:not(:last-child) {
            border-bottom: solid 1px $vs-color-border-secondary;
        }
    }

    .vs-list:not(.vs-details .vs-list) {
        border-bottom: solid 1px $vs-color-border-secondary;
        padding: $spacer-075 $spacer-125;
    }
}
</style>
