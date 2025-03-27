<template>
    <div
        class="vs-warning"
        :class="warningClasses"
        data-test="vs-warning"
    >
        <div class="vs-warning__content">
            <VsIcon
                class="vs-warning__icon"
                :icon="icon"
                variant="highlight"
            />

            <div>
                <VsRichTextWrapper>
                    <p>
                        <!-- Default slot to contain main warning message -->
                        <slot />
                    </p>
                    <p v-if="$slots['extra-content'] && $slots['extra-content']()">
                        <!-- slot to contain extra content to support main message -->
                        <slot name="extra-content" />
                    </p>
                </VsRichTextWrapper>
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
import VsIcon from '@/components/icon/Icon.vue';
import VsButton from '@/components/button/Button.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

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
        VsRichTextWrapper,
    },
    props: {
        /**
        * The warning message to display to the user
        */
        icon: {
            type: String,
            default: 'vs-icon-feedback-warning',
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
        padding: $spacer-125;
        background: $vs-color-background-information;
        height: 100%;
        line-height: 1.1;

        @include media-breakpoint-up(lg) {
            padding: $spacer-300;
        }

        &--small {
            padding: $spacer-125;

            .vs-warning__content {
                max-width: 100%;

                @include media-breakpoint-up(lg) {
                    & > div p:first-of-type {
                        font-size: $font-size-5;
                    }
                }
            }

            .vs-warning__button {
                margin-top: $spacer-075;
            }
        }

        &__icon {
            margin-right: $spacer-075;
            line-height: $line-height-standard;
        }

        &__button {
            margin-top: $spacer-150;

            @include media-breakpoint-up(lg) {
                margin-top: $spacer-300;
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
                    margin-bottom: $spacer-100;
                }
            }
        }
    }
</style>
