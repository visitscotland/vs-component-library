<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import VueComboBlocks from 'vue-combo-blocks';
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
const filteredOptions = ref(props.options);

const getOptionValue = (item) => item ? item[selectBy.value] : '';

const updateOptions = (text) => {
    filteredOptions.value = props.options.filter((item) =>
        item[selectBy.value].toLowerCase().includes(text.toLowerCase())
    );
};

const updateValue = (item) => {
    if (typeof props.trackBy !== 'undefined') {
        emit('changeValue', item[props.trackBy]);
    } else {
        emit('changeValue', item.label);
    }
}

const selectBy = computed(() => {
    if (typeof props.multiselectLabel !== 'undefined') {
        return props.multiselectLabel;
    }
    return 'name';
});

const inputValueFormatted = computed(() => {
    if (typeof inputValue.value === 'string') {
        if (props.isTourLocation) {
            const chosenOption = props.options.find(option => option.name === inputValue.value);

            if (typeof chosenOption !== 'undefined') {
                return chosenOption.slug.trim();
            }
        }
        return inputValue.value.trim();
    } else if (typeof inputValue.value === 'object' && Object.keys(inputValue.value).length > 0) {
        return getOptionValue(inputValue.value).trim();
    }
    return;
});

const showHiddenInput = computed(() => {
    if (inputValueFormatted.value && inputValueFormatted.value.length > 0) {
        return true;
    }
    return false;
});

watch(() => inputValue.value, () => {
    if (inputValue.value === null) {
        inputValue.value = [];
    }
});

onMounted(() => {
    if (typeof props.defaultVal !== 'undefined') {
        inputValue.value = props.defaultVal;
    }
});
</script>

<template>
    <div 
        data-test="vs-autocomplete"
        class="vs-autocomplete mb-100"
    >
        <label :for="id">{{ label }}</label>
        <VueComboBlocks
            :input-id="id"
            v-model="inputValue"
            :itemToString="getOptionValue"
            :items="filteredOptions"
            @input-value-change="updateOptions"
            @select="updateValue"
            v-slot="{
                getInputProps,
                getInputEventListeners,
                hoveredIndex,
                isOpen,
                getMenuProps,
                getMenuEventListeners,
                getItemProps,
                getItemEventListeners,
                getComboboxProps,
                openMenu,
            }"
        >
            <div
                v-bind="getComboboxProps()"
                class="vs-autocomplete__list-wrapper"
            >
                <input
                    class="vs-input form-control"
                    v-bind="getInputProps()"
                    v-on="getInputEventListeners()"
                    :placeholder="placeholder"
                    @click="openMenu()"
                />
                <VsIcon 
                    name="chevron-down"
                    variant="cta"
                    size="sm"
                />
                <ul
                    v-show="isOpen"
                    v-bind="getMenuProps()"
                    v-on="getMenuEventListeners()"
                    class="vs-autocomplete__list"
                >
                    <li
                        v-for="(item, index) in filteredOptions"
                        :key="item.id"
                        v-bind="getItemProps({ item, index })"
                        v-on="getItemEventListeners({ item, index })"
                        class="vs-autocomplete__list-item"
                        :class="{'vs-autocomplete__list-item--hover' : hoveredIndex === index }"
                    >
                        {{ item[selectBy] }}
                    </li>
                </ul>
            </div>
        </VueComboBlocks>

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
    
    &__list {
        background-color: $vs-color-background-inverse;
        max-height: 250px;
        overflow-y: scroll;
        padding-left: 0;
        position: absolute;
        width: 100%;
        z-index: 10;

        &-wrapper {
            position: relative;
        }

        &-item {
            cursor: pointer;
            font-size: $font-size-4;
            list-style: none;
            padding: $spacer-050 $spacer-100;

            &:hover,
            &--hover {
                background-color: $vs-color-interaction-cta-subtle-hover;
                color: $vs-color-text-cta-on-light;
            }
        }
    }

    .vs-icon {
        position: absolute;
        top: calc(50% - $spacer-050);
        right: $spacer-100;
    }
}
</style>
