<template>
    <BFormGroup
        :label="label"
        :label-for="labelFor"
        :class="fieldClass"
        data-test="vs-carbon-calculator-question"
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

                <!-- eslint-disable -->
                <label
                    class="vs-carbon-calculator__question"
                    :for="fieldName"
                >
                    {{ label }}
                </label>
                <!-- eslint-enable -->

                <BFormRadioGroup
                    :id="fieldName"
                >
                    <div
                        class="vs-carbon-calculator__radio"
                        v-for="
                            (option, optionIndex) in
                                options
                        "
                        :key="optionIndex"
                    >
                        <BFormRadio
                            :value="option.value"
                            :hint-text="hintText"
                            :name="fieldName"
                            :id="fieldName + option.value"
                            @change="valueChanged({
                                field: fieldName,
                                value: option.value,
                            })"
                        >
                            <div class="vs-carbon-calculator__radio-icon">
                                <VsIcon
                                    :name="option.icon"
                                    size="xl"
                                />
                            </div>
                            {{ option.text }}
                        </BFormRadio>
                    </div>
                </BFormRadioGroup>
            </template>
        </div>
    </BFormGroup>
</template>

<script>
import {
    BFormGroup,
    BFormRadioGroup,
    BFormRadio,
} from 'bootstrap-vue-next';
import VsHeading from '@components/elements/heading/Heading.vue';
import VsIcon from '@components/elements/icon/Icon.vue';

/**
 * @displayName Carbon Form Question
 */
export default {
    name: 'VsCarbonCalculatorQuestion',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormRadioGroup,
        BFormRadio,
        VsHeading,
        VsIcon,
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
         * Any subtext that needs to be provided to clarify how to answer the question
         */
        hintText: {
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

</style>
