<template>
    <section
        class="vs-module-wrapper"
        data-test="vs-module-wrapper"
        :class="`vs-module-wrapper--${theme}`"
        v-bind="$attrs"
    >
        <VsContainer
            v-if="($slots['vs-module-wrapper-heading'] && $slots['vs-module-wrapper-heading'])
                || ($slots['vs-module-wrapper-intro'] && $slots['vs-module-wrapper-intro'])"
        >
            <VsRow>
                <VsCol
                    cols="10"
                    offset="1"
                    md="8"
                    offset-md="2"
                    v-if="$slots['vs-module-wrapper-heading'] && $slots['vs-module-wrapper-heading']"
                >
                    <VsHeading
                        level="2"
                        class="vs-module-wrapper__heading"
                        data-test="vs-module-wrapper__heading"
                    >
                        <!-- @slot Slot to contain heading -->
                        <slot name="vs-module-wrapper-heading" />
                    </VsHeading>
                </VsCol>
                <VsCol
                    cols="12"
                    sm="10"
                    offset-sm="1"
                    md="8"
                    offset-md="2"
                    v-if="$slots['vs-module-wrapper-intro'] && $slots['vs-module-wrapper-intro']"
                >
                    <VsRichTextWrapper
                        class="vs-module-wrapper__intro"
                        data-test="vs-module-wrapper__intro"
                        variant="lead"
                    >
                        <!-- @slot Slot to contain intro text -->
                        <slot name="vs-module-wrapper-intro" />
                    </VsRichTextWrapper>
                </VsCol>
            </VsRow>
        </VsContainer>

        <!-- @slot Default slot for module content -->
        <slot />
    </section>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**
* Header intro and button wrapper for module content
*
* @displayName Module Wrapper
*/
export default {
    name: 'VsModuleWrapper',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsRichTextWrapper,
        VsContainer,
        VsRow,
        VsCol,
    },
    props: {
        /**
        * Theme of module wrapper to use
        */
        theme: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey|neutral)/),
        },
    },
};
</script>

<style lang="scss">
    .vs-module-wrapper {
        padding-top: $spacer-9;
        padding-bottom: $spacer-9;
        text-align: center;

        &__heading.vs-heading {
            margin-bottom: $spacer-8;
        }

        &__intro {
            display: block;
            margin-bottom: $spacer-9;

            p:last-of-type {
                margin-bottom: 0;
            }
        }

        @include media-breakpoint-up(sm) {
            padding-top: $spacer-10 + $spacer-2;
            padding-bottom: $spacer-12;
        }

        &--grey {
            background-color: $vs-color-background-information;
        }

        &--neutral {
            background-color: $vs-color-background-neutral;
        }
    }

    .vs-module-wrapper__outer--light + .vs-module-wrapper__outer--light {
        .vs-module-wrapper {
            padding-top: $spacer-4;

            @include media-breakpoint-up(sm) {
                padding-top: $spacer-2;
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
        padding-top: $spacer-4;

        @include media-breakpoint-up(sm) {
            padding-top: $spacer-2;
        }
    }
</style>
