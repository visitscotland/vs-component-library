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
        * sets the card group to scroll snap
        */
        scrollSnap: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        cardGroupClasses() {
            return [
                'vs-card-group',
                {
                    'is-scroll-snap': this.scrollSnap,
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

        @include media-breakpoint-up(md) {
            gap: $vs-spacer-175;
        }

        @include media-breakpoint-up(lg) {
            grid-template-columns: repeat(var(--cards-in-row), 1fr);
        }

        /* Scroll snap for mobile */
        @include media-breakpoint-down(xl) {
            &.is-scroll-snap {
                display: flex;
                overflow-x: auto;
                scroll-snap-type: x mandatory;

                &::-webkit-scrollbar {
                    height: 6px;
                }

                &::-webkit-scrollbar-track {
                    background: #DEDBE6;
                    border-radius: $border-radius-default;
                }

                &::-webkit-scrollbar-thumb {
                    background: #535396;
                    border-radius: $border-radius-default;
                }

                .vs-card {
                    flex: 0 0 266px;
                    scroll-snap-align: start;
                    margin-bottom: $vs-spacer-150;

                    @include media-breakpoint-up(sm) {
                        flex: 0 0 235px;
                    }

                    @include media-breakpoint-up(md) {
                        flex: 0 0 312px;
                    }

                    @include media-breakpoint-up(lg) {
                        flex: 0 0 330px;
                    }
                }
            }
        }
    }

</style>
