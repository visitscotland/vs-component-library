<template>
    <div
        data-test="video-caption"
        class="vs-video-caption__wrapper"
        :class="`vs-video-caption__wrapper--${variant}`"
    >
        <div
            data-test="video-caption-variants"
            class="vs-video-caption"
            :class="`vs-video-caption--${variant}`"
            v-if="videoLoaded && requiredCookiesExist"
            key="video-caption"
        >
            <div
                v-if="videoBtnText"
                class="vs-video-caption__buttons-container"
            >
                <div class="container">
                    <VsButton
                        class="vs-video-caption__button"
                        icon="play"
                        icon-position="left"
                        size="md"
                        ref="videoShow"
                        @click="emitShowModal"
                    >
                        {{ videoBtnText }}
                    </VsButton>
                </div>

                <VsToggleButton
                    v-if="withToggleBtn"
                    @toggleAction="emitToggle"
                >
                    Toggle caption
                </VsToggleButton>
            </div>

            <div
                class="vs-video-caption__details"
                v-if="requiredCookiesExist"
            >
                <p class="vs-video-caption__title">
                    <!-- @slot Slot for video title -->
                    <slot name="video-title" />
                </p>

                <p class="vs-video-caption__duration">
                    {{ videoDetails.videoDurationMsg }}
                </p>
            </div>
        </div>

        <div
            v-if="!(videoLoaded && requiredCookiesExist) && showCookieMessage"
            class="vs-video-caption vs-video-caption--warning"
        >
            <VsWarning
                size="small"
                type="cookie"
            >
                {{ noCookiesMessage }}
                <template v-slot:button-text>
                    {{ cookieLinkText }}
                </template>
            </VsWarning>
        </div>
        <div
            v-if="!(videoLoaded && requiredCookiesExist) && cookiesInitStatus === 'error'"
            class="vs-video-caption vs-video-caption--warning"
        >
            <VsWarning
                size="small"
            >
                {{ errorMessage }}
            </VsWarning>
        </div>
        <div
            v-if="noJsMessage"
            class="vs-video-caption vs-video-caption--no-js vs-video-caption--warning"
            data-test="video-caption-nojs"
        >
            <VsWarning
                size="small"
            >
                {{ noJsMessage }}
            </VsWarning>
        </div>
    </div>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsToggleButton from '@/components/toggle-button/ToggleButton.vue';
import VsWarning from '@/components/warning/Warning.vue';

import useVideoStore from '@/stores/video.store';

import verifyCookiesMixin from '../../mixins/verifyCookiesMixin';
import requiredCookiesData from '../../utils/required-cookies-data';

const cookieValues = requiredCookiesData.youtube;

/**
 * Caption to be used for opening a video
 *
 * @displayName Video Caption
 */
export default {
    name: 'VsVideoCaption',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsToggleButton,
        VsWarning,
    },
    mixins: [
        verifyCookiesMixin,
    ],
    inject: {
        noJsMessage: {
            default: '',
        },
        noCookiesMessage: {
            default: '',
        },
        cookieLinkText: {
            default: '',
        },
        errorMessage: {
            default: '',
        },
    },
    props: {
        /**
         * Text for the play video button
         */
        videoBtnText: {
            type: String,
            default: '',
        },
        /**
         * If the video button should include a toggle button
         * for another caption
         */
        withToggleBtn: {
            type: Boolean,
            default: false,
        },
        /**
         * The YouTube ID for the video
         */
        videoId: {
            type: String,
            required: true,
        },
        /**
         * Style variant based on caption container width
         * `wide|narrow`.
         */
        variant: {
            type: String,
            default: 'wide',
            validator: (value) => value.match(
                /(wide|narrow)/,
            ),
        },
    },
    setup() {
        const videoStore = useVideoStore();
        return {
            videoStore,
        };
    },
    data() {
        return {
            requiredCookies: cookieValues,
            showErrorMessage: false,
        };
    },
    computed: {
        videoDetails() {
            return this.videoStore.videos[this.videoId];
        },
        videoLoaded() {
            if (typeof this.videoDetails !== 'undefined' && this.videoDetails.videoDuration > 0) {
                return true;
            }

            return false;
        },
        showCookieMessage() {
            if (!this.requiredCookiesExist
                && this.noCookiesMessage) {
                return true;
            }

            return false;
        },
    },
    methods: {
        emitToggle() {
            this.$emit('toggleAction');
        },
        emitShowModal() {
            if (this.emitter) {
                this.emitter.emit('showModal', this.videoId, '#videoShow');
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-video-caption {
        width: 100%;
        position: relative;

        &--no-js {
            display: none;
        }

        &__details {
            background-color: $vs-color-background-bold;
            color: $vs-color-text-inverse;
            padding: $spacer-075;
        }

        &__buttons-container {
            position: absolute;
            transform: translateY(-100%);
            width: 100%;

            .vs-toggle-btn {
                display: none;
            }

            @include media-breakpoint-up(lg) {
                .vs-toggle-btn {
                    display: block;
                    position: absolute;
                    right: $spacer-050;
                    top: calc(-24px - #{$spacer-075});
                }
            }
        }

        &__title {
            font-size: $font-size-4;
            font-weight: $font-weight-bold;
            margin-bottom: $spacer-050;
        }

        &__duration {
            font-size: $font-size-4;
            font-weight: $font-weight-light;
            margin: 0;
        }

        &__alert {
            display: flex;
            justify-content: flex-start;

            .vs-icon {
                margin-right: $spacer-175;
            }

            p {
                font-size: $font-size-4;
                line-height: 2;
                margin: -10px 0 0;
            }

            // override OneTrust styles
            #ot-sdk-btn.ot-sdk-show-settings {
                color: $vs-color-text-inverse;
                text-decoration: underline;
            }
        }

        &__button {
            min-height: 50px;
            display: flex;
            align-items: center;
            padding-top: $spacer-025;
            padding-bottom: $spacer-025;
            min-height: 53px;
            text-align: left;
            line-height: 1.1;

            .vs-icon {
                margin-right: $spacer-125;
            }
        }

        .vs-caption--large .vs-caption__image-caption {
            margin-bottom: $spacer-050;
        }

        @include media-breakpoint-up(sm) {
            &__buttons-container {
                & > .container {
                    padding: 0;
                }
                .vs-toggle-btn {
                    top: calc(50% - 20px);
                }
            }
        }
    }

    .vs-video-caption--wide {
        @include media-breakpoint-up(sm) {
            .vs-video-caption__details {
                padding: $spacer-100 $spacer-075 $spacer-125;
            }

            .vs-video-caption__title {
                font-size: $font-size-lead;
                margin-right: $spacer-100;
                margin-bottom: 0;
            }

            .vs-video-caption__buttons-container {
                &__button {
                    max-width: 400px;
                }
            }
        }

        @include media-breakpoint-up(lg) {
            .vs-video-caption__details {
                display: block;
                padding: $spacer-100 $spacer-150 $spacer-125;
            }

            .vs-video-caption__title {
                margin-bottom: $spacer-025;
            }

            .vs-video-caption__button {
                max-width: 360px;
            }
        }
    }

    @mixin small-play-button {
        .vs-video-caption__buttons-container {
            .vs-video-caption__button {
                width: $spacer-400;
                height: $spacer-400;
                position: relative;
                padding: $spacer-0;
                font-size: 0;

                .vs-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }

    @mixin large-play-button {
        .vs-video-caption__buttons-container {
            .vs-video-caption__button {
                width: auto;
                height: auto;
                padding: $spacer-075 $spacer-100;
                font-size: $font-size-4;

                .vs-icon {
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    height: $spacer-125;
                    width: $spacer-125;
                }
            }
        }
    }

    .vs-video-caption__wrapper--narrow {
        width: 100%;
        @include small-play-button;

        .vs-video-caption__buttons-container {
            .container {
                padding: $spacer-0;
            }

            .vs-video-caption__button {
                .vs-icon {
                    font-size: $font-size-9;
                }
            }
        }
    }

    .vs-image-with-caption--hero.vs-image-with-caption--video {
        @include small-play-button;

        .vs-image-with-caption__image-wrapper .vs-toggle-btn {
            display: block !important;
        }

        @include media-breakpoint-up(sm) {
            @include large-play-button;
        }

        @include media-breakpoint-up(lg) {
            .vs-image-with-caption__video-caption-wrapper .vs-video-caption {
                width: 400px;
            }

            .vs-image-with-caption__image-wrapper .vs-toggle-btn {
                display: none !important;
            }
        }
    }

    @include no-js {
        .vs-video-caption {
            display: none;

            &--no-js {
                display: block;
            }

            @include media-breakpoint-up(sm) {
                &__details {
                    max-width: 84%;
                    margin: 0 auto;
                    border-bottom: $vs-color-border 1px solid;
                }
            }

            @include media-breakpoint-up(lg) {
                &__details {
                    max-width: 100%;
                    margin: 0;
                    border-bottom: none;
                }
            }

            &__title,
            &__duration,
            &__button,
            .vs-toggle-btn {
                display: none;
            }
        }
    }
</style>
