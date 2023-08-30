<script setup lang="ts">
import { computed, ref } from 'vue';
import { getLabelText } from '../../../../utils/lang.ts';
import type { GuestUnit } from '../../../../types.ts';
import GuestSelectorNumberGroup from './GuestSelectorNumberGroup.vue';
import VsButton from '../../../elements/button';

const props = defineProps<{
    name: string,
    showRemoveBtn: boolean,
    unitLabel: string,
    unitOptions: GuestUnit,
    unitRemoved: boolean,
}>();

const emits = defineEmits<{
    (e: 'numberChange', type: string, groupName: string, unitId: string)
    (e: 'onRemove', totalCount: number, childCount: number, unitId: string)
}>();

const adultCount = ref(props.unitOptions.numberGroups['adults'].count);
const childrenCount = ref(props.unitOptions.numberGroups['children'].count);
const infantCount = ref(props.unitOptions.numberGroups['infants'].count);
const removeText = getLabelText('search_module.guests_rooms.remove', 'Remove');

const totalChildren = computed(() => childrenCount.value + infantCount.value);

const handleChange = (inputName: string, inputValue: number, type: string, unitId: string) => {
    let groupName = '';

    if (inputName.includes('children')) {
        childrenCount.value = inputValue;
        groupName = 'children';
    }

    if (inputName.includes('infants')) {
        infantCount.value = inputValue;
        groupName = 'infants';
    }

    if (inputName.includes('r1a') || inputName.includes('r2a') || inputName.includes('r3a') || inputName.includes('r4a') || inputName.includes('r5a')) {
        adultCount.value = inputValue;
        groupName = 'adults';
    }
    emits('numberChange', type, groupName, unitId);
};

const handleRemove = () => {
    emits('onRemove',
        infantCount.value + childrenCount.value + adultCount.value,
        infantCount.value + childrenCount.value,
        props.unitOptions.id
    );
}
</script>

<template>
    <div class="guest-selector-row mb-3">
        <div class="guest-selector-row__title">
            {{ unitLabel }}
        </div>
        <div
            :class="name !== 'r1' ? 'pt-6' : ''"
            v-if="name !== 'r1'"
        >
            <VsButton
                class="guest-selector-row__remove"
                @click.prevent="handleRemove"
                variant="transparent"
                icon="close"
                icon-size="sm"
                icon-position="right"
                size="sm"
            >
                {{ removeText }}
            </VsButton>
        </div>
        <div v-if="unitOptions" class="c-search__rooms-guests-picker__row">
            
            <GuestSelectorNumberGroup
                v-for="(numberGroup, index) in unitOptions.numberGroups"
                :adult-count="adultCount"
                :children-count="childrenCount"
                :count="numberGroup.count"
                :disabled="false"
                :id="unitOptions.id"
                :infant-count="infantCount"
                :input-type="numberGroup"
                :key="`${name}_${index}`"
                :max-value="numberGroup.maxCount"
                :min-value="numberGroup.minCount"
                :name="numberGroup.name"
                :row-label="numberGroup.unitLabel"
                :row-name="name"
                :unit-removed="unitRemoved"
                @change-handler="handleChange"
            />

            <input
                type="hidden"
                :name="`${name}c`"
                v-model="totalChildren"
            />
        </div>

        <input
            v-for="(child, index) in childrenCount"
            type="hidden"
            :key="`${name}c${index}`"
            :name="`${name}c${index}`"
            value="10"
        />

        <input
            v-for="(infant, index) in infantCount"
            type="hidden"
            :key="`${name}c${index}`"
            :name="`${name}c${index + childrenCount}`"
            value="1"
        />
    </div>
</template>

<style lang="scss">
    .guest-selector-row {
        position: relative;

        &__title {
            font-weight: $font-weight-bold;
        }

        &__remove {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
</style>