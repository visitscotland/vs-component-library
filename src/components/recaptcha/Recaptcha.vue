<template>
    <div
        class="vs-recaptcha"
        aria-live="assertive"
    >
        <span
            v-if="invalid && !reAlertErrors"
            class="error"
        >
            {{ errorMsg }}
        </span>
        <VueRecaptcha
            v-if="recaptchaSiteKey"
            :sitekey="recaptchaSiteKey"
            @verify="verified"
            @render="render"
            class="vs-recaptcha__embed"
            :class="invalid ? 'vs-recaptcha__embed--error' : ''"
            :language="language"
        />
    </div>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';

import getEnvValue from '@/utils/get-env-value';

/**
 * The reCaptcha component allows us to tell human and
 * automated bots apart when submitting data.
 *
 * @displayName Recaptcha
 */

export default {
    name: 'VsRecaptcha',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VueRecaptcha,
    },
    props: {
        /**
         * Recaptcha site key string
         */
        siteKey: {
            type: String,
            default: '',
        },
        /**
         * Whether or not the form is invalid - this should
         * also only be true when an attempt at submission has
         * been made
         */
        invalid: {
            type: Boolean,
            default: false,
        },
        /**
         * Language to show text in
         */
        language: {
            type: String,
            default: 'en',
        },
        /**
         * Validation message if the recaptcha isn't completed
         */
        errorMsg: {
            type: String,
            default: '',
        },
        /**
         * Text for invisible recaptcha textarea - tells
         * screenreader users it's not needed
         */
        textareaLabel: {
            type: String,
            default: 'Does not need any text',
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
    emits: ['verified'],
    data() {
        return {
            response: null,
            recaptchaSiteKey: '',
        };
    },
    created() {
        if (this.siteKey) {
            this.recaptchaSiteKey = this.siteKey;
        } else {
            this.recaptchaSiteKey = getEnvValue('RECAPTCHA_TOKEN');
        }
    },
    methods: {
        verified(response) {
            /**
             * Emit Google response to recaptcha submission
             * @type {string}
             * @property {object} field the object returned by Google
             * in response to the recaptcha being submitted
             */
            this.$emit('verified', response);
        },
        render() {
            // when recaptcha is rendered add a label to the invisible textarea
            // to show screenreader users it doesn't need filling
            const recaptchaTextareas = document.querySelectorAll('[id^="g-recaptcha-response"]');
            if (recaptchaTextareas.length) {
                const recaptchaParent = recaptchaTextareas[0].parentNode;
                const existingRecaptchaLabel = document.querySelector('label[for="g-recaptcha-response"]');
                const recaptchaLabel = document.createElement('label');
                recaptchaLabel.setAttribute('for', 'g-recaptcha-response');
                recaptchaLabel.setAttribute('class', 'visually-hidden');
                recaptchaLabel.textContent = this.textareaLabel;

                if (!existingRecaptchaLabel) {
                    recaptchaParent.insertBefore(recaptchaLabel, recaptchaTextareas[0]);
                }
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-recaptcha {
        &__embed {
            &--error {
                & > div {
                    outline: 2px solid $vs-color-border-error;
                    margin-top: $spacer-050;
                }
            }
        }
    }
</style>
