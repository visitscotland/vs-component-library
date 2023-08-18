<template>
    <div
        class="vs-progress-bar"
        :class="currentStep === max ? 'vs-progress-bar--full' : ''"
        data-test="vs-progress-bar"
    >
        <BProgress
            :max="max"
        >
            <BProgressBar
                :value="currentStep"
            />
        </BProgress>

        <p
            class="vs-progress-bar__label"
            v-if="currentStep"
        >
            {{ currentStep }} / {{ max }}
        </p>
    </div>
</template>

<script>
import {
    BProgress,
    BProgressBar,
} from 'bootstrap-vue-next';

/**
 * A simple progress bar component
 *
 * @displayName Progress Bar
 */
export default {
    name: 'VsProgressBar',
    status: 'prototype',
    release: '0.1.0',
    components: {
        BProgress,
        BProgressBar,
    },
    props: {
        /**
         * Total number of steps the bar represents
         */
        max: {
            type: Number,
            required: true,
        },
        /**
         * The current step the bar represents
         */
        currentStep: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss">
    .vs-progress-bar {
        .progress-bar {
            height: $spacer-4;
            background-color: $color-theme-primary;
            transition: width ease-out .5s;
        }

        &--full {
            .progress-bar {
                background-color: $color-theme-success;
            }
        }

        .progress {
            width: 100%;
            margin: $spacer-2 $spacer-0 $spacer-4;
            background: $color-gray-tint-7;
            border-radius: $spacer-2;
            overflow: hidden;
        }
    }
    .vs-progress-bar__label {
        margin-bottom: $spacer-2;
        text-align: left;
        color: $color-gray-shade-1;
    }
</style>
