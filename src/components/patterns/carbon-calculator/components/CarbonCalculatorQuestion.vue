<template>
    <BFormGroup
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
                    class="vs-carbon-calculator-question"
                    :for="fieldName"
                >
                    {{ label }}
                </label>
                <!-- eslint-enable -->

                <BFormRadioGroup
                    :id="fieldName"
                >
                    <div
                        class="vs-carbon-calculator-radio"
                        v-for="
                            (option, optionIndex) in
                                options
                        "
                        :key="optionIndex"
                    >
                        <BFormRadio
                            :value="option.value"
                            :name="fieldName"
                            :id="fieldName + option.value"
                            @change="valueChanged({
                                field: fieldName,
                                value: option.value,
                            })"
                        >
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
        width: 100%;
    }

    .vs-carbon-calculator-radio {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        padding: $spacer-2;
        cursor: pointer;

        &:nth-of-type(odd) {
            padding-left: $spacer-0;
        }

        &:nth-of-type(even) {
            padding-right: $spacer-0;
        }

        .form-check {
            border: 2px solid $color-theme-primary;
            padding: $spacer-2 $spacer-4;
        }

        * {
            cursor: pointer;
        }

        label {
            width: 100%;
                transform: translateY(-4px);

            &::before {
                content: "";
                display: inline-block;
                width: $spacer-6;
                height: $spacer-6;
                border: 2px solid $color-theme-primary;
                border-radius: 50%;
                vertical-align: baseline;
                transform: translateY(6px);
                margin-right: $spacer-2;
            }
        }

        .form-check-inline {
            width: 100%;
        }

        input {
            display: none;
        }

        input:checked ~ label {
            &::before {
                background-color: $color-theme-primary;
            }
        }
    }
</style>
