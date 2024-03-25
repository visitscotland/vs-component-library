<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import {default as slugify} from 'slugify';
import TypeAhead from 'vue3-simple-typeahead';

const props = defineProps<{
    id: string,
    label: string,
    mode?: string,
    multiselectLabel?: string,
    name: string,
    options: any[],
    placeholder: string,
    trackBy?: string,
    isTourLocation?: boolean,
    defaultVal?: any,
}>();

const emit = defineEmits<{
  (event: 'changeValue', payload: any): void
}>()

const inputValue = ref<string | string[]>([]); // init as empty array so as not to be undefined

const inputValueFormatted = computed(() => {
    if (typeof inputValue.value === 'string') {
        if (props.isTourLocation) {
            const chosenOption = props.options.find(option => option.name === inputValue.value);

            if (typeof chosenOption !== 'undefined') {
                return chosenOption.slug.trim();
            }
        }
        return inputValue.value.trim();
    }
})

const updateValue = (item) => {
    if (typeof props.trackBy !== 'undefined') {
        inputValue.value = item[props.trackBy];
    } else {
        inputValue.value = item.label;
    }
}

const selectBy = computed(() => {
    if (typeof props.multiselectLabel !== 'undefined') {
        return props.multiselectLabel;
    }
    return 'name';
});

const showHiddenInput = computed(() => {
    if (inputValue.value && inputValue.value.length > 0){
        return true;
    }
    return false;
});

watch(inputValue, (newInputVal) => {
    emit('changeValue', newInputVal);
});

watch(() => props.defaultVal, () => {
    if (typeof props.defaultVal !== 'undefined') {
        inputValue.value = props.defaultVal.name;
    }
});

watch(() => inputValue.value, () => {
    if (inputValue.value === null) {
        inputValue.value = [];
    }
});

onMounted(() => {
    if (typeof props.defaultVal !== 'undefined') {
        inputValue.value = props.defaultVal.name;
    }
});
</script>

<template>
    <div 
        data-test="vs-autocomplete"
        class="mb-4"
    >
        <label :for="id">{{ label }}</label>
        <TypeAhead
            class="vs-input form-control"
            :id="id"
            :placeholder="placeholder"
            :searchable="true"
            :track-by="trackBy"
            :valueProp="trackBy"
            v-model="inputValue"
            autocomplete="off"
            :items="options"
            :minInputLength="0"
            :itemProjection="(item) => item[selectBy]"        
            @selectItem="updateValue"
            :defaultItem="props.defaultVal"
        />

        <!-- need to check inputValue length to ensure it's not an empty array -->
        <input
            v-if="showHiddenInput"
            type="hidden"  
            :name="name"
            v-model="inputValueFormatted"
        />
    </div>
</template>

<style lang="scss">
    .simple-typeahead {
        .simple-typeahead-list 
        .simple-typeahead-list-item.simple-typeahead-list-item-active{
            background-color: $color-gray-tint-7!important;
            color: $color-pink!important;
        }

        &::after {
            font-family: "Font Awesome Kit";
            content: "\e06c";
            display: inline-block;
            position: absolute;
            top: calc(50% - $spacer-3);
            right: $spacer-4;
            pointer-events: none;
        }
    }    
</style>
