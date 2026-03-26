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
            class="vs-video-html5__player img-zoom-on-hover"
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
