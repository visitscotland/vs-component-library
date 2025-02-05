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

        <!-- @slot default slot for the filter sections -->
        <slot />
    </fieldset>
</template>

<script setup>
import VsIcon from '@/components/icon/Icon.vue';

defineEmits(['filter-updated']);

const props = defineProps({
    /**
     * Label for the filter.
     */
    filterLabel: {
        type: String,
        required: true,
    },
});
</script>
