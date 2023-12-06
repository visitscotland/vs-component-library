<template>
    <div
        class="vs-article-sidebar"
        :class="sidebarAlignClass"
        data-test="vs-article-sidebar"
    >
        <div
            :class="$slots['vs-article-sidebar-quote'] && $slots['vs-article-sidebar-quote']() ? 'pb-8' : ''"
            class="vs-article-sidebar__img-wrapper"
        >
            <!-- @slot Slot to contain an image for this article section -->
            <slot name="vs-article-sidebar-img" />
        </div>
        <div
            v-if="$slots['vs-article-sidebar-quote'] && $slots['vs-article-sidebar-quote']()"
            :class="$slots['vs-article-sidebar-img'] && $slots['vs-article-sidebar-img']() ? 'pt-0' : ''"
            class="vs-article-sidebar__quote-wrapper"
        >
            <!-- @slot Slot to contain an quote for this article section -->
            <slot name="vs-article-sidebar-quote" />
        </div>
    </div>
</template>

<script>
/**
 * The ArticleSidebar component is used with an ArticleSection to hold an image or quote
 * which will alternate being displayed left or right of the section.
 *
 * @displayName Article Sidebar
 */
export default {
    name: 'VsArticleSidebar',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * This sets the alignment of the sidebar left or right of the section
         */
        sidebarAlign: {
            type: String,
            default: 'left',
            validator: (value) => value.match(/(left|right)/),
        },
    },
    computed: {
        sidebarAlignClass() {
            return this.sidebarAlign === 'right'
                ? 'vs-article-sidebar--right'
                : 'vs-article-sidebar--left';
        },
    },
};
</script>

<style lang="scss">
.vs-article-sidebar {
    background: $color-white;

    &__quote-wrapper {
        background: $color-white;
        margin-left: -1px;
        padding: $spacer-8 $spacer-6;

        @include media-breakpoint-up(md) {
            margin-left: 0;
            padding: $spacer-8 $spacer-0 $spacer-1;
        }
    }

    @include media-breakpoint-up(md) {
        &--right{
            .vs-article-sidebar__quote-wrapper {
                padding-left: $spacer-0;
                padding-right: $spacer-8;
            }
        }

        &--left{
            .vs-article-sidebar__quote-wrapper {
                padding-left: $spacer-8;
                padding-right: $spacer-0;
            }
        }
    }

    .vs-image-with-caption__video-caption-wrapper {
        padding: $spacer-0;
    }

    .vs-image-with-caption__image-wrapper {
        .vs-toggle-btn {
            @include media-breakpoint-between(sm, md) {
                display: block;
            }
        }
    }

    .vs-caption .col {
        padding: $spacer-0;
    }

    .vs-caption .vs-caption__caption-info {
        padding: $spacer-3 $spacer-2 $spacer-3;

        @include media-breakpoint-up(sm) {
            padding: $spacer-3;
        }
    }
}
</style>
