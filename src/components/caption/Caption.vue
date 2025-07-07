<template>
    <div
        data-test="vs-caption"
        class="vs-caption"
        :class="captionClasses"
    >
        <VsContainer>
            <VsRow class="justify-content-center justify-content-sm-start">
                <VsCol
                    class="order-2 order-sm-1"
                    :class="[!showMap ? 'align-self-center' : '']"
                >
                    <div class="vs-caption__caption-info">
                        <p
                            class="vs-caption__image-caption"
                            v-if="!!$slots.caption"
                        >
                            <!-- @slot Slot to display caption  -->
                            <slot name="caption" />
                        </p>

                        <p
                            class="vs-caption__image-credit"
                            v-if="!!$slots.credit"
                        >
                            <!-- @slot Slot to display credit  -->
                            <slot name="credit" />
                        </p>
                    </div>
                </VsCol>
                <VsCol
                    class="col-12 col-sm-auto order-1
                    order-sm-2 ps-sm-0 align-self-end
                    align-self-sm-start"
                    v-if="showMap && isLargeCaption"
                >
                    <div class="vs-caption__map-wrapper pt-075 pt-sm-050 pb-sm-050 mx-auto">
                        <VsCaptionImageMap
                            :latitude="latitude"
                            :longitude="longitude"
                            :map-outline-color="tokens['vs-color-icon-inverse']"
                            :map-marker-color="tokens['vs-color-background-accent-tolsta-40']"
                        />
                    </div>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsRow,
    VsCol,
    VsContainer,
} from '@/components/grid';
import designTokens from '@/assets/tokens/tokens.json';
import VsCaptionImageMap from './components/CaptionImageMap.vue';

/**
 * Captions are used to briefly describe an image or other media such as a video.
 *
 * @displayName Caption
 */
export default {
    name: 'VsCaption',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsRow,
        VsCol,
        VsContainer,
        VsCaptionImageMap,
    },
    props: {
        /**
         * Option to choose which variant to show
         * `fullwidth, large`
         */
        variant: {
            type: String,
            default: 'fullwidth',
            validator: (value) => value.match(/(fullwidth|large)/),
        },
        /**
         * Colour theme of the caption
         * `bold, subtle`
         */
        theme: {
            type: String,
            default: 'bold',
            validator: (value) => value.match(/(bold|subtle)/),
        },
        /**
         * The image latitude
         */
        latitude: {
            type: String,
            default: '',
        },

        /**
         * The image longitude
         */
        longitude: {
            type: String,
            default: '',
        },

        /**
         * Option to choose text alignment
         * `left, right`
         */
        textAlign: {
            type: String,
            default: 'left',
            validator: (value) => value.match(/(left|right)/),
        },
    },
    data() {
        return {
            tokens: designTokens,
        };
    },
    computed: {
        showMap() {
            return !!(this.longitude && this.latitude);
        },
        isLargeCaption() {
            return this.variant === 'large';
        },
        captionClasses() {
            return [
                {
                    'vs-caption--large': this.isLargeCaption,
                    'vs-caption--fullwidth': !this.isLargeCaption,
                },
                `vs-caption--${this.textAlign}`,
                `vs-caption--${this.theme}`,
            ];
        },
    },
};
</script>

<style lang="scss">
.vs-caption {

    &--bold {
        background-color: $vs-color-background-bold;
        color: $vs-color-text-inverse;
    }

    &--subtle {
        background-color: transparent;
        color: $vs-color-text-tertiary;
    }

    &--large,
    &--fullwidth {
        position: relative;

        @include media-breakpoint-up(sm) {
            display: block;
        }

        > .row {
            margin: 0 auto;
        }
        .vs-caption{
            &__image-caption {
                margin-bottom: $spacer-050;
            }

            &__map-wrapper {
                max-width: 54px;
            }
        }
    }

    &--fullwidth{
        @include media-breakpoint-up(sm) {
            width: 100%;
            height: auto;
            min-height: 64px;
            text-align: left;
        }
        .vs-caption__caption-info{
            padding: $spacer-075 0;
        }
    }

    &--large {
        text-align: center;

        @include media-breakpoint-up(sm) {
            width: 310px;
            height: auto;
            min-height: 96px;
            text-align: left;

            > .row {
                margin: 0 -16px;
            }

            .vs-caption{
                &__image-caption {
                   margin-bottom: $spacer-200;
                }

                &__map-wrapper {
                    max-width: 60px;
                }
            }
        }

        .vs-caption__caption-info{
            padding: $spacer-100 0;
        }
    }

    &__image-caption,
    &__image-credit {
        font-size: $font-size-3;
        line-height: $line-height-standard;
    }

    &__image-caption {
        font-weight: $vs-font-weight-medium;
    }

    &__image-credit {
        font-weight: $vs-font-weight-subtle;
        margin-bottom: $spacer-0;
    }

    @include media-breakpoint-up(md) {
        &--right {
            .vs-caption__caption-info{
                text-align: right;
            }
        }
    }

}

@include no-js {
    .vs-image-with-caption__caption-wrapper{
        @include media-breakpoint-down(sm) {
            .vs-caption{
                &--large {
                    position: relative;
                    top: 0;
                    width: 100%;
                    height: auto;
                    text-align: left;
                    display: block;

                    .order-2 {
                        order: 1;
                    }

                    .order-1 {
                        order: 2;
                        flex: 0 0 auto;
                        width: auto;
                        max-width: 100%;
                        align-self: auto!important;
                    }

                    .vs-caption{
                        &__map-wrapper {
                            padding-top: 0!important;
                        }

                        &__image-caption {
                            margin-bottom: $spacer-125;
                        }

                        &__caption-info{
                            padding: $spacer-075 $spacer-050;
                        }
                    }
                }
            }
        }

        .vs-caption{
            &--large,
            &--fullwidth {
                @include media-breakpoint-down(sm) {
                    position: relative;
                }
            }

            &--fullwidth {
                display: block;
                text-align: left;
            }
        }
    }
}
</style>
