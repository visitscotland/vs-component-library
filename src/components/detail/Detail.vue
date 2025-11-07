<template>
    <p :class="detailClasses">
        <VsIcon
            v-if="icon"
            class="me-050 flex-shrink-0"
            :icon="icon"
            size="sm"
            :variant="iconVariant"
        />
        <span>
            <!-- @slot Default slot for detail text content -->
            <slot />
        </span>
    </p>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';

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
    components: {
        VsIcon,
    },
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
        /**
         * The name of the icon to display alongside the detail text.
         */
        icon: {
            type: String,
            default: '',
        },
        /**
         * Color variant of the icon displayed alongside the detail text.
         */
        iconVariant: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(/(primary|secondary|tertiary|cta|inverse|disabled|highlight|error|warning|success)/),
        },
    },
    computed: {
        detailClasses() {
            return [
                'vs-detail',
                `vs-detail--${this.size}`,
                `vs-detail--${this.color}`,
                ...(this.icon ? ['d-flex', 'align-items-center'] : []),
                ...(this.noMargins ? [] : ['vs-detail--with-margins']),
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-detail {
    line-height: $vs-line-height-detail;
    letter-spacing: $vs-letter-spacing-detail;
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
