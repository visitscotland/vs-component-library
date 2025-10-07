<template>
    <div
        :class="badgeClasses"
        data-test="vs-badge"
    >
        <BBadge>
            <!-- @slot The badge content goes here -->
            <slot />
        </BBadge>
    </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue-next';

/**
* Badge component for displaying small pieces of information or labels.
* @displayName Badge
*/

export default {
    name: 'VsBadge',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BBadge,
    },
    props: {
        /**
        * Variant of the badge
        * @values default, subtle, information
        */
        variant: {
            type: String,
            default: 'default',
            validator: (value) => value.match(/(default|subtle|information)/),
        },
    },
    computed: {
        badgeClasses() {
            return [
                `vs-badge--${this.variant}`,
                'vs-badge',
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-badge {
    margin-right: $vs-spacer-050;
    padding: $vs-spacer-025 $vs-spacer-050;
    display: inline-block;
    line-height: 1;

    &--default {
        border: $vs-border-width-sm solid $vs-color-border-secondary;
        border-radius: $vs-radius-tiny;
        color: $vs-color-text-secondary;
        font-size: $font-size-3;
    }

    &--subtle {
        background: transparent;
        color: $vs-color-text-highlight;
        font-size: $font-size-4;
        font-weight: $vs-font-weight-strong;
    }

    &--information {
        background: $vs-color-background-information;
        font-size: $vs-font-size-detail-s;
        line-height: $vs-line-height-detail;
    }

}
</style>
