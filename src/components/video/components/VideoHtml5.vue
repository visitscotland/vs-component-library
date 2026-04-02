<template>
    <div
        class="vs-video-html5"
        data-test="vs-video-html5"
    >
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
    </div>
</template>

<script>
export default {
    name: 'VsVideoHtml5',
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
    },
    data() {
        return {
            isLoaded: false,
            observer: null,
        };
    },
    mounted() {
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
        setupIntersectionObserver() {
            if (!('IntersectionObserver' in window)) {
                this.isLoaded = true;
                return;
            }

            this.observer = new IntersectionObserver((entries) => {
                if (entries[0].intersectionRatio > 0) {
                    this.observer.unobserve(this.$el);
                    this.isLoaded = true;
                    this.$nextTick(() => {
                        this.$refs.videoRef?.play();
                    });
                }
            }, {
                rootMargin: '50px',
                threshold: 0,
            });

            this.observer.observe(this.$el);
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
    }
</style>
