<template>
    <div
        v-if="showBanner"
        class="vs-banner"
        data-test="vs-banner"
        role="banner"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="11"
                    class="vs-banner__content-wrapper"
                >
                    <VsRow>
                        <VsCol
                            cols="1"
                            class="vs-banner__icon-wrapper"
                        >
                            <VsIcon
                                size="sm"
                                icon="vs-icon-feedback-warning"
                                class="vs-banner__icon"
                            />
                        </VsCol>
                        <VsCol
                            cols="11"
                        >
                            <VsBody
                                class="vs-banner__text"
                                v-if="!!$slots['banner-text'] || !!$slots['banner-cta']"
                            >
                                <!-- @slot Slot to contain banner text -->
                                <slot name="banner-text" />

                                <span
                                    class="vs-banner__cta-link"
                                    v-if="!!$slots['banner-cta']"
                                >
                                    <!-- @slot Slot to contain CTA link -->
                                    <slot name="banner-cta" />
                                </span>
                            </VsBody>
                        </VsCol>
                    </VsRow>
                </VsCol>
                <VsCol
                    cols="1"
                >
                    <VsButton
                        class="vs-banner__close-btn"
                        data-test="vs-banner__close-btn"
                        variant="subtle"
                        icon="vs-icon-control-dismiss"
                        size="md"
                        icon-only
                        @click="hideBanner"
                    >
                        {{ closeBtnText }}
                    </VsButton>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import VsButton from '@/components/button/Button.vue';
import VsBody from '@/components/body/Body.vue';
import VsIcon from '@/components/icon/Icon.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';
import cookieMixin from '../../mixins/cookieMixin';

/**
 * A banner used globally at the top of a page to display
 * important information.
 *
 * @displayName Banner
 */

export default {
    name: 'VsBanner',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
        VsContainer,
        VsRow,
        VsCol,
        VsBody,
        VsIcon,
    },
    mixins: [
        cookieMixin,
    ],
    props: {
        /**
         * Accessible text for close button
         */
        closeBtnText: {
            type: String,
            required: true,
        },
        /**
         * Set to false to let the banner show again on page refresh
         */
        dontShowAgain: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            showBanner: true,
        };
    },
    mounted() {
        // Check if cookie exists and hides banner if true
        const cookieExists = this.cookieExists('vs_showbanner');
        this.showBanner = !cookieExists;
    },
    methods: {
        /**
         * Hides banner from view
         */
        hideBanner() {
            this.showBanner = !this.showBanner;

            if (this.dontShowAgain) {
                this.setHiddenCookie();
            }
        },
        /**
         * Sets cookie to hide the banner for the user's session
         */
        setHiddenCookie() {
            const cookieExists = this.cookieExists('vs_showbanner');
            this.setCookie('vs_showbanner', this.showBanner, !cookieExists, true);
        },
    },
};
</script>

<style lang="scss">
.vs-banner {
    background: $vs-color-background-information;
    padding: $spacer-075 0;

    &__icon-wrapper{
        @include media-breakpoint-up(md) {
            padding-right: 0;
            flex: 0 0 6%;
            max-width: 6%;
        }

        @include media-breakpoint-up(lg) {
            display: inline-flex;
            align-items: center;
            flex: 0 0 5%;
            max-width: 5%;
        }

        @include media-breakpoint-up(xl) {
            flex: 0 0 4%;
            max-width: 4%;
        }
    }

    &__content-wrapper{
        align-self: center;
    }

    &__icon{
        display: inline-block;

        @include media-breakpoint-up(sm) {
            margin-right: $spacer-075;

            &.vs-icon.vs-icon--size-sm {
                font-size: 24px;
            }
        }
    }

    &__title.vs-heading {
        margin-bottom: $spacer-050;

        .vs-icon {
            vertical-align: bottom;
            margin-right: $spacer-025;
        }
    }

    &__text.vs-body--normal {
        display: inline-block;
        padding-left: $spacer-025;

        @include media-breakpoint-up(sm) {
            padding-left: 0;
        }

        p {
            display: inline;

            &:last-of-type{
                margin-bottom: $spacer-050;
            }
        }
    }

    &__text.vs-body--normal,
    &__cta-link {
        font-size: $font-size-3;

        @include media-breakpoint-up(sm) {
            font-size: $font-size-4;
        }
    }

    &__close-btn.vs-button.vs-button--icon-only.btn-md {
        float: right;
    }
}
</style>
