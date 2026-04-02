<template>
    <div
        v-if="!reRendering"
        class="vs-video"
        data-test="vs-video"
    >
        <component
            :is="playerComponent"
            ref="player"
            v-bind="$props"
        />
    </div>
</template>

<script>
import VsVideoYoutube from './components/VideoYoutube.vue';
import VsVideoHtml5 from './components/VideoHtml5.vue';

export default {
    name: 'VsVideo',
    props: {
        /**
         * The type of video player to display
         */
        videoType: {
            type: String,
            default: 'youtube',
            validator: (value) => ['youtube', 'html5'].includes(value),
        },
        /**
        * The video url for HTML5 player
        */
        videoSrc: {
            type: String,
            default: '',
        },
        /**
        * The poster image URL for video player
        */
        posterImageSrc: {
            type: String,
            default: '',
        },
        /**
        * The YouTube ID for the video
        */
        videoId: {
            type: String,
            default: '',
        },
        /**
        * The title of the video, set in the CMS
        */
        videoTitle: {
            type: String,
            default: '',
        },
        /**
        * The language of the video
        */
        language: {
            type: String,
            default: 'en',
        },
        /**
         * A string to be shown with the rounded time, when the rounded
         * minute value is singular. Should contain '%s' to be replaced by the
         * number of minutes
         *
         * Eg: '%s minute video', 'Video de %s minuto'
         */
        singleMinuteDescriptor: {
            type: String,
            default: '%s minute video',
        },
        /**
         * A string to be shown with the rounded time, when the rounded
         * minute value is plural. Should contain '%s' to be replaced
         * by the number of minutes
         *
         * Eg: '%s minute video', 'Video de %s minutos'
         */
        pluralMinuteDescriptor: {
            type: String,
            default: '%s minute video',
        },
        /**
        * A message explaining why the component has been disabled with disabled cookies, is
        * provided for descendent components to inject
        */
        noCookiesMessage: {
            type: String,
            default: '',
        },
        /**
        * Text used for the link which opens the cookie preference centre.
        */
        cookieBtnText: {
            type: String,
            default: '',
        },
        /**
        /**
        * A message explaining why the component has been disabled when js is disabled,
        * is provided for descendent components to inject
        */
        noJsMessage: {
            type: String,
            default: '',
        },
        /**
         * Message to show when there's an error with a third party
        */
        errorMessage: {
            type: String,
            default: '',
        },
        /**
        * Text to be announced when button is toggled to play
        */
        playButtonLabel: {
            type: String,
            default: 'Play video',
        },
        /**
         * Text to be announced when button is toggled to pause
        */
        pauseButtonLabel: {
            type: String,
            default: 'Pause video',
        },
        /**
         * Whether to show play/pause toggle button
        */
        showToggle: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            reRendering: false,
        };
    },
    computed: {
        /**
         * Determines which video player component to use
         * based on the videoType prop
         */
        playerComponent() {
            if (this.videoType === 'html5') {
                return VsVideoHtml5;
            }

            return VsVideoYoutube;
        },
    },
    methods: {
        /**
         * Plays the video by calling the play method
         * on the player component reference, if it exists
         */
        play() {
            this.$refs.player?.play?.();
        },
        /**
         * Pauses the video by calling the pause method
         * on the player component reference, if it exists
         */
        pause() {
            this.$refs.player?.pause?.();
        },
        /**
         * Toggles the play/pause state of the video by calling the toggle method
         * on the player component reference, if it exists
         */
        toggle() {
            this.$refs.player?.toggle?.();
        },
    },
};
</script>
