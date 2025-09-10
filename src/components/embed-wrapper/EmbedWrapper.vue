<template>
    <div
        data-test="vs-embed-wrapper"
        class="vs-embed-wrapper"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    sm="10"
                    offset-sm="1"
                    md="6"
                    offset-md="3"
                >
                    <VsBody
                        class="vs-module-wrapper__intro vs-embed-wrapper__intro"
                        v-if="($slots['embed-intro-copy'] && $slots['embed-intro-copy']())
                            && !showError"
                        data-test="vs-module-wrapper__intro"
                    >
                        <!-- @slot Slot to contain intro text -->
                        <slot name="embed-intro-copy" />
                    </VsBody>
                </VsCol>
                <VsCol
                    cols="12"
                >
                    <div
                        class="vs-embed-wrapper__container"
                        v-if="cookiesAllowed || noCookiesRequired"
                        key="embeddedContent"
                    >
                        <!--
                            @slot Takes the dom element for the embedded javascript widget, any
                            associated script tags can't be passed into the vue element and should
                            be loaded further down the page outside of the vue components
                        -->
                        <slot name="embed-widget" />
                    </div>
                    <div
                        v-if="showError"
                        key="fallback"
                    >
                        <VsWarning
                            :type="cookiesLoaded === true ? 'cookie' : 'normal'"
                            class="vs-embed-wrapper__error"
                            data-test="vs-embed-wrapper__error"
                        >
                            {{ warningText }}

                            <template
                                #extra-content
                                v-if="extraContent"
                            >
                                <div v-html="extraContent" />
                            </template>

                            <template
                                v-if="!cookiesAllowed
                                    && cookiesLoaded === true"
                                #button-text
                            >
                                <slot name="embed-button-text" />
                            </template>
                        </VsWarning>
                    </div>

                    <VsWarning
                        type="normal"
                        data-test="vs-embed-wrapper__error--no-js"
                        class="vs-embed-wrapper__error vs-embed-wrapper__error--no-js"
                    >
                        {{ noJsText }}
                    </VsWarning>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';
import VsBody from '@/components/body/Body.vue';
import VsWarning from '@/components/warning/Warning.vue';
import verifyCookiesMixin from '../../mixins/verifyCookiesMixin';
import requiredCookiesData from '../../utils/required-cookies-data';

const cookieValues = requiredCookiesData.embed;

/**
 * This component acts as a wrapper for an embedded javascript widget and provides
 * no-js and no-cookies functionality for that widget
 *
 * @displayName Embed Wrapper
 */
export default {
    name: 'VsEmbedWrapper',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsBody,
        VsWarning,
    },
    mixins: [
        verifyCookiesMixin,
    ],
    props: {
        /**
         * Set to true if the embedded code does not require a cookie check
         */
        noCookiesRequired: {
            type: Boolean,
            default: false,
        },
        /**
         * Text to display when cookies have been rejected
         */
        noCookieText: {
            type: String,
            required: true,
        },
        /**
         * Text to display when there is an error displaying the content
         */
        errorText: {
            type: String,
            required: true,
        },
        /**
         * Text to display when javascript has been turned off
         */
        noJsText: {
            type: String,
            required: true,
        },
        /**
         * Extra content to display, rendered as html so it can include
         * explanatory links
         */
        extraContent: {
            type: String,
            default: '',
        },
        /**
         * A script that should only be loaded if the user accepts cookies, often necessary
         * to make the embed work.
         */
        embeddedScript: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            requiredCookies: this.noCookiesRequired ? null : cookieValues,
        };
    },
    computed: {
        showError() {
            if (this.noCookiesRequired) {
                return false;
            };

            if ((!this.cookiesAllowed
                && this.cookiesLoaded === true)
                || !this.cookiesLoaded) {
                return true;
            }

            return false;
        },
        warningText() {
            let text = '';

            if (!this.cookiesLoaded) {
                text = this.errorText;
            }

            if (!this.cookiesAllowed
                && this.cookiesLoaded === true) {
                text = this.noCookieText;
            }

            return text;
        },
    },
    methods: {
        callbackOnUpdated() {
            if (this.embeddedScript && this.cookiesLoaded && this.requiredCookiesAllowed) {
                const script = document.createElement('script');
                script.src = this.embeddedScript;
                document.head.appendChild(script);
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-embed-wrapper {
        &__error-image {
            max-width: 100%;
        }

        .vs-embed-wrapper__no-js, .vs-embed-wrapper__no-cookies {
            display: none;
        }

        &__error--no-js {
            display: none;
        }
    }

    @include no-js {
        .vs-embed-wrapper {
            &__container {
                display: none;
            }

            &__intro {
                display: none;
            }

            &__error {
                display: none;

                &--no-js {
                    display: block;
                }
            }
        }
    }
</style>
