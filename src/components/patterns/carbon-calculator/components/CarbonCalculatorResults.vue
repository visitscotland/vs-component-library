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
        <VsCol
            cols="12"
        >
            <VsRow
                class="vs-carbon-calculator-results__headline"
            >
                <VsCol
                    cols="12"
                    md="6"
                >
                    <p>{{ labelsMap.resultsIntro }}</p>
                    <p>
                        <span class="vs-carbon-calculator-results__total">
                            {{ totalKilos }}
                        </span>
                        {{ labelsMap.kgsOf }}
                    </p>
                </VsCol>
            </VsRow>
        </VsCol>
        <VsCol
            cols="12"
            class="vs-carbon-calculator-results__comparison"
        >
            <!-- eslint-disable -->
            <p
                v-html="interpolComparison"
            />
            <!-- eslint-enable -->
        </VsCol>
        <VsCol
            cols="12"
        >
            <p>{{ interpolKGsPerDay }}</p>
            <p v-if="totalPerDay <= perDayTarget">
                {{ labelsMap.perDaySuccess }}
            </p>
        </VsCol>
        <VsCol>
            <VsHeading
                level="3"
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
        <VsCol
            cols="12"
            class="mt-8"
        >
            <VsCarbonCalculatorTip
                :showing-all-tips="true"
            />
        </VsCol>
    </VsRow>
</template>

<script>
import { VsCol, VsRow } from '@components/elements/grid';
import VsHeading from '@components/elements/heading/Heading.vue';
import { ref } from 'vue';
import {
    Chart,
    Grid,
    Bar,
    Responsive,
} from 'vue3-charts';
import dataLayerMixin from '@/mixins/dataLayerMixin';
import VsCarbonCalculatorTip from './CarbonCalculatorTip.vue';

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
        VsCarbonCalculatorTip,
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
        totalKilos: {
            type: Number,
            default: 0,
        },
        foodKilos: {
            type: Number,
            default: 0,
        },
        foodTip: {
            type: Object,
            default: null,
        },
        transportKilos: {
            type: Number,
            default: 0,
        },
        transportTip: {
            type: Object,
            default: null,
        },
        accommodationKilos: {
            type: Number,
            default: 0,
        },
        accommodationTip: {
            type: Object,
            default: null,
        },
        stayDuration: {
            type: Number,
            default: 1,
        },
        perDayTarget: {
            type: Number,
            default: 0,
        },
        comparisonReplacements: {
            type: Array,
            default: () => [],
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
        interpolComparison() {
            let baseComparison = this.labelsMap.comparison;

            for (let x = 0; x < this.comparisonReplacements.length; x++) {
                baseComparison = baseComparison.replace(
                    this.comparisonReplacements[x].repl,
                    this.totalKilos / this.comparisonReplacements[x].divisor,
                );
            }

            return baseComparison;
        },
        interpolKGsPerDay() {
            return this.labelsMap.kgsPerDay.replace('xxx', this.totalPerDay);
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
            return (this.totalKilos / Math.max(this.stayDuration, 1)).toFixed(3);
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
    .vs-carbon-calculator-results__total {
        font-size: 3rem;
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
            margin-top: $spacer-10;
        }

        > div {
            width: 100%;

            @include media-breakpoint-up(md) {
                width: 50%;
            }
        }

        .chart {
            &::before {
                content: var(--chart-label);
                position: absolute;
                top: 50%;
                text-align: center;
                left: -#{$spacer-8};
                transform: translateY(-50%) rotate(-90deg);

                @include media-breakpoint-up(md) {
                    max-width: 7rem;
                    left: -#{$spacer-11};
                    transform: translateY(-100%);
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
</style>
