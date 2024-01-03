<template>
    <div
        class="vs-carbon-calculator-intro"
        data-test="vs-carbon-calculator-intro"
    >
        <VsHeading
            level="2"
        >
            {{ labelsMap.introHeading }}
        </VsHeading>

        <p>{{ labelsMap.introContent }}</p>
    </div>
</template>

<script>

import VsHeading from '@/components/heading/Heading.vue';

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
    inject: ['labelsMap'],
};
</script>

<style lang='scss'>

</style>
