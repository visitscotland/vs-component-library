<template>
    <div
        class="vs-filter"
        data-test="vs-filter"
    >
        <VsButton
            class="vs-filter__toggle"
            icon="filters"
            id="toggle-btn"
            ref="btnShow"
            variant="secondary"
            @click="emitter.emit('showModal', props.filterId)"
        >
            {{ props.filterButtonText }}
        </VsButton>

        <VsModal
            close-btn-text="Close"
            :modal-id="props.filterId"
        >
            <!-- @slot default slot for the filter panel -->
            <slot />

            <VsButton
                class="vs-filter__apply"
                @click="emitter.emit('hideModal')"
            >
                {{ props.applyButtonText }}
            </VsButton>
        </VsModal>

        <!-- @slot default slot for the filter panel -->
        <slot />
    </div>
</template>

<script setup>
import VsButton from '@/components/button/Button.vue';
import VsModal from '@/components/modal/Modal.vue';
import { inject, onMounted } from 'vue';

const emitter = inject('emitter');

const props = defineProps({
    /**
     * Button text for apply button, shown on mobile.
     */
    applyButtonText: {
        type: String,
        required: true,
    },
    /**
     * Button text for filter open button, shown on mobile.
     */
    filterButtonText: {
        type: String,
        required: true,
    },
    /**
     * ID used to uniquely identify filter.
     */
    filterId: {
        type: String,
        required: true,
    },
});

onMounted(() => {
    // Close the modal when the screen is resized.
    window.addEventListener('resize', () => {
        emitter.emit('hideModal');
    });
});
</script>

<style lang="scss">
.vs-filter {
    &__panel:not(.vs-modal .vs-filter__panel) {
        background-color: $vs-color-background-primary;
        border: solid 1px $vs-color-border-secondary;
        border-radius: $border-radius-default;
        overflow: auto;

        @include media-breakpoint-down(sm) {
            display: none;
        }
    }

    &__legend {
        align-items: baseline;
        background-color: $vs-color-background-secondary;
        border-bottom:  solid 1px $vs-color-border-secondary;
        display: flex;
        font-size: $font-size-6;
        font-weight: 600;
        gap: 8px;
        margin-bottom: $spacer-0;
        padding: $spacer-075 $spacer-125;
    }

    &__toggle,
    &__apply {
        margin: $spacer-300 $spacer-0;
        width: 100%;
    }

    &__toggle.vs-button {
        @include media-breakpoint-up(sm) {
            display: none;
        }
    }
}

.vs-modal .vs-filter {
    &__legend {
        background-color: $vs-color-background-inverse;
    }
}
</style>
