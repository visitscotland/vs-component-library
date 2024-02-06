<template>
    <VsRow data-test="vs-experiences-calculator-results">
        <VsCol cols="12">
            <VsHeading
                level="2"
            >
                {{ labelsMap.results }}
            </VsHeading>
        </VsCol>
        <VsCol cols="12">
            <VsRow
                class="vs-experiences-calculator-results__summary"
            >
                <VsCol
                    cols="12"
                    md="6"
                >
                    <div
                        class="vs-experiences-calculator-results__headline"
                    >
                        <p class="mb-2">
                            {{ labelsMap.resultsIntro }}
                        </p>
                    </div>
                </VsCol>
            </VsRow>
        </VsCol>
    </VsRow>
</template>

<script>
import { VsCol, VsRow } from '@components/grid';
import VsHeading from '@components/heading/Heading.vue';
import dataLayerMixin from '@/mixins/dataLayerMixin';

/**
 * @displayName Experiences Form Results
 */
export default {
    name: 'VsExperiencesCalculatorResults',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsHeading,
    },
    mixins: [
        dataLayerMixin,
    ],
    inject: ['labelsMap'],
    methods: {
        responsiveMargin(width) {
            if (width > 300) {
                return {
                    left: 20,
                    top: 20,
                    right: 20,
                    bottom: 20,
                };
            }

            return {
                left: 5,
                top: 5,
                right: 5,
                bottom: 5,
            };
        },
    },
};
</script>

<style lang='scss'>
    .vs-experiences-calculator-results__summary {
        margin-bottom: $spacer-8;
    }

    .vs-experiences-calculator-results__total {
        font-size: $font-size-10;
        font-weight: $font-weight-bold;
        margin-right: $spacer-2;
    }

    .vs-experiences-calculator-results__comp-img {
        display: flex;
        justify-content: center;

        .vs-img {
            height: 8rem;
        }
    }

    .vs-experiences-calculator-results__chart-wrapper {
        display: flex;
        justify-content: center;
        margin-top: $spacer-6;

        @include media-breakpoint-up(md) {
            margin-top: $spacer-7;
        }

        > div {
            width: 100%;

            @include media-breakpoint-up(md) {
                width: 75%;
            }

            @include media-breakpoint-up(lg) {
                width: 50%;
            }
        }

        .chart {
            &::before {
                content: var(--chart-label);
                position: absolute;
                top: 50%;
                text-align: center;
                left: -#{$spacer-9};
                transform: translateY(-50%) rotate(-90deg);

                @include media-breakpoint-up(md) {
                    max-width: 7rem;
                    left: -#{$spacer-12};
                    transform: translateY(-100%);
                }
            }

            text {
                font-size: $font-size-2;

                @include media-breakpoint-up(md) {
                    font-size: $font-size-4;
                }
            }
        }
    }

    .vs-experiences-calculator-results__chart {
        margin-bottom: $spacer-6;

        @include media-breakpoint-up(md) {
            margin-bottom: $spacer-10;
        }
    }

    .vs-experiences-calculator-results__unicorn {
        box-shadow: $shadow_card_tight;
        padding: $spacer-8 $spacer-4;
        background-color: $color-yellow-tint-6;
        margin-bottom: $spacer-8;

        .vs-heading {
            margin-top: 0;
        }

        .vs-experiences-calculator-results__unicorn-content {
            margin-bottom: $spacer-0;
        }

        .vs-experiences-calculator-results__unicorn-icon-container {
            display: inline-flex;
            justify-content: center;
            vertical-align: top;
            width: $spacer-10;

            .vs-icon {
                color: $color-pink;
            }
        }

        .vs-experiences-calculator-results__unicorn-content {
            display: inline-block;
            width: calc(100% - $spacer-10);
            vertical-align: top;
        }
    }
</style>
