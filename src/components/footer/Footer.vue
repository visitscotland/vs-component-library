<template>
    <footer
        class="vs-footer pt-150 pt-md-300"
        data-unique-id="vs-footer"
        id="site-footer"
    >
        <VsFooterNavList break-point="md">
            <!-- @slot Contains accordion item for each menu list  -->
            <slot name="accordion-items" />

            <VsCol
                cols="12"
                lg="3"
                xl="2"
                class="d-none d-lg-block"
                data-unique-id="vs-footer-social_links"
            >
                <!-- @slot Contains social menu for large screens  -->
                <slot name="social-menu" />
            </VsCol>
        </VsFooterNavList>

        <div class="vs-footer__social-menu-wrapper">
            <VsContainer>
                <VsRow>
                    <VsCol
                        cols="12"
                        class="d-block d-lg-none"
                        data-unique-id="vs-footer-mobile_social_links"
                    >
                        <!-- @slot Contains social menu for screens medium and below -->
                        <slot name="social-menu" />
                    </VsCol>
                </VsRow>
            </VsContainer>
        </div>

        <slot />
    </footer>
</template>

<script>
import VsFooterNavList from '@/components/footer/components/FooterNavList.vue';
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';

/**
 * This component is the main Footer wrapper for the bottom of the page.
 *
 * @displayName Footer
 */
export default {
    name: 'VsFooter',
    status: 'prototype',
    release: '0.1.0',
    components: {
        VsFooterNavList,
        VsCol,
        VsContainer,
        VsRow,
    },
};
</script>

<style lang="scss">
.vs-footer {
    background: $vs-color-background-bold;

    .vs-footer__social-menu-wrapper {
        border-top: 1px solid $vs-color-border-inverse;

        @include media-breakpoint-down(md) {
            .container {
                max-width: 100%;
                padding: 0;

                .row {
                    margin-right: 0;
                    margin-left: 0;

                    > .col,
                    > [class*="col-"] {
                        padding-right: 0;
                        padding-left: 0;
                    }
                }
            }
        }

        @include media-breakpoint-up(lg) {
            border-top: 0 !important;
        }
    }
}
</style>
