<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    initialCount?: number,
    label: string,
}>();

const emit = defineEmits < {
    (e: 'update', value: number);
}>();

const counter = ref(props.initialCount || 0);

const increaseCount = () => {
    counter.value++;
    emit('update', counter.value);
}

const decreaseCount = () => {
    counter.value--;
    emit('update', counter.value);
};

</script>

<template>
    <div class="guest-counter">
        <span>{{ label }}</span>
        <button @click.prevent="decreaseCount">-</button>
        <span>{{ counter }}</span>
        <button @click.prevent="increaseCount">+</button>
    </div>
</template>

<style lang="scss">
    .guest-counter {
        display: flex;
    }
</style>
