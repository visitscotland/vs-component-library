<template>
    <VsButton
        icon-only
        class="vs-hero-section-video-control"
        data-test="vs-hero-section-video-control"
        :icon=" isPlaying ? 'play-filled' : 'play'"
        @click="toggleVideo"
    >
        <slot />
    </VsButton>
</template>

<script>
import VsButton from '@/components/button/Button.vue';

/**
* Child component for Hero Section Video Control
*
* @displayName Hero Section Video Control
*/

export default {
    name: 'VsHeroSectionVideoControl',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    emits: ['videoToggled'],
    data() {
        return {
            isPlaying: true,
        };
    },
    methods: {
        /**
         * Play/pause the video
         */
        toggleVideo() {
            this.$emit('videoToggled', this.isPlaying);

            if (this.isPlaying) {
                this.isPlaying = false;
            } else {
                this.isPlaying = true;
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-hero-section-video-control {
        &.vs-button{
            @include vs-button-variant(
                $vs-color-text-inverse, $vs-color-background-bold, transparent,
                $vs-color-text-inverse, transparent, transparent,
                $vs-color-text-inverse, transparent, transparent,
            );
        }
    }
</style>
