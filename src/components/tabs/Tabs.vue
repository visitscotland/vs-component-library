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

        .nav-link {
            width: 100%;
            background-color: $vs-color-background-neutral;
            color: $vs-color-text;
            font-weight: $font-weight-bold;
            border-width: 1px;
            border-color: $vs-color-background-neutral;
            padding: $spacer-3;
            font-size: $font-size-6;
            transition: $duration-base all;
            transition: all 200ms ease;
            transition-property: background-color, color;

            &:hover:not(.active) {
                border-color: $vs-color-background-neutral;
                background-color: $vs-color-background-hover;
                color: $vs-color-text-inverse;
            }

            &.disabled {
                color: $vs-color-text-disabled;
                background-color: $vs-color-background-disabled;
                border-color: $vs-color-background-disabled;
            }

            @include media-breakpoint-up(sm) {
                padding: $spacer-5;
                font-size: $font-size-7;
            }

            &:focus-visible{
                box-shadow: $vs-box-shadow-focus;
                outline: none;
            }

            &.active{
                position: relative;
                background-color: $vs-color-background-inverse;
                padding: $spacer-5 $spacer-3;

                @include media-breakpoint-up(sm) {
                    padding: $spacer-7 $spacer-5;
                }
            }
        }

        .tab-pane {
            background-color: $vs-color-background-inverse;
            color: $vs-color-text;
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
            margin-bottom: $spacer-9;
            border: 0;
        }

        .nav-tabs {
            display: none;
        }

        .tab-pane {
            .vs-heading {
                display: block;
                margin: 0;
                background-color: $vs-color-background-inverse;
                padding: $spacer-7 $spacer-5;
                color: $vs-color-text;
                text-align: center;
                letter-spacing: normal;
            }
        }
    }
}
</style>
