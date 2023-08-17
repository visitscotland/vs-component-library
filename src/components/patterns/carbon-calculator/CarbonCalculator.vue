<template>
    <VsContainer
        class="vs-carbon-calculator"
        data-test="vs-carbon-calculator"
    >
        <VsRow
            class="vs-carbon-calculator__survey"
            v-if="formData && formData.fields"
        >
            <VsCol>
                <VsCarbonCalculatorIntro
                    v-if="!activeQuestion"
                >
                    Carbon calculator intro
                </VsCarbonCalculatorIntro>
                <form
                    v-if="activeQuestion"
                    @submit.prevent="preSubmit"
                >
                    <fieldset>
                        <p
                            class="vs-carbon-calculator__progress-label"
                            v-if="currentQuestion"
                        >
                            {{ currentQuestion ? currentQuestion.stage : 4 }} of 4
                        </p>

                        <VsProgressBar
                            :max="4"
                            :currentStep="currentQuestion ? currentQuestion.stage - 1 : 4"
                        />

                        <div
                            v-show="activeQuestion <= formData.fields.length"
                        >
                            <VsCarbonCalculatorQuestion
                                v-for="(field, index) in formData.fields"
                                v-show="(index + 1) === activeQuestion"
                                :key="field.name"
                                :label="getQuestionLabel(index)"
                                :label-for="needsLabel(field) ? field.name : ''"
                                :fieldClass="conditionalElementClass(field.name)"
                                :fieldType="field.element"
                                :fieldName="field.name"
                                :options="getQuestionOptions(index)"
                                :fieldCategory="getQuestionCategory(field.stage)"
                                @updateFieldData="updateFieldData"
                            />
                        </div>
                    </fieldset>
                </form>
                <VsCarbonCalculatorTip
                    v-if="currentTip"
                    :tip="currentTip.text"
                />
            </VsCol>
            <VsCol
                cols="12"
            >
                <VsCarbonCalculatorRunningTotal
                    v-if="activeQuestion > 0 && activeQuestion <= formData.fields.length"
                    :total-tonnes="totalTonnes"
                />
                <VsCarbonCalculatorResults
                    v-if="activeQuestion > formData.fields.length"
                    :title="labelsMap.results"
                    :total-tonnes="totalTonnes"
                    :transport-tonnes="transportTonnes"
                    :food-tonnes="foodTonnes"
                    :transport-tip="transportTip"
                    :food-tip="foodTip"
                    :transport-label="getQuestionCategory(1)"
                    :accomodation-label="getQuestionCategory(2)"
                    :experiences-label="getQuestionCategory(3)"
                    :food-label="getQuestionCategory(4)"
                    :comparison="comparison.text"
                    :comparison-tonnes="comparison.tonnes"
                />
            </VsCol>
            <VsCol
                cols="12"
            >
                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9 float-left"
                    v-if="activeQuestion > 1"
                    @click="backwardPage()"
                    icon="chevron-down"
                    icon-position="left"
                    icon-orientation="right"
                >
                    {{ labelsMap['previous'] }}
                </VsButton>

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9 float-right"
                    v-if="activeQuestion < formData.fields.length"
                    :disabled="activeQuestion > 0 && !answerSet"
                    @click="forwardPage()"
                    icon="chevron-down"
                    icon-position="right"
                    icon-orientation="left"
                >
                    {{ labelsMap['next'] }}
                </VsButton>

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9 float-right"
                    v-if="activeQuestion === formData.fields.length"
                    :disabled="!answerSet"
                    @click="forwardPage()"
                    icon="chevron-down"
                    icon-position="right"
                    icon-orientation="left"
                >
                    {{ labelsMap['results'] }}
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>
import axios from 'axios';

import {
    VsContainer, VsCol, VsRow,
} from '@components/elements/grid';
import VsButton from '../../elements/button/Button.vue';
import VsProgressBar from '../../elements/progress-bar/ProgressBar.vue';

import VsCarbonCalculatorTip from './components/CarbonCalculatorTip.vue';
import VsCarbonCalculatorResults from './components/CarbonCalculatorResults.vue';
import VsCarbonCalculatorRunningTotal from './components/CarbonCalculatorRunningTotal.vue';
import VsCarbonCalculatorIntro from './components/CarbonCalculatorIntro.vue';
import VsCarbonCalculatorQuestion from './components/CarbonCalculatorQuestion.vue';

/**
 * @displayName Carbon Calculator Form
 */

export default {
    name: 'VsCarbonCalculator',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsContainer,
        VsCol,
        VsRow,
        VsProgressBar,
        VsCarbonCalculatorResults,
        VsCarbonCalculatorTip,
        VsCarbonCalculatorRunningTotal,
        VsCarbonCalculatorIntro,
        VsCarbonCalculatorQuestion,
    },
    props: {
        /**
         * The URL for the form data file
         */
        dataUrl: {
            type: String,
            required: true,
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
         * Language indicator for content
         */
        language: {
            type: String,
            default: 'en',
        },
        /**
         * An object providing all required localisation content from the CMS. This
         * should contain global props like a translation for `next`, `previous`,
         * `results` and so on, as well as question by question labels. Those should
         * take the form
         *    `page-1.title` <- the category for the first question
         *    `page-1.question` <- the content of the first question
         *    `page-1.option-1` <- the first option for the first question
         *    `page-1.option-1.tip` <- the content of the tip for the above option
         * and then repeat for each page-x beyond that.
         */
        labelsMap: {
            type: Object,
            required: true,
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
            conditionalFields: {
            },
            inputVal: '',
            reAlertErrors: false,
            totalTonnes: 0,
            transportTonnes: 0,
            foodTonnes: 0,
            accomodationTonnes: 0,
            experiencesTonnes: 0,
            transportTip: null,
            foodTip: null,
            accomodationTip: null,
            experiencesTip: null,
            activeQuestion: 0,
            answerSet: false,
        };
    },
    computed: {
        currentQuestion() {
            if (!this.formData || !this.activeQuestion) {
                return null;
            }

            return this.formData.fields[this.activeQuestion - 1];
        },
        currentTip() {
            let tip = null;

            if (this.formData.fields[this.activeQuestion - 1]) {
                switch (this.formData.fields[this.activeQuestion - 1].stage) {
                case (1):
                    tip = this.transportTip;
                    break;
                case (2):
                    tip = this.accomodationTip;
                    break;
                case (3):
                    tip = this.experiencesTip;
                    break;
                case (4):
                    tip = this.foodTip;
                    break;
                default:
                    tip = null;
                    break;
                }
            }

            return tip;
        },
        comparison() {
            return {
                text: this.labelsMap.comparison,
                tonnes: parseFloat(this.labelsMap.comparisonTonnes),
            };
        },
    },
    created() {
        this.getFormData();
        this.getGlobalMessaging();
    },
    methods: {
        /**
         * Axios call to retrieve form data
         */
        getFormData() {
            axios.get(this.dataUrl)
                .then((response) => {
                    this.formData = response.data;

                    response.data.fields.forEach((field) => {
                        // create a data entry for each field
                        this.form[field.name] = '';

                        // ensure that hidden fields don't show on load
                        if (field.conditional) {
                            this.conditionalFields[field.name] = false;
                        }
                    });
                });
        },
        /**
         * Axios call to retrieve global messaging data
         */
        getGlobalMessaging() {
            axios.get(this.messagingUrl)
                .then((response) => {
                    this.messagingData = response.data;
                });
        },
        /**
         * get appropriate language object
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
         * get translated validation messages
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
         * check messaging data exists and then pass value back
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
        getQuestionCategory(stage) {
            if (this.labelsMap[`section-${stage}.title`]) {
                return this.labelsMap[`section-${stage}.title`];
            }

            return '';
        },
        getQuestionLabel(index) {
            if (this.labelsMap[`page-${index + 1}.question`]) {
                return this.labelsMap[`page-${index + 1}.question`];
            }

            return '';
        },
        getQuestionOptions(index) {
            const { options } = this.formData.fields[index];

            for (let x = 0; x < options.length; x++) {
                options[x].text = this.labelsMap[`page-${index + 1}.option-${x + 1}`];
            }

            return options;
        },
        /**
         * check if value is undefined
         */
        isUndefined(value) {
            if (typeof value === 'undefined') {
                return true;
            }

            return false;
        },
        /**
         * update field data and error status
         */
        updateFieldData(data) {
            this.form[data.field] = data.value || '';

            if (data.value) {
                this.answerSet = true;
            } else {
                this.answerSet = false;
            }

            this.manageErrorStatus(data.field, data.errors);
            this.calculate();
        },
        /**
         * update error status of fields for validation feedback
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
        showOptionalText(field) {
            if (this.isUndefined(field.validation) || this.isUndefined(field.validation.required)) {
                return true;
            }

            return false;
        },
        /**
         * whether or not an element should have a label defined (for Bootstrap Vue)
         */
        needsLabel(field) {
            if (field.element === 'radio'
                || field.element === 'submit'
                || field.element === 'checkbox') {
                return false;
            }

            return true;
        },
        getFieldValue(fieldName, key) {
            if (!key) {
                return 0;
            }

            let field;

            for (let x = 0; x < this.formData.fields.length; x++) {
                if (this.formData.fields[x].name === fieldName) {
                    field = this.formData.fields[x];
                }
            }

            return field.values[key];
        },
        getTips(field, key, questionIndex) {
            if (key) {
                for (let x = 0; x < field.options.length; x++) {
                    if (field.options[x].value === key) {
                        const checkTip = this.labelsMap[`page-${questionIndex + 1}.option-${x + 1}.tip`];
                        if (checkTip) {
                            return [{
                                text: checkTip,
                            }];
                        }
                    }
                }
            }

            return [];
        },
        /**
         * before calculating validate fields
         */
        preSubmit(e) {
            e.preventDefault();

            this.submitted = false;
            this.formIsInvalid = false;

            function isRequired(value) {
                return value.validation && value.validation.required;
            }

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

            if (!this.formIsInvalid) {
                this.calculate();
            } else {
                this.showErrorMessage = true;
                this.reAlertErrors = true;

                setTimeout(() => {
                    this.reAlertErrors = false;
                }, 100);
            }
        },
        /**
         * TODO
         */
        calculate() {
            this.transportTonnes = 0;
            this.transportTip = null;
            let transportTips = [];

            this.foodTonnes = 0;
            this.foodTip = null;
            let foodTips = [];

            for (let x = 0; x < this.formData.fields.length; x++) {
                const currentField = this.formData.fields[x];

                switch (currentField.stage) {
                case 1:
                    this.transportTonnes += this.getFieldValue(
                        currentField.name,
                        this.form[currentField.name],
                    );
                    transportTips = transportTips.concat(
                        this.getTips(currentField, this.form[currentField.name], x),
                    );
                    break;
                case 4:
                    this.foodTonnes += this.getFieldValue(
                        currentField.name,
                        this.form[currentField.name],
                    );
                    foodTips = foodTips.concat(
                        this.getTips(currentField, this.form[currentField.name], x),
                    );
                    break;
                default:
                    break;
                }
            }

            this.totalTonnes = this.transportTonnes + this.foodTonnes;

            this.transportTip = transportTips[Math.floor(Math.random() * transportTips.length)];
            this.foodTip = foodTips[Math.floor(Math.random() * foodTips.length)];

            this.submitted = true;
        },
        /**
         * checks whether conditional fields meet the rules to show them
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
                        this.manageErrorStatus(field, []);
                    }
                });
            });
        },
        forwardPage() {
            this.activeQuestion += 1;
            this.checkNewAnswerSet();
        },
        backwardPage() {
            this.activeQuestion -= 1;
            this.checkNewAnswerSet();
        },
        checkNewAnswerSet() {
            if (this.activeQuestion > this.formData.fields.length) {
                this.answerSet = true;
                return;
            }

            const newQuestionKey = this.formData.fields[this.activeQuestion - 1].name;
            if (!this.form[newQuestionKey]) {
                this.answerSet = false;
            } else {
                this.answerSet = true;
            }
        },
        /**
         * return the correct class to show or hide
         * conditional elements
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

        .form-group {
            margin-bottom: $spacer-6;
        }

        &__no-js {
            display: none;
        }
    }

    .vs-carbon-calculator__question {
        width: 100%;
    }

    .vs-carbon-calculator__radio {
        display: inline-block;
        vertical-align: top;
        width: 50%;
        text-align: center;
        padding: $spacer-4 $spacer-2;
        cursor: pointer;

        * {
            cursor: pointer;
        }

        .vs-icon {
            width: 100%;
        }

        label {
            width: 100%;
        }

        .form-check-inline {
            width: 100%;
        }

        .vs-carbon-calculator__radio-icon {
            aspect-ratio: 1/1;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $color-gray-tint-7;
            margin-bottom: $spacer-3;
        }

        input {
            display: none;
        }

        input:checked ~ label {
            .vs-carbon-calculator__radio-icon {
                background-color: $color-pink;

                .vs-icon {
                    color: $color-white;
                }
            }
        }
    }

    @include media-breakpoint-up(md) {
        .vs-carbon-calculator__radio {
            width: calc(100% / 3);
        }
    }

    @include media-breakpoint-up(lg) {
        .vs-carbon-calculator__radio {
            width: 25%;
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
