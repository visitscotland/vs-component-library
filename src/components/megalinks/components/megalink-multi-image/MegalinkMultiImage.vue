<template>
    <div class="vs-megalink-multi-image">
        <VsStretchedLinkCard
            :link="linkUrl"
            :type="linkType"
            class="vs-megalink-multi-image-card p-050"
            :class="multiImageClasses"
            :heading-style="featured ? 'heading-s' : 'heading-xs'"
            :img-src="imgSrc"
            :img-alt="imgAlt"
            :data-test="featured ? 'megalink-multi-image-featured' : 'megalink-multi-image-card'"
            :theme="theme"
            :video-id="videoId"
            :video-btn-text="videoBtnText"
            :error-message="errorMessage"
            :warning-size="featured ? 'normal' : 'small'"
        >
            <template
                #stretched-card-panels
                v-if="days && transport"
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
                    class="vs-megalink-multi-image-card__title"
                    data-test="megalink-multi-image-card__title"
                ><!-- @slot Slot to contain heading --><slot name="vs-multi-image-heading" /></span>
            </template>

            <template #stretched-card-content>
                <VsBody
                    class="vs-megalink-multi-image-card__content"
                    data-test="megalink-multi-image-card__content"
                >
                    <!-- @slot Slot to contain content -->
                    <slot name="vs-multi-image-content" />
                </VsBody>
            </template>

            <template
                #stretched-card-badges
                v-if="$slots['vs-multi-image-badges'] && $slots['vs-multi-image-badges']()"
            >
                <!-- @slot Contains optional content for badges on each link  -->
                <slot name="vs-multi-image-badges" />
            </template>
        </VsStretchedLinkCard>
    </div>
</template>

<script>
import VsStretchedLinkCard from '@/components/stretched-link-card/StretchedLinkCard.vue';
import VsStretchedLinkPanels from '@/components/stretched-link-card/components/StretchedLinkPanels.vue';
import VsBody from '@/components/body/Body.vue';

/**
* Megalink cards to be used in the megalinks component
* There is a standard and featured variant.
 *
 * @displayName Megalinks Multi-Image
*/

export default {
    name: 'VsMegalinkMultiImage',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsStretchedLinkCard,
        VsBody,
        VsStretchedLinkPanels,
    },
    props: {
        /**
        * If the component should be the featured variant
        */
        featured: {
            required: false,
            type: Boolean,
            default: false,
        },
        /**
        * If the featured component is the last one
        */
        lastFeatured: {
            required: false,
            type: Boolean,
            default: false,
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
        * The link destination
        */
        linkUrl: {
            type: String,
            required: true,
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
    },
    computed: {
        multiImageClasses() {
            return [
                `vs-megalink-multi-image-card--${this.theme}`,
                {
                    'vs-megalink-multi-image-card--featured': this.featured,
                    'vs-megalink-multi-image-card--featured-last': this.lastFeatured,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
    .vs-megalink-multi-image-card.card {
        border: none;
        background: transparent;
        position: relative;
        margin-bottom: $spacer-200;

        &:hover {
            .vs-megalink-multi-image-card__title {
                text-decoration: underline;
            }
        }

        .vs-megalink-multi-image-card__img {
            max-width: 100%;
        }

        .card-title {
            margin-bottom: 0;
            margin-top: 0;
        }

        .vs-stretched-link-card__video-button {
            bottom: 0;
            left: 0;
        }

        @include square-video-button();

        @include media-breakpoint-up(xl) {
            &.vs-megalink-multi-image-card--featured {
                @include full-rectangle-video-button();
            }
        }
    };

    @include media-breakpoint-up(xl) {
        .vs-megalinks--multi-image .vs-megalinks__links-wrapper{
            width: calc(100% + #{$spacer-400} + #{$spacer-075});
            margin-left: -#{$spacer-200};

            .vs-megalink-multi-image {
                padding-left: $spacer-125;
                padding-right: $spacer-125;
            }
        }

        .vs-megalink-multi-image-card.card {
            margin-bottom: $spacer-500;

            .card-body {
                padding-bottom: $spacer-125;
            }
        }

        .vs-megalink-multi-image-card--featured.card {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 100%;
            transform: rotate(0deg);

            .vs-link__icon {
                font-size: 16px;
            }

            .vs-stretched-link-card__img-container {
                width: 75%
            }

            .megalink-multi-image__content {
                font-size: $font-size-5;
                margin-top: $spacer-200;
                line-height: $line-height-m;
            }

            .card-body {
                position: absolute !important;
                background-color: $vs-elevation-surface-raised;
                width: 40%;
                right: 0;
                top: $spacer-400;
                padding: $spacer-200;
                z-index: 10;
                box-shadow: $vs-elevation-shadow-raised;
            }

            .stretched-link:after {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }

            .vs-stretched-link-panels {
                left: $spacer-125;
                top: $spacer-125;
            }

            .vs-stretched-link-panels__panel:first-of-type {
                margin-left: 0;
            }

            &.vs-megalink-multi-image-card--featured-last {
                flex-direction: row-reverse;

                .vs-stretched-link-panels {
                    left: auto;
                    right: $spacer-125;
                }

                .card-body {
                    left: $spacer-0;;
                    right: auto;
                }
            }
        }
    }
</style>
