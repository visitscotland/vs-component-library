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
                        name="filters"
                        orientation="left"
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
        border: solid 1px $vs-color-border-secondary;
        border-radius: $border-radius-default;
        overflow: auto;
    }

    &__legend {
        align-items: baseline;
        background-color: $vs-color-background-secondary;
        border-bottom:  solid 1px $vs-color-border-secondary;
        display: flex;
        font-size: $font-size-6;
        font-weight: $font_weight_semi_bold;
        gap: $spacer-050;
        margin-bottom: $spacer-0;
        padding: $spacer-075 $spacer-125;
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
