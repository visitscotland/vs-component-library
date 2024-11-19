NEW

<template>
    <div
        class="vs-tabs"
        data-test="vs-tabs"
    >
        <BTabs>
            <!-- @slot default slot for VsTabItems -->
            <slot />
        </BTabs>
    </div>
</template>

<script>
import { BTabs } from 'bootstrap-vue-next';
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
};
</script>

<style lang="scss">
    .vs-tabs{
        .nav-item {
            flex: auto;
            align-self: flex-end;
        }

        .tab-pane {
            background-color: $vs-color-background-inverse;
            color: $vs-color-new-text-primary;
            text-align: left;
            border: 1px solid $vs-color-border;
            border-top: 0;

            .vs-heading{
                display: none;
            }
        }
    }

@include no-js {
    .vs-tabs{
        .tab-content > .tab-pane{
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
