<template>
    <div
        class="vs-blog-details"
        data-test="vs-blog-details"
    >
        <span class="vs-blog-details__author">
            {{ blogAuthor }} <span class="vs-blog-details__divider">·</span>
            <span class="vs-blog-details__date">
                {{ blogPublishDate }}
            </span>
        </span>
        <span class="vs-blog-details__read-time">
            {{ blogReadTime }}
        </span>
    </div>
</template>

<script>

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
    props: {
        /**
         * Name of the blog author
         */
        blogAuthor: {
            type: String,
            required: true,
        },
        /**
         * Date the blog was published
         */
        blogPublishDate: {
            type: String,
            required: true,
        },
        /**
         * How long the blog takes to read
         */
        blogReadTime: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.vs-blog-details {
    &__author{
        display: block;
    }

    &__date {
        color: $vs-color-text-subtle;
    }

    &__read-time {
        display: block;
        margin-bottom: $spacer-6;
        color: $vs-color-text-subtle;
    }

    &__divider {
        padding: 0 $spacer-2;
    }
}
</style>
