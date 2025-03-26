<template>
    <div
        class="vs-megalink-link-list"
        :class="megalinkClass"
        data-test="vs-megalink-link-list"
    >
        <VsStretchedLinkCard
            :link="linkUrl"
            :type="linkType"
            class="vs-megalink-link-list__wrapper"
            :img-src="imgSrc"
            :img-alt="imgAlt"
            :theme="theme"
            :video-id="videoId"
            :video-btn-text="videoBtnText"
            :error-message="errorMessage"
            error-type="full"
            :business-support="businessSupport"
            :is-home-page="isHomePage"
        >
            <template
                v-if="days && transport"
                #stretched-card-panels
            >
                <VsStretchedLinkPanels
                    :days="days"
                    :transport="transport"
                    :transport-name="transportName"
                    :days-label="daysLabel"
                    data-test="vs-itinerary-panels"
                />
            </template>

            <template #stretched-card-header>
                <span
                    class="vs-megalink-link-list__title"
                    data-test="megalink-link-list__title"
                >
                    <!-- @slot Slot to contain heading -->
                    <slot name="vs-link-list-heading" />
                </span>
            </template>

            <template #stretched-card-content>
                <VsRichTextWrapper
                    :class="businessSupport ? 'd-block' : 'vs-megalink-link-list__content'"
                    data-test="megalink-link-list__content"
                >
                    <!-- @slot Slot to contain content -->
                    <slot name="vs-link-list-content" />
                </VsRichTextWrapper>
            </template>

            <template
                #stretched-card-badges
                v-if="businessSupport && !isHomePage"
            >
                <slot name="vs-link-list-badges" />
            </template>
        </VsStretchedLinkCard>
    </div>
</template>

<script>
import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';
import VsStretchedLinkPanels from '@/components/stretched-link-card/components/StretchedLinkPanels.vue';
import VsRichTextWrapper from '@/components/rich-text-wrapper/RichTextWrapper.vue';

/**
* Megalink link list cards to be used in the megalinks component
* There is a standard and featured variant.
*
* @displayName Megalinks Link List
*/

export default {
    name: 'VsMegalinkLinkList',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsStretchedLinkCard,
        VsRichTextWrapper,
        VsStretchedLinkPanels,
    },
    props: {
        /**
        * The source of the image used in the component
        */
        imgSrc: {
            required: true,
            type: String,
        },
        /**
        * The image alt text to use in the component
        */
        imgAlt: {
            required: false,
            type: String,
            default: '',
        },
        /**
        * The type of link. This will set the icon.
        * `external, internal, download, video`
        */
        linkType: {
            type: String,
            required: true,
            validator: (value) => value.match(/(default|external|internal|download|video)/),
        },
        /**
        * The component color theme
        */
        theme: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey)/),
        },
        /**
        * The link destination
        */
        linkUrl: {
            type: String,
            required: true,
        },
        /**
        * Optional prop for number of days
        */
        days: {
            type: String,
            default: '',
        },
        /**
        * Label for days - too allow translation in CMS
        */
        daysLabel: {
            type: String,
            default: 'days',
        },
        /**
        * Optional prop for transport type (will show a the transport icon if used)
        */
        transport: {
            type: String,
            default: '',
        },
        /**
        * Display-friendly transport name
        * to allow for translation
        */
        transportName: {
            type: String,
            default: '',
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
            default: 'Play Video',
        },
        /**
         * Message to show when there's an error with a third party
        */
        errorMessage: {
            type: String,
            default: '',
        },
        /**
         * Flag for Business Support Hub (BSH) visual differences
         * On mobile and internal pages there should be no images.
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
    computed: {
        megalinkClass() {
            let returnClass = '';

            if (this.theme) {
                returnClass += `vs-megalink-link-list--${this.theme} `;
            }

            if (!this.isHomePage) {
                returnClass += 'vs-megalink-link-list--internal-page ';
            }

            if (this.businessSupport) {
                returnClass += 'vs-megalink-link-list--business-support ';
            }

            return returnClass;
        },
    },
};
</script>

<style lang="scss">
    .vs-megalink-link-list {
        border: none;
        padding: $spacer-050 0 $spacer-075;
        position: relative;
        height: 100%;
        width: 100%;

        &:after {
            content: '';
            border-bottom: 1px solid $vs-color-border-primary;
            position: absolute;
            width: calc(100% - 16px);
            left: 8px;
            bottom: 0;
        }

        .vs-megalink-link-list__wrapper.card {
            display: flex;
            flex-direction: row;
            padding: $spacer-050;
            border: none;
            height: 100%;
            background: transparent;

            &:hover {
                .vs-megalink-link-list__title {
                    text-decoration: underline;
                }
            }

            &--disabled {
                .megalink-link-list__title {
                    text-decoration: none;
                }
            }

            .vs-stretched-link-card__video-button {
                bottom: $spacer-0;
                z-index: 2;
            }

            @include small-rectangle-video-button();

            .card-body {
                background: transparent;
                padding: 0;
                align-self: flex-start;
                width: 50%;
                position: initial !important;

                @include media-breakpoint-up(xl) {
                    padding-bottom: $spacer-125;
                }

                @include media-breakpoint-up(sm) {
                    width: 66%;
                }
            }

            .vs-stretched-link-card__img-container {
                width: 50%;
                max-width: 50%;
                align-self: flex-start;
                margin-right: $spacer-100;

                @include media-breakpoint-up(sm) {
                    width: 33%;
                    max-width: 33%;
                }

                @include media-breakpoint-up(xl) {
                    padding-bottom: $spacer-0;
                }

                &--warning-full {
                    width: 100%;
                    max-width: 100%;
                    height: 127px;
                    overflow: hidden;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                }
            }

            .card-title {
                margin-bottom: 0;
                margin-top: 0;
            }

            .vs-megalink-link-list__content {
                display: none;

                p {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }
        }

        @include media-breakpoint-up(sm) {
            .vs-megalink-link-list__wrapper.card {
                .vs-megalink-link-list__content {
                    display: block;
                }
            }
        }

        @include media-breakpoint-up(md) {
            .vs-megalink-link-list__wrapper.card {

                .vs-megalink-link-list__content {
                    margin: $spacer-050 0 0;
                    line-height: $line-height-s;
                    display: block;

                    p {
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        font-size: $font-size-5;
                        margin-bottom: 0;
                    }
                }
            }

            @include media-breakpoint-up(lg) {
                .vs-megalink-link-list__wrapper.card {
                    .vs-megalink-link-list__content p {
                        font-size: $font-size-4;
                    }
                }
            }
        }

        .vs-stretched-link-panels {
            width: calc(33% - #{$spacer-050});
            right: auto;
            left: $spacer-050;
            justify-content: flex-end;

            &__panel {
                display: none;
                width: 36px;
                height: 36px;

                &--days {
                    display: flex;
                    margin-right: $spacer-050;
                }
            }

            &__days {
                font-size: $font-size-5;
                margin-bottom: 0;
            }

            @include media-breakpoint-up(xl) {
                &__panel {
                    width: 55px;
                    height: 55px;
                }

                &__days {
                    font-size: $font-size-6;
                    margin-bottom: $spacer-025;
                }
            }
        }

        &--business-support {
            &.vs-megalink-link-list--internal-page {
                .vs-stretched-link-card__img-container, .vs-stretched-link-card__video-button {
                    display: none;
                }
            }

            @include media-breakpoint-down(md) {
                .vs-stretched-link-card__img-container, .vs-stretched-link-card__video-button {
                    display: none;
                }
            }
        }
    }

    @include no-js {
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
