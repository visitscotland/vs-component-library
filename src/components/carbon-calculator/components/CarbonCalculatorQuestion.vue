<template>
    <BFormGroup
        :class="fieldClass"
        data-test="vs-carbon-calculator-question"
        class="vs-carbon-calculator-question"
    >
        <div
            :class="fieldClass"
        >
            <!-- eslint-disable -->
            <label
                class="vs-carbon-calculator-question__label mb-200"
                :for="fieldName"
            >
                {{ label }}
            </label>
            <!-- eslint-enable -->

            <VsRadioButton
                v-if="fieldType === 'radio'"
                :field-name="fieldName"
                :options="options"
                :required="true"
                :hint-text="hint"
                @update-field-data="valueChanged"
            />

            <VsNumberInput
                v-if="fieldType === 'number'"
                :field-name="fieldName"
                :increment-controls="true"
                :value="0"
                :minimum-number="minimum"
                :maximum-number="maximum"
                :hint-text="hint"
                @updated="valueChanged"
            />
        </div>
    </BFormGroup>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue-next';
import VsRadioButton from '@/components/radio-button/RadioButton.vue';
import VsNumberInput from '@/components/number-input/NumberInput.vue';

/**
 * @displayName Carbon Form Question
 */
export default {
    name: 'VsCarbonCalculatorQuestion',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        VsRadioButton,
        VsNumberInput,
    },
    props: {
        /**
         * The localised main text of the question that prompts the user to answer
         */
        label: {
            type: String,
            required: true,
        },
        labelFor: {
            type: String,
            required: true,
        },
        /**
         * The localised hint text of the question that clarifies the answer expected
         * from the user
         */
        hint: {
            type: String,
            default: '',
        },
        /**
         * Any additional styling  classes that should be applied to the question
         * as a whole
         */
        fieldClass: {
            type: String,
            required: true,
        },
        /**
         * Which selector type should be used for the question.
         * `radio|number`.
         */
        fieldType: {
            type: String,
            default: 'radio',
            validator: (value) => value.match(
                /(radio|number)/,
            ),
        },
        /**
         * The identifier for the field which should be provided when updating the
         * value of the field to the calculator as a whole
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * An array of options that the user can select. Each should be an object with a `value`
         * string (that is submitted as part of the answer to the carbon calculation), a `text`
         * string which denotes what the answer represents, and an `icon` string which dictates
         * which icon is rendered on the radio button.
         */
        options: {
            type: Array,
            required: true,
        },
        /**
         * Minimum number value, only needed for number inputs
         */
        minimum: {
            type: Number,
            default: 0,
        },
        /**
         * Maximum number value, only needed for number inputs
         */
        maximum: {
            type: Number,
            default: 0,
        },
    },
    emits: ['updateFieldData'],
    methods: {
        /**
         * Fired when the value of the nested input changes, emits the new value up to the
         * questionnaire to be tracked in the running total.
        */
        valueChanged(newData) {
            this.$emit('updateFieldData', newData);
        },
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator-question {
        margin-bottom: $spacer-200;
    }

    .vs-carbon-calculator-question__label {
        width: 100%;
    }
</style>
