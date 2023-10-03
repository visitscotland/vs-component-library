<template>
    <div
        class="vs-main-map-subcategory"
        data-test="vs-main-map-subcategory"
    >
        <BFormGroup v-slot="{ ariaDescribedby }">
            <BFormCheckboxGroup
                id="checkbox-group-1"
                v-model="selected"
                :aria-describedby="ariaDescribedby"
                :name="data.name"
            >
                <BFormCheckbox
                    v-for="item in data"
                    :key="item.id"
                    :value="item.id"
                    @change="emitChange"
                >
                    <VsMainMapWrapperIcon
                        class="vs-main-map-category__icon"
                        :id="selectedSubCategory"
                    />
                    {{ item.name }}
                </BFormCheckbox>
            </BFormCheckboxGroup>
        </BFormGroup>
    </div>
</template>

<script>
import {
    BFormGroup,
    BFormCheckboxGroup,
    BFormCheckbox,
} from 'bootstrap-vue-next';
import pinia from '@/stores/index.ts';
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store.ts';
import VsMainMapWrapperIcon from '@components/patterns/map-marker-icon/MainMapWrapperIcon.vue';

let mapStore = null;

export default {
    name: 'VsMainMapWrapperSubCategories',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormCheckboxGroup,
        BFormCheckbox,
        VsMainMapWrapperIcon,
    },
    props: {
        /** Data for subcategory */
        data: {
            type: Array,
            required: true,
        },
        selectedSubCategory: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selected: [],
        };
    },
    computed: {
        activeSubcatFilters() {
            if (mapStore) {
                return mapStore.activeSubcatFilters;
            }

            return null;
        },
        ...mapState(useMapStore, {
            activeSubcatFilters(store) {
                return store.activeSubcatFilters;
            },
        }),
    },
    mounted() {
        mapStore = useMapStore(pinia());

        this.selected = this.activeSubcatFilters;

        if (this.emitter) {
            this.emitter.on('clearSelectedSubcats', () => {
                this.selected = [];
            });

            this.emitter.on('submitCheckboxData', () => {
                this.checkboxesChangeSubmit();
            });
        }

        const container = document.getElementsByClassName('vs-main-map-subcategory')[0];
        const firstEl = container.querySelectorAll('input[type="checkbox"]')[0];

        firstEl.focus();
    },
    beforeUnmount() {
        if (this.emitter) {
            this.emitter.off('submitCheckboxData');
        }
    },
    methods: {
        /**
         * Emits data of checkboxes currently selected
         */
        checkboxesChangeSubmit() {
            mapStore.setActiveSubcatFilters(this.selected);
            this.$parent.$emit('subcategories-filtered', this.selected);
        },
        /**
         * Emits change event declaring if any selections have been made
         */
        emitChange(checked) {
            if (checked.length > 0 && this.emitter) {
                this.emitter.emit('checkboxes-selected', true);
            } else {
                this.emitter.emit('checkboxes-selected', false);
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-main-map-subcategory {
        position: relative;

        .form-check {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: $spacer-3 0;
            border-top: 1px solid $color-gray-tint-5;

            &::last-of-type {
                border-bottom: 1px solid $color-gray-tint-5;
            }

            input[type="checkbox"] {
                width: 30px;
                height: 30px;
                border-radius: 8px;
                border: 1px solid $color-gray-tint-5;

                &:checked {
                    background: red;
                }
            }
        }

        .form-check-label {
            font-weight: $font-weight-bold;
            display: flex;
            align-items: center;
        }
    }
</style>
