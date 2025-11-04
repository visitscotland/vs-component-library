<template>
    <VsRow class="vs-fed-search-sort">
        <VsCol
            cols="6"
            md="4"
            v-if="props.dateFilterVisible"
        >
            <label
                v-if="props.fromDateLabel"
                for="vs-fed-search-sort__from-date"
                class="vs-fed-search-sort__label"
                data-test="vs-fed-search-sort__from-date-label"
            >
                {{ props.fromDateLabel }}
            </label>
            <VsInput
                field-name="vs-fed-search-sort__from-date"
                :value="new Date().toJSON().slice(0, 10)"
                type="date"
                :auto-complete="false"
                @input="$emit('from-date-updated', $event.target.value)"
                data-chromatic="ignore"
            />
        </VsCol>
        <VsCol
            cols="6"
            md="4"
            v-if="props.dateFilterVisible"
        >
            <label
                v-if="props.toDateLabel"
                for="vs-fed-search-sort__to-date"
                class="vs-fed-search-sort__label"
                data-test="vs-fed-search-sort__to-date-label"
            >
                {{ props.toDateLabel }}
            </label>
            <VsInput
                field-name="vs-fed-search-sort__to-date"
                type="date"
                :auto-complete="false"
                @input="$emit('end-date-updated', $event.target.value)"
            />
        </VsCol>
        <VsCol
            cols="12"
            md="4"
            class="vs-fed-search-sort__dropdown-wrapper"
        >
            <VsDropdown
                variant="secondary"
                id="vs-fed-search-sort__dropdown"
                name="vs-fed-search-sort__dropdown"
                :text="isActive === null ? props.sortLabel : `${props.sortLabel}: ${isActive.label}`"
            >
                <VsDropdownItem
                    v-for="(sortOption, index) in sortOptions"
                    :key="index"
                    @click="sortUpdated(sortOption)"
                    :active="isActive === sortOption ? true : false"
                    :data-test="`vs-fed-search-sort__dropdown-item--${sortOption.id}`"
                >
                    {{ sortOption.label }}
                </VsDropdownItem>
            </VsDropdown>
        </VsCol>
    </VsRow>
</template>

<script setup>
import { ref } from 'vue';

import VsRow from '@/components/grid/Row.vue';
import VsCol from '@/components/grid/Col.vue';
import VsInput from '@/components/input/Input.vue';
import VsDropdown from '@/components/dropdown/Dropdown.vue';
import VsDropdownItem from '@/components/dropdown/components/DropdownItem.vue';

const isActive = ref(null);

const props = defineProps({
    /**
     * Determines if the date fields are visible
     */
    dateFilterVisible: {
        type: Boolean,
        default: false,
    },
    /**
     * Options for the sort dropdown
     *  {
     *      id: String,
     *      label: String,
     *  },
     */
    sortOptions: {
        type: Array,
        required: true,
    },
    /** Label to be displayed above `from` date field */
    fromDateLabel: {
        type: String,
        required: true,
    },
    /** Label to be displayed above `to` date field */
    toDateLabel: {
        type: String,
        required: true,
    },
    /** Label to be displayed on the sort dropdown */
    sortLabel: {
        type: String,
        required: true,
    },
});

const emit = defineEmits([
    'from-date-updated',
    'end-date-updated',
    'sort-order-updated',
]);

function sortUpdated(sortOption) {
    isActive.value = sortOption;
    emit('sort-order-updated', sortOption);
}
</script>

<style lang="scss">
.vs-fed-search-sort {
    &__label {
        font-weight: $vs-font-weight-regular;
    }

    &__dropdown-wrapper {
    display: flex;
        align-items: flex-end;

        button {
            /*Gives sort dropdown extra height to visually balance
            * with the date-pickers next to it */
            height: 50px;
        }

        @include media-breakpoint-down(md) {
            display: block;
            margin-top: $vs-spacer-100;

            button {
                width: 100%;
            }
        }
    }
}
</style>
