<template>
    <div
        class="vs-canned-search-summary-box"
        :disabled="!slideVisible() ? true : false"
    >
        <VsContainer>
            <VsRow
                v-if="$slots['vs-canned-search-summary-top'] && $slots['vs-canned-search-summary-top']()"
            >
                <VsCol
                    cols="12"
                    class="vs-canned-search-summary-box__summary-item"
                >
                    <!--
                        @slot Holds the content for the wider optional item in the grey
                        summary box  at the bottom of the card, usually a
                        vsCannedSearchDates

                        Expects html
                    -->
                    <slot
                        name="vs-canned-search-summary-top"
                    />
                </VsCol>
            </VsRow>
            <VsRow
                class="row--tall"
            >
                <VsCol
                    class="vs-canned-search-summary-box__summary-item"
                    v-if="$slots['vs-canned-search-summary-left'] && $slots['vs-canned-search-summary-left']()"
                >
                    <!--
                        @slot Holds the content for the first optional item in the grey
                        summary box  at the bottom of the card, usually a
                        vsCannedSearchPrice

                        Expects html
                    -->
                    <slot
                        name="vs-canned-search-summary-left"
                    />
                </VsCol>
                <VsCol
                    class="vs-canned-search-summary-box__summary-item"
                    v-if="$slots['vs-canned-search-summary-centre'] && $slots['vs-canned-search-summary-centre']()"
                >
                    <!--
                        @slot Holds the content for the second optional item in the grey
                        summary box  at the bottom of the card, usually a duration

                        Expects html
                    -->
                    <slot
                        name="vs-canned-search-summary-centre"
                    />
                </VsCol>
                <VsCol
                    class="vs-canned-search-summary-box__summary-item"
                    v-if="linkHref"
                >
                    <VsLink
                        data-test="vs-canned-search-summary-box__link"
                        :href="linkHref"
                        :type="linkType.toLowerCase()"
                        :disabled="!slideVisible()"
                    >
                        {{ linkLabel }} <span class="visually-hidden">: {{ linkTitle }}</span>
                    </VsLink>
                </VsCol>
            </VsRow>
        </VsContainer>
    </div>
</template>

<script>
import {
    VsContainer, VsRow, VsCol,
} from '@/components/grid';
import VsLink from '@/components/link/Link.vue';

/**
* Component that displays a grey summary box for product cards within canned
* search. Contains a series of summary items
*
* @displayName Canned Search Summary Box
*/

export default {
    name: 'VsCannedSearchSummaryBox',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsLink,
    },
    inject: ['slideVisible'],
    props: {
        /**
        * The href of a product link, should match the website on the
        * parent product card
        */
        linkHref: {
            type: String,
            default: '',
        },
        /**
        * The label of the product link
        */
        linkLabel: {
            type: String,
            default: '',
        },
        /**
        * The link type for the product link
        */
        linkType: {
            type: String,
            default: '',
        },
        /**
        * The title for the product link
        */
        linkTitle: {
            type: String,
            default: '',
        },
    },
};

</script>

<style lang="scss">
    .vs-canned-search-summary-box {
        padding: $spacer-050;
        background-color: $vs-color-background-secondary;
        min-height: 4.5rem;

        .row {
            min-height: $spacer-300;

            &--tall {
                min-height: 4.75rem;
            }

            .vs-canned-search-summary-box__summary-item {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .vs-canned-search-summary-box__summary-item {
        font-size: $font-size-4;
        text-align: center;

        &:not(:last-child) {
            border-right: 1px solid $vs-color-border-secondary;
        }
    }
</style>
