<template>
    <BDropdown
        v-bind="$attrs"
        :variant="variant"
        class="vs-dropdown"
    >
        <template
            v-for="(_, name) in nonButtonContentSlots"
            #[name]
        >
            <slot
                :name="name"
            />
        </template>
        <template #button-content>
            <slot name="button-content">
                {{ text }}
            </slot>
        </template>
        <slot />
    </BDropdown>

    <!-- No JS version -->
    <div
        :class="$attrs.class"
        class="dropdown vs-dropdown vs-dropdown--fallback"
    >
        <ul
            class="dropdown-menu overflow-auto"
            role="menu"
        >
            <slot />
        </ul>
    </div>
</template>

<script>
import { BDropdown } from 'bootstrap-vue-next';
import { reject } from 'lodash';

/**
 * Dropdown component for lists of links for example.
 *
 * @displayName Dropdown
 */
export default {
    name: 'VsDropdown',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BDropdown,
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        /**
         * Style variation to give additional meaning
         * `primary|secondary`.
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => value.match(
                /(primary|secondary)/,
            ),
        },
    },
    computed: {
        nonButtonContentSlots() {
            return reject(this.$slots, {
                name: 'button-content',
            });
        },
    },
};
</script>

<style lang="scss">
.vs-dropdown {
    .dropdown-toggle {
        @extend %button-default-styles;
        @extend %button-default-font-weight;

        padding: $vs-spacer-050 $vs-spacer-150;

        &:hover {
            background-color: $vs-color-interaction-cta-hover;
        }

        &:active {
            background-color: $vs-color-interaction-cta-pressed;
        }

        &:focus {
            @extend %primary-button-focus;
        }

        &::after {
            display: inline-block;
            font-family: "Font Awesome 6 Pro";
            content: "\f078";
            color: $vs-color-icon-inverse;
            border: 0;
            font-weight: $vs-font-weight-regular;
            vertical-align: bottom;
        }

        &.btn-secondary {
            @include vs-button-variant(
                $vs-color-text-cta-on-light, $vs-color-interaction-cta-secondary, $vs-color-interaction-cta-primary,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, $vs-color-interaction-cta-hover,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, $vs-color-interaction-cta-pressed,
            );

            &::after {
                color: $vs-color-icon-cta-on-light;
            }

            &:hover::after {
                color: $vs-color-icon-inverse;
            }
        }
    }

    .dropdown-menu {
        li {
            border-bottom: $vs-border-width-sm solid $vs-color-border-primary;

            &:last-of-type {
                border-bottom: 0;
            }

            .dropdown-item {
                &:hover, &.active, &:active {
                    color: $vs-color-text-cta-on-light;
                    background-color: $vs-color-interaction-cta-subtle-hover;
                    outline: 0;
                }

                &:focus {
                    outline: 0;
                    color: $vs-color-text-cta-on-light;
                    box-shadow: $vs-focus-shadow inset;
                }
            }
        }
    }

    .btn-content {
        display: inline-block;
    }

    &--fallback {
        display: none;
    }
}
</style>
