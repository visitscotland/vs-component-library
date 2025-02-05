<template>
    <div
        class="vs-filter"
        data-test="vs-filter"
    >
        <VsButton
            id="toggle-btn"
            icon="filters"
            class="vs-filter__toggle"
            ref="btnShow"
            variant="secondary"
            @click="emitter.emit('showModal', 'c05sg3G4oA4')"
        >
            {{ props.filterButtonText }}
        </VsButton>

        <VsModal
            modal-id="c05sg3G4oA4"
            close-btn-text="Close"
        >
            <!-- @slot default slot for the filter panel -->
            <slot />
        </VsModal>

        <div class="vs-filter__panel">
            <!-- @slot default slot for the filter panel -->
            <slot />
        </div>
    </div>
</template>

<script setup>

/**
 * TODO: Comment code.
 * TODO: Tidy code.
 * TODO: Unit tests for each component
 * TODO: Selected filter buttons
 * TODO: Clear all button.
 * TODO: Style mobile version.
 */
import VsButton from '@/components/button/Button.vue';
import VsModal from '@/components/modal/Modal.vue';

const props = defineProps({
    filterButtonText: {
        type: String,
        required: true,
    },
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
