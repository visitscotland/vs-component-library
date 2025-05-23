<template>
    <div
        class="vs-card"
        data-test="vs-card"
        :class="cardClasses"
        :style="cardStyles"
    >
        <template v-if="$slots['vs-card-header'] && $slots['vs-card-header']()">
            <div class="vs-card__header">
                <slot name="vs-card-header" />
            </div>
        </template>

        <template v-if="$slots['vs-card-body'] && $slots['vs-card-body']()">
            <div
                class="vs-card__body"
                :class="bodyClasses"
            >
                <slot name="vs-card-body" />
            </div>
        </template>

        <template v-if="$slots['vs-card-footer'] && $slots['vs-card-footer']()">
            <div class="vs-card__footer">
                <slot name="vs-card-footer" />
            </div>
        </template>
    </div>
</template>

<script>
import designTokens from '@/assets/tokens/tokens.json';

/**
 *
 *
 * @displayName Card
 */
export default {
    name: 'VsCard',
    status: 'prototype',
    release: '0.1.0',
    props: {
        /**
        * The style of the card, this is used to set the border and shadow
        * `elevated|outlined`
        */
        cardStyle: {
            type: String,
            default: null,
            validator: (value) => value.match(/(elevated|outlined)/),
        },
        /*
        * Accepts semantic token or hex code for the
        * background colour of the card.
        */
        fillColor: {
            type: String,
            default: 'vs-color-background-cta-subtle',
        },
        /**
        * Adds an accent bar to the left of the card
        */
        accentBar: {
            type: Boolean,
            default: false,
        },
        /**
        * Sets the card to horizontal layout
        */
        horizontal: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            tokens: designTokens,
        };
    },
    computed: {
        cardClasses() {
            return [
                {
                    'vs-card--horizontal': this.horizontal,
                    'vs-card--accent-bar': this.accentBar,
                },
                this.cardStyle ? `vs-card--${this.cardStyle}` : null,
            ];
        },
        bodyClasses() {
            const slot = this.$slots['vs-card-body'];
            const hasContent = slot && slot().length > 0;

            return {
                'vs-card__body--centered': hasContent,
            };
        },
        cardStyles() {
            if (this.fillColor) {
                const fill = this.tokens[this.fillColor] || this.fillColor;

                return {
                    'background-color': fill,
                };
            }

            return null;
        },
    },
};
</script>

<style lang="scss">
    .vs-card {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: $border-radius-default ;

        &:hover {
            .img-zoom-on-hover {
                transform: scale(1.05);
            }
        }

        &__header {
            overflow: hidden;
            border-radius: $border-radius-default;
        }

        &__body {
            display: flex;
            flex-direction: column;

            &--centered {
                justify-content: center;
            }
        }

        &--elevated {
            box-shadow: $vs-elevation-shadow-raised;
        }

        &--outlined {
            border: 1px solid $vs-color-border-primary;
            transition: all $duration-base;

            &:hover {
                border-color: $vs-color-border-bold;
            }
        }

        &--filled {
            background-color: $vs-color-background-primary;
        }

        &--accent-bar {
            border-left: 8px solid $vs-color-border-secondary;
        }

        &--horizontal {
            flex-direction: row;

            .vs-card__header {
                flex: 1 1 35%;
            }

            .vs-card__body {
                flex: 1 1 75%;
            }

            @include media-breakpoint-up(sm) {
                .vs-card__header {
                    flex-basis: 40%;
                }

                .vs-card__body {
                    flex-basis: 60%;
                }
            }
        }
    }
</style>
