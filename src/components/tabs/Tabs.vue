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
            background-color: $color-secondary-gray-tint-6;
            color: $color-base-text;
            font-weight: $font-weight-bold;
            border-color: $color-secondary-gray-tint-6 $color-secondary-gray-tint-6 $color-white;
            padding: $spacer-3;
            font-size: $font-size-6;

            @include media-breakpoint-up(sm) {
                padding: $spacer-5;
                font-size: $font-size-7;
            }

            &:focus-visible{
                box-shadow: $shadow-button-focus;
                outline: none;
            }

            &.active{
                position: relative;
                z-index: 2;
                background-color: $color-white;
                padding: $spacer-5 $spacer-3;

                @include media-breakpoint-up(sm) {
                    padding: $spacer-7 $spacer-5;
                }
            }
        }

        .tab-pane {
            background-color: $color-white;
            color: $color-base-text;
            text-align: left;

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
        }

        .nav-tabs {
            display: none;
        }

        .tab-pane {
            .vs-heading {
                display: block;
                margin: 0;
                background-color: $color-white;
                padding: $spacer-7 $spacer-5;
                font-family: $font-family-sans-serif;
                color: $color-base-text;
                font-size: $font-size-7;
                font-weight: $font-weight-bold;
                text-align: center;
                letter-spacing: normal;
            }
        }
    }
}
</style>
