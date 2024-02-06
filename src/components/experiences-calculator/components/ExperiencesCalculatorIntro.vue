<template>
    <div
        class="vs-experiences-calculator-intro"
        data-test="vs-experiences-calculator-intro"
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

import VsHeading from '@components/heading/Heading.vue';

/**
 * @displayName Experiences Form Running Total
 */
export default {
    name: 'VsExperiencesCalculatorIntro',
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
