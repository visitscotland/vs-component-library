<template>
    <VsRow class="vs-fed-search-sort">
        <VsCol
            cols="6"
            md="4"
            v-if="dateFilterVisible"
            class="vs-fed-search-sort--input"
        >
            <label for="vs-fed-search-sort--from-date"> Visiting from </label>
            <VsInput
                id="vs-fed-search-sort--from-date"
                field-name="fed-search-sort-from-date"
                :value="new Date().toJSON().slice(0, 10)"
                type="date"
                :auto-complete="false"
            />
        </VsCol>
        <VsCol
            cols="6"
            md="4"
            v-if="dateFilterVisible"
            class="vs-fed-search-sort--input"
        >
            <label for="vs-fed-search-sort--to-date"> To </label>
            <VsInput
                id="vs-fed-search-sort--to-date"
                field-name="fed-search-sort-to-date"
                type="date"
                :auto-complete="false"
            />
        </VsCol>
        <VsCol
            cols="12"
            md="4"
            class="vs-fed-search-sort--input-wrapper"
        >
            <VsDropdown
                variant="secondary"
                name="vs-fed-search-sort-dropdown"
                :text="isActive === null ? 'Sort' : `Sort by: ${isActive.label}`"
            >
                <VsDropdownItem
                    v-for="(sortOption, key) in sortOptions"
                    :key
                    @click="isActive = sortOption, $emit('sort-order-updated', sortOption)"
                    :active="isActive === sortOption ? true : false"
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
        default: true,
        required: false,
    },
    /**
     * Options for the sort dropdown
     * [
     *  {
     *      id: String,
     *      label: String,
     *  },
     *  {...},
     * ]
     */
    sortOptions: {
        type: Object,
        required: false,
    },
});

defineEmits(['sort-order-updated']);

</script>

<style lang="scss">
.vs-fed-search-sort{

    &--input-wrapper {
        display: flex;
        align-items: flex-end;

        button{
            /*Gives sort dropdown extra height to visually balance
            * with the date-pickers next to it */
            height: 50px;
        }

        @include media-breakpoint-down(sm){
            display: block;
            margin-top: 1em;

            button{
                width: 100%;
            }
        }
    }
}
</style>
