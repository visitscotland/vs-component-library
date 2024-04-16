<template>
    <div
        class="vs-megalink-single-image"
        :class="singleImageClasses"
        data-test="megalink-single-image"
        :style="cssVars"
    >
        <div class="vs-megalink-single-image__image-container">
            <!-- @slot Slot for main image -->
            <slot
                name="vs-single-image"
            />
        </div>

        <VsRow
            class="vs-megalink-single-image__text-container"
        >
            <VsCol
                cols="12"
                sm="10"
                lg="6"
                class="offset-sm-1"
                :class="alternate ? 'offset-lg-6' : 'offset-lg-0'"
            >
                <div
                    class="vs-megalink-single-image__content"
                    data-test="megalink-single-image__content"
                >
                    <VsHeading
                        level="3"
                        v-if="title"
                        class="vs-megalink-single-image__title"
                        data-test="megalink-single-image__title"
                    >
                        {{ title }}
                    </VsHeading>
                    <VsRichTextWrapper variant="lead">
                        <!-- @slot Slot for content -->
                        <slot name="vs-single-image-content" />
                    </VsRichTextWrapper>

                    <VsLinkList>
                        <!-- @slot Slot for links list -->
                        <slot name="vs-single-image-links" />
                    </VsLinkList>

                    <div class="vs-megalink-single-image__button">
                        <VsButton
                            :href="buttonLink"
                            variant="secondary"
                            v-if="buttonLink"
                        >
                            <!-- @slot Slot for button text -->
                            <slot name="vs-single-image-button-text" />
                        </VsButton>
                    </div>
                </div>
            </VsCol>
        </VsRow>
    </div>
</template>

<script>
import VsHeading from '@components/heading/Heading.vue';
import VsRichTextWrapper from '@components/rich-text-wrapper/RichTextWrapper.vue';
import VsButton from '@components/button/Button.vue';
import VsLinkList from '@components/link-list/LinkList.vue';
import { VsRow, VsCol } from '@components/grid';

/**
 * This component is a variant of the megalinks component with a large image
 * and an overlaid panel containing content.
 *
 * @displayName Megalinks Single Image
 */

export default {
    name: 'VsMegalinkSingleImage',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsRichTextWrapper,
        VsButton,
        VsRow,
        VsCol,
        VsLinkList,
    },
    props: {
        /**
        * Alternate layout with image and text switched sides
        */
        alternate: {
            type: Boolean,
            default: false,
        },
        /**
        * Component title
        */
        title: {
            type: String,
            default: null,
        },
        /**
        * Button url
        */
        buttonLink: {
            type: String,
            default: '',
        },
        /**
        * The component theme
        */
        theme: {
            type: String,
            default: 'light',
            validator: (value) => value.match(/(light|grey)/),
        },
    },
    data() {
        return {
            negativeMargin: '200px',
            imageHeight: '400px',
        };
    },
    computed: {
        singleImageClasses() {
            return [
                `vs-megalink-single-image--${this.theme}`,
                this.alternate ? 'vs-megalink-single-image--alternate' : '',
            ];
        },
        cssVars() {
            return {
                // How much negative vertical margin to add to the image with
                // caption. Defaults to 200px.
                '--negative-margin': `-${this.negativeMargin}`,
                '--image-height': `${this.imageHeight}`,
            };
        },
    },
    // Once the image has loaded (accounting for lazy load), calculate its aspect
    // ratio and what percent of the element width to offset the caption by to
    // place it half way up the image
    mounted() {
        const imgWithCaption = this.$el.querySelector('.vs-image-with-caption');

        if (imgWithCaption) {
            const img = imgWithCaption.querySelector('img');

            img.addEventListener('load', () => {
                const offsetPercentToMiddle = img.clientHeight / 2 / img.clientWidth;
                this.negativeMargin = `${offsetPercentToMiddle * 100}%`;
                this.imageHeight = `${img.clientHeight}px`;
            });
        }
    },
};
</script>

<style lang="scss">
    .vs-megalink-single-image {
        --negative-margin: -200px;
        --image-height: 400px;
        min-width: 100%;

        .vs-megalink-single-image__title {
            margin-bottom: $spacer-8;
            margin-top:0;
        }

        .vs-megalink-single-image__content {
            position: relative;
            z-index: 10;
            background-color: $vs-elevation-surface-raised;
            box-shadow: $vs-elevation-shadow-raised;
            margin: $spacer-0 $spacer-3;
            padding: $spacer-8 $spacer-6;
            clear: both;

            p {
                margin-bottom: $spacer-4;
            }

            @include media-breakpoint-up(sm) {
                background-color: $vs-color-background-inverse;
                box-shadow: none;
            }

            @include media-breakpoint-up(lg) {
                background-color: $vs-elevation-surface-raised;
                box-shadow: $vs-elevation-shadow-raised;
            }
        }

        .vs-megalink-single-image__link-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .vs-megalink-single-image__link-list-item {
            margin-top: $spacer-4;
            font-size: $font-size-5;

            &:first-of-type {
                margin-bottom: $spacer-0;
            }
        }

        .vs-image-with-caption {
            overflow: hidden;
            margin: 0 -12px (-$spacer-8);
        }

        .vs-megalink-single-image__button {
            margin-top: $spacer-7;
        }

        @include media-breakpoint-up(sm) {
            margin: 0;

            .vs-image-with-caption {
                margin-bottom: 0;
            }

            .vs-megalink-single-image__content {
                background: transparent;
            }
        }

        @include media-breakpoint-up(lg) {
            width: 100%;
            margin: 0 0 $spacer-11;
            display: flex;
            flex-direction: column;

            .vs-megalink-single-image__text-container {
                min-height: calc((var(--image-height) / 2) + 4rem);
            }

            .vs-megalink-single-image__content {
                min-height: 100%;
                padding: $spacer-9 $spacer-9 $spacer-9 $spacer-9;
                margin: 0;
                background: $color-white;
            }

            .vs-megalink-single-image__image-container {
                width: 66%;
                align-self: flex-end;
            }

            .vs-image-with-caption {
                width: 100%;
                margin: 0 0 calc(var(--negative-margin) - #{$spacer-10});
            }

            &--alternate {
                .vs-megalink-single-image__image-container {
                    align-self: flex-start;
                }

                .vs-megalink-single-image__content {
                    align-self: flex-end;
                }
            }
        }

        @include media-breakpoint-up(xl) {
            .vs-megalink-single-image__content {
                padding: $spacer-9 $spacer-12 $spacer-9 $spacer-9;
            }
        }
    }
</style>
