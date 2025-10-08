<template>
    <div
        :class="cardGroupClasses"
        :style="{
            '--cards-in-row': cardsPerRow,
        }"
        data-test="vs-card-group"
    >
        <!-- Default slot to contain cards -->
        <slot />
    </div>
</template>

<script>

/**
 *
 *
 * @displayName Card Group
 */
export default {
    name: 'VsCardGroup',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
        * the layout of the card group
        * `grid`
        */
        variant: {
            type: String,
            default: 'grid',
            validator: (value) => value.match(/(grid)/),
        },
        /**
        * specifies the number of cards per row
        * `3` or `4`
        */
        cardsPerRow: {
            type: Number,
            default: 3,
            validator: (value) => [3, 4].includes(value),
        },
        /**
        * sets the scroll snap behavior
        * * `always` - on all breakpoints
        * `true` - only below xl breakpoint
        * `false` - disabled
        * note: these props will be updated in future to remove the boolean
        * and keep only string options which would be a breaking change
        */
        scrollSnap: {
            type: [Boolean, String],
            default: false,
            validator: (value) => [false, true, 'always'].includes(value),
        },
    },
    computed: {
        cardGroupClasses() {
            return [
                'vs-card-group',
                {
                    'is-scroll-snap-responsive': this.scrollSnap === true,
                    'is-scroll-snap-always': this.scrollSnap === 'always',
                    'is-grid': this.variant === 'grid',
                },
            ];
        },
    },
};
</script>

<style lang="scss">
    .vs-card-group.is-grid {
        display: grid;
        gap: $vs-spacer-125;
        grid-template-columns: 1fr;

        @extend %vs-scrollbar;

        @include media-breakpoint-up(md) {
            gap: $vs-spacer-175;
        }

        @include media-breakpoint-up(lg) {
            grid-template-columns: repeat(var(--cards-in-row), 1fr);
        }

        /* Scroll snap responsive (only below xl) */
        @include media-breakpoint-down(xl) {
            &.is-scroll-snap-responsive {
                @include scrollsnap-styles;
            }
        }

        /* Scroll snap always (all breakpoints) */
        &.is-scroll-snap-always {
            @include scrollsnap-styles;
        }
    }
</style>
