<template>
    <VsContainer
        class="vs-footer-nav-list"
        data-test="vs-footer-nav-list"
    >
        <LazyHydrationWrapper :on-interaction="['focus', 'click']">
            <div class="vs-footer-nav-list">
                <VsAccordion :break-point="breakPoint">
                    <VsRow>
                        <!-- @slot Default slot to contain Accordion Items in the footer -->
                        <slot />
                    </VsRow>
                </VsAccordion>
            </div>
        </LazyHydrationWrapper>
    </VsContainer>
</template>

<script>
import VsAccordion from '@components/accordion/Accordion.vue';
import { VsRow, VsContainer } from '@components/grid';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

/**
 * The FooterNavList is a set of menu items used for
 * separate list of links in the footer.
 *
 * @displayName Footer Nav List
 */

export default {
    name: 'VsFooterNavList',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsAccordion,
        VsRow,
        VsContainer,
        LazyHydrationWrapper,
    },
    props: {
        /**
         * If this is provided, the accordion expands above
         * the specified viewport `xs,sm, md, lg, xl, xxl`
         */
        breakPoint: {
            type: String,
            default: null,
            validator: (value) => value.match(/(xs|sm|md|lg|xl|xxl)/),
        },
    },
};
</script>

<style lang="scss">
.vs-footer-nav-list {
    @include media-breakpoint-down(sm) {
        &.container {
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
}
</style>
