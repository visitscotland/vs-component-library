<template>
    <BDropdown
        v-bind="$attrs"
        variant="primary"
        class="vs-dropdown"
    >
        <template
            v-for="(_, name) in nonButtonContentSlots"
            v-slot:[name]
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

        &:hover {
            background-color: $vs-color-background-hover;
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
            vertical-align: bottom;
        }
    }

    ~ .dropdown-menu {
        li {
            border-bottom: 1px solid $vs-color-border;

            &:last-of-type{
                border-bottom: 0;
            }

            .dropdown-item{
                &.active, &:active {
                    color: $vs-color-text-primary;
                    background-color: $vs-color-background-active;
                }

                &:hover {
                    color: $vs-color-text-inverse;
                    background-color: $vs-color-background-hover;
                    outline: 0;
                }

                &:focus {
                    outline: 0;
                    box-shadow: $vs-box-shadow-focus inset;
                }
            }
        }
    }

    .btn-content {
        display: inline-block;
    }
}
</style>
