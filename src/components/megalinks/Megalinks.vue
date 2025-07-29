<template>
    <section
        class="vs-megalinks"
        :class="megalinksClasses"
        data-test="megalinks"
    >
        <VsContainer fluid="lg">
            <VsRow>
                <VsCol
                    cols="12"
                    md="8"
                    offset-md="2"
                >
                    <div
                        class="vs-megalinks__intro"
                        v-if="title"
                        data-test="vs-megalinks__intro"
                    >
                        <VsHeading
                            :level="headingLevel"
                            :heading-style="headingStyle"
                            class="vs-megalinks__heading"
                            data-test="vs-megalinks__heading"
                            :id="sectionId"
                        >
                            {{ title }}
                        </VsHeading>

                        <VsBody
                            class="vs-megalinks__intro-content"
                            v-if="$slots['vs-megalinks-intro'] && $slots['vs-megalinks-intro']()"
                            variant="lead"
                            data-test="vs-megalinks__intro-content"
                        >
                            <!-- @slot Slot to contain optional intro content -->
                            <slot name="vs-megalinks-intro" />
                        </VsBody>
                    </div>
                </VsCol>
            </VsRow>
            <div class="row vs-megalinks__links-wrapper">
                <!-- @slot Default slot to contain link blocks -->
                <slot />
            </div>
            <VsRow v-if="buttonLink && variant !== 'single-image'">
                <VsCol cols="12">
                    <div
                        class="vs-megalinks__button"
                        data-test="vs-megalinks__button"
                    >
                        <VsButton
                            :href="buttonLink"
                        >
                            <!-- @slot Slot to contain button text -->
                            <slot name="vs-megalinks-button" />
                        </VsButton>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </section>
</template>

<script>
import { isNumber } from 'lodash';
import VsHeading from '@/components/heading/Heading.vue';
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

/**
 * Megalinks wrapper used with Megalinks components.
 *
 * @displayName Megalinks
 */
export default {
    name: 'VsMegalinks',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsHeading,
        VsButton,
        VsBody,
    },
    provide() {
        return {
            noJsMessage: this.noJsMessage,
            noCookiesMessage: this.noCookiesMessage,
            cookieLinkText: this.cookieLinkText,
            theme: this.theme,
        };
    },
    props: {
        /**
        * Title for the megalinks component
        */
        title: {
            type: String,
            required: false,
            default: null,
        },
        /**
        * ID for the section heading; can be used as anchor link
        */
        sectionId: {
            type: String,
            required: false,
            default: null,
        },
        /**
        * Component has an optional main link at the bottom
        * this is the href for that
        */
        buttonLink: {
            type: String,
            required: false,
            default: null,
        },
        /**
        * The component variant
        */
        variant: {
            type: String,
            required: false,
            default: null,
            validator: (value) => value.match(/(multi-image|single-image|link-list)/),
        },
        /**
        * The component color theme
        */
        theme: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey)/),
        },
        /**
        * A message explaining why the component has been disabled js is disabled, is provided
        * for descendent components to inject
        */
        noJsMessage: {
            type: String,
            default: '',
        },
        /**
        * A message explaining why the component has been disabled with disabled cookies, is
        * provided for descendent components to inject
        */
        noCookiesMessage: {
            type: String,
            default: '',
        },
        /**
        *  Text for the link to the cookies preference centre.
        */
        cookieLinkText: {
            type: String,
            default: '',
        },
        /**
        * The correct heading level for page hierarchy, the
        * heading will be styled the same regardless of level provided
        * `1|2|3|4|5|6`
        */
        headingLevel: {
            type: Number,
            default: 2,
            validator: (value) => (isNumber(value) ? value > 0 && value < 7 : value.match(/(1|2|3|4|5|6)/)),
        },
        /**
         * The heading style used for the heading.
         * `display-m|display-s|heading-xl|
         * heading-l|heading-m|heading-s|heading-xs|heading-xxs`
         */
        headingStyle: {
            type: String,
            default: 'heading-xl',
            validator: (value) => value.match(
                /(display-m|display-s|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs|heading-xxxs)/,
            ),
        },
    },
    computed: {
        megalinksClasses() {
            return [
                this.variant ? `vs-megalinks--${this.variant}` : '',
                `vs-megalinks--${this.theme}`,
            ];
        },
    },
};
</script>

<style lang="scss">
    .vs-megalinks {
        padding: $spacer-300 0 $spacer-300;

        // make panels in a row equal height
        .row {
            display: flex;
            min-width: 100%;
        }

        .vs-megalinks__intro {
            width: 100%;
            text-align: center;
            margin-bottom: $spacer-200;

            p:first-of-type {
                margin-top: $spacer-150;
            }

            p:last-of-type {
                margin-bottom: 0;
            }
        }

        .vs-megalinks__heading {
            margin-bottom: 0 !important;
        }

        .vs-megalinks__button {
            width: 100%;
            text-align: center;
        }

        &--multi-image {
            padding-bottom: 0;

            .vs-megalinks__button {
                margin-bottom: $spacer-300;
            }
        }

        &--link-list {
            .vs-megalinks__button {
                margin-top: $spacer-200;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: $spacer-600 0 $spacer-600;

            .vs-megalinks__intro {
                text-align: center;
                margin-bottom: $spacer-300;
            }

            &--multi-image {
                padding-bottom: $spacer-200;

                .vs-megalinks__button {
                    margin-bottom: $spacer-400;
                }
            }

            &--single-image {
                padding-bottom: 0;
            }
        }

        &--light {
            & + .vs-megalinks--light {
                padding-top: 0;
            }
        }

        &--grey {
            background: $vs-color-background-secondary;

            & + .vs-megalinks--grey {
                padding-top: 0;
            }
        }
    }

     // styles needed to control spacing with CMS containers
    .has-edit-button.theme-light + .has-edit-button.theme-light .vs-megalinks {
        padding-top: 0;
    }

    .has-edit-button.theme-grey + .has-edit-button.theme-grey .vs-megalinks {
        padding-top: 0;
    }
</style>
