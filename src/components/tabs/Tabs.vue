NEW

<template>
    <div
        :class="businessSupportVariant ? 'vs-tabs--bsh' : 'vs-tabs'"
        data-test="vs-tabs"
    >
        <BTabs
            :buisness-support-variant="businessSupportVariant"
            :align="businessSupportVariant ? 'center' : null"
        >
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
    props: {
        businessSupportVariant: {
            type: Boolean,
            deafult: false,
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

            .vs-heading{
                display: none;
            }
        }
    }

    .vs-tabs--bsh {
        .nav-item {
            flex: none;
            align-self: flex-end;
            margin: 0 1em;
        }

        .tab-pane {
            background-color: $vs-color-background-inverse;
            color: $vs-color-text-primary;
            text-align: left;
            border-top: 1px solid $vs-color-border-primary;

            .vs-heading{
                display: none;
            }
        }
    }

@include no-js {
    .vs-tabs, .vs-tabs--bsh{
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
