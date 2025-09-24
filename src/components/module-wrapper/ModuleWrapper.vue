<template>
    <section
        :class="sectionClasses"
        data-test="vs-module-wrapper"
        v-bind="$attrs"
    >
        <VsContainer
            v-if="($slots['vs-module-wrapper-heading'] && $slots['vs-module-wrapper-heading'])
                || ($slots['vs-module-wrapper-intro'] && $slots['vs-module-wrapper-intro'])"
        >
            <VsRow>
                <VsCol
                    v-bind="headingColumnSizes"
                    v-if="$slots['vs-module-wrapper-heading'] && $slots['vs-module-wrapper-heading']"
                >
                    <VsHeading
                        :level="headingLevel"
                        :heading-style="headingStyle"
                        class="vs-module-wrapper__heading"
                        data-test="vs-module-wrapper__heading"
                        :id="anchorId"
                    >
                        <!-- @slot Slot to contain heading -->
                        <slot name="vs-module-wrapper-heading" />
                    </VsHeading>
                </VsCol>
                <VsCol
                    v-bind="IntroColumnSizes"
                    v-if="$slots['vs-module-wrapper-intro'] && $slots['vs-module-wrapper-intro']"
                >
                    <VsBody
                        class="vs-module-wrapper__intro"
                        data-test="vs-module-wrapper__intro"
                        variant="lead"
                    >
                        <!-- @slot Slot to contain intro text -->
                        <slot name="vs-module-wrapper-intro" />
                    </VsBody>
                </VsCol>
            </VsRow>
        </VsContainer>

        <!-- @slot Default slot for module content -->
        <slot />
    </section>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsBody from '@/components/body/Body.vue';
import { isNumber } from 'lodash';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**
* @deprecated Use new SectionHeader component and
* utility-based spacing instead. This component will be
* removed in a future release.
* @see https://visitscotland.atlassian.net/wiki/spaces/DE/pages/774733832/Module+wrapper+deprecated
*
* @displayName Module Wrapper
*/
export default {
    name: 'VsModuleWrapper',
    status: 'deprecated',
    release: '0.0.1',
    components: {
        VsHeading,
        VsBody,
        VsContainer,
        VsRow,
        VsCol,
    },
    props: {
        /**
         * AnchorId will be used to set an id on the heading,
         * allowing for anchor links (ToC)
         */
        anchorId: {
            type: String,
            default: null,
        },
        /**
         * Set column size and left-align the heading and intro content
         * for the Business Support Hub site.
         */
        businessSupport: {
            type: Boolean,
            default: false,
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
        /**
        * Theme of module wrapper to use
        */
        theme: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey|neutral)/),
        },
    },
    computed: {
        sectionClasses() {
            return [
                'vs-module-wrapper',
                `vs-module-wrapper--${this.theme}`,
                this.businessSupport ? 'vs-module-wrapper--left-align' : null,
            ];
        },
        headingColumnSizes() {
            return {
                cols: this.businessSupport ? 12 : 10,
                offset: this.businessSupport ? 0 : 1,
                md: this.businessSupport ? 12 : 8,
                'offset-md': this.businessSupport ? 0 : 2,
            };
        },
        IntroColumnSizes() {
            return {
                cols: 12,
                sm: this.businessSupport ? 12 : 10,
                'offset-sm': this.businessSupport ? 0 : 1,
                md: this.businessSupport ? 12 : 8,
                'offset-md': this.businessSupport ? 0 : 2,
            };
        },
    },
};
</script>

<style lang="scss">
    .vs-module-wrapper {
        padding-top: $vs-spacer-300;
        padding-bottom: $vs-spacer-300;
        text-align: center;

        &__heading.vs-heading {
            margin-bottom: $vs-spacer-200;
        }

        &__intro {
            display: block;
            margin-bottom: $vs-spacer-300;

            p:last-of-type {
                margin-bottom: 0;
            }
        }

        @include media-breakpoint-up(sm) {
            padding-top: $vs-spacer-400 + $vs-spacer-050;
            padding-bottom: $vs-spacer-600;
        }

        &--grey {
            background-color: $vs-color-background-secondary;
        }

        &--neutral {
            background-color: $vs-color-background-information;
        }

        &--left-align {
            text-align: left;
        }
    }

    .vs-module-wrapper__outer--light + .vs-module-wrapper__outer--light {
        .vs-module-wrapper {
            padding-top: $vs-spacer-100;

            @include media-breakpoint-up(sm) {
                padding-top: $vs-spacer-050;
            }
        }
    }

    // The fixed modules at the bottom of each page (no-js social share, newsletter
    // and otyml) don't use the module-wrapper__outer normally and need these special
    // cases. Reassess as and when those get refactored whether these can be removed.

    .vs-module-wrapper__outer--light + .vs-module-wrapper__outer--hidden +
        .vs-module-wrapper--light,
    .vs-module-wrapper__outer--light + .vs-module-wrapper--light,
    .vs-module-wrapper--light + .vs-module-wrapper--light {
        padding-top: $vs-spacer-100;

        @include media-breakpoint-up(sm) {
            padding-top: $vs-spacer-050;
        }
    }
</style>
