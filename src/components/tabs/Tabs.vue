NEW

<template>
    <div
        :class="noContainer ? 'vs-tabs--no-container' : 'vs-tabs'"
        data-test="vs-tabs"
    >
        <BTabs
            :no-container="noContainer"
            :align="noContainer ? 'center' : null"
        >
            <!-- @slot default slot for VsTabItems -->
            <slot />
        </BTabs>
    </div>
</template>

<script>
import { BTabs } from 'bootstrap-vue-next';
import { computed } from 'vue';
/**
 * Tabs wrapper used with TabItems.
 *
 * @displayName Tabs
 */
export default {
    name: 'VsTabs',
    status: 'prototype',
    release: '0.0.1',
    components: {
        BTabs,
    },
    /**
     * Provides noContainer prop to be injected to child components
     */
    provide() {
        return {
            noContainer: computed(() => this.noContainer),
        };
    },
    props: {
        /**
         * Changes to a no-container layout.
         * Rounded tabs that are the width of their content,
         * and centered in the tab row.
         * Provided to child components.
         */
        noContainer: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
    .vs-tabs {
        .nav-item {
            flex: auto;
            align-self: flex-end;
        }

        .tab-pane {
            background-color: $vs-color-background-inverse;
            color: $vs-color-text-primary;
            text-align: left;
            border: 1px solid $vs-color-border-primary;
            border-top: 0;

            .vs-heading {
                display: none;
            }
        }
    }

    .vs-tabs--no-container {
        .nav {
            flex-wrap: nowrap;
        }

        .nav-item {
            display: flex;
            margin: $spacer-0 $spacer-025;
            text-wrap: wrap;
            flex-direction: row;
            flex-wrap: nowrap;
        }

        .tab-pane {
            .vs-heading {
                display: none;
            }
        }

        @include media-breakpoint-up(md) {
            .nav-item {
                margin: $spacer-0 $spacer-100;
                flex-grow: unset;
            }

            .tab-pane {
                background-color: $vs-color-background-inverse;
                color: $vs-color-text-primary;
                text-align: left;
                border-top: 1px solid $vs-color-border-primary;
            }
        }
    }

@include no-js {
    .vs-tabs, .vs-tabs--no-container {
        .tab-content > .tab-pane {
            position: relative;
            display: block!important;
            margin-bottom: $spacer-300;
            border: 0;

            .vs-heading {
                display: block;
                text-align: center;
            }
        }

        .nav-tabs {
            display: none;
        }
    }
}
</style>
