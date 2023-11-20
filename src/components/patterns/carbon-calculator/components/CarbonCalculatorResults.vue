<template>
    <VsRow
        data-test="vs-carbon-calculator-results"
        :style="cssProps"
    >
        <VsCol cols="12">
            <VsHeading
                level="2"
            >
                {{ labelsMap.results }}
            </VsHeading>
        </VsCol>
        <VsCol cols="12">
            <VsRow
                class="vs-carbon-calculator-results__summary"
            >
                <VsCol
                    cols="12"
                    md="6"
                >
                    <div
                        class="vs-carbon-calculator-results__headline"
                    >
                        <p class="mb-2">
                            {{ labelsMap.resultsIntro }}
                        </p>
                        <p>
                            <span class="vs-carbon-calculator-results__total">
                                {{ totalKilos.toLocaleString(language, {
                                    minimumFractionDigits: 3,
                                }) }}
                            </span>
                            {{ labelsMap.kgsOf }}
                        </p>
                    </div>
                </VsCol>
                <VsCol
                    cols="12"
                    md="6"
                    class="vs-carbon-calculator-results__comparison"
                >
                    <!-- eslint-disable -->
                    <p
                        v-html="interpolComparison"
                    />
                    <!-- eslint-enable -->
                </VsCol>
            </VsRow>
        </VsCol>
        <VsCol
            cols="12"
            v-if="totalPerDay <= labelsMap.perDayTarget"
            class="vs-carbon-calculator-results__unicorn"
        >
            <div
                class="vs-carbon-calculator-results__unicorn-icon-container"
            >
                <VsIcon
                    name="unicorn"
                    size="lg"
                    class="vs-carbon-calculator-results__unicorn-icon"
                />
            </div>
            <div
                class="vs-carbon-calculator-results__unicorn-content"
            >
                <VsHeading
                    level="6"
                >
                    {{ labelsMap.perDayCongratulations }}
                </VsHeading>

                <p>
                    {{ interpolPerDaySuccess }}
                </p>
            </div>
        </VsCol>
        <VsCol>
            <VsHeading
                level="3"
                class="mt-0"
            >
                {{ labelsMap.chartTitle }}
            </VsHeading>
        </VsCol>
        <VsCol
            class="vs-carbon-calculator-results__chart-wrapper"
            cols="12"
        >
            <Responsive>
                <template #main="{ width }">
                    <Chart
                        class="vs-carbon-calculator-results__chart"
                        :size="{ width, height: 420 }"
                        :data="chartData"
                        :margin="responsiveMargin(width)"
                        :direction="chartDirection"
                        :axis="chartAxis">

                        <template #layers>
                            <Grid strokeDasharray="2,2" />
                            <Bar
                                :dataKeys="['name', 'emissions']"
                                :barStyle="{ fill: '#AF006E' }"
                                :gap="20"
                            />
                        </template>
                    </Chart>
                </template>
            </Responsive>
        </VsCol>
    </VsRow>
</template>

<script>
import { VsCol, VsRow } from '@components/elements/grid';
import VsIcon from '@components/elements/icon/Icon.vue';
import VsHeading from '@components/elements/heading/Heading.vue';
import { ref } from 'vue';
import {
    Chart,
    Grid,
    Bar,
    Responsive,
} from 'vue3-charts';
import dataLayerMixin from '@/mixins/dataLayerMixin';

/**
 * @displayName Carbon Form Results
 */
export default {
    name: 'VsCarbonCalculatorResults',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsCol,
        VsRow,
        VsHeading,
        VsIcon,
        Chart,
        Grid,
        Bar,
        Responsive,
    },
    mixins: [
        dataLayerMixin,
    ],
    inject: ['labelsMap'],
    props: {
        /**
         * The total equivalent weight of emissions for the survey, used as the headline figure
         * as well as for working out daily emissions and in the comparison.
         */
        totalKilos: {
            type: Number,
            default: 0,
        },
        /**
         * The weight of emissions specifically related to food
         */
        foodKilos: {
            type: Number,
            default: 0,
        },
        /**
         * The weight of emissions specifically related to transport
         */
        transportKilos: {
            type: Number,
            default: 0,
        },
        /**
         * The weight of emissions specifically related to accommodation
         */
        accommodationKilos: {
            type: Number,
            default: 0,
        },
        /**
         * The number of nights the user is staying, used to calculate per day emissions
         */
        stayDuration: {
            type: Number,
            default: 1,
        },
        /**
         * An array that defines which placeholders in the comparison need to be replaced and what
         * they should be replaced with. Each entry should be an object with a "repl" key and a
         * "divisor" key
         *
         * {
         *      "repl": "xxx",
         *      "divisor": 0.2
         * }
         *
         * In the above case, the substring "xxx" in the comparison will be replaced with the total
         * emissions number / 0.2
         */
        comparisonReplacements: {
            type: Array,
            default: () => [],
        },
        /**
         * Language locale string. Used to determine correct formatting for numbers (decimal
         * delimeter)
         *
         * Example: "en-gb"
         */
        language: {
            type: String,
            default: 'en-gb',
        },
    },
    data() {
        return {
            chartDirection: ref('horizontal'),
            chartAxis: ref({
                primary: {
                    type: 'band',
                },
            }),
            cssProps: `--chart-label: '${ this.labelsMap.kgsOf }'`,
        };
    },
    computed: {
        /**
         * Data object for the vue3-chart
         */
        chartData() {
            return [
                {
                    name: this.labelsMap.transport,
                    emissions: this.transportKilos,
                },
                {
                    name: this.labelsMap.accommodation,
                    emissions: this.accommodationKilos,
                },
                {
                    name: this.labelsMap.food,
                    emissions: this.foodKilos,
                },
            ];
        },
        /**
         * Returns the localised comparison from the labelsmap with actual data interpolated into
         * it. The comparison is a string with one or more placeholders in it which need to be
         * replaced with a number specific to the user's actual data (in the general form of
         * "that's equivalent to 15 full washloads").
         *
         * The exact string that needs to be replaced and the number that should be entered is
         * derived from the comparison replacements object described in props.
         */
        interpolComparison() {
            let baseComparison = this.labelsMap.comparison;

            for (let x = 0; x < this.comparisonReplacements.length; x++) {
                baseComparison = baseComparison.replace(
                    this.comparisonReplacements[x].repl,
                    (this.totalKilos / this.comparisonReplacements[x].divisor)
                        .toLocaleString(this.language, {
                            minimumFractionDigits: 3,
                        }),
                );
            }

            return baseComparison;
        },
        /**
         * Interpolates the per day emissions into a localised string.
         */
        interpolKGsPerDay() {
            return this.labelsMap.kgsPerDay.replace('xxx', this.totalPerDay);
        },
        /**
         * Interpolates the per day success into a localised string.
         */
        interpolPerDaySuccess() {
            return this.labelsMap.perDaySuccess.replace('xxx', this.labelsMap.perDayTarget);
        },
        transportPercent() {
            return (this.transportKilos / this.totalKilos) * 100;
        },
        accommodationPercent() {
            return (this.accommodationKilos / this.totalKilos) * 100;
        },
        foodPercent() {
            return (this.foodKilos / this.totalKilos) * 100;
        },
        totalPerDay() {
            return (this.totalKilos / Math.max(this.stayDuration, 1));
        },
    },
    mounted() {
        this.createDataLayerObject('carbonCompleteEvent', {
            totalEmissions: this.totalKilos,
            totalPerDay: this.totalPerDay,
            travelPercent: this.transportPercent.toFixed(3) || 0,
            accommodationPercent: this.accommodationPercent.toFixed(3) || 0,
            foodPercent: this.foodPercent.toFixed(3) || 0,
        });
    },
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
    .vs-carbon-calculator-results__summary {
        margin-bottom: $spacer-8;
    }

    .vs-carbon-calculator-results__total {
        font-size: $font-size-10;
        font-weight: $font-weight-bold;
        margin-right: $spacer-2;
    }

    .vs-carbon-calculator-results__comp-img {
        display: flex;
        justify-content: center;

        .vs-img {
            height: 8rem;
        }
    }

    .vs-carbon-calculator-results__chart-wrapper {
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

    .vs-carbon-calculator-results__chart {
        margin-bottom: $spacer-6;

        @include media-breakpoint-up(md) {
            margin-bottom: $spacer-10;
        }
    }

    .vs-carbon-calculator-results__unicorn {
        box-shadow: $shadow_card_tight;
        padding: $spacer-8 $spacer-4;
        background-color: $color-yellow-tint-6;
        margin-bottom: $spacer-8;

        .vs-heading {
            margin-top: 0;
        }

        .vs-carbon-calculator-results__unicorn-content {
            margin-bottom: $spacer-0;
        }

        .vs-carbon-calculator-results__unicorn-icon-container {
            display: inline-flex;
            justify-content: center;
            vertical-align: top;
            width: $spacer-10;

            .vs-icon {
                color: $color-pink;
            }
        }

        .vs-carbon-calculator-results__unicorn-content {
            display: inline-block;
            width: calc(100% - $spacer-10);
            vertical-align: top;
        }
    }
</style>
