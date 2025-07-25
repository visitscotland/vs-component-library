<template>
    <div class="vs-select">
        <p
            class="hint-text"
            :id="`hint-${fieldName}`"
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
                v-show="!reAlertErrors"
                :key="error"
                class="error mb-0"
            >
                <span class="visually-hidden">{{ fieldName }}</span>
                {{ validationMessages[error] || genericValidation[error] }}
            </p>
        </div>

        <div class="vs-select__container  mt-050">
            <BFormSelect
                v-model="inputVal"
                v-bind="$attrs"
                :options="fieldOptions"
                :name="fieldName"
                :id="fieldName"
                @change="emitStatus"
                @blur="emitStatus"
                data-test="vs-select"
                data-testid="vs-select"
                class="vs-select__element"
                :required="isRequired"
                :aria-invalid="(v$.inputVal && v$.inputVal.$anyError) || invalid"
                :aria-describedby="ariaDescription"
                :class="errorClass"
                :autocomplete="autocompleteValue(fieldName)"
            />
            <span class="vs-select__focus" />
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { BFormSelect } from 'bootstrap-vue-next';

import axios from 'axios';

import validateFormElementMixin from '../../mixins/validateFormElementMixin';
import ariaDescriptionMixin from '../../mixins/ariaDescriptionMixin';

/**
 * A select element allows a user to choose a value from a list of options.
 *
 * @displayName Select
 */

export default {
    name: 'VsSelect',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BFormSelect,
    },
    mixins: [
        validateFormElementMixin,
        ariaDescriptionMixin,
    ],
    props: {
        /**
         * Options for select element
         */
        options: {
            type: Array,
            required: true,
        },
        /**
         * Name of the field (for name and id attributes)
         */
        fieldName: {
            type: String,
            required: true,
        },
        /**
         * Default value of the field
         */
        value: {
            type: String,
            default: '',
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
         * Prop to trigger manual validation
         */
        triggerValidate: {
            type: Boolean,
            default: false,
        },
        /**
         * Prop to define invalid from parent
         */
        invalid: {
            type: Boolean,
            default: false,
        },
        /**
         * Validation messages
         */
        validationMessages: {
            type: Object,
            default() {
                return {
                };
            },
        },
        /**
         * URL for list of countries file - this will be used
         * if the 'country' prop is set to true
         */
        countryListUrl: {
            type: String,
            default: '',
        },
        /*
         * Content for hint text
         */
        hintText: {
            type: String,
            default: '',
        },
        /**
         * Whether the options should be a countries list
         */
        countries: {
            type: Boolean,
            default: false,
        },
        /*
         * Fallback translated validation
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
    },
    emits: [
        'toggleAction',
        'updated',
    ],
    setup: () => ({
        v$: useVuelidate(),
    }),
    data() {
        return {
            inputVal: this.value,
            touched: false,
            countryList: [],
        };
    },
    computed: {
        errorClass() {
            return (this.errorsList.length > 0 && this.v$.inputVal && this.v$.inputVal.$anyDirty)
                || this.invalid
                ? 'vs-select__element--error' : '';
        },
        fieldOptions() {
            return this.countries ? this.countryList : this.options;
        },
    },
    watch: {
        inputVal(newValue) {
            this.emitStatus();

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
        /**
         * Watch for prop changing to allow parent
         * to trigger validation
         */
        triggerValidate() {
            this.manualValidate();
        },
    },
    beforeMount() {
        /**
         * import country list
         */
        if (this.countries) {
            axios.get(this.countryListUrl)
                .then((response) => {
                    this.countryList = response.data.countries;
                });
        }
    },
    methods: {
        autocompleteValue(fieldName) {
            // https://html.spec.whatwg.org/multipage/forms.html#enabling-client-side-automatic-filling-of-form-controls
            let autocomplete;

            switch (fieldName) {
            case 'Country':
                autocomplete = 'country-name';
                break;

            default:
                autocomplete = 'on';
                break;
            }

            return autocomplete;
        },
    },
    validations() {
        return this.rules;
    },
};
</script>

<style lang="scss">
    @include forms-common;

    .vs-select {
        &__container {
            position: relative;
            width: 100%;
            cursor: pointer;
            height: 50px;
            border-radius: 0;

            &::after {
                font-family: "Font Awesome 6 Pro";
                content: "\f078";
                display: inline-block;
                position: absolute;
                top: calc(50% - #{$spacer-075});
                right: $spacer-100;
                pointer-events: none;
                color: $vs-color-icon-cta-on-light;
            }
        }

        &__element {
            // A reset of styles, including removing the default dropdown arrow
            appearance: none;
            background-color: $vs-color-background-inverse;
            background-image: none;
            border: none;
            padding: 0 $spacer-100 0;
            margin: 0;
            width: 100%;
            font-family: inherit;
            font-size: $font-size-4;
            cursor: inherit;
            line-height: inherit;
            height: 50px;
            @include form-element-styles;

            &--error {
                @include form-error-state;
            }

            &:focus {
                outline: none;
                box-shadow: none;

                & + .vs-select__focus {
                    position: absolute;
                    top: -1px;
                    left: -1px;
                    right: -1px;
                    bottom: -1px;
                    pointer-events: none;
                    @include form-focus-state;
                }
            }
        }
    }
</style>
