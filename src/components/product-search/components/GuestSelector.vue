<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue';
import { getLabelText } from '../../../utils/lang';
import type { GuestUnit } from '../../../types/types';
import GuestSelectorRow from './GuestSelectorRow.vue';

import VsButton from '@/components/button/Button.vue';

defineProps<{
    availability: boolean;
}>();

const vueInstance = getCurrentInstance();

const addUnitLabel = getLabelText('add_room_label', 'Add a Room', 'guests_rooms');
const addUnitConfirmLabel = getLabelText('save_changes', 'Save', 'guests_rooms');
const adultDefaultCount = 1;
const guestCount = ref(2);
const guestLabel = getLabelText('guest', 'Guest', 'guests_rooms');
const guestsLabel = getLabelText('guests', 'Guests', 'guests_rooms');
const showRemoveBtn = ref(false);
const totalChildren = ref(0);
const units = ref<GuestUnit[]>([
    {
        id: `${vueInstance.uid}`,
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
const unitLabel = getLabelText('room', 'Room', 'guests_rooms');
const unitsLabel = getLabelText('rooms', 'Rooms', 'guests_rooms');
const unitLimit = 5;
const unitRemoved = ref(false);
const visible = ref(false);

const hidePicker = () => {
    visible.value = false;
};

const togglePicker = () => {
    visible.value = !visible.value;
};

const addUnit = () => {
    if (units.value.length < unitLimit) {
        const unit: GuestUnit = {
            id: `${vueInstance.uid}`,
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
    <div 
        class="form-group vs-guest-selector"
        data-test="vs-guest-selector"
    >
        <span class="vs-guest-selector__label">{{ guestsLabel }}</span>
        <button
            tabIndex="availability ? '0' : ''"
            class="vs-guest-selector__trigger form-control vs-input"
            @click.prevent="togglePicker"
            :disabled="!availability"
        >
            <span>{{ unitCount }}&nbsp;</span>
            <span>{{ (unitCount > 1 ? unitsLabel : unitLabel) }}</span>,&nbsp;
            <span>{{ guestCount }}&nbsp;</span>
            <span>{{ guestCount > 1 ? guestsLabel : guestLabel }}</span>
        </button>

        <div
            class="vs-guest-selector__modal"
            :class="visible ? 'vs-guest-selector__modal--visible' : ''"
        >
            <VsButton
                class="align-self-end"
                data-test="vs-guest-selector__close-btn"
                variant="subtle"
                icon="vs-icon-control-dismiss"
                size="md"
                icon-only
                @click.prevent="hidePicker"
            >
                {{ getLabelText('close', 'Close', 'guests_rooms') }}
            </VsButton>

            <div class="vs-guest-selector__button-row mb-075">
                <GuestSelectorRow
                    v-for="(unit, index) in units"
                    :key="unit.id"
                    :name="'r' + (index + 1)"
                    :show-remove-btn="showRemoveBtn"
                    :unit-label="getLabelText('room', 'Room', 'guests_rooms') + ' ' + (index + 1)"
                    :unit-options="unit"
                    :unit-removed="unitRemoved"
                    @number-change="handleChange"
                    @on-remove="removeUnit"
                />
            </div>

            <div class="d-flex justify-content-between">
                <VsButton
                    v-if="units.length < unitLimit"
                    variant="secondary"
                    class="c-search__popup__btn-link me-050 align-self-start"
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
    button.vs-guest-selector__trigger {
        text-align: left;

        &:focus{
            box-shadow: none;
        }

        &::after{
            font-family: "Font Awesome 6 Pro";
            content: "\f078";
            display: inline-block;
            position: absolute;
            top: $spacer-300;
            right: $spacer-100;
            pointer-events: none;
            font-size: $font-size-5;
            color: $vs-color-icon-cta-on-light;
        }
    }

    .vs-guest-selector {
        position: relative;

        &__modal {
            width: 100%;
            display: none;
            padding: $spacer-100;
            box-shadow: $vs-elevation-shadow-raised;
        }

        &__modal--visible {
            display: flex;
            flex-direction: column;
            position: absolute;
            background: $vs-elevation-surface-raised;
            z-index: 1;
        }

        &__label {
            font-weight: $vs-font-weight-medium;
            margin-bottom: 0;
        }

        &__close {
            align-self: end;
        }
    }
</style>
        