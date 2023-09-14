<script setup lang="ts">
import { ref } from 'vue';
import type { SelectOption } from '../../../../types';
import Label from './Label.vue';

const props = defineProps<{
    defaultSelected: string,
    label: string,
    id: string,
    name: string,
    options: SelectOption[]
}>();

const selectedOption = ref(props.defaultSelected);
</script>

<template>
    <div class="form-group vs-select">
        <Label :for="id">{{ label }}</Label>
        <div class="vs-select__container mt-2">
            <select
                :id="id"
                :name="name"
                v-model="selectedOption"
                @change="$emit('changeOption', selectedOption)"
                class="vs-select__element"
            >
                <option
                    v-for="item in options"
                    :key="item.key"
                    :value="item.optionValue"
                >
                    {{ item.displayName }}
                </option>
            </select>
        </div>
        <span class="vs-select__focus" />
    </div>
</template>

<style lang="scss">
.vs-select {
    &__container {
        position: relative;
        width: 100%;
        cursor: pointer;
        height: 50px;
        border-radius: 0;
        background: $color-white;

        &::after {
            font-family: "Font Awesome Kit";
            content: "\e06c";
            line-height: $line-height-s;
            vertical-align: text-top;
            text-align: center;
            display: inline-block;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid $color-black;
            border-radius: 1000px;
            position: absolute;
            top: calc(50% - #{$spacer-3});
            right: $spacer-4;
            pointer-events: none;
        }
    }

    &__element {
        // A reset of styles, including removing the default dropdown arrow
        appearance: none;
        background-color: $color-white;
        border: none;
        padding: 0 $spacer-4 0;
        margin: 0;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;
        height: 50px;
        @include form-element-styles;

        &--error {
            @include form-error-state;
        }

        &:focus {
            outline: none;
            box-shadow: none;
            @include form-focus-state;

            & + .vs-select__focus {
                position: absolute;
                top: -1px;
                left: -1px;
                right: -1px;
                bottom: -1px;
                pointer-events: none;
                @include form-focus-state;
            }
        }
    }
}
</style>