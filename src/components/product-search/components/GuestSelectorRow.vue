<script setup lang="ts">
import { computed, ref } from 'vue';
import { getLabelText } from '../../../utils/lang';
import type { GuestUnit } from '../../../types/types';
import GuestSelectorNumberGroup from './GuestSelectorNumberGroup.vue';
import VsButton from '@/components/button/Button.vue';

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
const removeText = getLabelText('remove', 'Remove', 'guests_rooms');

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
    <div 
        class="vs-guest-selector-row"
        data-test="vs-guest-selector-row"
    >
        <div class="vs-guest-selector-row__title">
            {{ unitLabel }}
        </div>

        <VsButton
            class="vs-guest-selector-row__remove"
            @click.prevent="handleRemove"
            variant="subtle"
            icon="vs-icon-control-dismiss"
            icon-size="sm"
            icon-position="left"
            icon-only
            size="sm"
            v-if="name !== 'r1'"
        >
            {{ removeText }}
        </VsButton>

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
    .vs-guest-selector-row {
        position: relative;
        border-bottom: 1px solid $vs-color-border-primary;
        margin-bottom: $vs-spacer-100;

        &:last-of-type{
            border-bottom: 0;
        }

        &__title {
            font-weight: $vs-font-weight-medium;
            margin-bottom: $vs-spacer-075;
        }

        &__remove {
            position: absolute;
            top: 0;
            right: 0;
            text-transform: none;

            &.vs-button.vs-button--icon-only .vs-icon{
                margin-right: 2px;
                vertical-align: middle;
            }
        }

        .c-search__rooms-guests-picker__row{
            margin-bottom: $vs-spacer-100;
        }
    }
</style>
