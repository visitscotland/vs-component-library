<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { GuestNumberGroup } from '../../../../types';
import VsButton from '../../../elements/button/Button.vue';

const props = defineProps<{
    adultCount: number,
    childrenCount: number
    count: number,
    disabled: boolean,
    id: string,
    infantCount: number,
    inputType: GuestNumberGroup,
    maxValue: number,
    minValue: number,
    name: string,
    rowName: string,
    rowLabel: string,
    unitRemoved: boolean,
}>();

const emits = defineEmits < {
    (e: 'changeHandler', inputName: string, inputValue: number, type: string, unitId: string): void,
}>();

const counter = ref(0);
const isChanged = ref(false);
const name = ref(props.name);

const handleDecrease = () => {
    if (counter.value > props.minValue) {
        counter.value--;
        isChanged.value = true;
        handleChange('decrease');
    }
};

const handleIncrease = () => {
    if (counter.value < props.maxValue) {
        counter.value++;
        isChanged.value = true;
        handleChange('increase');
    }
};

const handleChange = (type: string) => {
    emits('changeHandler',
        props.name,
        counter.value,
        type,
        props.id,
    );
}

onMounted(() => {
    if (!isChanged.value) { counter.value = props.minValue }

    if (counter.value <= props.maxValue) { counter.value = props.count }

    if (props.unitRemoved) {
        if (props.name.includes('children')) {
            counter.value = props.childrenCount;
            name.value = props.rowName + 'children';
        } else if (props.name.includes('infants')) {
            counter.value = props.infantCount;
            name.value = props.rowName + 'infants';
        } else {
            counter.value = props.adultCount;
            name.value = props.rowName + 'a';
        }
    }
});
</script>

<template>
    <div class="guest-picker-counter">
        <span class="guest-picker-counter__label">
            {{ rowLabel }}
        </span>
        <div class="guest-picker-counter__buttons justify-content-end">
            <VsButton
                class="guest-picker-counter__button--remove"
                size="sm"
                icon="minus"
                icon-only
                value="-"
                @click.prevent="handleDecrease"
                :disabled="counter === minValue"
            > 
                <span class="sr-only">
                    Remove
                </span>
            </VsButton>

            <input
                class="guest-picker-counter__input"
                :disabled="disabled"
                pattern="[0-9]*"
                readonly
                tabIndex="-1"
                type="text"
                v-model="counter"
                @focus="handleFocus"
            />

            <VsButton
                class="guest-picker-counter__button--add"
                size="sm"
                icon="plus"
                icon-only
                value="+"
                @click.prevent="handleIncrease"
                :disabled="counter === maxValue"
            >
                <span class="sr-only">
                    Add
                </span>
            </VsButton>

            <input
                type="hidden"
                v-model="counter"
                :name="unitRemoved && rowName !== 'r1' ? name : name"
                :disabled="disabled"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .guest-picker-counter {
        display: flex;
        justify-content: space-between;
        margin-bottom: $spacer-3;

        &__button {
            color: rgb(255, 255, 255);
            background-color: $color-pink;
            border-color: $color-pink;
        }

        &__input {
            width: 30px;
            text-align: center;
            border: 0;
            font-size: $font-size-4;
        }
    }
</style>