<template>
    <VsContainer class="vs-route-finder">
        <VsRow>
            <VsCol
                cols="12"
                md="7"
            >
                <div
                    class="mb-500 vs-route-finder__map-wrapper"
                >
                    <VsMap
                        v-if="!reRenderMap"
                        map-id="routeMap"
                        :is-visible="true"
                        :places="routeFeatures"
                        :is-route-map="routeLoaded"
                        :bounds-data="routeLoaded ? mapBoundsData : baseBoundsData"
                    />
                </div>
            </VsCol>
            <VsCol
                cols="12"
                md="5"
            >
                <VsHeading
                    level="3"
                    heading-style="heading-l"
                >
                    Where would you like to go?
                </VsHeading>
                <div class="mt-100 mb-100">
                    <label for="startingLocation">Starting Location</label>
                    <VsInput
                        field-name="startingLocation"
                        value=""
                        @status-update="updateFilters"
                    />
                </div>
                <div class="mb-100">
                    <label for="activity">Activity</label>
                    <VsSelect
                        field-name="activity"
                        :options="activityOptions"
                        @status-update="updateFilters"
                    />
                </div>
                <div class="mb-100">
                    <label for="distanceUnits">Distance Units</label>
                    <VsSelect
                        field-name="distanceUnits"
                        :options="unitOptions"
                        value="kilometres"
                        @status-update="updateFilters"
                    />
                </div>
                <div class="mb-200">
                    <label for="distance">{{ distanceLabel }}</label>
                    <VsNumberInput
                        field-name="distance"
                        :minimum-number="0"
                        :maximum-number="100"
                        :value="5"
                        @status-update="updateFilters"
                    />
                </div>
                <VsButton
                    @click="loadData"
                    icon="search"
                >
                    Find Route
                </VsButton>
            </VsCol>
        </VsRow>
    </VsContainer>
</template>

<script>
import VsMap from '@/components/map/Map.vue';
import VsButton from '@/components/button/Button.vue';
import VsHeading from '@/components/heading/Heading.vue';
import VsNumberInput from '@/components/number-input/NumberInput.vue';
import VsInput from '@/components/input/Input.vue';
import VsSelect from '@/components/select/Select.vue';
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@/components/grid';

import axios from 'axios';

/**
 * Allows a user to search for a walking or running route based on provided criteria, using
 * a generation service API, and renders it on a map
 *
 * @displayName Route Finder
 */

export default {
    name: 'VsRouteFinder',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsMap,
        VsButton,
        VsNumberInput,
        VsInput,
        VsSelect,
        VsContainer,
        VsRow,
        VsCol,
        VsHeading,
    },
    props: {
        dataUrl: {
            type: String,
            default: 'http://localhost:3000/mock-api-response.json',
        },
    },
    data() {
        return {
            routeLoaded: false,
            routeFeatures: [],
            mapBoundsData: {
                type: 'Route',
            },
            baseBoundsData: {
                type: 'Bounds',
            },
            reRenderMap: false,
            unitOptions: [
                {
                    value: 'kilometres',
                    text: 'Kilometres',
                },
                {
                    value: 'miles',
                    text: 'Miles',
                },
            ],
            activityOptions: [
                {
                    value: '',
                    text: '',
                },
                {
                    value: 'Walk',
                    text: 'walk',
                },
                {
                    value: 'Run',
                    text: 'run',
                },
                {
                    value: 'Cycle',
                    text: 'cycle',
                },
            ],
            filters: {
                startingLocation: '',
                activity: '',
                distance: {
                    value: 5,
                    unit: 'kilometres',
                },
            },
        };
    },
    computed: {
        distanceLabel() {
            if (this.filters.distance.unit === 'kilometres') {
                return 'Distance (km)';
            }

            return 'Distance (mi)';
        },
    },
    methods: {
        /**
         * Fetches route data from the API and passes it on for processing
         */
        loadData() {
            if (this.method === 'post') {
                axios.post(
                    this.dataUrl,
                    this.filters,
                ).then((response) => {
                    this.processData(response.data);
                });
            } else {
                axios.get(this.dataUrl).then((response) => {
                    this.processData(response.data);
                });
            }
        },
        /**
         * Processes the data received from the API into an appropriate format for the map
         * component
         */
        processData(data) {
            const outFeatures = [];

            if (data) {
                for (let x = 0; x < data.coordinates.length - 1; x++) {
                    outFeatures.push({
                        type: 'Feature',
                        properties: {
                            title: `Stage${x}`,
                        },
                        geometry: {
                            type: 'LineString',
                            coordinates: [
                                [
                                    data.coordinates[x].longitude,
                                    data.coordinates[x].latitude,
                                ],
                                [
                                    data.coordinates[x + 1].longitude,
                                    data.coordinates[x + 1].latitude,
                                ],
                            ],
                        },
                    });
                }
            }

            this.routeFeatures = outFeatures;

            this.routeLoaded = true;

            this.reRenderMap = true;

            setTimeout(() => {
                this.reRenderMap = false;
            }, 200);
        },
        /**
         * Called when the value of any input changes, updating values in the main this.form source
         * of truth. The new value is stored, validated, error statuses and conditional field
         * appearance is updated
         *
         * The inputs can't directly v-model variables from the this.form object because reactivity
         * on sub-variables on arrays passed through multiple components is inconsistent and
         * unreliable. Instead each component tracks its own value on an internal variable called
         * inputVal then reports any changes to that value back up to the form.
         */
        updateFilters(data) {
            switch (data.field) {
            case 'distance':
                this.filters.distance.value = data.value;
                break;
            case 'distanceUnits':
                this.filters.distance.unit = data.value;
                break;
            default:
                this.filters[data.field] = data.value;
                break;
            }
        },
    },
};
</script>

<style lang="scss">
    .vs-route-finder {
        .vs-route-finder__map-wrapper {
            min-height: 75vh;
        }

        .vs-map {
            height: 75vh;
            width: 100%
        }
    }
</style>
