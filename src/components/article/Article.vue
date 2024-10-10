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
                        class="vs-article__wrapper mb-9 mb-md-11"
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
                                    class="vs-article__header mx-md-0 mt-9 mt-lg-11"
                                    :class="businessSupport ? null : 'mx-6'"
                                >
                                    <VsHeading
                                        level="2"
                                        headingStyle="heading-xl"
                                        class="mb-8 mb-lg-9"
                                        :class="businessSupport ? null : 'text-center'"
                                    >
                                        <span :id="anchorLink ? anchorLink : ''">
                                            {{ title }}
                                        </span>
                                    </VsHeading>

                                    <VsRichTextWrapper
                                        variant="lead"
                                        class="mb-9 mb-lg-10"
                                        :class="businessSupport ? null : 'text-center'"
                                    >
                                        <!-- @slot Slot to contain the introduction
                                        for this article -->
                                        <slot name="vs-article-intro" />
                                    </VsRichTextWrapper>
                                </div>

                                <VsCol
                                    v-if="businessSupport"
                                    class="mb-9"
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
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

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
        VsRichTextWrapper,
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
    },
};
</script>

<style lang="scss">
.vs-article {
    &__wrapper{
        border: 1px solid $vs-color-border;

        figure{
            margin-bottom: 0;
        }

        &--no-border {
            border: 0;
        }
    }

    .vs-video-caption__details {
        display: block;
    }
}
</style>
