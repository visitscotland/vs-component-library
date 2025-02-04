<template>
    <VsButton
        id="toggle-btn"
        icon="filters"
        class="vs-filter__toggle"
        ref="btnShow"
        variant="secondary"
        @click="emitter.emit('showModal', 'c05sg3G4oA4')"
    >
        Filter
    </VsButton>

    <VsModal
        modal-id="c05sg3G4oA4"
        close-btn-text="Close"
    >
        <slot />
    </VsModal>

    <div class="vs-filter__panel">
        <slot />
    </div>
</template>

<script setup>

/**
 * TODO: Filter button label
 * TODO: Comment code.
 * TODO: Unit tests for each component
 * TODO: Remove VsDetails component
 * TODO: Unit test for small checkbox
 * TODO: Tidy code.
 * TODO: Selected filter buttons
 * TODO: Clear all button.
 * TODO: Export all filter components.
 * TODO: Style mobile version.
 * TODO: Add mobile story.
 */
import { ref } from 'vue';
import VsButton from '@/components/button/Button.vue';
import VsModal from '@/components/modal/Modal.vue';

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

    &__toggle.vs-button {
        @include media-breakpoint-up(sm) {
            display: none;
        }
    }

    &__panel {
        @include media-breakpoint-down(sm) {
            display: none;
        }
    }

    .vs-details-wrapper {
        border-width: 0;

        &:not(:last-child) {
            border-bottom: solid 1px $vs-color-border-secondary;
        }
    }
}
</style>
