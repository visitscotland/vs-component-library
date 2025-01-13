<template>
    <div
        :class="classes"
        data-test="vs-back-to-top"
    >
        <VsButton
            icon="internal-link"
            iconOnly
            :rounded="false"
            variant="secondary"
            @click="scrollToTop"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import VsButton from '@/components/button/Button.vue';

/** TODO
* Animate button in/out.
* Set button to be visible/not visible instead of moving back down the page.
* Add comments.
* Check that it works on different screen sizes,
* Adjust values when screen resizes?
*/

const buttonFixed = ref(false);
const upperThreshold = 100;
const lowerThreshold = window.innerHeight + 100;

const classes = computed(() => (
    {
        'vs-back-to-top': true,
        'vs-back-to-top--fixed': buttonFixed.value,
    }
));

const scrollToTop = (event) => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });

    // Remove focus from the button.
    event.target.blur();
};

const handleScroll = () => {
    const doc = document.documentElement;
    const scrollY = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);

    if (scrollY > upperThreshold && scrollY < lowerThreshold) {
        buttonFixed.value = true;
    } else {
        buttonFixed.value = false;
    }
};

window.addEventListener('scroll', handleScroll);
</script>

<style lang="scss">
.vs-back-to-top {
    position: absolute;
    right: 0;
    bottom: 0;

    &--fixed {
        position: fixed;
        right: $spacer-100;
        bottom: $spacer-100;
    }
}

@include no-js {
    .vs-back-to-top {
        display: none !important;
    }
}
</style>
