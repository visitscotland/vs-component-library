<template>
    <div
        class="vs-experiences-calculator-intro"
        data-test="vs-experiences-calculator-intro"
    >
        <VsImg
            :src="labelsMap.introImg"
            class="vs-experiences-calculator-intro__img mb-6"
        />
        <VsHeading level="2">
            {{ labelsMap.introHeading }}
        </VsHeading>

        <p>{{ labelsMap.introContent }}</p>
    </div>
</template>

<script>

import VsHeading from '@components/heading/Heading.vue';
import VsImg from '@components/img/Img.vue';

/**
 * @displayName Experiences Form Running Total
 */
export default {
    name: 'VsExperiencesCalculatorIntro',
    status: 'prototype',
    release: '0.0.1',
    components: {
        VsHeading,
        VsImg,
    },
    inject: ['labelsMap'],
};
</script>

<style lang='scss'>

.vs-experiences-calculator-intro {
    width: 100%;
}

</style>
