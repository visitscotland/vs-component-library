<template>
    <div class="vs-experiences-calculator__wrapper">
        <VsRow
            class="vs-experiences-calculator"
            data-test="vs-experiences-calculator"
            v-if="formData && formData.fields"
        >
            <VsCol>
                <VsExperiencesCalculatorIntro
                    v-if="!activeStage"
                />

                <form
                    v-if="activeStage"
                >
                    <fieldset>
                        <VsProgressBar
                            :max="formData.stages"
                            :currentStep="activeStage <= formData.stages
                                ? activeStage : formData.stages"
                            :isStepped="true"
                            :isFull="activeStage > formData.stages"
                            :progressLabel="labelsMap.progress"
                            ref="progress"
                        />

                        <div
                            v-show="activeStage <= formData.fields.length"
                        >
                            <VsHeading
                                level="2"
                                overrideStyleLevel="3"
                                class="vs-experiences-calculator__category-heading"
                                v-if="currentCategory"
                            >
                                {{ currentCategory }}
                            </VsHeading>

                            <VsExperiencesCalculatorQuestion
                                v-for="(field, index) in formData.fields"
                                v-show="field.stage === activeStage"
                                ref="questions"
                                tabindex="0"
                                :key="field.name"
                                :label="getQuestionLabel(field, index)"
                                :label-for="field.name"
                                :hint="getQuestionHint(field, index)"
                                :fieldClass="conditionalElementClass(field.name)"
                                :fieldType="field.element"
                                :fieldName="field.name"
                                :options="getQuestionOptions(field, index)"
                                :minimum="field.element === 'number' ? field.validation.min : 0"
                                :maximum="field.element === 'number' ? field.validation.max : 0"
                                @updateFieldData="updateFieldData"
                            />

                        </div>
                    </fieldset>
                </form>
                <VsButton
                    v-if="isRepeatable(activeStage)"
                    class="my-4"
                    variant="secondary"
                    icon="plus"
                    @click="duplicateCurrentStage()"
                >
                    {{ activeStageRepeatable }}
                </VsButton>
            </VsCol>
            <VsCol
                cols="12"
            >
                <VsExperiencesCalculatorResults
                    v-if="activeStage > formData.stages"
                />
            </VsCol>
            <VsCol
                class="text-center"
                cols="12"
                v-if="activeStage === 0"
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
                v-if="activeStage > 0"
            >
                <VsButton
                    :variant="activeStage <= formData.fields.length ? 'primary' : 'secondary'"
                    type="submit"
                    class="vs-form__submit mt-9 float-left"
                    ref="backPage"
                    v-if="activeStage > 1"
                    @click="backwardPage()"
                >
                    {{ labelsMap['previous'] }}
                </VsButton>

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9 float-right"
                    ref="forwardPage"
                    v-if="activeStage < formData.stages"
                    :disabled="activeStage > 0 && !answerSet"
                    @click="forwardPage()"
                >
                    {{ labelsMap['next'] }}
                </VsButton>

                <VsButton
                    variant="primary"
                    type="submit"
                    class="vs-form__submit mt-9 float-right"
                    v-if="activeStage === formData.stages"
                    :disabled="!answerSet"
                    @click="forwardPage()"
                >
                    {{ labelsMap['results'] }}
                </VsButton>

                <VsButton
                    variant="secondary"
                    type="submit"
                    class="vs-form__submit mt-9 float-right"
                    v-if="activeStage > formData.stages"
                    @click="restart()"
                >
                    {{ labelsMap['restart'] }}
                </VsButton>
            </VsCol>
        </VsRow>

        <VsWarning
            theme="light"
        >
            {{ labelsMap['noJsMessage'] }}
        </VsWarning>
    </div>
</template>

<script>
import axios from 'axios';
import { VsCol, VsRow } from '@components/grid';
import VsWarning from '@/components/warning/Warning.vue';
import VsButton from '@/components/button/Button.vue';
import VsProgressBar from '@/components/progress-bar/ProgressBar.vue';
import VsHeading from '@components/heading/Heading.vue';

import VsExperiencesCalculatorResults from './components/ExperiencesCalculatorResults.vue';
import VsExperiencesCalculatorIntro from './components/ExperiencesCalculatorIntro.vue';
import VsExperiencesCalculatorQuestion from './components/ExperiencesCalculatorQuestion.vue';

/**
 * @displayName Experiences Calculator Form
 */

export default {
    name: 'VsExperiencesCalculator',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsCol,
        VsRow,
        VsWarning,
        VsProgressBar,
        VsHeading,
        VsExperiencesCalculatorResults,
        VsExperiencesCalculatorIntro,
        VsExperiencesCalculatorQuestion,
    },
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
         *    `question-1.title` <- the category for the first question
         *    `question-1.question` <- the content of the first question
         *    `question-1.option-1` <- the first option for the first question
         *    `question-1.tip` <- the content of the tip for the above option
         * and then repeat for each question-x beyond that.
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
            if (!this.formData || !this.activeStage) {
                return null;
            }

            return this.formData.fields[this.activeStage - 1];
        },
        /**
         * The tip which is currently being displayed to the user, based on their
         * answer to the current question and what tips are available in their language
         */
        currentTip() {
            if (this.activeStage) {
                if (this.labelsMap[`stage-${this.activeStage}.tip`]) {
                    return this.labelsMap[`stage-${this.activeStage}.tip`];
                }
            }

            return '';
        },
        /**
         * Retrieves the category for a given stage from the localised labelsMap provided
         * by the CMS
         */
        currentCategory() {
            if (this.labelsMap[`stage-${this.activeStage}.title`]) {
                return this.labelsMap[`stage-${this.activeStage}.title`];
            }

            return '';
        },
        /**
         * Retrieves the CTA to add an extra answer for a given stage, if that stage is repeatable
         */
        activeStageRepeatable() {
            if (this.labelsMap[`stage-${this.activeStage}.repeat`]) {
                return this.labelsMap[`stage-${this.activeStage}.repeat`];
            }

            return '';
        },
    },
    mounted() {
        this.getFormData();
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
                activeStage: 0,
                answerSet: false,
                repeatableStages: {
                },
            };
        },
        /**
         * Resets the form to its initial data configuration to restart the user's calculation.
         * The formData is loaded on page creation by axios and won't change between calculations
         * so can be held and set in the component to avoid doubling the load.
         */
        restart() {
            const { formData, repeatableStages } = this;
            Object.assign(this.$data, this.initialState());
            this.$data.formData = formData;
            this.$data.repeatableStages = repeatableStages;

            this.cleanFields();
        },
        /**
         * Remove leftover duplicated fields from form field data on reset, and reset count for
         * each field that has been duplicated.
         */
        cleanFields() {
            for (let x = this.formData.fields.length - 1; x >= 0; x--) {
                if (this.formData.fields[x].isClone) {
                    this.formData.fields.splice(x, 1);
                }
            }

            for (let x = 0; x < Object.keys(this.repeatableStages).length; x++) {
                this.repeatableStages[Object.keys(this.repeatableStages)[x]].generations = 0;
            }
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

                    this.repeatableStages = {
                    };

                    if (response.data.repeatableStages) {
                        for (let x = 0; x < response.data.repeatableStages.length; x++) {
                            this.repeatableStages[response.data.repeatableStages[x]] = {
                                generations: 0,
                            };
                        };
                    }
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
         * Retrieves the label for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionLabel(field, index) {
            if (field.isClone) {
                if (this.labelsMap[`question-${field.originalNumber + 1}.clone-question`]) {
                    return this.labelsMap[`question-${field.originalNumber + 1}.clone-question`];
                }

                if (this.labelsMap[`question-${field.originalNumber + 1}.question`]) {
                    return this.labelsMap[`question-${field.originalNumber + 1}.question`];
                }
            }

            if (this.labelsMap[`question-${index + 1}.question`]) {
                return this.labelsMap[`question-${index + 1}.question`];
            }

            return '';
        },
        /**
         * Retrieves the hint for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionHint(field, index) {
            if (field.isClone) {
                if (this.labelsMap[`question-${field.originalNumber + 1}.clone-hint`]) {
                    return this.labelsMap[`question-${field.originalNumber + 1}.clone-hint`];
                }

                if (this.labelsMap[`question-${field.originalNumber + 1}.hint`]) {
                    return this.labelsMap[`question-${field.originalNumber + 1}.hint`];
                }
            }

            if (this.labelsMap[`question-${index + 1}.hint`]) {
                return this.labelsMap[`question-${index + 1}.hint`];
            }

            return '';
        },
        /**
         * Retrieves the options for a given question from the localised labelsMap provided
         * by the CMS
         */
        getQuestionOptions(field, index) {
            let optionIndex;

            if (field.isClone) {
                optionIndex = field.originalNumber;
            } else {
                optionIndex = index;
            }

            if (field.element === 'radio') {
                const { options } = field;

                for (let x = 0; x < options.length; x++) {
                    const option = `question-${optionIndex + 1}.option-${x + 1}`;
                    const optionImg = `${option}-img`;

                    options[x].text = this.labelsMap[option];
                    options[x].img = this.labelsMap[optionImg] ? this.labelsMap[optionImg] : '';
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
            // this.calculateEmissions();
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
         * Calculates the current value of a radio button based question in the experiences
         * calculator form. Each field has an actual raw value which is retruned by the radio button
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

            if (field.multiplyByValue && fieldName !== field.multiplyByValue) {
                let multiplier = this.getNumberValue(
                    field.multiplyByValue.question,
                    this.form[field.multiplyByValue.question],
                ) || 0;
                multiplier = Math.max(multiplier, field.multiplyByValue.minimum);
                return selectedValue * multiplier;
            }

            return selectedValue;
        },
        /**
         * Calculates the current value of a number input based question in the experiences
         * calculator form. Each field has an actual raw value which is retruned by the radio button
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
                const multiplier = this.form[field.multiplyByAnswer.question] || 0;
                return (parseInt(key, 10) * multiplier);
            }

            if (field.multiplyByValue && fieldName !== field.multiplyByValue) {
                const multiplier = this.getNumberValue(
                    field.multiplyByValue.question,
                    this.form[field.multiplyByValue.question],
                );
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
         * Calculates the current total emissions value, and category specific emission values
         * for the user based on their submitted answers.
         */
        // calculateEmissions() {
        //     this.transportKilos = 0;

        //     this.accommodationKilos = 0;

        //     this.foodKilos = 0;

        //     for (let x = 0; x < this.formData.fields.length; x++) {
        //         const currentField = this.formData.fields[x];

        //         switch (currentField.stage) {
        //         case 1:
        //         case 3:
        //             this.transportKilos += this.getFieldValue(
        //                 currentField,
        //             );
        //             break;
        //         case 2:
        //             this.accommodationKilos += this.getFieldValue(
        //                 currentField,
        //             );
        //             break;
        //         case 4:
        //             this.foodKilos += this.getFieldValue(
        //                 currentField,
        //             );
        //             break;
        //         default:
        //             break;
        //         }
        //     }

        //     this.totalKilos = this.transportKilos + this.accommodationKilos + this.foodKilos;
        // },
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

            this.activeStage += 1;
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

            this.activeStage -= 1;
            this.checkNewAnswerSet();
            this.resetFocus();
        },
        /**
         * Checks if an answer has been provided for the current question, if one
         * is necessary to proceed
         */
        checkNewAnswerSet() {
            if (this.activeStage > this.formData.stages) {
                this.answerSet = true;
                return;
            }

            this.answerSet = true;

            for (let x = 0; x < this.formData.fields.length; x++) {
                if (this.formData.fields[x].stage === this.activeStage) {
                    const nextCheckQuestion = this.formData.fields[x];

                    if (nextCheckQuestion.element === 'radio' && !this.form[nextCheckQuestion.name]) {
                        this.answerSet = false;
                    } else if (nextCheckQuestion.element === 'number' && !this.form[nextCheckQuestion.name]) {
                        this.form[nextCheckQuestion.name] = nextCheckQuestion.validation.min;
                    }
                }
            }
        },
        /**
         * Check if the current stage appears in the list of repeatableStages defined in the form
         * data. If so it should be possible to enter multiple values for it.
         */
        isRepeatable(stage) {
            if (this.repeatableStages[stage] && this.repeatableStages[stage].generations < 3) {
                return true;
            }

            return false;
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
                    try {
                        this.$refs.questions[this.activeStage - 1].$el.focus();
                        this.$refs.progress.$el.scrollIntoView();
                    } catch (e) {
                        // Fails in jest
                    }
                });
            });
        },
        /**
         * Adds a duplicate for each question in the current stage to the form data. Duplicates
         * are marked as clones to ensure subsequent duplicates are only added one set at a time
         * rather than doubled.
         */
        duplicateCurrentStage(event) {
            if (event) {
                event.preventDefault();
            }

            const nextGeneration = this.repeatableStages[this.activeStage].generations + 1;

            for (let x = 0; x < this.formData.fields.length; x++) {
                const nextQuestion = this.formData.fields[x];

                if (nextQuestion.stage === this.activeStage && !nextQuestion.isClone) {
                    const cloneQuestion = JSON.parse(JSON.stringify(nextQuestion));
                    cloneQuestion.isClone = true;

                    const cloneName = `${nextQuestion.name}${nextGeneration}`;

                    cloneQuestion.name = cloneName;
                    cloneQuestion.originalNumber = x;

                    this.form[cloneName] = '';

                    this.formData.fields.push(cloneQuestion);
                }
            }

            this.repeatableStages[this.activeStage].generations = nextGeneration;
        },
    },
};
</script>

<style lang='scss'>
    .vs-experiences-calculator {
        display: block;

        .vs-progress-bar {
            margin-bottom: $spacer-8;
        }

        .vs-experiences-calculator__category-heading {
            margin-top: 0;
            margin-bottom: $spacer-6;
        }
    }

    .vs-experiences-calculator__wrapper .vs-warning {
        display: none;
    }

    @include no-js {
        .vs-experiences-calculator {
            display: none;
        }

        .vs-experiences-calculator__wrapper .vs-warning {
            display: block;
        }
    }
</style>
