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
                <span class="visually-hidden">{{ fieldName }}</span>
                {{ validationMessages[error] || genericValidation[error] }}
            </p>
        </div>

        <BFormRadioGroup
            :id="fieldName"
            :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
            :aria-describedby="ariaDescription"
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
                :class="[
                    checkedValue === option.value
                        ? 'vs-radio-button__option--checked' : '', {
                        'vs-radio-button__option--disabled': option.disabled,
                    }]"
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
                    :disabled="option.disabled"
                >
                    <span>{{ option.text }}</span>
                </BFormRadio>
            </div>
        </BFormRadioGroup>

        <p
            v-if="hintText"
            class="hint-text"
            :id="`hint-${fieldName}`"
        >
            {{ hintText }}
        </p>
    </div>
</template>

<script>
import {
    BFormRadioGroup,
    BFormRadio,
} from 'bootstrap-vue-next';
import useVuelidate from '@vuelidate/core';
import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

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
        ariaDescriptionMixin,
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
        /**
         * An optional string which provides the user further information about how to answer
         * the question. Appears below the radio button input.
         */
        hintText: {
            type: String,
            default: '',
        },
    },
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            inputVal: this.value,
            clearErrorsOnFocus: false,
            checkedValue: this.value,
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
    @include forms-common;

    .vs-radio-button {
        width: 100%;
        margin: -#{$spacer-075} $spacer-0;

        .vs-radio-button__option {
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            box-sizing: border-box;
            background-color: $vs-color-background-inverse;
            padding: $spacer-075 $spacer-0;
            width: 100%;
            font-size: $font-size-4;

            @include media-breakpoint-up(md) {
                padding: $spacer-075;
                width: 50%;

                &:nth-of-type(odd) {
                    padding-left: $spacer-0;
                }

                &:nth-of-type(even) {
                    padding-right: $spacer-0;
                }
            }

            * {
                cursor: pointer;
            }

            .form-check {
                width: 100%;
                border: 1px solid $vs-color-border-primary;
                height: 3rem;
                box-sizing: border-box;
                margin-bottom: 0;
                display: inline-flex;
                align-items: center;
                transition: $duration-quickly background;

                &:hover:not(:focus):not(:focus-within):not(:active) {
                    background-color: $vs-color-background-hover;
                    border-color: $vs-color-background-hover;
                    color: $vs-color-text-inverse;

                    label {
                        &::before {
                            outline: 2px solid $vs-color-background-hover;
                        }
                    }
                }

                &:focus-within, &:focus {
                    background-color: $vs-color-background-primary;
                    border-color: $vs-color-border-inverse;
                    border-width: 2px;
                    outline: 2px solid $vs-color-border-primary;
                    color: $vs-color-text-inverse;
                    width: calc(100% - 4px);
                    height: calc(3rem - 4px);
                    transform: translate(2px, 2px);
                }

                &:active {
                    background-color: $vs-color-background-active;
                    border-color: $vs-color-background-active;
                    color: $vs-color-text-primary;
                }

                label {
                    width: 100%;
                    transform: translateY(-2px);
                    padding: $spacer-050 $spacer-100;
                    font-weight: normal;

                    span {
                        display: inline-block;
                        width: calc(100% - #{$spacer-300});
                    }

                    &::before {
                        content: "";
                        display: inline-block;
                        vertical-align: middle;
                        width: $spacer-150;
                        height: $spacer-150;
                        outline: 2px solid $vs-color-border-primary;
                        border-radius: 50%;
                        vertical-align: baseline;
                        transform: translateY(6px);
                        margin-right: $spacer-100;
                        background-color: $vs-color-background-inverse;
                    }
                }
            }

            &--disabled {
                cursor: default;

                .form-check,
                .form-check:hover:not(:focus):not(:focus-within):not(:active),
                .form-check:focus,
                .form-check:active {
                    background-color: $vs-color-background-disabled;
                    border-color: $vs-color-background-disabled;
                    color: $vs-color-text-inverse;

                    label {
                        &::before {
                            outline: 2px solid $vs-color-background-disabled;
                        }
                    }
                }

                .form-check-input[disabled] ~ .form-check-label,
                .form-check-input:disabled ~ .form-check-label {
                    opacity: 1;
                }

                * {
                    cursor: default;
                }
            }

            &--checked {
                .form-check {
                    background-color: $vs-color-background-active;
                    border-color: $vs-color-background-active;
                    color: $vs-color-text-primary;
                    border-width: 2px;

                    label {
                        &::before {
                            border: $spacer-025 solid $vs-color-background-active;
                            background-color: $vs-color-background-primary;
                        }
                    }
                }
            }
        }

        .form-check-input,
        .form-check-input:disabled{
            opacity: 0;
            width: 0;
        }

        .hint-text {
            margin-top: $spacer-050;
        }
    }
</style>
