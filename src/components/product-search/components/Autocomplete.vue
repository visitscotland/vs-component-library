<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { Combobox, ComboboxButton, ComboboxLabel, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue';
import VsIcon from '@/components/icon/Icon.vue';

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
});

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


const query = ref('');
const defaultValue = computed(() => props.defaultVal ? props.defaultVal.name : '');

const filteredOptions = computed(() => {
    return query.value === ''
        ? props.options
        : props.options.filter((option) => {
            return option[selectBy.value].toLowerCase().includes(query.value.toLowerCase());
        })
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
        class="vs-autocomplete mb-4"
        :id="id"
    >
        <Combobox
            v-model="inputValue"
            :default-value="defaultValue"
        >
            <ComboboxLabel>
                {{ label }}
            </ComboboxLabel>
            <ComboboxInput
                @change="query = $event.target.value"
                :display-value="(option: string) => option"
                :placeholder="placeholder"
                class="vs-input form-control"
            />
            <ComboboxButton>
                <VsIcon 
                    name="chevron-down"
                    variant="primary"
                    size="sm"
                />
            </ComboboxButton>
            <ComboboxOptions>
                <ComboboxOption
                    v-for="(option, index) in filteredOptions"
                    :key="index"
                    :value="option[selectBy]"
                >
                    {{ option[selectBy] }}
                </ComboboxOption>
            </ComboboxOptions>
        </Combobox>

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
.vs-autocomplete {
    position: relative;

    button {
        background-color: $vs-color-background-input;
        border: 0;
        position: absolute;
        right: $spacer-2;
        bottom: $spacer-2;
    }

    ul {
        background-color: $vs-color-background-input;
        max-height: 250px;
        overflow-y: scroll;
        padding-left: 0;
        position: absolute;
        width: 100%;
        z-index: 10;

        li {
            cursor: pointer;
            font-size: $font-size-4;
            list-style: none;
            padding: $spacer-2 $spacer-4;

            &:hover,
            &[data-headlessui-state="active"],
            &[data-headlessui-state="active selected"] {
                background-color: $vs-color-background-primary;
                color: $vs-color-text-inverse;
            }
        }
    }
}

    .simple-typeahead {
        position: relative;

        &-list {
            position: absolute;
            display: flex;
            flex-direction: column;
            max-height: 250px;
            overflow-y: scroll;
            background: #fff;
            width: 100%;
            z-index: 10;

            &-item{
                cursor: pointer;
                font-size: $font-size-4;
                padding: $spacer-2 $spacer-4;

                &:hover{
                    background-color: $vs-color-background-primary;
                    color: $vs-color-text-inverse;
                }
            }
        }

        &-list-list 
        &-list-list-item.simple-typeahead-list-item-active{
            background-color: $vs-color-background-primary!important;
            color: $vs-color-text-inverse!important;
        }

        &::after {
            font-family: "Font Awesome Kit";
            content: "\e06c";
            display: inline-block;
            position: absolute;
            top: calc(50% - $spacer-3);
            right: $spacer-4;
            pointer-events: none;
            color: $vs-color-icon-primary;
        }
    }    
</style>
