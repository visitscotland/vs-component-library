<template>
    <div
        class="vs-footer-utility-list"
        data-test="vs-footer-utility-list"
        data-unique-id="vs-footer-utility_links"
    >
        <VsContainer>
            <VsRow>
                <VsCol
                    cols="12"
                    sm="7"
                    md="12"
                >
                    <VsList
                        unstyled
                        role="menu"
                    >
                        <!-- @slot The default slot is the content for the menu social items -->
                        <slot />
                    </VsList>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import VsList from '@/components/list/List.vue';
import {
    VsRow, VsContainer, VsCol,
} from '@/components/grid';

/**
 * The FooterUtilityList is a list of FooterNavListItems
 * that hold general utility links for the footer.
 *
 * @displayName Footer Utility List
 */

export default {
    name: 'VsFooterUtilityList',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsList,
        VsRow,
        VsContainer,
        VsCol,
    },
};
</script>

<style lang="scss">
.vs-footer-utility-list {
    border-top: $vs-border-width-sm solid $vs-color-border-inverse;

    @include media-breakpoint-down(sm) {
        .container {
            max-width: 100%;
        }
    }

    .vs-list--unstyled {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        padding: $vs-spacer-075;

        @include media-breakpoint-up(sm) {
            padding: $vs-spacer-075 $vs-spacer-150;
        }

        @include media-breakpoint-up(md) {
            padding: $vs-spacer-075 0;
        }

        @include media-breakpoint-up(lg) {
            justify-content: center;
            padding: $vs-spacer-200 0;
        }

        @include media-breakpoint-up(xl) {
            padding: $vs-spacer-300 0;
        }

        @include media-breakpoint-up(xxl) {
            justify-content: space-between;
            @supports not (-ms-ime-align: auto) {
                // See issue 2240 - on Edge space-evenly is supported in grid but not in flexbox.
                // This means that if we only target space-evenly here without this supports
                // it falls back to center rather than to space-between and looks very incorrect.
                justify-content: space-evenly;
            }
            padding: $vs-spacer-300 0;
        }

        .vs-footer-nav-list-item {
            display: inline-block;
            font-size: $font-size-2;
            padding: $vs-spacer-075;
            flex: 1 0 50%;

            @include media-breakpoint-down(md) {
                &:nth-child(odd){
                    padding-left: 0;
                }
            }

            @include media-breakpoint-up(sm) {
                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    padding-right: 0;
                }
            }

            @include media-breakpoint-up(md) {
                flex: none;
            }
            @include media-breakpoint-up(xl) {
                font-size: $font-size-4;
            }
        }
    }
}
</style>
