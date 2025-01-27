<template>
    <BPagination
        class="vs-pagination"
        v-model="currentPage"
        :aria-controls="props.ariaControls"
        :total-rows="props.numberOfItems"
        :per-page="props.itemsPerPage"
        limit="5"
        first-number
        last-number
        pills
        @page-click="(event, page) => $emit('pageClick', page)"
    >
        <template #prev-text>
            <VsIcon
                name="internal-link-back"
                size="xs"
            />
            {{ props.previousButtonLabel }}
        </template>

        <template #next-text>
            {{ props.nextButtonLabel }}
            <VsIcon
                name="internal-link"
                size="xs"
            />
        </template>
    </BPagination>
</template>

<script setup>
/**
 * TODO: style buttons
 * TODO: mobile version
 * TODO: Add tests
 */

import { ref } from 'vue';
import { BPagination } from 'bootstrap-vue-next';
import VsIcon from '@/components/icon/Icon.vue';

const props = defineProps({
    /**
     * ID of element being controlled by this pagination component.
     */
    ariaControls: {
        type: String,
        default: undefined,
    },
    /**
     * The number of items displayed per page.
     * Used to calculate number of pages.
    */
    itemsPerPage: {
        type: Number,
        required: true,
    },
    /**
     * Label for the next button.
     */
    nextButtonLabel: {
        type: String,
        required: true,
    },
    /**
     * The total number of items.
     * Used to calculate number of pages.
    */
    numberOfItems: {
        type: Number,
        required: true,
    },
    /**
     * Label for the previous button.
     */
    previousButtonLabel: {
        type: String,
        required: true,
    },
});

defineEmits(['pageClick']);

// Track current page number.
const currentPage = ref(1);
</script>

<style lang="scss">
// .vs-pagination {

// }
</style>
