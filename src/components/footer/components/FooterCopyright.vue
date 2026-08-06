<template>
    <div
        class="vs-footer-copyright"
        data-unique-id="vs-footer-sub_footer"
        data-test="vs-footer-copyright"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    class="text-center"
                >
                    <VsLink 
                        class="vs-footer-copyright__logo mb-050"
                        data-test="vs-footer-copyright-logo"
                        variant="on-dark"
                        :href="href"
                    >
                        <span
                            class="visually-hidden"
                            data-test="link-alt-text"
                        >
                            {{ linkAltText }}
                        </span>
                        <VsImg :src="brandscotlandLogo" />
                    </VsLink>

                    <p class="vs-footer-copyright__text">
                        &copy; {{ getCurrentYear }}

                        <!-- @slot contains translated copyright text -->
                        <slot name="copyright" />
                    </p>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import VsImg from '@/components/img/Img.vue';
import VsLink from '@/components/link/Link.vue';
import {
    VsRow, VsContainer, VsCol,
} from '@/components/grid';
import brandscotlandLogo from '@/assets/svg/brandscotland-logo.svg';

/**
 * The VsFooterCopyright holds an image and copyright notices for the footer.
 *
 * @displayName Footer Copyright
 */

export default {
    name: 'VsFooterCopyright',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsRow,
        VsContainer,
        VsCol,
        VsImg,
        VsLink,
    },
    props: {
        /**
         * Accessiblity alt text for the logo button
         */
        linkAltText: {
            type: String,
            required: true,
        },
        /**
         * URL for the logo button
         */
        href: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            currentYear: '',
            brandscotlandLogo,
        };
    },
    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style lang="scss">
.vs-footer-copyright {
    border-top: $vs-border-width-sm solid $vs-color-border-inverse;
    padding: $vs-spacer-150 0;

    .vs-footer-copyright__logo {
        display: inline-block;

        img {
            width: 166px;
        }

        &.vs-link{
            &:focus {
                @extend %outline-link-focus-dark;
            }
        }
    }

    .vs-footer-copyright__text {
        color: $vs-color-text-inverse;
        margin: 0;
        font-size: $font-size-2;

        @include media-breakpoint-up(lg) {
            font-size: $font-size-3;
        }

        @include media-breakpoint-up(xl) {
            font-size: $font-size-4;
        }
    }
}
</style>
