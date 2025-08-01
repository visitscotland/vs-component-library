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
                :aria-labelledBy="`progress-bar-${compId}`"
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
                    :aria-labelledBy="`progress-bar-${compId}`"
                />
            </BProgress>
        </div>

        <p
            class="vs-progress-bar__label"
            :id="`progress-bar-${compId}`"
            v-if="interpolProgressLabel"
        >
            {{ interpolProgressLabel }}
        </p>
        <p
            class="vs-progress-bar__label"
            :id="`progress-bar-${compId}`"
            v-else
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

import { ref, getCurrentInstance } from 'vue';

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
        /**
         * If set to true, the progress bar is marked as complete and highlighted in green
         */
        isFull: {
            type: Boolean,
            required: false,
        },
        /**
         * Localised string to indicate the current stage of the progress bar. Will be interpolated
         * with the current step (on xxx) and total count (on yyy) to allow for different sentence
         * orders.
         *
         * e.g. "Step xxx of yyy"
         */
        progressLabel: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            compId: null,
        };
    },
    computed: {
        computedClasses() {
            let classes = '';

            if (this.isFull) {
                classes += 'vs-progress-bar--full ';
            }

            if (this.isStepped) {
                classes += 'vs-progress-bar--stepped ';
            }

            return classes;
        },
        /**
         * Interpolates the progress label into a localised string.
         */
        interpolProgressLabel() {
            if (this.progressLabel) {
                let out = this.progressLabel.replace('xxx', this.currentStep);
                out = out.replace('yyy', this.max);
                return out;
            }

            return '';
        },
    },
    mounted() {
        const instance = getCurrentInstance();
        this.compId = ref(instance.uid);
    },
};
</script>

<style lang="scss">
    .vs-progress-bar {
        .progress-bar {
            height: $vs-spacer-100;
            background-color: $vs-color-background-highlight;
            transition: width ease-out .5s;
        }

        .progress {
            width: 100%;
            margin: $vs-spacer-050 $vs-spacer-0 $vs-spacer-050;
            background: $vs-color-background-secondary;
            border-radius: $vs-spacer-050;
            overflow: hidden;
        }

        &--full {
            .progress-bar {
                background-color: $vs-color-background-success;
            }
        }

        &--stepped {
            .vs-progress-bar__stepper {
                display: flex;
                gap: $vs-spacer-050;
            }

            .progress {
                width: auto;
                flex: 1 1 0;
            }
        }
    }
    .vs-progress-bar__label {
        margin-bottom: $vs-spacer-050;
        text-align: left;
        color: $vs-color-text-secondary;
    }
</style>
