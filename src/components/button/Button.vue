<template>
    <BButton
        :variant="variant"
        :href="href || undefined"
        :tabindex="tabindex || undefined"
        class="vs-button justify-content-center"
        :class="buttonClasses"
        :size="size"
        v-bind="$attrs"
        :aria-disabled="$attrs.disabled ? true : false"
        @click="animateHandler($event)"
        @keyup.tab="tabbedIn"
    >
        <VsIcon
            v-if="icon"
            class="align-self-center"
            :icon="icon"
            :class="iconClasses"
            size="xs"
            :padding="0"
        />
        <!-- @slot The button content goes here -->
        <span
            class="vs-button__text"
            :class="{ 'visually-hidden': iconOnly }"
        >
            <slot />
        </span>
    </BButton>
</template>
<script>
import { BButton } from 'bootstrap-vue-next';
import VsIcon from '@/components/icon/Icon.vue';
import dataLayerMixin from '../../mixins/dataLayerMixin';

/**
 * Buttons are used to let users carry out actions on
 * the page like toggle a modal or submit a form.
 *
 * @displayName Button
 */

export default {
    name: 'VsButton',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BButton,
        VsIcon,
    },
    mixins: [
        dataLayerMixin,
    ],
    props: {
        /**
         * Use this option to render the button as an anchor element with the given href.
         */
        href: {
            type: String,
            default: null,
        },
        /**
         * Tab index value - this is needed as tabindex attribute is sometimes stripped
         * from the button on first update with nested components.
         */
        tabindex: {
            type: String,
            default: null,
        },
        /**
         * Style variation to give additional meaning
         * `primary|secondary|subtle`.
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(
                /(primary|secondary|subtle)/,
            ),
        },
        /**
         * Size of the button
         * `sm|md|lg`.
         */
        size: {
            type: String,
            default: 'md',
            validator: (value) => value.match(/(sm|md|lg)/),
        },
        /**
         * By default, buttons have an animation behaviour on click.
         * Pass `false` to disable.
         */
        animate: {
            type: Boolean,
            default: true,
        },
        /**
         * Pass the name of the icon to add it to the button.
         */
        rounded: {
            type: Boolean,
            default: true,
        },
        /**
         * Pass the name of the icon to add it to the button.
         */
        icon: {
            type: String,
            default: '',
        },
        /**
         * If the button contains an icon only with no text.
         */
        iconOnly: {
            type: Boolean,
            default: false,
        },
        /**
         * The position of the icon
         * `left|right`
         */
        iconPosition: {
            type: String,
            default: 'left',
            validator: (value) => value.match(/(left|right)/),
        },
    },
    emits: ['btnFocus'],
    data() {
        return {
            isAnimating: false,
        };
    },
    computed: {
        buttonClasses() {
            return [
                {
                    'vs-button--animated': this.animate && !this.iconOnly,
                    'vs-button--is-animating': this.isAnimating,
                    'vs-button--rounded': this.rounded,
                    'vs-button--icon-only': this.iconOnly,
                    'button-flex': this.icon && !this.iconOnly,
                    'vs-button--flex-reverse': this.iconPosition === 'right',
                },
            ];
        },
        iconClasses() {
            return [
                {
                    'vs-icon--right': this.iconPosition === 'right',
                    'vs-icon--left': this.iconPosition === 'left',
                },
            ];
        },
    },
    methods: {
        animateHandler(event) {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 1000);

            if (this.href !== null) {
                event.preventDefault();
                this.trackLink(event);
            }
        },
        tabbedIn(event) {
            // provides option for parent component to listen to emitted event
            // when button is tabbed into
            this.$emit('btnFocus', event);
        },
        trackLink(event) {
            let type;
            if (this.href.includes('http')) {
                type = 'externalLinkDataEvent';
            } else {
                type = 'internalLinkDataEvent';
            }

            this.createDataLayerObject(type, event, this.href);

            if (this.href !== '#' && this.href !== null) {
                window.location.href = this.href;
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-button {
        @extend %button-default-styles;

        &:focus {
            @extend %primary-button-focus;
        }

        .vs-icon {
            margin-top: -0.05rem;

            &--right {
                margin-left: $spacer-025;
            }

            &--left {
                margin-right: $spacer-025;
            }
        }

        &.vs-button--rounded {
            border-radius: $border-radius-pill;
        }

        &.disabled, &:disabled {
            pointer-events: none;
        }

        &:not(:disabled):not(.disabled):active:focus {
            box-shadow: none;
        }

        &.btn-primary,
        &.btn-secondary,
        &.btn-subtle:not(.vs-main-map-category__button) {
            &.disabled, &:disabled {
                @extend %button-disabled;
            }
        }

        /* Button Variants
        ------------------------------------------ */
        &.btn-primary {
            @include vs-button-variant(
                $vs-color-text-inverse, $vs-color-interaction-cta-primary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );
        }

        &.btn-secondary {
            @include vs-button-variant(
                $vs-color-text-cta-on-light, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );
        }

        &.btn-subtle {
            &:not(.vs-main-map-category__button) {
                @include vs-button-variant(
                    $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle, $vs-color-interaction-cta-subtle,
                    $vs-color-text-cta-on-light, $vs-color-interaction-cta-subtle-hover, $vs-color-interaction-cta-subtle-hover,
                    $vs-color-text-inverse, $vs-color-interaction-cta-subtle-pressed, $vs-color-interaction-cta-subtle-pressed,
                );
            }

            &:focus {
                box-shadow: 0 0 0 2px $vs-color-interaction-focus;
            }
        }

        &.vs-button--icon-only {
            line-height: 1;

            &.btn-sm {
                padding: $spacer-025 $spacer-025;
                width: 32px;
                height: 32px;
            }

            &.btn-md {
                padding: $spacer-050 $spacer-025;
                width: 44px;
                height: 44px;
            }

            &.btn-lg {
                padding: $spacer-050 $spacer-025;
                width: 52px;
                height: 52px;
            }

            .vs-icon {
                margin: 0;
            }
        }

        /* Button Sizes
        ------------------------------------------ */
        &.btn-sm {
            padding: $spacer-0125 $spacer-125;
        }

        &.btn-md {
            padding: $spacer-050 $spacer-150;
        }

        &.btn-lg {
            padding: $spacer-075 $spacer-175;
            font-size: unset;
        }

        &.vs-button--flex-reverse {
            display: flex;
            flex-direction: row-reverse !important;
        }

        /* Button Animation
        ------------------------------------------ */
        &.vs-button--animated {
            @keyframes bubble {
                0% {
                    transform: scale(0, 0);
                    opacity: $opacity-100;
                }

                100% {
                    opacity: $opacity-0;
                    transform: scale(100, 100);
                }
            }

            &::after {
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                bottom: 0;
                content: '';
                height: 5px;
                opacity: $opacity-0;
                position: absolute;
                right: 0;
                transform-origin: 50% 50%;
                transform: scale(1, 1) translate(-50%);
                width: 5px;
            }

            &.vs-button--is-animating::after {
                animation: bubble 500ms ease-in-out;
            }
        }

        &.button-flex,
        &.button-flex {
            display: flex;
        }
    }
</style>
