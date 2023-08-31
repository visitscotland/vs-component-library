<template>
    <VsRow
        data-test="vs-carbon-calculator-results"
    >
        <VsCol cols="12">
            <VsHeading
                level="2"
            >
                {{ title }}
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
                    <p>
                        <span class="vs-carbon-calculator-results__total">
                            {{ totalKilos }}
                        </span>
                        kgs CO2
                    </p>
                </VsCol>
                <VsCol
                    cols="12"
                    md="6"
                    class="vs-carbon-calculator-results__comp-img"
                >
                    <VsImg
                        src="https://placehold.co/150x150"
                    />
                </VsCol>
            </VsRow>
        </VsCol>
        <VsCol
            cols="12"
        >
            <p>{{ interpolKGsPerDay }}</p>
            <p v-if="totalPerDay <= perDayTarget">
                {{ perDaySuccess }}
            </p>
        </VsCol>
        <VsCol
            cols="12"
            class="vs-carbon-calculator-results__comparison"
        >
            <!-- eslint-disable -->
            <div
                v-html="interpolComparison"
            />
            <!-- eslint-enable -->
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
            md="6"
        >
            <VsHeading
                level="3"
            >
                {{ breakdownLabel }}
            </VsHeading>
            <div class="vs-carbon-calculator-results__breakdown">
                <VsIcon
                    name="transport"
                />
                <span
                    class="vs-carbon-calculator-results__breakdown-cat"
                >
                    {{ transportLabel }}
                </span>
                <span
                    class="vs-carbon-calculator-results__breakdown-percent"
                >
                    {{ transportPercent.toFixed(1) }}%
                </span>
            </div>
            <div class="vs-carbon-calculator-results__breakdown">
                <VsIcon
                    name="home"
                />
                <span
                    class="vs-carbon-calculator-results__breakdown-cat"
                >
                    {{ accommodationLabel }}
                </span>
                <span
                    class="vs-carbon-calculator-results__breakdown-percent"
                >
                    {{ accommodationPercent.toFixed(1) }}%
                </span>
            </div>
            <div class="vs-carbon-calculator-results__breakdown">
                <VsIcon
                    name="food"
                />
                <span
                    class="vs-carbon-calculator-results__breakdown-cat"
                >
                    {{ foodLabel }}
                </span>
                <span
                    class="vs-carbon-calculator-results__breakdown-percent"
                >
                    {{ foodPercent.toFixed(1) }}%
                </span>
            </div>
        </VsCol>
        <VsCol
            cols="12"
            class="mt-8"
        >
            <VsCarbonCalculatorTip
                :all-tips="true"
                :top-tip-label="topTipLabel"
                :all-tips-label="allTipsLabel"
            />
        </VsCol>
    </VsRow>
</template>

<script>
import { VsCol, VsRow } from '@components/elements/grid';
import VsIcon from '@components/elements/icon/Icon.vue';
import VsImg from '@components/elements/img/Img.vue';
import VsHeading from '@components/elements/heading/Heading.vue';
import { ref } from 'vue';
import {
    Chart,
    Grid,
    Bar,
    Responsive,
} from 'vue3-charts';
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
        VsIcon,
        VsImg,
        VsHeading,
        VsCarbonCalculatorTip,
        Chart,
        Grid,
        Bar,
        Responsive,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        comparison: {
            type: String,
            default: '',
        },
        comparisonKilos: {
            type: Number,
            default: 0.1,
        },
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
        transportLabel: {
            type: String,
            default: '',
        },
        accommodationLabel: {
            type: String,
            default: '',
        },
        foodLabel: {
            type: String,
            default: '',
        },
        stayDuration: {
            type: Number,
            default: 1,
        },
        perDayTarget: {
            type: Number,
            default: 0,
        },
        perDaySuccess: {
            type: String,
            default: '',
        },
        topTipLabel: {
            type: String,
            default: '',
        },
        allTipsLabel: {
            type: String,
            default: '',
        },
        breakdownLabel: {
            type: String,
            default: '',
        },
        perDayEquivLabel: {
            type: String,
            default: '',
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
        };
    },
    computed: {
        chartData() {
            return [
                {
                    name: this.transportLabel,
                    emissions: this.transportKilos,
                },
                {
                    name: this.accommodationLabel,
                    emissions: this.accommodationKilos,
                },
                {
                    name: this.foodLabel,
                    emissions: this.foodKilos,
                },
            ];
        },
        interpolComparison() {
            const instances = (this.totalKilos / this.comparisonKilos).toFixed(3);

            return this.comparison.replace('xxx', instances);
        },
        interpolKGsPerDay() {
            return this.perDayEquivLabel.replace('xxx', this.totalPerDay);
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
    .vs-carbon-calculator-results__headline {
        text-align: center;
        margin-bottom: $spacer-10;
    }

    .vs-carbon-calculator-results__total {
        display: block;
        font-size: 80px;
        font-weight: $font-weight-bold;
    }

    .vs-carbon-calculator-results__comp-img {
        display: flex;
        justify-content: center;

        .vs-img {
            height: 8rem;
        }
    }

    .vs-carbon-calculator-results__comparison {
        margin-bottom: $spacer-6;

        @include media-breakpoint-up(md) {
            margin-bottom: $spacer-10;
        }
    }

    .vs-carbon-calculator-results__chart-wrapper {
        display: flex;
        justify-content: center;

        > div {
            width: 100%;

            @include media-breakpoint-up(md) {
                width: 50%;
            }
        }
    }

    .vs-carbon-calculator-results__chart {
        margin-bottom: $spacer-6;

        @include media-breakpoint-up(md) {
            margin-bottom: $spacer-10;
        }
    }

    .vs-carbon-calculator-results__breakdown {
        text-align: center;
        padding: $spacer-2 $spacer-0;

        .vs-icon {
            width: 10%;
        }

        .vs-carbon-calculator-results__breakdown-cat {
            width: 70%;
            display: inline-block;
        }

        .vs-carbon-calculator-results__breakdown-percent {
            width: 20%;
            display: inline-block;
        }

        @include media-breakpoint-up(md) {
            text-align: left;
            padding: $spacer-2;

            .vs-icon {
                width: 20%;
            }

            .vs-carbon-calculator-results__breakdown-cat {
                width: 40%
            }

            .vs-carbon-calculator-results__breakdown-percent {
                width: 40%
            }
        }
    }
</style>
