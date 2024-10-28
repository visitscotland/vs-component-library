<template>
    <div data-test="vs-textarea">
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

        <BFormTextarea
            ref="input"
            class="vs-textarea"
            :class="elementClass"
            v-model="inputVal"
            :id="fieldName"
            :name="name ? name : fieldName"
            :placeholder="placeholder"
            :required="isRequired"
            :autocomplete="autocompleteValue(fieldName)"
            :v="inputVal"
            :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
            :aria-describedby="ariaDescription"
            :disabled="disabled"
            :rows="rows"
            @blur="validateErrors"
            @change="validateErrors"
            @focus="resetErrors"
        />
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { BFormTextarea } from 'bootstrap-vue-next';
import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

/**
 * An input allows a user to enter a short amount of text.
 *
 * @displayName Input
 */

export default {
    name: 'VsInput',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormTextarea,
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
         * Name of the field (if different from ID)
         */
        name: {
            type: String,
            default: '',
        },
        /**
         * Whether the browser can autocomplete the field or not.
         */
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
        * Option to disable the input
        */
        disabled: {
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
         * Element placeholder text
         */
        placeholder: {
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
        /** The number of visible lines of text */
        rows: {
            type: Number || String,
            default: 2,
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
            let error = '';

            if (this.isInvalid || this.errorsList.length) {
                error = 'vs-input--error';
            }

            const nameClass = `vs-input--${this.fieldName}`;

            return `${nameClass} ${error}`;
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
         * Clears the input on button click
         * and adds focus back to the input
         */
        clearInputAndFocus() {
            this.clearInput();
            this.focusOnInput();
        },
        /**
         *  return autocomplete value in appropriate places
         */
        autocompleteValue() {
            // https://html.spec.whatwg.org/multipage/forms.html#enabling-client-side-automatic-filling-of-form-controls
            return this.autoComplete ? 'on' : 'off';
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
    },
    validations() {
        return this.rules;
    },
};
</script>

<style lang="scss">
@include forms-common;

.vs-textarea {
    @include form-element-styles;
    margin-top: $spacer-050;

    &.form-control-md {
        height: 50px;
    }

    &:focus {
        @include form-focus-state;
    }

    &--error {
        @include form-error-state;
    }

    &:disabled {
        @include form-disabled-state;
    }
}
</style>
