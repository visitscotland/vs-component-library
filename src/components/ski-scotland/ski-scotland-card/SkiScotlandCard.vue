<template>
    <div
        class="card vs-ski-scotland-card"
        data-test="vs-ski-scotland-card"
    >
        <div class="vs-ski-scotland-card__img-container">
            <template
                v-if="imgSrc"
            >
                <VsImg
                    :src="imgSrc"
                    :alt="imgAlt"
                    class="vs-ski-scotland-card__img"
                    data-test="vs-ski-scotland-card__img"
                />
            </template>
        </div>
        <div class="card-body">
            <VsHeading
                level="3"
                heading-style="heading-m"
            >
                <!--
                    @slot Slot for ski centre name
                    Expects text
                -->
                <slot name="centre-name" />
            </VsHeading>
            <div
                class="text-center pb-200 position-relative"
                v-if="jsDisabled || isLoading || displayError"
            >
                <template v-if="!jsDisabled && isLoading">
                    <VsLoadingSpinner class="mb-100 d-block" />
                    <!--
                        @slot Slot for data loading message
                        Expects text
                    -->
                    <slot name="data-loading" />
                </template>
                <VsWarning
                    size="small"
                    data-test="vs-ski-scotland-card__error"
                    v-if="!jsDisabled && displayError"
                >
                    <!--
                        @slot Slot for data unavailable message
                        Expects text
                    -->
                    <slot name="data-unavailable" />
                </VsWarning>
                <template v-if="jsDisabled">
                    <VsWarning
                        size="small"
                        data-test="vs-ski-scotland-card__js-disabled"
                    >
                        <!--
                            @slot Slot for JS required message
                            Expects text
                        -->
                        <slot name="js-required" />
                    </VsWarning>
                </template>
            </div>
            <VsTable
                :table-caption="runsLiftsStatusLabel"
                v-if="!jsDisabled && !isLoading && !displayError"
            >
                <VsTableHead>
                    <VsTableHeaderCell>
                        <span data-test="vs-ski__status-label">
                            {{ statusLabel }}
                        </span>
                    </VsTableHeaderCell>
                    <VsTableHeaderCell
                        v-if="runs.length"
                    >
                        <span data-test="vs-ski__runs-label">
                            {{ runsLabel }}
                        </span>
                    </VsTableHeaderCell>
                    <VsTableHeaderCell>
                        <span data-test="vs-ski__lifts-label">
                            {{ liftsLabel }}
                        </span>
                    </VsTableHeaderCell>
                </VsTableHead>
                <VsTableBody>
                    <VsTableRow>
                        <VsTableDataCell>
                            <VsIcon
                                icon="fa-regular fa-check"
                                size="xs"
                                class="me-050 fa-fw"
                            />
                            <span data-test="vs-ski__open-label">
                                {{ summaryOpenLabel }}
                            </span>
                        </VsTableDataCell>
                        <VsTableDataCell
                            v-if="runs.length"
                        >
                            {{ statusSummary.runs.open }}/{{ runs.length }}
                        </VsTableDataCell>
                        <VsTableDataCell>
                            {{ statusSummary.lifts.open }}/{{ lifts.length }}
                        </VsTableDataCell>
                    </VsTableRow>
                    <VsTableRow
                        v-if="statusSummary.runs.limitedPatrol
                            || statusSummary.lifts.limitedPatrol"
                    >
                        <VsTableDataCell>
                            <VsIcon
                                icon="fa-regular fa-ski-boot-ski"
                                size="xs"
                                class="me-050 fa-fw"
                            />
                            <span data-test="vs-ski__limited-patrol-label">
                                {{ summaryLimitedPatrolLabel }}
                            </span>
                        </VsTableDataCell>
                        <VsTableDataCell
                            v-if="runs.length"
                        >
                            {{ statusSummary.runs.limitedPatrol }}/{{ runs.length }}
                        </VsTableDataCell>
                        <VsTableDataCell>
                            {{ statusSummary.lifts.limitedPatrol }}/{{ lifts.length }}
                        </VsTableDataCell>
                    </VsTableRow>
                    <VsTableRow>
                        <VsTableDataCell>
                            <VsIcon
                                icon="fa-regular fa-timer"
                                size="xs"
                                class="me-050 fa-fw"
                            />
                            <span data-test="vs-ski__opening-label">
                                {{ summaryOpeningLabel }}
                            </span>
                        </VsTableDataCell>
                        <VsTableDataCell
                            v-if="runs.length"
                        >
                            {{ statusSummary.runs.opening }}/{{ runs.length }}
                        </VsTableDataCell>
                        <VsTableDataCell>
                            {{ statusSummary.lifts.opening }}/{{ lifts.length }}
                        </VsTableDataCell>
                    </VsTableRow>
                    <VsTableRow>
                        <VsTableDataCell>
                            <VsIcon
                                icon="fa-regular fa-ban"
                                size="xs"
                                class="me-050 fa-fw"
                            />
                            <span data-test="vs-ski__closed-label">
                                {{ summaryClosedLabel }}
                            </span>
                        </VsTableDataCell>
                        <VsTableDataCell
                            v-if="runs.length"
                        >
                            {{ statusSummary.runs.closed }}/{{ runs.length }}
                        </VsTableDataCell>
                        <VsTableDataCell>
                            {{ statusSummary.lifts.closed }}/{{ lifts.length }}
                        </VsTableDataCell>
                    </VsTableRow>
                    <VsTableRow
                        v-if="statusSummary.runs.onHold || statusSummary.lifts.onHold"
                    >
                        <VsTableDataCell>
                            <VsIcon
                                icon="fa-regular fa-hourglass"
                                size="xs"
                                class="me-050 fa-fw"
                            />
                            <span data-test="vs-ski__on-hold-label">
                                {{ summaryOnHoldLabel }}
                            </span>
                        </VsTableDataCell>
                        <VsTableDataCell
                            v-if="runs.length"
                        >
                            {{ statusSummary.runs.onHold }}/{{ runs.length }}
                        </VsTableDataCell>
                        <VsTableDataCell>
                            {{ statusSummary.lifts.onHold }}/{{ lifts.length }}
                        </VsTableDataCell>
                    </VsTableRow>
                </VsTableBody>
                <VsTableFooter>
                    <VsTableRow>
                        <VsTableDataCell
                            colspan="3"
                            role="cell"
                        >
                            <span data-test="vs-ski__last-updated-label">
                                {{ lastUpdatedLabel }}: {{ lastUpdate }}
                            </span>
                        </VsTableDataCell>
                    </VsTableRow>
                </VsTableFooter>
            </VsTable>

            <VsButton
                variant="secondary"
                :href="pisteMapLink"
                class="mb-050"
                :disabled="!pisteMapLink ? true : false"
            >
                {{ pisteMapLabel }}
            </VsButton>

            <VsButton :href="moreDetailsLink">
                {{ moreDetailsLabel }}
            </VsButton>
        </div>
    </div>
</template>

<script>
import VsImg from '@/components/img/Img.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsIcon from '@/components/icon/Icon.vue';
import VsButton from '@/components/button/Button.vue';
import VsWarning from '@/components/warning/Warning.vue';
import VsLoadingSpinner from '@/components/loading-spinner/LoadingSpinner.vue';
import VsTable from '@/components/table/Table.vue';
import VsTableHead from '@/components/table/components/TableHead.vue';
import VsTableHeaderCell from '@/components/table/components/TableHeaderCell.vue';
import VsTableBody from '@/components/table/components/TableBody.vue';
import VsTableRow from '@/components/table/components/TableRow.vue';
import VsTableDataCell from '@/components/table/components/TableDataCell.vue';
import VsTableFooter from '@/components/table/components/TableFooter.vue';
import axios from 'axios';

/**
 * The ski scotland card component displays ski run status information for a specific
 * ski resort. It is intended to be used in a grid with other
 *
 * @displayName Ski Scotland Card
 */
export default {
    name: 'VsSkiScotlandCard',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsImg,
        VsHeading,
        VsIcon,
        VsWarning,
        VsLoadingSpinner,
        VsButton,
        VsTable,
        VsTableHead,
        VsTableHeaderCell,
        VsTableBody,
        VsTableRow,
        VsTableDataCell,
        VsTableFooter,
    },
    props: {
        /**
        * The url that the centre's summary information should be retrieved from for display
        */
        centreInfoUrl: {
            type: String,
            default: '',
        },
        /**
         * Locale string determined by the language selected on the site. Used to localise
         * the month in getLastUpdated
         */
        locale: {
            type: String,
            default: 'en-gb',
        },
        /**
         * Determines how long the request should wait for a response from the api before
         * giving up and displaying an error. Should be provided in milliseconds.
         */
        timeoutDuration: {
            type: Number,
            default: 30000,
        },
        /**
         * Localisable label, translation of "last updated" for status tables
         */
        lastUpdatedLabel: {
            type: String,
            default: 'Last Updated',
        },
        /**
         * Localisable label, translation of "lifts" for status tables
         */
        liftsLabel: {
            type: String,
            default: 'Lifts',
        },
        /**
         * Localisable label, translation of "runs" for status tables
         */
        runsLabel: {
            type: String,
            default: 'Runs',
        },
        /**
         * Localisable label, translation of "run/lift status" for the full
         * report
         */
        runsLiftsStatusLabel: {
            type: String,
            default: 'Run/Lift Status',
        },
        /**
         * Localisable label, translation of "status" for status tables
         */
        statusLabel: {
            type: String,
            default: 'Status',
        },
        /**
         * Localisable label, translation of "closed" for the summary table
         */
        summaryClosedLabel: {
            type: String,
            default: 'Closed',
        },
        /**
         * Localisable label, translation of "open" for the summary table
         */
        summaryOpenLabel: {
            type: String,
            default: 'Open',
        },
        /**
         * Localisable label, translation of "opening" for the summary table
         */
        summaryOpeningLabel: {
            type: String,
            default: 'Opening',
        },
        /**
         * Localisable label, translation of "limited patrol" for the summary table
         */
        summaryLimitedPatrolLabel: {
            type: String,
            default: 'Limited Patrol',
        },
        /**
         * Localisable label, translation of "on hold" for the summary table
         */
        summaryOnHoldLabel: {
            type: String,
            default: 'On Hold',
        },
        /**
        * The image to use in the card
        */
        imgSrc: {
            required: true,
            type: String,
        },
        /**
        * The image alt text to use in the card
        */
        imgAlt: {
            type: String,
            default: '',
        },
        /**
        * Localisable label, translation of "view piste map" for the
        * card links
        */
        pisteMapLabel: {
            type: String,
            default: 'View Piste Map',
        },
        /**
        * Localisable label, translation of "more details" for the
        * card links
        */
        moreDetailsLabel: {
            type: String,
            default: 'More Details',
        },
        /**
        * An href pointing to the piste map for the ski centre
        */
        pisteMapLink: {
            type: String,
            default: '',
        },
        /**
        * An href pointing to the ski status page for the ski centre
        */
        moreDetailsLink: {
            type: String,
            required: true,
            default: '#',
        },
    },
    data() {
        return {
            statusSummary: {
                runs: {
                    open: 0,
                    opening: 0,
                    closed: 0,
                    onHold: 0,
                    limitedPatrol: 0,
                },
                lifts: {
                    open: 0,
                    opening: 0,
                    closed: 0,
                    onHold: 0,
                    limitedPatrol: 0,
                },
            },
            runs: [],
            lifts: [],
            lastUpdate: '',
            jsDisabled: true,
            isLoading: true,
            displayError: false,
        };
    },
    mounted() {
        if (this.centreInfoUrl) {
            this.retrieveCentreInfo();
        }

        // If component successfully mounted, declare js is enabled to hide the warning
        // from the user
        this.jsDisabled = false;
    },
    methods: {
        /**
         * Invoked when mounted, retrieves ski status info from the appropriate slope API
         */
        retrieveCentreInfo() {
            const errorTimeout = setTimeout(() => {
                this.displayError = true;
            }, this.timeoutDuration);

            axios.get(this.centreInfoUrl)
                .then((response) => {
                    const data = this.cleanData(response.data);
                    this.processLifts(data.lifts);
                    if (data.runs) {
                        this.processRuns(data.runs);
                    }
                    this.processLastUpdate(data.lastUpdate);
                    this.isLoading = false;
                    clearTimeout(errorTimeout);
                })
                .catch(() => {
                    this.runStatusInfo = null;
                    this.displayError = true;
                    this.isLoading = false;
                    clearTimeout(errorTimeout);
                });
        },
        // Tidy up small formatting differences between Cairngorms and SkiScotland
        // data feeds
        cleanData(data) {
            const output = {
                contact: data.contact,
                report: data.report,
            };

            if (data.snowReport) {
                // Cairngorms formatting
                output.lastUpdate = data.snowReport.lastupdate;
                output.lifts = data.lifts.sector.items;
                output.runs = data.runs.items;
                this.isCairngorms = true;
            } else {
                // SkiScotland formatting
                output.lastUpdate = data.lastupdate;
                [output.lifts] = data.lift.sectors;
                output.lifts = output.lifts.lifts;

                // Glenshee and the Lecht don't have any run data, just lifts
                if (data.run.areas) {
                    // Some of the sites (Nevis Range) return multiple areas, some runs appear in
                    // multiple areas and some are only in one so we have to join them, then filter
                    // out dupes.
                    const runs = data.run.areas
                        .map((area) => area.runs)
                        .reduce((pre, cur) => pre.concat(cur))
                        .filter((value, index, self) => index === self.findIndex((t) => (
                            t.name === value.name
                        )));

                    output.runs = runs;
                }
            }

            return output;
        },
        processLastUpdate(lastUpdate) {
            const event = new Date(
                lastUpdate.year,
                parseInt(lastUpdate.month, 10) - 1,
                lastUpdate.day,
            );
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            const formattedDate = event.toLocaleDateString(this.locale, options);
            this.lastUpdate = `${lastUpdate.hour24}:${lastUpdate.minute} - ${formattedDate}`;
        },
        processLifts(lifts) {
            for (let x = 0; x < lifts.length; x++) {
                switch (lifts[x].status) {
                case '4':
                case 4:
                    this.statusSummary.lifts.onHold += 1;
                    break;
                case '3':
                case 3:
                    this.statusSummary.lifts.limitedPatrol += 1;
                    break;
                case '2':
                case 2:
                    this.statusSummary.lifts.opening += 1;
                    break;
                case '1':
                case 1:
                    this.statusSummary.lifts.open += 1;
                    break;
                default:
                    this.statusSummary.lifts.closed += 1;
                    break;
                }
            }

            this.lifts = lifts;
        },
        processRuns(runs) {
            for (let x = 0; x < runs.length; x++) {
                switch (runs[x].status) {
                case '4':
                case 4:
                    this.statusSummary.runs.onHold += 1;
                    break;
                case '3':
                case 3:
                    this.statusSummary.runs.limitedPatrol += 1;
                    break;
                case '2':
                case 2:
                    this.statusSummary.runs.opening += 1;
                    break;
                case '1':
                case 1:
                    this.statusSummary.runs.open += 1;
                    break;
                default:
                    this.statusSummary.runs.closed += 1;
                    break;
                }
            }

            this.runs = runs;
        },
    },
};
</script>

<style lang="scss">
    .vs-ski-scotland-card {
        background: $vs-elevation-surface-raised;
        box-shadow: $vs-elevation-shadow-raised;
        border: none;
        border-radius: $border_radius_xl;
        overflow: hidden;
        margin-bottom: $spacer-300;
        height: calc(100% - #{$spacer-300});

        .vs-ski-scotland-card__img-container {
            width: 100%;
            max-width: 100%;
            position: relative;
            aspect-ratio: 2/1;

            @supports not (aspect-ratio: 2/1) {
                padding-bottom: 50%;
            }
        }

        .vs-ski-scotland-card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            align-self: flex-start;
            flex-shrink: 0; // IE11 fix, prevents image vertical stretching
        }

        .card-body {
            position: relative;
            padding: $spacer-100 $spacer-100 $spacer-600;

            @include media-breakpoint-up(lg) {
                padding-bottom: $spacer-400;
            }
        }

        .vs-heading {
            margin-top: $spacer-0;
        }

        .vs-button {
            display: block;
            width: 100%;
        }
    }

</style>
