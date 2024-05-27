<template>
    <div
        data-test="vs-number-input"
    >
        <p
            class="hint-text"
            :id="`hint-${fieldName}`"
            v-if="hintText"
        >
            {{ hintText }}
        </p>

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

        <VsButton
            class="vs-number-input__increment"
            :iconOnly="true"
            size="sm"
            icon="minus"
            :disabled="(inputVal <= minimumNumber) ? true : null"
            @click="decrementValue"
        >
            <span class="visually-hidden">
                Add 1
            </span>
        </VsButton>

        <BFormInput
            ref="input"
            type="Number"
            class="vs-number-input"
            v-model="inputVal"
            :class="elementClass"
            :id="fieldName"
            :name="fieldName"
            :required="isRequired"
            :v="inputVal"
            :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
            :aria-describedby="ariaDescription"
            :maxlength="validationRules.maxLength ? validationRules.maxLength : null"
            :minlength="validationRules.minLength ? validationRules.minLength : null"
            :min="minimumNumber || null"
            :max="maximumNumber || null"
            @blur="controlBlurred"
            @change="validateErrors"
            @focus="resetErrors"
        />

        <VsButton
            class="vs-number-input__increment"
            :iconOnly="true"
            size="sm"
            icon="plus"
            :disabled="(inputVal >= maximumNumber) ? true : null"
            @click="incrementValue"
        >
            <span class="visually-hidden">
                Remove 1
            </span>
        </VsButton>

        <VsButton
            v-if="showClearButton"
            class="vs-number-input__clear-button d-none d-lg-block"
            data-test="input-clear-button"
            variant="transparent"
            icon="close"
            size="md"
            icon-only
            @click.prevent="clearInputAndFocus()"
        >
            <span class="visually-hidden">
                {{ clearButtonText }}
            </span>
        </VsButton>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { BFormInput } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';
import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

/**
 * A number input allows a user to select a number within a defined range
 *
 * @displayName NumberInput
 */

export default {
    name: 'VsInput',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormInput,
        VsButton,
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
            type: Number,
            default: 0,
        },
        /**
         * Name of the field (for name and id attributes)
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * Assigns a floor that the number input can be set to, only relevant
         * if the type is number
         */
        minimumNumber: {
            type: Number,
            default: 0,
        },
        /**
         * Assigns a ceiling that the number input can be set to, only relevant
         * if the type is number
         */
        maximumNumber: {
            type: Number,
            default: 10,
        },
        autoComplete: {
            type: Boolean,
            default: true,
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
         * Content for hint text
         */
        hintText: {
            type: String,
            default: '',
        },
        /**
         * Text for the 'clear' button
         * the existence of this will defined whether the button
         * also exists
         */
        clearButtonText: {
            type: String,
            default: '',
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
    },
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            inputVal: this.value,
            clearErrorsOnFocus: false,
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
            this.inputVal = 0;
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
         * Clears the input on button click
         * and adds focus back to the input
         */
        clearInputAndFocus() {
            this.clearInput();
            this.focusOnInput();
        },
        /**
         * Check if an entered number value is within the specified bounds and
         * resets it if not, then passes to the validation process
         */
        controlBlurred() {
            if (this.inputVal < this.minimumNumber) {
                this.inputVal = this.minimumNumber;
            }

            if (this.inputVal > this.maximumNumber) {
                this.inputVal = this.maximumNumber;
            }

            this.validateErrors();
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
        /**
         * If the input value is a number, decrement it by one down to the minimum value
         */
        decrementValue(event) {
            if (event) {
                event.preventDefault();
            }

            this.inputVal = Math.max(this.inputVal - 1, this.minimumNumber);
        },
        /**
         * If the input value is a number, increment it by one up to the maximum value
         */
        incrementValue(event) {
            if (event) {
                event.preventDefault();
            }

            this.inputVal = Math.min(this.inputVal + 1, this.maximumNumber);
        },
    },
    validations() {
        return this.rules;
    },
};
</script>

<style lang="scss">
@include forms-common;

.vs-number-input {
    @include form-element-styles;
    display: inline-block;
    width: $spacer-10;
    text-align: center;
    margin-top: $spacer-2;
    margin-left: $spacer-4;
    margin-right: $spacer-4;
    font-size: $font-size-lead-md;
    padding: $spacer-2 $spacer-3;

    &.form-control-md {
        height: 50px;
    }

    &:focus {
        @include form-focus-state;
    }

    &--error {
        @include form-error-state;
    }

    &__clear-button {
        position: absolute;
        right: $spacer-5;
        top: 50%;
        transform: translate(0, -50%);
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &__increment {
        width: $spacer-7;
        height: $spacer-7;
    }
}
</style>
