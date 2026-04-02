<template>
    <div
        class="vs-video-html5"
        data-test="vs-video-html5"
    >
        <template v-if="prefersReducedMotion">
            <VsImg
                class="vs-video-html5__fallback-image"
                :src="posterImageSrc"
            />
        </template>

        <template v-else>
            <video
                loop
                muted
                autoplay
                playsinline
                preload="auto"
                :poster="posterImageSrc"
                aria-hidden="true"
                fetchpriority="high"
                ref="html5Video"
                class="vs-video-html5__player img-zoom-on-hover"
            >
                <source
                    :src="videoSrc"
                    type="video/mp4"
                >
            </video>

            <VsToggleButton
                v-if="showToggle"
                class="vs-video-html5__toggle-video"
                variant="overlay"
                icon="vs-icon-control-pause"
                pressed-icon="vs-icon-control-play"
                @toggle="toggle"
                :label="pauseButtonLabel"
                :pressed-label="playButtonLabel"
                aria-hidden="true"
            />
        </template>
    </div>
</template>

<script>
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import VsImg from '@/components/img/Img.vue';

export default {
    name: 'VsVideoHtml5',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsToggleButton,
        VsImg,
    },
    inject: {
        registerMedia: {
            default: null,
        },
    },
    props: {
        /**
        * The video url for HTML5 player
        */
        videoSrc: {
            type: String,
            required: true,
        },
        /**
        * The poster image URL for video player
        */
        posterImageSrc: {
            type: String,
            default: '',
        },
        /**
        * Text to be announced when button is toggled to play
        */
        playButtonLabel: {
            type: String,
            default: '',
        },
        /**
         * Text to be announced when button is toggled to pause
        */
        pauseButtonLabel: {
            type: String,
            default: '',
        },
        /**
         * Whether to show play/pause toggle button
         * NOTE: this is required for accessibility, only use
         * if you're providing your own toggle button
        */
        showToggle: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            prefersReducedMotion: false,
        };
    },
    mounted() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.prefersReducedMotion = mediaQuery.matches;
        this.registerMedia?.(this);
    },
    methods: {
        /**
         * Play the video
         */
        play() {
            const video = this.$refs.html5Video;
            if (!video) return;

            video.play();
        },
        /**
         * Pause the video
         */
        pause() {
            const video = this.$refs.html5Video;
            if (!video) return;

            video.pause();
        },
        /**
         * Toggle the video play/pause state
         */
        toggle() {
            const video = this.$refs.html5Video;
            if (!video) return;

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
    },
};
</script>
<style lang="scss">
    .vs-video-html5 {
        position: relative;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;

        &__player, &__fallback-image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.img-zoom-on-hover {
                transition: transform 0.3s ease-in-out;
            }
        }

        &__toggle-video.vs-toggle-button {
            position: absolute;
            top: $vs-spacer-125;
            right: $vs-spacer-125;
            z-index: 5;
        }
    }
</style>
