<template>
    <div
        :class="checkBoxClasses"
    >
        <p
            class="hint-text"
            :id="`hint-${fieldName}`"
        >
            {{ hintText }}
        </p>

        <div
            v-if="infoText !== ''"
            v-html="infoText"
        />

        <div
            role="alert"
            aria-live="assertive"
            v-if="errorsList.length || invalid"
            :id="`error-${fieldName}`"
        >
            <p
                v-for="error in errorsList"
                v-show="!reAlertErrors"
                :key="error"
                class="error mb-0"
            >
                <span class="visually-hidden">{{ fieldName }}</span>
                {{ validationMessages[error] || genericValidation[error] }}
            </p>
        </div>

        <BFormCheckbox
            v-if="fieldName"
            v-model="inputVal"
            class="me-100"
            :name="fieldName"
            :id="fieldName"
            :value="value"
            :unchecked_value="`not_${value}`"
            v-bind="$attrs"
            data-test="vs-checkbox"
            @blur="emitStatus"
            @change="emitStatus"
            :required="isRequired"
            :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
            :aria-describedby="ariaDescription"
        >
            <span class="vs-checkbox__label">{{ label }}</span>
        </BFormCheckbox>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { BFormCheckbox } from 'bootstrap-vue-next';
import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

/**
 * Checkboxes allow a user to select multiple options from in a
 * list or mark an individual item as selected.
 *
 * @displayName Checkbox
 */

export default {
    name: 'VsCheckbox',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormCheckbox,
    },
    mixins: [
        validateFormElementMixin,
        ariaDescriptionMixin,
    ],
    props: {
        /**
         * Name of the input
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * Value when checked
         */
        value: {
            type: String,
            default: '',
        },
        /**
         * Label for checkbox
         */
        label: {
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
         * Prop to define invalid from parent
         */
        invalid: {
            type: Boolean,
            default: false,
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
         * Content for info text
         */
        infoText: {
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
        /**
         * Size of the checkbox
         * `sm|md|lg`.
         */
        size: {
            type: String,
            default: undefined,
            validator: (value) => value.match(/(sm|md|lg)/),
        },
    },
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            inputVal: '',
            errors: [],
        };
    },
    computed: {
        checkBoxClasses() {
            return {
                'vs-checkbox': true,
                'vs-checkbox--error': this.isInvalid,
                'vs-checkbox--small': this.size === 'sm',
            };
        },
    },
    watch: {
        value(newValue) {
            this.inputVal = newValue;
        },
        /**
         * Watch for prop changing to allow parent
         * to trigger validation
         */
        triggerValidate() {
            this.manualValidate();
        },
    },
    validations() {
        return this.rules;
    },
};
</script>

<style lang="scss">
    @include forms-common;

    .vs-checkbox {
        @include form-checkbox(38px, $font-size-6, 2);

        input[type="checkbox"] {
            margin: $spacer-050 $spacer-100 0 0;
        }

        .form-check {
            display: flex;
            align-items: center;
            padding-left: 0;
            margin-bottom: 0;
        }

        label {
            flex: 1;
            margin-bottom: 0;
        }

        &__label {
            display: inline-block;
            font-size: $font-size-body;
            font-weight: $vs-font-weight-regular;
        }

        &--error {
            input[type="checkbox"] {
                outline: none;

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    @include form-error-state;
                }
            }
        }

        &--small {
            @include form-checkbox(16px, $font-size-2, 1.3);
        }

        .form-check-input[disabled] ~ .form-check-label,
        .form-check-input:disabled ~ .form-check-label,
        .form-check-input[disabled] {
            opacity: $opacity-100;
            color: $vs-color-text-disabled;
        }

        input[type=checkbox].form-check-input[disabled] {
            outline: $vs-color-border-disabled 1px solid;
        }
    }
</style>
