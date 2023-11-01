<template>
    <div class="vs-carbon-calculator__wrapper">
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
                    />

                    <form
                        v-if="activeQuestion"
                    >
                        <fieldset>
                            <VsProgressBar
                                :max="formData.stages"
                                :currentStep="
                                    currentQuestion ? currentQuestion.stage : formData.stages
                                "
                                :isStepped="true"
                                :isFull="activeQuestion > formData.fields.length"
                                ref="progress"
                            />

                            <div
                                v-show="activeQuestion <= formData.fields.length"
                            >
                                <VsCarbonCalculatorQuestion
                                    v-for="(field, index) in formData.fields"
                                    v-show="(index + 1) === activeQuestion"
                                    ref="questions"
                                    tabindex="0"
                                    :key="field.name"
                                    :label="getQuestionLabel(index)"
                                    :label-for="field.name"
                                    :hint="getQuestionHint(index)"
                                    :fieldClass="conditionalElementClass(field.name)"
                                    :fieldType="field.element"
                                    :fieldName="field.name"
                                    :options="getQuestionOptions(index)"
                                    :minimum="field.element === 'number' ? field.validation.min : 0"
                                    :maximum="field.element === 'number' ? field.validation.max : 0"
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
                        :total-kilos="totalKilos"
                        :language="language"
                    />
                    <VsCarbonCalculatorResults
                        v-if="activeQuestion > formData.fields.length"
                        :total-kilos="totalKilos"
                        :transport-kilos="transportKilos"
                        :food-kilos="foodKilos"
                        :accommodation-kilos="accommodationKilos"
                        :transport-tip="transportTip"
                        :food-tip="foodTip"
                        :accommodation-tip="accommodationTip"
                        :stay-duration="stayDuration"
                        :comparisonReplacements="formData.comparisonReplacements"
                        :language="language"
                    />
                </VsCol>
                <VsCol
                    class="text-center"
                    cols="12"
                    v-if="activeQuestion === 0"
                >
                    <VsButton
                        variant="primary"
                        type="submit"
                        class="vs-form__submit mt-9"
                        @click="forwardPage()"
                    >
                        {{ labelsMap['begin'] }}
                    </VsButton>
                </VsCol>
                <VsCol
                    cols="12"
                    v-if="activeQuestion > 0"
                >
                    <VsButton
                        :variant="activeQuestion <= formData.fields.length ? 'primary' : 'secondary'"
                        type="submit"
                        class="vs-form__submit mt-9 float-left"
                        ref="backPage"
                        v-if="activeQuestion > 1"
                        @click="backwardPage()"
                    >
                        {{ labelsMap['previous'] }}
                    </VsButton>

                    <VsButton
                        variant="primary"
                        type="submit"
                        class="vs-form__submit mt-9 float-right"
                        ref="forwardPage"
                        v-if="activeQuestion < formData.fields.length"
                        :disabled="activeQuestion > 0 && !answerSet"
                        @click="forwardPage()"
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
                    >
                        {{ labelsMap['results'] }}
                    </VsButton>

                    <VsButton
                        variant="primary"
                        type="submit"
                        class="vs-form__submit mt-9 float-right"
                        v-if="activeQuestion > formData.fields.length"
                        @click="restart()"
                    >
                        {{ labelsMap['restart'] }}
                    </VsButton>
                </VsCol>
            </VsRow>
        </VsContainer>

        <VsWarning
            theme="light"
        >
            {{ labelsMap['noJsMessage'] }}
        </VsWarning>
    </div>
</template>

<script>
import axios from 'axios';
import {
    VsContainer, VsCol, VsRow,
} from '@components/elements/grid';
import dataLayerMixin from '@/mixins/dataLayerMixin';

import VsWarning from '@/components/patterns/warning/Warning.vue';
import VsButton from '@/components/elements/button/Button.vue';
import VsProgressBar from '@/components/elements/progress-bar/ProgressBar.vue';

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
        VsWarning,
        VsProgressBar,
        VsCarbonCalculatorResults,
        VsCarbonCalculatorTip,
        VsCarbonCalculatorRunningTotal,
        VsCarbonCalculatorIntro,
        VsCarbonCalculatorQuestion,
    },
    mixins: [
        dataLayerMixin,
    ],
    /**
     * All labels come from the CMS to simplify localisation. As there are so many of them
     * and the question labels are dynamic, they come as a single json object which needs
     * to be shared down to each of the sub-components of the calculator.
     */
    provide() {
        return {
            labelsMap: this.labelsMap,
        };
    },
    props: {
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
        /**
         * Language locale string. Used to determine correct formatting for numbers (decimal
         * delimeter)
         *
         * Example: "en-gb"
         */
        language: {
            type: String,
            default: 'en-gb',
        },
    },
    data() {
        return this.initialState();
    },
    computed: {
        /**
         * The question which is currently being displayed to the user, null if
         * the user is on the intro or results page.
         */
        currentQuestion() {
            if (!this.formData || !this.activeQuestion) {
                return null;
            }

            return this.formData.fields[this.activeQuestion - 1];
        },
        /**
         * The tip which is currently being displayed to the user, based on their
         * answer to the current question and what tips are available in their language
         */
        currentTip() {
            let tip = null;

            if (this.formData.fields[this.activeQuestion - 1]) {
                switch (this.formData.fields[this.activeQuestion - 1].stage) {
                case (1):
                    tip = this.transportTip;
                    break;
                case (2):
                    tip = this.accommodationTip;
                    break;
                case (3):
                    tip = this.foodTip;
                    break;
                default:
                    tip = null;
                    break;
                }
            }

            return tip;
        },
        /**
         * The length of the user's stay, parsed to an int from an answer
         * provided to the user. Necessary to calculate the emissions per
         * day in the results page.
         */
        stayDuration() {
            if (this.form.howLongStay) {
                return parseInt(this.form.howLongStay, 10);
            }

            return 0;
        },
    },
    mounted() {
        this.getFormData();
        this.getGlobalMessaging();
    },
    methods: {
        /**
         * Defines the initial state of the component, when the component is
         * initialised and when the user resets the form to get another calculation.
         */
        initialState() {
            return {
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
                reAlertErrors: false,
                totalKilos: 0,
                transportKilos: 0,
                accommodationKilos: 0,
                foodKilos: 0,
                transportTip: null,
                foodTip: null,
                accommodationTip: null,
                activeQuestion: 0,
                answerSet: false,
            };
        },
        /**
         * Resets the form to its initial data configuration to restart the user's calculation.
         * The formData is loaded on page creation by axios and won't change between calculations
         * so can be held and set in the component to avoid doubling the load.
         */
        restart() {
            const { formData } = this;
            Object.assign(this.$data, this.initialState());
            this.$data.formData = formData;
        },
        /**
         * Called on component created. Loads the json file located at this.dataUrl which
         * contains all of the question data validation. This does not contain localisations, which
         * are loaded from the CMS as labels and then mapped to the questions from the form.
         */
        getFormData() {
            axios.get(this.labelsMap.formUrl)
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
         * Called on component created. Loads the generic messaging files which provide
         * global validation and submission messages and localisations.
         */
        getGlobalMessaging() {
            axios.get(this.messagingUrl)
                .then((response) => {
                    this.messagingData = response.data;
                });
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
         * Retrieves the category for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionCategory(stage) {
            if (this.labelsMap[`section-${stage}.title`]) {
                return this.labelsMap[`section-${stage}.title`];
            }

            return '';
        },
        /**
         * Retrieves the label for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionLabel(index) {
            if (this.labelsMap[`page-${index + 1}.question`]) {
                return this.labelsMap[`page-${index + 1}.question`];
            }

            return '';
        },
        /**
         * Retrieves the hint for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionHint(index) {
            if (this.labelsMap[`page-${index + 1}.hint`]) {
                return this.labelsMap[`page-${index + 1}.hint`];
            }

            return '';
        },
        /**
         * Retrieves the options for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionOptions(index) {
            const field = this.formData.fields[index];

            if (field.element === 'radio') {
                const { options } = field;

                for (let x = 0; x < options.length; x++) {
                    options[x].text = this.labelsMap[`page-${index + 1}.option-${x + 1}`];
                }

                return options;
            }

            return [];
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

            if (data.value) {
                this.answerSet = true;
            } else {
                this.answerSet = false;
            }

            this.manageErrorStatus(data.field, data.errors);
            this.checkConditionalFields();
            this.calculateEmissions();
            this.retrieveTips();
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
         * Calculates the current value of a radio button based question in the carbon calculator
         * form. Each field has an actual raw value which is retruned by the radio button
         * component, but also has a potential multiplication factor which could be based on
         * another field or on a static value.
         */
        getRadioValue(fieldName, key) {
            if (!key) {
                return 0;
            }

            let field;

            for (let x = 0; x < this.formData.fields.length; x++) {
                if (this.formData.fields[x].name === fieldName) {
                    field = this.formData.fields[x];
                }
            }

            const selectedValue = field.values[key];

            if (field.multiplyByNumber) {
                return selectedValue * field.multiplyByNumber;
            }

            if (field.multiplyByAnswer) {
                let multiplier = this.form[field.multiplyByAnswer.question] || 0;
                multiplier = Math.max(multiplier, field.multiplyByAnswer.minimum);
                return selectedValue * multiplier;
            }

            return selectedValue;
        },
        /**
         * Calculates the current value of a number inputbased question in the carbon calculator
         * form. Each field has an actual raw value which is retruned by the radio button
         * component, but also has a potential multiplication factor which could be based on
         * another field or on a static value.
         */
        getNumberValue(fieldName, key) {
            if (!key) {
                return 0;
            }

            let field;

            for (let x = 0; x < this.formData.fields.length; x++) {
                if (this.formData.fields[x].name === fieldName) {
                    field = this.formData.fields[x];
                }
            }

            if (field.multiplyByNumber) {
                return (parseInt(key, 10) * field.multiplyByNumber);
            }

            if (field.multiplyByAnswer) {
                const multiplier = this.form[field.multiplyByAnswer] || 0;
                return (parseInt(key, 10) * multiplier);
            }

            return 0;
        },
        /**
         * Retrieves the current value for a given field, based on its type
         */
        getFieldValue(checkField) {
            if (checkField.element === 'radio') {
                return this.getRadioValue(
                    checkField.name,
                    this.form[checkField.name],
                );
            }

            if (checkField.element === 'number') {
                return this.getNumberValue(
                    checkField.name,
                    this.form[checkField.name],
                );
            }

            return 0;
        },
        /**
         * Retrieves all relevant tips based on the user's responses to a given question
         */
        getTips(field, key, questionIndex) {
            if (key && field.options) {
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
         * Calculates the current total emissions value, and category specific emission values
         * for the user based on their submitted answers.
         */
        calculateEmissions() {
            this.transportKilos = 0;
            this.transportTip = null;

            this.accommodationKilos = 0;
            this.accommodationTips = null;

            this.foodKilos = 0;
            this.foodTip = null;

            for (let x = 0; x < this.formData.fields.length; x++) {
                const currentField = this.formData.fields[x];

                switch (currentField.stage) {
                case 1:
                case 2:
                    this.transportKilos += this.getFieldValue(
                        currentField,
                    );
                    break;
                case 3:
                    this.accommodationKilos += this.getFieldValue(
                        currentField,
                    );
                    break;
                case 4:
                    this.foodKilos += this.getFieldValue(
                        currentField,
                    );
                    break;
                default:
                    break;
                }
            }

            this.totalKilos = this.transportKilos + this.accommodationKilos + this.foodKilos;
        },
        /**
         * Retrieves all relevant tips for the for the user based on their submitted answers, then
         * selects a random one from each category to display.
         */
        retrieveTips() {
            let transportTips = [];
            let accommodationTips = [];
            let foodTips = [];

            for (let x = 0; x < this.formData.fields.length; x++) {
                const currentField = this.formData.fields[x];

                switch (currentField.stage) {
                case 1:
                case 2:
                    transportTips = transportTips.concat(
                        this.getTips(currentField, this.form[currentField.name], x),
                    );
                    break;
                case 3:
                    accommodationTips = accommodationTips.concat(
                        this.getTips(currentField, this.form[currentField.name], x),
                    );
                    break;
                case 4:
                    foodTips = foodTips.concat(
                        this.getTips(currentField, this.form[currentField.name], x),
                    );
                    break;
                default:
                    break;
                }
            }

            this.transportTip = transportTips[Math.floor(Math.random() * transportTips.length)];
            this.accommodationTip = accommodationTips[
                Math.floor(Math.random() * accommodationTips.length)
            ];
            this.foodTip = foodTips[Math.floor(Math.random() * foodTips.length)];
        },
        /**
         * Checks whether conditional fields meet the rules to show them
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
        /**
         * Moves the form forward one stage
         */
        forwardPage(event) {
            if (event) {
                event.preventDefault();
            }

            if (this.activeQuestion) {
                this.createDataLayerObject('carbonQuestionEvent', {
                    questionNumber: this.activeQuestion,
                    answer: this.form[this.currentQuestion.name],
                });
            }

            this.activeQuestion += 1;
            this.checkCurrentConditional(true);
            this.checkNewAnswerSet();
            this.resetFocus();
        },
        /**
         * Moves the form back one stage
         */
        backwardPage(event) {
            if (event) {
                event.preventDefault();
            }

            this.activeQuestion -= 1;
            this.checkCurrentConditional(false);
            this.checkNewAnswerSet();
            this.resetFocus();
        },
        /**
         * Checks if an answer has been provided for the current question, if one
         * is necessary to proceed
         */
        checkNewAnswerSet() {
            if (this.activeQuestion > this.formData.fields.length) {
                this.answerSet = true;
                return;
            }

            const newQuestion = this.formData.fields[this.activeQuestion - 1];
            if (this.form[newQuestion.name]) {
                this.answerSet = true;
            } else if (newQuestion.element === 'number') {
                this.form[newQuestion.name] = newQuestion.validation.min;
                this.answerSet = true;
            } else {
                this.answerSet = false;
            }
        },
        /**
         * Checks if the current question is a currently inactive conditional question,
         * and if so skips passed it. Used in page navigation to ensure the user doesn't land
         * on an irrelevant question.
         */
        checkCurrentConditional(isForward) {
            const question = this.formData.fields[this.activeQuestion - 1];
            if (question && this.conditionalElementClass(question.name)) {
                if (isForward) {
                    this.forwardPage();
                } else {
                    this.backwardPage();
                }
            }
        },
        /**
         * Sets the 'd-none' class on conditional fields which are currently not displaying.
         */
        conditionalElementClass(fieldName) {
            return this.conditionalFields[fieldName] === true
                || typeof this.conditionalFields[fieldName] === 'undefined'
                ? '' : 'd-none';
        },
        /**
         * Set the user focus to just before the current question. Called whenever they navigate
         * to a new page to ensure a keyboard navigating user has clarity on what is happening
         * after nav.
         */
        resetFocus() {
            this.$nextTick(() => {
                this.$nextTick(() => {
                    this.$refs.questions[this.activeQuestion - 1].$el.focus();
                    this.$refs.progress.$el.scrollIntoView();
                });
            });
        },
    },
};
</script>

<style lang='scss'>
    .vs-carbon-calculator {
        display: block;
    }

    .vs-carbon-calculator__wrapper .vs-warning {
        display: none;
    }

    @include no-js {
        .vs-carbon-calculator {
            display: none;
        }

        .vs-carbon-calculator__wrapper .vs-warning {
            display: block;
        }
    }
</style>
