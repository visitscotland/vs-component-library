<template>
    <VsButton
        v-bind="$attrs"
        v-b-tooltip="{ placement: position }"
        class="vs-tooltip position-relative"
        :title="title"
    >
        <slot />
    </VsButton>
</template>

<script>
import { vBTooltip } from 'bootstrap-vue-next';
import VsButton from '@/components/button/Button.vue';

/**
 * A tooltip is a short, informative message that appears
 * when a user interacts with an element.
 *
 * @displayName Tooltip
 */

export default {
    name: 'VsTooltip',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsButton,
    },
    directives: {
        'b-tooltip': vBTooltip,
    },
    props: {
        /**
         * The text to display in the tooltip
         */
        title: {
            type: String,
            default: '',
        },
        /**
         * The position of the tooltip
         * `top|right|left|bottom`
         */
        position: {
            type: String,
            default: 'top',
            validator: (value) => value.match(/(top|right|left|bottom)/),
        },
    },
};
</script>
