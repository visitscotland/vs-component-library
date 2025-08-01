<template>
    <div
        class="vs-main-map-subcategory"
        data-test="vs-main-map-subcategory"
    >
        <BFormGroup>
            <BFormCheckboxGroup
                id="checkbox-group-1"
                v-model="selected"
                :name="data.name"
            >
                <BFormCheckbox
                    v-for="item in data"
                    :key="item.id"
                    :value="item.id"
                    @change="emitChange"
                >
                    <VsMapMarkerIcon
                        class="vs-main-map-subcategory__icon"
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
import { mapState } from 'pinia';
import useMapStore from '@/stores/map.store';
import VsMapMarkerIcon from '@/components/map-marker-icon/MapMarkerIcon.vue';

let mapStore = null;

export default {
    name: 'VsMapWithSidebarSubCategories',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormCheckboxGroup,
        BFormCheckbox,
        VsMapMarkerIcon,
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
        mapStore = useMapStore();

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

        if (container) {
            const firstEl = container.querySelectorAll('input[type="checkbox"]')[0];
            firstEl.focus();
        }
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
        emitChange() {
            if (this.emitter) {
                this.emitter.emit('checkboxes-selected', this.selected);
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-main-map-subcategory {
        position: relative;

        &__icon {
            vertical-align: middle;
            margin-right: $vs-spacer-050;
        }

        .form-check {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: $vs-spacer-075 0;
            border-top: 1px solid $vs-color-border-primary;

            &::last-of-type {
                border-bottom: 1px solid $vs-color-border-primary;
            }

            @include form-checkbox(20px, $font-size-2, 2);

            input[type="checkbox"] {
                margin-top: $vs-spacer-075;
            }
        }

        .form-check-label {
            font-weight: $vs-font-weight-medium;
            display: flex;
            align-items: center;
            margin-right: $vs-spacer-050;
        }
    }
</style>
