<template>
    <article
        class="vs-article"
        data-test="vs-article"
        v-bind="$attrs"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    :class="businessSupport ? null : 'col-xxl-10 offset-xxl-1'"
                >
                    <div
                        class="vs-article__wrapper mb-300 mb-md-500"
                        :class="businessSupport ? 'vs-article__wrapper--no-border' : null"
                    >
                        <!-- @slot Slot to contain the cover image for this article -->
                        <slot
                            v-if="!businessSupport"
                            name="vs-article-img"
                        />

                        <VsRow>
                            <VsCol
                                cols="12"
                                md="10"
                                :offset-md="businessSupport ? null : '1'"
                            >
                                <div
                                    class="vs-article__header mx-md-0 mt-300 mt-lg-500"
                                    :class="businessSupport ? null : 'mx-150'"
                                >
                                    <VsHeading
                                        :level="headingLevel"
                                        :heading-style="headingStyle"
                                        class="mb-200 mb-lg-300"
                                        :class="businessSupport ? null : 'text-center'"
                                    >
                                        <span :id="anchorLink ? anchorLink : ''">
                                            {{ title }}
                                        </span>
                                    </VsHeading>

                                    <VsBody
                                        v-if="$slots['vs-article-intro']"
                                        variant="lead"
                                        class="mb-300 mb-lg-400"
                                        :class="businessSupport ? null : 'text-center'"
                                    >
                                        <!-- @slot Slot to contain the introduction
                                        for this article -->
                                        <slot name="vs-article-intro" />
                                    </VsBody>
                                </div>

                                <VsCol
                                    v-if="businessSupport && $slots['vs-article-img']"
                                    class="mb-300"
                                    cols="7"
                                >
                                    <slot name="vs-article-img" />
                                </VsCol>

                                <div class="vs-article__content">
                                    <!-- @slot Default slot to contain ArticleSections
                                    for this article -->
                                    <slot />
                                </div>
                            </VsCol>
                        </VsRow>
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </article>
</template>

<script>
import {
    VsCol, VsRow, VsContainer,
} from '@/components/grid';
import VsHeading from '@/components/heading/Heading.vue';
import { isNumber } from 'lodash';
import VsBody from '@/components/body/Body.vue';

/**
 * The article component is used for in-depth editorial style
 * content.
 *
 * @displayName Article
 */
export default {
    name: 'VsArticle',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsContainer,
        VsHeading,
        VsBody,
    },
    props: {
        /**
         * Title of the article
         */
        title: {
            type: String,
            required: true,
        },
        /**
         * ID of the anchor link if needed
         */
        anchorLink: {
            type: String,
            default: '',
        },
        /**
         * Flag that this component is being used on the Business Support Hub
         * which requires specific changes to be applied.
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
         * `display-l|display-m|display-s|display-xs|heading-xxl|heading-xl|
         * heading-l|heading-m|heading-s|heading-xs|heading-xxs`
         */
        headingStyle: {
            type: String,
            default: 'heading-xl',
            validator: (value) => value.match(
                /(display-l|display-m|display-s|display-xs|heading-xxl|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs|heading-xxxs)/,
            ),
        },
    },
};
</script>

<style lang="scss">
.vs-article {
    &__wrapper{
        border: 1px solid $vs-color-border-primary;

        figure{
            margin-bottom: 0;
        }

        &--no-border {
            border: 0;
        }
    }

    .vs-article-section:first-of-type {
        .vs-heading:first-child {
            margin-top: $spacer-0;
        }
    }

    .vs-video-caption__details {
        display: block;
    }
}
</style>
