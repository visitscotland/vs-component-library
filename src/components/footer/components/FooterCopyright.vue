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
                    <VsSvgLink
                        class="vs-footer-copyright__logo mb-4"
                        data-test="vs-footer-copyright-logo"
                        :link-alt-text="linkAltText"
                        :href="href"
                        svg-fill="#ffffff"
                        svg-path="brandscotland-logo"
                        link-variant="on-dark"
                    />

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
import VsSvgLink from '@components/svg-link/SvgLink.vue';

import {
    VsRow, VsContainer, VsCol,
} from '@components/grid';

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
        VsSvgLink,
        VsRow,
        VsContainer,
        VsCol,
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
    border-top: 1px solid $vs-color-border-inverse;
    padding: $spacer-6 0;

    .vs-footer-copyright__logo {
        display: inline-block;

        svg{
            width: 166px;
        }

        &.vs-link{
            &:focus {
                outline: 0;
                box-shadow: $vs-box-shadow-focus;
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
