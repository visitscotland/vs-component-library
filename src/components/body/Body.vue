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
    &--lead {
        font-size: $body-m;

        @include media-breakpoint-up(md) {
            font-size: $body-l;
        }
    }

    p {
        margin-bottom: $spacer-100;
    }

    h2, h3, h4, h5, h6 {
        line-height: $line-height-heading;
        letter-spacing: $tracking-heading;
        font-weight: $font-weight-semi-bold;
    }

    h2 {
        @include heading-style(heading-l);
    }

    h3 {
        @include heading-style(heading-s);
    }

    h4 {
        @include heading-style(heading-xs);
    }

    h5 {
        @include heading-style(heading-xxs);
    }

    h6 {
        @include heading-style(heading-xxxs);
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
