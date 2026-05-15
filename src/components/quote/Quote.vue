<template>
    <!-- NEW MODE -->
    <template v-if="!useLegacy">
        <Component
            :is="type"
            class="vs-quote-new"
            :class="[quoteTypeClass, setAccentColorThemeClass]"
            data-test="vs-quote-new"
        >
            <component
                :is="wrapperComponent"
                :class="wrapperClass"
                v-bind="panelProps"
            >
                <VsBody :no-margins="type !== 'blockquote'">
                    <VsIcon
                        v-if="type !== 'blockquote'"
                        icon="fa-regular fa-quote-left"
                        :variant="accentColorTheme"
                        size="xxl"
                        aria-hidden="true"
                    />
                    <p class="vs-quote__text">
                        {{ quoteText }}
                    </p>
                </VsBody>
                <VsDetail
                    v-if="quoteName || $slots['quote-details']"
                    color="secondary"
                    size="small"
                >
                    <p>
                        <span
                            v-if="quoteName"
                            class="vs-quote__name"
                        >
                            {{ quoteName }}<span v-if="$slots['quote-details']">, </span>
                        </span>
                        <slot name="quote-details" />
                    </p>
                </VsDetail>
            </component>
        </Component>
    </template>

    <!-- LEGACY MODE
     ⚠️ Deprecated. Will be removed at next major release
     Use new tooltip button instead. -->
    <template v-else>
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
</template>

<script>
import VsDetail from '@/components/detail/Detail.vue';
import VsBody from '@/components/body/Body.vue';
import VsPanel from '@/components/panel/Panel.vue';
import VsIcon from '@/components/icon/Icon.vue';

/**
 * Short excerpt used to emphasize content or break up a large body of text
 *
 * @displayName Quote
 */
export default {
    name: 'VsQuote',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsDetail,
        VsBody,
        VsPanel,
        VsIcon,
    },
    props: {
        /**
         * Sets HTML tag for correct quote type (e.g. blockquote for
         * long quotes, q for short quotes, aside for pull quotes,
         * div for generic quotes)
         */
        type: {
            type: String,
            default: 'blockquote',
            validator: (value) => value.match(/(blockquote|aside|q|div)/),
        },
        /**
         * Sets the quote text content.
         */
        quoteText: {
            type: String,
            required: true,
        },
        /**
         * Sets the name of the quote author.
         */
        quoteName: {
            type: String,
            default: '',
        },
        /**
         * Sets the accent color theme for the quote.
         */
        accentColorTheme: {
            type: String,
            default: '',
            validator: (value) => value.match(/(accent-tolsta|accent-whisky|accent-thistle)/),
        },
        /**
         * Whether to display old quote UI or new one
         */
        useLegacy: {
            type: Boolean,
            default: true,
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
        variant: {
            type: String,
            default: 'narrow',
            validator: (value) => value.match(/(narrow|wide)/),
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
        withBorder: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        quoteTypeClass() {
            return this.type === 'blockquote' ? 'vs-quote-new--blockquote' : 'vs-quote-new--pullquote';
        },
        wrapperComponent() {
            return this.type === 'blockquote' ? 'div' : 'VsPanel';
        },
        wrapperClass() {
            return this.type === 'blockquote' ? 'vs-quote-new__wrapper' : '';
        },
        panelProps() {
            if (this.type === 'blockquote') {
                return {
                };
            }

            if (this.accentColorTheme) {
                return {
                    variant: this.accentColorTheme,
                };
            }

            return {
            };
        },
        setAccentColorThemeClass() {
            if (this.accentColorTheme) {
                return `vs-quote-new--${this.accentColorTheme}`;
            }
            return '';
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
        hasAuthorName() {
            return !!this.$slots['quote-author-name'];
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
        hasAuthorTitle() {
            return !!this.$slots['quote-author-title'];
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
        hasAuthorImage() {
            return !!this.$slots['quote-image'];
        },
        /** ⚠️ Deprecated - use the new props instead.
         */
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
.vs-quote-new {
    // New quote styles
    .vs-quote__text,
    .vs-quote__name {
        font-weight: $vs-font-weight-medium;
        text-wrap: pretty;
    }

    &--blockquote {
        margin: 0;
        padding: $vs-spacer-100 0;

        .vs-quote-new__wrapper {
            position: relative;
            padding-left: $vs-spacer-200;

            &::before {
                display: inline-block;
                font-family: "Font Awesome 6 Pro";
                content: "\f10d";
                font-size: 1.50rem;
                color: $vs-color-border-accent-tolsta-20;
                position: absolute;
                left: -8px;
                top: -10px;
            }

            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: $vs-spacer-175;
                bottom: 0;
                width: 4px;
                background-color: $vs-color-border-accent-tolsta-20;
            }
        }
    }

    &--pullquote {
        .vs-body {
            font-size: 2rem;
            line-height: 1.2;
        }

        &.vs-quote-new {
            &--accent-thistle {
                color: $vs-color-text-accent-thistle-80;
            }

            &--accent-tolsta {
                color: $vs-color-text-accent-tolsta-80;
            }

            &--accent-whisky {
                color: $vs-color-text-accent-whisky-80;
            }
        }
    }
}

.vs-quote {
    // Legacy quote styles
    // Should be removed when ⚠️ deprecated code is removed.
    &__content {
        font-size: $font-size-8;
        font-weight: $vs-font-weight-subtle;
        margin-bottom: $vs-spacer-100;
    }

    &__author-name {
        font-weight: $vs-font-weight-medium;
        margin-bottom: $vs-spacer-0;

        @include media-breakpoint-up(md) {
            margin-bottom: $vs-spacer-025;
            font-size: $font-size-5;
        }
    }

    &__author-title {
        margin-bottom: $vs-spacer-0;

        @include media-breakpoint-up(md) {
            font-size: $font-size-5;
        }

        &--narrow-margin {
            margin-bottom: $vs-spacer-175;
        }
    }

    &__quote-link {
        @include media-breakpoint-up(md){
            margin-top: $vs-spacer-175;
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
        margin-bottom: $vs-spacer-100;
        margin-right: $vs-spacer-125;
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
        margin-bottom: $vs-spacer-100;

        img {
            width: 100%;
        }

        @include media-breakpoint-up(lg) {
            margin-right: $vs-spacer-125;
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
                margin-bottom: $vs-spacer-125;
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
        border-left: $vs-spacer-025 solid $vs-color-text-tertiary;
        padding-left: $vs-spacer-150;
    }
}
</style>
