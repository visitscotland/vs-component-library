<template>
    <div
        class="card vs-stretched-link-card"
        data-test="vs-stretched-link-card"
        :class="stretchedLinkCardClasses"
        @click="emitShowModal"
        @keypress="emitShowModal"
    >
        <VsWarning
            v-show="showWarning === 'full'"
            :size="warningSize"
            :theme="theme"
            :type="showCookieWarning ? 'cookie' : 'normal'"
            data-test="vs-stretched-link-card__full-warning"
            class="vs-stretched-link-card__full-warning"
        >
            {{ warningMessage }}

            <template
                v-slot:button-text
                v-if="cookieLinkText !== '' && showCookieWarning"
            >
                {{ cookieLinkText }}
            </template>
        </VsWarning>

        <VsWarning
            v-show="errorType === 'full' && videoId !== ''"
            :size="warningSize"
            data-test="vs-stretched-link-card__full-warning"
            class="vs-stretched-link-card__full-warning
                vs-stretched-link-card__full-warning--no-js"
            :theme="theme"
        >
            {{ noJsMessage }}
        </VsWarning>
        <div
            class="vs-stretched-link-card__img-container"
            :class="warningClass"
        >
            <template
                v-if="imgSrc"
            >
                <VsImg
                    :src="imgSrc"
                    :alt="imgAlt"
                    :srcset="`${imgSrc}?size=xs 300w,
                        ${imgSrc}?size=sm 600w,
                        ${imgSrc}?size=md 1200w,
                        ${imgSrc}?size=lg 2048w`"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    :low-res-image="`${imgSrc}?size=xxs`"
                    class="vs-stretched-link-card__img"
                    data-test="vs-stretched-link-card__img"
                />
            </template>

            <VsWarning
                v-show="showWarning === 'image'"
                :size="warningSize"
                :type="showCookieWarning ? 'cookie' : 'normal'"
                data-test="vs-stretched-link-card__image-warning"
                class="vs-stretched-link-card__image-warning"
                :theme="theme"
            >
                {{ warningMessage }}

                <template
                    v-slot:button-text
                    v-if="cookieLinkText !== '' && showCookieWarning"
                >
                    {{ cookieLinkText }}
                </template>
            </VsWarning>

            <VsWarning
                v-show="videoId !== '' && errorType === 'image'"
                :size="warningSize"
                data-test="vs-stretched-link-card__warning"
                class="vs-stretched-link-card__image-warning
                    vs-stretched-link-card__image-warning--no-js"
                :theme="theme"
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
            :class="videoId ? 'position-relative' : ''"
            v-if="showWarning !== 'full'"
        >
            <VsButton
                class="vs-stretched-link-card__video-button"
                data-test="vs-stretched-link-card__video-button"
                icon="play"
                icon-position="left"
                size="md"
                ref="videoShow"
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
                class="card-title vs-stretched-link-card__title"
                data-test="vs-stretched-link-card__title"
            >
                <template v-if="$slots['stretched-card-link'] && $slots['stretched-card-link']()">
                    <slot name="stretched-card-header" />
                </template>

                <template v-else-if="type === 'video'">
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
                    :tabindex="(videoId || disabled) ? '-1' : '0'"
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
import VsHeading from '@components/elements/heading/Heading.vue';
import VsLink from '@components/elements/link/Link.vue';
import VsImg from '@components/elements/img/Img.vue';
import VsButton from '@components/elements/button/Button.vue';
import VsWarning from '@components/patterns/warning/Warning.vue';
import jsIsDisabled from '@/utils/js-is-disabled';
import useVideoStore from '@/stores/video.store.ts';
import { mapState } from 'pinia';
import verifyCookiesMixin from '../../../mixins/verifyCookiesMixin';
import requiredCookiesData from '../../../utils/required-cookies-data';

const cookieValues = requiredCookiesData.youtube;

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
        noCookiesMessage: {
            default: null,
        },
        cookieLinkText: {
            default: null,
        },
        theme: {
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
            required: true,
            type: String,
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
        videoLoaded() {
            if (typeof this.videoDetails !== 'undefined' && this.videoDetails.videoDuration > 0) {
                return true;
            }
            return false;
        },
        ...mapState(useVideoStore, {
            videoDetails(store) {
                return store.getVideo(this.videoId);
            },
        }),
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
            if (this.theme === 'dark') {
                attrsObj.onDark = '';
            }
            if (this.size === 'small') {
                attrsObj.size = 'sm';
            }

            return attrsObj;
        },
    },
    mounted() {
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
            this.emitter.emit('showModal', this.videoId, '#videoShow');
        },
    },
};
</script>

<style lang="scss">
    .card.vs-stretched-link-card {
        transition: box-shadow $duration-slowly;
        border: none;
        position: relative;
        line-height: $line-height-xs;

        &:hover {
            box-shadow: $shadow_card;

            .megalink-link-list__title {
                text-decoration: underline;
            }

            .vs-stretched-link-card__video-button {
                background-color: darken($color-theme-primary, 10%);
                border-color: darken($color-theme-primary, 12%);
            }
        }

        &:active {
            .vs-stretched-link-card__video-button {
                .vs-icon {
                    color: $color-theme-primary;
                }
            }
        }

        &:focus {
            .vs-stretched-link-card__video-button {
                background-color: $color-white;
                border-color: $color-theme-primary;
                color: $color-theme-primary;
            }
        }

        &--disabled {
            &:hover {
                box-shadow: none;
            }

            .megalink-link-list__title {
                text-decoration: none;
            }
        }

        &--video {
            cursor: pointer;
        }

        .stretched-link {
            color: $color-base-text;
            text-decoration: none;
            letter-spacing: 0;
            display: block;

            &--disabled {
                cursor: default;

                &::after {
                    display: none;
                }
            }

            &:focus {
                @extend %outline-link-focus;
            }
        }

        .vs-link__icon {
            height: 12px;
            width: 12px;
        }

        .vs-stretched-link-card__img-container {
            width: 100%;
            max-width: 100%;
            position: relative;
            aspect-ratio: 3/2;

            @supports not (aspect-ratio: 3/2) {
                padding-bottom: 66.6%;
            }
        }

        .vs-stretched-link-card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            align-self: flex-start;
            flex-shrink: 0; // IE11 fix, prevents image vertical stretching
        }

        .vs-stretched-link-card__title {
            font-size: $font-size-3;
            line-height: $line-height-s;
            letter-spacing: $letter-spacing-l;
            color: $color-base-text;
            display: flex;

            a {
                letter-spacing: inherit;
            }
        }

        .vs-stretched-link-card__category {
            font-family: $font-family-base;
            font-size: $font-size-3;
            line-height: $line-height-xs;
            color: $color-secondary-teal-shade-3;
            letter-spacing: normal;
            margin-bottom: $spacer-4;
        }

        .vs-stretched-link-card__content {
            margin-top: $spacer-2;
            line-height: $line-height-s;
            font-size: $font-size-teaser;

            p:last-of-type {
                margin-bottom: 0;
            }
        }

        .vs-stretched-link-card__panels {
            position: absolute;
            top: $spacer-1;
            right: $spacer-1;
            display: flex;
            flex-direction: row;
        }

        .vs-stretched-link-card__link {
            margin: $spacer-4 $spacer-0 $spacer-0;
            color: $color-pink;
            text-decoration: underline;
        }

        .vs-stretched-link-card__video-button {
            position: absolute;
            bottom: 100%;
            left: 0;
        }

        .vs-stretched-link-card__video-btn-text {
            padding-right: $spacer-1;
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

        @include media-breakpoint-up(sm) {
            .vs-stretched-link-card__panels {
                top: $spacer-2;
                right: $spacer-2;
            }
        }

        @include media-breakpoint-up(xl) {
            .vs-stretched-link-card__title {
                font-size: $font-size-3;
                line-height: $line-height-s;
            }

             .card-body {
                padding-bottom: $spacer-5;
            }
        }
    }

    @mixin square-video-button {
        .vs-stretched-link-card__video-button {
            padding: $spacer-3 $spacer-4 $spacer-2;
            flex-direction: column;

            .vs-icon {
                margin-right: $spacer-0;
                margin-top: $spacer-0;
                margin-bottom: $spacer-1;
            }
        }

        .vs-stretched-link-card__video-btn-text {
            display: none;
        }
    }

    @mixin small-rectangle-video-button {
        .vs-stretched-link-card__video-button {
            padding: $spacer-3 $spacer-4;
            flex-direction: row;

            .vs-icon {
                margin-right: $spacer-2;
                margin-top: -.05em;
                margin-bottom: $spacer-0;
            }
        }

        .vs-stretched-link-card__video-btn-text {
            display: none;
        }
    }

    @mixin full-rectangle-video-button {
        .vs-stretched-link-card__video-button {
            padding: $spacer-3 calc(#{$spacer-8} + #{$spacer-2});
            flex-direction: row;

            .vs-icon {
                margin-right: $spacer-2;
                margin-top: -.05rem;
                margin-bottom: $spacer-0;
            }
        }

        .vs-stretched-link-card__video-btn-text {
            display: inline-block;
        }
    }

    .vs-stretched-link-card.vs-megalink-multi-image-card {
        .vs-stretched-link-card__video-button {
            position: absolute;
            bottom: 100%;
            left: 0;
        }

        @include square-video-button();

        @include media-breakpoint-up(lg) {
            &.vs-megalink-multi-image-card--featured {
                .vs-stretched-link-card__video-button {
                    bottom: 100%;
                    left: $spacer-0;
                }

                @include full-rectangle-video-button();
            }
        }

        @include media-breakpoint-up(xl) {
            &.vs-megalink-multi-image-card--featured {

                .vs-stretched-link-card__video-button {
                    bottom: $spacer-2;
                    left: $spacer-2;
                    z-index: 2;
                }
            }
        }
    }

    .vs-megalink-link-list .vs-stretched-link-card {
        .card-body {
            position: initial !important;
        }

        .vs-stretched-link-card__video-button {
            bottom: $spacer-2;
            left: $spacer-2;
            z-index: 2;
        }

        @include small-rectangle-video-button();
    }

    @include no-js {
        .card.vs-stretched-link-card {
            .vs-stretched-link-card__image-warning,
            .vs-stretched-link-card__full-warning {
                display: none;
            }

            .vs-stretched-link-card__full-warning--no-js,
            .vs-stretched-link-card__image-warning--no-js {
                display: flex;
            }
        }

        .vs-megalink-link-list {
            .vs-stretched-link-card--warning {
                overflow: hidden;
                padding: 0;

                &__img-container {
                    width: 100%;
                    max-width: 100%;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .card-body {
                    display: none;
                }
            }
        }
    }
</style>
