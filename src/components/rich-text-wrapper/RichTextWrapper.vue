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

    h3.vs-heading {
        margin-top: $spacer-100;
        margin-bottom: $spacer-100;
    }
    .vs-heading--style-level-6 {
        margin-top: $spacer-100;
        margin-bottom: $spacer-200;
    }
    *:not(.vs-heading) + .vs-heading--style-level-6 {
        margin-top: $spacer-400;
    }
}

</style>
