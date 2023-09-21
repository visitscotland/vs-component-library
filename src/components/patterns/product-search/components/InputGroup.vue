<script setup lang="ts">
import Label from './Label.vue';

defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="form-group">
        <Label>
            {{ label }}
        </Label>
    </div>
</template>