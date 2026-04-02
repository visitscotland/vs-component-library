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
                ref="videoRef"
                :loop="!lazyLoad || isLoaded"
                :muted="!lazyLoad || isLoaded"
                :autoplay="!lazyLoad || isLoaded"
                playsinline
                :preload="lazyLoad ? 'none' : 'auto'"
                :poster="posterImageSrc"
                aria-hidden="true"
                :fetchpriority="lazyLoad ? 'low' : 'high'"
                :class="['vs-video-html5__player', lazyLoad && isLoaded ? 'img-zoom-on-hover' : '']"
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
                @toggle="toggleVideo"
                :label="pauseButtonLabel"
                :pressed-label="playButtonLabel"
                aria-hidden="true"
                tabindex="-1"
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
         * Enable lazy loading - video only loads when scrolled into view
         */
        lazyLoad: {
            type: Boolean,
            default: false,
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
            isLoaded: false,
            observer: null,
            prefersReducedMotion: false,
        };
    },
    mounted() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        this.prefersReducedMotion = mediaQuery.matches;
        this.registerMedia?.(this);

        if (this.lazyLoad) {
            this.setupIntersectionObserver();
        } else {
            this.isLoaded = true;
        }
    },
    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        /**
         * Play the video
         */
        playVideo() {
            const video = this.$refs.videoRef;
            if (!video) return;

            video.play();
        },
        /**
         * Pause the video
         */
        pauseVideo() {
            const video = this.$refs.videoRef;
            if (!video) return;

            video.pause();
        },
        /**
         * Stop the video
         */
        stopVideo() {
            const video = this.$refs.videoRef;
            if (!video) return;

            video.pause();
            video.currentTime = 0;
        },
        /**
         * Toggle the video play/pause state
         */
        toggleVideo() {
            const video = this.$refs.videoRef;
            if (!video) return;

            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        },
        /**
         * Sets up an IntersectionObserver to lazy load the video when it comes into view
         */
        setupIntersectionObserver() {
            if (!('IntersectionObserver' in window)) {
                this.isLoaded = true;
                return;
            }

            this.observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].intersectionRatio > 0) {
                        this.observer.unobserve(this.$el);
                        this.isLoaded = true;
                        this.$nextTick(() => {
                            this.$refs.videoRef?.play();
                        });
                    }
                },
                {
                    rootMargin: '50px',
                    threshold: 0,
                },
            );

            this.observer.observe(this.$el);
        },
    },
};
</script>

<style lang="scss">
.vs-video-html5 {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;

    &__player,
    &__fallback-image {
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
