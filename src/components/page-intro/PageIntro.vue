<template>
    <div
        class="vs-page-intro"
        :class="introClasses"
        data-test="vs-page-intro"
    >
        <!-- @slot Slot for hero ImageWithCaption component  -->
        <slot name="vs-intro-hero" />

        <div class="vs-page-intro__wrapper">
            <VsContainer>
                <VsRow>
                    <VsCol
                        cols="10"
                        :lg="heroIntro ? '8' : ''"
                        :offset-lg="heroIntro ? '1' : ''"
                    >
                        <div
                            class="vs-page-intro__breadcrumb"
                            :class="heroIntro ? 'mt-lg-4' : 'mt-lg-8'"
                        >
                            <!-- @slot Slot to display breadcrumb items  -->
                            <slot name="vs-intro-breadcrumb" />
                        </div>
                    </VsCol>
                </VsRow>

                <div class="vs-page-intro__share">
                    <!-- @slot Slot to display SocialShare button  -->
                    <slot name="vs-share-button" />
                </div>

                <VsRow>
                    <VsCol
                        cols="11"
                        :md="heroIntro ? '11' : '10'"
                        :lg="heroIntro ? '7' : '10'"
                        :xl="heroIntro ? '8' : '10'"
                        :offset-lg="heroIntro ? '1' : '0'"
                        class="mt-1 mt-sm-0"
                    >
                        <VsHeading
                            level="1"
                            id="main-heading"
                        >
                            <!-- @slot Intro section heading -->
                            <slot name="vs-intro-heading" />
                        </VsHeading>
                        <!-- @slot Section for blog data -->
                        <slot name="vs-blog-data" />
                    </VsCol>
                </VsRow>
                <VsRow>
                    <VsCol
                        cols="12"
                        v-bind="contentColProps"
                    >
                        <VsRichTextWrapper variant="lead">
                            <!-- @slot Intro section content -->
                            <slot name="vs-intro-content" />
                        </VsRichTextWrapper>
                        <dl
                            class="list-inline"
                            v-if="$slots['vs-intro-start-finish'] && $slots['vs-intro-start-finish']()"
                        >
                            <!-- @slot Intro section start / finish text
                            (used for itineraries) -->
                            <slot name="vs-intro-start-finish" />
                        </dl>
                    </VsCol>

                    <!-- @slot Intro section summary box (used for itineraries) -->
                    <slot name="vs-intro-summary-box" />
                </VsRow>
            </VsContainer>
            <div
                class="vs-page-intro__lower py-9"
                v-if="$slots['vs-intro-lower'] && $slots['vs-intro-lower']()"
                data-test="vs-page-intro__lower"
            >
                <!-- @slot Lower intro section content -->
                <slot name="vs-intro-lower" />
            </div>
        </div>
    </div>
</template>

<script>
import VsHeading from '@components/heading/Heading.vue';
import VsRichTextWrapper from '@components/rich-text-wrapper/RichTextWrapper.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@components/grid';

/**
* Component for the page hero and introduction.
* Designed to be flexible so multiple designs of page intro
* can be accommodated.
*
* @displayName Page Intro
*/

export default {
    name: 'VsPageIntro',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsRichTextWrapper,
        VsContainer,
        VsRow,
        VsCol,
    },
    props: {
        /**
        * Background theme
        */
        background: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey)/),
        },
        /**
        * Option for an intro to be used on simple page type
        */
        heroIntro: {
            type: Boolean,
            default: false,
        },
        /**
        * Identifies the hero as an itinerary
        */
        isItinerary: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        introClasses() {
            return [
                `vs-page-intro--${this.background}`,
                this.heroIntro ? 'vs-page-intro--hero' : '',
            ];
        },
        contentColProps() {
            const props = {
            };

            if (this.isItinerary) {
                props.md = '6';
                props.lg = '5';
                props.xl = '6';
                props['offset-lg'] = '1';
            } else if (this.heroIntro) {
                props.md = '12';
                props.lg = '7';
                props.xl = '8';
                props['offset-lg'] = '1';
            } else {
                props.md = '8';
            }

            return props;
        },
    },
};
</script>

<style lang="scss">
.vs-page-intro {
    &__wrapper {
        position: relative;
        background: $vs-color-background-inverse;

        @include media-breakpoint-up(lg) {
            background: transparent;
            width: 100%;
            max-width: 960px;
            margin-right: auto;
            margin-left: auto;
        }

        @include media-breakpoint-up(xl) {
            max-width: 1140px;
        }

        @include media-breakpoint-up(xxl) {
            max-width: 1340px;
        }

        > .container {
            background: $vs-color-background-inverse;
            padding-bottom: $spacer-8;

            @include media-breakpoint-up(lg) {
                padding-bottom: $spacer-9;
            }
        }
    }

    &__share {
        position: absolute;
        top: $spacer-3;
        right: $spacer-1;

        @include media-breakpoint-up(sm) {
            top: $spacer-4;
            right: $spacer-4;
        }

        @include media-breakpoint-up(lg) {
            top: 7.2rem;
        }
    }

    &--hero {
        .vs-page-intro {
            &__share {
                @include media-breakpoint-up(lg) {
                    top: $spacer-10;
                }
            }

            &__wrapper {
                @include media-breakpoint-up(lg) {
                    margin-top: -240px;
                }
            }
        }

        .vs-hero {
            margin-bottom: $spacer-0;

            .vs-caption {
                @include media-breakpoint-up(lg) {
                    bottom: 200px;
                }

                // IE11 - force min width of hero caption
                @media screen and (-ms-high-contrast: active),
                screen and (-ms-high-contrast: none) {
                    min-width: 200px;
                }
            }
        }

        .vs-image-with-caption--hero {
            @include media-breakpoint-up(lg) {
                img {
                    min-height: 101%;
                    position: absolute;
                    transform: translateY(-50%);
                    top: 50%;
                }
            }
        }
    }

     &__breadcrumb {
        margin-top: $spacer-3;
    }

    &__lower,
    &__lower .row {
        background-color: $vs-color-background-information;
    }

    &--grey {
        background: $vs-color-background-information;
    }
}
</style>
