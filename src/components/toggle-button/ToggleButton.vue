<template>
    <VsButton
        class="vs-toggle-btn"
        data-test="vs-toggle-btn"
        variant="transparent"
        icon-only
        size="lg"
        :aria-controls="toggleId"
        :aria-expanded="show ? 'true' : 'false'"
        @click="toggleAction"
    >
        <!-- @slot Default slot for screenreader text -->
        <span class="visually-hidden">
            <slot />
        </span>

        <VsIcon
            v-if="show"
            duotone
            class="fa-icon-colours fa-icon-colours--white"
            name="circle-xmark"
        />

        <!-- @slot Slot for custom toggle icon - used for social images -->
        <slot
            v-else
            name="toggle-icon"
        >
            <VsIcon
                duotone
                class="fa-icon-colours"
                name="circle-info"
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
import VsIcon from '@components/icon/Icon.vue';

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
        VsIcon,
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
<style lang="scss">
    .vs-toggle-btn{
        .fa-icon-colours,
        .fa-icon-colours--white {
            --fa-primary-color: #{$vs-color-icon-inverse};
            --fa-secondary-color: #{$vs-color-icon};
            --fa-secondary-opacity: 1.0;
        }

        &:hover .fa-icon-colours,
        &:hover .fa-icon-colours--white{
            --fa-secondary-color: #{$vs-color-icon-primary};
        }
    }

</style>
