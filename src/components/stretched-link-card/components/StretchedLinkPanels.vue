<template>
    <div class="vs-stretched-link-panels">
        <div
            class="vs-stretched-link-panels__panel vs-stretched-link-panels__panel--days"
            data-test="vs-stretched-link-panel--days"
        >
            <p data-test>
                <span class="vs-stretched-link-panels__days">{{ days }} </span>{{ daysLabel }}
            </p>
        </div>

        <div
            class="vs-stretched-link-panels__panel"
            data-test="vs-stretched-link-panel"
        >
            <VsIcon
                :icon="transport"
                variant="inverse"
                size="sm"
                class="vs-stretched-link-panels__icon"
            />
            <p data-test="vs-stretched-link-panel__icon">
                {{ transportName }}
            </p>
        </div>
    </div>
</template>

<script>
import VsIcon from '@/components/icon/Icon.vue';
/**
 * Panels to show information in the stretched link component
 *
 * @displayName Stretched Link Panels
 */
export default {
    name: 'VsStretchedLinkPanels',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsIcon,
    },
    props: {
        /**
        * Optional prop for number of days
        */
        days: {
            type: String,
            default: '',
        },
        /**
        * Optional prop for transport type (will show a the transport icon if used)
        */
        transport: {
            type: String,
            default: '',
        },
        /**
        * Text to use for 'days' label - to allow for CMS translation
        */
        daysLabel: {
            type: String,
            default: 'days',
        },
        /**
        * Display-friendly transport name
        * to allow for translation
        */
        transportName: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
    .vs-stretched-link-panels {
        position: absolute;
        right: $spacer-100;
        top: $spacer-100;
        display: flex;
        flex-direction: row;

        &__panel {
            width: 55px;
            height: 55px;
            background: $vs-color-background-accent-heather-80;
            margin-left: $spacer-050;
            color: $vs-color-text-inverse;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &--days {
                background: $vs-color-background-highlight;
            }

            p {
                margin-bottom: 0;
                text-align: center;
                line-height: $line_height_xs;
                font-size: $font-size-1;
            }
        }

        &__days {
            font-size: $font-size-6;
            font-family: "Source Sans Pro";
            font-weight: $font-weight-bold;
            display: block;
            margin-bottom: $spacer-025;
        }

        &__icon {
            height: 20px;
            width: auto;
            margin-bottom: $spacer-025;
        }
    }
</style>
