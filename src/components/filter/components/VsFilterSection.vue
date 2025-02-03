<template>
    <div
        class="vs-filter-section"
        data-test="vs-filter-section"
    >
        <!-- @slot default slot for the filter section items -->
        <slot />

        <!-- if group = "free/online/etc" use section -->
         <!-- If group = "section" use details component -->
    </div>
</template>

<script setup>
const props = defineProps({
    groupHeading: {
        type: String,
        default: undefined,
    },
});
</script>

<style lang="scss">
.vs-filter-section {
    display: flex;
    flex-direction: column;

    &:not(.vs-details .vs-filter-section) {
        border-bottom: solid 1px $vs-color-border-secondary;
        padding: $spacer-075 $spacer-125;
    }
}
</style>
