<template>
    <div class="vs-itinerary-tips position-relative my-175">
        <div class="vs-itinerary-tips__text">
            <slot name="text" />
        </div>
        <div class="vs-itinerary-tips__svg position-absolute">
            <slot name="svg" />
        </div>
    </div>
</template>

<script>
/**
 * Itinerary tips that optionally display within an itinerary stop
 *
 * @displayName Itinerary Tips
 */

export default {
    name: 'VsItineraryTips',
    status: 'prototype',
    release: '0.0.1',
    components: {
    },
    props: {
    },
};
</script>

<style lang="scss">
.vs-itinerary-tips {
    box-shadow: $vs-elevation-shadow-raised;
    padding: $spacer-100 $spacer-100 $spacer-100 $spacer-300;
}
.vs-itinerary-tips__text {
    p:last-of-type {
        margin-bottom: 0;
    }
}
.vs-itinerary-tips__svg {
    left: -10px;
    bottom: -5px;
}
</style>
