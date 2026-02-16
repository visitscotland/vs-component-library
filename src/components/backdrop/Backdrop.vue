<template>
    <Transition
        name="vs-backdrop-fade"
        @enter="lockScroll"
        @after-leave="unlockScroll"
    >
        <div
            v-if="show"
            class="vs-backdrop"
            :style="backdropStyle"
            role="presentation"
            @click="onClick"
        />
    </Transition>
</template>

<script>
export default {
    name: 'VsBackdrop',
    props: {
        /**
         * Whether or not the backdrop is visible
         */
        show: {
            type: Boolean,
            required: true,
        },
        /**
         * z-index of the overlay
         */
        zIndex: {
            type: [String, Number],
            default: 1040,
        },
        /**
         * Enable click-to-close behavior
         */
        clickable: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['click', 'update:show'],
    computed: {
        backdropStyle() {
            return {
                zIndex: this.zIndex,
            };
        },
    },
    unmounted() {
        // Ensure scroll is restored if component destroyed while visible
        if (this.show) this.unlockScroll();
    },
    methods: {
        // Emit click event and close backdrop if clickable
        onClick() {
            if (this.clickable) {
                this.$emit('click');
                this.$emit('update:show', false);
            }
        },

        // Lock scroll on body when backdrop is shown
        lockScroll() {
            document.body.style.overflow = 'hidden';
        },

        // Unlock scroll on body when backdrop is hidden
        unlockScroll() {
            document.body.style.overflow = '';
        },
    },
};
</script>

<style lang="scss">
    .vs-backdrop {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: auto;
        background: color-mix(in srgb, $vs-color-background-bold 80%, transparent);
        backdrop-filter: blur(2px);
    }

    /* Transition fade */
    .vs-backdrop-fade-enter-active,
    .vs-backdrop-fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .vs-backdrop-fade-enter-from,
    .vs-backdrop-fade-leave-to {
        opacity: 0;
    }
    .vs-backdrop-fade-enter-to,
    .vs-backdrop-fade-leave-from {
        opacity: 1;
    }
</style>
