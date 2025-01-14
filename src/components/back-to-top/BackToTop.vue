<template>
    <VsButton
        v-if="visible"
        class="vs-back-to-top"
        icon="internal-link"
        icon-only
        :rounded="false"
        variant="secondary"
        @click="scrollTop"
    >
        {{ props.buttonText }}
    </VsButton>
</template>

<script setup>
import { ref } from 'vue';
import VsButton from '@/components/button/Button.vue';

const props = defineProps({
    /**
     * Visually hidden button text for screen readers.
     */
    buttonText: {
        type: String,
        required: true,
    },
    /**
     * Number of pixels required to be vertically scrolled to toggle
     * the visibility of the button.
     */
    offset: {
        type: Number,
        default: 100,
    },
});

const visible = ref(false);

/**
 * Show the button once the user has scrolled passed the offset.
 */
const setVisibility = () => {
    const doc = document.documentElement;
    const scrollY = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);

    if (scrollY > props.offset) {
        visible.value = true;
    } else {
        visible.value = false;
    }
};

/**
 * Scrolls to the top of the page and remove focus from the button.
 *
 * @param {Event} event - The event object.
 */
const scrollTop = (event) => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });

    // Remove focus from the button.
    event.target.blur();
};

window.addEventListener('scroll', setVisibility);
</script>

<style lang="scss">
.vs-back-to-top.btn {
    display: flex;
    margin: -$spacer-200 $spacer-0 $spacer-100 auto;
    inset-block-end: $spacer-100;
    position: sticky;
}

@include no-js {
    .vs-back-to-top {
        display: none !important;
    }
}
</style>
