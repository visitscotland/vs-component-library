<template>
    <VsButton
        class="vs-toggle-btn"
        data-test="vs-toggle-btn"
        variant="transparent"
        icon-only
        :aria-controls="toggleId"
        :aria-expanded="show ? 'true' : 'false'"
        @click="toggleAction"
    >
        <!-- @slot Default slot for screenreader text -->
        <span class="visually-hidden">
            <slot />
        </span>

        <VsSvg
            v-if="show"
            path="icons/close-circle-filled"
            height="24"
            width="24"
        />

        <!-- @slot Slot for custom toggle icon - used for social images -->
        <slot
            v-else
            name="toggle-icon"
        >
            <VsSvg
                path="icons/information-filled"
                height="24"
                width="24"
            />
        </slot>
    </VsButton>
</template>

<style lang="scss">
    .vs-toggle-btn {
        z-index: 3;
        display: block;
    }
</style>

<script>
import VsButton from '@components/button/Button.vue';
import VsSvg from '@components/svg/Svg.vue';

/**
 * Toggle button to toggle elements in other components.
 * The component emits an event on click that can be listened
 * for in a parent component.
 *
 * @displayName Toggle Button
 */
export default {
    name: 'VsToggleButton',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsSvg,
    },
    props: {
        /**
         * ID for the toggled element
         */
        toggleId: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        toggleAction() {
            this.show = !this.show;
            this.$emit('toggleAction', this.show);
        },
    },
};
</script>
