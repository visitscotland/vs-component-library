<template>
    <div
        class="vs-card"
        :class="{
            'vs-card--horizontal': horizontal,
        }"
    >
        <template v-if="$slots['vs-card-media'] && $slots['vs-card-media']()">
            <div class="vs-card__image">
                <slot
                    name="vs-card-media"
                />
            </div>
        </template>

        <div class="vs-card__body">
            <VsHeading
                :level="headingLevel"
                heading-style="heading-m"
                class="vs-card__title"
            >
                <template v-if="contentLink">
                    <a
                        :href="contentLink"
                        class="stretched-link"
                    >
                        {{ title }}
                    </a>
                </template>

                <template v-else>
                    {{ title }}
                </template>
            </VsHeading>

            <template v-if="$slots['vs-card-body'] && $slots['vs-card-body']()">
                <slot
                    name="vs-card-body"
                />
            </template>
        </div>

        <template v-if="$slots['vs-card-footer'] && $slots['vs-card-footer']()">
            <div class="vs-card__footer">
                <slot
                    name="vs-card-footer"
                />
            </div>
        </template>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';

/**
 *
 *
 * @displayName Card
 */
export default {
    name: 'VsCard',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsHeading,
    },
    props: {
        /**
        * The link that the component will use
        */
        contentLink: {
            type: String,
            default: null,
        },
        /**
        * The title of the card
        */
        title: {
            type: String,
            required: true,
        },
        /**
        * The correct heading level for page hierarchy, the
        * heading will be styled the same regardless of level provided
        * `1|2|3|4|5|6`
        */
        headingLevel: {
            type: [String, Number],
            default: '3',
            validator: (value) => value.match(/(1|2|3|4|5|6)/),
        },
        /**
        * Sets the card to horizontal layout
        */
        horizontal: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
    .vs-card {
        position: relative;
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;

        &__image {
            img {
                width: 100%;
                height: auto;
                object-fit: cover;
                display: block;

                &--svg {
                    object-fit: contain;
                }
            }
        }

        &__body{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &--horizontal {
            @include media-breakpoint-up(md) {
                flex-direction: row;

                .vs-card__image {
                    flex: 1 1 50%; /* adjust this for your image size */

                    img {
                        height: 100%;
                    }
                }

                .vs-card__body {
                    flex: 1 1 50%;
                }
            }
        }

        .card-link+.card-link {
            margin-left: 1rem;
        }

        .vs-card__title {
            color: $vs-color-text-primary;
            display: flex;

            a.stretched-link {
                color: $vs-color-text-primary;
                text-decoration: none;
                letter-spacing: inherit;
                display: block;

                &:hover {
                    text-decoration: underline;
                }

                &--disabled {
                    cursor: default;

                    &::after {
                        display: none;
                    }
                }

                &:focus {
                    @extend %outline-link-focus;
                }

                .vs-icon {
                    color: $vs-color-icon-highlight;
                }
            }
        }

        &__footer{
            padding: 1rem;
        }
    }
</style>
