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
                            {{ totalTonnes.toFixed(3) }}
                        </span>
                        Tonnes CO2
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
                    Transport
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
                    Accomodation
                </span>
                <span
                    class="vs-carbon-calculator-results__breakdown-percent"
                >
                    {{ accomodationPercent.toFixed(1) }}%
                </span>
            </div>
            <div class="vs-carbon-calculator-results__breakdown">
                <VsIcon
                    name="leaf"
                />
                <span
                    class="vs-carbon-calculator-results__breakdown-cat"
                >
                    Experiences
                </span>
                <span
                    class="vs-carbon-calculator-results__breakdown-percent"
                >
                    {{ experiencesPercent.toFixed(1) }}%
                </span>
            </div>
            <div class="vs-carbon-calculator-results__breakdown">
                <VsIcon
                    name="food"
                />
                <span
                    class="vs-carbon-calculator-results__breakdown-cat"
                >
                    Food
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
        comparisonTonnes: {
            type: Number,
            default: 0.1,
        },
        totalTonnes: {
            type: Number,
            default: 0,
        },
        foodTonnes: {
            type: Number,
            default: 0,
        },
        foodTip: {
            type: Object,
            default: null,
        },
        transportTonnes: {
            type: Number,
            default: 0,
        },
        transportTip: {
            type: Object,
            default: null,
        },
        accomodationTonnes: {
            type: Number,
            default: 0,
        },
        accomodationTip: {
            type: Object,
            default: null,
        },
        experiencesTonnes: {
            type: Number,
            default: 0,
        },
        experiencesTip: {
            type: Object,
            default: null,
        },
    },
    computed: {
        chartData() {
            return {
                labels: [
                    'Transport',
                    'Accomodation',
                    'Experiences',
                    'Food & Drink',
                ],
                datasets: [
                    {
                        data: [
                            this.transportTonnes,
                            this.accomodationTonnes,
                            this.experiencesTonnes,
                            this.foodTonnes,
                        ],
                        backgroundColor: [
                            '#EBBFDB',
                            '#D373AF',
                            '#BB2684',
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
            const instances = (this.totalTonnes / this.comparisonTonnes).toFixed(3);

            return this.comparison.replace('xxx', instances);
        },
        transportPercent() {
            return (this.transportTonnes / this.totalTonnes) * 100;
        },
        accomodationPercent() {
            return (this.accomodationTonnes / this.totalTonnes) * 100;
        },
        experiencesPercent() {
            return (this.experiencesTonnes / this.totalTonnes) * 100;
        },
        foodPercent() {
            return (this.foodTonnes / this.totalTonnes) * 100;
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
