<template>
    <div
        class="vs-progress-bar"
        :class="computedClasses"
        data-test="vs-progress-bar"
    >
        <BProgress
            v-if="!isStepped || max > 5"
            :max="max"
        >
            <BProgressBar
                :value="currentStep"
            />
        </BProgress>

        <div
            v-if="isStepped && max <= 5"
            class="vs-progress-bar__stepper"
        >
            <BProgress
                v-for="index in max"
                :key="index"
                :max="1"
            >
                <BProgressBar
                    :value="(index <= currentStep) ? 1 : 0"
                />
            </BProgress>
        </div>

        <p
            class="vs-progress-bar__label"
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
        /**
         * If set to true, instead of a single incremental progress bar, the component will
         * display as a series of discrete blocks
         */
        isStepped: {
            type: Boolean,
            required: false,
        },
    },
    computed: {
        computedClasses() {
            let classes = '';

            if (this.currentStep === this.max) {
                classes += 'vs-progress-bar--full ';
            }

            if (this.isStepped) {
                classes += 'vs-progress-bar--stepped ';
            }

            return classes;
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

        .progress {
            width: 100%;
            margin: $spacer-2 $spacer-0 $spacer-4;
            background: $color-gray-tint-7;
            border-radius: $spacer-2;
            overflow: hidden;
        }

        &--full {
            .progress-bar {
                background-color: $color-theme-success;
            }
        }

        &--stepped {
            .vs-progress-bar__stepper {
                display: flex;
                gap: $spacer-2;
            }

            .progress {
                width: auto;
                flex: 1 1 0;
            }
        }
    }
    .vs-progress-bar__label {
        margin-bottom: $spacer-2;
        text-align: left;
        color: $color-gray-shade-1;
    }
</style>
