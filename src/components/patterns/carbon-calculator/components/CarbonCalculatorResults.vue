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
                    cols="6"
                >
                    <p>
                        <span class="vs-carbon-calculator-results__total">
                            {{ totalKilos }}
                        </span>
                        kgs CO2
                    </p>
                </VsCol>
                <VsCol
                    cols="6"
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
            <p>That's equivalent to {{ totalPerDay }} kgs CO2 per day!</p>
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
            cols="12"
            md="6"
        >
            <VsHeading
                level="3"
            >
                Your CO2 Breakdown
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
            />
        </VsCol>
    </VsRow>
</template>

<script>
import { VsCol, VsRow } from '@components/elements/grid';
import VsIcon from '@components/elements/icon/Icon.vue';
import VsImg from '@components/elements/img/Img.vue';
import VsHeading from '@components/elements/heading/Heading.vue';
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
    },
    computed: {
        chartData() {
            return {
                labels: [
                    'Transport',
                    'Accommodation',
                    'Food & Drink',
                ],
                datasets: [
                    {
                        data: [
                            this.transportKilos,
                            this.accommodationKilos,
                            this.foodKilos,
                        ],
                        backgroundColor: [
                            '#EBBFDB',
                            '#D373AF',
                            '#7A004D',
                        ],
                    },
                ],
            };
        },
        options() {
            return {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                    },
                },
            };
        },
        interpolComparison() {
            const instances = (this.totalKilos / this.comparisonKilos).toFixed(3);

            return this.comparison.replace('xxx', instances);
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
            return (this.totalKilos / this.stayDuration).toFixed(3);
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
        margin-bottom: $spacer-10;
    }

    .vs-carbon-calculator-results__chart {
        margin-top: $spacer-8;

        @include media-breakpoint-up(md) {
            margin-top: $spacer-0;
        }
    }

    .vs-carbon-calculator-results__breakdown {
        padding: $spacer-2;

        .vs-icon {
            width: 10%;
        }

        .vs-carbon-calculator-results__breakdown-cat {
            width: 40%;
            display: inline-block;
        }

        .vs-carbon-calculator-results__breakdown-percent {
            width: 40%;
            display: inline-block;
        }
    }
</style>
