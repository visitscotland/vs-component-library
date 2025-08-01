<template>
    <div
        class="vs-article-details"
        data-test="vs-article-details"
        v-if="articleAuthor || articleReadTime || articlePublishDate"
    >
        <div
            v-if="articleAuthor"
            class="vs-article-details__author vs-article-details--highlight"
        >
            {{ articleAuthor }}
        </div>

        <div
            data-test="vs-article-details__date-time"
            :class="!articleAuthor ? 'vs-article-details--highlight' : ''"
            class="mb-150"
        >
            <template v-if="articleReadTime">
                <VsIcon
                    icon="fa-regular fa-clock"
                    :variant="iconVariant"
                    class="align-text-top me-050"
                />{{ articleReadTime }}
            </template>
            <span
                v-if="articlePublishDate"
                class="vs-article-details__date"
            >
                <span
                    v-if="articleReadTime"
                    class="vs-article-details__divider"
                >•</span>
                {{ articlePublishDate }}
            </span>
        </div>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

/**
 * Displays relevant article details such as author, date published
 * and time to read.
 *
 * @displayName Article Details
 */

export default {
    name: 'VsArticleDetails',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    props: {
        /**
         * Name of the article author
         */
        articleAuthor: {
            type: String,
            default: null,
        },
        /**
         * Date the article was published
         */
        articlePublishDate: {
            type: String,
            default: null,
        },
        /**
         * How long the article takes to read
         */
        articleReadTime: {
            type: String,
            default: null,
        },
    },
    computed: {
        iconVariant() {
            return this.articleAuthor ? 'secondary' : 'highlight';
        },
    },
};
</script>

<style lang="scss">
.vs-article-details {
    &__date {
        display: block;

        @include media-breakpoint-up(sm) {
            display: inline;
        }
    }

    &__divider {
        display: none;
        padding: 0 $vs-spacer-025;

        @include media-breakpoint-up(sm) {
            display: inline;
        }
    }

    &--highlight {
        color: $vs-color-text-tertiary;
    }
}
</style>
