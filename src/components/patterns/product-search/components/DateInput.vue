<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
    label: string,
    id: string,
    name: string,
    value?: string,
    minDate?: string
}>();

const emits = defineEmits(['changeDate'])

const selectedDate = ref(props.value);

const today = computed(() => {
    return new Date().toISOString().split('T')[0];
});

watch(() => props.value, (value) => {
    selectedDate.value = value;
    emits('changeDate', selectedDate.value);
});

</script>

<template>
    <div class="vs-date-input" data-test="vs-date-input">
        <label :for="id">{{ label }}</label>
        <input
            type="date"
            :min="typeof minDate !== 'undefined' && minDate.length > 0 ? minDate : today"
            :name="name"
            :id="id"
            v-model="selectedDate"
            @change="$emit('changeDate', selectedDate)"
            class="form-control vs-input"
        />
    </div>
</template>
