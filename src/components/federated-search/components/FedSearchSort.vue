<template>
    <VsRow class="vs-fed-search-sort">
        <VsCol
            cols="6"
            md="4"
            v-if="props.dateFilterVisible"
            class="vs-fed-search-sort--input"
        >
            <label
                v-if="props.fromDateLabel"
                for="vs-fed-search-sort--from-date"
                class="vs-fed-search-sort--label"
                data-test="vs-fed-search-sort--from-date-label"
            >
                {{ props.fromDateLabel }}
            </label>
            <VsInput
                field-name="vs-fed-search-sort--from-date"
                :value="new Date().toJSON().slice(0, 10)"
                type="date"
                :auto-complete="false"
                @input="$emit('from-date-updated', $event.target.value)"
            />
        </VsCol>
        <VsCol
            cols="6"
            md="4"
            v-if="props.dateFilterVisible"
            class="vs-fed-search-sort--input"
        >
            <label
                v-if="props.toDateLabel"
                for="vs-fed-search-sort--to-date"
                class="vs-fed-search-sort--label"
                data-test="vs-fed-search-sort--to-date-label"
            >
                {{ props.toDateLabel }}
            </label>
            <VsInput
                field-name="vs-fed-search-sort--to-date"
                type="date"
                :auto-complete="false"
                @input="$emit('end-date-updated', $event.target.value)"
            />
        </VsCol>
        <VsCol
            cols="12"
            md="4"
            class="vs-fed-search-sort--dropdown-wrapper"
        >
            <VsDropdown
                variant="secondary"
                id="vs-fed-search-sort--dropdown"
                name="vs-fed-search-sort-dropdown"
                :text="isActive === null ? props.sortLabel : `${props.sortLabel}: ${isActive.label}`"
            >
                <VsDropdownItem
                    v-for="(sortOption, key) in sortOptions"
                    :key
                    @click="isActive = sortOption, $emit('sort-order-updated', sortOption)"
                    :active="isActive === sortOption ? true : false"
                    :data-test="`vs-fed-search-sort--dropdown-item__${sortOption.id}`"
                >
                    {{ sortOption.label }}
                </VsDropdownItem>
            </VsDropdown>
        </VsCol>
    </VsRow>
</template>

<script setup lang="ts">
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
        type: Object,
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

defineEmits([
    'from-date-updated',
    'end-date-updated',
    'sort-order-updated',
]);
</script>

<style lang="scss">
.vs-fed-search-sort {
    &--label {
        font-weight: $vs-font-weight-regular;
    }

    &--dropdown-wrapper {
        display: flex;
        align-items: flex-end;

        button {
            /*Gives sort dropdown extra height to visually balance
            * with the date-pickers next to it */
            height: 50px;
        }

        @include media-breakpoint-down(sm) {
            display: block;
            margin-top: 1em;

            button {
                width: 100%;
            }
        }
    }
}
</style>
