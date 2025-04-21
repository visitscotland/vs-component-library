<template>
    <div :class="checkBoxGroupClasses">
        <BFormGroup :label="label">
            <p
                class="hint-text"
                :id="`hint-${fieldName}`"
            >
                {{ hintText }}
            </p>

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

            <BFormCheckboxGroup
                v-if="fieldName"
                :id="`checkbox-group-${fieldName}`"
                v-model="selected"
                :name="fieldName"
            >
                <VsCheckbox
                    v-for="item in checkboxItems"
                    :key="item"
                    :field-name="item.fieldName"
                    :label="item.label"
                    :value="item.label"
                    @change="emitStatus"
                />
            </BFormCheckboxGroup>
        </BFormGroup>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { BFormGroup, BFormCheckboxGroup } from 'bootstrap-vue-next';
import VsCheckbox from '@/components/checkbox/Checkbox.vue';
import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

/**
 * Checkboxes allow a user to select multiple options from in a
 * list or mark an individual item as selected.
 *
 * @displayName CheckboxGroup
 */

export default {
    name: 'VsCheckboxGroup',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormGroup,
        BFormCheckboxGroup,
        VsCheckbox,
    },
    mixins: [
        validateFormElementMixin,
        ariaDescriptionMixin,
    ],
    props: {
        /**
         * Field name for checkbox group.
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * Label for checkbox group.
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
         * Whether the parent form has just been submitted, if so all errors
         * need to be wiped from then re-added to the DOM to inform screen
         * readers that they should be re-declared
         */
        reAlertErrors: {
            type: Boolean,
            default: false,
        },
        /**
         * Array containing data for each checkbox within the group.
         */
        checkboxItems: {
            type: Array,
            required: true,
        },
    },
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            selected: [],
            inputVal: [],
            errors: [],
        };
    },
    computed: {
        checkBoxGroupClasses() {
            return {
                'vs-checkbox-group': true,
                'vs-checkbox-group--error': this.isInvalid,
            };
        },
    },
    watch: {
        selected(newValue) {
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
