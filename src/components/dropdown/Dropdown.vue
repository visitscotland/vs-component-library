<template>
    <BDropdown
        v-bind="$attrs"
        variant="primary"
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
        line-height: $line-height-xs;
        padding: $spacer-050 $spacer-150;

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
            font-family: "Font Awesome Kit";
            content: "\e012";
            color: $vs-color-icon-inverse;
            border: 0;
            font-weight: 400;
            vertical-align: bottom;
        }
    }

    .dropdown-menu {
        li {
            border-bottom: 1px solid $vs-color-border-primary;

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
                    box-shadow: $vs-box-shadow-focus inset;
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
