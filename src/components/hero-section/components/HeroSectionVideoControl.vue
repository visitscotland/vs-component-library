<template>
    <div data-test="vs-hero-section-video-control">
        <VsButton
            icon-only
            class="vs-hero-section-video-control"
            :icon=" isPlaying ? 'vs-icon-control-pause' : 'vs-icon-control-play'"
            @click="toggleVideo"
        >
            <!-- Slot for visiblly hidden screen reader text -->
            <slot />
        </VsButton>

        <div
            aria-live="polite"
            class="visually-hidden"
            role="status"
        >
            <span
                v-if="isPlaying && videoPlayingStatus"
            >
                {{ videoPlayingStatus }}
            </span>
            <span
                v-if="!isPlaying && videoPausedStatus"
            >
                {{ videoPausedStatus }}
            </span>
        </div>
    </div>
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
    inject: {
        videoPlayingStatus: {
            default: 'Playing',
        },
        videoPausedStatus: {
            default: 'Paused',
        },
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
                $vs-color-text-inverse, #200F2E, transparent,
                $vs-color-text-inverse, $vs-color-interaction-cta-hover, transparent,
                $vs-color-text-inverse, $vs-color-interaction-cta-pressed, transparent,
            );

            &:focus {
                background-color: $vs-color-interaction-cta-primary;
                @extend %primary-button-focus;
            }
        }
    }
</style>
