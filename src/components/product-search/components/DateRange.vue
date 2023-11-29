<script setup lang="ts">
import { ref, computed } from 'vue';
import { getLabelText } from '../../../utils/lang';
import DateInput from './DateInput.vue';

const props = defineProps({
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

const emit = defineEmits(['dateUpdated'])

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
    const getYear = date.toLocaleString('default', {
        year: 'numeric',
    });
    const getMonth = date.toLocaleString('default', {
        month: '2-digit',
    });
    const getDay = date.toLocaleString('default', {
        day: '2-digit',
    });

    return `${getYear}-${getMonth}-${getDay}`;
};

const defaultStartDate = computed(() => {
    if (startDate.value === '') {
        return formatDate(new Date());
    }

    return '';
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
    let returnedDate;

    if (startDate.value === '') {
        const today = (new Date());
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        returnedDate = formatDate(tomorrow);
    } else {
        const date = new Date();
        const start = new Date(startDate.value);
        date.setDate(start.getDate() + 1);
        returnedDate = formatDate(date);
    }

    return returnedDate;
});

function checkMinDate() {
    // ensures that the end date isn't earlier than the start date
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);
    if (end <= start) {
        endDate.value = '';
    }
}

function checkDatesExist() {
    const datesExist = !startDate.value && !endDate.value ? false : true;
    emit('dateUpdated', datesExist);
}

function dateUpdated() {
    checkDatesExist();
    checkMinDate();
}

</script>

<template>
    <fieldset
        class="vs-date-range"
        data-test="vs-date-range"
    >
        <div class="row align-items-center">
            <div class="col-12 col-sm-5 order-1">
                <DateInput
                    :label="startLabel"
                    :value="defaultDates && startDate === '' && endDate ? defaultStartDate : startDate"
                    name="isostartdate"
                    id="startDate"
                    @change-date="(selectedDate) => {
                        startDate = selectedDate;
                        dateUpdated();
                    }"
                    class="mb-4"
                />
            </div>
            <div class="col-12 col-sm-5 order-2">
                <DateInput
                    :label="endLabel"
                    :value="defaultDates && endDate === '' && startDate ? defaultEndDate : endDate"
                    :min-date="minDate"
                    name="isoenddate"
                    id="endDate"
                    @change-date="(selectedDate) => {
                        endDate = selectedDate;
                        dateUpdated();
                    }"
                    class="mb-4"
                />
            </div>
            <div class="col-12 col-sm-2 order-first order-sm-3 text-sm-right">
                <button
                    id="clearDateRange"
                    type="button"
                    v-if="hasDate"
                    @click="clearDates"
                    class="vs-date-range__clear"
                >
                    {{ getLabelText('reset', 'Clear') }}
                </button>
                <input type="hidden" name="refine-date" value="on">
                <input type="hidden" name="nights" :value="nights">
            </div>
        </div>
    </fieldset>
</template>

<style lang="scss">
    .vs-date-range {
        position: relative;

        &__clear {
            border: 0;
            background: none;
            font-size: $font-size-4;
            text-decoration: underline;
            top: 0;
            right: 0;
            position: absolute;

            @include media-breakpoint-up(sm) {
                position: relative;
            }

            &:hover{
                text-decoration: none;
            }

            &:focus{
                box-shadow: 0 0 0 4px rgb(25, 25, 25);
                outline: 0;
            }
        }
    }
</style>
