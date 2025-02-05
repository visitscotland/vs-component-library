<template>
    <fieldset
        class="vs-filter__panel"
        data-test="vs-filter__panel"
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

        <!-- @slot default slot for the filter sections -->
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
