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
                class="vs-video-caption__details container"
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
            v-show="!(videoLoaded && requiredCookiesExist) && showCookieMessage"
            class="vs-video-caption vs-video-caption--warning"
        >
            <VsWarning
                size="small"
                type="cookie"
                :transparent="false"
            >
                {{ noCookiesMessage }}
                <template v-slot:button-text>
                    {{ cookieLinkText }}
                </template>
            </VsWarning>
        </div>
        <div
            v-show="!(videoLoaded && requiredCookiesExist) && cookiesInitStatus === 'error'"
            class="vs-video-caption vs-video-caption--warning"
        >
            <VsWarning
                size="small"
                :transparent="false"
            >
                {{ errorMessage }}
            </VsWarning>
        </div>
        <div
            class="vs-video-caption vs-video-caption--no-js vs-video-caption--warning"
            data-test="video-caption-nojs"
        >
            <VsWarning
                size="small"
                :transparent="false"
            >
                {{ noJsMessage }}
            </VsWarning>
        </div>
    </div>
</template>

<script>
import VsButton from '@components/button/Button.vue';
import VsToggleButton from '@components/toggle-button/ToggleButton.vue';
import VsWarning from '@components/warning/Warning.vue';

import { mapState } from 'pinia';
import useVideoStore from '@/stores/video.store.ts';

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
    data() {
        return {
            requiredCookies: cookieValues,
            showErrorMessage: false,
        };
    },
    computed: {
        ...mapState(useVideoStore, {
            videoDetails(store) {
                return store.getVideo(this.videoId);
            },
        }),
        videoLoaded() {
            if (typeof this.videoDetails !== 'undefined' && this.videoDetails.videoDuration > 0) {
                return true;
            }

            return false;
        },
        showCookieMessage() {
            if (!this.requiredCookiesExist
                && this.cookiesSet.length > 0
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
            background-color: $color-gray-shade-6;
            color: $color-white;
            padding: $spacer-3;
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
                    right: $spacer-2;
                    top: calc(-24px - #{$spacer-3});
                }
            }
        }

        &__title {
            font-size: $font-size-4;
            font-weight: $font-weight-bold;
            margin-bottom: $spacer-2;
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
                margin-right: $spacer-7;
            }

            p {
                font-size: $font-size-4;
                line-height: 2;
                margin: -10px 0 0;
            }

            // override OneTrust styles
            #ot-sdk-btn.ot-sdk-show-settings {
                color: $color-white;
                text-decoration: underline;

                &:hover {
                    color: $color-yellow;
                }
            }
        }

        &__button {
            min-height: 50px;
            display: flex;
            align-items: center;
            padding-top: $spacer-1;
            padding-bottom: $spacer-1;
            min-height: 53px;
            text-align: left;
            line-height: 1.1;

            .vs-icon {
                margin-right: $spacer-5;
            }
        }

        .vs-caption--large .vs-caption__image-caption {
            margin-bottom: $spacer-2;
        }

        @include media-breakpoint-up(sm) {
            &__buttons-container {
                & > .container {
                    padding: 0;
                }
                .vs-toggle-btn {
                    top: calc(50% - 12px);
                }
            }
        }
    }

    .vs-video-caption--wide {
        @include media-breakpoint-up(sm) {
            .vs-video-caption__details {
                display: flex;
                align-items: baseline;
                padding: $spacer-4 $spacer-3 $spacer-5;
            }

            .vs-video-caption__title {
                font-size: $font-size-lead;
                margin-right: $spacer-4;
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
                padding: $spacer-4 $spacer-6 $spacer-5;
            }

            .vs-video-caption__title {
                margin-bottom: $spacer-1;
            }

            .vs-video-caption__button {
                max-width: 360px;
            }
        }
    }

    @mixin small-play-button {
        .vs-video-caption__buttons-container {
            .vs-video-caption__button {
                width: $spacer-10;
                height: $spacer-10;
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
                padding: $spacer-3 $spacer-4;
                font-size: $font-size-4;

                .vs-icon {
                    position: relative;
                    top: auto;
                    left: auto;
                    transform: none;
                    height: $spacer-5;
                    width: $spacer-5;
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

        @include media-breakpoint-up(sm) {
            .vs-video-caption__details {
                display: flex;
                align-items: baseline;
                padding: $spacer-4 $spacer-5 $spacer-5;
            }

            .vs-caption .vs-caption__caption-info {
                padding: $spacer-4 $spacer-5 $spacer-5;
            }
        }

        @include media-breakpoint-up(lg) {
            .vs-video-caption__details {
                display: block;
                padding: $spacer-4 $spacer-2 $spacer-3;

            }

            .vs-caption .vs-caption__caption-info {
                padding: $spacer-4 $spacer-2 $spacer-3;
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
                    border-bottom: $color-secondary-gray 1px solid;
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
