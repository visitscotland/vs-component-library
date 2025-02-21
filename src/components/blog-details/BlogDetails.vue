<template>
    <div
        class="vs-blog-details"
        data-test="vs-blog-details"
        v-if="blogAuthor || blogReadTime || blogPublishDate"
    >
        <div
            v-if="blogAuthor"
            class="vs-blog-details__author vs-blog-details--highlight"
        >
            {{ blogAuthor }}
        </div>

        <div
            data-test="vs-blog-details__date-time"
            :class="!blogAuthor ? 'vs-blog-details--highlight' : ''"
            class="mb-150"
        >
            <VsIcon
                icon="fa-regular fa-clock"
                :variant="iconVariant"
                class="align-text-top me-050"
            />{{ blogReadTime }}
            <span
                v-if="blogPublishDate"
                class="vs-blog-details__date"
            >
                <span class="vs-blog-details__divider">•</span>
                {{ blogPublishDate }}
            </span>
        </div>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

/**
 * Displays relevant blog details such as author, date published
 * and time to read.
 *
 * @displayName Blog Details
 */

export default {
    name: 'VsBlogDetails',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    props: {
        /**
         * Name of the blog author
         */
        blogAuthor: {
            type: String,
            default: null,
        },
        /**
         * Date the blog was published
         */
        blogPublishDate: {
            type: String,
            default: null,
        },
        /**
         * How long the blog takes to read
         */
        blogReadTime: {
            type: String,
            default: null,
        },
    },
    computed: {
        iconVariant() {
            return this.blogAuthor ? 'secondary' : 'highlight';
        },
    },
};
</script>

<style lang="scss">
.vs-blog-details {
    &__date {
        display: block;

        @include media-breakpoint-up(sm) {
            display: inline;
        }
    }

    &__divider {
        display: none;
        padding: 0 $spacer-025;

        @include media-breakpoint-up(sm) {
            display: inline;
        }
    }

    &--highlight {
        color: $vs-color-text-tertiary;
    }
}
</style>
