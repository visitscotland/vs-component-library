<template>
    <div
        class="vs-form"
        data-test="vs-form"
    >
        <!-- element into which the (completely empty) form is embedded invisibly -->
        <form class="d-none" />

        <template v-if="!submitted">
            <form
                @submit.prevent="preSubmit"
            >
                <fieldset>
                    <legend
                        class="vs-form__main-heading vs-heading--style-level-2 float-none"
                        data-test="vs-form__main-heading"
                    >
                        {{ getTranslatedContent('heading') }}
                    </legend>
                    <BFormGroup
                        v-for="(field, index) in formData.fields"
                        :key="field.name"
                        :label="needsLabel(field) ? getTranslatedLabel(field.name, index) : ''"
                        :label-for="needsLabel(field) ? field.name : ''"
                        :class="conditionalElementClass(field.name)"
                    >
                        <legend
                            v-if="!isUndefined(field.descriptor)
                                && field.element === 'checkbox'"
                        >
                            {{ getTranslatedLegend(field.name, index) }}
                        </legend>
                        <div
                            :class="conditionalElementClass(field.name)"
                        >
                            <template v-if="field.element === 'input'">
                                <VsInput
                                    :ref="field.name"
                                    @status-update="updateFieldData"
                                    :field-name="field.name"
                                    :type="field.type"
                                    :validation-rules="field.validation || {}"
                                    :validation-messages="getTranslatedValidation(field.name, index)
                                        || {}"
                                    :generic-validation="getMessagingData('validation', language)"
                                    :invalid="errorFields.indexOf(field.name) > -1 ? true : false"
                                    :trigger-validate="triggerValidate"
                                    :hint-text="getTranslatedHint(field.name, index)"
                                    :placeholder="field.placeholder || ''"
                                    :re-alert-errors="reAlertErrors"
                                />
                            </template>

                            <template v-if="field.element === 'select'">
                                <VsSelect
                                    :options="getTranslatedOptions(field.name, index)"
                                    :ref="field.name"
                                    @status-update="updateFieldData"
                                    :field-name="field.name"
                                    :validation-rules="field.validation || {}"
                                    :validation-messages="getTranslatedValidation(field.name, index)
                                        || {}"
                                    :generic-validation="getMessagingData('validation', language)"
                                    :invalid="errorFields.indexOf(field.name) > -1 ? true : false"
                                    :trigger-validate="triggerValidate"
                                    :country-list-url="countryListUrl"
                                    :countries="field.countries"
                                    :hint-text="getTranslatedHint(field.name, index)"
                                    :re-alert-errors="reAlertErrors"
                                />
                            </template>

                            <template v-if="field.element === 'checkbox'">
                                <VsCheckbox
                                    :key="field.name"
                                    :ref="field.name"
                                    :name="field.name"
                                    :value="field.value"
                                    :label="getTranslatedLabel(field.name, index)"
                                    @status-update="updateFieldData"
                                    :field-name="field.name"
                                    :validation-rules="field.validation || {}"
                                    :validation-messages="getTranslatedValidation(field.name, index)
                                        || {}"
                                    :generic-validation="getMessagingData('validation', language)"
                                    :invalid="errorFields.indexOf(field.name) > -1 ? true : false"
                                    :trigger-validate="triggerValidate"
                                    :optional-text="getMessagingData('optional', language)"
                                    :hint-text="getTranslatedHint(field.name, index)"
                                    :info-text="getTranslatedInfo(field.name, index)"
                                    :re-alert-errors="reAlertErrors"
                                />
                            </template>
                        </div>
                    </BFormGroup>
                </fieldset>

                <VsRecaptcha
                    @verified="onRecaptchaVerify"
                    :site-key="recaptchaKey"
                    :invalid="!recaptchaVerified && showErrorMessage"
                    :language="language"
                    :error-msg="getMessagingData('recaptchaError', language)"
                    class="mt-9"
                    :textarea-label="recaptchaTextareaLabel"
                    :re-alert-errors="reAlertErrors"
                />

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9"
                    @click="preSubmit"
                >
                    {{ getTranslatedContent('submit') }}
                </VsButton>
            </form>
        </template>

        <div
            class="vs-form__no-js"
            data-test="vs-form-no-js"
        >
            <VsIcon
                name="review"
                variant="primary"
                size="xl"
                class="mb-5"
            />
            <div>
                <slot name="no-js" />
            </div>
        </div>

        <div aria-live="assertive">
            <p v-if="submitting">
                <slot name="submitting" />
            </p>

            <template v-if="submitted">
                <VsHeading
                    v-if="getTranslatedContent('successHeading')"
                    level="2"
                >
                    {{ getTranslatedContent('successHeading') }}
                </VsHeading>

                <p
                    class="vs-form__content"
                    v-html="getTranslatedContent('successContent')"
                />
            </template>

            <p v-if="submitError">
                <slot name="submit-error" />
            </p>
        </div>
    </div>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue-next';
import axios from 'axios';
import getEnvValue from '@/utils/get-env-value';
import VsInput from '@/components/input/Input.vue';
import VsSelect from '@/components/select/Select.vue';
import VsCheckbox from '@/components/checkbox/Checkbox.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsRecaptcha from '@/components/recaptcha/Recaptcha.vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import dataLayerMixin from '../../mixins/dataLayerMixin';

/**
 * A form that results in a user posting data to either Marketo or a defined.
 *
 * @displayName Form
 */

export default {
    name: 'VsForm',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsInput,
        VsSelect,
        VsCheckbox,
        BFormGroup,
        VsRecaptcha,
        VsButton,
        VsIcon,
        VsHeading,
    },
    mixins: [dataLayerMixin],
    props: {
        /**
         * If set to true, the form submits through the marketo library
         * using a hidden form. If false it submits using native browser
         * form logic.
         */
        isMarketo: {
            type: Boolean,
            default: true,
        },
        /**
         * The target url for the form, if not marketo
         */
        submitUrl: {
            type: String,
            default: '',
        },
        /**
         * The URL for the form data file
         */
        dataUrl: {
            type: String,
            required: true,
        },
        /**
         * Recaptcha site key string
         */
        recaptchaKey: {
            type: String,
            default: getEnvValue('RECAPTCHA_TOKEN'),
        },
        /**
         * Text for invisible recaptcha textarea - tells
         * screenreader users it's not needed
         */
        recaptchaTextareaLabel: {
            type: String,
            default: 'Does not need any text',
        },
        /**
         * If the form should use sandbox or live Marketo details
         */
        isProd: {
            type: Boolean,
            default: false,
        },
        /**
         * Munchkin ID for the Marketo environment
         */
        munchkinId: {
            type: String,
            required: true,
        },
        /**
         * Marketo instance URL for the form
         */
        marketoInstance: {
            type: String,
            required: true,
        },
        /**
         * Language indicator for content
         */
        language: {
            type: String,
            default: 'en',
        },
        /**
         * URL for generic messaging config
         */
        messagingUrl: {
            type: String,
            required: true,
        },
        /**
         * URL for generic messaging config
         */
        countryListUrl: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            submitted: false,
            submitting: false,
            submitError: false,
            formData: {
            },
            messagingData: {
            },
            form: {
            },
            formIsInvalid: false,
            showErrorMessage: false,
            errorFields: [
            ],
            triggerValidate: false,
            recaptchaVerified: false,
            conditionalFields: {
            },
            inputVal: '',
            reAlertErrors: false,
        };
    },
    computed: {
        formId() {
            return this.isProd ? this.formData.formLiveId : this.formData.formSandboxId;
        },
        showFormHeading() {
            if (!this.isUndefined(this.getTranslatedContent)
                && !this.isUndefined(this.getTranslatedContent('heading'))) {
                return true;
            }

            return false;
        },
    },
    created() {
        this.getFormData();
        this.getGlobalMessaging();
    },
    methods: {
        /**
         * Called on component created. Loads the json file located at this.dataUrl which
         * contains all of the question data, localisations and validation.
         */
        getFormData() {
            axios.get(this.dataUrl)
                .then((response) => {
                    this.formData = response.data;

                    if (this.isMarketo && window.MktoForms2) {
                        window.MktoForms2
                            .loadForm(this.marketoInstance, this.munchkinId, this.formId);
                    }

                    response.data.fields.forEach((field) => {
                        // create a data entry for each field
                        this.form[field.name] = '';

                        // Vue.set no longer needed to ensure reactivity in vue 3
                        if (field.conditional) {
                            this.conditionalFields[field.name] = false;
                        }
                    });
                })
                .catch(() => {});
        },
        /**
         * Called on component created. Loads the generic messaging files which provide
         * global validation and submission messages and localisations.
         */
        getGlobalMessaging() {
            axios.get(this.messagingUrl)
                .then((response) => {
                    this.messagingData = response.data;
                })
                .catch(() => {});
        },
        /**
         * Retrieves the subset of info from a formdata json files which relates to the
         * current language. This is used in all translation functions to check if a
         * translation for a given string is provided.
         */
        getLanguageObj() {
            let languageObj;

            if (!this.isUndefined(this.formData[this.language])) {
                languageObj = this.formData[this.language] || undefined;
            } else {
                languageObj = {
                };
            }

            return languageObj;
        },
        /**
         * Attempts to retrieve the label for a given field from the current language obj.
         * If no localisation is available, or the langauge is en, falls back to the default
         * label for the fieldname.
         */
        getTranslatedLabel(fieldName, index) {
            const languageObj = this.getLanguageObj();
            let labelText = '';

            if (this.language !== 'en'
                && !this.isUndefined(languageObj[fieldName])
                && !this.isUndefined(languageObj[fieldName].label)
            ) {
                labelText = languageObj[fieldName].label;
            } else {
                labelText = this.formData.fields[index].label;
            }

            if (this.showOptionalText(this.formData.fields[index])
                && !this.isUndefined(this.getMessagingData('optional', this.language))) {
                labelText = `${labelText} (${this.getMessagingData('optional', this.language)})`;
            }

            return labelText;
        },
        /**
         * Attempts to retrieve the legend for a given field from the current language obj.
         * If no localisation is available, or the langauge is en, falls back to the default
         * legend for the fieldname.
         */
        getTranslatedLegend(fieldName, index) {
            const languageObj = this.getLanguageObj();
            let legendText = '';

            if (this.language !== 'en'
                && !this.isUndefined(languageObj[fieldName])
                && !this.isUndefined(languageObj[fieldName].descriptor)
            ) {
                legendText = languageObj[fieldName].descriptor;
            } else {
                legendText = this.formData.fields[index].descriptor;
            }

            return legendText;
        },
        /*
         * Attempts to retrieve the info content for a given field from the current language obj.
         * If no localisation is available, or the langauge is en, falls back to the default
         * info content for the fieldname.
         */
        getTranslatedInfo(fieldName, index) {
            const languageObj = this.getLanguageObj();
            let infoText = '';

            if (this.language !== 'en'
                && !this.isUndefined(languageObj[fieldName])
                && !this.isUndefined(languageObj[fieldName].info)
            ) {
                infoText = languageObj[fieldName].info;
            } else {
                infoText = this.formData.fields[index].info;
            }

            return infoText;
        },
        /**
         * Attempts to retrieve the validation for a given field from the current language obj.
         * If no localisation is available, or the langauge is en, falls back to the default
         * validation for the fieldname.
         */
        getTranslatedValidation(fieldName, index) {
            const languageObj = this.getLanguageObj();

            let validationObj;

            if (this.language === 'en'
                && !this.isUndefined(this.formData.fields[index].validationMessages)) {
                validationObj = this.formData.fields[index].validationMessages;
            } else if (!this.isUndefined(languageObj[fieldName])
                && !this.isUndefined(languageObj[fieldName].validationMessages)) {
                validationObj = languageObj[fieldName].validationMessages;
            } else if (this.language === 'en') {
                validationObj = this.formData.fields[index].validationMessages;
            }

            return validationObj;
        },
        /**
         * Attempts to retrieve the options for a given select field from the current language
         * obj. If no localisation is available, or the langauge is en, falls back to the default
         * options for the fieldname.
         */
        getTranslatedOptions(fieldName, index) {
            const languageObj = this.getLanguageObj();

            let optionsArr = [];

            if (this.language !== 'en'
                && !this.isUndefined(languageObj[fieldName])
                && !this.isUndefined([fieldName].options)) {
                optionsArr = languageObj[fieldName].options;
            } else {
                optionsArr = this.formData.fields[index].options;
            }

            if (typeof optionsArr === 'undefined') {
                optionsArr = [];
            }

            return optionsArr;
        },
        /**
         * Attempts to retrieve the hint for a given field from the current language obj.
         * If no localisation is available, or the langauge is en, falls back to the default
         * hint for the fieldname.
         */
        getTranslatedHint(fieldName, index) {
            const languageObj = this.getLanguageObj();
            let hintText = '';

            if (this.language !== 'en'
                && !this.isUndefined(languageObj[fieldName])
                && !this.isUndefined(languageObj[fieldName].hint)) {
                hintText = languageObj[fieldName].hint;
            } else if (!this.isUndefined(this.formData.fields[index].hint)) {
                hintText = this.formData.fields[index].hint;
            } else {
                hintText = '';
            }

            return hintText;
        },
        /**
         * Attempts to retrieve a localisation of a given piece of static content from
         * the current language obj. If no localisation is available, or the langauge is en,
         * falls back to the default english version of that content. If that is also not
         * provided, falls back to the generic content from the global messaging obj.
         */
        getTranslatedContent(type) {
            let text;
            const languageObj = this.getLanguageObj();

            if (this.language === 'en'
                && !this.isUndefined(this.formData.content)
                && !this.isUndefined(this.formData.content[type])
            ) {
                text = this.formData.content[type];
            } else if (!this.isUndefined(languageObj.content)
                && !this.isUndefined(languageObj.content[type])) {
                text = languageObj.content[type];
            } else {
                text = this.getMessagingData(type, this.language);
            }

            return text;
        },
        /**
         * Retrieves the default value for a message from the global messages json file in the
         * current language.
         */
        getMessagingData(type, lang) {
            if (Object.keys(this.messagingData).length > 0) {
                const dataType = this.messagingData[lang];
                return dataType[type];
            }

            if (type === 'validation') {
                return {
                };
            }

            return '';
        },
        /**
         * Returns true if a given value is undefined
         */
        isUndefined(value) {
            if (typeof value === 'undefined') {
                return true;
            }

            return false;
        },
        /**
         * Called when the value of any input changes, updating values in the main this.form source
         * of truth. The new value is stored, validated, error statuses and conditional field
         * appearance is updated
         *
         * The inputs can't directly v-model variables from the this.form object because reactivity
         * on sub-variables on arrays passed through multiple components is inconsistent and
         * unreliable. Instead each component tracks its own value on an internal variable called
         * inputVal then reports any changes to that value back up to the form.
         */
        updateFieldData(data) {
            this.form[data.field] = data.value || '';

            if (Array.isArray(data.errors)) {
                this.formIsInvalid = data.errors.length > 0;
            } else {
                this.formIsInvalid = data.errors;
            }

            this.manageErrorStatus(data.field, data.errors);
            this.checkConditionalFields();
        },
        /**
         * Updates the errorFields list with the current validated state of each field.
         */
        manageErrorStatus(field, errors) {
            const index = this.errorFields.indexOf(field);

            if (index !== -1) {
                if (!errors || errors.length < 1) {
                    this.errorFields.splice(index, 1);
                }
            } else if (errors && errors.length > 0) {
                this.errorFields.push(field);
            }
        },
        /**
         * Determines whether a given field should display the localised word "optional".
         */
        showOptionalText(field) {
            if (this.isUndefined(field.validation) || this.isUndefined(field.validation.required)) {
                return true;
            }

            return false;
        },
        /**
         * Determines whether or not an element should have a label with the bootstrap vue
         * component or if that should be handled separately.
         */
        needsLabel(field) {
            if (field.element === 'radio'
                || field.element === 'submit'
                || field.element === 'checkbox') {
                return false;
            }

            return true;
        },
        /**
         * Interrupts form submission to ensure that manually triggered validation and recaptcha
         * verification has occurred. If successful, proceeds with submission.
         */
        preSubmit(e) {
            e.preventDefault();

            function isRequired(value) {
                return value.validation && value.validation.required;
            }

            this.onRecaptchaVerify();

            this.triggerValidate = true;

            const fieldIsRequired = this.formData.fields.filter(isRequired);

            if (fieldIsRequired.length === 0) {
                this.formIsInvalid = false;
            } else {
                fieldIsRequired.forEach((field) => {
                    if (this.form[field.name] === '') {
                        this.formIsInvalid = true;
                    }
                });
            }

            this.showErrorMessage = this.formIsInvalid.length > 1;

            // check conditional fields - if they're not shown
            // then clear any value they may have
            Object.entries(this.conditionalFields).forEach(([key, value]) => {
                if (!value) {
                    this.form[key] = '';
                }
            });

            if (this.errorFields.length > 0) {
                this.formIsInvalid = true;
            }

            if (!this.formIsInvalid && this.recaptchaVerified) {
                if (this.isMarketo) {
                    this.marketoSubmit();
                } else {
                    this.submitting = true;

                    let gRecaptchaResponse = '';

                    if (window.grecaptcha) {
                        gRecaptchaResponse = window.grecaptcha.getResponse();
                    }

                    const formPayload = new FormData();

                    if (this.formType.content) {
                        formPayload.append('formType', this.formData.content.formType);
                    }

                    formPayload.append('g-recaptcha-response', gRecaptchaResponse);

                    const keys = Object.keys(this.form);

                    for (let x = 0; x < keys.length; x++) {
                        const key = keys[x];
                        formPayload.append(
                            key,
                            this.form[key],
                        );
                    }

                    axios.post(
                        this.submitUrl,
                        formPayload,
                    ).then(() => {
                        this.submitting = false;
                        this.submitted = true;
                        return false;
                    }).catch(() => {});
                }
            } else {
                this.showErrorMessage = true;
                this.reAlertErrors = true;

                setTimeout(() => {
                    this.reAlertErrors = false;
                }, 100);
            }
        },
        /**
         * Invokes Marketo functionality to submit the form, along with recaptcha info, in the
         * correct format.
         */
        marketoSubmit() {
            this.createDataLayerObject('formsDataEvent');
            const myForm = window.MktoForms2.allForms()[0];
            myForm.addHiddenFields(this.form);
            if (window.grecaptcha) {
                myForm.addHiddenFields({
                    lastReCAPTCHAUserFingerprint: window.grecaptcha.getResponse(),
                    lastRecaptchaEnabledFormID: this.formId,
                });
            }
            /* eslint-ignore-next-line */
            myForm.onSuccess(() => {
                this.submitting = false;
                this.submitted = true;
                return false;
            });

            myForm.onSubmit(() => {
                this.submitting = true;
            });

            myForm.submit();
        },
        /**
         * Checks recaptcha response from the server
         */
        onRecaptchaVerify() {
            if (window.grecaptcha && typeof window.grecaptcha.getResponse === 'function' && window.grecaptcha.getResponse() !== '') {
                this.recaptchaVerified = true;
            } else {
                this.recaptchaVerified = false;
            }
        },
        /**
         * Checks whether each conditional field in the formdata currently meets its condition,
         * and updates the status of those fields in this.conditionalFields.
         */
        checkConditionalFields() {
            Object.keys(this.conditionalFields).forEach((field) => {
                // match the field to the form data
                const fieldData = this.formData.fields.find((o) => o.name === field);
                let showField = true;

                // iterate through rules in object
                Object.keys(fieldData.conditional).forEach((rule) => {
                    const conditions = fieldData.conditional[rule];
                    if (Array.isArray(conditions)) {
                        // if the rule is an array of values
                        // set the value to false if the field value isn't in the array
                        if (conditions.indexOf(this.form[rule]) === -1) {
                            showField = false;
                        }
                    } else if (this.form[rule] !== conditions) {
                        // if the rule is a string just check the field value
                        // against the string
                        showField = false;
                    }

                    if (showField) {
                        this.conditionalFields[field] = true;
                    } else {
                        this.conditionalFields[field] = false;
                    }
                });
            });
        },
        /**
         * Sets the 'd-none' class on conditional fields which are currently not displaying.
         */
        conditionalElementClass(fieldName) {
            return this.conditionalFields[fieldName] === true
                || typeof this.conditionalFields[fieldName] === 'undefined'
                ? '' : 'd-none';
        },
    },
};
</script>

<style lang='scss'>
    .vs-form {
        &__main-heading {
            @extend %heading-default-styles;
        }

        &__content {
            font-size: $font-size-6;
        }
        label {
            font-weight: $font-weight-semi-bold;
            margin-bottom: 0;
        }

        .error {
            font-size: $font-size-body;
            color: $color-theme-danger;
        }

        .hint-text {
            font-size: $font-size-body;
            color: $color-gray-shade-1;
            margin-bottom: 0;
        }

        fieldset {
            > div {
                margin-bottom: $spacer-6;
            }
        }

        &__no-js {
            display: none;
        }
    }

    @include no-js {
        .vs-form {

            & > form {
                display: none;
            }

            &__no-js {
                display: block;
            }
        }
    }
</style>
