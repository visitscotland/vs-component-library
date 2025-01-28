<template>
    <div class="vs-pagination">
        <div class="vs-pagination__count">
            <p>Page: {{ currentPage }} of {{ totalPages }}</p>
        </div>
        <BPagination
            align="center"
            :aria-controls="props.ariaControls"
            class="vs-pagination__controls"
            first-number
            last-number
            limit="5"
            :per-page="props.itemsPerPage"
            pills
            :total-rows="props.numberOfItems"
            v-model="currentPage"
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
    </div>
</template>

<script setup>
/**
 * TODO: style buttons
 * TODO: mobile version
 * TODO: Add tests
 */

import { computed, ref } from 'vue';
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

// Calculate number of pages.
const totalPages = computed(() => Math.ceil(props.numberOfItems / props.itemsPerPage));
</script>

<style lang="scss">
.vs-pagination {
    &__controls {
        .page-item {
            &:not(.disabled) {
                .page-link {
                    @include vs-button-variant(
                        $vs-color-text-primary, $vs-color-background-inverse, $vs-color-border-inverse,
                        $vs-color-text-primary, $vs-color-background-inverse, $vs-color-border-inverse,
                        $vs-color-text-inverse, $vs-color-interaction-cta-primary, $vs-color-border-inverse,
                    );

                    &:hover {
                        text-decoration: underline;
                    }
                }

                &:first-child,
                &:last-child {
                    .page-link,
                    .page-link .vs-icon  {
                        color: $vs-color-interaction-link-primary;
                    }
                }

                &.active .page-link {
                    background-color: $vs-color-interaction-cta-primary;
                    color: $vs-color-text-inverse;
                }
            }

            &.disabled .page-link,
            &.disabled .vs-icon {
                background-color: $vs-color-background-inverse;
                border-color: $vs-color-border-inverse;
                color: $vs-color-text-disabled;
            }
        }

        @include media-breakpoint-down(md) {
            justify-content: space-between !important;

            .page-item:not(:first-child, :last-child) {
                display: none;
            }
        }
    }

    &__count {
        text-align: center;
        width: 100%;

        @include media-breakpoint-up(md) {
            display: none;
        }
    }
}
</style>
