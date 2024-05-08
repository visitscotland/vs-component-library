<template>
    <section
        class="vs-itinerary"
        data-test="vs-itinerary"
    >
        <div
            class="fixed-bottom"
            v-show="!isDesktop && withinItineraryMain"
        >
            <div class="d-flex justify-content-center pb-2">
                <VsButton
                    class="vs-itinerary__map-toggle-button"
                    @click="toggleShowMap()"
                    :icon="showMap ? 'list' : 'map'"
                    data-test="vs-itinerary-btn"
                >
                    {{ showMap ? listViewText : mapViewText }}
                </VsButton>
            </div>
        </div>
        <div
            class="vs-itinerary__map-container"
            v-if="isDesktop || showMap"
            data-chromatic="ignore"
        >
            <slot name="map" />
        </div>
        <VsContainer
            class="vs-itinerary__outer-container"
        >
            <VsRow>
                <VsCol
                    cols="12"
                    class="p-0 vs-itinerary__accordion-container"
                >
                    <VsAccordion break-point="lg">
                        <slot name="list" />
                    </VsAccordion>
                </VsCol>
            </VsRow>
        </VsContainer>
    </section>
</template>

<script>
import {
    VsContainer,
    VsRow,
    VsCol,
} from '@components/grid';
import VsButton from '@components/button/Button.vue';
import VsAccordion from '@components/accordion/Accordion.vue';

/**
 * A wrapper component that wraps the itinerary map and list.
 * It controls display of the mobile map toggle on smaller screens.
 *
 * @displayName Itinerary
 */

export default {
    name: 'VsItinerary',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsContainer,
        VsRow,
        VsCol,
        VsAccordion,
        VsButton,
    },
    props: {
        /**
         * Text for 'list view'
         */
        listViewText: {
            type: String,
            default: 'List view',
        },
        /**
         * Text for 'map view'
         */
        mapViewText: {
            type: String,
            default: 'Map view',
        },
    },
    data() {
        return {
            showMap: false,
            isDesktop: false,
            withinItineraryMain: false,
        };
    },
    mounted() {
        /* Design System wrapper affects page scroll detection, so temporary fix is to
        have a condition checking for design system wrapper. */

        const designSystemWrapper = document.querySelector('.vds-example');

        window.addEventListener('resize', this.resizeWidth);

        if (designSystemWrapper === null) {
            window.addEventListener('scroll', this.onScroll);
        } else {
            designSystemWrapper.addEventListener('scroll', this.onScroll);
        }

        this.resizeWidth();
    },
    unmounted() {
        window.removeEventListener('resize', this.resizeWidth);
    },
    methods: {
        resizeWidth() {
            this.isDesktop = window.innerWidth >= 1200;
            this.showMap = window.innerWidth >= 1200;
        },
        onScroll() {
            const bounding = this.$el.getBoundingClientRect();
            const insideStartOfItineraryMain = bounding.top <= (
                window.innerHeight || document.documentElement.clientHeight
            );
            const outsideEndOfItineraryMain = bounding.bottom <= (
                window.innerHeight || document.documentElement.clientHeight
            );
            this.withinItineraryMain = !!(
                insideStartOfItineraryMain && !outsideEndOfItineraryMain
            );
        },
        toggleShowMap() {
            this.showMap = !this.showMap;
        },
    },
};
</script>

<style lang="scss">
.vs-itinerary {
background-color: $vs-color-background-inverse;

    .vs-itinerary__outer-container {
        @include media-breakpoint-down(md) {
            max-width: 100%;
        }

        @include media-breakpoint-up(lg) {
            > .row {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }

    .vs-itinerary__map-container {
        height: 100vh;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1020;

        @include media-breakpoint-down(xl) {
            bottom: 0;
            left: 0;
            right: 0;
        }

        @include media-breakpoint-up(lg) {
            float: right;
            position: -webkit-sticky;
            position: sticky;
            width: 45vw;
        }
    }

    .vs-itinerary__accordion-container {
        @include media-breakpoint-up(lg) {
            max-width: calc(100% - 6.25rem);
        }
    }

    .vs-itinerary__map-toggle-button {
        padding-left: $spacer-4;
        padding-right: $spacer-4;

        svg {
            margin-right: $spacer-3;
        }
    }
}

@include no-js {
    .vs-itinerary__map-toggle-button {
        display: none !important;
    }
}
</style>
