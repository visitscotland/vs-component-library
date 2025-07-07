<template>
    <p :class="detailClasses">
        <!-- @slot Default slot for detail text content -->
        <slot />
    </p>
</template>

<script>
/**
 * The detail component is used for supplementary information or
 * extra information in a hierarchy of content.
 *
 * @displayName Detail
 */
export default {
    name: 'VsDetail',
    status: 'prototype',
    release: '0.0.1',
    props: {
        /**
         * The font size
         * `small|medium|large`
         */
        size: {
            type: String,
            default: 'medium',
            validator: (value) => value.match(/(small|medium|large)/),
        },
        /**
         * The text color
         * `primary|secondary|tertiary`
         */
        color: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(/(primary|secondary|tertiary)/),
        },
        /**
         * Option to remove margins from the detail text.
         * Useful when the detail text is used inside a component
         */
        noMargins: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        detailClasses() {
            return [
                'vs-detail',
                `vs-detail--${this.size}`,
                `vs-detail--${this.color}`,
                ...(this.noMargins ? [] : ['vs-detail--with-margins']),
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-detail {
    line-height: $line-height-detail;
    letter-spacing: $tracking-detail;
    font-weight: $vs-font-weight-detail;

    &--with-margins {
        @include font-based-margins(1.4, 0.25);
    }

    &--small {
        font-size: $vs-font-size-detail-s;

        @include media-breakpoint-up(md) {
            font-size: $vs-font-size-detail-m;
        }
    }

    &--medium {
        font-size: $vs-font-size-detail-m;

        @include media-breakpoint-up(md) {
            font-size: $vs-font-size-detail-l;
        }
    }

    &--large {
        font-size: $vs-font-size-detail-l;
    }

    &--primary {
        color: $vs-color-text-primary;
    }

    &--secondary {
        color: $vs-color-text-secondary;
    }

    &--tertiary {
        color: $vs-color-text-tertiary;
    }
}
</style>
