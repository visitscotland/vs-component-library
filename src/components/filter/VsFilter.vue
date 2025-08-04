<template>
    <div
        class="vs-filter"
        data-test="vs-filter"
        :id="props.filterId"
        ref="filter"
    >
        <div class="vs-filter__panel-wrapper">
            <fieldset
                class="vs-filter__panel"
                data-test="vs-filter__panel"
                @change="(event) => $emit('filter-updated', event)"
            >
                <legend class="vs-filter__legend">
                    <VsIcon
                        icon="vs-icon-control-filters"
                        size="sm"
                    />
                    {{ props.filterLabel }}
                </legend>

                <!-- @slot default slot for the filter sections -->
                <slot />
            </fieldset>
        </div>
    </div>

    <VsWarning
        v-if="$slots['no-js']"
        class="vs-filter__warning"
    >
        <!-- @slot Message to show when JS is disabled  -->
        <slot name="no-js" />
    </VsWarning>
</template>

<script setup>
import { ref } from 'vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsWarning from '@/components/warning/Warning.vue';

const props = defineProps({
    /**
     * ID used to uniquely identify filter.
     */
    filterId: {
        type: String,
        required: true,
    },
    /**
     * Label for the filter panel.
     */
    filterLabel: {
        type: String,
        required: true,
    },
});

defineEmits(['filter-updated']);

const filter = ref();

// Clear the input value.
const clearFilter = (inputField) => {
    const input = inputField;

    if (input.type === 'checkbox') {
        input.checked = false;
    } else if (input.type === 'date') {
        input.value = '';
    }
};

// Reset one filter.
const resetOne = (filterId) => {
    const inputField = filter.value.querySelector(`#${filterId}`);

    clearFilter(inputField);
};

// Reset all the filters.
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

<style lang="scss">
.vs-filter {
    &__panel {
        background-color: $vs-color-background-primary;
        border: solid $vs-border-width-sm $vs-color-border-secondary;
        border-radius: $vs-radius-subtle;
        overflow: auto;
    }

    &__legend {
        align-items: baseline;
        background-color: $vs-color-background-secondary;
        border-bottom:  solid $vs-border-width-sm $vs-color-border-secondary;
        display: flex;
        font-size: $font-size-6;
        font-weight: $vs-font-weight-medium;
        gap: $vs-spacer-050;
        margin-bottom: $vs-spacer-0;
        padding: $vs-spacer-075 $vs-spacer-125;
    }
}

@include no-js {
    .vs-filter {
        display: none;
    }

    .vs-filter__wrapper .vs-warning {
        display: block;
    }
}
</style>
