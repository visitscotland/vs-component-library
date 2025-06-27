<template>
    <p
        class="vs-detail"
        :class="[
            `vs-detail--${size}`,
        ]"
    >
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
         * The font size used by the wrapper
         * `small|medium|large`
         */
        size: {
            type: String,
            default: 'medium',
            validator: (value) => value.match(/(small|medium|large)/),
        },
    },
};
</script>

<style lang="scss">
.vs-detail {
    line-height: $line-height-detail;
    letter-spacing: $tracking-detail;
    @include font-based-margins(1.4, 0.25);

    &--small {
        font-size: $detail-s;

        @include media-breakpoint-up(md) {
            font-size: $detail-m;
        }
    }

    &--medium {
        font-size: $detail-m;

        @include media-breakpoint-up(md) {
            font-size: $detail-l;
        }
    }

    &--large {
        font-size: $detail-l;
    }
}
</style>
