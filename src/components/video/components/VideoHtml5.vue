<template>
    <div
        class="vs-video-html5"
        data-test="vs-video-html5"
    >
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
            class="vs-video-html5__toggle-video"
            variant="overlay"
            icon="vs-icon-control-play"
            pressed-icon="vs-icon-control-pause"
            @toggle="onToggleVideo"
            :label="playButtonLabel"
            :pressed-label="pauseButtonLabel"
        />
    </div>
</template>

<script>
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';

export default {
    name: 'VsVideoHtml5',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsToggleButton,
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
    },
    methods: {
        /**
         * Play/pause the video
         */
        onToggleVideo(isPlaying) {
            if (isPlaying) {
                this.$refs.html5Video.pause();
            } else {
                this.$refs.html5Video.play();
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

        &__player {
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
        }
    }
</style>
