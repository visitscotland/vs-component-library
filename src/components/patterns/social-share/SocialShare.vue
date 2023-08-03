<template>
    <div
        class="vs-social-share"
        data-test="vs-social-share"
        :class="noJs ? 'vs-module-wrapper__outer--hidden' : 'vs-module-wrapper__outer--light'"
        ref="socialShareContainer"
    >
        <VsButton
            icon-with-text
            class="vs-social-share__share-btn"
            variant="transparent"
            icon="share"
            :id="`vs-social-share-popover--${id}`"
            v-if="!noJs"
            ref="shareButton"
        >
            {{ shareBtnText }}
        </VsButton>

        <BPopover
            custom-class="vs-social-share__popover"
            :target="`vs-social-share-popover--${id}`"
            :click="true"
            container="body"
            placement="left-end"
            @shown="onShown"
            @hidden="onHidden"
            @hide="onHide"
            ref="popover"
            v-if="!noJs"
        >
            <VsHeading
                thin
                level="3"
                tabindex="0"
                ref="shareHeader"
                class="vs-social-share__header"
                @keydown.tab="tabBackFromHidden($event)"
            >
                {{ sharePopoverTitle }}
            </VsHeading>

            <VsRow ref="popoverShareRow">
                <!-- @slot Default slot for SocialShareItems -->
                <slot :on-copy-link="onCopyLink" />
            </VsRow>

            <VsButton
                icon-only
                class="vs-social-share__close-btn"
                icon="close"
                size="lg"
                variant="transparent"
                ref="closeButton"
                @click="onClose"
                @keydown.tab="tabFromClose($event)"
            >
                <span class="sr-only">
                    {{ closeAltText }}
                </span>
            </VsButton>
        </BPopover>

        <VsModuleWrapper
            v-if="noJs"
            class="vs-social-share--module-list"
        >
            <VsContainer>
                <VsRow>
                    <VsCol cols="12">
                        <VsHeading
                            thin
                            level="2"
                            override-style-level="3"
                            class="mb-9 mt-0"
                        >
                            {{ sharePopoverTitle }}
                        </VsHeading>
                    </VsCol>
                </VsRow>
                <VsRow class="justify-content-center">
                    <!-- @slot Default slot for SocialShareItems -->
                    <slot />
                </VsRow>
            </VsContainer>
        </VsModuleWrapper>
    </div>
</template>

<script>
import VsButton from '@components/elements/button/Button.vue';
import VsHeading from '@components/elements/heading/Heading.vue';
import VsModuleWrapper from '@components/patterns/module-wrapper/ModuleWrapper.vue';
import {
    VsRow, VsContainer, VsCol,
} from '@components/elements/grid';
import { BPopover } from 'bootstrap-vue-next';

/**
 * This component includes a popover to share content to social
 * media channels.
 *
 * @displayName Social Share Button
 */
export default {
    name: 'VsSocialShare',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsHeading,
        VsModuleWrapper,
        BPopover,
        VsRow,
        VsContainer,
        VsCol,
    },
    /**
     * Provides the URL properties to be injected into child component 'SocialShareItem'
     */
    provide() {
        return {
            referringPageUrl: this.pageUrl,
            pageTitle: this.pageTitle,
            noJs: this.noJs,
        };
    },
    props: {
        /**
         * Text to display on share button
         */
        shareBtnText: {
            type: String,
            required: true,
        },
        /**
         * Title text for popover
         */
        sharePopoverTitle: {
            type: String,
            required: true,
        },
        /**
         * Page URL to share
         */
        pageUrl: {
            type: String,
            required: true,
        },
        /**
         * Page Title to include in share link
         */
        pageTitle: {
            type: String,
            default: '',
        },
        /**
         * Accessiblity alt text for the close button
         */
        closeAltText: {
            type: String,
            required: true,
        },
        /**
         * Unique element ID
         */
        id: {
            type: String,
            required: true,
        },
        /**
         * Displays in a list instead of a popover
         */
        noJs: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            copyLink: false,
        };
    },
    methods: {
        /**
         * Closes popover on close button click
         */
        onClose(event) {
            this.$refs.popover.hideFn(event);
        },
        /**
         * When popover is shown, focuses on the first share button
         */
        onShown() {
            this.focusFirst();
        },
        /**
         * When popover is hidden, focuses back on share button
         */
        onHidden() {
            this.focusRef(this.$refs.shareButton);
        },
        onHide(bvEvent) {
            if (this.copyLink) {
                bvEvent.preventDefault();
                this.focusFirst();
                this.copyLink = false;
            }
        },
        onCopyLink() {
            this.copyLink = true;
        },
        /**
         * Wait for the popover to be rendered then focus on a given element by ref
         */
        focusRef(ref) {
            this.$nextTick(() => {
                this.$nextTick(() => {
                    ;(ref.$el || ref).focus();
                });
            });
        },
        /**
         * Wait for the popover to be rendered then focus on the first share button
         */
        focusFirst() {
            this.$nextTick(() => {
                this.$nextTick(() => {
                    const shareButtonRow = this.$refs.popoverShareRow.$el;
                    shareButtonRow.querySelector('.vs-social-share-item a ').focus();
                });
            });
        },
        /**
         * When tabbing forward from the close button, trap focus within the modal
         * and loop back to the start
         */
        tabFromClose(event) {
            // Only loop round if tabbing forwards
            if (!event.shiftKey) {
                event.preventDefault();
                this.focusFirst();
            }
        },
        /**
         * When tabbing backwards from the header element, trap focus within the modal
         * and loop back to the close button
         */
        tabBackFromHidden(event) {
            // Only loop round if tabbing backwards
            if (event.shiftKey) {
                event.preventDefault();
                this.focusRef(this.$refs.closeButton);
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-social-share {
        &--module-list {
            display: none;
        }

        &__popover {
            max-width: 600px;
            width: 96% !important;
            font-size: inherit;
            text-align: center;
            border: 0;
            top: 60px !important;
            left: unset !important;
            right: 10px;

            .arrow {
                display: none;
            }

            &.bs-popover-right {
                margin-left: 0;
            }

            .hidden-anchor {
                position: absolute;
                left: 0;
                top: 0;
                width: 0px;
                height: 0px;
                border: none;
                background: transparent !important;

                &:focus {
                    outline: none;
                    border: 0;
                }
            }

            @include media-breakpoint-up(sm) {
                max-width: 450px;
                width: 450px !important;
                box-shadow: -25px 25px 20px 1px rgba(0, 0, 0, 0.1);
                right: 50px !important;
            }

            @include media-breakpoint-up(md) {
                max-width: 600px;
                width: 600px !important;
                top: 60px !important;
            }

            @include media-breakpoint-up(lg) {
                max-width: 700px;
                width: 700px !important;
            }

            @include media-breakpoint-up(xl) {
                max-width: 800px;
                width: 800px !important;
            }

            .popover-body {
                padding: $spacer-8 $spacer-2;

                @include media-breakpoint-only(sm) {
                    padding: $spacer-4 $spacer-7 $spacer-8;

                    .row {
                        margin-right: -4px;
                        margin-left: -4px;

                        > [class*=col-] {
                            padding-right: 4px;
                            padding-left: 4px;
                        }
                    }
                }

                @include media-breakpoint-up(md) {
                    padding: $spacer-9;
                }

                @include media-breakpoint-up(xl) {
                    padding: $spacer-9 $spacer-12;
                }

                h3.vs-heading {
                    margin-bottom: $spacer-9;
                }
            }
        }

        &__header {
            &:focus {
                outline: none;
            }
        }

        &__close-btn {
            position: absolute;
            right: $spacer-4;
            top: $spacer-4;
        }
    }

    @include no-js {
        .vs-social-share {
            &--module-list {
                display: block;
            }

            &__share-btn {
               display: none;
            }

            &__popover {
                position: relative !important;
                display: block !important;
                opacity: $opacity-100 !important;
                outline: 0 !important;
            }
        }
    }
</style>
