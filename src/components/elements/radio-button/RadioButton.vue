<template>
    <div
        class="vs-radio-button"
        data-test="vs-radio-button"
    >
        <div
            role="alert"
            aria-live="assertive"
            v-if="(errorsList.length) || invalid"
            :id="`error-${fieldName}`"
        >
            <p
                v-for="error in errorsList"
                v-show="!reAlertErrors && !clearErrorsOnFocus"
                :key="error"
                class="error mb-0"
            >
                <span class="sr-only">{{ fieldName }}</span>
                {{ validationMessages[error] || genericValidation[error] }}
            </p>
        </div>

        <BFormRadioGroup
            :id="fieldName"
            :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
            :aria-describedby="(v$.inputVal && v$.inputVal.$anyError) || invalid
                ? `error-${fieldName}` : `hint-${fieldName}`"
            @blur="validateErrors"
            @change="validateErrors"
            @focus="resetErrors"
        >
            <div
                v-for="
                    (option, optionIndex) in
                        options
                "
                class="vs-radio-button__option"
                :class="checkedValue === option.value
                    ? 'vs-radio-button__option--checked' : ''
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
    </div>
</template>

<script>
import {
    BFormRadioGroup,
    BFormRadio,
} from 'bootstrap-vue-next';
import useVuelidate from '@vuelidate/core';
import validateFormElementMixin from '../../../mixins/validateFormElementMixin';

/**
 * An input allows a user to enter a short amount of text.
 *
 * @displayName Input
 */

export default {
    name: 'VsRadioButton',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormRadioGroup,
        BFormRadio,
    },
    mixins: [
        validateFormElementMixin,
    ],
    props: {
        /**
         * Default value of the field
         */
        value: {
            type: String,
            default: '',
        },
        /**
         * Name of the field (for name and id attributes)
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * Rules for Vuelidate plugin
         */
        validationRules: {
            type: Object,
            default() {
                return {
                };
            },
        },
        /**
         * Prop to define invalid from parent
         */
        invalid: {
            type: Boolean,
            default: false,
        },
        /**
         * Prop to trigger manual validation. Used by a parent
         * component to trigger validation eg. when the submit
         * button is clicked.
         */
        triggerValidate: {
            type: Boolean,
            default: false,
        },
        /**
         * Specific validation messages for different
         * types of validation
         */
        validationMessages: {
            type: Object,
            default() {
                return {
                };
            },
        },
        /**
         * Fallback translated validation - this is a set of
         * validation messages to be used when no specific
         * validation message is needed, eg. "This field is required"
         */
        genericValidation: {
            type: Object,
            default() {
                return {
                };
            },
        },
        /**
         * Whether the parent form has just been submitted, if so all errors
         * need to be wiped from then re-added to the DOM to inform screen
         * readers that they should be re-declared
         */
        reAlertErrors: {
            type: Boolean,
            default: false,
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
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            inputVal: this.value,
            clearErrorsOnFocus: false,
            checkedValue: '',
        };
    },
    computed: {
        /**
         * element type class plus error classes
         */
        elementClass() {
            const errorClass = (this.v$.inputVal && this.v$.inputVal.$anyError) || this.invalid ? 'vs-input--error' : '';
            const nameClass = `vs-input--${this.fieldName}`;

            return `${errorClass} ${nameClass}`;
        },
        showClearButton() {
            if (this.inputVal.length && this.clearButtonText !== '') {
                return true;
            }

            return false;
        },
        errorClass() {
            return (this.v$.inputVal && this.v$.inputVal.$anyError) || this.invalid ? 'vs-input--error' : '';
        },
    },
    watch: {
        /**
         * Watch for prop changing to allow parent
         * to trigger validation
         */
        triggerValidate() {
            this.manualValidate();
        },
        inputVal(newValue) {
            /**
             * Emit watchable data when the field is changed
             * @type {object}
             * @property {string} field the name of the field
             * @property {string} value the current value of the field
             */
            this.$emit('updated', {
                field: this.fieldName,
                value: newValue,
            });
        },
        value(newValue) {
            this.inputVal = newValue;
        },
    },
    methods: {
        /**
         * Clear any text entered in the input
         */
        clearInput() {
            this.inputVal = '';
        },
        /**
         * Focus on the input
         */
        focusOnInput() {
            this.$nextTick(() => {
                this.$refs.input.$el.focus();
            });
        },
        /**
         * Validate errors on blur, and re-render them to the screen for screen
         * reader notice
         */
        validateErrors() {
            this.clearErrorsOnFocus = false;
            this.emitStatus();
        },
        /**
         * Reset field errors on focus to allow screen reader to notice them if still
         * present on blur
         */
        resetErrors() {
            this.clearErrorsOnFocus = true;
        },
        valueChanged(newData) {
            this.checkedValue = newData.value;
            this.$emit('updateFieldData', newData);
        },
    },
    validations() {
        return this.rules;
    },
};
</script>

<style lang="scss">
    .vs-radio-button {
        width: 100%;

        .vs-radio-button__option {
            width: 50%;
            display: inline-block;
            vertical-align: top;
            padding: $spacer-3;
            cursor: pointer;
            box-sizing: border-box;

            &:nth-of-type(odd) {
                padding-left: $spacer-0;
            }

            &:nth-of-type(even) {
                padding-right: $spacer-0;
            }

            background-color: $color-white;

            * {
                cursor: pointer;
            }
        }

        .form-check {
            border: 1px solid $color-theme-primary;
            height: 3.5rem;
            box-sizing: border-box;

            &:hover:not(:focus):not(:focus-within):not(:active) {
                background-color: $color-purple;
                border-color: $color-purple;
                color: $color-white;
            }

            &:focus-within, &:focus, &:active {
                background-color: $color-purple;
                border-color: $color-white;
                border-width: 2px;
                outline: 2px solid $color-theme-primary;
                color: $color-white;
                width: calc(100% - 4px);
                height: calc(3.5rem - 4px);
                transform: translate(2px, 2px);
            }

            &:disabled {
                background-color: $color-secondary-gray-tint-4;
                color: $color-white;
            }
        }

        .form-check label {
            width: 100%;
            transform: translateY(-2px);
            padding: $spacer-2 $spacer-4;
            font-weight: normal;

            &::before {
                content: "";
                display: inline-block;
                width: $spacer-6;
                height: $spacer-6;
                outline: 2px solid $color-theme-primary;
                border-radius: 50%;
                vertical-align: baseline;
                transform: translateY(6px);
                margin-right: $spacer-4;
                background-color: $color-white;
            }
        }

        .form-check-inline {
            width: 100%;
        }

        input {
            opacity: 0;
            width: 0;
        }

        .vs-radio-button__option--checked {
            .form-check {
                border-width: 2px;

                label {
                    &::before {
                        border: $spacer-1 solid $color-white;
                        background-color: $color-theme-primary;
                    }
                }
            }
        }
    }
</style>
