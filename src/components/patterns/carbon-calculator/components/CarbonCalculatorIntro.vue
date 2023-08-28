<template>
    <div
        class="vs-carbon-calculator-intro"
        data-test="vs-carbon-calculator-intro"
    >
        <VsHeading
            level="2"
        >
            {{ heading }}
        </VsHeading>
        <!--
            @slot Holds introduction copy
            expects html
        -->
        <slot />
    </div>
</template>

<script>

import VsHeading from '@components/elements/heading/Heading.vue';

/**
 * @displayName Carbon Form Running Total
 */
export default {
    name: 'VsCarbonCalculatorIntro',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
    },
    props: {
        heading: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang='scss'>

</style>
