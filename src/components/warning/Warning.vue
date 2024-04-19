<template>
    <div
        class="vs-warning"
        :class="warningClasses"
        data-test="vs-warning"
    >
        <div class="vs-warning__content">
            <VsIcon
                class="vs-warning__icon"
                :name="icon"
                variant="tertiary"
            />

            <div>
                <p>
                    <slot />
                </p>

                <p
                    v-if="$slots['extra-content'] && $slots['extra-content']()"
                >
                    <slot name="extra-content" />
                </p>
            </div>
        </div>

        <VsButton
            v-bind="btnAttrs"
            variant="primary"
            v-show="$slots['button-text'] && $slots['button-text']()"
            class="vs-warning__button"
        >
            <slot name="button-text" />
        </VsButton>
    </div>
</template>

<script>
import VsIcon from '@components/icon/Icon.vue';
import VsButton from '@components/button/Button.vue';

/**
 * A generic warning component that expands to cover whatever component
 * contains it
 *
 * @displayName Warning
 */
export default {
    name: 'VsWarning',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsIcon,
        VsButton,
    },
    props: {
        /**
        * The warning message to display to the user
        */
        icon: {
            type: String,
            default: 'review',
        },
        /**
        * Type of warning
        */
        type: {
            type: String,
            default: 'normal',
            validator: (value) => value.match(
                /(normal|cookie)/,
            ),
        },
        /**
        * Message size - can be `small` or `normal`
        */
        size: {
            type: String,
            default: 'normal',
            validator: (value) => value.match(
                /(small|normal)/,
            ),
        },
    },
    computed: {
        warningClasses() {
            return [
                `vs-warning--${this.size}`,
            ];
        },
        btnAttrs() {
            const attrsObj = {
            };
            if (this.type === 'cookie') {
                attrsObj.class = 'ot-sdk-show-settings vs-warning__cookie-trigger';
            }
            if (this.size === 'small') {
                attrsObj.size = 'sm';
            }

            return attrsObj;
        },
    },
};
</script>

<style lang="scss">
    .vs-warning {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;
        text-align: left;
        padding: $spacer-5;
        background: $vs-color-background-neutral;
        height: 100%;
        line-height: 1.1;

        @include media-breakpoint-up(lg) {
            padding: $spacer-9;
        }

        &--small {
            padding: $spacer-5;

            .vs-warning__content {
                max-width: 100%;

                @include media-breakpoint-up(lg) {
                    & > div p:first-of-type {
                        font-size: $font-size-5;
                    }
                }
            }

            .vs-warning__button {
                margin-top: $spacer-3;
            }
        }

        &__icon {
            margin-right: $spacer-3;
            line-height: $line-height-standard;
        }

        &__button {
            margin-top: $spacer-6;

            @include media-breakpoint-up(lg) {
                margin-top: $spacer-9;
            }
        }

        &__content {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            max-width: 80%;
            line-height: 1.5;

            & > div p:last-of-type {
                margin-bottom: 0;
                font-size: $font-size-5;
            }

            & > div p:first-of-type {
                font-size: $font-size-5;

                @include media-breakpoint-up(lg) {
                    font-size: $font-size-6;
                }
            }

            &--xs {
                .vs-warning__icon {
                    width: 2rem !important;
                    height: 2rem !important;
                    margin-bottom: $spacer-4;
                }
            }
        }
    }
</style>
