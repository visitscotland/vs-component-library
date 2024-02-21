<template>
    <div
        class="vs-video"
        data-test="vs-video"
        v-if="!reRendering"
    >
        <div class="vs-video__iframe-wrapper">
            <div v-if="requiredCookiesExist">
                <!-- eslint-disable-next-line vue/component-name-in-template-casing -->
                <LiteYouTubeEmbed
                    :autoplay="0"
                    :id="videoId"
                    :vars="playerVars"
                    @played="youtubePlaying"
                    @paused="youtubePaused"
                    @ended="youtubeEnded"
                    ref="video"
                />
            </div>

            <VsWarning
                v-show="showError"
                theme="light"
                :type="cookiesInitStatus === true ? 'cookie' : 'normal'"
                data-test="vs-video__warning"
                class="vs-video__warning"
            >
                {{ warningText }}

                <template
                    v-if="!requiredCookiesExist
                        && cookiesInitStatus === true"
                    v-slot:button-text
                >
                    {{ cookieBtnText }}
                </template>
            </VsWarning>

            <VsWarning
                theme="light"
                data-test="vs-video__warning--no-js"
                class="vs-video__warning vs-video__warning--no-js"
            >
                {{ noJsMessage }}
            </VsWarning>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/style.css';

import VsWarning from '@/components/warning/Warning.vue';

import pinia from '@/stores';
import useVideoStore from '@/stores/video.store';
import jsIsDisabled from '@/utils/js-is-disabled';

import verifyCookiesMixin from '../../mixins/verifyCookiesMixin';
import requiredCookiesData from '../../utils/required-cookies-data';
import dataLayerMixin from '../../mixins/dataLayerMixin';

const video = ref(null);

let videoStore = null;
const cookieValues = requiredCookiesData.youtube;

/**
 * Videos allow a user to engage with our
 * products and discover new information.
 *
 * @displayName Video
 */

export default {
    name: 'VsVideo',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsWarning,
        LiteYouTubeEmbed,
    },
    mixins: [
        verifyCookiesMixin,
        dataLayerMixin,
    ],
    props: {
        /**
        * The YouTube ID for the video
        */
        language: {
            type: String,
            default: 'en',
        },
        /**
        * The YouTube ID for the video
        */
        videoId: {
            type: String,
            required: true,
        },
        /**
        * The title of the video, set in the CMS
        */
        videoTitle: {
            type: String,
            default: '',
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
            required: true,
        },
        /**
        * Text used for the link which opens the cookie preference centre.
        */
        cookieBtnText: {
            type: String,
            required: true,
        },
        /**
        * A message explaining why the component has been disabled when js is disabled,
        * is provided for descendent components to inject
        */
        noJsMessage: {
            type: String,
            required: true,
        },
        /**
         * Message to show when there's an error with a third party
        */
        errorMessage: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            duration: {
                minutes: 0,
                seconds: 0,
                roundedMinutes: '',
            },
            playerVars: {
                hl: this.language,
            },
            requiredCookies: cookieValues,
            player: null,
            reRendering: false,
            shouldAutoPlay: false,
            jsDisabled: true,
        };
    },
    computed: {
        showError() {
            if ((!this.requiredCookiesExist
                && this.cookiesInitStatus === true)
                || this.cookiesInitStatus === 'error'
                || this.cookiesInitStatus === false) {
                return true;
            }

            return false;
        },
        warningText() {
            let text = '';

            if (this.videoId && this.jsDisabled) {
                text = this.noJsMessage;
            }

            if (this.cookiesInitStatus === 'error') {
                text = this.errorMessage;
            }

            if (!this.requiredCookiesExist
                && this.cookiesInitStatus === true) {
                text = this.noCookiesMessage;
            }

            return text;
        },
    },
    watch: {
        requiredCookiesExist() {
            this.$nextTick(() => {
                if (this.$refs.youtube) {
                    this.player = this.$refs.youtube.player;
                    this.getPlayerDetails();
                }

                if (this.shouldAutoPlay) {
                    this.shouldAutoPlay = false;
                    this.playVideo();
                }
            });
        },
    },
    mounted() {
        this.jsDisabled = jsIsDisabled();
        videoStore = useVideoStore(pinia());

        this.setEventListeners();
    },
    methods: {
        /**
         * Plays the video
         */
        playVideo() {
            video.value?.playVideo();
        },
        /**
         * Pauses the video
         */
        pauseVideo() {
            video.value?.pauseVideo();
        },
        /**
         * Triggered by video status events from the vue-youtube component. When any of these
         * occur an appropriate analytics event is dispatched to the datalayer.
         */
        youtubePlaying() {
            this.analyticsEvent('play');
        },
        youtubePaused() {
            this.analyticsEvent('pause');
        },
        youtubeEnded() {
            this.analyticsEvent('ended');
        },
        /**
         * Submits an event to the datalayer mixin when the video is played or paused
         */
        analyticsEvent(videoStatus) {
            let currentTime = 0;
            let duration = 0;

            this.player.getCurrentTime()
                .then((time) => {
                    currentTime = time;
                    return this.player.getDuration();
                })
                .then((length) => {
                    duration = length;
                })
                .then(() => {
                    const videoPercent = (currentTime / duration) * 100;

                    this.createDataLayerObject(
                        'videoTrackingDataEvent',
                        {
                            title: this.videoTitle,
                            status: videoStatus,
                            percent: Math.round(videoPercent),
                        },
                    );
                });
        },
        getPlayerDetails() {
            /**
             * Upon promise resolution, if the video ID returns
             * a YouTube video, process the time into the desired format.
             */
            if (typeof this.player !== 'undefined') {
                this.player.getDuration().then((response) => {
                    this.formatTime(response);
                    this.storeVideoDetails();
                });
            }
        },
        /**
         * Converts time in seconds to minutes and seconds,
         * returns an object.
         */
        formatTime(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds - (minutes * 60);

            this.duration.minutes = minutes;
            this.duration.seconds = seconds;

            const roundedMinutes = this.getRoundedMinutes(minutes, seconds);

            this.duration.roundedMinutes = this.formatSingularOrPlural(roundedMinutes);
        },
        /**
         * Takes a time expressed as minutes and seconds and returns the number of minutes rounded
         * to the nearest one. Any time less than one minute is rounded up to one.
         */
        getRoundedMinutes(minutes, seconds) {
            if (seconds < 30 && minutes !== 0) {
                return minutes;
            }

            return minutes + 1;
        },
        /**
         * Checks if the number of (rounded) minutes the video is long is singular or plural, then
         * returns the appropriate descriptor string with the duration subbed in
         */
        formatSingularOrPlural(minutes) {
            if (minutes === 1) {
                return this.singleMinuteDescriptor.replace('%s', minutes);
            }

            return this.pluralMinuteDescriptor.replace('%s', minutes);
        },
        /**
         * Takes a number, returns a string padded with a
         * leading 0 if the number is less than 10
         */
        pad(toPad) {
            if (toPad >= 10) {
                return toPad;
            }

            return `0${toPad}`;
        },
        /**
         * Send video details to Vuex store
         */
        storeVideoDetails() {
            videoStore.addVideo({
                videoId: this.videoId,
                videoDurationMsg: this.duration.roundedMinutes,
                videoDuration: (this.duration.minutes * 60) + this.duration.seconds,
                videoFullDuration: this.duration,
            });
        },
        /**
         * Attaches event listeners upon mounting video. These include play and pause functions,
         * for external play buttons and re-render + autoplay functionality for a video inside
         * a modal.
         */
        setEventListeners() {
            if (this.emitter) {
                this.emitter.on('video-controls', (args) => {
                    if (args.id === this.videoId) {
                        if (args.action === 'modal-opened') {
                            this.playVideo();
                        }
                        if (args.action === 'modal-closed') {
                            this.reRenderVideo();
                        }

                        if (args.action === 'play') {
                            this.playVideo();
                        } else if (args.action === 'pause') {
                            this.pauseVideo();
                        }
                    }
                });
            }
        },
        /**
         * Upon opening a vs-modal with a video, the video must be briefly removed and re-rendered
         * to ensure that all event triggers in the video fire properly.
         */
        reRenderVideo() {
            this.reRendering = true;
            this.$nextTick(() => {
                this.reRendering = false;
                this.$nextTick(() => {
                    this.shouldAutoPlay = true;
                });
            });
        },
    },
};
</script>

<style lang="scss">
    .vs-video {
        &__iframe-wrapper,
        &__fallback-wrapper {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        &__warning {
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 1;

            &--no-js {
                display: none;
            }
        }
    }

    @include no-js {
        .vs-video {
            &__warning {
                display: none;

                &--no-js {
                    display: flex;
                }
            }
        }
    }
</style>
