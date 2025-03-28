<template>
    <div
        class="vs-body"
        :class="[
            `vs-body--${variant}`,
        ]"
    >
        <!-- @slot Default slot for body text content -->
        <slot />
    </div>
</template>

<script>
/**
 * The body component renders HTML or text
 * including dynamic content from WYSIWYG editors.
 *
 * @displayName Body
 */
export default {
    name: 'VsBody',
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
.vs-body {
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

    h2, h3, h4, h5, h6 {
        line-height: 1.2;
        letter-spacing: -0.01em;
        font-weight: 600;
    }

    h2 {
        @include heading-style(heading-xxl);
    }

    h3 {
        @include heading-style(heading-l);
    }

    h4 {
        @include heading-style(heading-m);
    }

    h5 {
        @include heading-style(heading-s);
    }

    h6 {
        @include heading-style(heading-xs);
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
