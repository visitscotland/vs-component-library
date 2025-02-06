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

// Clear the input value.
const clearFilter = (inputField) => {
    const input = inputField;

    if (input.type === 'checkbox') {
        input.checked = false;
    } else if (input.type === 'date') {
        input.value = '';
    }
};

// Reset one filter
const resetOne = (filterId) => {
    const inputField = filter.value.querySelector(`#${filterId}`);

    clearFilter(inputField);
};

// reset all the filters
const resetAll = () => {
    const inputFields = filter.value.querySelectorAll('input[type="checkbox"], input[type="date"]');

    inputFields.forEach((input) => {
        clearFilter(input);
    });
};

// Expose functions so that they be called from a parent component.
defineExpose({
    clearFilter,
    resetAll,
    resetOne,
});
</script>
