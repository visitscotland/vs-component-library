<template>
    <div
        class="vs-carbon-calculator-intro"
        data-test="vs-carbon-calculator-intro"
    >
        <!--
            @slot Holds introduction copy
            expects html
        -->
        <slot />
    </div>
</template>

<script>

/**
 * @displayName Carbon Form Running Total
 */
export default {
    name: 'VsCarbonCalculatorIntro',
    status: 'prototype',
    release: '0.0.1',
    components: {
    },
};
</script>

<style lang='scss'>

</style>
