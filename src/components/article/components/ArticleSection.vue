<template>
    <div
        class="vs-article-section mb-200 mb-md-400"
        :class="sidebarAlignClass"
        data-test="vs-article-section"
    >
        <VsRow>
            <VsCol
                v-if="hasSidebarSlot"
                cols="12"
                md="5"
                xl="4"
                data-test="vs-article-section__sidebar"
                class="col-xxl-4"
                :class="sidebarAlign === 'right' ? 'pe-md-0' : 'ps-md-0'"
                :offset-xl="sidebarAlign === 'right' ? '1' : null"
                :order-md="sidebarAlign === 'right' ? '2' : null"
                :order="businessSupport ? '2' : null"
            >
                <!-- @slot Slot to contain the article sidebar -->
                <slot name="article-sidebar" />
            </VsCol>
            <VsCol
                cols="12"
                :md="hasSidebarSlot ? '7' : '9'"
                data-test="vs-article-section__content"
                :offset-xl="sidebarAlign === 'left' ? '1' : ''"
            >
                <div
                    class="mx-md-0"
                    :class="!businessSupport && 'mx-150'"
                >
                    <VsBody>
                        <!-- @slot Default slot to contain the copy for this article -->
                        <slot />
                    </VsBody>
                </div>
            </VsCol>
        </VsRow>
    </div>
</template>

<script>
import { VsCol, VsRow } from '@/components/grid';
import VsBody from '@/components/body/Body.vue';
/**
 * The ArticleSection component is used within an Article to alternate paragraphs.
 * Each section can have one ArticleSidebar which is automatically
 * displayed left or right of the section.
 *
 * @displayName Article Section
 */
export default {
    name: 'VsArticleSection',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsBody,
    },
    props: {
        /**
         * This sets the alignment of the sidebar left or right of the section
         */
        sidebarAlign: {
            type: String,
            default: 'left',
            validator: (value) => value.match(/(left|right)/),
        },
        businessSupport: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        sidebarAlignClass() {
            return this.sidebarAlign === 'right'
                ? 'vs-article-section--sidebar-right'
                : 'vs-article-section--sidebar-left';
        },
        hasSidebarSlot() {
            return !!this.$slots['article-sidebar'];
        },
    },
};
</script>

<style lang="scss">
.vs-article-section {
    &--sidebar-right {
        @include media-breakpoint-up(md) {
            margin-right: -14.8%;
        }

        @include media-breakpoint-up(lg) {
            margin-right: -12.5%;
        }

        @include media-breakpoint-up(xl) {
            margin-right: -13.6%;
        }

        @include media-breakpoint-up(xxl) {
            margin-right: -23.2%;
        }
    }

    &--sidebar-left {
        @include media-breakpoint-up(md) {
            margin-left: -14.8%;
        }

        @include media-breakpoint-up(lg) {
            margin-left: -12.5%;
        }

        @include media-breakpoint-up(xl) {
            margin-left: -13.6%;
        }

        @include media-breakpoint-up(xxl) {
            margin-left: -23.2%;
        }
    }
}
</style>
