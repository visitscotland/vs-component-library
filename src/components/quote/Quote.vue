<template>
    <div
        class="vs-quote"
        :class="variantClass"
        data-test="vs-quote"
    >
        <div
            v-if="!withBorder"
            class="vs-quote__speech-container"
        >
            <span class="vs-quote__speech-mark">“</span>
        </div>
        <div
            class="vs-quote__author-container"
            v-if="hasAuthorImage"
        >
            <!-- @slot Holds the author image (vs-image expected) -->
            <slot name="quote-image" />
        </div>
        <div class="vs-quote__content-container">
            <div class="vs-quote__content">
                <!-- @slot Holds the main body of the quote (html expected) -->
                <slot name="quote-content" />
            </div>
            <p
                class="vs-quote__author-name"
                v-if="hasAuthorName"
            >
                <!-- @slot Holds the name of the author (text expected) -->
                <slot name="quote-author-name" />
            </p>
            <p
                class="vs-quote__author-title"
                :class="(variant === 'narrow') ? 'vs-quote__author-title--narrow-margin' : null "
                v-if="hasAuthorTitle"
            >
                <!-- @slot Holds the job title of the author (text expected) -->
                <slot name="quote-author-title" />
            </p>
            <!-- @slot Optional slot that holds a cta for the block (vs-button expected) -->
            <div
                class="vs-quote__quote-link"
                v-if="$slots['quote-link']"
            >
                <slot
                    name="quote-link"
                    if="$slots['quote-link']"
                />
            </div>
        </div>
    </div>
</template>

<script>
/**
 * An embeddable quote with an author, links to icentre information and an optional CTA
 *
 * @displayName Quote
 */
export default {
    name: 'VsQuote',
    status: 'prototype',
    release: '0.0.1',
    props: {
        variant: {
            type: String,
            default: 'narrow',
            validator: (value) => value.match(/(narrow|wide)/),
        },
        withBorder: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hasAuthorName() {
            return !!this.$slots['quote-author-name'];
        },
        hasAuthorTitle() {
            return !!this.$slots['quote-author-title'];
        },
        hasAuthorImage() {
            return !!this.$slots['quote-image'];
        },
        variantClass() {
            return [
                {
                    'vs-quote--narrow': this.variant === 'narrow',
                    'vs-quote--wide': this.variant === 'wide',
                    'vs-quote--with-border': this.withBorder,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-quote {
    &__content {
        font-size: $font-size-8;
        font-weight: $vs-font-weight-subtle;
        margin-bottom: $spacer-100;
    }

    &__author-name {
        font-weight: $vs-font-weight-medium;
        margin-bottom: $spacer-0;

        @include media-breakpoint-up(md) {
            margin-bottom: $spacer-025;
            font-size: $font-size-5;
        }
    }

    &__author-title {
        margin-bottom: $spacer-0;

        @include media-breakpoint-up(md) {
            font-size: $font-size-5;
        }

        &--narrow-margin {
            margin-bottom: $spacer-175;
        }
    }

    &__quote-link {
        @include media-breakpoint-up(md){
            margin-top: $spacer-175;
        }
    }

    &__speech-mark {
        font-weight: $vs-font-weight-strong;
        color: $vs-color-text-tertiary;
        font-size: 7rem;
        height: 5rem;
        line-height: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__speech-container {
        display: block;
        margin-bottom: $spacer-100;
        margin-right: $spacer-125;
        width: 3.5rem;
        height: 2.5rem;
        position: relative;

        @include media-breakpoint-up(sm) {
            display: inline-block;
            vertical-align: top;
        }
    }

    &__author-container {
        display: block;
        width: 50%;
        max-width: 8rem;
        margin-bottom: $spacer-100;

        img {
            width: 100%;
        }

        @include media-breakpoint-up(lg) {
            margin-right: $spacer-125;
        }
    }

    &__content-container {
        display: block;
    }

    &--wide {
        .vs-quote__author-container {
            @include media-breakpoint-up(sm) {
                display: inline-block;
                vertical-align: top;
                margin-bottom: $spacer-125;
            }
        }

        .vs-quote__content-container {
            @include media-breakpoint-up(sm) {
                display: inline-block;
                vertical-align: top;
            }

            @include media-breakpoint-up(xl) {
                width: calc(100% - 15rem);
                margin-top: -7px;
            }
        }
    }

    &--with-border {
        border-left: $spacer-025 solid $vs-color-text-tertiary;
        padding-left: $spacer-150;
    }
}
</style>
