<script setup lang="ts">
import { ref, computed } from 'vue';
import { getLabelText } from '../../../../utils/lang.ts';
import DateInput from './DateInput.vue';

import VsButton from '../../../elements/button/Button.vue';

const props = defineProps({
    legend: {
        type: String,
        required: false
    },
    startLabel: {
        type: String,
        required: false,
        default: 'Start Date',
    },
    endLabel: {
        type: String,
        required: false,
        default: 'End Date',
    },
    defaultDates: {
        type: Boolean,
        default: false,
    },
});

const startDate = ref('');
const endDate = ref('');
const hasDate = computed(() => !!startDate.value || !!endDate.value);

const nights = computed(() => {
    const end = new Date(endDate.value);
    const start = new Date(startDate.value);
    // Calculate the time difference of two dates
    const timeDiff = end.getTime() - start.getTime();

    if (isNaN(timeDiff)) {
        return 1;
    }

    // Calculate the no. of days between two dates
    return timeDiff / (1000 * 3600 * 24);
});

function clearDates() {
    startDate.value = '';
    endDate.value = '';
}

const formatDate = (date) => {
    const getYear = date.toLocaleString("default", { year: "numeric" });
    const getMonth = date.toLocaleString("default", { month: "2-digit" });
    const getDay = date.toLocaleString("default", { day: "2-digit" });

    return `${getYear}-${getMonth}-${getDay}`;
}

const defaultStartDate = computed(() => {
    if (startDate.value === '') {
        return formatDate(new Date());
    }
    
});

const defaultEndDate = computed(() => {
    let date;

    if (startDate.value !== '') {
        const nextDay = new Date(startDate.value);
        nextDay.setDate(nextDay.getDate() + 1);
        date = formatDate(nextDay);
    } else if (props.defaultDates) {
        const today = (new Date());
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        date = formatDate(tomorrow);
    }

    return date;
});

const minDate = computed(() => {
    let minDate;

    if (startDate.value === '') {
        const today = (new Date());
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        minDate = formatDate(tomorrow);
    } else {
        const date = new Date();
        const start = new Date(startDate.value);
        date.setDate(start.getDate() + 1);
        minDate = formatDate(date);
    }

    return minDate;
});

function checkMinDate() {
    // ensures that the end date isn't earlier than the start date
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    if (end <= start) {
        endDate.value = '';
    }
}

</script>

<template>
    <fieldset class="date-range mb-4">
        <DateInput
            :label="startLabel"
            :value="defaultDates && startDate === '' ? defaultStartDate : startDate"
            name="isostartdate"
            id="startDate"
            @change-date="(selectedDate) => {
                startDate = selectedDate;
                checkMinDate();
            }"
            class="data-range__input mr-4"
        />
        <DateInput
            :label="endLabel"
            :value="defaultDates && endDate === '' ? defaultEndDate : endDate"
            :min-date="minDate"
            name="isoenddate"
            id="endDate"
            @change-date="(selectedDate) => endDate = selectedDate"
            class="data-range__input"
        />

        <button
            id="clearDateRange"
            type="button"
            v-if="hasDate"
            @click="clearDates"
            class="date-range__clear"    
        >
            {{ getLabelText('reset', 'Clear') }}
        </button>
        <input type="hidden" name="refine-date" value="on">
        <input type="hidden" name="nights" :value="nights">
    </fieldset>
</template>

<style lang="scss">
    .date-range {
        display: flex;
        position: relative;

        &__input {
            display: flex;
        }

        &__clear {
            border: 0;
            background: none;
            font-size: $font-size-2;
            text-decoration: underline;
            top: 0;
            right: 0;
            position: absolute;
        }
    }
</style>
