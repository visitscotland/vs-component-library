<template>
    <div
        class="card vs-stretched-link-card"
        data-test="vs-stretched-link-card"
        :class="stretchedLinkCardClasses"
        @click="emitShowModal"
        @keypress="emitShowModal"
    >
        <VsWarning
            v-if="showWarning === 'full'"
            :size="warningSize"
            :type="showCookieWarning ? 'cookie' : 'normal'"
            data-test="vs-stretched-link-card__full-warning"
            class="vs-stretched-link-card__full-warning"
        >
            {{ warningMessage }}

            <template
                #button-text
                v-if="cookieLinkText !== '' && showCookieWarning"
            >
                {{ cookieLinkText }}
            </template>
        </VsWarning>

        <VsWarning
            v-if="errorType === 'full' && videoId !== ''"
            :size="warningSize"
            data-test="vs-stretched-link-card__full-warning"
            class="vs-stretched-link-card__full-warning
                vs-stretched-link-card__full-warning--no-js"
        >
            {{ noJsMessage }}
        </VsWarning>
        <div
            v-if="imgSrc"
            class="vs-stretched-link-card__img-container"
            :class="warningClass"
        >
            <template v-if="imgSrc">
                <VsImg
                    :src="imgSrc"
                    :alt="imgAlt"
                    class="vs-stretched-link-card__img"
                    :class="isSvg ? 'vs-stretched-link-card__img--svg' : ''"
                    data-test="vs-stretched-link-card__img"
                    data-chromatic="ignore"
                />

                <VsButton
                    class="vs-stretched-link-card__video-button"
                    data-test="vs-stretched-link-card__video-button"
                    icon="fa-regular fa-play"
                    icon-position="left"
                    size="md"
                    ref="videoShow"
                    :rounded="false"
                    @click="emitShowModal"
                    v-if="videoId && videoLoaded && requiredCookiesExist"
                >
                    <span
                        class="vs-stretched-link-card__video-btn-text"
                        v-if="videoBtnText"
                    >
                        {{ formattedVideoBtnText }}
                    </span>
                    {{ formattedVideoDuration }}
                </VsButton>
            </template>

            <VsWarning
                v-if="showWarning === 'image'"
                :size="warningSize"
                :type="showCookieWarning ? 'cookie' : 'normal'"
                data-test="vs-stretched-link-card__image-warning"
                class="vs-stretched-link-card__image-warning"
            >
                {{ warningMessage }}

                <template
                    #button-text
                    v-if="cookieLinkText !== '' && showCookieWarning"
                >
                    {{ cookieLinkText }}
                </template>
            </VsWarning>

            <VsWarning
                v-if="videoId !== '' && errorType === 'image'"
                :size="warningSize"
                data-test="vs-stretched-link-card__warning"
                class="vs-stretched-link-card__image-warning
                    vs-stretched-link-card__image-warning--no-js"
            >
                {{ noJsMessage }}
            </VsWarning>
        </div>

        <template
            v-if="$slots['stretched-card-panels'] && $slots['stretched-card-panels']()"
        >
            <!-- @slot Contains optional content for overlaid panels  -->
            <slot name="stretched-card-panels" />
        </template>

        <div
            class="card-body"
            v-if="showWarning !== 'full'"
        >
            <span
                class="vs-stretched-link-card__category"
                v-if="$slots['stretched-card-category'] && $slots['stretched-card-category']()"
                data-test="vs-stretched-link-card__category"
            >
                <!-- @slot Contains a category header for the card  -->
                <slot name="stretched-card-category" />
            </span>
            <VsHeading
                v-if="$slots['stretched-card-header'] && $slots['stretched-card-header']()"
                :level="headingLevel"
                :heading-style="headingStyle"
                class="card-title vs-stretched-link-card__title"
                data-test="vs-stretched-link-card__title"
            >
                <template v-if="$slots['stretched-card-link'] && $slots['stretched-card-link']()">
                    <slot
                        name="stretched-card-header"
                    />
                </template>

                <!-- On BSH video link is tabbable still in absence of video button -->
                <template v-else-if="!businessSupport && type === 'video'">
                    <slot name="stretched-card-header" />
                </template>

                <VsLink
                    v-else
                    :href="link"
                    :type="type"
                    class="stretched-link"
                    :class="disabled ? 'stretched-link--disabled' : ''"
                    :variant="theme === 'dark' ? 'on-dark' : 'primary'"
                    data-test="vs-stretched-link"
                    :disabled="disabled"
                    :tabindex="(videoId || disabled) && !businessSupport ? '-1' : '0'"
                >
                    <!-- @slot Contains header content for the card  -->
                    <slot name="stretched-card-header" />
                </VsLink>
            </VsHeading>
            <div
                class="vs-stretched-link-card__content"
                data-test="vs-stretched-link-card__content"
            >
                <!-- @slot Contains body content for the card  -->
                <slot name="stretched-card-content" />
            </div>

            <div
                v-if="$slots['stretched-card-badges'] && $slots['stretched-card-badges']()"
                class="vs-stretched-link-card__badges"
                data-test="vs-stretched-link-card__badges"
            >
                <!-- @slot to add badges to the card  -->
                <slot name="stretched-card-badges" />
            </div>

            <VsLink
                :href="link"
                class="vs-stretched-link-card__link stretched-link"
                v-if="$slots['stretched-card-link'] && $slots['stretched-card-link']()"
                data-test="vs-stretched-link-card__link"
            >
                <!-- @slot Text for option fake link at bottom of the card -->
                <slot name="stretched-card-link" />
            </VsLink>
        </div>
    </div>
</template>

<script>
import VsHeading from '@/components/heading/Heading.vue';
import VsLink from '@/components/link/Link.vue';
import VsImg from '@/components/img/Img.vue';
import VsButton from '@/components/button/Button.vue';
import VsWarning from '@/components/warning/Warning.vue';
import jsIsDisabled from '@/utils/js-is-disabled';
import useVideoStore from '@/stores/video.store';

import verifyCookiesMixin from '../../mixins/verifyCookiesMixin';
import requiredCookiesData from '../../utils/required-cookies-data';

const cookieValues = requiredCookiesData.youtube;

let videoStore = null;

/**
 * The Stretched Link Card is a block that stretches its nested link across its whole area
 * meaning that the whole block is clickable
 *
 * @displayName Stretched Link Card
 */
export default {
    name: 'VsStretchedLinkCard',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsLink,
        VsImg,
        VsButton,
        VsWarning,
    },
    mixins: [
        verifyCookiesMixin,
    ],
    inject: {
        noJsMessage: {
            default: null,
        },
        theme: {
            default: null,
        },
        noCookiesMessage: {
            default: null,
        },
        cookieLinkText: {
            default: null,
        },
    },
    props: {
        /**
        * The link that the component will use
        */
        link: {
            type: String,
            required: true,
            default: '#',
        },
        /**
        * The correct heading level for page hierarchy, the
        * heading will be styled the same regardless of level provided
        * `1|2|3|4|5|6`
        */
        headingLevel: {
            type: [String, Number],
            default: '3',
            validator: (value) => value.match(/(1|2|3|4|5|6)/),
        },
        /**
         * The heading style used for the heading.
         * `display-m|display-s|heading-xl|
         * heading-l|heading-m|heading-s|heading-xs|heading-xxs`
         */
        headingStyle: {
            type: [String, Number],
            default: 'heading-xs',
            validator: (value) => value.match(
                /(display-m|display-s|heading-xl|heading-l|heading-m|heading-s|heading-xs|heading-xxs)/,
            ),
        },
        /**
        * The type of link. This will set the icon.
        * `external, internal, download, video`
        */
        type: {
            type: String,
            required: true,
            validator: (value) => value.match(/(default|external|internal|download|video)/),
        },
        /**
        * The image to use in the component
        */
        imgSrc: {
            type: String,
            default: undefined,
        },
        /**
        * The image alt text to use in the component
        */
        imgAlt: {
            type: String,
            default: '',
        },
        /**
        * Prop to disable link functionality
        */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * An optional YouTube video ID
         */
        videoId: {
            type: String,
            default: '',
        },
        /**
         * A label to add to the youtube play button if one is present.
         * Only appears in certain page layouts.
         */
        videoBtnText: {
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
         * Where the error message should appear
        */
        errorType: {
            type: String,
            default: 'image',
            validator: (value) => value.match(/(image|full)/),
        },
        /**
         * Size of warning message to show
        */
        warningSize: {
            type: String,
            default: 'small',
            validator: (value) => value.match(/(normal|small)/),
        },
        /**
         * Flag for Business Support Hub (BSH) which has different
         * styling to consumer site component.
         */
        businessSupport: {
            type: Boolean,
            default: false,
        },
        /**
         * Flag for homepage styling which differs on BSH
         */
        isHomePage: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            jsDisabled: true,
            requiredCookies: cookieValues,
        };
    },
    computed: {
        formattedVideoBtnText() {
            return `${this.videoBtnText} | `;
        },
        formattedVideoDuration() {
            let seconds = `${this.videoDetails.videoFullDuration.seconds}`;

            if (seconds.length === 1) {
                seconds = `0${seconds}`;
            }

            return `${this.videoDetails.videoFullDuration.minutes}:${seconds}`;
        },
        stretchedLinkCardClasses() {
            let outputClasses = '';

            if (this.disabled) {
                outputClasses += 'vs-stretched-link-card--disabled';
            }

            if (this.type === 'video') {
                outputClasses += ' vs-stretched-link-card--video';
            }

            if (this.showWarning && this.type === 'video') {
                outputClasses += ' vs-stretched-link-card--warning';
            }

            return outputClasses;
        },
        videoDetails() {
            if (videoStore) {
                return videoStore.videos[this.videoId];
            }

            return null;
        },
        videoLoaded() {
            if (
                typeof this.videoDetails !== 'undefined'
                && this.videoDetails !== null
                && this.videoDetails.videoDuration > 0
            ) {
                return true;
            }

            return false;
        },
        // Calculates if warning is showing and gives class for appropriate styles
        warningClass() {
            let className = '';

            if (this.videoId && (this.jsDisabled || !this.requiredCookiesExist)) {
                className = 'vs-stretched-link-card__img-container--warning ';

                if (this.errorType === 'full' && (this.cookiesInitStatus !== null
                    || this.jsDisabled)) {
                    className += 'vs-stretched-link-card__img-container--warning-full';
                }
            }

            return className;
        },
        showCookieWarning() {
            if (this.videoId && !this.jsDisabled
                && !this.requiredCookiesExist
                && this.cookiesInitStatus === true) {
                return true;
            }

            return false;
        },
        showError() {
            if (this.videoId
                && this.errorMessage !== ''
                && this.cookiesInitStatus === 'error') {
                return true;
            }

            return false;
        },
        showWarning() {
            if (this.showError || this.showCookieWarning) {
                return this.errorType;
            }

            if (this.jsDisabled) {
                return true;
            }

            return false;
        },
        warningMessage() {
            let message = '';

            if (this.showCookieWarning) {
                message = this.noCookiesMessage;
            } else {
                message = this.errorMessage;
            }

            return message;
        },
        warningAttrs() {
            const attrsObj = {
            };

            if (this.type === 'cookie') {
                attrsObj.class = 'ot-sdk-show-settings vs-warning__cookie-trigger';
            }

            if (this.size === 'small') {
                attrsObj.size = 'sm';
            }

            return attrsObj;
        },
        isSvg() {
            if (this.imgSrc && this.imgSrc.includes('.svg')) {
                return true;
            }

            return false;
        },
    },
    mounted() {
        videoStore = useVideoStore();

        // Checks whether js is disabled, to display an appropriate warning to the user
        this.jsDisabled = jsIsDisabled();
    },
    methods: {
        emitShowModal() {
            if (!this.videoId || !this.requiredCookiesExist) {
                return;
            }

            /**
             * Triggers when the video button is clicked, requests that the appropriate
             * video modal becomes visible
             *
             * @event showModal
             *
             * @property {string} videoId the id of the video to show, acts as a key for the modal
             * @property {string} triggerRef the #ref of the button that triggered the event,
             * focus is returned here after the modal closes
             */
            if (this.emitter) {
                this.emitter.emit('showModal', this.videoId, '#videoShow');
            }
        },
    },
};
</script>

<style lang="scss">
    .card.vs-stretched-link-card {
        border: none;
        position: relative;

        &:hover {
            .vs-stretched-link-card__video-button {
                background-color: $vs-color-interaction-cta-hover;
                border-color: $vs-color-interaction-cta-hover;
            }
        }

        &:active {
            .vs-stretched-link-card__video-button {
                background-color: $vs-color-interaction-cta-pressed;
                border-color: $vs-color-interaction-cta-pressed;
            }
        }

        &--video {
            cursor: pointer;
        }

        .vs-stretched-link-card__img-container {
            width: 100%;
            max-width: 100%;
            position: relative;
            aspect-ratio: 3/2;

            @supports not (aspect-ratio: 3/2) {
                padding-bottom: 66.6%;
            }

            .vs-stretched-link-card__img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                align-self: flex-start;
                flex-shrink: 0; // IE11 fix, prevents image vertical stretching

                &--svg {
                    object-fit: contain;
                }
            }
        }

        .card-body{
            padding: $vs-spacer-050 0;
            width: 100%;
        }

        .vs-stretched-link-card__title {
            color: $vs-color-text-primary;
            display: flex;

            .stretched-link {
                color: $vs-color-text-primary;
                text-decoration: none;
                letter-spacing: inherit;
                display: block;

                &:hover {
                    text-decoration: underline;
                }

                &--disabled {
                    cursor: default;

                    &::after {
                        display: none;
                    }
                }

                &:focus {
                    @extend %outline-link-focus;
                }

                .vs-icon {
                    color: $vs-color-icon-highlight;
                }
            }
        }

        .vs-stretched-link-card__category {
            font-size: $font-size-3;
            color: $vs-color-text-tertiary;
            margin-bottom: $vs-spacer-100;
        }

        .vs-stretched-link-card__content {
            margin-top: $vs-spacer-050;
            font-size: $font-size-teaser;
            text-align: left;

            p:last-of-type {
                margin-bottom: 0;
            }
        }

        .vs-stretched-link-card__panels {
            position: absolute;
            top: $vs-spacer-025;
            right: $vs-spacer-025;
            display: flex;
            flex-direction: row;

            @include media-breakpoint-up(sm) {
                top: $vs-spacer-050;
                right: $vs-spacer-050;
            }
        }

        .vs-stretched-link-card__link {
            margin: $vs-spacer-100 $vs-spacer-0 $vs-spacer-0;
            color: $vs-color-interaction-link-primary;
            text-decoration: underline;
        }

        .vs-stretched-link-card__video-button {
            position: absolute;
            bottom: 100%;
            left: 0;
        }

        .vs-stretched-link-card__video-btn-text {
            padding-right: $vs-spacer-025;
        }

        .vs-stretched-link-card__full-warning {
            position: absolute;
            height: 127px;
            width: calc(100% - 1rem);
            z-index: 1;
        }

        .vs-stretched-link-card__image-warning {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            top: 0;
        }

        .vs-stretched-link-card__full-warning--no-js,
        .vs-stretched-link-card__image-warning--no-js {
            display: none;
        }

        .vs-stretched-link-card__badges {
            margin-top: $vs-spacer-050;
        }
    }

    @include no-js {
        .card.vs-stretched-link-card {
            .vs-stretched-link-card__image-warning,
            .vs-stretched-link-card__full-warning,
            .vs-stretched-link-card__video-button {
                display: none;
            }

            .vs-stretched-link-card__full-warning--no-js,
            .vs-stretched-link-card__image-warning--no-js {
                display: flex;
            }
        }
    }
</style>
