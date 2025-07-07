<template>
    <div :class="bodyClasses">
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
        /**
         * Option to remove margins from body text.
         * Useful when body is used inside a component
         */
        noMargins: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        bodyClasses() {
            return [
                'vs-body',
                `vs-body--${this.variant}`,
                ...(this.noMargins ? [] : ['vs-body--with-margins']),
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-body {
    // Inherits styles from global body styles

    &--lead {
        font-size: $vs-font-size-body-m;

        @include media-breakpoint-up(md) {
            font-size: $vs-font-size-body-l;
        }
    }

    &--with-margins {
        p {
            @include font-based-margins(0, 0.75);
        }
    }

    h2, h3, h4, h5, h6 {
        line-height: $vs-line-height-heading;
        letter-spacing: $tracking-heading;
        font-weight: $vs-font-weight-heading;
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
