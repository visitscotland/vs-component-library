<template>
    <div
        class="vs-map-with-sidebar-buttons"
        :class="filterCount !== null ? 'vs-map-with-sidebar-buttons--filters' : ''"
        data-test="vs-map-with-sidebar-buttons"
    >
        <template v-if="filterCount !== null">
            <VsButton
                class="vs-map-with-sidebar-buttons__clear-filters"
                data-test="vs-map-with-sidebar-buttons__clear-filters"
                variant="secondary"
                size="sm"
                @click="clearFiltersClick"
            >
                {{ clearFiltersText }}
            </VsButton>

            <VsButton
                class="vs-map-with-sidebar-buttons__filters"
                data-test="vs-map-with-sidebar-buttons__filters"
                variant="secondary"
                icon="filters"
                size="sm"
                @click="filtersClick"
            >
                {{ filterCount }} {{ filtersAppliedText }}
            </VsButton>
        </template>

        <template v-else>
            <VsButton
                block
                :href="contentData.properties.link.link"
                data-test="vs-map-with-sidebar-buttons__discover"
            >
                {{ contentData.properties.link.label }}
            </VsButton>

            <VsButton
                v-if="websiteDataExists"
                :href="contentData.properties.website.link"
                block
                target="_blank"
                rel="noopener noreferrer"
                data-test="vs-map-with-sidebar-buttons__website"
            >
                {{ contentData.properties.website.label }}
            </VsButton>
        </template>
    </div>
</template>

<script>
import VsButton from '@/components/button/Button.vue';

/**
 * Renders link buttons for a map place
 *
 * @displayName Main Map Wrapper Buttons
 */
export default {
    name: 'VsMapWithSidebarButtons',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    inject: [
        'filtersAppliedText',
        'clearFiltersText',
    ],
    props: {
        /**
         * Data for component content
         */
        contentData: {
            type: Object,
            required: true,
        },
        /**
         * If content is filtered by subcategory
         */
        filterCount: {
            type: Number,
            default: null,
        },
    },
    computed: {
        websiteDataExists() {
            if (typeof this.contentData.properties.website !== 'undefined'
                && this.contentData.properties.website.link
                    !== this.contentData.properties.link.link) {
                return true;
            }

            return false;
        },
    },
    methods: {
        filtersClick() {
            this.$parent.$emit('set-stage', 0);
        },
        clearFiltersClick() {
            this.$emit('clear-filters');
        },
    },
};
</script>

<style lang="scss">
    .vs-map-with-sidebar-buttons {
        position: sticky;
        bottom: 0;
        padding: $spacer-4 0;
        width: 100%;
        background: $color-white;
        text-align: center;
        box-shadow: 0px -12px 10px -10px #c69fbc;

        @include media-breakpoint-up(lg) {
            padding: $spacer-4;
        }

        &--filters {
            display: flex;
            justify-content: space-between;

            .vs-button:first-of-type {
                margin-right: $spacer-4;
            }
        }
    }
</style>
