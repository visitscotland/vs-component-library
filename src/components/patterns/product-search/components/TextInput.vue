<script setup lang="ts">
import Label from './Label.vue';

const props = defineProps<{
    label: string,
    id: string,
    placeholder?: string,
    name: string,
    defaultValue?: string
}>();

</script>

<template>
    <div class="form-group">
        <Label :for="id">{{ label }}</Label>
        <input
            type="text"
            :name="name"
            :id="id"
            :placeholder="placeholder"
            :value="defaultValue"
            class="vs-input form-control"
        />
    </div>
</template>