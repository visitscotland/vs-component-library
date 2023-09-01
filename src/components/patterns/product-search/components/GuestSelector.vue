<script setup lang="ts">
import { ref } from 'vue';
import { getLabelText } from '../../../../utils/lang.ts';
import { v4 as uuidv4 } from 'uuid';
import type { GuestUnit } from '../../../../types.ts';
import GuestSelectorRow from './GuestSelectorRow.vue';

import VsButton from '../../../elements/button/Button.vue';

defineProps<{
    availability: boolean;
    label: String;
}>();

const addUnitLabel = getLabelText('add_unit_label', 'Add Unit', 'guests_rooms');
const addUnitConfirmLabel = getLabelText('save_changes', 'Save', 'guests_rooms');
const adultDefaultCount = 1;
const guestCount = ref(2);
const guestLabel = getLabelText('guest', 'Guest', 'guests_rooms');
const guestsLabel = getLabelText('guests', 'Guests', 'guests_rooms');
const showRemoveBtn = ref(false);
const totalChildren = ref(0);
const units = ref<GuestUnit[]>([
    {
        id: uuidv4(),
        showRemoveBtn: false,
        numberGroups: {
            adults: {
                minCount: 1,
                maxCount: 30,
                count: 2,
                name: 'r1a',
                unitLabel: getLabelText('adults', 'Adults', 'guests_rooms'),
            },
            children: {
                minCount: 0,
                maxCount: 30,
                count: 0,
                name: 'r1children',
                unitLabel: getLabelText('children', 'Children', 'guests_rooms'),
            },
            infants: {
                minCount: 0,
                maxCount: 30,
                count: 0,
                name: 'r1infants',
                unitLabel: getLabelText('infants', 'Infants', 'guests_rooms'),
            }
        }
    },
]);
const unitCount = ref(1);
const unitLabel = getLabelText('unit', 'Unit', 'guests_rooms');
const unitsLabel = getLabelText('units', 'Units', 'guests_rooms');
const unitLimit = 5;
const unitRemoved = ref(false);
const visible = ref(false);

const showPicker = () => {
    visible.value = true;
};

const hidePicker = () => {
    visible.value = false;
};

const addUnit = () => {
    if (units.value.length < unitLimit) {
        const unit: GuestUnit = {
            id: uuidv4(),
            showRemoveBtn: true,
            numberGroups: {
                adults: {
                    minCount: 1,
                    maxCount: 30,
                    count: 1,
                    name: 'r' + (units.value.length + 1) + 'a',
                    unitLabel: getLabelText('adults', 'Adults', 'guests_rooms'),
                },
                children: {
                    minCount: 0,
                    maxCount: 30,
                    count: 0,
                    name: 'r' + (units.value.length + 1) + 'children',
                    unitLabel: getLabelText('children', 'Children', 'guests_rooms'),
                },
                infants: {
                    minCount: 0,
                    maxCount: 30,
                    count: 0,
                    name: 'r' + (units.value.length + 1) + 'infants',
                    unitLabel: getLabelText('infants', 'Infants', 'guests_rooms'),
                }
            }
        };

        let allUnits = units.value.slice();
        allUnits.push(unit);

        units.value = allUnits;
        unitCount.value = allUnits.length;
        showRemoveBtn.value = true;
        guestCount.value = guestCount.value + adultDefaultCount;
    }
}

const removeUnit = (totalCount: number, childCount: number, unitId: string) => {
    const index = units.value.findIndex((el) => el.id === unitId);
    units.value.splice(index, 1);

    unitCount.value = units.value.length;
    unitRemoved.value = true;
    guestCount.value = guestCount.value - totalCount;
    totalChildren.value = totalChildren.value - childCount;

    if (units.value.length === 1) { showRemoveBtn.value = false };
};

const handleChange = (type: string, groupName: string, unitId: string) => {
    guestCount.value = (type === 'increase') ? guestCount.value + 1 : guestCount.value - 1;

    if (groupName !== 'adults') {
        totalChildren.value = (type === 'increase') ? totalChildren.value + 1 : totalChildren.value - 1;
    }

    const index = units.value.findIndex((unit) => unit.id === unitId);
    units.value[index].numberGroups[groupName].count = (type === 'increase')
        ? units.value[index].numberGroups[groupName].count + 1
        : units.value[index].numberGroups[groupName].count - 1;
};
</script>

<template>
    <div class="form-group psw-guestpicker">
        <span class="psw-guestpicker__label">{{ guestsLabel }}</span>
        <button
            tabIndex="availability ? '0' : ''"
            class="c-search-rooms-guests__trigger trigger form-control select-wrap vs-input"
            @click.prevent="showPicker"
            :disabled="!availability"
        >
            <span class="c-search-rooms-guests-selected">{{ unitCount }} </span>
            <span class="c-search-rooms-guests__room-label">{{ (unitCount > 1 ? unitsLabel : unitLabel) }}</span>,
            <span class="c-search-rooms-guests__guests-count">{{ guestCount }} </span>
            <span class="c-search-rooms-guests__guests-label">{{ guestCount > 1 ? guestsLabel : guestLabel }}</span>
        </button>

        <div
            class="psw-guestpicker__modal"
            :class="visible ? 'psw-guestpicker__modal--visible' : ''"
        >
            <VsButton
                class="align-self-end"
                data-test="psw-guestpicker__close-btn"
                variant="transparent"
                icon="close-circle"
                size="md"
                icon-only
                @click.prevent="hidePicker"
            >
                <span class="sr-only">
                    {{ getLabelText('close', 'Close') }}
                </span>
            </VsButton>

            <div class="psw-guestpicker__button-row mb-3">
                <GuestSelectorRow
                    v-for="(unit, index) in units"
                    :key="unit.id"
                    :name="'r' + (index + 1)"
                    :show-remove-btn="showRemoveBtn"
                    :unit-label="getLabelText('unit', 'Unit', 'guests_rooms') + ' ' + (index + 1)"
                    :unit-options="unit"
                    :unit-removed="unitRemoved"
                    @number-change="handleChange"
                    @on-remove="removeUnit"
                />
            </div>

            <div>
                <VsButton
                    v-if="units.length < unitLimit"
                    class="c-search__popup__btn-link mr-2 align-self-start"
                    @click.prevent="addUnit"
                >
                    {{ addUnitLabel }}
                </VsButton>

                <VsButton
                    v-if="units.length < unitLimit"
                    class="c-search__popup__btn-link c-search__popup__btn-link--pull-right align-self-end"
                    @click.prevent="hidePicker"
                >
                    {{ addUnitConfirmLabel }}
                </VsButton>
            </div>
        </div>
        <input
            v-if="units"
            type="hidden"
            name="rooms"
            id="room-count"
            :value="unitCount"
            :disabled="!availability"
        />

        <input
            v-if="units"
            type="hidden"
            name="guests"
            id="guest-count"
            :value="guestCount"
            :disabled="!availability"
        />
    </div>
</template>

<style lang="scss">
    button.c-search-rooms-guests__trigger {
        text-align: left;

        &:focus{
            box-shadow: none;
        }
    }

    .psw-guestpicker {
        position: relative;

        &__modal {
            width: 100%;
            display: none;
            padding: $spacer-4;
        }

        &__modal--visible {
            display: flex;
            flex-direction: column;
            position: absolute;
            background: $color-white;
            z-index: 1;
        }

        &__label {
            font-weight: $font-weight-bold;
            margin-bottom: 0;
        }

        &__close {
            align-self: end;
        }
    }
</style>
        