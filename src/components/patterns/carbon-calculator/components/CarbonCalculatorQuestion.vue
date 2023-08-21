<template>
    <BFormGroup
        :class="fieldClass"
        data-test="vs-carbon-calculator-question"
        class="vs-carbon-calculator-question"
    >
        <div
            :class="fieldClass"
        >
            <template v-if="fieldType === 'radio'">
                <VsHeading
                    level="3"
                >
                    {{ fieldCategory }}
                </VsHeading>

                <VsRadioButton
                    :fieldName="fieldName"
                    :label="label"
                    :options="options"
                    :required="true"
                    @updateFieldData="valueChanged"
                />

                <!-- eslint-disable -->
                <label
                    class="vs-carbon-calculator-question__label"
                    :for="fieldName"
                >
                    {{ label }}
                </label>
                <!-- eslint-enable -->
            </template>
        </div>
    </BFormGroup>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue-next';
import VsRadioButton from '@components/elements/radio-button/RadioButton.vue';
import VsHeading from '@components/elements/heading/Heading.vue';

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
        VsHeading,
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
         * Any additional styling  classes that should be applied to the question
         * as a whole
         */
        fieldClass: {
            type: String,
            required: true,
        },
        /**
         * Which selector type should be used for the question. Currently this is
         * always a radio button but it may be extended beyond that.
         */
        fieldType: {
            type: String,
            default: 'radio',
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
         * The localised name of the category which the question is part of. Displayed
         * at the top of the question to provide context for the user.
         */
        fieldCategory: {
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
    },
    methods: {
        valueChanged(newData) {
            this.$emit('updateFieldData', newData);
        },
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator-question {
        margin-bottom: $spacer-4;
    }

    .vs-carbon-calculator-question__label {
        width: 100%;
    }
</style>
