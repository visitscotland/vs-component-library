<template>
    <div
        class="vs-rich-text-wrapper"
        :class="[
            `vs-rich-text-wrapper--${variant}`,
        ]"
    >
        <!-- @slot Default slot for rich text content -->
        <slot />
    </div>
</template>

<script>
/**
 * The rich text wrapper renders HTML or text
 * content from WYSIWYG editors.
 *
 * @displayName Rich Text Wrapper
 */
export default {
    name: 'VsRichTextWrapper',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The font size used by the wrapper
         * `normal|lead`
         */
        variant: {
            type: String,
            default: 'normal',
            validator: (value) => value.match(/(normal|lead)/),
        },
    },
};
</script>

<style lang="scss">
.vs-rich-text-wrapper {
    &--normal{
        font-size: $font-size-body;

        @include media-breakpoint-up(md) {
            font-size: $font-size-body-md;
        }
    }

    &--lead {
        line-height: $line-height-lead;
        font-size: $font-size-lead;

        @include media-breakpoint-up(md) {
            font-size: $font-size-lead-md;
        }
    }

    p {
        margin-bottom: $spacer-100;
    }

    h2 {
        @include heading-style(heading-xl);
    }

    h3 {
        @include heading-style(heading-m);
    }

    h4 {
        @include heading-style(heading-xs);
    }

    h5, h6 {
        @include heading-style(heading-xxs);
    }

    ul {
        @extend %default-list-styles;
    }

    a.external-link{
        &::after {
            display: inline-block;
            font-family: "Font Awesome 6 Pro";
            content: "\f14c";
            margin-left: $spacer-025;
            font-size: $font-size-2;
        }
    }
}

</style>
