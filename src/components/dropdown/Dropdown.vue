<template>
    <BDropdown
        v-bind="$attrs"
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
        &::after {
            display: inline-block;
            margin: 0.1rem 0 0 0.4rem;
            vertical-align: 0.155em;
            content: "";
            border: solid $color-white;
            border-width: 0 1px 1px 0;
            padding: $spacer-1;
            transform: rotate(45deg);
        }
    }

    .btn-content {
        display: inline-block;
    }
}
</style>
