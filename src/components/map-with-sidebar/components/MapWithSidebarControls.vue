<template>
    <div
        class="vs-main-map-controls"
        data-test="vs-main-map-controls"
    >
        <VsButton
            class="vs-main-map-controls__clear-selection"
            data-test="vs-main-map-subcategory__clear-selection"
            size="sm"
            variant="transparent"
            @click="clearSelection"
            @keyup.enter="clearSelection"
        >
            {{ clearSelectionText }}
        </VsButton>
        <VsButton
            class="vs-main-map-controls__apply-filters"
            data-test="vs-main-map-subcategory__apply-filters"
            size="sm"
            @keypress.enter="submitCheckboxes"
            @click="submitCheckboxes"
            :aria-disabled="isDisabled"
            :disabled="isDisabled"
        >
            {{ applyFiltersText }}
        </VsButton>
    </div>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';

export default {
    name: 'VsMapWithSidebarControls',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    inject: [
        'clearSelectionText',
        'applyFiltersText',
    ],
    data() {
        return {
            isDisabled: true,
        };
    },
    computed: {
        ...mapState(useMapStore, {
            getSubcatFilters(store) {
                return store.activeSubcatFilters;
            },
        }),
    },
    mounted() {
        this.disableSubmitButton();
    },
    methods: {
        /**
         * Clears all selected checkboxes
         */
        clearSelection() {
            if (this.emitter) {
                this.emitter.emit('clearSelectedSubcats');
            }

            this.isDisabled = true;
        },
        /**
         * Emits instuction to submit data
         */
        submitCheckboxes() {
            if (this.emitter) {
                this.emitter.emit('submitCheckboxData');
            }
        },
        disableSubmitButton() {
            if (this.emitter) {
                this.emitter.on('checkboxes-selected', (val) => {
                    if (val.length > 0) {
                        this.isDisabled = false;
                    } else {
                        this.isDisabled = true;
                    }
                });
            }

            if (this.getSubcatFilters.length > 0) {
                this.isDisabled = false;
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-main-map-controls {
            position: sticky;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 75px;
            border-top: $color-gray-tint-4 solid 1px;
            background: $color-white;
            width: calc(100% + #{$spacer-8});
            margin-top: auto;
            margin-left: -#{$spacer-4};

            &__clear-selection.vs-button.btn-transparent {
                color: $color-pink;
            }
        }
</style>
