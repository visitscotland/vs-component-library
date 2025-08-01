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
                        class="vs-form__main-heading vs-heading vs-heading--heading-l float-none"
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

                            <template v-if="field.element === 'textarea'">
                                <VsTextarea
                                    :ref="field.name"
                                    @status-update="updateFieldData"
                                    :field-name="field.name"
                                    :validation-rules="field.validation || {}"
                                    :validation-messages="getTranslatedValidation(field.name, index)
                                        || {}"
                                    :generic-validation="getMessagingData('validation', language)"
                                    :invalid="errorFields.indexOf(field.name) > -1 ? true : false"
                                    :trigger-validate="triggerValidate"
                                    :hint-text="getTranslatedHint(field.name, index)"
                                    :placeholder="field.placeholder || ''"
                                    :re-alert-errors="reAlertErrors"
                                    :rows="field.rows || null"
                                />
                            </template>
                        </div>
                    </BFormGroup>
                </fieldset>

                <slot name="hidden-fields" />

                <VsRecaptcha
                    @verified="onRecaptchaVerify"
                    :site-key="recaptchaKey"
                    :invalid="!recaptchaVerified && showErrorMessage"
                    :language="language"
                    :error-msg="getMessagingData('recaptchaError', language)"
                    class="mt-300"
                    :textarea-label="recaptchaTextareaLabel"
                    :re-alert-errors="reAlertErrors"
                />

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-300"
                    @click="preSubmit"
                >
                    {{ getTranslatedContent('submit') }}
                </VsButton>
            </form>
        </template>

        <VsWarning class="vs-form__no-js">
            <slot name="no-js" />
        </VsWarning>

        <div aria-live="assertive">
            <p v-if="submitting">
                <slot name="submitting" />
            </p>

            <template v-if="submitted">
                <VsHeading
                    v-if="getTranslatedContent('successHeading')"
                    level="2"
                    heading-style="heading-l"
                >
                    {{ getTranslatedContent('successHeading') }}
                </VsHeading>

                <p
                    class="vs-form__content"
                    v-html="getTranslatedContent('successContent')"
                />
            </template>

            <p
                v-if="submitError"
                class="mt-200"
            >
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
import VsRecaptcha from '@/components/recaptcha/Recaptcha.vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsWarning from '@/components/warning/Warning.vue';
import VsTextarea from '@/components/textarea/Textarea.vue';
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
        VsHeading,
        VsWarning,
        VsTextarea,
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
         * For non-marketo forms this dictates which data processing layer the form uses - 'breg',
         * 'fepl', or 'dp'. This adjusts certain behaviour, for example the `exponea.identify()`
         * tracking is only desirable for breg forms.
         *
         * Defaults to breg as it is by far the most common form type, and from within the
         * freemarker sites we don't currently have access to the information to distinguish them.
         */
        submissionType: {
            type: String,
            default: 'breg',
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
            default: '',
        },
        /**
         * Marketo instance URL for the form
         */
        marketoInstance: {
            type: String,
            default: '',
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
        /**
         * We can't interact with recaptcha in the test environment and should
         * remove it from the form flow.
         */
        isTest: {
            type: Boolean,
            default: true,
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
            emailFieldName: '',
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

                    this.checkConditionalFields();
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
         * Collects all hidden input fields within the current element, parses their values,
         * and returns an object where each hidden input's name serves as a key and its parsed value
         * as the corresponding value. The function converts 'true' and 'false' strings to boolean
         * values, and retains other values as strings.
         *
         * @returns {Object<string, boolean|string>} - An object where:
         *   - `key`: The name of the hidden input field.
         *   - `value`: The parsed value of the input field, where 'true' becomes `true`,
         *     'false' becomes `false`, and other values remain as strings.
         */
        getHiddenFields() {
            return [...this.$el.querySelectorAll('input[type=hidden]')]
                .map(this.parseBooleanStringsFromInputField)
                .reduce((accumulator, field) => {
                    accumulator[field.name] = field.value;
                    return accumulator;
                }, {
                });
        },
        /**
         * Parses the value of an input field, converting 'true' and 'false' string values to their
         * boolean primitive equivalents.
         *
         * @param {HTMLInputElement} inputField - The input field element to process. It must have a
         * `value` and `name` property.
         * @returns {{name: string, value: boolean|string}} - An object containing:
         *   - `name`: The name of the input field.
         *   - `value`: The parsed value of the input field. Returns `true` if the value is 'true',
         *     `false` if the value is 'false', and the original value otherwise.
         */
        parseBooleanStringsFromInputField(inputField) {
            let value = inputField.value;

            if (value === 'true') {
                value = true;
            } else if (value === 'false') {
                value = false;
            }

            return {
                name: inputField.name,
                value,
            };
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
                this.formIsInvalid = data.errors !== null;
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
            this.submitError = false;

            function isRequired(value) {
                return value.validation && value.validation.required;
            }

            if (!this.isTest) {
                this.onRecaptchaVerify();
            }

            this.triggerValidate = true;

            const fieldIsRequired = this.formData.fields.filter(isRequired);

            if (fieldIsRequired.length === 0) {
                this.formIsInvalid = false;
            } else {
                fieldIsRequired.forEach((field) => {
                    // Check if the string contains any non-whitespace, reject both empty strings
                    // and strings made up entirely of whitespace characters
                    if (!(/\S/.test(this.form[field.name]))) {
                        let isInvalid = true;

                        // If a conditional field is hidden, override its required status
                        if (field.name in this.conditionalFields
                            && !this.conditionalFields[field.name]) {
                            isInvalid = false;
                        }

                        this.formIsInvalid = isInvalid;
                    }
                });
            }

            this.showErrorMessage = this.formIsInvalid;

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
                    this.axiosSubmit();
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
         * Submits the form using Axios, submitting a json object to the submitUrl
         */
        axiosSubmit() {
            this.createDataLayerObject('formsDataEvent');
            this.submitting = true;

            let gRecaptchaResponse = '';

            if (window.grecaptcha) {
                gRecaptchaResponse = window.grecaptcha.getResponse();
            }

            const hiddenFields = this.getHiddenFields();

            axios.post(
                this.submitUrl,
                {
                    ...this.form,
                    ...hiddenFields,
                    formType: this.formData.content ? this.formData.content.formType : '',
                    'g-recaptcha-response': gRecaptchaResponse,
                },
            ).then(() => {
                this.submitting = false;
                this.submitted = true;
                this.attachEmail();
                return false;
            }).catch(() => {
                this.submitError = true;
                return false;
            });
        },
        /**
         * If exponea is present in the window (via gtm with accepted cookies), and the form uses
         * BREG, attach the current user to the record associated with their email address
         */
        attachEmail() {
            if (this.submissionType && this.submissionType === 'breg') {
                this.formData.fields.forEach((field) => {
                    if (field.type === 'email' && !this.emailFieldName) {
                        this.emailFieldName = field.name;
                    }
                });

                if (this.emailFieldName && typeof exponea !== 'undefined') {
                    // eslint-disable-next-line no-undef
                    exponea.identify(
                        {
                            email_id: this.form[this.emailFieldName],
                        },
                        {
                        },
                        () => {},
                        () => {},
                        true,
                    );
                }
            }
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
                        if (!this.conditionalFields[field]) {
                            this.conditionalFields[field] = true;

                            if (this.$refs[field]) {
                                this.$refs[field][0].manualValidate();
                            }
                        }
                    } else {
                        // If a field is hidden by its conditional status, clear any existing
                        // errors as they are no longer relevant
                        this.manageErrorStatus(field, []);
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
        &__content {
            font-size: $font-size-6;
        }
        label {
            font-weight: $vs-font-weight-medium;
            margin-bottom: 0;
        }

        fieldset {
            > div {
                margin-bottom: $spacer-150;
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
